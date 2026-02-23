import Heading from '../../ui/heading';
import WorksCard from '../../features/worksCard';

const works = [
  { title: '戸建てリノベーション / 福岡市城南区' },
  { title: 'マンションリノベーション / 福岡市中央区' },
  { title: '店舗リノベーション / 福岡市博多区' },
  { title: '戸建てリノベーション / 福岡市早良区' },
  { title: 'マンションリノベーション / 福岡市南区' },
  { title: '店舗リノベーション / 福岡市西区' },
];

export default function Pages() {
  return (
    <div>
      {/* ページヘッダー */}
      <section className="p-renovation-hero">
        <div className="p-renovation-hero__inner o-container">
          <Heading enLabel="Renovation">リノベーション事業</Heading>
          <p className="p-renovation-hero__text">
            既存の住まいを再生し、機能性とデザイン性を兼ね備えた空間へと生まれ変わらせます。
            お客様一人ひとりの暮らしに寄り添い、理想の空間を丁寧に実現します。
          </p>
        </div>
      </section>

      {/* 実績一覧 */}
      <section className="p-renovation-works">
        <div className="p-renovation-works__inner o-container">
          <ul className="p-renovation-works__list">
            {works.map(({ title }) => (
              <li key={title} className="p-renovation-works__item">
                <WorksCard title={title} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
