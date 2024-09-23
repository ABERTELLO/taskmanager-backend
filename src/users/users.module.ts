import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }])
  ],
  exports: [MongooseModule],
  providers: [UsersService],
})
export class UsersModule {}