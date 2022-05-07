import { v4 as uuid } from 'uuid';

export class Menu {
  public id: string;

  public title: string;

  public photo: string;

  public isPublish: boolean;

  constructor(title: string, photo: string, isPublish: boolean, id: string = uuid()) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.isPublish = isPublish;
  }
}

