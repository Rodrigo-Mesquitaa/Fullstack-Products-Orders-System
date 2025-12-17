import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.repo.find();
  }

  async findById(id: number): Promise<Product> {
    const product = await this.repo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  createProduct(dto: CreateProductDto): Promise<Product> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async updateProduct(id: number, dto: UpdateProductDto): Promise<Product> {
    await this.repo.update(id, dto);
    return this.findById(id); // já trata o caso de null
  }

  async deleteProduct(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
  }
}