import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule]
})
export class AppModule { }
