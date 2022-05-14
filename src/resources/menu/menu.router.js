const router = require('express').Router();
const menuService = require('./menu.service');
require('body-parser')
const Menu = require("./menu.model");

router.route('/').get(async (req, res) => {
  const menus = await menuService.getAll();
  res.json(menus);
});

router.route('/').post(async (req, res) => {
  const {title, photo, isPublish} = req.body
  await menuService.insertNew(new Menu(title, photo, isPublish));
  res.status(200).end();
});

router.route('/:menuId').get(async (req, res) => {
  const menus = await menuService.getById(req.params.menuId);
  res.json(menus);
});

router.route('/:menuId').put(async (req, res) => {
  const {title, photo, isPublish} = req.body
  const {menuId} = req.params;
  await menuService.updateById(menuId, new Menu(title, photo, isPublish, menuId));
  res.status(200).end();
});

router.route('/:menuId').delete(async (req, res) => {
  await menuService.deleteById(req.params.menuId);
  res.status(200).end();
});

router.route('/:menuId/categories').get(async (req, res) => {
  const categories = await menuService.getMenuCategories(req.params.menuId);
  res.json(categories);
});

module.exports = router;
