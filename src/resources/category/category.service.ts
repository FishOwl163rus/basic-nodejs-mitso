import categoryRepository from "./category.memory.repository";
import { Category } from "./category.model";
import { Dish } from "../dish/dish.model";

class CategoryService {
  public insertNew = (category: Category): Promise<void> => categoryRepository.insertNew(category)

  public getAll = (): Promise<Category[]> => categoryRepository.getAll()

  public getById = (id: string | undefined): Promise<Category[]> => categoryRepository.getById(id)

  public updateById = (id: string | undefined, category: Category): Promise<void> => categoryRepository.updateById(id, category)

  public deleteById = (id: string | undefined): Promise<void> => categoryRepository.deleteById(id)

  public getDishes = (id: string | undefined): Promise<Dish[]> => categoryRepository.getDishes(id)
}

export default new CategoryService()
