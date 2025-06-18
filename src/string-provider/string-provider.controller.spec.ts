import { Test, TestingModule } from '@nestjs/testing';
import { StringProviderController } from './string-provider.controller';

describe('StringProviderController', () => {
  let controller: StringProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StringProviderController],
    }).compile();

    controller = module.get<StringProviderController>(StringProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
