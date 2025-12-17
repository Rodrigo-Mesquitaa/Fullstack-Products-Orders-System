import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly repo: OrdersRepository) {}

  create(dto: CreateOrderDto) {
    return this.repo.createOrder(dto);
  }

  findAll() {
    return this.repo.findAll();
  }
}
