import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/clientes/user.entity';
import { CreateListaCarDTO } from './dtos/create-lista-car.dto';
import { UpdateListaCarDTO } from './dtos/updade-lista-car.dto';
import { GerentesRepository } from './gerentes.repository';

@Injectable()
export class GerentesService {
  constructor(private gerentesRepository: GerentesRepository) {}

  getAllGerentes() {
    ///'lista de carros'
    return this.gerentesRepository.getAllGerentes();
  }

  getAllbyUser(user: User) {
    ///'lista de carros em uso'
    return this.gerentesRepository.find({ user });
  }

  getAllcarId(id) {
    return this.gerentesRepository.getAllcarId(id);
    ///return `Carros disponiveis #${id}`;
  }

  createlistaCar(createListaCarDTO: CreateListaCarDTO) {
    ///`criando listas de carros ${name}
    return this.gerentesRepository.createlistaCar(createListaCarDTO);
  }

  ///`atualizando Carros disponiveis #${id},
  updateListaCar(id, updateListaCarDTO: UpdateListaCarDTO) {
    return this.gerentesRepository.updateListaCar(id, updateListaCarDTO);
  }
  deleteCarro(id) {
    //deletar carros
    return this.gerentesRepository.deleteCarro(id);
  }
  async setExecutor(id, user) {
    const { affected } = await this.gerentesRepository.update(
      { id: id, user: null },
      { user: user },
    );
    if (affected == 1) {
      return { success: `o carro esta sendo alugado por ${user.nome}` };
    } else {
      throw new ConflictException(`o carro está alugado por ${user.nome}`);
    }
  }
  async finishExecutor(id, user) {
    const { affected } = await this.gerentesRepository.update(
      { id: id, user: user },
      { finisheAt: new Date() },
    );
    if (affected == 1) {
      return {
        success: `o aluguel do carro ${id} foi finalizado com sucesso obrigado ${user.nome}`,
      };
    } else {
      throw new ConflictException('carro esta disponivel para ser alugado');
    }
  }
}
