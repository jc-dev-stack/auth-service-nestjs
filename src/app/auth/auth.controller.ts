import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../entities/user.entity';

interface RequestUser {
    user: User
}

@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req: RequestUser) {
        return req.user;
    }
}
