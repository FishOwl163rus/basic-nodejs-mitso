const uuid = require('uuid');

class Category {
  constructor({menuId, photo, title, isVisible}) {
    this.id = uuid.v4()
    this.menuId = menuId;
    this.title = title;
    this.photo = photo;
    this.isVisible = isVisible;
  }
}

module.exports = Category
