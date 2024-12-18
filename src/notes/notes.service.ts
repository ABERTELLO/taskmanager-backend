// Dependencies
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Common
import { PaginationParamsDto } from 'src/common/dto';
import {
    handleError,
    handleException,
    formatPaginationParams
} from 'src/common/helpers';

// Resource
import { CreateNoteDto, UpdateNoteDto } from './dto';
import { Note } from './entities';
import { NewNote, SavedNote } from 'src/common/interfaces';


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
        let data: NewNote;
        try {
            data = await this.noteModel.create(body);
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        }
    }

    async find(paginationParams: PaginationParamsDto) {
        const params = formatPaginationParams(this.defaultLimit, paginationParams);
        
        let data: SavedNote[];
        try {
            data = await this.noteModel
                .find(params.filters)
                .limit(params.limit)
                .skip((params.page - 1) * params.limit)
                .sort({ date: 'asc' });
        } catch (error) {
            handleError(error);
        } finally {
            handleException(data);
            return data;
        }
    }

    async findOne(id: string) {
        let data: SavedNote;
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
        let data: SavedNote;
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
        let data: SavedNote;
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
