import { Injectable } from '@nestjs/common';
import { CreatePostDto, CreateTaskDto } from './dto/create-post-dto';
import {
  LogClassExecutionTime,
  LogExecutionTime,
} from 'src/decorators/log-execution-time.decorator';

@Injectable()
@LogClassExecutionTime()
export class TaskService {
  // onModuleInit() {
  //   Logger.log(
  //     `${TaskService.name} class initialized at: ${new Date().toLocaleTimeString()}`,
  //   );
  // }

  private post = [
    {
      postTitle: 'This is Life...',
      desc: 'It is fun!',
      task: [
        {
          title: 'gym',
          start: new Date(),
          end: new Date(new Date().getTime() + 60 * 60 * 1000),
        },
        {
          title: 'class',
          start: new Date(),
          end: new Date(new Date().getTime() + 60 * 60 * 1000),
        },
      ],
    },
  ];

  @LogExecutionTime()
  async create(post: CreatePostDto): Promise<{
    postTitle: string;
    desc: string;
    task: CreateTaskDto[];
  }> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newPost = {
      postTitle: post.postTitle,
      desc: post.desc,
      task: post.task,
    };
    this.post.push(newPost);
    return newPost;
  }

  findAll() {
    return this.post;
  }
}
