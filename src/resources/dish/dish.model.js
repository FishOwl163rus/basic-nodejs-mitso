const uuid = require('uuid');

class Dish {
  constructor({categoryId, description, title, photo, isPublish, ingredients, price}) {
    this.id = uuid.v4()
    this.categoryId = categoryId
    this.title = title
    this.description = description
    this.photo = photo
    this.isPublish = isPublish
    this.ingredients = ingredients
    this.price = price
  }
}

module.exports = Dish
