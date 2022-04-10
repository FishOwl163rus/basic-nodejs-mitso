const uuid = require('uuid');

class Category {
  constructor(menuId, photo, title, isVisible, id = uuid.v4()) {
    this.id = id
    this.menuId = menuId;
    this.title = title;
    this.photo = photo;
    this.isVisible = isVisible;
  }
}

module.exports = Category
