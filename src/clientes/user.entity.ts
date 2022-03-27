import { Gerente } from 'src/gerentes/gerente.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  nome: string;
  @Column()
  senha: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Gerente, (gerente) => gerente.user, { eager: true })
  gerentes: Gerente[];
  name: any;
}
