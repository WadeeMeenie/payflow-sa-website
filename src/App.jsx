import Header from './components/Header.jsx';
import ScrollingBanner from './components/ScrollingBanner.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import PainSection from './components/PainSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import LifestyleSection from './components/LifestyleSection.jsx';
import Features from './components/Features.jsx';
import Comparison from './components/Comparison.jsx';
import Pricing from './components/Pricing.jsx';
import SetupHelp from './components/SetupHelp.jsx';
import Industries from './components/Industries.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

const WA_LINK =
  'https://wa.me/27816596157?text=Hi%20Payflow%20SA%2C%20I%20want%20to%20start%20my%20free%20month';

function App() {
  return (
    <div className="min-h-screen text-navy">
      <Header whatsappLink={WA_LINK} />
      <ScrollingBanner />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero whatsappLink={WA_LINK} />
        <TrustStrip whatsappLink={WA_LINK} />
        <PainSection />
        <HowItWorks />
        <LifestyleSection whatsappLink={WA_LINK} />
        <Features />
        <Comparison whatsappLink={WA_LINK} />
        <Pricing whatsappLink={WA_LINK} />
        <SetupHelp whatsappLink={WA_LINK} />
        <Industries />
        <Testimonials />
        <FAQ />
        <FinalCTA whatsappLink={WA_LINK} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
