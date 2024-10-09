// Dependencies
import { PartialType } from '@nestjs/mapped-types';

// Resource
import { CreateNoteDto } from './create-note.dto';


export class UpdateNoteDto extends PartialType(CreateNoteDto) { }
