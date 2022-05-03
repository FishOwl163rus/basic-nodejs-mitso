import {Dish} from './dish.model';

class DishRepository {
  dishData: Dish[] = []

  public async insertNew(dish: Dish) {
    this.dishData.push(dish)
  }

  public async getAll() {
    return this.dishData
  }

  public async getById(id: string | undefined) {
    return this.dishData.filter(x => x.id === id)
  }

  public async getByCategoryId(id: string | undefined) {
    return this.dishData.filter(x => x.categoryId === id)
  }

  public async updateById(id: string | undefined , dish: Dish) {
    const index = this.dishData.findIndex(x => x.id === id)

    if (index === -1) {
      return
    }

    this.dishData[index] = dish
  }

  public async deleteById(id: string | undefined) {
    const index = this.dishData.findIndex(x => x.id === id)
    if (index === -1) {
      return
    }

    this.dishData.splice(index, 1)
  }

  public async deleteByCategory(id: string | undefined) {
    const filter = this.dishData.filter(x => x.categoryId === id)
    filter.forEach(x => {
      const index = this.dishData.indexOf(x)
      this.dishData.splice(index, 1)
    })
  }
}

export default new DishRepository();
