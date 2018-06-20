import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoService } from './todo.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
