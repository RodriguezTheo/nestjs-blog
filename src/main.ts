import { HttpAdapterHost, NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaClientExceptionFilter } from "./prisma-client-exception/prisma-client-exception.filter";
import { useGlobalPipesHandlers } from "./handlers/useGlobalPipesHandlers";
import { useSwaggerHandlers } from "./handlers/useSwagger.handlers";
import { ClassSerializerInterceptor } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useGlobalPipesHandlers(app);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  useSwaggerHandlers(app);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();
