import { ConfigService, registerAs } from '@nestjs/config';

import { ENVIRONMENT as ENVIRONMENT_ENUM } from '@/core/consts/common.const';

export enum APP_CONFIG {
  NAME = 'app',
  ENVIRONMENT = 'environment',
  SECRET = 'secret',
  IS_PRODUCTION = 'isProduction',
}

export const appConfig = (configService: ConfigService, key: string): any =>
  configService.get(`${APP_CONFIG.NAME}.${key}`);

enum ENV_KEYS {
  ENVIRONMENT = 'APP_ENVIRONMENT',
  SECRET = 'APP_SECRET',
}

const appEnvironment = registerAs(APP_CONFIG.NAME, () => ({
  [APP_CONFIG.ENVIRONMENT]: process.env[ENV_KEYS.ENVIRONMENT] || '',
  [APP_CONFIG.SECRET]: process.env[ENV_KEYS.SECRET] || '',
  [APP_CONFIG.IS_PRODUCTION]:
    process.env[ENV_KEYS.ENVIRONMENT] === ENVIRONMENT_ENUM.PRODUCTION,
}));

export default appEnvironment;
