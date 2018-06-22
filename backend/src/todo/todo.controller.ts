import { TodoService } from './todo.service';
import { CreateTodoDto } from './CreateTodoDto';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  findAll() {
    return {title: 'test title', description: 'test item', complete: false};
  }
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    this.todoService.create(createTodoDto);
  }
}
