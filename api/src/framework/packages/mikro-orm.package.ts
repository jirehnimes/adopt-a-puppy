import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigService } from '@nestjs/config';

import MikroOrmConfig from '@/framework/configs/mikro-orm.config';

export default MikroOrmModule.forRootAsync({
  useFactory: (configService: ConfigService) => MikroOrmConfig(configService),
  inject: [ConfigService],
});
