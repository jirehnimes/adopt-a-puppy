import { ConfigModule } from '@nestjs/config';

import ConfigConfig from '@/framework/configs/config.config';

export default ConfigModule.forRoot(ConfigConfig);
