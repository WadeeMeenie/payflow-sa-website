import { CheckCircle2, Clock3, Shield, Smartphone, Globe, MessageCircle } from 'lucide-react';

const points = [
  { icon: CheckCircle2, title: 'First month free', color: 'from-payflow/10 to-payflow/5' },
  { icon: Clock3, title: 'No contract', color: 'from-paygreen/10 to-paygreen/5' },
  { icon: Shield, title: 'Cancel anytime', color: 'from-payflow/10 to-payflow/5' },
  { icon: MessageCircle, title: 'WhatsApp support', color: 'from-paygreen/10 to-paygreen/5' },
  { icon: Globe, title: 'Built for South Africa', color: 'from-payflow/10 to-payflow/5' },
  { icon: Smartphone, title: 'Android app', color: 'from-paygreen/10 to-paygreen/5' },
];

function TrustStrip() {
  return (
    <section className="section-shell">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {points.map(({ icon: Icon, title, color }) => (
          <div
            key={title}
            className={`section-card bg-gradient-to-br ${color} px-5 py-4 card-hover`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 text-payflow">
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-xs font-semibold text-navy leading-tight">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustStrip;
