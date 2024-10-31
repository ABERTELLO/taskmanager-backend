// Dependencies
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';

// Common
import { JwtAuthGuard } from 'src/auth/config/jwt.guard';
import { PaginationParamsDto } from 'src/common/dto';
import { ParseMongoIdPipe } from 'src/common/pipes';

// Resource
import { CreateUserDto, UpdateUserDto } from './dto';
import { UsersService } from './users.service';


@UseGuards(JwtAuthGuard)
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
