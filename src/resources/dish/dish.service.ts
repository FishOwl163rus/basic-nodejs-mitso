import DishRepository from "./dish.repository";
import { Dish } from "./dish.entity";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

class DishService {
  public createDish = (dish: Omit<Dish, 'id' | 'category'>): Promise<InsertResult> => DishRepository.createDish(dish)

  public getAll = (): Promise<Dish[]> => DishRepository.getAll()

  public getById = (id: string): Promise<Dish | null> => DishRepository.getById(id)

  public updateById = (id: string, dish: Omit<Dish, 'id' | 'category'>): Promise<UpdateResult> => DishRepository.updateById(id, dish)

  public deleteById = (id: string): Promise<DeleteResult> => DishRepository.deleteById(id)
}

export default new DishService()
