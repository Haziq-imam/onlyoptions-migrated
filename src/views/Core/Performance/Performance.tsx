import HeroSection from '../../../components/ui/Hero/HeroSection';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import mockupImg from '../../../assets/pages_images/Modern Lotto and Stocks App-4.png';

import PerformanceStatsSection from './sections/PerformanceStatsSection';
import PerformanceDataSection from './sections/PerformanceDataSection';

const Performance = () => {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection
        title={<>Live Performance <br /> <span className="text-brand-500">Transparency</span></>}
        subtitle="We track every single trade. No hidden losses, no cherry-picked wins. Real results for real traders."
        primaryCtaText="Get Access Now"
        primaryCtaLink="/signup"
        image={ (typeof mockupImg === 'string' ? mockupImg : (mockupImg as any).src) }
        badgeText="Verified Results"
      />

      <PerformanceStatsSection />
      <PerformanceDataSection />

      <StandardCTA
        title="Dominate the Markets Together"
        subtitle="Join 1,247+ professional traders receiving live alerts every market day."
      />
    </div>
  );
};

export default Performance;
