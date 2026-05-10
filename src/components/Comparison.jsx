import { X, Check, ArrowRight } from 'lucide-react';

const rows = [
  { oldWay: 'Scattered spreadsheets', payflow: 'One app for payroll flow' },
  { oldWay: 'Manual calculations', payflow: 'App handles payroll totals after setup' },
  { oldWay: 'Paper timesheets', payflow: 'Capture hours digitally' },
  { oldWay: 'Hard to find old records', payflow: 'Payroll history saved' },
  { oldWay: 'Month-end stress', payflow: 'Clear review before finalising' },
  { oldWay: 'No support', payflow: 'WhatsApp support' },
  { oldWay: 'Locked-in contracts', payflow: 'No contract, cancel anytime' },
  { oldWay: 'Expensive setup', payflow: 'Optional R299 setup help' },
];

function Comparison({ whatsappLink }) {
  return (
    <section className="section-shell overflow-hidden rounded-[2rem] bg-white shadow-premium">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-8 sm:px-10">
          <h3 className="text-2xl font-bold text-white">Old Way</h3>
          <div className="mt-8 space-y-4">
            {rows.map(({ oldWay }) => (
              <div key={oldWay} className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300">{oldWay}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-payflow/5 via-white to-paygreen/5 px-6 py-8 sm:px-10">
          <h3 className="text-2xl font-bold text-payflow">Payflow SA</h3>
          <div className="mt-8 space-y-4">
            {rows.map(({ payflow }) => (
              <div key={payflow} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-paygreen mt-0.5 flex-shrink-0" />
                <p className="text-sm font-semibold text-navy">{payflow}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-[#DDE7EF] bg-white px-6 py-6 sm:px-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-semibold text-navy">Ready to move away from payroll chaos?</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer noopener"
          className="cta-button flex-shrink-0"
        >
          Start Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

export default Comparison;
