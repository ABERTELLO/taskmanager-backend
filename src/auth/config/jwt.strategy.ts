// Dependencies
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// Resource
import { private_key } from '../keys';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            //   secretOrKey: private_key,
            secretOrKey: 'secret',
        });
    };

    async validate(payload: any) {
        return { userId: payload.id, username: payload.name };
    };
};