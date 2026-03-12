import { Helmet } from 'react-helmet-async';
import HeroSection from '../../../components/ui/Hero/HeroSection';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import FaqSection from './sections/FaqSection';
import { faqData } from './data/faqData';
import mockupImg from '../../../assets/pages images/Modern Lotto and Stocks App-5.png';
import { Card } from '../../../components/ui/Card/Card';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';

const Faq = () => {

  // Flatten all 60 questions into a single array for JSON-LD schema generation
  const allQuestions = faqData.flatMap(category => category.items);

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <div className="bg-black">
      <Helmet>
        <title>OnlyOptions FAQ — 60 Questions Answered About Our Options Signal Service</title>
        <meta name="description" content="Complete FAQ for OnlyOptions.us — 60 questions answered covering signals, performance, pricing, execution, brokers, and onboarding. Options signal service. 70.3% win rate. $60/month." />
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <HeroSection
        title={<>OnlyOptions <span className="text-brand-500">FAQ</span></>}
        subtitle="60 Questions Answered — from how signals work and what performance results mean, to execution guidance, broker selection, and how to get started."
        primaryCtaText="Join Community"
        primaryCtaLink="/signup"
        image={mockupImg}
        badgeText="Help Center"
      />

      <StandardSection spacing="lg" divider="bottom">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Quick Navigation Links */}
          <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 mb-16">
            <h3 className="text-white font-black mb-6 uppercase tracking-tight">Quick Navigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqData.map((category, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx + 1}`}
                  className="text-brand-400 font-bold text-sm tracking-wide hover:text-brand-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-white/30 text-xs">→</span> {category.category}
                </a>
              ))}
            </div>
          </Card>

          <FaqSection data={faqData} />

          <Card variant="glass" className="p-10 border-brand-500/20 bg-brand-500/5 text-center space-y-6 mt-24">
            <SectionHeader
              title="Still have questions?"
              description="Our support team is ready to help. Plus, find 20+ more detailed answers in our private Discord community."
            />
            <div className="pt-4">
              <a href="/contact" className="text-brand-400 font-black uppercase tracking-widest text-[10px] hover:text-brand-300 transition-colors">
                Open a Support Ticket →
              </a>
            </div>
          </Card>
        </div>
      </StandardSection>

      <StandardCTA
        title="Ready to Start?"
        subtitle="Try OnlyOptions risk-free for 7 Days. No credit card required. Full access. Cancel anytime."
        buttonText="Get Instant Access"
      />
    </div>
  );
};

export default Faq;
