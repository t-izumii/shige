interface Props {
  title: string;
  href?: string;
}

export default function WorksCard({ title, href }: Props) {
  if (href) {
    return (
      <a href={href} className="c-works-card">
        <p className="c-works-card__title">{title}</p>
      </a>
    );
  }

  return (
    <div className="c-works-card">
      <p className="c-works-card__title">{title}</p>
    </div>
  );
}
