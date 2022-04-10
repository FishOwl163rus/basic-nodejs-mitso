const categoryRepo = require('./category.memory.repository')

const insertNew = (menu) => categoryRepo.insertNew(menu)
const getAll = () => categoryRepo.getAll()
const getById = (id) => categoryRepo.getById(id)
const updateById = (id, menu) => categoryRepo.updateById(id, menu)
const deleteById = (id) => categoryRepo.deleteById(id)
const getMenuCategories = (id) => categoryRepo.getByMenuId(id)
const getDishes = (id) => categoryRepo.getDishes(id)

module.exports = { insertNew, getAll, getById, updateById, deleteById, getMenuCategories, getDishes }
