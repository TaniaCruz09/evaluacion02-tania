import { IsNotEmpty, MinLength, IsString } from 'class-validator';
import { IsNumber } from 'class-validator/types/decorator/decorators';
import { Unique } from 'typeorm';

export class CreateProduct {
  @IsString()
  @IsNotEmpty()
  @Unique(['nombre'])
  @MinLength(10)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
