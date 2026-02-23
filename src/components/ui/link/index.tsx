import type { ComponentChildren } from 'preact';

interface Props {
  href: string;
  children: ComponentChildren;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export default function Link({ href, children, className, target, rel }: Props) {
  const baseUrl = import.meta.env.BASE_URL || '';
  const resolvedHref = href.startsWith('http') || href.startsWith('#')
    ? href
    : `${baseUrl}${href}`.replace(/\/+/g, '/');

  return (
    <a href={resolvedHref} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
}
