import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly repo: ProductsRepository) {}

  findAll() {
    return this.repo.findAll();
  }

  async findById(id: number) {
    const product = await this.repo.findById(id);
    if (!product) throw new NotFoundException('Produto não encontrado');
    return product;
  }

  create(dto: CreateProductDto) {
    return this.repo.createProduct(dto);
  }

  update(id: number, dto: UpdateProductDto) {
    return this.repo.updateProduct(id, dto);
  }

  delete(id: number) {
    return this.repo.deleteProduct(id);
  }
}
