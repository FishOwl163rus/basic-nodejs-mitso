import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";

@Entity('menus')
export class Menu {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public title: string;

  @Column()
  public photo: string;

  @Column()
  public is_publish: boolean;

  @OneToMany(() => Category, (category) => category.menu, {
    cascade: true
  })
  @JoinColumn()
  public categories: Promise<Category[]>;
}

