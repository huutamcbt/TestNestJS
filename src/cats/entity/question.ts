import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { QuestionCategory } from './questionTocategory';

@Entity()
export class Question {
  @PrimaryColumn({
    type: 'int',
  })
  public id: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  public title: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  public text: string;

  @OneToMany(
    () => QuestionCategory,
    (questioncategory) => questioncategory.question,
  )
  public questionTocategories: QuestionCategory[];
}
