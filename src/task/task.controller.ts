import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreatePostDto } from './dto/create-post-dto';

@Controller('task')
export class TaskController {
  constructor(private readonly post: TaskService) {}

  @Get()
  findAll() {
    return this.post.findAll();
  }

  @Post()
  create(@Body() post: CreatePostDto) {
    return this.post.create(post);
  }
}
