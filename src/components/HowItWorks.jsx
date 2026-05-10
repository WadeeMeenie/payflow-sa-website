import { Plus, Users, Clipboard, Eye, Download } from 'lucide-react';

const steps = [
  { title: 'Add your company', icon: Plus },
  { title: 'Add employees', icon: Users },
  { title: 'Capture hours or use monthly logic', icon: Clipboard },
  { title: 'Review payroll before finalising', icon: Eye },
  { title: 'Export payslips and reports', icon: Download },
];

function HowItWorks() {
  return (
    <section id="features" className="section-shell">
      <div className="space-y-4">
        <p className="section-kicker">Workflow</p>
        <div className="section-heading">From captured hours to payroll output.</div>
        <p className="max-w-2xl text-base leading-7 text-muted">
          The app does the heavy lifting after the correct information is captured.
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="mt-8 hidden rounded-[2rem] border border-cardborder bg-white p-8 shadow-soft lg:block">
        <div className="relative flex items-center justify-between">
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-payflow via-paygreen to-payflow" />
          <div className="relative flex w-full justify-between">
            {steps.map(({ title, icon: Icon }, index) => (
              <div key={title} className="flex flex-col items-center gap-4">
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-payflow to-paygreen shadow-premium">
                  <div className="flex flex-col items-center gap-1">
                    <Icon className="h-5 w-5 text-white" />
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                  </div>
                </div>
                <p className="max-w-[140px] text-center text-sm font-semibold text-navy">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="mt-8 lg:hidden space-y-4">
        {steps.map(({ title, icon: Icon }, index) => (
          <div key={title} className="section-card-premium p-5 card-hover flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-payflow to-paygreen text-white font-bold">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-navy">{title}</p>
            </div>
            <Icon className="h-5 w-5 text-payflow flex-shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
