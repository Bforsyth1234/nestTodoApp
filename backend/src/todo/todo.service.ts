import { CreateTodoDto } from './CreateTodoDto';
import { TodoInterface } from './interfaces/todo.interface';
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@Inject('TodoModelToken') private readonly todoModel: Model<TodoInterface>){}

  async create(createTodoDto: CreateTodoDto): Promise<TodoInterface> {
    const createdTodo = new this.todoModel(createTodoDto);
    return await createdTodo.save();
  }

}
