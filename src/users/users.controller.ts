import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ValidationPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserQueryDto } from './dto/create-user-query-dto';

@Controller('users') //@ are decorators
export class UsersController {
  //const userService = new UserService()
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  // findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
  //   return this.usersService.findAll(role);
  // }
  findAll(@Query() query: CreateUserQueryDto) {
    //@Query(ValidationPipe)
    return this.usersService.findAll(query.role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    //all params are strings
    return this.usersService.findOne(id); //uniary plus
  }

  @Post() // POST /users
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) userUpdate: UpdateUserDto,
  ) {
    return this.usersService.update(id, userUpdate);
  }

  @Delete(':id') //  DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(+id);
  }

  // @Patch(':id')
  // upsert(@Param('id') id: string, @Body() userUpdated: IUser) {
  //   return this.usersService.upsert(+id, userUpdated);
  // }
}
