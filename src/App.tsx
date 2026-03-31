import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';

import Home from './pages/Core/Home/Home';
import About from './pages/Core/About/About';
import Pricing from './pages/Core/Pricing/Pricing';
import Performance from './pages/Core/Performance/Performance';
import HowItWorks from './pages/Core/HowItWorks/HowItWorks';
import Testimonials from './pages/Core/Testimonials/Testimonials';
import Faq from './pages/Core/Faq/Faq';
import Contact from './pages/Core/Contact/Contact';
import Blog from './pages/Core/Blog/Blog';
import Membership from './pages/Core/Membership/Membership';

import Sitemap from './pages/Legal/Sitemap';
import TermsOfService from './pages/Legal/TermsOfService';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import RiskDisclaimer from './pages/Legal/RiskDisclaimer';
import RefundPolicy from './pages/Legal/RefundPolicy';
import AffiliateProgram from './pages/Legal/AffiliateProgram';
import PositionSizeCalculator from './pages/Tools/PositionSizeCalculator';
import OptionsProfitCalculator from './pages/Tools/OptionsProfitCalculator';
import RoiCalculatorOptions from './pages/Tools/RoiCalculatorOptions';
import OptionsBreakevenCalculator from './pages/Tools/OptionsBreakevenCalculator';
import OptionsSignalsForBeginners from './pages/Education/Signals/OptionsSignalsForBeginners';
import OptionsSignalsRiskManagement from './pages/Education/Signals/OptionsSignalsRiskManagement';
import BestBrokersForOptionsTrading from './pages/Education/Platforms/BestBrokersForOptionsTrading';
import Page0dteOptionsStrategyCompleteGuide from './pages/Strategies/DayTrading/Page0dteOptionsStrategyCompleteGuide';
import CreditSpreadsStrategy from './pages/Strategies/Advanced/CreditSpreadsStrategy';
import DebitSpreadsGuide from './pages/Strategies/Advanced/DebitSpreadsGuide';
import ButterflySpreadOptions from './pages/Strategies/Advanced/ButterflySpreadOptions';
import RatioSpreadOptions from './pages/Strategies/Advanced/RatioSpreadOptions';
import CalendarSpreadStrategy from './pages/Strategies/Advanced/CalendarSpreadStrategy';
import ProtectivePutStrategy from './pages/Strategies/Advanced/ProtectivePutStrategy';
import CoveredCallStrategy from './pages/Strategies/Advanced/CoveredCallStrategy';
import IronCondorStrategy from './pages/Strategies/Advanced/IronCondorStrategy';
import EarningsOptionsPlays from './pages/Strategies/SwingTrading/EarningsOptionsPlays';
import NvdaOptionsSignals from './pages/Stocks/MegaCap/NvdaOptionsSignals';
import AaplOptionsSignals from './pages/Stocks/MegaCap/AaplOptionsSignals';
import TslaOptionsTradingGuide from './pages/Stocks/MegaCap/TslaOptionsTradingGuide';
import MsftOptionsStrategy from './pages/Stocks/MegaCap/MsftOptionsStrategy';
import AmznOptionsTrading from './pages/Stocks/MegaCap/AmznOptionsTrading';
import MetaOptionsTrading from './pages/Stocks/MegaCap/MetaOptionsTrading';
import GooglOptionsSignals from './pages/Stocks/MegaCap/GooglOptionsSignals';
import AmdOptionsSignals from './pages/Stocks/MegaCap/AmdOptionsSignals';
import NflxOptionsStrategy from './pages/Stocks/MegaCap/NflxOptionsStrategy';
import IwmOptionsSignals from './pages/Stocks/Indices/IwmOptionsSignals';
import OptionsTrading101 from './pages/Education/Basics/OptionsTrading101';
import HowToGetApprovedForOptionsTrading from './pages/Education/Platforms/HowToGetApprovedForOptionsTrading';
import OptionsSignalsPositionSizing from './pages/Education/Signals/OptionsSignalsPositionSizing';
import OptionsPremiumExplained from './pages/Education/Basics/OptionsPremiumExplained';
import CommonOptionsTradingMistakes from './pages/Education/Basics/CommonOptionsTradingMistakes';
import ImpliedVolatilityExplained from './pages/Education/Basics/ImpliedVolatilityExplained';
import HowToReadOptionsChains from './pages/Education/Basics/HowToReadOptionsChains';
import Spy0dteStrategy from './pages/Strategies/DayTrading/Spy0dteStrategy';
import Qqq0dteTrading from './pages/Strategies/DayTrading/Qqq0dteTrading';
import DynamicPages from './pages/DynamicPages';

