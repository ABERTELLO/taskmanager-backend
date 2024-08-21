import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './entities/note.entity';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  controllers: [NotesController],
  imports: [
    MongooseModule.forFeature([{
      name: Note.name,
      schema: NoteSchema
    }])
  ],
  providers: [NotesService],
})
export class NotesModule { }
