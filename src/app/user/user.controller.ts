import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { CreateUserDTO } from './dtos/create-user.dto';
import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly service: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get('')
    async all() {
        const { users } = await this.service.list();
        return users;
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async byId(@Param('id') id: string) {
        const { user } = await this.service.findById(parseInt(id));
        return user;
    }

    @Post('')
    async create(@Body() { name, login, password }: CreateUserDTO) {
        const { user } = await this.service.register({
            password, login, name
        });
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() { name, login, confirmPassword }: UpdateUserDTO) {
        const { user } = await this.service.update(parseInt(id), confirmPassword, {
            login,
            name
        });
        return user;
    }
}
