import React, { Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Fallback } from "./Fallback";

const LazySwagger = React.lazy(() => import("./Swagger"));

export default function Api() {
  return (
    <BrowserOnly>
      {() => (
        <Suspense fallback={Fallback}>
          <LazySwagger />
        </Suspense>
      )}
    </BrowserOnly>
  );
}
