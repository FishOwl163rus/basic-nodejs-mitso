import categoryRepository from "./category.repository";
import { Category } from "./category.entity";
import { Dish } from "../dish/dish.entity";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

class CategoryService {
  public createCategory = (category: Omit<Category, 'id' | 'menu' | 'dishes'>): Promise<InsertResult> => categoryRepository.createCategory(category)

  public getAll = (): Promise<Category[]> => categoryRepository.getAll()

  public getById = (id: string): Promise<Category | null> => categoryRepository.getById(id)

  public updateById = (id: string, category: Omit<Category, 'id' | 'menu' | 'dishes'>): Promise<UpdateResult> => categoryRepository.updateById(id, category)

  public deleteById = (id: string): Promise<DeleteResult> => categoryRepository.deleteById(id)

  public getDishes = (id: string): Promise<Dish[]> => categoryRepository.getDishes(id)
}

export default new CategoryService()
