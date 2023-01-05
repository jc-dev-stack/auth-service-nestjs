import { User } from './../../../../app/entities/user.entity';
import Prisma from "@prisma/client";

export class MapperPrisma {
    static toPrisma(user: User) {
        return {
            name: user.name,
            login: user.login,
            password: user.password
        }
    }

    static toDomain(raw: Prisma.User) {
        return (
            new User({
                ...raw
            })
        )
    }
}