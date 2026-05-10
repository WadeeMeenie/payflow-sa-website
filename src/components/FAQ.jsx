import { ChevronDown } from 'lucide-react';

function FAQ() {
  const faqs = [
    {
      question: 'Is the first month really free?',
      answer: 'Yes. You can test Payflow SA for your business before committing.',
    },
    {
      question: 'Is there a contract?',
      answer: 'No. Payflow SA is monthly. Cancel anytime.',
    },
    {
      question: 'Is this built for South Africa?',
      answer: 'Yes. The app is built around South African payroll workflows, Rand values, employee records, payslips, and payroll reports.',
    },
    {
      question: 'Can I set it up myself?',
      answer: 'Yes. You can add your own company, departments, employees, pay types, and payroll details.',
    },
    {
      question: 'What is the R299 setup help?',
      answer: 'It is optional once-off assistance where Payflow SA helps set up your company and employees using the information you provide.',
    },
    {
      question: 'What is the difference between R599 and R899?',
      answer: 'R599 is for timesheets to payslips. R899 includes full report access such as EMP201, IRP5, EMP501, UI19, and ETI breakdown where available.',
    },
    {
      question: 'Does the app replace all payroll responsibility?',
      answer: 'No. You still need to capture accurate information and review payroll. The app helps organise and process the workflow.',
    },
    {
      question: 'How do I start?',
      answer: 'Tap Start My Free Month and message Payflow SA on WhatsApp.',
    },
  ];

  return (
    <section id="faq" className="section-shell">
      <div className="mb-8 space-y-3 text-center">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-heading">Questions?</h2>
      </div>
      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map(({ question, answer }) => (
          <details
            key={question}
            className="section-card-premium group cursor-pointer px-6 py-4 card-hover"
          >
            <summary className="flex items-center justify-between text-sm font-bold text-navy list-none">
              {question}
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm leading-7 text-muted">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
