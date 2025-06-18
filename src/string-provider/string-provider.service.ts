import { Injectable } from '@nestjs/common';

@Injectable()
export class StringProviderService {
  get() {
    return 'This is String Provider!';
  }
}
