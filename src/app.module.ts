import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule]
})
export class AppModule { }
