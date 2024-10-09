// Dependencies
import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    readonly fullName: string; // First and last name, nickname, etc.
    @IsBoolean()
    readonly isActive: boolean;
    @IsNotEmpty()
    @IsString()
    @IsStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
    })
    readonly password: string;
    @IsString()
    readonly roles: string[]; // user, admin
}