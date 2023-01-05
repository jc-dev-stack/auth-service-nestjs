import { Injectable } from '@nestjs/common';
import { User } from 'src/app/entities/user.entity';
import { UserRepositoryContract } from 'src/app/repositories/user.repositoy.contract';
import { PrismaService } from '../prisma.service';
@Injectable()
export class UserRepositoryPrisma implements UserRepositoryContract {
    constructor(private readonly prisma: PrismaService) { }

    async list(): Promise<User> {
        throw new Error('Method not implemented.');
    }

    async findByLogin(login: string): Promise<User> {
        throw new Error('Method not implemented.');
    }

    async create(user: User): Promise<User> {
        throw new Error('Method not implemented.');
    }

}