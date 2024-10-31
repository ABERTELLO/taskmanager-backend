// Dependencies
import { Body, Controller, Delete, Get, Patch, Param, Post, Query, UseGuards } from '@nestjs/common';

// Commmon
import { JwtAuthGuard } from 'src/auth/config/jwt.guard';
import { PaginationParamsDto } from 'src/common/dto';
import { ParseMongoIdPipe } from 'src/common/pipes';

// Resource
import { CreateNoteDto, UpdateNoteDto } from './dto';
import { NotesService } from './notes.service';


@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) { }

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
