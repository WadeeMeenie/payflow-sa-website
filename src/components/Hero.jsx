import { ArrowRight, Check, Clock3, Phone, ShieldCheck } from 'lucide-react';

function Hero({ whatsappLink }) {
  const phoneImageSrc = `${import.meta.env.BASE_URL}images/payflow-phone-dashboard.png`;

  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-[2rem] border border-cardborder bg-white px-5 py-8 shadow-soft sm:px-8 lg:px-10 lg:py-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="space-y-6">
          <div className="badge">
            <Check className="h-4 w-4" />
            Built for South African SMEs
          </div>

          <h1 className="section-heading-lg">
            Stop losing hours to payroll spreadsheets.
          </h1>

          <p className="max-w-xl text-lg leading-8 text-muted">
            Payflow SA helps South African businesses capture hours, run payroll,
            review totals, and export payslips from one clean Android app.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="cta-button-lg w-full sm:w-auto"
            >
              Start My Free Month
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="secondary-button-lg w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-sm text-muted">
            No pressure. Test it with your own company first.
          </p>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-2xl border border-paygreen/15 bg-paygreen/5 px-4 py-3 text-sm font-bold text-paygreen">
              <Check className="h-4 w-4 flex-shrink-0" />
              First month free
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-payflow/15 bg-payflow/5 px-4 py-3 text-sm font-bold text-payflow">
              <ShieldCheck className="h-4 w-4 flex-shrink-0" />
              No contract
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-payflow/15 bg-payflow/5 px-4 py-3 text-sm font-bold text-payflow">
              <Clock3 className="h-4 w-4 flex-shrink-0" />
              Cancel anytime
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-x-8 -top-5 h-20 rounded-full bg-paygreen/20 blur-3xl" />
          <div
            className="relative mx-auto max-w-[20rem] rounded-[2.75rem] border-[10px] border-gray-950 bg-gray-950 shadow-glow"
            style={{ aspectRatio: '9/19.5' }}
          >
            <div className="absolute left-1/2 top-0 z-20 h-7 w-40 -translate-x-1/2 rounded-b-3xl bg-gray-950" />
            <div className="h-full w-full overflow-hidden rounded-[2rem] bg-white">
              <img
                src={phoneImageSrc}
                alt="Payflow SA app dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-center">
            <div className="section-card px-4 py-3">
              <p className="text-xs font-black text-payflow">Payroll review</p>
              <p className="text-xs text-muted">Before finalising</p>
            </div>
            <div className="section-card px-4 py-3">
              <p className="text-xs font-black text-paygreen">WhatsApp help</p>
              <p className="text-xs text-muted">When you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
