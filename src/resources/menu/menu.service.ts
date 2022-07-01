import menuRepository from "./menu.repository";
import { Menu } from "./menu.entity";
import { Category } from "../category/category.entity";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

class MenuService {
  public createMenu = ({title, photo, is_publish}: Omit<Menu, 'id' | 'categories'>): Promise<InsertResult> => menuRepository.createMenu({title, photo, is_publish})

  public getAll = (): Promise<Menu[]> => menuRepository.getAll()

  public getById = (id: string): Promise<Menu | null> => menuRepository.getById(id)

  public updateById = (id: string, {title, photo, is_publish}: Omit<Menu, 'id' | 'categories'>): Promise<UpdateResult> => menuRepository.updateById(id, {title, photo, is_publish})

  public deleteById = (id: string): Promise<DeleteResult> => menuRepository.deleteById(id)

  public getMenuCategories = (id: string): Promise<Category[]> => menuRepository.getMenuCategories(id)
}

export default new MenuService()
