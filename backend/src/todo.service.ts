import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {

  create(data) {
    console.log('data = ');
    console.log(data);
  }
}
