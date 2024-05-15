// user.controller.ts
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import {
  UserListDto,
  UserUpdateDto,
  UserDeleteDto,
  UserAddDto,
} from './user.dto';
import { User } from './user.entity';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  async getList(@Body() dto: UserListDto): Promise<User[]> {
    // Here you would add logic to filter users by userId if necessary
    return this.userService.findAll();
  }

  @Post('/update')
  async updateUser(@Body() userData: UserUpdateDto) {
    return this.userService.update(userData.id, userData);
  }

  @Get('/del')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.delete(+id);
  }

  @Post('/add')
  async addUser(@Body() userData: UserAddDto): Promise<User> {
    return this.userService.create(userData);
  }
}
