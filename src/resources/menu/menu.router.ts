import { Request, Response, Router } from "express";
import menuService from "./menu.service";
import { Menu } from "./menu.model";

const router: Router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const menus = await menuService.getAll();
  res.json(menus);
});

router.route('/').post(async (req: Request, res: Response) => {
  const {title, photo, isPublish} = req.body
  await menuService.insertNew(new Menu(title, photo, isPublish));
  res.status(200).end();
});

router.route('/:menuId').get(async (req: Request, res: Response) => {
  const menus = await menuService.getById(req.params["menuId"]);
  res.json(menus);
});

router.route('/:menuId').put(async (req: Request, res: Response) => {
  const {title, photo, isPublish} = req.body
  const {menuId} = req.params;
  await menuService.updateById(menuId, new Menu(title, photo, isPublish, menuId));
  res.status(200).end();
});

router.route('/:menuId').delete(async (req: Request, res: Response) => {
  await menuService.deleteById(req.params["menuId"]);
  res.status(200).end();
});

router.route('/:menuId/categories').get(async (req: Request, res: Response) => {
  const categories = await menuService.getMenuCategories(req.params["menuId"]);
  res.json(categories);
});

export const MenuRouter: Router = router;
