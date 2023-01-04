import { PropsUserEntity, User } from '../../src/app/entities/user.entity';
type Override = Partial<PropsUserEntity>

export class UserFactory {
    static make(override: Override) {
        return (
            new User({
                id: 1,
                name: 'user',
                login: 'user',
                password: '$2y$10$/.KTCCYjquhWidBTq/GfqOW7jcJnOrfp/1Fl81CejkR0wSBbm6Plu', // password
                ...override
            })
        )
    }
}