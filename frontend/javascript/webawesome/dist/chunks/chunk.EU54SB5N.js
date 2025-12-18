/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
import {
  WaInclude
} from "./chunk.MJUGT6VC.js";

// _bundle_/src/react/include/index.ts
import { createComponent } from "@lit/react";
import * as React from "react";
import "@lit/react";
var tagName = "wa-include";
var reactWrapper = createComponent({
  tagName,
  elementClass: WaInclude,
  react: React,
  events: {
    onWaLoad: "wa-load",
    onWaIncludeError: "wa-include-error"
  },
  displayName: "WaInclude"
});
var include_default = reactWrapper;

export {
  include_default
};
