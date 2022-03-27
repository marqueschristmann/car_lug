import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateClienteDTO } from './dtos/create-cliente';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/CriarC')
  async criarC(@Body() createclienteDTO: CreateClienteDTO) {
    return this.authService.criarC(createclienteDTO);
  }
  @Post('/signin')
  async signIn(
    @Body() createclienteDTO: CreateClienteDTO,
  ): Promise<{ acessToken: string }> {
    return this.authService.signIn(createclienteDTO);
  }
}
