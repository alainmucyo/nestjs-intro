import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insert(title: string, description: string, price: number): string {
    const prodId = Math.random().toString();
    const newProd = new Product(prodId, title, description, price);
    this.products.push(newProd);
    return prodId;
  }

  fetchAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((p) => p.id == id);
    if (!product) throw new NotFoundException();
    return product;
  }
}
