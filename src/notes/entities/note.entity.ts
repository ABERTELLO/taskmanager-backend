// Dependencies
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


const keyProps: object = {
    index: true,
};

@Schema()
export class Note extends Document {
    @Prop({...keyProps, required: true})
    author: string;
    @Prop({...keyProps, required: true})
    completed: boolean;
    @Prop({...keyProps, required: false})
    content?: string;
    @Prop({...keyProps, required: true})
    date: string; // estimated completion date, format 'yyyymmddhhmmss'
    @Prop({...keyProps, required: true})
    registrationDate: string; // format 'yyyymmddhhmmss'
    @Prop({...keyProps, required: true})
    status: string; // regular, important, urgent, lapsed
    @Prop({...keyProps, required: true})
    title: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);