import Picture from '../../ui/picture';

interface Props {
  title: string;
  href?: string;
  img?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

function CardInner({ title, img }: Pick<Props, 'title' | 'img'>) {
  return (
    <>
      {img && (
        <div className="c-works-card__media">
          <Picture img={{ ...img, width: 400, height: 300, loading: 'lazy' }} />
        </div>
      )}
      <p className="c-works-card__title">{title}</p>
    </>
  );
}

export default function WorksCard({ title, href, img }: Props) {
  if (href) {
    return (
      <a href={href} className="c-works-card">
        <CardInner title={title} img={img} />
      </a>
    );
  }

  return (
    <div className="c-works-card">
      <CardInner title={title} img={img} />
    </div>
  );
}
