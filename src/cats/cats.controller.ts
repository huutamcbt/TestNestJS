import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { DataSource } from 'typeorm';
import { Category } from './entity/category';
import { Question } from './entity/question';
import { CreateCatDto } from './dto/create-cat.dto';
import { QuestionCategory } from './entity/questionTocategory';

const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'TempDatabase.mssql.somee.com',
  port: 1433,
  username: 'huutamcbt_SQLLogin_1',
  password: 'e37jeyczjt',
  database: 'TempDatabase',
  entities: [Question, Category, QuestionCategory],
  logging: true,
  options: {
    encrypt: false,
  },
});

AppDataSource.initialize();

const query = 'exec usp_GetAllQuestionFollowCategoryID @0';

@Controller({ path: 'cats' })
export class CatsController {
  @Get()
  async findAll(@Res() res: Response) {
    console.log('Cat controller');
    const fields: string[] = [
      'question.id',
      'question.title',
      'questioncategory.categoryID',
    ];
    const firstQuestion = await AppDataSource.getRepository(QuestionCategory)
      .createQueryBuilder('questioncategory')
      .select()
      .leftJoinAndSelect('questioncategory.question', 'ques')
      .leftJoinAndSelect('questioncategory.category', 'cate')
      .where('ques.id = :id', { id: 5 })
      .getMany();
    return res.json(firstQuestion);
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    let str = 'This action adds a new cat\n';
    str += `Name: ${createCatDto.name}\n`;
    str += `Age: ${createCatDto.age}\n`;
    str += `Breed: ${createCatDto.breed}\n`;
    return str;
  }
}
