// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: number;

  @Column()
  is_deleted: number;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;

  @Column()
  created_by: string;

  @Column()
  updated_by: string;
}
