import { MikroORMOptions } from '@mikro-orm/core';

import { ENVIRONMENT } from '@/core/consts/common.const';
import { seederFileName } from '@/core/helpers/string.helper';
import entities from '@/database/entities';
import repositories from '@/database/repositories';

type MikroOrmConfigType = Partial<Record<keyof MikroORMOptions, any>>;

const MikroOrmConfig: MikroOrmConfigType = {
  entities: entities,
  entityRepository: repositories as any,
  type: process.env.DB_TYPE,
  dbName: process.env.DB_DATABASE,
  clientUrl: process.env.DB_CLIENT_URL,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  debug: true,
  migrations: {
    path:
      process.env.APP_ENVIRONMENT !== ENVIRONMENT.PRODUCTION
        ? process.env.DB_MIGRATIONS_PATH
        : process.env.DB_PROD_MIGRATIONS_PATH,
    transactional: false,
  },
  seeder: {
    path: process.env.DB_SEEDERS_PATH,
    defaultSeeder: 'database.seeder',
    emit: 'ts',
    fileName: (className: string) => seederFileName(className),
  },
};

export default MikroOrmConfig;
