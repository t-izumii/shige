import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Component, type ComponentOptions } from '../../base/Component';

export class About extends Component {
  constructor(elTarget: Element, options: ComponentOptions) {
    super(elTarget, options);
    this._init();
  }

  private _init() {
    if (!this._elTarget) return;

    ScrollTrigger.create({
      trigger: this._elTarget,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
    });
  }

  public override destroy() {
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === this._elTarget) st.kill();
    });
    super.destroy();
  }
}
