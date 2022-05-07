import express, { NextFunction, Request, Response } from "express";

import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { MenuRouter } from "./resources/menu/menu.router";
import { DishRouter} from './resources/dish/dish.router';
import { CategoryRouter } from './resources/category/category.router';
import morgan from "morgan";
import path from "path";
import moment from "moment-timezone";
import winston, { format } from "winston";

dotenv.config();

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

const logger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'error',
      format: winston.format.printf(info => `error: [${moment.utc(new Date().toUTCString()).tz("Europe/Minsk").format('DD.MM.YYYY HH:mm:ss')}]: ${info.message}`),
      filename: path.join(__dirname, `${moment.utc(new Date().toUTCString()).tz("Europe/Minsk").format('DD.MM.YYYY')}_errors.log`),
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5
    }),
    new winston.transports.File({
      level: 'http',
      format: format.simple(),
      filename: path.join(__dirname, `${moment.utc(new Date().toUTCString()).tz("Europe/Minsk").format('DD.MM.YYYY')}.log`),
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5
    })
  ],
  exitOnError: false
});

morgan.token('date', (_req: Request, _res: Response, tz: string | number | boolean | undefined) => {
  return moment().tz(<string>tz).format('DD.MM.YYYY HH:mm:ss');
})
morgan.token('body', (req: Request) => '\n' + JSON.stringify(req.body, null, 2));
app.use(morgan('[:date[Europe/Minsk]] :method :url :status :response-time ms :body', {
  stream: { write: message => logger.http(message) }
}));

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    return next();
  }
  res.status(500).send('500: Internal server error');
});

app.use('/menus', MenuRouter);
app.use('/dishes', DishRouter);
app.use('/categories', CategoryRouter);

process.on('unhandledRejection', (error: Error) => {
  logger.log('error', error);
});

process.on('uncaughtException', (error: Error) => {
  logger.log('error', error);
});

export default app
