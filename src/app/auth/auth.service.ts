import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity';
import { UserService } from '../user/user.service';

export interface Payload {
    username: string
    sub: number
}

export interface ResponseLogin {
    access_token: string
}
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const { user } = await this.userService.findByLogin(username);
        if (user && user.password == pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User): Promise<ResponseLogin> {
        const payload: Payload = { username: user.login, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}
