import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

import { GENDER } from '@/core/consts/common.const';

export class FindAllPuppyQueryDto {
  @IsString()
  @MaxLength(200)
  @IsOptional()
  search: string;

  @IsString({ each: true })
  @IsEnum(GENDER, { each: true })
  @IsOptional()
  gender: GENDER[];

  @IsString({ each: true })
  @IsOptional()
  is_vaccinated: string[];

  @IsString({ each: true })
  @IsOptional()
  is_neutered: string[];
}
