import winston, { format } from "winston";
import moment from "moment-timezone";
import path from "path";
import morgan from "morgan";
import { Request, Response } from "express";

export const logger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'error',
      format: winston.format.printf(info => `error: [${moment.utc(new Date().toUTCString()).tz("Europe/Minsk").format('DD.MM.YYYY HH:mm:ss')}]: ${info.message}`),
      filename: path.join(path.join(__dirname, "../logs"), `${moment.utc(new Date().toUTCString()).tz("Europe/Minsk").format('DD.MM.YYYY')}_errors.log`),
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5
    }),
    new winston.transports.File({
      level: 'http',
      format: format.simple(),
      filename: path.join(path.join(__dirname, "../logs"), `${moment.utc(new Date().toUTCString()).tz("Europe/Minsk").format('DD.MM.YYYY')}.log`),
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5
    }),
  ],
  exitOnError: false
})

winston.loggers.add('default', logger)

morgan.token('date', (_req: Request, _res: Response, tz: string | number | boolean | undefined) => {
  return moment().tz(<string>tz).format('DD.MM.YYYY HH:mm:ss')
})

morgan.token('body', (req: Request) => '\n' + JSON.stringify(req.body, null, 2))
