import { ConflictException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateClienteDTO } from './dtos/create-cliente';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class ClientesRepository extends Repository<User> {
  async createCliente(createclienteDTO: CreateClienteDTO) {
    const { nome, senha } = createclienteDTO;

    const salt = await bcrypt.genSalt();
    const hashedPass: string = await bcrypt.hash(senha, salt);

    const cliente = this.create({ nome, senha: hashedPass });
    try {
      await this.save(cliente);
    } catch (error) {
      if (error.code == '23505') {
        throw new ConflictException('usuario existente');
      } else {
        throw error;
      }
    }
  }
}
