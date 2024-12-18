// Dependencies
import { Controller, Post, Body } from '@nestjs/common';

// Resource
import { AuthService } from './auth.service';
import { LoginDto } from './dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { };

    @Post('login')
    login(@Body() loginCredentials: LoginDto) {
        return this.authService.login(loginCredentials);
    };
};