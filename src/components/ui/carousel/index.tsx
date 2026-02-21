import { toChildArray, type ComponentChildren } from 'preact';

interface BreakpointOptions {
  perPage?: number;
  gap?: string;
  arrows?: boolean;
  pagination?: boolean;
}

interface Props {
  children: ComponentChildren;
  options?: {
    type?: 'slide' | 'loop';
    perPage?: number;
    autoWidth?: boolean;
    gap?: string;
    autoplay?: boolean;
    interval?: number;
    arrows?: boolean;
    pagination?: boolean;
    breakpoints?: Record<number, BreakpointOptions>;
  };
}

export default function Carousel({ children, options = {} }: Props) {
  const {
    type = 'slide',
    perPage = 1,
    autoWidth = false,
    gap = 0,
    autoplay = false,
    interval = 0,
    arrows = true,
    pagination = true,
    breakpoints = {},
  } = options;

  return (
    <div
      className="c-carousel splide js-carousel"
      data-splide={JSON.stringify({
        type,
        perPage,
        autoWidth,
        gap,
        autoplay,
        interval,
        arrows,
        pagination,
        breakpoints,
      })}
    >
      <div className="splide__track">
        <ul className="splide__list">
          {toChildArray(children).map((child, index) => (
            <li className="c-carousel__slide splide__slide" key={index}>
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
