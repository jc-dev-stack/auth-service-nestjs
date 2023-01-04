import { UserFactory } from './../../test/factories/user.factory';

describe("Use entity", () => {
    it("should to be able to create a user", () => {
        const user = UserFactory.make({});
        expect(user).toBeTruthy();
    })
})