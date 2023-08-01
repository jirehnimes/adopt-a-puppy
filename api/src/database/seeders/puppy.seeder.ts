import { type EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import { puppies } from '@/modules/puppy/puppies.data';

import { PuppyEntity } from '../entities';
import { PuppyRepository } from '../repositories';

export class PuppySeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const puppyRepository = (await em.getRepository(
      PuppyEntity,
    )) as PuppyRepository;

    for (const puppy of puppies) {
      const createdPuppy = await puppyRepository.create({
        ...puppy,
      });

      await puppyRepository.persistAndFlush(createdPuppy);
    }
  }
}
