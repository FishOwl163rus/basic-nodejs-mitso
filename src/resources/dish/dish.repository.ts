import {Dish} from './dish.entity';
import AppDataSource from "../../common/appDataSource";

class DishRepository {

  public createDish({categoryId, title, description, photo, is_publish, ingredients, price} : Omit<Dish, 'id' | 'category'>){
    const dish = new Dish();
    dish.categoryId = categoryId;
    dish.title = title;
    dish.description = description;
    dish.photo = photo;
    dish.is_publish = is_publish;
    dish.ingredients = ingredients;
    dish.price = price;
    return AppDataSource.getRepository(Dish).insert(dish);
  }

  public async getAll(): Promise<Dish[]> {
    return AppDataSource.getRepository(Dish).find()
  }

  public async getById(id: string) {
    return AppDataSource.getRepository(Dish).findOneBy({
      id: id
    });
  }

  public async getByCategoryId(id: string) {
    return AppDataSource.getRepository(Dish).findOneBy({
      categoryId: id
    });
  }

  public async updateById(id: string, dish: Omit<Dish, 'id' | 'category'>) {
    return AppDataSource.getRepository(Dish).update(id, dish);
  }

  public async deleteById(id: string) {
    return AppDataSource.getRepository(Dish).delete({
      id: id
    })
  }
}

export default new DishRepository();
