import Heading from '../../ui/heading';

const overviewItems: { label: string; value: string | string[] }[] = [
  { label: '会社名', value: 'HEYAworks株式会社' },
  { label: '所在地', value: ['〒814‐0113', '福岡県福岡市城南区田島4‐8‐17', '新日本アパルトメント102号'] },
  { label: '電話番号', value: '092‐836-8404' },
  { label: '代表取締役社長', value: '小池慎二' },
  { label: '設立', value: '令和3年5月6日' },
  {
    label: '事業内容',
    value: [
      '内装仕上工事業',
      '建具工事業',
      '塗装工事業',
      '防水工事業',
      '大工工事業',
      '左官工事業',
      'とび土木コンクリート工事業',
      '屋根工事業',
      '電気通信工事業及び電気工事業',
      '管工事業',
      'ガラス工事業',
      '解体工事業',
      '産業廃棄物の収集運搬処理業',
      '不動産の売買賃貸仲介及び管理',
      'ビルメンテナンス業',
      '各種商品の企画開発製造販売卸輸出入仲介及びレンタル業',
    ],
  },
];

const staffGroups = [
  {
    division: 'リノベーション事業',
    members: [
      {
        name: '小池　慎二',
        role: 'HEYAworks株式会社代表',
        skills: ['内装仕上げ工', '電気工事士', '水道施設工', '大工', '塗装', '美装'],
      },
    ],
  },
  {
    division: 'ホームステージング事業',
    members: [
      {
        name: '小池　慎二',
        role: 'HEYAworks株式会社代表',
        skills: [],
      },
      {
        name: '岩本　阿実',
        role: 'ホームステージャー1級有資格者',
        skills: [],
      },
    ],
  },
];

export default function Pages() {
  return (
    <div>
      {/* 経営理念 */}
      <section className="p-philosophy">
        <div className="p-philosophy__inner o-container">
          <div className="p-philosophy__lead">
            <Heading className="p-philosophy__heading" enLabel="Philosophy">経営理念</Heading>
            <p className="p-philosophy__catch">
              住まいとともに、<br />
              人の暮らしを豊かに。
            </p>
          </div>

          <div className="p-philosophy__body">
            <p className="p-philosophy__text">
              私たちSHIGEは、「住まいは人の暮らしそのものを映す鏡である」という信念のもと、
              リノベーション・ホームステージングの二軸で事業を展開しています。
            </p>
            <p className="p-philosophy__text">
              老朽化した空間に新たな価値を吹き込み、住む人の個性と暮らし方に寄り添った
              空間づくりを、誠実かつ丁寧に提供し続けることが私たちの使命です。
            </p>
            <p className="p-philosophy__text">
              良心的な価格と徹底したヒアリングを軸に、お客様一人ひとりの
              「理想の空間」を実現するため、私たちはこれからも挑戦し続けます。
            </p>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="p-overview">
        <div className="p-overview__inner o-container">
          <Heading className="p-overview__heading" enLabel="Company">会社概要</Heading>
          <dl className="p-overview__table">
            {overviewItems.map(({ label, value }) => (
              <div key={label} className="p-overview__row">
                <dt className="p-overview__term">{label}</dt>
                <dd className="p-overview__desc">
                  {Array.isArray(value)
                    ? value.map((line) => <span key={line} className="p-overview__line">{line}</span>)
                    : value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* スタッフ紹介 */}
      <section className="p-staff">
        <div className="p-staff__heading-area">
          <Heading className="p-staff__heading" enLabel="Staff">スタッフ紹介</Heading>
        </div>

        <div className="p-staff__body">
          {staffGroups.map(({ division, members }) => (
            <div key={division} className="p-staff__group">
              <h3 className="p-staff__division">{division}</h3>
              <ul className="p-staff__list">
                {members.map(({ name, role, skills }) => (
                  <li key={name + role} className="p-staff__item">
                    <p className="p-staff__name">{name}</p>
                    <p className="p-staff__role">{role}</p>
                    {skills.length > 0 && (
                      <ul className="p-staff__skills">
                        {skills.map((skill) => (
                          <li key={skill} className="p-staff__skill">・{skill}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
