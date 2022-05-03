import { Menu } from "./menu.model";
import categoryRepository from "../category/category.memory.repository";

class MenuRepository {
  menuData: Menu[] = []

  public async insertNew(menu: Menu) {
    this.menuData.push(menu)
  }

  public async getAll() {
    return this.menuData
  }

  public async getById(id: string | undefined) {
    return this.menuData.filter(x => x.id === id)
  }

  public async updateById(id: string | undefined, menu: Menu) {
    const index = this.menuData.findIndex(x => x.id === id)

    if (index === -1) {
      return
    }

    this.menuData[index] = menu
  }

  public async deleteById(id: string | undefined) {
    const index = this.menuData.findIndex(x => x.id === id)
    if (index === -1) {
      return
    }

    this.menuData.splice(index, 1)
    await categoryRepository.deleteByMenuId(id)
  }

  public async getMenuCategories(id: string | undefined) {
    return categoryRepository.getByMenuId(id);
  }
}

export default new MenuRepository()
