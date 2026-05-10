import { Check, MessageCircle } from 'lucide-react';

function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}payflow-logo.svg`;

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Setup Help', href: '#setup-help' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="mt-16 border-t border-[#DDE7EF] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <img src={logoSrc} alt="Payflow SA" className="h-10 w-auto" />
            <p className="max-w-xs text-sm leading-6 text-muted">Secure. Accurate. Reliable.</p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-widest text-navy">Product</p>
            <div className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-muted hover:text-payflow">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-widest text-navy">Contact</p>
            <div className="mt-4 space-y-3">
              <a
                href="https://wa.me/27816596157"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-muted hover:text-payflow"
              >
                <MessageCircle className="h-4 w-4" />
                081 659 6157
              </a>
              <p className="text-sm text-muted">WhatsApp Support</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-widest text-navy">Know</p>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-paygreen" />First month free</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-paygreen" />No contract</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-paygreen" />Cancel anytime</p>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-[#DDE7EF]" />

        <div className="space-y-4 text-xs leading-relaxed text-muted">
          <p>
            Payflow SA helps with payroll processing and reporting workflows. Businesses remain responsible for checking their payroll information and compliance requirements.
          </p>
          <p className="text-muted/70">
            Copyright 2026 Payflow SA. All rights reserved. Payflow is a product for South African businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
