import { Helmet } from 'react-helmet-async';
import HeroSection from './sections/HeroSection';
import StatsBarSection from './sections/StatsBarSection';
import HowItWorksSection from './sections/HowItWorksSection';
import WhatYouGetSection from './sections/WhatYouGetSection';
import SignalShowcaseSection from './sections/SignalShowcaseSection';
import PerformanceRecordSection from './sections/PerformanceRecordSection';
import WhatWeTradeSection from './sections/WhatWeTradeSection';
import PricingHomeSection from './sections/PricingHomeSection';
import AppSection from './sections/AppSection';
import TestimonialsHomeSection from './sections/TestimonialsHomeSection';
import FAQSection from './sections/FAQSection';
import FinalCTASection from './sections/FinalCTASection';

const Home = () => {
    return (
        <div className="bg-black min-h-screen relative overflow-hidden text-white font-sans selection:bg-[rgb(32,109,254)]/30">
            <Helmet>
                <title>Options Trading Signals App | 70.3% Win Rate | OnlyOptions.us</title>
                <meta name="description" content="Get real-time options trading signals on iOS and Android. Verified 70.3% win rate across 1,847 trades. SPY, QQQ, NVDA, AAPL and more. $60/month — 7-day access." />
                <link rel="canonical" href="https://onlyoptions.us/" />
            </Helmet>

            <HeroSection />
            <StatsBarSection />
            <HowItWorksSection />
            <WhatYouGetSection />
            <SignalShowcaseSection />
            <PerformanceRecordSection />
            <WhatWeTradeSection />
            <PricingHomeSection />
            <AppSection />
            <TestimonialsHomeSection />
            <FAQSection />
            <FinalCTASection />
        </div>
    );
};

export default Home;
