// Dependencies
import { PartialType } from '@nestjs/mapped-types';

// Resource
import { CreateUserDto } from './create-user.dto';


export class UpdateUserDto extends PartialType(CreateUserDto) {}
