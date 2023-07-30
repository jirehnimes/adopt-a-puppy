import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuppyModule } from './modules/puppy/puppy.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PuppyModule],
})
export class AppModule {}
