import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor'
import { AllExceptionsFilter } from './common/filter/exceptions/base.exception.filter.ts/base.exception.filter.ts.filter';
import { HttpExceptionFilter } from './common/filter/exceptions/http.exception.filter.ts/http.exception.filter.ts.filter';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 接口版本化管理
  app.enableVersioning({
    defaultVersion: [VERSION_NEUTRAL, "1", "2"],
    type: VersioningType.URI
  })
 
  // 统一拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  
  // 异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter())

  generateDocument(app)

  await app.listen(3000);
}
bootstrap();
