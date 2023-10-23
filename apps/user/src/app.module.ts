import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      // 全局定义
      isGlobal: true,
      load: [getConfig]
    }),
    UserModule,
    DepartmentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
