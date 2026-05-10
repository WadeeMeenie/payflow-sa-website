import { ArrowRight } from 'lucide-react';

function Industries() {
  const industriesImageSrc = `${import.meta.env.BASE_URL}images/payflow-industries-collage.png`;

  const industries = [
    'Contractors',
    'Subcontractors',
    'Tender-based companies',
    'Construction teams',
    'Workshops',
    'Cleaning companies',
    'Security companies',
    'Admin-heavy SMEs',
    'Small retail teams',
    'Service businesses',
  ];

  return (
    <section className="section-shell rounded-[2rem] bg-white p-6 shadow-premium sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="section-kicker">Who it is for</p>
          <h2 className="section-heading mt-2">Made for the businesses doing the work.</h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted">
            If your team has hours, rates, employees, payslips, and payroll records to manage, Payflow SA was built for you.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry}
                className="section-card flex items-center gap-3 px-4 py-3 card-hover"
              >
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-payflow" />
                <span className="text-sm font-bold text-navy">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] shadow-premium">
          <img
            src={industriesImageSrc}
            alt="South African industries using Payflow SA"
            className="h-full min-h-[340px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Industries;
