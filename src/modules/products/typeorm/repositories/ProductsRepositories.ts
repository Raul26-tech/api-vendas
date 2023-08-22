import { Product } from '../entities/Product';
import { AppDatasource } from '@shared/typeorm';

// Metodo antigo
// @EntityRepository(Product)
// export class ProductRepository extends Repository<Product> {
//   public async findByName(name: string): Promise<Product | null> {
//     const product = this.findOne({
//       where: {
//         name,
//       },
//     });

//     return await product;
//   }
// }

// Metodo recente
export const ProductRepository = AppDatasource.getRepository(Product).extend({
  findByname(name: string): Promise<Product | null> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  },
});
