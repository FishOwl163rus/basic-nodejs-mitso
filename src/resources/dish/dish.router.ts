import { Request, Response, Router } from "express";
import dishService from "./dish.service";
import { Dish } from "./dish.model";

const router: Router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const menus = await dishService.getAll();
  res.json(menus);
});

router.route('/').post(async (req: Request, res: Response) => {
  const {categoryId, description, title, photo, isPublish, ingredients, price} = req.body
  await dishService.insertNew(new Dish(
    categoryId, description, title, photo, isPublish, ingredients, price
  ));
  res.status(200).end();
});

router.route('/:dishId').get(async (req: Request, res: Response) => {
  const menus = await dishService.getById(req.params["dishId"]);
  res.json(menus);
});

router.route('/:dishId').put(async (req: Request, res: Response) => {
  const {categoryId, description, title, photo, isPublish, ingredients, price} = req.body
  const {dishId} = req.params
  await dishService.updateById(dishId, new Dish(
    categoryId, description, title, photo, isPublish, ingredients, price, dishId
  ));
  res.status(200).end();
});

router.route('/:dishId').delete(async (req: Request, res: Response) => {
  await dishService.deleteById(req.params["dishId"]);
  res.status(200).end();
});

export const DishRouter: Router = router;
