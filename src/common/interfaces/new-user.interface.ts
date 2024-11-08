export interface NewUserInterface {
    readonly email: string;
    readonly fullName: string; // First and last name, nickname, etc.
    readonly isActive: boolean;
    readonly password: string;
    readonly role: 'admin' | 'user';
}
