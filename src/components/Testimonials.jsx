import { Quote } from 'lucide-react';

function Testimonials() {
  const reviews = [
    {
      quote:
        'Before this, payroll meant papers, spreadsheets, and double-checking everything. Now we capture the hours and the payroll run is much cleaner.',
      author: 'Admin Manager',
      location: 'Western Cape contractor',
      highlight: 'Much cleaner payroll',
    },
    {
      quote:
        'The first free month helped us test it properly. We could see the time saving before paying anything.',
      author: 'SME Owner',
      location: 'Mossel Bay',
      highlight: 'Tested before commitment',
    },
    {
      quote:
        'The biggest win is having payroll history and payslips in one place. It feels more organised.',
      author: 'Office Admin',
      location: 'Construction business',
      highlight: 'Everything organised',
    },
    {
      quote:
        'We paid for setup help because we wanted it done right from the start. Worth it.',
      author: 'Small business owner',
      location: 'Garden Route',
      highlight: 'Professional setup',
    },
  ];

  return (
    <section id="reviews" className="section-shell rounded-[2rem] border border-cardborder bg-gradient-to-br from-softbg via-white to-softbg p-6 sm:p-8 lg:p-10">
      <div className="mb-8 space-y-3 text-center">
        <p className="section-kicker">Proof points</p>
        <h2 className="section-heading">What South African businesses care about.</h2>
        <p className="max-w-2xl mx-auto text-sm text-muted">
          Results depend on correct setup and accurate information captured.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map(({ quote, author, location, highlight }) => (
          <div key={author} className="section-card-premium p-6 card-hover flex flex-col">
            <Quote className="h-6 w-6 text-payflow/20 mb-4" />
            <p className="text-sm leading-7 text-muted flex-1">{quote}</p>
            <div className="mt-6 pt-6 border-t border-[#DDE7EF]">
              <p className="text-xs font-bold text-payflow uppercase tracking-wider">{highlight}</p>
              <p className="mt-2 text-sm font-semibold text-navy">{author}</p>
              <p className="text-xs text-muted">{location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
