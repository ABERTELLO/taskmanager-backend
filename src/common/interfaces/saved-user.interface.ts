// Dependencies
import mongoose from 'mongoose';


export interface SavedUserInterface extends mongoose.Document {
    readonly email: string;
    readonly fullName: string; // First and last name, nickname, etc.
    readonly isActive: boolean;
    readonly password: string;
    readonly roles: string[]; // user, admin
}
