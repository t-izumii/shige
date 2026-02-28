import Heading from '../../ui/heading';
import Button from '../../ui/button';
import Picture from '../../ui/picture';

export default function About() {
  return (
    <section className="p-about">
      <div className="p-about__media">
        <Picture
          img={{
            src: '/assets/images/top/img-03.jpg',
            alt: '',
            width: 1440,
            height: 900,
          }}
        />
      </div>

      <div className="p-about__content">
        <div className="p-about__inner">
          <Heading className="p-about__heading" enLabel="About Us">
            私たちについて
          </Heading>

          <div className="p-about__rule">
            <span className="p-about__rule-dot" />
          </div>

          <div className="p-about__copy">
            <p className="p-about__lead">
              「住まい」は、人の暮らしそのものを映す鏡です。
              <br />
              長年にわたりリノベーション事業に携わるなかで、
              <br />
              私たちは数多くのお客様の「こうしたい」という
              <br />
              思いと向き合ってきました。
            </p>
            <p className="p-about__lead">
              老朽化した空間に新しい息吹を吹き込み、
              <br />
              住む人の個性と暮らし方に寄り添った空間づくりを、
              <br />
              これからも誠実に続けていきます。
            </p>
            <p className="p-about__lead">
              良心的な価格と丁寧なヒアリングを軸に、
              <br />
              理想の空間の実現をサポートします。
              <br />
              どうぞお気軽にご相談ください。
            </p>
          </div>

          <div className="p-about__footer">
            <Button label="詳しく見る" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}
