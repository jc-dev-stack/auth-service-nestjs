import { BcryptTransform } from "./bcrypt.transform";

describe("Bcrypt Transform", () => {
    it("should to be able to create a hash by password: 'password'", async () => {
        const password = "password";
        const passwordHash = await BcryptTransform.toHash(password);
        console.log(passwordHash);
        expect(passwordHash).toBeTruthy()
    })

    it("should be able to compare a hash with the password: 'password'", async () => {
        const password = "password";
        const passwordHash = await BcryptTransform.toHash(password);

        const isMatch = await BcryptTransform.compareHash(passwordHash, password);
        console.log(isMatch);
        expect(isMatch).toBe(true);
    })
})