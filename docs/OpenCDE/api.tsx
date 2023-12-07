import React, { Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Fallback } from "./Fallback";

const LazyStoplight = React.lazy(() => import("./Stoplight"));

export default function Api() {
  return (
    <BrowserOnly>
      {() => (
        <Suspense fallback={Fallback}>
          <LazyStoplight url="https://raw.githubusercontent.com/markholland/catenda-openapi/main/catenda-openapi-stable-v0.1.yaml" />
        </Suspense>
      )}
    </BrowserOnly>
  );
}
