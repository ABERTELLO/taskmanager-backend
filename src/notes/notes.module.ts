// Dependencies
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// Resource
import { Note, NoteSchema } from './entities';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';


@Module({
    controllers: [NotesController],
    imports: [
        ConfigModule,
        MongooseModule.forFeature([{
            name: Note.name,
            schema: NoteSchema
        }])
    ],
    exports: [MongooseModule],
    providers: [NotesService],
})
export class NotesModule { }
