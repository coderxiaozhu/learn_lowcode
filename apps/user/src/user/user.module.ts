import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'y/comm/database/database.module';
import { UserProviders } from './user.providers';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [
    DatabaseModule,
    DepartmentModule
  ],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
  exports: [UserService]
})
export class UserModule {}
