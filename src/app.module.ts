import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProviderModule } from './provider/provider.module';
import { TaskModule } from './task/task.module';
import { RepoModule } from './repo/repo.module';
import { TodoModule } from './todo/todo.module';
import { PostModule } from './post/post.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    UsersModule,
    ProviderModule,
    TaskModule,
    RepoModule,
    TodoModule,
    PostModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
