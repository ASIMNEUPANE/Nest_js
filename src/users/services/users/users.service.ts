import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'utils/types';

@Injectable()
export class UsersService {
  private fakeUser = [
    { username: 'asim', email: 'asim@' },
    { username: 'new', email: 'new@' },
  ];
  fetchUsers() {
    return this.fakeUser;
  }

  createUser(userData: CreateUserType) {
    this.fakeUser.push(userData);
  }

  getUserById(id: number) {
    return {id:2 , username:'asim', email:'asim@gmai.com'}
  }
}
