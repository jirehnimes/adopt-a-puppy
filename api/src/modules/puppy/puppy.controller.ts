import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreatePuppyInputDto } from './dto/create-puppy.dto';
import { FindAllPuppyQueryDto } from './dto/find-all-puppy.dto';
import { UpdatePuppyInputDto } from './dto/update-puppy.dto';
// import { UpdatePuppyDto } from './dto/update-puppy.dto';
import { PuppyService } from './puppy.service';

@Controller('puppy')
export class PuppyController {
  constructor(private readonly puppyService: PuppyService) {}

  @Post()
  create(@Body() inputDto: CreatePuppyInputDto) {
    return this.puppyService.create(inputDto);
  }

  @Get()
  findAll(@Query() queryDto: FindAllPuppyQueryDto) {
    return this.puppyService.findAll(queryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.puppyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePuppyDto: UpdatePuppyInputDto) {
    return this.puppyService.update(id, updatePuppyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puppyService.remove(id);
  }
}
