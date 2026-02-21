export default function Footer() {
  return (
    <footer className="l-footer">
      <div className="o-container">
        <div className="l-footer__inner">
          <div className="l-footer__info">
            <address className="l-footer__address">
              <dl className="l-footer__list">
                <div className="l-footer__row">
                  <dt className="l-footer__term">Address</dt>
                  <dd className="l-footer__desc">
                    〒814-0006 福岡県福岡市城南区田島4-8-17<br />
                    新日本アパルトメント田島ビル102
                  </dd>
                </div>
                <div className="l-footer__row">
                  <dt className="l-footer__term">TEL</dt>
                  <dd className="l-footer__desc">
                    <a href="tel:0928368404">092-836-8404</a>
                  </dd>
                </div>
                <div className="l-footer__row">
                  <dt className="l-footer__term">FAX</dt>
                  <dd className="l-footer__desc">092-836-8405</dd>
                </div>
                <div className="l-footer__row">
                  <dt className="l-footer__term">MAIL</dt>
                  <dd className="l-footer__desc">
                    <a href="mailto:info@heya-w.co.jp">info@heya-w.co.jp</a>
                  </dd>
                </div>
              </dl>
            </address>
          </div>

          <small className="l-footer__copy">
            &copy; {new Date().getFullYear()} SHIGE. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
