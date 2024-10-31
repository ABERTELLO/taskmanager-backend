// Dependencies
import { IsArray, IsBoolean, IsEmail, IsIn, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';


export class RegisterDto {
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
        minLength: 6,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 0,
        minUppercase: 1,
    })
    readonly password: string;
    @IsBoolean()
    readonly rememberMe: boolean = false;
    @IsIn(['admin', 'user'])
    readonly role: string = 'user';
}