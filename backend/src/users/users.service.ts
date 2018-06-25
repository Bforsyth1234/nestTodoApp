import { Model } from 'mongoose';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './CreateUserDto';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<UserInterface>){}

  async create(createUserDto: CreateUserDto): Promise<UserInterface> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOneByEmail(email).exec();
  }

}
