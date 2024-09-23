import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { CreateNoteInterface, UpdateNoteInterface } from './interface/index';
import { PaginationParamsDto } from 'src/common/dto/pagination-params.dto';
import { handleError, handleException } from 'src/common/helpers/error.helper';

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
    let data: CreateNoteInterface;
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
    // let data: UpdateNoteInterface[];
    let data: any;
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
    let data: UpdateNoteInterface;
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
    let data: UpdateNoteInterface;
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
    let data: UpdateNoteInterface;
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
