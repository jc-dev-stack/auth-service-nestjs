import { HashFactory } from "./hash.factory";

describe("Hash Factory", () => {
    it("should to be able to create a hash by password: 'password'", async () => {
        const password = "password";
        const passwordHash = await HashFactory.generate(password);
        expect(passwordHash).toBeTruthy()
    })

    it("should be able to compare a hash with the password: 'password'", async () => {
        const password = "password";
        const passwordHash = await HashFactory.generate(password);

        const isMatch = await HashFactory.compare(passwordHash, password);
        expect(isMatch).toBe(true);
    })
})