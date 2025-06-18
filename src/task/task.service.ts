import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post-dto';

@Injectable()
export class TaskService {
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

  create(post: CreatePostDto) {
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
