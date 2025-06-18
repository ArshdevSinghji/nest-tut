import { Controller, Get } from '@nestjs/common';
import { ProviderService } from './provider.service';

@Controller('provider')
export class ProviderController {
  constructor(private readonly provider: ProviderService) {}

  @Get()
  get() {
    return this.provider.get();
  }
}
