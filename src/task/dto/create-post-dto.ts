import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsDate,
  IsNotEmpty,
  IsString,
  Validate,
  ValidateNested,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
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

@ValidatorConstraint()
export class IsGreater implements ValidatorConstraintInterface {
  validate(date: Date) {
    return date.getTime() > Date.now();
  }
  defaultMessage(): string {
    return 'Start date must be in future!';
  }
}

@ValidatorConstraint()
export class IsGreaterThanStart implements ValidatorConstraintInterface {
  validate(end: Date, args: ValidationArguments) {
    const obj = args.object as any;
    return obj.start && end > obj.start;
  }
  defaultMessage() {
    return 'End date must be after start date';
  }
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @Type(() => Date)
  @IsDate()
  @Validate(IsGreater)
  start: Date;

  @Type(() => Date)
  @IsDate()
  @Validate(IsGreaterThanStart)
  end: Date;
}
