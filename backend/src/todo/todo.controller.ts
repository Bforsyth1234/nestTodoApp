import { TodoService } from './todo.service';
import { CreateTodoDto } from './CreateTodoDto';
import { Controller, Get, Post, Body, Req } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    this.todoService.create(createTodoDto).then(() => {
      return 'New To do added';
    });
  }
}
