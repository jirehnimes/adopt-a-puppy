import { Injectable } from '@nestjs/common';

import PuppyEntity from '@/database/entities/puppy.entity';

import {
  CreatePuppyInputDto,
  CreatePuppyOutputDto,
} from './dto/create-puppy.dto';
// import { UpdatePuppyDto } from './dto/update-puppy.dto';
import { puppies } from './puppies.data';

@Injectable()
export class PuppyService {
  async create(
    createPuppyDto: CreatePuppyInputDto,
  ): Promise<CreatePuppyOutputDto> {
    return puppies[0] as unknown as CreatePuppyOutputDto;
  }

  async findAll(): Promise<PuppyEntity[]> {
    return puppies as unknown as PuppyEntity[];
  }

  async findOne(id: number): Promise<PuppyEntity> {
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
