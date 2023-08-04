import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import sanitizeHtml from 'sanitize-html';

import { GENDER } from '@/core/consts/common.const';
import { PUPPY_SIZE } from '@/core/consts/puppy.const';
import PuppyEntity from '@/database/entities/puppy.entity';

export class CreatePuppyInputDto implements Partial<PuppyEntity> {
  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeHtml(value))
  name: string;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsEnum(GENDER)
  @IsNotEmpty()
  gender: GENDER;

  @IsString()
  @IsEnum(PUPPY_SIZE)
  @IsNotEmpty()
  size: PUPPY_SIZE;

  @IsBoolean()
  @IsOptional()
  is_vaccinated?: boolean;

  @IsBoolean()
  @IsOptional()
  is_neutered?: boolean;

  @IsString()
  @IsNotEmpty()
  photo_url: string;

  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  breed: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  traits?: string[];
}

export class CreatePuppyOutputDto
  extends CreatePuppyInputDto
  implements PuppyEntity
{
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString({ each: true })
  @IsArray()
  traits: string[];
}
