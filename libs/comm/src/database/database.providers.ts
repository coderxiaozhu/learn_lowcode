import { DataSource } from 'typeorm';
import { getConfig } from 'apps/low-code-test/utils';
import { NamingStrategy } from './naming.strategies';

import * as path from 'path'
import { User } from 'apps/low-code-test/src/user/user.mongo.entity';
import { User as UserMysql } from 'apps/user/src/user/entities/user.mysql.entity';
import { Department } from 'apps/user/src/department/entities/department.mysql.entity';

const { MONGODB_CONFIG, MYSQL_CONFIG } = getConfig();

const MONGODB_DATABASE_CONFIG = {
  ...MONGODB_CONFIG,
  entities: [User]
};

const MYSQL_DATABASE_CONFIG = {
  ...MYSQL_CONFIG,
  namingStrategy: new NamingStrategy(),
  entities: [UserMysql, Department]
  // entities: [path.join(__dirname, `../../../../**/*.${MONGODB_CONFIG.entities}.entity{.ts}`)]
};

const MONGODB_DATA_SOURCE = new DataSource(MONGODB_DATABASE_CONFIG);

const MYSQL_DATA_SOURCE = new DataSource(MYSQL_DATABASE_CONFIG);

// 数据库注入
export const DatabaseProviders = [
  {
    provide: 'MONGODB_DATA_SOURCE',
    useFactory: async () => {
      if (!MONGODB_DATA_SOURCE.isInitialized) await MONGODB_DATA_SOURCE.initialize();
      return MONGODB_DATA_SOURCE;
    },
  },
  {
    provide: 'MYSQL_DATA_SOURCE',
    useFactory: async () => {
      if (!MYSQL_DATA_SOURCE.isInitialized) await MYSQL_DATA_SOURCE.initialize();
      return MYSQL_DATA_SOURCE;
    },
  },
];
