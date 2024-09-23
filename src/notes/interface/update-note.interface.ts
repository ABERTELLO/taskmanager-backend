import { ObjectId } from 'mongoose';
import { CreateNoteInterface } from './create-note.interface';

export interface UpdateNoteInterface extends CreateNoteInterface {
    readonly __v?: number;
    readonly _id?: { type: ObjectId }; // Mongo ID
}
