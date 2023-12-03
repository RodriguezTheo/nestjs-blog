import { DocumentBuilder } from "@nestjs/swagger";

export const useSwaggerConfig = new DocumentBuilder()
  .setTitle("Median")
  .setDescription("The Media API description")
  .setVersion("0.1")
  .build();
