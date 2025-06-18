import { Test, TestingModule } from '@nestjs/testing';
import { CustomProvidersController } from './custom-providers.controller';

describe('CustomProvidersController', () => {
  let controller: CustomProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomProvidersController],
    }).compile();

    controller = module.get<CustomProvidersController>(CustomProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
