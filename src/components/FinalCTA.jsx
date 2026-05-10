import { ArrowRight, Check, MessageCircle } from 'lucide-react';

function FinalCTA({ whatsappLink }) {
  return (
    <section className="section-shell overflow-hidden rounded-[2rem] bg-gradient-to-br from-darknavy via-deepteal to-navy p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-paygreen">Free first month</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-5xl">
            Start with your free month.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">
            Stop letting payroll admin steal hours every month. Test Payflow SA with your own business and see if it fits.
          </p>
          <div className="mt-5 grid gap-3 text-sm font-bold text-white/90 sm:grid-cols-3">
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-paygreen" />
              No contract
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-paygreen" />
              Cancel anytime
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-paygreen" />
              WhatsApp support
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-base font-black text-darknavy shadow-premium hover:-translate-y-0.5 sm:w-auto"
          >
            Start My Free Month
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-black text-white backdrop-blur-xs hover:bg-white/20 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
