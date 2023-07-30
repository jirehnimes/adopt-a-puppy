import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreatePuppyInputDto } from './dto/create-puppy.dto';
// import { UpdatePuppyDto } from './dto/update-puppy.dto';
import { PuppyService } from './puppy.service';

@Controller('puppy')
export class PuppyController {
  constructor(private readonly puppyService: PuppyService) {}

  @Post()
  create(@Body() createPuppyDto: CreatePuppyInputDto) {
    return this.puppyService.create(createPuppyDto);
  }

  @Get()
  findAll() {
    return this.puppyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.puppyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePuppyDto: any) {
    return this.puppyService.update(+id, updatePuppyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puppyService.remove(+id);
  }
}
