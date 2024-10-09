// Dependencies
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

// Common
import { PaginationParamsDto } from 'src/common/dto';
import { ParseMongoIdPipe } from 'src/common/pipes';

// Resource
import { CreateUserDto, UpdateUserDto } from './dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(@Query() paginationParams: PaginationParamsDto) {
        return this.usersService.findAll(paginationParams);
    }

    @Get(':id')
    findOne(@Param('id', ParseMongoIdPipe) id: string) {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseMongoIdPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseMongoIdPipe) id: string) {
        return this.usersService.remove(id);
    }
}
