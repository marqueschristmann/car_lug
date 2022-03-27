import { IsNotEmpty } from 'class-validator';

export class UpdateClienteDTO {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  senha: string;
}
