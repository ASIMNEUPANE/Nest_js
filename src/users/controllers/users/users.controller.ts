import { Controller, Get, Post,Req, Res } from '@nestjs/common';
import {request, response } from 'express';

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
  createUser(@Req() request: Request, @Res() response:Response){
    console.log(request.body)
  }
}
