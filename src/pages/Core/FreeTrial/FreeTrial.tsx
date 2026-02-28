import { Helmet } from 'react-helmet-async';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Card } from '../../../components/ui/Card/Card';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';

import FreeTrialHero from './sections/FreeTrialHero';
import WhatYouGetTable from './sections/WhatYouGetTable';
import TrialProcessSteps from './sections/TrialProcessSteps';
import AfterTrialTable from './sections/AfterTrialTable';
import ProofAndStats from './sections/ProofAndStats';
import FreeTrialFaq from './sections/FreeTrialFaq';

const FreeTrial = () => {
  const schemaOffer = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "OnlyOptions.us 7-Day Free Trial",
    "description": "7-day free trial of professional options trading signals with no credit card required",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://onlyoptions.us/free-trial",
    "validFrom": "2023-01-01",
    "seller": {
      "@type": "Organization",
      "name": "OnlyOptions.us"
    },
    "eligibleDuration": {
      "@type": "QuantitativeValue",
      "value": "7",
      "unitCode": "DAY"
    }
  };

  const faqs = [
    {
      q: "Why do you not require a credit card for the trial?",
      a: "Because we do not need to. Services that require payment details upfront are relying on friction (people forgetting to cancel) to convert trials. We convert trials by delivering obvious value."
    },
    {
      q: "Will I be auto-charged after 7 days?",
      a: "No. Your trial expires and access ends automatically. You must manually subscribe to continue."
    },
    {
      q: "Can I trial multiple plans?",
      a: "No. The free trial gives you Basic plan access ($60/month tier)."
    },
    {
      q: "What if I want to subscribe before the 7 days end?",
      a: "Great! Click the subscribe link in your welcome email or visit onlyoptions.us/pricing. Your trial access converts to paid immediately."
    },
    {
      q: "Can I get a trial extension?",
      a: "No. Seven days is sufficient to evaluate signal quality, verify our track record, and experience the community."
    },
    {
      q: "What happens to my Discord access after the trial?",
      a: "If you do not subscribe, Discord access is revoked automatically when the trial expires."
    },
    {
      q: "Can I use the free trial if I previously subscribed and cancelled?",
      a: "No. Free trials are for new members only."
    },
    {
      q: "Do I get the 7-day money-back guarantee on top of the trial?",
      a: "Yes. If you subscribe after your trial, you still get our standard 7-day money-back guarantee from the date of your first payment."
    },
    {
      q: "Can I refer friends for another free trial?",
      a: "Yes. Each person gets only one trial per email address."
    }
  ];

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="bg-black">
      <Helmet>
        <title>Start Free 7-Day Trial | Options Signals | OnlyOptions.us</title>
        <meta name="description" content="Get 7 days of professional options signals free. No credit card required. Full access to SPY, QQQ, NVDA signals + performance dashboard + Discord. Cancel anytime." />
        <script type="application/ld+json">{JSON.stringify(schemaOffer)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <FreeTrialHero />

      <StandardSection spacing="lg" divider="bottom">
        <div className="max-w-6xl mx-auto space-y-32">
          <WhatYouGetTable />
          <TrialProcessSteps />
          <AfterTrialTable />
          <ProofAndStats />
          <FreeTrialFaq />

          <div className="pt-20">
            <Card variant="glass" className="p-12 border-brand-500/20 bg-brand-500/5 relative overflow-hidden text-center max-w-4xl mx-auto">
              <SectionHeader
                title="Zero Risk Guarantee"
                description="You Literally Cannot Lose"
                align="center"
                className="mb-12"
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-1">
                  <div className="text-white font-black text-xl">$0</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">Risk</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-black text-xl">7 Days</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">Full Access</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-black text-xl">No CC</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">Required</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-black text-xl">Zero</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">Exposure</div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
                Even if you subscribe after the trial, you still get a 7-day money-back guarantee.
                That is <span className="text-white font-bold">14 days total</span> to evaluate the service with ZERO financial risk.
              </p>
            </Card>
          </div>
        </div>
      </StandardSection>

      <StandardCTA
        title="Ready to See What 1,247 Members Already Know?"
        subtitle="Join the traders who are already profiting with OnlyOptions.us. Start your free 7-day trial now — no credit card, no commitment, no risk."
        buttonText="START YOUR FREE TRIAL NOW"
      />

      <div className="bg-black pb-24 text-center">
        <div className="flex justify-center gap-8 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
          <span>4.8/5 Rating</span>
          <span>70.3% Win Rate</span>
          <span>1,847 Signals</span>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
