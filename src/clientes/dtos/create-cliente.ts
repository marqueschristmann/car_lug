import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClienteDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(8)
  nome: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(25)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm, {
    message: 'Senha fraca',
  })
  senha: string;
}
