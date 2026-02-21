import Picture from '../../ui/picture';
import Button from '../../ui/button';
import Kv from './kv';
import Works from './works';
import About from './about';

export default function Pages() {
  return (
    <div>
      {/* <h2>TOP</h2>

      <Picture
        img={{
          src: 'https://placehold.jp/150x150.png',
          alt: 'Sample Image',
          width: 600,
          height: 400,
        }}
        sources={[
          {
            src: 'https://placehold.jp/150x150.png',
            width: 300,
            height: 200,
          },
        ]}
      />

      <Button label="test" /> */}

      <Kv />
      <Works />
      <About />
    </div>
  );
}
