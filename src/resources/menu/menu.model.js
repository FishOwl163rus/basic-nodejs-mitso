const uuid = require('uuid');

class Menu {
  constructor(title, photo, isPublish, id = uuid.v4()) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.isPublish = isPublish;
  }
}

module.exports = Menu
