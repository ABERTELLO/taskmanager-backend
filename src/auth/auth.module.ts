// Dependencies
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

// Common
import { User, UserSchema } from 'src/users/entities';

// Resource
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './config/jwt.strategy';
// import { private_key } from './keys';


@Module({
    controllers: [AuthController],
    imports: [
        ConfigModule,
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema,
        }]),
        JwtModule.register({
            global: true,
            // secret: private_key,
            secret: 'secret',
            signOptions: { expiresIn: '60s' },
        }),
    ],
    exports: [MongooseModule],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule { }
