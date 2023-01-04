import { User } from "./user.entity"

describe("Use entity", () => {
    it("should to be able to create a user", () => {
        const user = new User({
            name: 'user',
            login: 'user',
            password: '$2y$10$zo.beDMzLz0X8Py5Poiu2OGG/6Fu8rpeCbC6ia7CIXNyu5mBs4Nw6' //password
        })

        expect(user).toBeTruthy();
        expect(user.password).toBe('$2y$10$zo.beDMzLz0X8Py5Poiu2OGG/6Fu8rpeCbC6ia7CIXNyu5mBs4Nw6')
    })
})