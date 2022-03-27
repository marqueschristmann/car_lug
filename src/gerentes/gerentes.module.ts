import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/clientes/auth.module';
import { GerentesController } from './gerentes.controller';
import { GerentesRepository } from './gerentes.repository';
import { GerentesService } from './gerentes.service';

@Module({
  imports: [TypeOrmModule.forFeature([GerentesRepository]), AuthModule],
  controllers: [GerentesController],
  providers: [GerentesService],
  exports: [GerentesService],
})
export class GerentesModule {}
