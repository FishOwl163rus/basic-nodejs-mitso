import { Request, Response, Router } from "express";
import { Category } from "./category.model";
import categoryService from "./category.service";

const router: Router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const menus = await categoryService.getAll();
  res.json(menus);
});

router.route('/').post(async (req: Request, res: Response) => {
  const {menuId, title, photo, isVisible} = req.body
  await categoryService.insertNew(new Category(menuId, title, photo, isVisible));
  res.status(200).end();
});

router.route('/:categoryId').get(async (req: Request, res: Response) => {
  const categories = await categoryService.getById(req.params["categoryId"]);
  res.json(categories);
});

router.route('/:categoryId/dishes').get(async (req: Request, res: Response) => {
  const dishes = await categoryService.getDishes(req.params["categoryId"]);
  res.json(dishes);
});

router.route('/:categoryId').put(async (req: Request, res: Response) => {
  const {menuId, title, photo, isVisible} = req.body
  const {categoryId} = req.params
  await categoryService.updateById(categoryId, new Category(menuId, photo, title, isVisible, categoryId));
  res.status(200).end();
});

router.route('/:categoryId').delete(async (req: Request, res: Response) => {
  await categoryService.deleteById(req.params["categoryId"]);
  res.status(200).end();
});

export const CategoryRouter: Router = router;
