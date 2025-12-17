import { OrdersService } from '../src/orders/orders.service';
import { OrdersRepository } from '../src/orders/orders.repository';

describe('OrdersService', () => {
  let service: OrdersService;
  let repo: OrdersRepository;

  beforeEach(() => {
    repo = new OrdersRepository({} as any, {} as any);
    service = new OrdersService(repo);
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });
});
