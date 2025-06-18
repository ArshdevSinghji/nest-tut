import { Test, TestingModule } from '@nestjs/testing';
import { CustomProvidersService } from './custom-providers.service';

describe('CustomProvidersService', () => {
  let service: CustomProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomProvidersService],
    }).compile();

    service = module.get<CustomProvidersService>(CustomProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
