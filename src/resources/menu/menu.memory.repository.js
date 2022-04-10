const categoryRepository = require('../category/category.memory.repository')

const data = []

async function insertNew(menu) {
  data.push(menu)
}

async function getAll() {
  return data
}

async function getById(id) {
  return data.filter(x => x.id === id)
}

async function updateById(id, menu) {
  const index = data.findIndex(x => x.id === id)

  if (index === -1) {
    return
  }

  data[index] = menu
}

async function deleteById(id) {
  const index = data.findIndex(x => x.id === id)
  if (index === -1) {
    return
  }

  data.splice(index, 1)
  await categoryRepository.deleteByMenuId(id)
}

async function getMenuCategories(id) {
  return categoryRepository.getByMenuId(id);
}

module.exports = { insertNew, getAll, getById, updateById, deleteById, getMenuCategories }
