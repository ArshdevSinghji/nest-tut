import { Module } from '@nestjs/common';
import { CustomProvidersService } from './custom-providers.service';
import { CustomProvidersController } from './custom-providers.controller';

@Module({
  providers: [
    {
      provide: 'MY_CUSTOM_TOKEN',
      useValue: { message: 'Hello from custom value provider!' },
    },
    CustomProvidersService,
  ],
  controllers: [CustomProvidersController],
  exports: [CustomProvidersService],
})
export class CustomProvidersModule {}
