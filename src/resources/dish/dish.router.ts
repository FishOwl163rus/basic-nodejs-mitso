import { Request, Response, Router } from "express";
import dishService from "./dish.service";

const router: Router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const menus = await dishService.getAll();
  res.json(menus);
});

router.route('/').post(async (req: Request, res: Response) => {
  const {categoryId, description, title, photo, is_publish, ingredients, price} = req.body
  const result = await dishService.createDish({
    categoryId, description, title, photo, is_publish, ingredients, price
  });

  if (result.raw.length > 0) {
    res.status(201).end();
  } else {
    res.status(400).end();
  }
});

router.route('/:dishId').get(async (req: Request, res: Response) => {
  const menus = await dishService.getById(req.params["dishId"] || '');
  res.json(menus);
});

router.route('/:dishId').put(async (req: Request, res: Response) => {
  const {categoryId, description, title, photo, is_publish, ingredients, price} = req.body
  const {dishId} = req.params
  const result = await dishService.updateById(dishId || '', {
    categoryId, description, title, photo, is_publish, ingredients, price
  });

  if (result.affected && result.affected > 0) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
});

router.route('/:dishId').delete(async (req: Request, res: Response) => {
  const result = await dishService.deleteById(req.params["dishId"] || '');
  if (result.affected && result.affected > 0){
    res.status(200).end()
  } else {
    res.status(400).end()
  }
});

export const DishRouter: Router = router;
