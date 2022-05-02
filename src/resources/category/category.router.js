const router = require('express').Router();
const categoryService = require('./category.service');
require('body-parser')
const Category = require("./category.model");

router.route('/').get(async (req, res) => {
  const menus = await categoryService.getAll();
  res.json(menus);
});

router.route('/').post(async (req, res) => {
  const {menuId, title, photo, isVisible} = req.body
  await categoryService.insertNew(new Category(menuId, title, photo, isVisible));
  res.status(200).end();
});

router.route('/:categoryId').get(async (req, res) => {
  const categories = await categoryService.getById(req.params.categoryId);
  res.json(categories);
});

router.route('/:categoryId/dishes').get(async (req, res) => {
  const dishes = await categoryService.getDishes(req.params.categoryId);
  res.json(dishes);
});

router.route('/:categoryId').put(async (req, res) => {
  const {menuId, title, photo, isVisible} = req.body
  const {categoryId} = req.params
  await categoryService.updateById(categoryId, new Category(menuId, photo, title, isVisible, categoryId));
  res.status(200).end();
});

router.route('/:categoryId').delete(async (req, res) => {
  await categoryService.deleteById(req.params.categoryId);
  res.status(200).end();
});

module.exports = router;
