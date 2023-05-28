import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { QuestionCategory } from './questionTocategory';

@Entity()
export class Category {
  @PrimaryColumn({
    type: 'int',
  })
  public id: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  public name: string;

  @OneToMany(
    () => QuestionCategory,
    (questioncategory) => questioncategory.category,
  )
  public questionTocategories: QuestionCategory[];
}
