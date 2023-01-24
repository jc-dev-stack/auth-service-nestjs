import * as bcrypt from "bcrypt";

export class HashFactory {
    static async generate(data: string) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(data, saltOrRounds);
        return hash
    }
    static async compare(data: string, hash: string) {
        const isMatch = await bcrypt.compare(data, hash)
        return isMatch;
    }
}