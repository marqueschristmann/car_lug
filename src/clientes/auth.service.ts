import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientesRepository } from './clientes.repository';
import { CreateClienteDTO } from './dtos/create-cliente';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ClientesRepository)
    private clientesRepository: ClientesRepository,
    private jwtService: JwtService,
  ) {}

  async criarC(createclienteDTO: CreateClienteDTO) {
    return this.clientesRepository.createCliente(createclienteDTO);
  }
  async signIn(
    createclienteDTO: CreateClienteDTO,
  ): Promise<{ acessToken: string }> {
    const { nome, senha } = createclienteDTO;
    const user = await this.clientesRepository.findOne({ nome });

    if (user && (await bcrypt.compare(senha, user.senha))) {
      const payload = { nome };
      const acessToken: string = this.jwtService.sign(payload);
      return { acessToken };
    } else {
      throw new UnauthorizedException('Não altorizado');
    }
  }
}
