import Heading from '../../ui/heading';
import Button from '../../ui/button';

export default function About() {
  return (
    <section className="p-about">
      <div className="o-container">
        <div className="p-about__inner">
          <Heading className="p-about__heading">私たちについて</Heading>

          <div className="p-about__copy">
            <p className="p-about__lead">
              これまでリノベーション事業を中心に行っておりましたが、2026年より新たにホームステージング事業を設立し、2つの事業をリンクさせることで、新規顧客の増加を目標に、ブランドを強化することを目的としています。当社のサービスは良心的な価格をセールスポイントに、お客様とご相談の上理想の空間をご提供いたします。
            </p>
            <p className="p-about__text">
              弊社の目標は、お客様の商品を魅力的に演出し、売却や賃貸に役立つようサポートすることです。不動産事業主様から個人のお客様まで、様々なニーズに合わせたサービスを提供し、より魅力的で快適な空間に変えるお手伝いをいたします。
            </p>
          </div>

          <Button label="詳しく見る" href="/about" className="p-about__button" />
        </div>
      </div>
    </section>
  );
}
