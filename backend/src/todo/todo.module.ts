import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TodoSchema } from './schemas/todo.schema';
import { TodoService } from './todo.service';
import { todosProviders } from './todo.provider';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'todo', schema: TodoSchema}])],
  controllers: [TodoController],
  providers: [TodoService, ...todosProviders],
})
export class TodoModule {}
