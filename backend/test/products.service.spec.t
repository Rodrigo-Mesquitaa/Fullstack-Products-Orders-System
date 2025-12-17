import { ProductsService } from '../src/products/products.service';
import { ProductsRepository } from '../src/products/products.repository';

describe('ProductsService', () => {
  let service: ProductsService;
  let repo: ProductsRepository;

  beforeEach(() => {
    repo = new ProductsRepository({} as any);
    service = new ProductsService(repo);
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });
});
