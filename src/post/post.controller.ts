import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { RepoService } from 'src/repo/repo.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly repoService: RepoService) {}

  @Get() //GET /repo
  findAll() {
    return this.repoService.findAll();
  }

  @Get(':id') //GET /repo/id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.repoService.findOne(id);
  }

  @Patch(':id')
  upsertWithId(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreatePostDto,
  ) {
    return this.repoService.upsert(id, body);
  }

  @Patch()
  upsert(@Body() body: CreatePostDto) {
    return this.repoService.upsert(body.id, body);
  }

  @Delete(':id') //DELET /repo/id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.repoService.delete(id);
  }
}
