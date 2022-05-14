import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";

@Entity('dishes')
export class Dish {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public categoryId: string;

  @ManyToOne(() => Category, (category) => category.dishes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  public category: Promise<Category>;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public photo: string;

  @Column()
  public is_publish: boolean;

  @Column('text',{array: true, default: "{}"})
  public ingredients: string[];

  @Column()
  public price: number;
}
