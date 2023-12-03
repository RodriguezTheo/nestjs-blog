import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaClientExceptionFilter } from "./prisma-client-exception/prisma-client-exception.filter";
import { useGlobalPipesHandlers } from "./handlers/useGlobalPipesHandlers";
import { useSwaggerHandlers } from "./handlers/useSwagger.handlers";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useGlobalPipesHandlers(app);
  useSwaggerHandlers(app);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();
