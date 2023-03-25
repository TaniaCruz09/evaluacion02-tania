import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './entities/shop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  controllers: [],
  providers: [],
})
export class MarcaModule {}
