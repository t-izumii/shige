interface Props {
  children: string;
  enLabel?: string;
  className?: string;
}

export default function Heading({ children, enLabel, className }: Props) {
  return (
    <h2 className={`c-heading ${className ?? ''}`}>
      {enLabel && <span className="c-heading__en">{enLabel}</span>}
      <span className="c-heading__ja">{children}</span>
    </h2>
  );
}
