import { ArrowRight, Check } from 'lucide-react';
import TrackedLink from './TrackedLink.jsx';

function LifestyleSection({ whatsappLink }) {
  const adminImageSrc = `${import.meta.env.BASE_URL}images/payflow-happy-admin.png`;

  return (
    <section className="section-shell rounded-[2rem] border border-cardborder bg-white p-6 shadow-soft sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="section-kicker">Control</p>
          <h2 className="section-heading">Less admin. More control.</h2>
          <p className="max-w-lg text-base leading-7 text-muted">
            Payflow SA is built for business owners and admin teams who want payroll handled properly without drowning in paperwork. Capture the information once, review the totals, and keep your payroll records organised.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-navy font-semibold">
              <Check className="h-5 w-5 text-paygreen" />
              First month free to test it
            </div>
            <div className="flex items-center gap-3 text-sm text-navy font-semibold">
              <Check className="h-5 w-5 text-paygreen" />
              No contract or hidden fees
            </div>
            <div className="flex items-center gap-3 text-sm text-navy font-semibold">
              <Check className="h-5 w-5 text-paygreen" />
              WhatsApp support included
            </div>
          </div>
          <div className="pt-4">
            <TrackedLink
              href={whatsappLink}
              metaParams={{ content_name: 'Lifestyle Start Free Month' }}
              target="_blank"
              rel="noreferrer noopener"
              className="cta-button-lg"
            >
              Start Free Month
              <ArrowRight className="h-4 w-4" />
            </TrackedLink>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[1.75rem] shadow-premium">
            <img
              src={adminImageSrc}
              alt="Admin using Payflow SA"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-4 left-4 rounded-2xl border border-white/60 bg-white/95 px-4 py-3 shadow-soft">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-paygreen" />
              <span className="text-sm font-bold text-navy">Payroll Done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifestyleSection;
