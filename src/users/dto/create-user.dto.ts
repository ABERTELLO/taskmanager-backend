// Dependencies
import {
    IsBoolean,
    IsEmail,
    IsIn,
    IsNotEmpty,
    IsString,
    IsStrongPassword
} from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    readonly fullName: string; // First and last name, nickname, etc.
    @IsBoolean()
    readonly isActive: boolean = false;
    @IsNotEmpty()
    @IsString()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 0
    })
    readonly password: string;
    @IsBoolean()
    readonly rememberMe: boolean = false;
    @IsIn(['admin', 'user'])
    readonly role: string = 'user';
}