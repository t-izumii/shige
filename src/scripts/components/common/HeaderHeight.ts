import { Component, type ComponentOptions } from "../../base/Component";

export class HeaderHeight extends Component {
  private _ro: ResizeObserver | null = null;

  constructor(elTarget: Element, options: ComponentOptions) {
    super(elTarget, options);

    this._observe();
  }

  private _observe() {
    this._ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        document.documentElement.style.setProperty(
          '--header-height',
          `${entry.borderBoxSize[0].blockSize}px`
        );
      });
    });
    this._ro.observe(this._elTarget!);
  }

  public override destroy() {
    this._ro?.disconnect();
    this._ro = null;
    super.destroy();
  }
}
