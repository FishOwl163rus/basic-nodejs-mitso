const dishRepo = require('./dish.memory.repository')

const insertNew = (menu) => dishRepo.insertNew(menu)
const getAll = () => dishRepo.getAll()
const getById = (id) => dishRepo.getById(id)
const updateById = (id, dish) => dishRepo.updateById(id, dish)
const deleteById = (id) => dishRepo.deleteById(id)

module.exports = { insertNew, getAll, getById, updateById, deleteById}
