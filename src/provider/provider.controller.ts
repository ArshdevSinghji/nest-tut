import { Controller, Get } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { TimeProviderService } from 'src/time-provider/time-provider.service';

@Controller('provider')
export class ProviderController {
  constructor(
    private readonly provider: ProviderService,
    private readonly timeProvider: TimeProviderService,
  ) {}

  @Get()
  get() {
    return {
      P1: this.timeProvider.get(),
      P2: this.timeProvider.getTime(),
      P3: this.provider.get(),
    };
  }
}
