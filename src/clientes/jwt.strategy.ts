import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './user.entity';
import { ClientesRepository } from './clientes.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(ClientesRepository)
    private clientesRepository: ClientesRepository,
  ) {
    super({
      secretOrKey: 'XPTO',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: { nome: string }) {
    const { nome } = payload;
    const user: User = await this.clientesRepository.findOne({ nome });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
