import { Helmet } from 'react-helmet-async';
import HeroSection from '../../../components/sections/Home/HeroSection';
import StatsBarSection from '../../../components/sections/Home/StatsBarSection';
import HowItWorksSection from '../../../components/sections/Home/HowItWorksSection';
import WhatYouGetSection from '../../../components/sections/Home/WhatYouGetSection';
import SignalShowcaseSection from '../../../components/sections/Home/SignalShowcaseSection';
import PerformanceRecordSection from '../../../components/sections/Home/PerformanceRecordSection';
import WhatWeTradeSection from '../../../components/sections/Home/WhatWeTradeSection';
import PricingHomeSection from '../../../components/sections/Home/PricingHomeSection';
import AppSection from '../../../components/sections/Home/AppSection';
import TestimonialsHomeSection from '../../../components/sections/Home/TestimonialsHomeSection';
import FAQSection from '../../../components/sections/Home/FAQSection';
import FinalCTASection from '../../../components/sections/Home/FinalCTASection';

const Home = () => {
    return (
        <div className="bg-black min-h-screen relative overflow-hidden text-white font-sans selection:bg-[rgb(32,109,254)]/30">
            <Helmet>
                <title>Options Trading Signals App | 70.3% Win Rate | OnlyOptions.us</title>
                <meta name="description" content="Get real-time options trading signals on iOS and Android. Verified 70.3% win rate across 1,847 trades. SPY, QQQ, NVDA, AAPL and more. $60/month — 7-day free trial." />
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
