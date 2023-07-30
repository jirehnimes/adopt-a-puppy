import { Test, TestingModule } from '@nestjs/testing';
import { PuppyController } from './puppy.controller';
import { PuppyService } from './puppy.service';

describe('PuppyController', () => {
  let controller: PuppyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuppyController],
      providers: [PuppyService],
    }).compile();

    controller = module.get<PuppyController>(PuppyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
