import { EntityRepository } from '@mikro-orm/mongodb';
import { Injectable } from '@nestjs/common';

import { PuppyEntity } from '../entities';

@Injectable()
export default class PuppyRepository extends EntityRepository<PuppyEntity> {}
