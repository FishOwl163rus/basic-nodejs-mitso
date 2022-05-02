const router = require('express').Router();
const dishService = require('./dish.service');
require('body-parser')
const Dish = require("./dish.model");

router.route('/').get(async (req, res) => {
  const menus = await dishService.getAll();
  res.json(menus);
});

router.route('/').post(async (req, res) => {
  const {categoryId, description, title, photo, isPublish, ingredients, price} = req.body
  await dishService.insertNew(new Dish(
    categoryId, description, title, photo, isPublish, ingredients, price
  ));
  res.status(200).end();
});

router.route('/:dishId').get(async (req, res) => {
  const menus = await dishService.getById(req.params.dishId);
  res.json(menus);
});

router.route('/:dishId').put(async (req, res) => {
  const {categoryId, description, title, photo, isPublish, ingredients, price} = req.body
  const {dishId} = req.params
  await dishService.updateById(dishId, new Dish(
    categoryId, description, title, photo, isPublish, ingredients, price, dishId
  ));
  res.status(200).end();
});

router.route('/:dishId').delete(async (req, res) => {
  await dishService.deleteById(req.params.dishId);
  res.status(200).end();
});

module.exports = router;
