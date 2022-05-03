import { NextFunction, Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import { MenuRouter } from "./resources/menu/menu.router";
import { DishRouter} from './resources/dish/dish.router';
import { CategoryRouter } from './resources/category/category.router';
import dotenv from 'dotenv';

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

app.use('/menus', MenuRouter);
app.use('/dishes', DishRouter);
app.use('/categories', CategoryRouter);

export default app
