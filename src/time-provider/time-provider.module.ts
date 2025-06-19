import { Module, Scope } from '@nestjs/common';
import { StringProviderModule } from 'src/string-provider/string-provider.module';
import { StringProviderService } from 'src/string-provider/string-provider.service';
import { TimeProviderService } from './time-provider.service';

@Module({
  imports: [StringProviderModule],
  providers: [
    {
      provide: TimeProviderService,
      useFactory: (stringProvider: StringProviderService) => {
        return new TimeProviderService(
          stringProvider,
          new Date().toLocaleTimeString(),
        );
      },
      inject: [StringProviderService],
      scope: Scope.REQUEST,
    },
  ],
  exports: [TimeProviderService],
})
export class TimeProviderModule {}
