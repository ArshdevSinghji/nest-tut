import { Injectable } from '@nestjs/common';
import { StringProviderService } from 'src/string-provider/string-provider.service';

@Injectable()
export class TimeProviderService {
  constructor(
    private readonly stringProvider: StringProviderService,
    private readonly currentTime: string,
  ) {}

  get() {
    return this.stringProvider.get();
  }
  getTime() {
    return this.currentTime;
  }
}
