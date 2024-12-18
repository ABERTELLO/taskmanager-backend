// Dependencies
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

// Common
import { User } from 'src/users/entities';
import { handleException, passwordException } from 'src/common/helpers';

// Resource
import { LoginDto } from './dto';
import { private_key, public_key } from './keys';


@Injectable()
export class AuthService {

    constructor(

        @InjectModel(User.name)
        private readonly userModel: Model<User>,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
    ) { };

    async login(loginCredentials: LoginDto) {
        const user = await this.userModel.findOne({ email: loginCredentials.email });
        handleException(user);
        const checkPassword = await compare(loginCredentials.password, user.password);
        passwordException(checkPassword);
        const payload = { id: user._id, name: user.fullName };
        const token = this.jwtService.sign(payload);
        const result = { userID: user._id, token };
        return result;
    };
};