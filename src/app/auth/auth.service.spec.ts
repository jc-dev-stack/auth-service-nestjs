import { HashFactory } from './../../../test/factories/hash.factory';
import { UserFactory } from './../../../test/factories/user.factory';
import { UserService } from '../user/user.service';
import { UserRepositoryMemory } from './../../../test/database/repositories/user.repository.memory';
import { AuthService } from './auth.service';
describe('AuthService', () => {
  it('should be do a login', async () => {
    const repository = new UserRepositoryMemory();
    const userService = new UserService(repository);
    const authService = new AuthService(userService);
    const password = await HashFactory.generate("password");
    const user = UserFactory.make({ password })
    repository.users.push(user);
    const login = await authService.validateUser("user", "password");
    expect(repository.users).toHaveLength(1);
    expect(login).toBe(user);
  })
})