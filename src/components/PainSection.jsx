import { FileText, ClipboardList, AlertCircle, FolderOpen, ArrowRight } from 'lucide-react';

const pains = [
  {
    title: 'Spreadsheets get messy fast',
    text: 'One wrong formula, missing hour, or copied cell can throw off the whole payroll.',
    icon: FileText,
  },
  {
    title: 'Paper timesheets waste time',
    text: 'Collecting, checking, and retyping hours every month slows everything down.',
    icon: ClipboardList,
  },
  {
    title: 'Payroll admin becomes a headache',
    text: 'Employee details, rates, deductions, hours, payslips, and reports should not live in five different places.',
    icon: AlertCircle,
  },
  {
    title: 'Old records are hard to find',
    text: 'When someone asks for an old payslip or payroll run, digging through files costs time.',
    icon: FolderOpen,
  },
];

function PainSection() {
  return (
    <section id="pain" className="section-shell rounded-[2rem] border border-cardborder bg-gradient-to-br from-softbg via-white to-softbg p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="section-kicker">The problem</p>
            <h2 className="section-heading">Payroll should not eat your month-end.</h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-muted">
            Every hour spent fixing spreadsheets, checking papers, and hunting old records is time you do not get back.
          </p>
          <div className="pt-4">
            <a href="https://wa.me/27816596157?text=Hi%20Payflow%20SA%2C%20I%20want%20to%20start%20my%20free%20month" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-sm font-semibold text-payflow hover:gap-3 transition-all">
              See how to fix it
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pains.map(({ title, text, icon: Icon }) => (
            <div key={title} className="section-card-premium p-5 card-hover group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-payflow/10 to-payflow/5 text-payflow group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainSection;
