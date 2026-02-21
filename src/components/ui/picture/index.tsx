interface Source {
  src: string;
  media?: string;
  width?: number;
  height?: number;
}

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  widthSp?: number;
  fetchpriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
}

interface Props {
  img: ImgProps;
  className?: string;
  sources?: Source[];
}

export default function Picture({ img, className, sources }: Props) {
  const baseUrl = import.meta.env.BASE_URL || '';
  const resolvePath = (path: string) =>
    path.startsWith('http') ? path : `${baseUrl}${path}`;

  return (
    <picture
      className={`c-picture ${className || ''}`}
      style={
        {
          '--width': img.width ? img.width : undefined,
          '--width-sp': img.widthSp ? img.widthSp : undefined,
        } as preact.CSSProperties
      }
    >
      {sources?.map((source, index) => (
        <source
          key={index}
          srcSet={resolvePath(source.src)}
          media={source.media || 'width < 768px'}
          width={source.width}
          height={source.height}
        />
      ))}
      <img
        src={resolvePath(img.src)}
        alt={img.alt}
        width={img.width}
        height={img.height}
        fetchpriority={img.fetchpriority as any}
        loading={img.loading}
      />
    </picture>
  );
}
