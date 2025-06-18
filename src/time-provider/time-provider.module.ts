import { Module, Scope } from '@nestjs/common';
import { TimeProviderController } from './time-provider.controller';
import { StringProviderModule } from 'src/string-provider/string-provider.module';

@Module({
  imports: [StringProviderModule],
  controllers: [TimeProviderController],
  providers: [
    {
      provide: 'TIME',
      useFactory: () => {
        return new Date().toLocaleString();
      },
      scope: Scope.REQUEST,
    },
  ],
  exports: ['TIME', StringProviderModule],
})
export class TimeProviderModule {}
