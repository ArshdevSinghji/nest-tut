import { Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  isNumber,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

class CreateBoardDto {
  @IsInt()
  @Min(0)
  @Max(100)
  tenth: number;

  @IsInt()
  @Min(0)
  @Max(100)
  twelfth: number;
}

class CreateUniversityDto {
  @IsString()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  CGPA: number;
}

export class CreateEducationDto {
  @ValidateNested()
  @Type(() => CreateBoardDto)
  Board: CreateBoardDto;

  @ValidateNested()
  @Type(() => CreateUniversityDto)
  university: CreateUniversityDto;
}
