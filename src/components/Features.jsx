import { Zap, CheckCircle2, Download, Users, SlidersHorizontal, Clock3, History, Eye, FileText, UserPlus, MessageCircle } from 'lucide-react';

const featuredCards = [
  {
    title: 'Capture payroll hours faster',
    description: 'Digital hour capture replaces paper timesheets and manual typing.',
    icon: Zap,
    color: 'from-payflow/10 to-payflow/5',
  },
  {
    title: 'Review payroll before finalising',
    description: 'See totals, check accuracy, and approve before exporting payslips.',
    icon: CheckCircle2,
    color: 'from-paygreen/10 to-paygreen/5',
  },
  {
    title: 'Export payslips and reports',
    description: 'PDF payslips and payroll history in one place. Easy to find later.',
    icon: Download,
    color: 'from-payflow/10 to-payflow/5',
  },
];

const smallFeatures = [
  { title: 'Employee profiles', icon: Users },
  { title: 'Pay type setup', icon: SlidersHorizontal },
  { title: 'Monthly, daily, hourly logic', icon: Clock3 },
  { title: 'Payroll history', icon: History },
  { title: 'Supervisor join option', icon: UserPlus },
  { title: 'Plan-based report access', icon: MessageCircle },
];

function Features() {
  return (
    <section className="section-shell">
      <div className="space-y-4">
        <p className="section-kicker">Features</p>
        <h2 className="section-heading">Everything you need to run cleaner payroll.</h2>
      </div>

      {/* Featured Cards */}
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {featuredCards.map(({ title, description, icon: Icon, color }) => (
          <div
            key={title}
            className={`section-card-premium bg-gradient-to-br ${color} p-6 card-hover group`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/70 text-payflow group-hover:scale-110 transition-transform">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-lg font-bold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
          </div>
        ))}
      </div>

      {/* Small Feature Chips */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {smallFeatures.map(({ title, icon: Icon }) => (
          <div key={title} className="section-card px-4 py-3 card-hover flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-payflow/5 text-payflow flex-shrink-0">
              <Icon className="h-4 w-4" />
            </span>
            <p className="text-xs font-semibold text-navy">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
