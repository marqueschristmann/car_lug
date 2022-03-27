import { Injectable } from '@nestjs/common';
import { User } from 'src/clientes/user.entity';
import { GerentesService } from 'src/gerentes/gerentes.service';

@Injectable()
export class GerentesExecutionService {
  constructor(private gerenteService: GerentesService) {}

  async executeGerente(id, user) {
    //carros que serão alugados
    return this.gerenteService.setExecutor(id, user);
  }
  //aluguel finalizado
  async finishGerente(id, user) {
    return this.gerenteService.finishExecutor(id, user);
  }
  //carros que estão alugados
  getAllbyuser(user: User) {
    return this.gerenteService.getAllbyUser(user);
  }
}
