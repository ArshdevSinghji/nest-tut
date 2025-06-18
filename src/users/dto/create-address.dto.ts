import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  permanentAddress: string;

  @IsString()
  @IsNotEmpty()
  // @MaxLength()
  currentAddress: string;

  @IsInt() // checks if it's an integer number
  //@IsNumber() checks if it's a number
  @IsPositive()
  @Min(100000)
  @Max(999999)
  pincode: number;
}
