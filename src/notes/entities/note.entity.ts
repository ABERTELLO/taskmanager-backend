import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Note extends Document {
    @Prop({index: true})
    author: string;
    @Prop({index: true})
    completed: boolean;
    @Prop({index: true})
    content?: string;
    @Prop({index: true})
    date: string; // estimated completion date, format 'yyyymmddhhmmss'
    @Prop({index: true})
    registrationDate: string; // format 'yyyymmddhhmmss'
    @Prop({index: true})
    status: string; // regular, important, urgent, lapsed
    @Prop({index: true})
    title: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);