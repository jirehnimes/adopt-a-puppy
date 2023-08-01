import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import ConfigPackage from './framework/packages/config.package';
import MikroOrmPackage from './framework/packages/mikro-orm.package';
import { PuppyModule } from './modules/puppy/puppy.module';

@Module({
  imports: [
    // Packages
    ConfigPackage,
    MikroOrmPackage,
    // App Modules
    PuppyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
