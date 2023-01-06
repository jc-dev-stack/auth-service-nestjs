import { UserRepositoryContract } from '../../../src/app/repositories/user.repositoy.contract';
import { User } from './../../../src/app/entities/user.entity';

export class UserRepositoryMemory implements UserRepositoryContract {

    public users: User[] = [];

    async list(): Promise<User[]> {
        return this.users;
    }
    async findByLogin(login: string): Promise<User> {
        const index = this.users.findIndex(user => user.login === login);
        return this.users[index];
    }
    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

}