// Dependencies
import { Controller, Post, Body } from '@nestjs/common';

// Resource
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    login(@Body() loginCredentials: LoginDto) {
        return this.authService.login(loginCredentials);
    }

    @Post('register')
    register(@Body() body: RegisterDto) {
        return this.authService.register(body);
    }
}
