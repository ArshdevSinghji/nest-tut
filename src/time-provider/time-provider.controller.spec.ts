import { Test, TestingModule } from '@nestjs/testing';
import { TimeProviderController } from './time-provider.controller';

describe('TimeProviderController', () => {
  let controller: TimeProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeProviderController],
    }).compile();

    controller = module.get<TimeProviderController>(TimeProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
