import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Order } from './entities/order.entity';
import { Product } from '../products/entities/product.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepo: Repository<Order>,
    @InjectRepository(Product)
    private readonly productsRepo: Repository<Product>,
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    const productIds = dto.produtos.map((p) => p.id);
    const products = await this.productsRepo.find({ where: { id: In(productIds) } });

    for (const item of dto.produtos) {
      const product = products.find((p) => p.id === item.id);
      if (!product || product.quantidade_estoque < item.quantidade) {
        throw new BadRequestException(`Estoque insuficiente para ${product?.nome ?? 'produto desconhecido'}`);
      }

      if (dto.status === 'Concluído') {
        product.quantidade_estoque -= item.quantidade;
        await this.productsRepo.save(product);
      }
    }

    const order = this.ordersRepo.create({
      produtos: products,
      total_pedido: dto.total_pedido,
      status: dto.status,
    });

    return this.ordersRepo.save(order);
  }

  findAll(): Promise<Order[]> {
    return this.ordersRepo.find({ relations: ['produtos'] });
  }
}
