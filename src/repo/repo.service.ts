import { Injectable, Scope } from '@nestjs/common';
import { Post } from 'src/post/interface/post.interface';
import { Product } from 'src/product/interface/product.interface';
import { Todo } from 'src/todo/interface/todo.interface';

@Injectable({ scope: Scope.TRANSIENT })
export class RepoService {
  private schema: (Post | Product | Todo)[] = [];
  findAll() {
    return this.schema;
  }

  findOne(id: number) {
    const item = this.schema.find((i) => i.id === id);
    return item;
  }

  create(body) {
    this.schema.push(body);
    return body;
  }

  update(id: number, body) {
    const index = this.schema.findIndex((i) => i.id === id);
    if (index !== -1) {
      this.schema[index] = { ...this.schema[index], ...body };
      return this.schema[index];
    }
    return null;
  }

  upsert(id: number | undefined, body) {
    if (id && this.findOne(id)) {
      return this.update(id, body);
    }
    return this.create(body);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.schema = this.schema.filter((i) => i.id !== id);
    return removedUser;
  }
}
