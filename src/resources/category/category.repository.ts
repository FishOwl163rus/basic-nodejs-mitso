import { Category } from "./category.entity";
import AppDataSource from "../../common/appDataSource";
import { Dish } from "../dish/dish.entity";

class CategoryRepository {

  public async createCategory({ menuId, title, photo, is_visible }: Omit<Category, 'id' | 'menu' | 'dishes'>) {
    const category = new Category();
    category.menuId = menuId;
    category.title = title;
    category.photo = photo;
    category.is_visible = is_visible;
    return AppDataSource.getRepository(Category).insert(category);
  }

  public async getAll() {
    return AppDataSource.getRepository(Category).find();
  }

  public async getById(id: string) {
    return AppDataSource.getRepository(Category).findOneBy({
      id: id
    });
  }

  public async updateById(id: string, category: Omit<Category, 'id' | 'menu' | 'dishes'>) {
    return AppDataSource.getRepository(Category).update(id, category);
  }

  public async deleteById(id: string) {
    return AppDataSource.getRepository(Category).delete({
      id: id
    })
  }

  public async deleteByMenuId(id: string) {
    return AppDataSource.getRepository(Category).delete({
      menuId: id
    })
  }

  public async getByMenuId(id: string) {
    return AppDataSource.getRepository(Category).findBy({
      menuId: id
    });
  }

  public async getDishes(id: string) {
    return AppDataSource.getRepository(Dish).findBy({
      categoryId: id
    });
  }
}

export default new CategoryRepository()
