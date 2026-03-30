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
    "name": "OnlyOptions.us Premium Membership",
    "description": "Premium Membership to professional options trading signals with flexible membership options",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://onlyoptions.us/membership-access",
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
      q: "How do I start my membership evaluation?",
      a: "Getting started is simple. We provide immediate access using our institutional evaluation model. We believe our service delivers obvious value from day one, allowing you to experience our signals with complete confidence."
    },
    {
      q: "How is billing handled?",
      a: "We prioritize transparency. No automatic charges occur without your explicit selection of a subscription plan. You have full control over when to activate your long-term membership status."
    },
    {
      q: "What access do I receive initially?",
      a: "You receive full Basic Plan access ($60/month tier) during your initial membership evaluation period."
    },
    {
      q: "What if I want to select a plan before 7 days?",
      a: "Great! You can upgrade your status at any time by visiting onlyoptions.us/pricing or through the link in your welcome communication. Your chosen plan will activate immediately."
    },
    {
      q: "Is the 7-day period sufficient?",
      a: "Yes. Seven days provides ample time to evaluate our signal quality, verify our track record, and experience the performance of the service."
    },
    {
      q: "What happens to my access if I do not select a plan?",
      a: "If you do not choose to extend your membership, your access will expire automatically at the end of the evaluation period with no further obligation."
    },
    {
      q: "Is this available if I have held a membership before?",
      a: "Initial evaluation periods are reserved for new members to experience the platform for the first time."
    },
    {
      q: "Do I get a money-back guarantee?",
      a: "Yes. All new memberships include our standard 7-day Satisfaction Guarantee from the date of your first subscription payment."
    },
    {
      q: "Can I refer others to the platform?",
      a: "Absolutely. We encourage sharing the performance of OnlyOptions with fellow traders."
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
        <title>Join OnlyOptions Premium | Professional Options Signals</title>
        <meta name="description" content="Experience professional options signals with full access to SPY, QQQ, and NVDA alerts. Includes performance dashboard and real-time alerts with flexible membership options." />
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
                title="Satisfaction Guarantee"
                description="Join With Complete Confidence"
                align="center"
                className="mb-12"
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-1">
                  <div className="text-white font-black text-xl">Total</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">Confidence</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-black text-xl">Full</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">Access</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-black text-xl">Instant</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">Activation</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-black text-xl">Flexible</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-none">Membership</div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
                We are confident in our performance. All new memberships include a 7-day Satisfaction Guarantee.
                Experience everything we offer with <span className="text-white font-bold">zero hidden commitments</span> or risks.
              </p>
            </Card>
          </div>
        </div>
      </StandardSection>

      <StandardCTA
        title="Ready to See What 1,247 Members Already Know?"
        subtitle="Join the traders who are already profiting with OnlyOptions.us. Get instant access to professional signaling with no long-term commitment."
        buttonText="START PREMIUM MEMBERSHIP — INSTANT ACTIVATION"
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
