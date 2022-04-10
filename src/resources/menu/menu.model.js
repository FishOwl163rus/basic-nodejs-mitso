const uuid = require('uuid');

class Menu {
  constructor({title, photo, isPublish}) {
    this.id = uuid.v4()
    this.title = title;
    this.photo = photo;
    this.isPublish = isPublish;
  }
}

module.exports = Menu
