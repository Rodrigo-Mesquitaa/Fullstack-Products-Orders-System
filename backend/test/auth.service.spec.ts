import { AuthService } from '../src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService(new JwtService({}));
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });
});
