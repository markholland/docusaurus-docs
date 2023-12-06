import { API } from "@stoplight/elements";
import React from "react";
import styles from "./Stoplight.module.scss";

interface StoplightProps {
  url: string;
}

export function Stoplight({ url }: StoplightProps) {
  return (
    <div className={(styles as { stoplight: string }).stoplight}>
      <API
        apiDescriptionUrl={url}
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
