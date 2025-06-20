import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class RepoService<T extends { id: number }> {
  private schema: T[] = [];
  findAll() {
    return this.schema;
  }

  findOne(id: number) {
    const item = this.schema.find((i) => i.id === id);
    return item;
  }

  create(body: T) {
    this.schema.push(body);
    return body;
  }

  update(id: number, body: T) {
    const index = this.schema.findIndex((i) => i.id === id);
    if (index !== -1) {
      this.schema[index] = { ...this.schema[index], ...body };
      return this.schema[index];
    }
    return null;
  }

  upsert(id: number | undefined, body: T) {
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
