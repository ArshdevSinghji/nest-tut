import { Test, TestingModule } from '@nestjs/testing';
import { TimeProviderService } from './time-provider.service';

describe('TimeProviderService', () => {
  let service: TimeProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeProviderService],
    }).compile();

    service = module.get<TimeProviderService>(TimeProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
