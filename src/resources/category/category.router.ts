import { Request, Response, Router } from "express";
import categoryService from "./category.service";
const router: Router = Router();
router.route('/').get(async (_req: Request, res: Response) => {
  const menus = await categoryService.getAll();
  res.json(menus);
});

router.route('/').post(async (req: Request, res: Response) => {
  const {menuId, title, photo, is_visible} = req.body
  const result = await categoryService.createCategory({menuId, title, photo, is_visible});

  if (result.raw.length > 0) {
    res.status(201).end();
  } else {
    res.status(400).end();
  }
});

router.route('/:categoryId').get(async (req: Request, res: Response) => {
  const category = await categoryService.getById(req.params["categoryId"] || '');
  if (category) {
    res.json(category);
  } else {
    res.status(400).end();
  }
});

router.route('/:categoryId/dishes').get(async (req: Request, res: Response) => {
  const dishes = await categoryService.getDishes(req.params["categoryId"] || '');
  res.json(dishes);
});

router.route('/:categoryId').put(async (req: Request, res: Response) => {
  const {menuId, title, photo, is_visible} = req.body
  const {categoryId} = req.params
  const result = await categoryService.updateById(categoryId || '', {menuId, photo, title, is_visible});

  if (result.affected && result.affected > 0) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
});

router.route('/:categoryId').delete(async (req: Request, res: Response) => {
  const result = await categoryService.deleteById(req.params["categoryId"] || '');

  if (result.affected && result.affected > 0) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
});

export const CategoryRouter: Router = router;