function App() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin" />
      </div>
    }>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/position-size-calculator" element={<PositionSizeCalculator />} />
          <Route path="/options-profit-calculator" element={<OptionsProfitCalculator />} />
          <Route path="/roi-calculator" element={<RoiCalculatorOptions />} />
          <Route path="/breakeven-calculator" element={<OptionsBreakevenCalculator />} />
          <Route path="/options-signals-for-beginners" element={<OptionsSignalsForBeginners />} />
          <Route path="/options-signals-risk-management" element={<OptionsSignalsRiskManagement />} />
          <Route path="/best-brokers-for-options-trading" element={<BestBrokersForOptionsTrading />} />
          <Route path="/0dte-options-strategy-complete-guide" element={<Page0dteOptionsStrategyCompleteGuide />} />
          <Route path="/credit-spreads-strategy" element={<CreditSpreadsStrategy />} />
          <Route path="/butterfly-spread-options" element={<ButterflySpreadOptions />} />
          <Route path="/ratio-spread-options" element={<RatioSpreadOptions />} />
          <Route path="/calendar-spread-strategy" element={<CalendarSpreadStrategy />} />
          <Route path="/protective-put-strategy" element={<ProtectivePutStrategy />} />
          <Route path="/covered-call-strategy" element={<CoveredCallStrategy />} />
          <Route path="/iron-condor-strategy" element={<IronCondorStrategy />} />
          <Route path="/debit-spreads-guide" element={<DebitSpreadsGuide />} />
          <Route path="/strategies/earnings-trading" element={<EarningsOptionsPlays />} />
          <Route path="/nvda-options-signals" element={<NvdaOptionsSignals />} />
          <Route path="/aapl-options-signals" element={<AaplOptionsSignals />} />
          <Route path="/tsla-options-trading-guide" element={<TslaOptionsTradingGuide />} />
          <Route path="/msft-options-strategy" element={<MsftOptionsStrategy />} />
          <Route path="/msft-options-signals" element={<MsftOptionsStrategy />} />
          <Route path="/amzn-options-trading" element={<AmznOptionsTrading />} />
          <Route path="/amzn-options-signals" element={<AmznOptionsTrading />} />
          <Route path="/meta-options-trading" element={<MetaOptionsTrading />} />
          <Route path="/meta-options-signals" element={<MetaOptionsTrading />} />
          <Route path="/googl-options-signals" element={<GooglOptionsSignals />} />
          <Route path="/amd-options-signals" element={<AmdOptionsSignals />} />
          <Route path="/nflx-options-strategy" element={<NflxOptionsStrategy />} />
          <Route path="/nflx-options-signals" element={<NflxOptionsStrategy />} />
          <Route path="/iwm-options-signals" element={<IwmOptionsSignals />} />
          <Route path="/iwm-qqq-coin-pltr-options-signals" element={<IwmOptionsSignals />} />
          <Route path="/options-trading-101" element={<OptionsTrading101 />} />
          <Route path="/spy-options-signals" element={<Spy0dteStrategy />} />
          <Route path="/spy-options-trading-guide" element={<Spy0dteStrategy />} />
          <Route path="/spy-0dte-strategy" element={<Spy0dteStrategy />} />
          <Route path="/qqq-options-signals" element={<Qqq0dteTrading />} />
          <Route path="/qqq-options-trading-strategy" element={<Qqq0dteTrading />} />
          <Route path="/qqq-0dte-trading" element={<Qqq0dteTrading />} />
          <Route path="/how-to-get-approved-for-options-trading" element={<HowToGetApprovedForOptionsTrading />} />
          <Route path="/position-sizing-guide-options" element={<OptionsSignalsPositionSizing />} />
          <Route path="/options-signals-position-sizing" element={<OptionsSignalsPositionSizing />} />
          <Route path="/understanding-options-premium-pricing" element={<OptionsPremiumExplained />} />
          <Route path="/options-premium-explained" element={<OptionsPremiumExplained />} />
          <Route path="/common-options-trading-mistakes" element={<CommonOptionsTradingMistakes />} />
          <Route path="/understanding-implied-volatility-options" element={<ImpliedVolatilityExplained />} />
          <Route path="/implied-volatility-explained" element={<ImpliedVolatilityExplained />} />
          <Route path="/how-to-read-options-chain" element={<HowToReadOptionsChains />} />
          <Route path="/how-to-read-options-chains" element={<HowToReadOptionsChains />} />

          {/* Smart catch-all for placeholder pages */}
          <Route path="*" element={<DynamicPages />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
