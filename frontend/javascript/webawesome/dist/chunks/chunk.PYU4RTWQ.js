/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
import {
  callout_styles_default
} from "./chunk.SGUKWE5L.js";
import {
  size_styles_default
} from "./chunk.6ZSGODJ4.js";
import {
  variants_styles_default
} from "./chunk.MY7NC3JN.js";
import {
  WebAwesomeElement
} from "./chunk.ZXSQBIOQ.js";
import {
  __decorateClass
} from "./chunk.I37X32SU.js";

// _bundle_/src/components/callout/callout.ts
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
var WaCallout = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.variant = "brand";
    this.size = "medium";
  }
  render() {
    return html`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `;
  }
};
WaCallout.css = [callout_styles_default, variants_styles_default, size_styles_default];
__decorateClass([
  property({ reflect: true })
], WaCallout.prototype, "variant", 2);
__decorateClass([
  property({ reflect: true })
], WaCallout.prototype, "appearance", 2);
__decorateClass([
  property({ reflect: true })
], WaCallout.prototype, "size", 2);
WaCallout = __decorateClass([
  customElement("wa-callout")
], WaCallout);

export {
  WaCallout
};
