// Dependencies
import { Document } from 'mongoose';


export enum UserRoles {
    admin = 'admin',
    user = 'user'
};

export interface NewUser {
    readonly email: string;
    readonly fullName: string;
    readonly isActive: boolean;
    readonly password: string;
    readonly role: UserRoles;
};

export interface SavedUser extends Document {
    readonly email: string;
    readonly fullName: string;
    readonly isActive: boolean;
    readonly role: UserRoles;
};