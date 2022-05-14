import { Request, Response, Router } from "express";
import menuService from "./menu.service";

const router: Router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const menus = await menuService.getAll();
  res.json(menus);
});

router.route('/').post(async (req: Request, res: Response) => {
  const {title, photo, is_publish} = req.body
  const result = await menuService.createMenu({title, photo, is_publish});

  if (result.raw.length > 0) {
    res.status(201).end();
  } else {
    res.status(400).end();
  }
});

router.route('/:menuId').get(async (req: Request, res: Response) => {
  const menu = await menuService.getById(req.params["menuId"] || '');

  if (menu) {
    res.json(menu);
  } else {
    res.status(400).end();
  }
});

router.route('/:menuId').put(async (req: Request, res: Response) => {
  const {title, photo, is_publish} = req.body
  const result = await menuService.updateById(req.params["menuId"] || '', {title, photo, is_publish});

  if (result.affected && result.affected > 0){
    res.status(200).end()
  } else {
    res.status(400).end()
  }

});

router.route('/:menuId').delete(async (req: Request, res: Response) => {
  const result = await menuService.deleteById(req.params["menuId"] || '');

  if (result.affected && result.affected > 0){
    res.status(200).end()
  } else {
    res.status(400).end()
  }
});

router.route('/:menuId/categories').get(async (req: Request, res: Response) => {
  const categories = await menuService.getMenuCategories(req.params["menuId"] || '');
  res.json(categories);
});

export const MenuRouter: Router = router;
