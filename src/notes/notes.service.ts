import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class NotesService {

  constructor(
    @InjectModel(Note.name)
    private readonly noteModel: Model<Note>,
  ) { }

  async create(data: CreateNoteDto) {
    const savedData = await this.noteModel.create(data);
    return savedData;
  }

  async findAll() {
    const dataFound = await this.noteModel.find();
    return dataFound;
  }

  async findOne(id: string) {
    const dataFound = await this.noteModel.findById(id);
    if (!dataFound) throw new NotFoundException('Searched object does not exist.');
    return dataFound;
  }

  async update(id: string, data: UpdateNoteDto) {
    const updatedData = await this.noteModel.findByIdAndUpdate(id, data, { new: true });
    if (!updatedData) throw new NotFoundException('Object to modify does not exist.');
    return updatedData;
  }

  async remove(id: string) {
    const deletedData = await this.noteModel.findByIdAndDelete(id);
    if (!deletedData) throw new NotFoundException('Object to delete does not exist.');
    return deletedData;
  }
}
