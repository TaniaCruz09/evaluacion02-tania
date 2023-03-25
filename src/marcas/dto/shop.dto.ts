import { IsNotEmpty, MinLength, IsString } from 'class-validator';
import {
  IsNumber,
  IsOptional,
} from 'class-validator/types/decorator/decorators';
import { Unique } from 'typeorm';

export class CreateProduct {
  @IsString()
  @IsNotEmpty()
  @Unique(['nombre'])
  @MinLength(5)
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  @Unique(['categoria'])
  categoria: string;

  @IsString()
  @IsNotEmpty()
  @Unique(['pais_origen'])
  @MinLength(3)
  pais_origen: string;

  @IsString()
  @IsOptional()
  observacion: string;
}
