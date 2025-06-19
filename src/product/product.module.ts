import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { RepoModule } from 'src/repo/repo.module';

@Module({
  imports: [RepoModule],
  controllers: [ProductController],
})
export class ProductModule {}
