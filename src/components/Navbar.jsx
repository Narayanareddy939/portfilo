import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#publication', label: 'Publication' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

function dlResume() {
  const a = document.createElement('a');
  a.href = '/NARAYANA_Frontend_RESUME.pdf';
  a.download = 'NARAYANA_Frontend_RESUME.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function Navbar() {
  const [glass, setGlass] = useState(false);
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = [...document.querySelectorAll('section[id]')];

    function onScroll() {
      setGlass(window.scrollY > 60);
      let cur = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 150) cur = s.id;
      });
      setActive(cur);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavClick(e, href) {
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    setMobileOpen(false);

    // cinematic flash
    const flash = document.createElement('div');
    flash.style.cssText =
      'position:fixed;inset:0;background:rgba(107,186,181,.07);z-index:9999;pointer-events:none;transition:opacity .5s';
    document.body.appendChild(flash);
    requestAnimationFrame(() => {
      flash.style.opacity = '0';
      setTimeout(() => flash.remove(), 500);
    });
    window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
  }

  return (
    <>
      <nav id="nav" className={glass ? 'glass' : ''}>
        <a className="nav-logo" href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
          N L N Reddy
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'act' : ''}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className="nav-dl" onClick={dlResume} style={{ marginLeft: '.3rem' }}>
              ↓ Resume
            </button>
          </li>
        </ul>
        <button
          className="nav-ham"
          id="ham"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mob-nav${mobileOpen ? ' open' : ''}`} id="mobNav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="#" onClick={(e) => { e.preventDefault(); dlResume(); setMobileOpen(false); }}>
          Download Resume
        </a>
      </div>
    </>
  );
}
