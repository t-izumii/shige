import Heading from '../../ui/heading';
import Picture from '../../ui/picture';
import Button from '../../ui/button';

const works = [
  {
    title: 'リノベーション事業',
    text: '既存の住まいを再生し、機能性とデザイン性を兼ね備えた空間へと生まれ変わらせます。',
    href: '/renovation',
    img: {
      src: '/assets/images/top/kv-01.jpg',
      alt: 'リノベーション事業',
      width: 720,
      height: 480,
    },
  },
  {
    title: 'ホームステージング事業',
    text: '物件の魅力を最大限に引き出すインテリアコーディネートで、売却・賃貸を強力にサポートします。',
    href: '/homestaging',
    img: {
      src: '/assets/images/top/kv-01.jpg',
      alt: 'ホームステージング事業',
      width: 720,
      height: 480,
    },
  },
];

export default function Works() {
  return (
    <section className="p-works">
      <div className="p-works__header o-container">
        <Heading className="p-works__heading" enLabel="Works">事業紹介</Heading>
      </div>

      <ul className="p-works__list">
        {works.map(({ title, text, href, img }, i) => (
          <li key={title} className="p-works__item" data-reverse={i % 2 !== 0 ? '' : undefined}>
            <div className="p-works__media js-inView u-imgMask" data-in-view-class="is-active">
              <Picture img={img} />
            </div>

            <div className="p-works__body">
              <h3 className="p-works__title">{title}</h3>
              <p className="p-works__text">{text}</p>
              <Button label="詳しく見る" href={href} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
