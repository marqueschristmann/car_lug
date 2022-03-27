import { Module } from '@nestjs/common';
import { GerentesModule } from './gerentes/gerentes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './clientes/auth.module';
import { GerentesExecutionController } from './gerentes-execution/gerentes-execution.controller';
import { GerentesExecutionService } from './gerentes-execution/gerentes-execution.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'marques',
      password: 'wertyui',
      database: 'car',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GerentesModule,
    AuthModule,
  ],
  controllers: [GerentesExecutionController],
  providers: [GerentesExecutionService],
})
export class AppModule {}
