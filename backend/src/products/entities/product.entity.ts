import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 50 })
  categoria: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column('text')
  descricao: string;

  @Column('int')
  quantidade_estoque: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
