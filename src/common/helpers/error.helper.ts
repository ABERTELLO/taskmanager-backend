import { NotFoundException } from '@nestjs/common';

export const handleError = (error: any) => {
    console.log(error);
};

export const handleException = (data: any) => {
    if (!data) throw new NotFoundException('Object does not exist.');
    else return;
};