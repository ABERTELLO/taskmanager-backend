import { CreateNoteInterface } from './create-note.interface';

export interface EditNoteInterface extends CreateNoteInterface {
    _id: string; // object mongo id
}
