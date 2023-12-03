import { INestApplication, ValidationPipe } from "@nestjs/common";
import { useGlobalPipesConfig } from "../config/useGlobalPipes.config";

export const useGlobalPipesHandlers = (app: INestApplication) => {
  return app.useGlobalPipes(new ValidationPipe(useGlobalPipesConfig));
};
