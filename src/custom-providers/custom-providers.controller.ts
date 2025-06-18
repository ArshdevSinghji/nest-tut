import { Controller, Get } from '@nestjs/common';
import { CustomProvidersService } from './custom-providers.service';

@Controller('custom-providers')
export class CustomProvidersController {
  constructor(private readonly customServices: CustomProvidersService) {}

  @Get('message')
  getMessage() {
    return this.customServices.getCustomMessage();
  }
}
