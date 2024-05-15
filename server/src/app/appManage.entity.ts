// app.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AppManage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  name: string;

  @Column()
  is_deleted: number;

  @Column()
  is_disabled: number;

  @Column({ comment: "过期时间" })
  delay_date: number;
}