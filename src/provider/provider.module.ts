import { Module } from '@nestjs/common';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';
import { TimeProviderModule } from 'src/time-provider/time-provider.module';

@Module({
  imports: [TimeProviderModule],
  providers: [ProviderService],
  controllers: [ProviderController],
})
export class ProviderModule {}
