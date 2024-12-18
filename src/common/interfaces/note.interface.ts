// Dependencies
import { Document } from 'mongoose';


export enum NoteStatus {
    important = 'important',
    lapsed = 'lapsed',
    regular = 'regular',
    urgent = 'urgent'
};

export interface NewNote {
    readonly author: string;
    readonly completed: boolean;
    readonly content?: string;
    readonly date: string; // estimated completion date, format 'yyyymmddhhmmss'
    readonly registrationDate: string; // format 'yyyymmddhhmmss'
    readonly status: NoteStatus;
    readonly title: string;
};

export interface SavedNote extends Document {
    readonly author: string;
    readonly completed: boolean;
    readonly content?: string;
    readonly date: string; // estimated completion date, format 'yyyymmddhhmmss'
    readonly registrationDate: string; // format 'yyyymmddhhmmss'
    readonly status: NoteStatus;
    readonly title: string;
};