import express, { NextFunction, Request, Response } from "express";

import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { MenuRouter } from "./resources/menu/menu.router";
import { DishRouter} from './resources/dish/dish.router';
import { CategoryRouter } from './resources/category/category.router';
import { logger, exceptionsHandler } from "./middleware";
import morgan from "morgan";
import AppDataSource from "./common/appDataSource";

dotenv.config();
const app: express.Application = express();

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(morgan('[:date[Europe/Minsk]] :method :url :status :response-time ms :body', {
  stream: { write: message => logger.http(message) }
}));

app.use(exceptionsHandler);

process.on('unhandledRejection', (error: Error) => logger.error(error));
process.on('uncaughtException', (error: Error) => logger.error(error));

app.use('/menus', MenuRouter);
app.use('/dishes', DishRouter);
app.use('/categories', CategoryRouter);

export default app
