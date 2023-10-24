import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { getConfig } from '../utils';
import { SiteModule } from './site/site.module';
import { PageModule } from './page/page.module';
import { DatabaseModule } from 'y/comm/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      // 全局定义
      isGlobal: true,
      load: [getConfig]
    }),
    SiteModule,
    PageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
