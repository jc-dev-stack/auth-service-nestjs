import { UserFactory } from './../../../test/factories/user.factory';
import { UserRepositoryMemory } from './../../../test/database/repositories/user.repository.memory';
import { UserService } from './user.service';
import { UserNotfoundError } from './error/user.not-found.error';
describe("User service", () => {
  it("should be able to return a list of users", async () => {
    const repository = new UserRepositoryMemory();
    const service = new UserService(repository);

    for (let i = 1; i <= 10; i++) {
      const user = UserFactory.make({});
      repository.create(user);
    }

    const { users } = await service.list();

    expect(users).toBe(repository.users);
    expect(users).toHaveLength(10);
  })

  it("should be able to return a user of login is the same 'user'", async () => {
    const repository = new UserRepositoryMemory();
    const service = new UserService(repository);

    // login: user
    repository.create(UserFactory.make({}))

    const { user } = await service.findByLogin("user");

    expect(user).toBeTruthy()
  })

  it("should be able to return a error if login is not the same 'user'", async () => {
    const repository = new UserRepositoryMemory();
    const service = new UserService(repository);

    // login: user
    repository.create(UserFactory.make({}))

    expect(async () => { return await service.findByLogin("different") }).rejects.toThrow(new UserNotfoundError())
  })
})