import menuRepository from "./menu.memory.repository";
import { Menu } from "./menu.model";
import { Category } from "../category/category.model";

class MenuService {
  public insertNew = (menu: Menu): Promise<void> => menuRepository.insertNew(menu)

  public getAll = (): Promise<Menu[]> => menuRepository.getAll()

  public getById = (id: string | undefined): Promise<Menu[]> => menuRepository.getById(id)

  public updateById = (id: string | undefined, menu: Menu): Promise<void> => menuRepository.updateById(id, menu)

  public deleteById = (id: string | undefined): Promise<void> => menuRepository.deleteById(id)

  public getMenuCategories = (id: string | undefined): Promise<Category[]> => menuRepository.getMenuCategories(id)
}

export default new MenuService()
