import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  task: string;
}
