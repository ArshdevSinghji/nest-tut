import { Test, TestingModule } from '@nestjs/testing';
import { StringProviderService } from './string-provider.service';

describe('StringProviderService', () => {
  let service: StringProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringProviderService],
    }).compile();

    service = module.get<StringProviderService>(StringProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
