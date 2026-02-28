import Heading from '../../ui/heading';
import WorksCard from '../../features/worksCard';

const works = [
  { title: '​事務所修繕、改築' },
  { title: '事務所キッチン' },
  { title: '事務所キッチン' },
  { title: '​ＬＤＫリフォーム​' },
  { title: '​洗面所リフォーム' },
  { title: '​トイレリフォーム' },
  { title: '​ＬＤビフォー' },
  { title: '​ＬＤアフター' },
];

export default function Pages() {
  return (
    <div>
      {/* ページヘッダー */}
      <section className="p-renovation-hero">
        <div className="p-renovation-hero__inner o-container">
          <Heading enLabel="Renovation">リノベーション事業</Heading>
          <p className="p-renovation-hero__text">
            アパート、マンション、戸建て、店舗、事務所などの修繕や改築、リフォーム等、小さなことでもご相談承ります。
          </p>
          <ul className="p-renovation-hero__services">
            {['クロス工事', '電気工事', '水道工事', '床工事', '大工工事', '塗装', '美装'].map((s) => (
              <li key={s} className="p-renovation-hero__service">・{s}</li>
            ))}
          </ul>
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
