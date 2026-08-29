import { useState } from 'react';
import { ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import TrackedLink from './TrackedLink.jsx';

const resources = [
  ['/knowledge/', 'Knowledge Hub'],
  ['/knowledge/payroll-questions/', 'Payroll Questions'],
  ['/knowledge/payroll-features/', 'Payroll Features'],
  ['/knowledge/south-african-payroll/', 'South African Payroll'],
  ['/knowledge/security/', 'Security'],
  ['/knowledge/industries/', 'Industries'],
  ['/knowledge/pricing/', 'Pricing & Plans'],
];

function Header({ whatsappLink }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}payflow-logo.svg`;
  const closeMenu = () => { setMenuOpen(false); setResourcesOpen(false); };

  return (
    <header className="sticky top-0 z-40 glass px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" className="inline-flex min-w-0 items-center gap-2" onClick={closeMenu}>
          <img src={logoSrc} alt="Payflow SA" className="h-9 w-auto sm:h-10" />
        </a>

        <nav className="hidden items-center gap-5 text-sm font-bold text-muted lg:flex xl:gap-7" aria-label="Primary navigation">
          <a href="/#features" className="hover:text-payflow transition-colors">Features</a>
          <a href="/#pricing" className="hover:text-payflow transition-colors">Pricing</a>
          <a href="/#setup-help" className="hover:text-payflow transition-colors">Setup Help</a>
          <a href="/#reviews" className="hover:text-payflow transition-colors">Reviews</a>
          <a href="/#faq" className="hover:text-payflow transition-colors">FAQ</a>
          <div className="relative">
            <button type="button" onClick={() => setResourcesOpen((open) => !open)} aria-expanded={resourcesOpen} className="inline-flex items-center gap-1 hover:text-payflow transition-colors">
              Resources <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {resourcesOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-cardborder bg-white p-2 shadow-soft">
                {resources.map(([href, label]) => <a key={href} href={href} onClick={closeMenu} className="block rounded-xl px-3 py-2.5 text-sm font-bold text-muted hover:bg-softbg hover:text-payflow">{label}</a>)}
              </div>
            )}
          </div>
          <a href="/about/" className="hover:text-payflow transition-colors">About</a>
          <a href="/contact/" className="hover:text-payflow transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-navy lg:hidden" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <TrackedLink href={whatsappLink} metaParams={{ content_name: 'Header Start Free Month' }} className="cta-button" rel="noreferrer noopener" target="_blank">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Start Free Month</span>
            <span className="sm:hidden">Start</span>
          </TrackedLink>
        </div>
      </div>

      {menuOpen && (
        <nav className="mx-auto mt-3 max-w-7xl border-t border-black/10 pt-3 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1 text-sm font-bold text-muted">
            <a href="/#features" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-black/5">Features</a>
            <a href="/#pricing" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-black/5">Pricing</a>
            <a href="/#setup-help" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-black/5">Setup Help</a>
            <a href="/#reviews" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-black/5">Reviews</a>
            <a href="/#faq" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-black/5">FAQ</a>
            <button type="button" onClick={() => setResourcesOpen((open) => !open)} aria-expanded={resourcesOpen} className="flex items-center justify-between rounded-lg px-3 py-3 text-left hover:bg-black/5">Resources <ChevronDown className={`h-4 w-4 ${resourcesOpen ? 'rotate-180' : ''}`} /></button>
            {resourcesOpen && resources.map(([href, label]) => <a key={href} href={href} onClick={closeMenu} className="ml-3 rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-black/5">{label}</a>)}
            <a href="/about/" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-black/5">About Payflow SA</a>
            <a href="/contact/" onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-black/5">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
