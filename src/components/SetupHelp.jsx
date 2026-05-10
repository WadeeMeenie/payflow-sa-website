import { MessageCircle, CheckCircle2 } from 'lucide-react';

function SetupHelp({ whatsappLink }) {
  const items = [
    'Company name',
    'Employee names',
    'ID numbers',
    'Pay type',
    'Monthly, daily, or hourly rates',
    'Departments',
    'Contact details',
    'PAYE, UIF, SDL settings',
  ];

  return (
    <section id="setup-help" className="section-shell rounded-[2rem] bg-gradient-to-br from-darknavy via-deepteal to-navy p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6 text-white">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-paygreen">Optional setup</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">Want us to help set it up?</h2>
          <p className="max-w-lg text-base leading-7 text-slate-200">
            For a once-off R299 setup fee, Payflow SA can help set up your company and employees so your payroll starts clean.
          </p>
          <p className="text-sm text-slate-300 italic">
            You can also set it up yourself inside the app. The R299 setup help is optional.
          </p>
          <div className="pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-darknavy shadow-premium hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Get Setup Help on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-[20px] bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-3">
              <CheckCircle2 className="h-5 w-5 text-paygreen flex-shrink-0" />
              <span className="text-sm font-semibold text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SetupHelp;
