import { INestApplication } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";
import { useSwaggerConfig } from "../config/useSwagger.config";

export const useSwaggerHandlers = (app: INestApplication) => {
  const document = SwaggerModule.createDocument(app, useSwaggerConfig);
  return SwaggerModule.setup("api", app, document);
};
