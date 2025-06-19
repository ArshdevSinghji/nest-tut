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
import { CreateProductDto } from './dto/create-product.dto';
import { LogExecutionTime } from 'src/decorators/log-execution-time.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly repoService: RepoService) {}

  @LogExecutionTime()
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
    @Body() body: CreateProductDto,
  ) {
    return this.repoService.upsert(id, body);
  }

  @Patch()
  upsert(@Body() body: CreateProductDto) {
    return this.repoService.upsert(body.id, body);
  }

  @Delete(':id') //DELET /repo/id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.repoService.delete(id);
  }
}
