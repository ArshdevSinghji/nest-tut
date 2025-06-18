import { Inject, Injectable } from '@nestjs/common';
import { StringProviderService } from 'src/string-provider/string-provider.service';

@Injectable()
export class ProviderService {
  constructor(
    @Inject('TIME') private readonly time: string,
    private readonly stringProvider: StringProviderService,
  ) {}

  get() {
    return [
      this.stringProvider.get(),
      this.time.toString(),
      'This is Provider!',
    ];
  }
}
