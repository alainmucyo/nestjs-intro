import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository) private prodRepo: ProductsRepository,
  ) {}

  async insert(title: string, description: string, price: number) {
    return await this.prodRepo.save({ title, description, price });
  }

  async fetchAll() {
    return await this.prodRepo.find();
  }

  async findOne(id: number) {
    const product = await this.prodRepo.findOne(id);
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }
}
