import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { RepoModule } from 'src/repo/repo.module';

@Module({
  imports: [RepoModule],
  controllers: [PostController],
})
export class PostModule {}
