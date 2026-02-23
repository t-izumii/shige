import Picture from '../../ui/picture';
import Link from '../../ui/link';

const navItems = [
  { label: 'TOP', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'RENOVATION', href: '/renovation' },
  { label: 'HOMESTAGING', href: '/homestaging' },
];

export default function Header() {
  return (
    <header className="l-header">
      <div className="l-header__inner">
        <h1 className="l-header__logo">
          <Link href="/">
            <Picture
              img={{
                src: '/assets/images/common/logo.png',
                alt: 'SHIGE',
                width: 200,
                height: 74,
              }}
            />
          </Link>
        </h1>

        <nav className="l-header__nav">
          <ul className="l-header__list">
            {navItems.map(({ label, href }) => (
              <li key={label} className="l-header__item">
                <Link href={href} className="l-header__link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
