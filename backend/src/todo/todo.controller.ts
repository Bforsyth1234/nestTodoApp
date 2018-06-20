import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  findAll() {
    return {title: 'test title', description: 'test item'};
  }
}
