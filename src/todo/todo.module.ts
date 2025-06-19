import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { RepoModule } from 'src/repo/repo.module';

@Module({
  imports: [RepoModule],
  controllers: [TodoController],
})
export class TodoModule {}
