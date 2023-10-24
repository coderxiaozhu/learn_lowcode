import { DataSource } from 'typeorm';
import { getConfig } from 'apps/low-code-test/utils';
import { NamingStrategy } from './naming.strategies';

import { User as UserMysql } from 'apps/user/src/user/entities/user.mysql.entity';
import { Department } from 'apps/user/src/department/entities/department.mysql.entity';
import { Site } from 'apps/low-code-test/src/site/entities/site.mongo.entity';
import { Page } from 'apps/low-code-test/src/page/page.entity';
import { PageConfig } from 'apps/low-code-test/src/page/page-config/page-config.entity';

const { MONGODB_CONFIG, MYSQL_CONFIG } = getConfig();

const MONGODB_DATABASE_CONFIG = {
  ...MONGODB_CONFIG,
  entities: [Site, Page, PageConfig],
};

const MYSQL_DATABASE_CONFIG = {
  ...MYSQL_CONFIG,
  namingStrategy: new NamingStrategy(),
  entities: [UserMysql, Department],
  // entities: [path.join(__dirname, `../../../../**/*.${MONGODB_CONFIG.entities}.entity{.ts}`)]
};

const MONGODB_DATA_SOURCE = new DataSource(MONGODB_DATABASE_CONFIG);

const MYSQL_DATA_SOURCE = new DataSource(MYSQL_DATABASE_CONFIG);

// 数据库注入
export const DatabaseProviders = [
  {
    provide: 'MONGODB_DATA_SOURCE',
    useFactory: async () => {
      if (!MONGODB_DATA_SOURCE.isInitialized)
        await MONGODB_DATA_SOURCE.initialize();
      return MONGODB_DATA_SOURCE;
    },
  },
  {
    provide: 'MYSQL_DATA_SOURCE',
    useFactory: async () => {
      if (!MYSQL_DATA_SOURCE.isInitialized)
        await MYSQL_DATA_SOURCE.initialize();
      return MYSQL_DATA_SOURCE;
    },
  },
];
