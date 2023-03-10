import { DatabaseModule } from './../../infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule { }
