import { ConfigModuleOptions } from '@nestjs/config';

import environments from '../environments';

const ConfigConfig: ConfigModuleOptions = {
  isGlobal: true,
  cache: true,
  load: environments,
};

export default ConfigConfig;
