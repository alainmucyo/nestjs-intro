import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from './products.entity';

@EntityRepository(ProductEntity)
export class ProductsRepository extends Repository<ProductEntity> {}
