// Dependencies
import { NotFoundException } from '@nestjs/common';


export const handleError = (error: any): void => {
    console.log(error);
};

export const handleException = (data: any): void => {
    if (!data) throw new NotFoundException('Object does not exist.');
};