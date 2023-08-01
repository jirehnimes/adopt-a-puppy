import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { ConfigService } from '@nestjs/config';

import { seederFileName } from '@/core/helpers/string.helper';
import entities from '@/database/entities';
import repositories from '@/database/repositories';
import {
  APP_CONFIG,
  appConfig,
} from '@/framework/environments/app.environment';
import {
  DATABASE_CONFIG,
  databaseConfig,
} from '@/framework/environments/database.environment';

type MikroOrmConfigType =
  | Promise<Omit<MikroOrmModuleOptions<any>, 'contextName'>>
  | Omit<MikroOrmModuleOptions<any>, 'contextName'>;

const MikroOrmConfig = (configService: ConfigService): MikroOrmConfigType => ({
  entities: entities,
  entityRepository: repositories as any,
  type: databaseConfig(configService, DATABASE_CONFIG.TYPE),
  dbName: databaseConfig(configService, DATABASE_CONFIG.DATABASE),
  clientUrl: databaseConfig(configService, DATABASE_CONFIG.CLIENT_URL),
  user: databaseConfig(configService, DATABASE_CONFIG.USERNAME),
  password: databaseConfig(configService, DATABASE_CONFIG.PASSWORD),
  debug: !appConfig(configService, APP_CONFIG.IS_PRODUCTION),
  migrations: {
    path: appConfig(configService, APP_CONFIG.IS_PRODUCTION)
      ? databaseConfig(configService, DATABASE_CONFIG.MIGRATIONS_PATH)
      : databaseConfig(configService, DATABASE_CONFIG.MIGRATIONS_PROD_PATH),
    transactional: false,
  },
  seeder: {
    path: process.env.DB_SEEDERS_PATH,
    defaultSeeder: 'database.seeder',
    emit: 'ts',
    fileName: (className: string) => seederFileName(className),
  },
});

export default MikroOrmConfig;
