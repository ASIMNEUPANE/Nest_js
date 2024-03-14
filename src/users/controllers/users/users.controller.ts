import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { log } from 'console';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe)  sortBy:boolean, ) {
    console.log(sortBy)
    return { usernam: 'asim', email: 'asim@' };
  } 

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {    

    console.log(id);
    return { id };
  }
}
