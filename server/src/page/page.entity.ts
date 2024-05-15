// page.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  app_id: number;

  @Column({ nullable: true, default: '' })
  schema: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ default: 0, comment: '页面类型 0 页面 1 目录' })
  type: number;

  @Column({ nullable: true, })
  icon: string;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;

  @Column()
  created_by: string;

  @Column()
  updated_by: string;
}