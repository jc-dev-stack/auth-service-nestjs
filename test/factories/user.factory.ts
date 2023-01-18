import { PropsUserEntity, User } from '../../src/app/entities/user.entity';
type Override = Partial<PropsUserEntity>

export class UserFactory {
    static make(override: Override) {
        return (
            new User({
                id: 1,
                name: 'user',
                login: 'user',
                password: '$2y$10$lca447AFeIXkSThgCaxmHuGvkvllcUfXEUW7CnskNXX8B8lEtTAmm', // password
                ...override
            })
        )
    }
}