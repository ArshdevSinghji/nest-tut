import { Module } from '@nestjs/common';
import { StringProviderService } from './string-provider.service';

@Module({
  providers: [StringProviderService],
  exports: [StringProviderService],
})
export class StringProviderModule {}
