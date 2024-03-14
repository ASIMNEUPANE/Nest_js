import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { usernam: 'asim', email: 'asim@' };
  }
  @Get('posts')
  getUsersPosts() {
    return [
      {
        usename: 'asim',
        email: 'asim@',
        posts: [
          { id: 1, title: 'post-1' },
          { id: 2, title: 'post-2' },
        ],
      },
    ];
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData)
    return{}
  }
}
