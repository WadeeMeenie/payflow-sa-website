import { MessageCircle } from 'lucide-react';
import TrackedLink from './TrackedLink.jsx';

function Header({ whatsappLink }) {
  const logoSrc = `${import.meta.env.BASE_URL}payflow-logo.svg`;

  return (
    <header className="sticky top-0 z-40 glass px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#hero" className="inline-flex min-w-0 items-center gap-2">
          <img src={logoSrc} alt="Payflow SA" className="h-9 w-auto sm:h-10" />
        </a>
        <nav className="hidden items-center gap-5 text-sm font-bold text-muted lg:flex xl:gap-7">
          <a href="#features" className="hover:text-payflow transition-colors">Features</a>
          <a href="#pricing" className="hover:text-payflow transition-colors">Pricing</a>
          <a href="#setup-help" className="hover:text-payflow transition-colors">Setup Help</a>
          <a href="#reviews" className="hover:text-payflow transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-payflow transition-colors">FAQ</a>
        </nav>
        <TrackedLink
          href={whatsappLink}
          metaParams={{ content_name: 'Header Start Free Month' }}
          className="cta-button"
          rel="noreferrer noopener"
          target="_blank"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Start Free Month</span>
          <span className="sm:hidden">Start</span>
        </TrackedLink>
      </div>
    </header>
  );
}

export default Header;
