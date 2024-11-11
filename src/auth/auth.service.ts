// Dependencies
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { compare, hash } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

// Common
import { User } from 'src/users/entities';
import { LoginResponseInterface, SavedUser } from 'src/common/interfaces';
import { errorResponseAuthorization, handleError, handleException, passwordException } from 'src/common/helpers';

// Resource
import { LoginDto, RegisterDto } from './dto';
import { private_key, public_key } from './keys';

const jwt = require('jsonwebtoken');


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

    async register(body: RegisterDto) {
        const encryptedPassword = await hash(body.password, 10);
        const userToSave = { ...body, password: encryptedPassword };
        const result = await this.userModel.create(userToSave);
        return result;
    };

    // authentication(req: Request, res: Response, next: NextFunction) {
    //     const token = req.headers.authorization
    //     if (!token) return res.status(403).send({ authorized: false })
    //     try {
    //         jwt.verify(token, public_key, { algorithms: ['RS256'] }, (err: any, loggedUser: any) => {
    //             if (err) return res.status(401).send(errorResponseAuthorization(401, err))
    //             const { email, password } = loggedUser
    //             this.userModel.findOne({ email }, (err: any, user: SavedUser) => {
    //                 if (err) return res.status(500).send(errorResponseAuthorization(500, err))
    //                 if (user.password === password) {
    //                     next()
    //                 } else {
    //                     return res.status(401).send(errorResponseAuthorization(401, 'Unauthorized'))
    //                 }
    //             })
    //         })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // async login(loginCredentials: LoginDto) {
    //     let data: any
    //     try {
    //         const { email, password } = loginCredentials
    //         const user = await this.userModel.findOne<SavedUser>({ email, password });
    //         const token = await this.validateCredentials(user, password)
    //         data.token = token
    //         data.userId = user._id
    //     } catch (error) {
    //         handleError(error);
    //     } finally {
    //         handleException(data);
    //         return data;
    //     }
    // }

    // validateCredentials(user: SavedUser, password: string) {
    //     let token = null
    //     const match = (password === user.password) ? true : false
    //     if (match) {
    //         token = jwt.sign(
    //             {
    //                 'email': user.email,
    //                 'password': user.password
    //             },
    //             private_key, { algorithm: 'RS256' }
    //         )
    //     }
    //     return token
    // }
}
