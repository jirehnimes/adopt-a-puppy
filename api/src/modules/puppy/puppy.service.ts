import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';

import PuppyEntity from '@/database/entities/puppy.entity';
import { PuppyRepository } from '@/database/repositories';

import {
  CreatePuppyInputDto,
  CreatePuppyOutputDto,
} from './dto/create-puppy.dto';
import { FindAllPuppyQueryDto } from './dto/find-all-puppy.dto';
// import { UpdatePuppyDto } from './dto/update-puppy.dto';
import { puppies } from './puppies.data';

@Injectable()
export class PuppyService {
  constructor(
    @InjectRepository(PuppyEntity)
    private readonly puppyRepository: PuppyRepository,
  ) {}

  async create(inputDto: CreatePuppyInputDto): Promise<CreatePuppyOutputDto> {
    return puppies[0] as unknown as CreatePuppyOutputDto;
  }

  async findAll(queryDto: FindAllPuppyQueryDto): Promise<PuppyEntity[]> {
    await this.puppyRepository.findAll();

    const filtered = puppies.filter((puppy: PuppyEntity) =>
      !!queryDto.search === true ? puppy.name == queryDto.search : true,
    );

    return filtered;
  }

  async findOne(id: string): Promise<PuppyEntity> {
    const result = (puppies as unknown as PuppyEntity[]).find(
      (puppy: PuppyEntity) => puppy.id === id,
    );

    return result;
  }

  update(id: number, updatePuppyDto: any) {
    return `This action updates a #${id} puppy`;
  }

  async remove(id: number): Promise<{ id: number; status: boolean }> {
    return { id, status: true };
  }
}
