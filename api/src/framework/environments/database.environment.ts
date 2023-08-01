import { ConfigService, registerAs } from '@nestjs/config';

export enum DATABASE_CONFIG {
  NAME = 'database',
  TYPE = 'type',
  CLIENT_URL = 'client_url',
  USERNAME = 'username',
  PASSWORD = 'password',
  DATABASE = 'database',
  MIGRATIONS_PATH = 'migrationsPath',
  MIGRATIONS_PROD_PATH = 'migrationsProdPath',
  SEEDERS_PATH = 'seedersPath',
  SEEDERS_PROD_PATH = 'seedersProdPath',
}

export const databaseConfig = (configService: ConfigService, key: string) =>
  configService.get(`${DATABASE_CONFIG.NAME}.${key}`);

enum ENV_KEYS {
  TYPE = 'DB_TYPE',
  CLIENT_URL = 'DB_CLIENT_URL',
  USERNAME = 'DB_USERNAME',
  PASSWORD = 'DB_PASSWORD',
  DATABASE = 'DB_DATABASE',
  MIGRATIONS_PATH = 'DB_MIGRATIONS_PATH',
  MIGRATIONS_PROD_PATH = 'DB_PROD_MIGRATIONS_PATH',
  SEEDERS_PATH = 'DB_SEEDERS_PATH',
  SEEDERS_PROD_PATH = 'DB_PROD_SEEDERS_PATH',
}

const databaseEnvironment = registerAs(DATABASE_CONFIG.NAME, () => ({
  [DATABASE_CONFIG.TYPE]: process.env[ENV_KEYS.TYPE],
  [DATABASE_CONFIG.CLIENT_URL]: process.env[ENV_KEYS.CLIENT_URL],
  [DATABASE_CONFIG.USERNAME]: process.env[ENV_KEYS.USERNAME],
  [DATABASE_CONFIG.PASSWORD]: process.env[ENV_KEYS.PASSWORD],
  [DATABASE_CONFIG.DATABASE]: process.env[ENV_KEYS.DATABASE],
  [DATABASE_CONFIG.MIGRATIONS_PATH]: process.env[ENV_KEYS.MIGRATIONS_PATH],
  [DATABASE_CONFIG.MIGRATIONS_PROD_PATH]:
    process.env[ENV_KEYS.MIGRATIONS_PROD_PATH],
  [DATABASE_CONFIG.SEEDERS_PATH]: process.env[ENV_KEYS.SEEDERS_PATH],
  [DATABASE_CONFIG.SEEDERS_PROD_PATH]: process.env[ENV_KEYS.SEEDERS_PROD_PATH],
}));

export default databaseEnvironment;
