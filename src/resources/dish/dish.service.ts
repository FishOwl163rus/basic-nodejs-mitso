import DishRepository from "./dish.memory.repository";
import { Dish } from "./dish.model";

class DishService {
  public insertNew = (dish: Dish): Promise<void> => DishRepository.insertNew(dish)

  public getAll = (): Promise<Dish[]> => DishRepository.getAll()

  public getById = (id: string | undefined): Promise<Dish[]> => DishRepository.getById(id)

  public updateById = (id: string | undefined, dish: Dish): Promise<void> => DishRepository.updateById(id, dish)

  public deleteById = (id: string| undefined): Promise<void> => DishRepository.deleteById(id)
}

export default new DishService()
