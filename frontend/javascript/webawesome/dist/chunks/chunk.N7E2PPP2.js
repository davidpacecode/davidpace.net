/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
import {
  progress_ring_styles_default
} from "./chunk.AMRNMIOK.js";
import {
  LocalizeController
} from "./chunk.ESXRZ5NR.js";
import {
  WebAwesomeElement
} from "./chunk.ZXSQBIOQ.js";
import {
  __decorateClass
} from "./chunk.I37X32SU.js";

// _bundle_/src/components/progress-ring/progress-ring.ts
import { html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
var WaProgressRing = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("value")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return html`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="image">
          <circle class="track"></circle>
          <circle class="indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `;
  }
};
WaProgressRing.css = progress_ring_styles_default;
__decorateClass([
  query(".indicator")
], WaProgressRing.prototype, "indicator", 2);
__decorateClass([
  state()
], WaProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  property({ type: Number, reflect: true })
], WaProgressRing.prototype, "value", 2);
__decorateClass([
  property()
], WaProgressRing.prototype, "label", 2);
WaProgressRing = __decorateClass([
  customElement("wa-progress-ring")
], WaProgressRing);

export {
  WaProgressRing
};
