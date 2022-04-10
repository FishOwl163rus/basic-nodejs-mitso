const dishRepository = require('../dish/dish.memory.repository')

const data = []

async function insertNew(category) {
  data.push(category)
}

async function getAll() {
  return data
}

async function getById(id) {
  return data.filter(x => x.id === id)
}

async function updateById(id, category) {
  const index = data.findIndex(x => x.id === id)

  if (index === -1) {
    return
  }

  data[index] = category
}

async function deleteById(id) {
  const filter = data.filter(x => x.id === id)
  filter.forEach(x => {
    const index = data.indexOf(x)
    data.splice(index, 1)
  })
  await dishRepository.deleteByCategory(id)
}

async function deleteByMenuId(id) {
  const filter = data.filter(x => x.menuId === id)
  filter.forEach(x => {
    const index = data.indexOf(x)
    data.splice(index, 1)
  })
}

async function getByMenuId(id) {
  return data.filter(x => x.menuId === id)
}

async function getDishes(id) {
  await dishRepository.getByCategoryId(id)
}

module.exports = {insertNew, getAll, getById, updateById, deleteById, getByMenuId, deleteByMenuId, getDishes}
