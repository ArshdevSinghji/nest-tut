import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  MinDate,
  ValidateNested,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  postTitle: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  @ValidateNested()
  @Type(() => CreateTaskDto)
  @ArrayUnique((task: CreateTaskDto) => task.title, {
    message: 'task title must be unique!',
  })
  task: CreateTaskDto[];
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @MinDate(new Date())
  start: Date;
  //   end: Date;
}
