import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class ProviderService {
  get() {
    return 'This is provider!';
  }
}
