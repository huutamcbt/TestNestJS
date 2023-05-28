import { Entity, JoinTable, ManyToOne, PrimaryColumn } from 'typeorm';
import { Category } from './category';
import { Question } from './question';

@Entity()
export class QuestionCategory {
  @PrimaryColumn({
    type: 'int',
  })
  public questionID: number;

  @PrimaryColumn({
    type: 'int',
  })
  public categoryID: number;

  @ManyToOne(() => Category, (category) => category.questionTocategories)
  public category: Category;

  @ManyToOne(() => Question, (question) => question.questionTocategories)
  public question: Question;
}
