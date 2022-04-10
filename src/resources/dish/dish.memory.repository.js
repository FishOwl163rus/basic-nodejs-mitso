const data = []

async function insertNew(dish) {
  data.push(dish)
}

async function getAll() {
  return data
}

async function getById(id) {
  return data.filter(x => x.id === id)
}

async function getByCategoryId(id) {
  return data.filter(x => x.categoryId === id)
}

async function updateById(id, dish) {
  const index = data.findIndex(x => x.id === id)

  if (index === -1) {
    return
  }

  data[index] = dish
}

async function deleteById(id) {
  const index = data.findIndex(x => x.id === id)
  if (index === -1) {
    return
  }

  data.splice(index, 1)
}

async function deleteByCategory(id) {
  const filter = data.filter(x => x.categoryId === id)
  filter.forEach(x => {
    const index = data.indexOf(x)
    data.splice(index, 1)
  })
}

module.exports = {insertNew, getAll, getById, updateById, deleteById, deleteByCategory, getByCategoryId}
