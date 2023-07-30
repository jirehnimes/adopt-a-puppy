import { Test, TestingModule } from '@nestjs/testing';

import { CreatePuppyOutputDto } from './dto/create-puppy.dto';
import { puppies } from './puppies.data';
import { PuppyService } from './puppy.service';

describe('PuppyService', () => {
  let service: PuppyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuppyService],
    }).compile();

    service = module.get<PuppyService>(PuppyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return created puppy', async () => {
      const { id, ...inputData } = puppies[0];

      const result = await service.create(inputData as any);

      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
      expect(result).toMatchObject<CreatePuppyOutputDto>(puppies[0] as any);
    });
  });

  describe('findAll', () => {
    it('should return all puppies', async () => {
      const result = await service.findAll();

      expect(result).toBeTruthy();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('findOne', () => {
    it('should return a puppy', async () => {
      const result = await service.findOne(1);

      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
      expect(result).toMatchObject<CreatePuppyOutputDto>(puppies[0] as any);
    });
  });

  describe('remove', () => {
    it('should return delete status', async () => {
      const result = await service.remove(1);

      expect(result).toBeTruthy();
      expect(typeof result).toBe('object');
    });
  });
});
