import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Product)
  @JoinTable()
  produtos: Product[];

  @Column('decimal', { precision: 10, scale: 2 })
  total_pedido: number;

  @Column({ default: 'Pendente' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
