interface Props {
  children: string;
  className?: string;
}

export default function Heading({ children, className }: Props) {
  return (
    <h2 className={`c-heading ${className ?? ''}`}>
      {children}
    </h2>
  );
}
