// Dependencies
import { ArgumentMetadata, Injectable, InternalServerErrorException, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';


@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
    transform(id: string, metadata: ArgumentMetadata) {
        if (!isValidObjectId(id)) throw new InternalServerErrorException('Invalid mongo id');
        return id;
    }
}
