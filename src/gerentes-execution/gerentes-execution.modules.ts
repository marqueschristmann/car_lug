import { Module } from '@nestjs/common';
import { GerentesModule } from 'src/gerentes/gerentes.module';
import { GerentesExecutionController } from './gerentes-execution.controller';
import { GerentesExecutionService } from './gerentes-execution.service';

@Module({
  imports: [GerentesModule],
  controllers: [GerentesExecutionController],
  providers: [GerentesExecutionService],
})
export class GerenteExecutionModules {}
