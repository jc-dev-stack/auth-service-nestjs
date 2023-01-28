import { JwtAuthGuard } from './jwt-auth.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

interface RequestUser {
    user: User
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req: RequestUser) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    async getProfile(@Request() req: RequestUser) {
        return req.user
    }
}
