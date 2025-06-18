import { IsEnum, IsOptional } from 'class-validator';

export class CreateUserQueryDto {
  @IsOptional()
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required from the class validator!',
  })
  role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
