import { IsNotEmpty } from 'class-validator';

export class UpdateListaCarDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  marca: string;
  @IsNotEmpty()
  modelo: string;
  @IsNotEmpty()
  ano: number;
  @IsNotEmpty()
  descripition: string;
}
