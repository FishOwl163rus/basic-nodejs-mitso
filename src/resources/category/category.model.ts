import { v4 as uuid } from 'uuid';

export class Category {
  public id: string;

  public menuId: string | undefined;

  public title: string;

  public photo: string;

  public isVisible: boolean;

  constructor(menuId: string | undefined, photo: string, title: string, isVisible: boolean, id = uuid()) {
    this.id = id
    this.menuId = menuId;
    this.title = title;
    this.photo = photo;
    this.isVisible = isVisible;
  }
}
