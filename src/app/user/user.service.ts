import { User } from './../entities/user.entity';
import { UserRepositoryContract } from '../repositories/user.repositoy.contract';
import { Injectable } from '@nestjs/common';
import { UserNotfoundError } from './error/user.not-found.error';
import { BcryptTransform } from './transform/bcrypt.transform';

export interface ResponseUsers {
    users: User[]
}

export interface ResponseUser {
    user: User
}
@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepositoryContract) { }

    async list(): Promise<ResponseUsers> {
        const users = await this.repository.list();
        return {
            users
        }
    }

    async findByLogin(login: string): Promise<ResponseUser> {
        const user = await this.repository.findByLogin(login);
        if (!user) {
            throw new UserNotfoundError();
        }

        return {
            user
        }
    }

    async findById(id: number): Promise<ResponseUser> {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new UserNotfoundError;
        }
        return {
            user
        }
    }

    async register(data: User): Promise<ResponseUser> {
        const hash = await BcryptTransform.toHash(data.password);
        data.password = hash;
        const user = await this.repository.create(data);
        return {
            user
        }
    }
}
