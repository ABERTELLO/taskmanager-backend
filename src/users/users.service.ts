// Dependencies
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Model } from 'mongoose';

// Common
import { SavedUser } from 'src/common/interfaces';
import { PaginationParamsDto } from 'src/common/dto';
import {
    formatPaginationParams,
    handleError,
    handleException
} from 'src/common/helpers';

// Resource
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities';


@Injectable()
export class UsersService {

    private defaultLimit: number;

    constructor(

        @InjectModel(User.name)
        private readonly userModel: Model<User>,
        private readonly configService: ConfigService,
    ) {
        this.defaultLimit = configService.get<number>('defaultLimit');
    };

    async create(body: CreateUserDto) {
        let data: any;
        try {
            const encryptedPassword = await hash(body.password, 10);
            const userToSave = { ...body, password: encryptedPassword };
            data = await this.userModel
                .create(userToSave);
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data.select('-password');
        };
    };

    async find(paginationParams: PaginationParamsDto) {
        const params = formatPaginationParams(this.defaultLimit, paginationParams);

        let data: SavedUser[];
        try {
            data = await this.userModel
                .find(params.filters)
                .limit(params.limit)
                .skip((params.page - 1) * params.limit)
                .sort({ date: 'asc' })
                .select('-password');
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        };
    };

    async findOne(id: string) {
        let data: SavedUser;
        try {
            data = await this.userModel
                .findById(id)
                .select('-password');
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        };
    };

    async remove(id: string) {
        let data: SavedUser;
        try {
            data = await this.userModel.findByIdAndDelete(id);
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        };
    };

    async update(id: string, body: UpdateUserDto) {
        let data: SavedUser;
        try {
            data = await this.userModel
                .findByIdAndUpdate(id, body, { new: true })
                .select('-password');
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        };
    };
};