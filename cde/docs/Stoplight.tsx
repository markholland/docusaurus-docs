import { API } from "@stoplight/elements";
import React from "react";
import styles from "./Stoplight.module.scss";

interface StoplightProps {
  apiDescriptionUrl: string;
}

export function Stoplight({ apiDescriptionUrl }: StoplightProps) {
  return (
    <div className={(styles as { stoplight: string }).stoplight}>
      <API
        apiDescriptionUrl={apiDescriptionUrl}
        hideTryIt={true}
        hideSchemas={true}
        hideExport={true}
        layout={"stacked"}
        router="hash"
      />
    </div>
  );
}

export default Stoplight;
