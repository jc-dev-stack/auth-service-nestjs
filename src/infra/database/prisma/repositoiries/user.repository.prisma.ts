import { Injectable } from '@nestjs/common';
import { User } from 'src/app/entities/user.entity';
import { UserRepositoryContract } from 'src/app/repositories/user.repositoy.contract';
import { MapperPrisma } from '../mapper/mapper.prisma';
import { PrismaService } from '../prisma.service';
@Injectable()
export class UserRepositoryPrisma implements UserRepositoryContract {
    constructor(private readonly prisma: PrismaService) { }

    async findById(id: number): Promise<User> {
        const user = await this.prisma.user.findFirst({
            where: {
                id
            }
        })
        return MapperPrisma.toDomain(user)
    }
    async update(id: number, data: Partial<Omit<User, 'id' | 'password'>>): Promise<User> {
        const user = await this.prisma.user.update({
            where: { id },
            data
        })
        return MapperPrisma.toDomain(user)
    }

    async list(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users.map(MapperPrisma.toDomain)
    }

    async findByLogin(login: string): Promise<User> {
        const user = await this.prisma.user.findFirst({
            where: {
                login
            }
        })
        return MapperPrisma.toDomain(user)
    }

    async create(data: User): Promise<User> {
        const raw = MapperPrisma.toPrisma(data)
        const user = await this.prisma.user.create({
            data: raw
        });
        return MapperPrisma.toDomain(user)
    }

}