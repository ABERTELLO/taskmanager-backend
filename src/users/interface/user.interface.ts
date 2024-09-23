export interface UserInDbInterface {
    readonly __v: number;
    readonly _id: string; // Mongo ID
    readonly email: string;
    readonly fullName: string; // First and last name, nickname, etc.
    readonly isActive: boolean;
    readonly password: string;
    readonly roles: string[]; // user, admin
}