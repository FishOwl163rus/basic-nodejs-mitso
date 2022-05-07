import { v4 as uuid } from 'uuid';

export class Dish {
  public id: string | undefined;

  public categoryId: string;

  public title: string;

  public description: string;

  public photo: string;

  public isPublish: boolean;

  public ingredients: string[];

  public price: number;

  constructor(categoryId: string, description: string, title: string, photo: string, isPublish: boolean, ingredients: string[], price: number, id: string = uuid()) {
    this.id = id
    this.categoryId = categoryId
    this.title = title
    this.description = description
    this.photo = photo
    this.isPublish = isPublish
    this.ingredients = ingredients
    this.price = price
  }
}
