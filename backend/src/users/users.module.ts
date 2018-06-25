import { usersProviders } from './users.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema}])],
  providers: [ UsersService, ...usersProviders],
})
export class UsersModule {}
