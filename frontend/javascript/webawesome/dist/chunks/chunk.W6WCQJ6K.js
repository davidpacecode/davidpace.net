/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
import {
  divider_styles_default
} from "./chunk.V5Y2BOJS.js";
import {
  watch
} from "./chunk.M4ZSSH5B.js";
import {
  WebAwesomeElement
} from "./chunk.ZXSQBIOQ.js";
import {
  __decorateClass
} from "./chunk.I37X32SU.js";

// _bundle_/src/components/divider/divider.ts
import { customElement, property } from "lit/decorators.js";
var WaDivider = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.orientation = "horizontal";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.orientation);
  }
};
WaDivider.css = divider_styles_default;
__decorateClass([
  property({ reflect: true })
], WaDivider.prototype, "orientation", 2);
__decorateClass([
  watch("orientation")
], WaDivider.prototype, "handleVerticalChange", 1);
WaDivider = __decorateClass([
  customElement("wa-divider")
], WaDivider);

export {
  WaDivider
};
