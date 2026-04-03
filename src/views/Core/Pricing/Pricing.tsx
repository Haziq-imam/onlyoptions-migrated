import { Helmet } from 'react-helmet-async';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';

import PricingHeroSection from './sections/PricingHeroSection';
import PricingCardsSection from './sections/PricingCardsSection';
import FeatureComparisonSection from './sections/FeatureComparisonSection';
import WhichPlanSection from './sections/WhichPlanSection';
import RoiIllustrationSection from './sections/RoiIllustrationSection';
import TrialProcessSection from './sections/TrialProcessSection';
import BillingDetailsSection from './sections/BillingDetailsSection';
import PricingFaqSection from './sections/PricingFaqSection';

const Pricing = () => {
  return (
    <div className="bg-black text-gray-200 font-sans selection:bg-brand-500/30">
      <Helmet>
        <title>OnlyOptions Pricing Options Signal Plans Starting at $60/Month</title>
        <meta name="description" content="OnlyOptions plans start at $60/month. Flexible Membership options with no long-term commitments. Compare Monthly and Annual plans with a verified 70.3% win rate." />
      </Helmet>

      <PricingHeroSection />
      <PricingCardsSection />
      <FeatureComparisonSection />
      <WhichPlanSection />
      <RoiIllustrationSection />
      <TrialProcessSection />
      <BillingDetailsSection />
      <PricingFaqSection />

      <StandardCTA />
    </div>
  );
};

export default Pricing;

