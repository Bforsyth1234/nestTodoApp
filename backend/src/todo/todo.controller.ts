import { TodoService } from './../todo.service';
import { CreateTodoDto } from './CreateTodoDto';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  findAll() {
    return {title: 'test title', description: 'test item'};
  }
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.create(createTodoDto);
  }
}
