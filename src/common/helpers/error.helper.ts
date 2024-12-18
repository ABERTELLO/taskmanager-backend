// Dependencies
import { NotFoundException } from '@nestjs/common';


export const errorResponse = (code: number, error: any) => {
    return {
        code,
        message: 'Error',
        printStackTrace: error
    };
};

export const handleError = (error: any) => {
    return errorResponse(error.code, error);
};

export const handleException = (data: any): void => {
    if (!data) throw new NotFoundException('Object does not exist.');
};

export const passwordException = (checkPassword: boolean): void => {
    if (!checkPassword) throw new NotFoundException('Incorrect password.');
};

export const successResponseWithToken = (token: string, userId: string) => {
    return {
        code: 200,
        message: 'OK',
        token,
        data: userId
    };
};