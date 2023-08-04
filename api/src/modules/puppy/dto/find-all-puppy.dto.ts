import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import sanitizeHtml from 'sanitize-html';

import { GENDER } from '@/core/consts/common.const';
import { convertStringBooleans } from '@/core/helpers/string.helper';

export class FindAllPuppyQueryDto {
  @IsString()
  @MaxLength(200)
  @IsOptional()
  @Transform(({ value }) => sanitizeHtml(value))
  search: string;

  @IsEnum(GENDER, { each: true })
  @IsString({ each: true })
  @Transform(({ value }) =>
    String(value)
      .split(',')
      .map((value: string) => sanitizeHtml(value)),
  )
  @IsOptional()
  gender: string;

  @IsBoolean({ each: true })
  @Transform(({ value }) =>
    convertStringBooleans(
      String(value)
        .split(',')
        .map((value: string) => sanitizeHtml(value)),
    ),
  )
  @IsOptional()
  is_vaccinated: string[];

  @IsBoolean({ each: true })
  @Transform(({ value }) =>
    convertStringBooleans(
      String(value)
        .split(',')
        .map((value: string) => sanitizeHtml(value)),
    ),
  )
  @IsOptional()
  is_neutered: string[];
}
