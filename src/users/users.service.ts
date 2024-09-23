import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserInDbInterface } from './interface/user.interface';
import { PaginationParamsDto } from 'src/common/dto/pagination-params.dto';
import { handleError, handleException } from 'src/common/helpers/error.helper';

@Injectable()
export class UsersService {

  private defaultLimit: number

  constructor(

    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {
    this.defaultLimit = configService.get<number>('defaultLimit')
  }

  async create(body: CreateUserDto) {
    let data: any;
    try {
      data = await this.userModel.create(body);
    } catch (error) {
      handleError(error);
    } finally {
      handleException(data);
      return data;
    }
  }

  async findAll(paginationParams: PaginationParamsDto) {
    const { filters = null, limit = this.defaultLimit, page = 1 } = paginationParams
    let data: any;
    try {
      data = await this.userModel
        .find(filters)
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ date: 'asc' });
    } catch (error) {
      handleError(error);
    } finally {
      handleException(data);
      return data;
    }
  }

  async findOne(id: string) {
    let data: UserInDbInterface;
    try {
      data = await this.userModel.findById(id);
    } catch (error) {
      handleError(error);
    } finally {
      handleException(data);
      return data;
    }
  }

  async remove(id: string) {
    let data: UserInDbInterface;
    try {
      data = await this.userModel.findByIdAndDelete(id);
    } catch (error) {
      handleError(error);
    } finally {
      handleException(data);
      return data;
    }
  }

  async update(id: string, body: UpdateUserDto) {
    let data: UserInDbInterface;
    try {
      data = await this.userModel.findByIdAndUpdate(id, body, { new: true });
    } catch (error) {
      handleError(error);
    } finally {
      handleException(data);
      return data;
    }
  }
}
