import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';

import { PUPPY_ENTITY_FIELD } from '@/core/entities/puppy.entity';
import PuppyEntity from '@/database/entities/puppy.entity';
import { PuppyRepository } from '@/database/repositories';

import {
  CreatePuppyInputDto,
  CreatePuppyOutputDto,
} from './dto/create-puppy.dto';
import { FindAllPuppyQueryDto } from './dto/find-all-puppy.dto';
import { UpdatePuppyInputDto } from './dto/update-puppy.dto';

@Injectable()
export class PuppyService {
  constructor(
    @InjectRepository(PuppyEntity)
    private readonly puppyRepository: PuppyRepository,
  ) {}

  async create(inputDto: CreatePuppyInputDto): Promise<CreatePuppyOutputDto> {
    try {
      const createdPuppy = await this.puppyRepository.create(inputDto);

      await this.puppyRepository.persistAndFlush(createdPuppy);

      return createdPuppy;
    } catch (error: any) {
      throw new BadRequestException(
        error?.message || 'Registering puppy failed.',
      );
    }
  }

  async findAll({
    search,
    gender,
    is_vaccinated,
    is_neutered,
  }: FindAllPuppyQueryDto): Promise<PuppyEntity[]> {
    try {
      const whereStatement: Record<string, any> = {};

      if (!!search === true) {
        whereStatement[PUPPY_ENTITY_FIELD.NAME] = { $re: `^${search}` };
      }

      if (!!gender === true && Array.isArray(gender) && gender.length > 0) {
        whereStatement[PUPPY_ENTITY_FIELD.GENDER] = { $in: gender };
      }

      if (
        !!is_vaccinated === true &&
        Array.isArray(is_vaccinated) &&
        is_vaccinated.length > 0
      ) {
        whereStatement[PUPPY_ENTITY_FIELD.IS_VACCINATED] = {
          $in: is_vaccinated,
        };
      }

      if (
        !!is_neutered === true &&
        Array.isArray(is_neutered) &&
        is_neutered.length > 0
      ) {
        whereStatement[PUPPY_ENTITY_FIELD.IS_NEUTERED] = { $in: is_neutered };
      }

      const puppies = await this.puppyRepository.findAndCount(whereStatement);

      return puppies[0];
    } catch (error: any) {
      throw new BadRequestException(
        error?.message || 'Failed to get the puppies.',
      );
    }
  }

  async findOne(id: string): Promise<PuppyEntity> {
    try {
      const puppy = await this.puppyRepository.findOneOrFail(id);

      return puppy;
    } catch (error: any) {
      console.error(error?.message || error);

      throw new BadRequestException(`Puppy not found: ${id}`);
    }
  }

  async update(id: string, updatePuppyDto: UpdatePuppyInputDto) {
    try {
      let puppy = await this.puppyRepository.findOneOrFail(id);

      puppy = Object.assign(puppy, updatePuppyDto);

      await this.puppyRepository.persistAndFlush(puppy);

      return puppy;
    } catch (error: any) {
      console.error(error?.message || error);

      throw new BadRequestException(`Updating puppy failed: ${id}`);
    }
  }

  async remove(id: string): Promise<{ id: string; status: boolean }> {
    try {
      const puppy = await this.puppyRepository.findOneOrFail(id);

      await this.puppyRepository.removeAndFlush(puppy);

      return { id, status: true };
    } catch (error: any) {
      console.error(error?.message || error);

      throw new BadRequestException(`Deleting puppy failed: ${id}`);
    }
  }
}
