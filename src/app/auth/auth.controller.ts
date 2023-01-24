import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { LocalAuthGuard } from './local-auth.guard';

interface RequestUser {
    user: User
}

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req: RequestUser) {
        return req.user;
    }
}
