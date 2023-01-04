import { User } from "../entities/user.entity";

export abstract class UserRepositoryContract {
    abstract list(): Promise<User>
    abstract findByLogin(login: string): Promise<User>
    abstract create(user: User): Promise<User>
}