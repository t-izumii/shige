import { Component, type ComponentOptions } from "../../base/Component";

export class HamburgerMenu extends Component {
  private _toggle: HTMLElement | null = null;
  private _links: NodeListOf<HTMLElement> | null = null;

  constructor(elTarget: Element, options: ComponentOptions) {
    super(elTarget, options);

    this._toggle = this._elTarget?.querySelector('.l-header__toggle') ?? null;
    this._links = this._elTarget?.querySelectorAll('.l-header__link') ?? null;

    this._setEventListeners();
  }

  private _setEventListeners() {
    if (this._toggle) {
      this._addEL(this._toggle, 'click', this._onToggleClick);
    }
    this._links?.forEach((link) => {
      this._addEL(link, 'click', this._onLinkClick);
    });
  }

  private _onToggleClick = () => {
    const isOpen = this._elTarget?.classList.toggle('is-open');
    this._toggle?.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  private _onLinkClick = () => {
    this._elTarget?.classList.remove('is-open');
    this._toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  public override destroy() {
    document.body.style.overflow = '';
    this._toggle = null;
    this._links = null;
    super.destroy();
  }
}
