import { Module } from '@nestjs/common';
import { UserRepositoryContract } from 'src/app/repositories/user.repositoy.contract';
import { PrismaService } from './prisma/prisma.service';
import { UserRepositoryPrisma } from './prisma/repositoiries/user.repository.prisma';

@Module({
    providers: [
        PrismaService,
        {
            provide: UserRepositoryContract,
            useClass: UserRepositoryPrisma
        }
    ],
    exports: [UserRepositoryContract]
})
export class DatabaseModule { }
