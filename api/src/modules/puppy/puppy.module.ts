import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { PuppyEntity } from '@/database/entities';

import { PuppyController } from './puppy.controller';
import { PuppyService } from './puppy.service';

@Module({
  imports: [MikroOrmModule.forFeature([PuppyEntity])],
  controllers: [PuppyController],
  providers: [PuppyService],
})
export class PuppyModule {}
