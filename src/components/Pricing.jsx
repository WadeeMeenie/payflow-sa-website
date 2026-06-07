import { ArrowRight, Check, Sparkles } from 'lucide-react';
import TrackedLink from './TrackedLink.jsx';

const plans = [
  {
    name: 'Timesheets to Payslips',
    price: 'R599',
    tone: 'payflow',
    description: 'Best for businesses that only need payroll processing and payslips.',
    action: 'Start R599 Plan',
    value: 599,
    metaContentName: 'Payflow SA Basic Plan',
    features: [
      'Employee setup',
      'Capture hours',
      'Payroll run',
      'Payroll review',
      'Payslip output',
      'Payroll history',
    ],
  },
  {
    name: 'Full Payroll Access',
    price: 'R899',
    tone: 'paygreen',
    description: 'Best for businesses that want payroll reports and stronger admin control.',
    action: 'Start Full Access',
    value: 899,
    metaContentName: 'Payflow SA Full Plan',
    featured: true,
    features: [
      'Everything in R599',
      'EMP201 summary',
      'IRP5 certificates',
      'EMP501 reconciliation',
      'UI19 declaration',
      'ETI breakdown',
      'Full reports access',
    ],
  },
];

function Pricing({ whatsappLink }) {
  return (
    <section id="pricing" className="section-shell">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="section-kicker">Plans</p>
        <h2 className="section-heading mt-2">Simple pricing for South African businesses.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
          First month free on both plans. No contract. Cancel anytime.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white p-6 shadow-premium sm:p-8 ${
              plan.featured ? 'border-paygreen ring-2 ring-paygreen/20' : 'border-cardborder'
            }`}
          >
            {plan.featured && (
              <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-paygreen px-3 py-1 text-xs font-black text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Best Value
              </div>
            )}

            <div className="pr-24">
              <p className={`text-sm font-black ${plan.tone === 'paygreen' ? 'text-paygreen' : 'text-payflow'}`}>
                First month free
              </p>
              <h3 className="mt-2 text-2xl font-black text-darknavy">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{plan.description}</p>
            </div>

            <div className="my-6 rounded-3xl bg-gradient-to-br from-softbg to-white p-5">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-black leading-none text-darknavy">{plan.price}</span>
                <span className="pb-1 text-sm font-bold text-muted">/ month</span>
              </div>
            </div>

            <ul className="grid flex-1 gap-3 sm:grid-cols-2">
              {plan.features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold text-navy">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-paygreen" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <TrackedLink
              href={whatsappLink}
              metaEvent="Lead"
              metaParams={{
                value: plan.value,
                content_name: plan.metaContentName,
                content_category: 'Subscription Lead',
              }}
              target="_blank"
              rel="noreferrer noopener"
              className="cta-button-lg mt-7 w-full justify-center"
            >
              {plan.action}
              <ArrowRight className="h-4 w-4" />
            </TrackedLink>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-cardborder bg-white px-5 py-4 text-center shadow-soft">
        <p className="text-sm font-bold text-navy">
          Start free. Upgrade only when you are ready. No hidden fees.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
