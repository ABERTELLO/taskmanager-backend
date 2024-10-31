// Dependencies
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';


export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @IsBoolean()
    readonly isActive: boolean = true;
    @IsNotEmpty()
    @IsString()
    readonly password: string;
    @IsBoolean()
    readonly rememberMe: boolean = false;
};
