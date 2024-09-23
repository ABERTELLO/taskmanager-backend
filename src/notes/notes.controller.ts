import { Body, Controller, Delete, Get, Patch, Param, Post, Query } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';
import { PaginationParamsDto } from 'src/common/dto/pagination-params.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() data: CreateNoteDto) {
    return this.notesService.create(data);
  }

  @Get()
  findAll(@Query() paginationParams: PaginationParamsDto) {
    return this.notesService.findAll(paginationParams);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.notesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseMongoIdPipe) id: string, @Body() data: UpdateNoteDto) {
    return this.notesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.notesService.remove(id);
  }
}
