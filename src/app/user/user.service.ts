import { User } from './../entities/user.entity';
import { UserRepositoryContract } from '../repositories/user.repositoy.contract';
import { Injectable } from '@nestjs/common';
import { UserNotfoundError } from './error/user.not-found.error';

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
}
