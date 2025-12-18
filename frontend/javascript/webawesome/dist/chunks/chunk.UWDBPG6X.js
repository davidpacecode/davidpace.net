/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
import {
  tag_styles_default
} from "./chunk.6HA7IP6L.js";
import {
  size_styles_default
} from "./chunk.6ZSGODJ4.js";
import {
  variants_styles_default
} from "./chunk.MY7NC3JN.js";
import {
  LocalizeController
} from "./chunk.ESXRZ5NR.js";
import {
  WebAwesomeElement
} from "./chunk.ZXSQBIOQ.js";
import {
  __decorateClass
} from "./chunk.I37X32SU.js";

// _bundle_/src/components/tag/tag.ts
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

// _bundle_/src/events/remove.ts
var WaRemoveEvent = class extends Event {
  constructor() {
    super("wa-remove", { bubbles: true, cancelable: false, composed: true });
  }
};

// _bundle_/src/components/tag/tag.ts
var WaTag = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.variant = "neutral";
    this.appearance = "filled-outlined";
    this.size = "medium";
    this.pill = false;
    this.withRemove = false;
  }
  handleRemoveClick() {
    this.dispatchEvent(new WaRemoveEvent());
  }
  render() {
    return html`
      <slot part="content" class="content"></slot>

      ${this.withRemove ? html`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          ` : ""}
    `;
  }
};
WaTag.css = [tag_styles_default, variants_styles_default, size_styles_default];
__decorateClass([
  property({ reflect: true })
], WaTag.prototype, "variant", 2);
__decorateClass([
  property({ reflect: true })
], WaTag.prototype, "appearance", 2);
__decorateClass([
  property({ reflect: true })
], WaTag.prototype, "size", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], WaTag.prototype, "pill", 2);
__decorateClass([
  property({ attribute: "with-remove", type: Boolean })
], WaTag.prototype, "withRemove", 2);
WaTag = __decorateClass([
  customElement("wa-tag")
], WaTag);

export {
  WaTag
};
