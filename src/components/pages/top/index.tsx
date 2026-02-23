import Picture from '../../ui/picture';
import Button from '../../ui/button';
import Kv from './kv';
import Works from './works';
import About from './about';

export default function Pages() {
  return (
    <div>
      <Kv />
      <Works />
      <About />
    </div>
  );
}
