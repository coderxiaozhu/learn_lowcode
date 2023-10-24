import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { PageService } from './page.service';
import { PageConfigService } from './page-config/page-config.service';
import { Page } from './page.entity';
import { PageConfig } from './page-config/page-config.entity';

@Module({
  controllers: [PageController],
  providers: [
    PageService,
    PageConfigService,
    {
      provide: 'PAGE_REPOSITORY',
      useFactory: async (AppDataSource) =>
        await AppDataSource.getRepository(Page),
      inject: ['MONGODB_DATA_SOURCE'],
    },
    {
      provide: 'PAGE_CONFIG_REPOSITORY',
      useFactory: async (AppDataSource) =>
        await AppDataSource.getRepository(PageConfig),
      inject: ['MONGODB_DATA_SOURCE'],
    },
  ],
})
export class PageModule {}
