import React from "react";
import DocsVersionDropdownNavbarItem from "@theme-original/NavbarItem/DocsVersionDropdownNavbarItem";
import type DocsVersionDropdownNavbarItemType from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";
import type { WrapperProps } from "@docusaurus/types";
import { useActivePluginAndVersion } from "@docusaurus/plugin-content-docs/client";

type Props = WrapperProps<typeof DocsVersionDropdownNavbarItemType>;

export default function DocsVersionDropdownNavbarItemWrapper(
  props: Props
): JSX.Element {
  const { docsPluginId } = props;
  const { activePlugin } = useActivePluginAndVersion() || {};

  if (activePlugin?.pluginId !== docsPluginId) {
    return null;
  }
  return <DocsVersionDropdownNavbarItem {...props} />;
}
