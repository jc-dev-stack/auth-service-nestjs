import { HashFactory } from './../../../test/factories/hash.factory';
import { User } from './../entities/user.entity';
import { UserRepositoryContract } from '../repositories/user.repositoy.contract';
import { Injectable } from '@nestjs/common';
import { UserNotfoundError } from './error/user.not-found.error';
import { CredentialError } from './error/credential.error';

export interface RequestUser {
    login: string
    name: string
    password: string
}
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

    async verifyUser(id: number, confirmPassword: string): Promise<boolean> {
        const user = await this.repository.findById(id);
        const isMatch = await HashFactory.compare(confirmPassword, user.password);
        return isMatch;
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

    async register({ password, login, name }: RequestUser): Promise<ResponseUser> {
        const hash = await HashFactory.generate(password);
        password = hash;
        const data = new User({
            login,
            name,
            password
        })
        const user = await this.repository.create(data);
        return {
            user
        }
    }

    async update(id: number, confirmPassword: string, { login, name }: Partial<Omit<RequestUser, "password">>): Promise<ResponseUser> {
        const isMatch = await this.verifyUser(id, confirmPassword);
        if (!isMatch) {
            throw new CredentialError;
        }
        const user = await this.repository.update(id, {
            login,
            name
        })
        return {
            user
        }
    }
}
