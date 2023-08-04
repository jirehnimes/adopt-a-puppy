import compression from '@fastify/compress';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import csrf from '@fastify/csrf-protection';
import helmet from '@fastify/helmet';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { HTTP_METHOD } from './core/consts/http.const';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    // prettier-ignore
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  await app.register(helmet); // Top most in app.use.
  await app.register(compression, { encodings: ['gzip', 'deflate'] });
  await app.register(cookie);
  await app.register(csrf);

  app.register(cors, {
    origin: ['*'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Content-Length',
      'Authorization',
      'Access-Control-Allow-Methods',
      'Access-Control-Request-Method',
    ],
    methods: [
      HTTP_METHOD.GET,
      HTTP_METHOD.POST,
      HTTP_METHOD.PATCH,
      HTTP_METHOD.DELETE,
      HTTP_METHOD.OPTIONS,
    ],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({ transform: true, forbidUnknownValues: true }),
  );

  app.setGlobalPrefix('api');

  app.enableShutdownHooks();

  await app.listen(3000, '0.0.0.0');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
