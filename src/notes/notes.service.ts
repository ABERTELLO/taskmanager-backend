// Dependencies
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Common
import { PaginationParamsDto } from 'src/common/dto';
import { handleError, handleException } from 'src/common/helpers';

// Resource
import { CreateNoteDto, UpdateNoteDto } from './dto';
import { Note } from './entities';
import { NewNoteInterface, SavedNoteInterface } from 'src/common/interfaces';


@Injectable()
export class NotesService {

    private defaultLimit: number

    constructor(

        @InjectModel(Note.name)
        private readonly noteModel: Model<Note>,
        private readonly configService: ConfigService,
    ) {
        this.defaultLimit = configService.get<number>('defaultLimit')
    }

    async create(body: CreateNoteDto) {
        let data: NewNoteInterface;
        try {
            data = await this.noteModel.create(body);
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        }
    }

    async findAll(paginationParams: PaginationParamsDto) {
        const { filters = null, limit = this.defaultLimit, page = 1 } = paginationParams
        let data: SavedNoteInterface[];
        try {
            data = await this.noteModel
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
        let data: SavedNoteInterface;
        try {
            data = await this.noteModel.findById(id);
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        }
    }

    async remove(id: string) {
        let data: SavedNoteInterface;
        try {
            data = await this.noteModel.findByIdAndDelete(id);
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        }
    }

    async update(id: string, body: UpdateNoteDto) {
        let data: SavedNoteInterface;
        try {
            data = await this.noteModel.findByIdAndUpdate(id, body, { new: true });
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        }
    }
}
