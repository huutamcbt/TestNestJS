import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Temperature {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
  })
  name: string;

  @Column({
    type: 'real',
  })
  TempValue: number;
}
