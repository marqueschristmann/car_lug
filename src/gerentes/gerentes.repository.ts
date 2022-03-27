/* eslint-disable prettier/prettier */
import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateListaCarDTO } from './dtos/create-lista-car.dto';
import { UpdateListaCarDTO } from './dtos/updade-lista-car.dto';
import { Gerente } from './gerente.entity';

@EntityRepository(Gerente)
export class GerentesRepository extends Repository<Gerente>{
  getAllGerentes() {
    ///'lista de carros';
    return this.createQueryBuilder('gerente').getMany();
  }

  getAllcarId(id) {
    ///lista de carros disponiveis
    return this.findOne(id);
  }

  createlistaCar(createListaCarDTO: CreateListaCarDTO) {
    //cadastrando carros
    const { name, marca, modelo, ano, descripition,  } = createListaCarDTO;
    const gerente = this.create({
      name,
      marca,
      modelo,
      ano,
      descripition,
    });
    return this.save(gerente);
  }

  async updateListaCar(id, updateListaCarDTO: UpdateListaCarDTO): Promise<Gerente> {
    //atualizando os carros
    const { name, marca, modelo, ano, descripition } = updateListaCarDTO;

    const gerente = await this.getAllcarId(id);

    if (!gerente)
      throw new NotFoundException(
        'você esta tentando atualizar um carro inexistente'
      );
    gerente.name = name;
    gerente.marca = marca;
    gerente.modelo = modelo;
    gerente.ano = ano;
    gerente.descripition = descripition;

    return this.save(gerente);
  }
  deleteCarro(id) {
    //deletando carros
    return (
      this.delete(id),
      'Deletado com sucesso!!! O carro não faz mais parte do sistema'
    );
  }
}
