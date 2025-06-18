import { Module } from '@nestjs/common';
import { StringProviderController } from './string-provider.controller';
import { StringProviderService } from './string-provider.service';

@Module({
  controllers: [StringProviderController],
  providers: [StringProviderService],
  exports: [StringProviderService],
})
export class StringProviderModule {}
