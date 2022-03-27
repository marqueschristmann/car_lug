import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/clientes/get-user.decoretor';
import { User } from 'src/clientes/user.entity';
import { GerentesExecutionService } from './gerentes-execution.service';

@Controller('gerentes-execution')
@UseGuards(AuthGuard('jwt'))
export class GerentesExecutionController {
  constructor(private gerentesExecutionService: GerentesExecutionService) {}

  @Post('/Gerente/:id')
  startExecutionGerete(@Param('id') id, @GetUser() user: User) {
    return this.gerentesExecutionService.executeGerente(id, user);
  }
  @Post('/Gerente/:id/finish')
  finishExecutionGerete(@Param('id') id, @GetUser() user: User) {
    return this.gerentesExecutionService.finishGerente(id, user);
  }

  @Get('/Gerente/user/')
  getUserExecutions(@GetUser() user: User) {
    return this.gerentesExecutionService.getAllbyuser(user);
  }
}
