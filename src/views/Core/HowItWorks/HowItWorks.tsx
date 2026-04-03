import HeroSection from '../../../components/ui/Hero/HeroSection';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import appMockup from '../../../assets/pages_images/Mobile Trading Signals App-12.png';

// Import New Modular Sections
import Step1Subscribe from './sections/Step1Subscribe';
import Step2ReceiveSignal from './sections/Step2ReceiveSignal';
import Step3ExecuteTrade from './sections/Step3ExecuteTrade';
import Step4ManageTrade from './sections/Step4ManageTrade';
import PremarketAnalysis from './sections/PremarketAnalysis';
import OnboardingPlan from './sections/OnboardingPlan';
import HowItWorksFaq from './sections/HowItWorksFaq';

const HowItWorks = () => {
  return (
    <div className="bg-black">
      <HeroSection
        title={<>How OnlyOptions <br /><span className="text-brand-500">Works</span></>}
        subtitle="You do not need to read charts, calculate Greeks, or spot patterns. Our FINRA-licensed analysts do all the analysis. You receive a clear, specific alert ready to execute in under 60 seconds."
        primaryCtaText="Get Access Now"
        primaryCtaLink="/signup"
        image={appMockup}
        badgeText="From Signal to Profit in 4 Steps"
      />

      {/* Step 1: Subscribe */}
      <StandardSection variant="muted" divider="bottom" spacing="lg">
        <div className="max-w-7xl mx-auto">
          <Step1Subscribe />
        </div>
      </StandardSection>

      {/* Step 2: Signal Embed */}
      <StandardSection variant="institutional" dotGrid divider="bottom" spacing="lg">
        <div className="max-w-7xl mx-auto">
          <Step2ReceiveSignal />
        </div>
      </StandardSection>

      {/* Step 3: Execution */}
      <StandardSection variant="muted" divider="bottom" spacing="lg">
        <div className="max-w-7xl mx-auto">
          <Step3ExecuteTrade />
        </div>
      </StandardSection>

      {/* Step 4: Management */}
      <StandardSection variant="default" divider="bottom" spacing="lg">
        <div className="max-w-7xl mx-auto">
          <Step4ManageTrade />
        </div>
      </StandardSection>

      {/* Premarket Analysis Process */}
      <StandardSection variant="muted" dotGrid divider="bottom" spacing="lg">
        <div className="max-w-7xl mx-auto">
          <PremarketAnalysis />
        </div>
      </StandardSection>

      {/* Beginner Onboarding Roadmap */}
      <StandardSection variant="institutional" divider="bottom" spacing="lg">
        <div className="max-w-7xl mx-auto">
          <OnboardingPlan />
        </div>
      </StandardSection>

      {/* FAQ Section */}
      <StandardSection variant="muted" divider="bottom" spacing="lg">
        <div className="max-w-7xl mx-auto">
          <HowItWorksFaq />
        </div>
      </StandardSection>

      {/* Bottom CTA */}
      <StandardCTA
        title="Ready to Put This Into Practice?"
        subtitle="Join 1,247 traders receiving daily signals with a verified 70.3% win rate. Get instant access to our premium signals."
      />
    </div>
  );
};

export default HowItWorks;
