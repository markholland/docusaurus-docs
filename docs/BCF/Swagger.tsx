import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export function Swagger() {
  return (
    <SwaggerUI
      url={
        "https://raw.githubusercontent.com/markholland/catenda-openapi/main/catenda-bcf-v3.0.yaml"
      }
    />
  );
}

export default Swagger;
