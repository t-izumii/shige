import Carousel from '../../ui/carousel';
import Picture from '../../ui/picture';

export default function Kv() {
  return (
    <section className="p-kv">
      <Carousel
        options={{
          type: 'fade',
          rewind: true,
          autoplay: true,
          interval: 4000,
          arrows: false,
          pagination: true,
        }}
      >
        <div class="p-kv__slide">
          <Picture
            img={{
              src: '/assets/images/top/kv-01.jpg',
              alt: '',
              width: 1440,
              height: 810,
            }}
          />
        </div>
        <div class="p-kv__slide">
          <Picture
            img={{
              src: '/assets/images/top/kv-01.jpg',
              alt: '',
              width: 1440,
              height: 810,
            }}
          />
        </div>
        <div class="p-kv__slide">
          <Picture
            img={{
              src: '/assets/images/top/kv-01.jpg',
              alt: '',
              width: 1440,
              height: 810,
            }}
          />
        </div>
      </Carousel>
    </section>
  );
}
