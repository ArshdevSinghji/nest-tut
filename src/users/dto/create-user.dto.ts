import {
  IsAlpha,
  IsArray,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsPhoneNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './create-address.dto';
import { CreateEducationDto } from './create-education.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsAlpha() //contains only [a-zA-Z]
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required!',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;

  @Type(() => Number)
  @IsArray()
  // @IsInt({ each: true })
  @IsPhoneNumber('IN')
  phoneNumber: number[];

  @IsInt()
  @IsPositive()
  age: number;

  @ValidateNested()
  @Type(() => CreateEducationDto)
  education: CreateEducationDto;
}
