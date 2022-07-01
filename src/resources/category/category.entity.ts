import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Menu } from "../menu/menu.entity";
import { Dish } from "../dish/dish.entity";

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public menuId: string;

  @Column()
  public title: string;

  @Column()
  public photo: string;

  @Column()
  public is_visible: boolean;

  @ManyToOne(() => Menu, (menu) => menu.categories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  public menu: Promise<Menu>;

  @OneToMany(() => Dish, (dish) => dish.category, {
    cascade: true
  })
  @JoinColumn()
  public dishes: Promise<Dish[]>;
}
