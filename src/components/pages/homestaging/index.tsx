import Heading from '../../ui/heading';
import Picture from '../../ui/picture';

const features = [
  {
    title: '低コストで素敵に',
    text: 'ホームステージングとは何なのか、費用もさっぱりわからないといったお客様の声にお応えすべく、業界最安値をモットーに、ホームステージャーがしっかりサポートします。',
  },
  {
    title: '資格保有者がサポート',
    text: 'ホームステージャー1級を持つスタッフが、お客様とご相談の上で演出内容をご提案し、物件が魅力的に見える理想のお部屋にステージングしていきます。',
  },
  {
    title: 'リフォームも可能',
    text: 'ホームステージングしていく上で、壁や床などの色を張り替えたい、老朽化しているところを修繕したいとなった場合でも、当社でリノベーションができるので安心。',
  },
  {
    title: 'メンテナンスサービス',
    text: '設備・建具の動作チェックや排管クリーニングも物件をよく見せるためには大切です。当社では、ホームステージングの一環として行っております。',
  },
  {
    title: '配送・設置料込み',
    text: '配送設置にプラス料金がかからないので安心してご利用いただけます。',
  },
  {
    title: '設置家具の販売可能',
    text: '現地で設置している家具をご購入したい場合は、お気軽にご相談ください。',
  },
];

const galleryImages = [
  { src: '/assets/images/homestaging/img-01.jpg', alt: 'LDK施工事例' },
  { src: '/assets/images/homestaging/img-02.jpg', alt: 'トイレ施工事例' },
];

const flowSteps = [
  'お問い合わせ',
  '現地立会い',
  'プラン図提案',
  'ご依頼確定',
  '設置日打ち合わせ',
  'ご入金',
  '家具設置',
  '展示終了・回収',
];

export default function Pages() {
  return (
    <div>
      {/* Hero */}
      <section className="p-hs-hero">
        <div className="p-hs-hero__inner o-container">
          <Heading className="p-hs-hero__heading" enLabel="Homestaging">
            ホームステージング事業
          </Heading>

          <div className="p-hs-hero__content">
            <div className="p-hs-hero__text-block">
              <p className="p-hs-hero__text">
                LDK、玄関、トイレ、寝室を対象にホームステージャー1級のスタッフがお客様の物件を魅力的に見える空間にステージングしていきます。ご要望等がございましたら、何なりとご相談くださいませ。
              </p>
            </div>

            <div className="p-hs-hero__media">
              <Picture
                img={{
                  src: '/assets/images/homestaging/hero.png',
                  alt: 'ホームステージング事例',
                  width: 720,
                  height: 480,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="p-hs-features">
        <div className="p-hs-features__inner o-container">
          <div className="p-hs-features__gallery">
            {galleryImages.map(({ src, alt }) => (
              <div key={src} className="p-hs-features__gallery-item">
                <Picture
                  img={{ src, alt, width: 300, height: 400, loading: 'lazy' }}
                />
              </div>
            ))}
          </div>

          <ul className="p-hs-features__list">
            {features.map(({ title, text }) => (
              <li key={title} className="p-hs-features__item">
                <h3 className="p-hs-features__title">{title}</h3>
                <p className="p-hs-features__text">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 流れ */}
      <section className="p-hs-flow">
        <div className="p-hs-flow__inner o-container">
          <Heading className="p-hs-flow__heading" enLabel="Flow">
            ホームステージングの流れ
          </Heading>

          <ol className="p-hs-flow__list">
            {flowSteps.map((step, i) => (
              <li key={step} className="p-hs-flow__item">
                <div className="p-hs-flow__step">
                  <span className="p-hs-flow__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="p-hs-flow__label">{step}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
