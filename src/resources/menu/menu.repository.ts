import { Menu } from "./menu.entity";
import AppDataSource from "../../common/appDataSource";
import { DeleteResult, UpdateResult } from "typeorm";
import { Category } from "../category/category.entity";

class MenuRepository {
  public createMenu({ title, photo, is_publish }: Omit<Menu, 'id' | 'categories'>) {
    const menu = new Menu();
    menu.title = title;
    menu.photo = photo;
    menu.is_publish = is_publish;
    return AppDataSource.getRepository(Menu).insert(menu);
  }

  public async getAll(): Promise<Menu[]> {
    return AppDataSource.manager.find(Menu);
  }

  public async getById(id: string): Promise<Menu | null> {
    return AppDataSource.getRepository(Menu).findOneBy({
      id: id
    });
  }

  public async updateById(id: string, menu: Omit<Menu, 'id' | 'categories'>) : Promise<UpdateResult> {
    return AppDataSource.getRepository(Menu).update(id, menu);
  }

  public async deleteById(id: string): Promise<DeleteResult> {
    return AppDataSource.getRepository(Menu).delete({
      id: id
    })
  }

  public async getMenuCategories(id: string): Promise<Category[]> {
    return AppDataSource.getRepository(Category).findBy({
      id: id
    })
  }
}

export default new MenuRepository()
