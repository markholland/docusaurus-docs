import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export function Swagger() {
  return (
    <SwaggerUI
      url={
        "https://raw.githubusercontent.com/markholland/catenda-openapi/main/catenda-openapi-stable-v0.1.yaml"
      }
    />
  );
}

export default Swagger;
