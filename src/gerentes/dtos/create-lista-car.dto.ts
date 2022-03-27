import { IsNotEmpty } from 'class-validator';

export class CreateListaCarDTO {
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
