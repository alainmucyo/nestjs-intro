import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly prodService: ProductsService) {}

  @Get()
  index(): Product[] {
    return this.prodService.fetchAll();
  }

  @Get('/:id')
  show(@Param('id') id: string): Product {
    return this.prodService.findOne(id);
  }

  @Post()
  create(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): any {
    const generatedId = this.prodService.insert(title, description, price);
    return { id: generatedId };
  }
}
