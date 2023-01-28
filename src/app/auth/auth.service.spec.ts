import { jwtConstants } from './constants';
import { HashFactory } from './../../../test/factories/hash.factory';
import { UserFactory } from './../../../test/factories/user.factory';
import { UserService } from '../user/user.service';
import { UserRepositoryMemory } from './../../../test/database/repositories/user.repository.memory';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
describe('AuthService', () => {
  it('should be do a login', async () => {
    const repository = new UserRepositoryMemory();
    const userService = new UserService(repository);
    const jwtService = new JwtService({
      secretOrPrivateKey: jwtConstants.secret
    });
    const authService = new AuthService(userService, jwtService);
    const password = await HashFactory.generate("password");
    const user = UserFactory.make({ password })
    repository.users.push(user);
    const login = await authService.validateUser("user", "password");
    expect(login.login).toBe(user.login);
  })

  it('should be able to return a token', async () => {
    const repository = new UserRepositoryMemory();
    const userService = new UserService(repository);
    const jwtService = new JwtService({
      secretOrPrivateKey: "teste"
    });
    const authService = new AuthService(userService, jwtService);
    const password = await HashFactory.generate("password");
    const user = UserFactory.make({ password })
    repository.users.push(user);
    const login = await authService.validateUser("user", "password");
    const { access_token } = await authService.login(login);
    expect(access_token).toBeTruthy();
  })
})