import dishRepository from '../dish/dish.memory.repository';
import { Category } from "./category.model";

class CategoryRepository {
  categoryData: Category[] = []

  public async insertNew(category: Category) {
    this.categoryData.push(category)
  }

  public async getAll() {
    return this.categoryData
  }

  public async getById(id: string | undefined) {
    return this.categoryData.filter(x => x.id === id)
  }

  public async updateById(id: string | undefined, category: Category) {
    const index = this.categoryData.findIndex(x => x.id === id)

    if (index === -1) {
      return
    }

    this.categoryData[index] = category
  }

  public async deleteById(id: string | undefined) {
    const filter = this.categoryData.filter(x => x.id === id)
    filter.forEach(x => {
      const index = this.categoryData.indexOf(x)
      this.categoryData.splice(index, 1)
    })
    await dishRepository.deleteByCategory(id)
  }

  public async deleteByMenuId(id: string | undefined) {
    const filter = this.categoryData.filter(x => x.menuId === id)
    filter.forEach(x => {
      const index = this.categoryData.indexOf(x)
      this.categoryData.splice(index, 1)
    })
  }

  public async getByMenuId(id: string | undefined) {
    return this.categoryData.filter(x => x.menuId === id)
  }

  public async getDishes(id: string | undefined) {
    return await dishRepository.getByCategoryId(id)
  }
}

export default new CategoryRepository()
