import * as bcrypt from "bcrypt";

export class BcryptTransform {
    static async toHash(data: string): Promise<string> {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(data, saltOrRounds);
        return hash
    }

    static async compareHash(hash: string, data: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(data, hash)
        return isMatch;
    }
}