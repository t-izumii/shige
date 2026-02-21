import Splide from '@splidejs/splide';
import { Component, type ComponentOptions } from '../../base/Component';

/**
 * Splideカルーセルを管理するクラス
 * @description data-splide属性からオプションを取得して初期化、レスポンシブ対応
 */
export class Carousel extends Component {
  private _splide: Splide | null = null;

  constructor(elTarget: Element, options: ComponentOptions) {
    super(elTarget, options);
    this._init();
  }

  private _init() {
    if (!this._elTarget) return;

    const options = this._getOptions();
    this._splide = new Splide(this._elTarget, options).mount();
  }

  private _getOptions(): Record<string, unknown> {
    const dataOptions = this._elTarget?.dataset.splide;

    if (dataOptions) {
      try {
        return JSON.parse(dataOptions);
      } catch {
        console.warn('Invalid splide options:', dataOptions);
      }
    }

    return {};
  }

  /**
   * 指定のスライドへ移動
   */
  go(index: number) {
    this._splide?.go(index);
  }

  /**
   * 自動再生を開始
   */
  play() {
    this._splide?.Components.Autoplay?.play();
  }

  /**
   * 自動再生を停止
   */
  pause() {
    this._splide?.Components.Autoplay?.pause();
  }

  public override destroy() {
    this._splide?.destroy();
    this._splide = null;
    super.destroy();
  }
}
