import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users') //@ are decorators
export class UsersController {
  //const userService = new UserService()
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    //all params are strings
    return this.usersService.findOne(+id); //uniary plus
  }

  @Post() // POST /users
  create(@Body() user: IUser) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: IUser) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') //  DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
