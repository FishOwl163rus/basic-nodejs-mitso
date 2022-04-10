const menuRepo = require('./menu.memory.repository')

const insertNew = (menu) => menuRepo.insertNew(menu)
const getAll = () => menuRepo.getAll()
const getById = (id) => menuRepo.getById(id)
const updateById = (id, menu) => menuRepo.updateById(id, menu)
const deleteById = (id) => menuRepo.deleteById(id)
const getMenuCategories = (id) => menuRepo.getMenuCategories(id)

module.exports = { insertNew, getAll, getById, updateById, deleteById, getMenuCategories }
