import { User } from 'src/clientes/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gerente {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  marca: string;
  @Column()
  modelo: string;
  @Column()
  ano: number;
  @Column()
  descripition: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne((type: string) => User, (user) => user.gerentes, { eager: false })
  user: User;
  @Column({ nullable: true })
  finisheAt: Date;
}
