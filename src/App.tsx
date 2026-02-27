import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Core/Home/Home';
import About from './pages/Core/About/About';
import Pricing from './pages/Core/Pricing/Pricing';
import Performance from './pages/Core/Performance/Performance';
import HowItWorks from './pages/Core/HowItWorks/HowItWorks';
import Testimonials from './pages/Core/Testimonials/Testimonials';
import Faq from './pages/Core/Faq/Faq';
import Contact from './pages/Core/Contact/Contact';
import Signup from './pages/Core/Signup/Signup';
import Login from './pages/Core/Login/Login';
import Blog from './pages/Core/Blog/Blog';
import FreeTrial from './pages/Core/FreeTrial/FreeTrial';
import OptionsTrading101 from './pages/Educational/OptionsTrading101/OptionsTrading101';
import WhatAreCallOptions from './pages/Educational/WhatAreCallOptions/WhatAreCallOptions';
import WhatArePutOptions from './pages/Educational/WhatArePutOptions/WhatArePutOptions';
import OptionsExpirationDatesExplained from './pages/Educational/OptionsExpirationDatesExplained/OptionsExpirationDatesExplained';
import StrikePriceGuide from './pages/Educational/StrikePriceGuide/StrikePriceGuide';
import InTheMoneyVsOutOfTheMoney from './pages/Educational/InTheMoneyVsOutOfTheMoney/InTheMoneyVsOutOfTheMoney';
import OptionsPremiumExplained from './pages/Educational/OptionsPremiumExplained/OptionsPremiumExplained';
import IntrinsicValueVsExtrinsicValue from './pages/Educational/IntrinsicValueVsExtrinsicValue/IntrinsicValueVsExtrinsicValue';
import TimeDecayThetaGuide from './pages/Educational/TimeDecayThetaGuide/TimeDecayThetaGuide';
import OptionsDeltaExplained from './pages/Educational/OptionsDeltaExplained/OptionsDeltaExplained';
import OptionsGammaGuide from './pages/Educational/OptionsGammaGuide/OptionsGammaGuide';
import OptionsVegaVolatility from './pages/Educational/OptionsVegaVolatility/OptionsVegaVolatility';
import ImpliedVolatilityExplained from './pages/Educational/ImpliedVolatilityExplained/ImpliedVolatilityExplained';
import HowToReadOptionsChains from './pages/Educational/HowToReadOptionsChains/HowToReadOptionsChains';
import OptionsBidAskSpread from './pages/Educational/OptionsBidAskSpread/OptionsBidAskSpread';
import WhatAreOptionsTradingSignals from './pages/Educational/WhatAreOptionsTradingSignals/WhatAreOptionsTradingSignals';
import HowToReadOptionsSignals from './pages/Educational/HowToReadOptionsSignals/HowToReadOptionsSignals';
import BestOptionsSignalsServices2026 from './pages/Educational/BestOptionsSignalsServices2026/BestOptionsSignalsServices2026';
import FreeOptionsSignalsVsPaid from './pages/Educational/FreeOptionsSignalsVsPaid/FreeOptionsSignalsVsPaid';
import OptionsDiscordServersList from './pages/Educational/OptionsDiscordServersList/OptionsDiscordServersList';
import OptionsTelegramAlerts from './pages/Educational/OptionsTelegramAlerts/OptionsTelegramAlerts';
import OptionsSmsAlerts from './pages/Educational/OptionsSmsAlerts/OptionsSmsAlerts';
import HowAccurateAreOptionsSignals from './pages/Educational/HowAccurateAreOptionsSignals/HowAccurateAreOptionsSignals';
import OptionsSignalsScamsHowToAvoid from './pages/Educational/OptionsSignalsScamsHowToAvoid/OptionsSignalsScamsHowToAvoid';
import BestTimeToTradeOptionsSignals from './pages/Educational/BestTimeToTradeOptionsSignals/BestTimeToTradeOptionsSignals';
import OptionsSignalsForBeginners from './pages/Educational/OptionsSignalsForBeginners/OptionsSignalsForBeginners';
import OptionsSignalsRiskManagement from './pages/Educational/OptionsSignalsRiskManagement/OptionsSignalsRiskManagement';
import OptionsSignalsPositionSizing from './pages/Educational/OptionsSignalsPositionSizing/OptionsSignalsPositionSizing';
import OptionsSignalsVsStockPicks from './pages/Educational/OptionsSignalsVsStockPicks/OptionsSignalsVsStockPicks';
import HowMuchMoneyDoINeedForOptionsSignals from './pages/Educational/HowMuchMoneyDoINeedForOptionsSignals/HowMuchMoneyDoINeedForOptionsSignals';
import BestBrokersForOptionsTrading from './pages/Educational/BestBrokersForOptionsTrading/BestBrokersForOptionsTrading';
import ThinkorswimOptionsTradingGuide from './pages/Educational/ThinkorswimOptionsTradingGuide/ThinkorswimOptionsTradingGuide';
import WebullOptionsTrading from './pages/Educational/WebullOptionsTrading/WebullOptionsTrading';
import RobinhoodOptionsTrading from './pages/Educational/RobinhoodOptionsTrading/RobinhoodOptionsTrading';
import TastyworksOptionsPlatform from './pages/Educational/TastyworksOptionsPlatform/TastyworksOptionsPlatform';
import InteractiveBrokersOptions from './pages/Educational/InteractiveBrokersOptions/InteractiveBrokersOptions';
import EtradeOptionsTrading from './pages/Educational/EtradeOptionsTrading/EtradeOptionsTrading';
import FidelityOptionsTrading from './pages/Educational/FidelityOptionsTrading/FidelityOptionsTrading';
import CharlesSchwabOptions from './pages/Educational/CharlesSchwabOptions/CharlesSchwabOptions';
import BestMobileAppForOptionsTrading from './pages/Educational/BestMobileAppForOptionsTrading/BestMobileAppForOptionsTrading';
import OptionsTradingCommissionsComparison from './pages/Educational/OptionsTradingCommissionsComparison/OptionsTradingCommissionsComparison';
import OptionsApprovalLevelsExplained from './pages/Educational/OptionsApprovalLevelsExplained/OptionsApprovalLevelsExplained';
import HowToGetApprovedForOptionsTrading from './pages/Educational/HowToGetApprovedForOptionsTrading/HowToGetApprovedForOptionsTrading';
import PatternDayTraderRuleOptions from './pages/Educational/PatternDayTraderRuleOptions/PatternDayTraderRuleOptions';
import CashAccountVsMarginAccountOptions from './pages/Educational/CashAccountVsMarginAccountOptions/CashAccountVsMarginAccountOptions';
import Page0dteOptionsStrategyCompleteGuide from './pages/Strategy/Page0dteOptionsStrategyCompleteGuide/Page0dteOptionsStrategyCompleteGuide';
import SameDayOptionsTrading from './pages/Strategy/SameDayOptionsTrading/SameDayOptionsTrading';
import Spy0dteStrategy from './pages/Strategy/Spy0dteStrategy/Spy0dteStrategy';
import Qqq0dteTrading from './pages/Strategy/Qqq0dteTrading/Qqq0dteTrading';
import MorningGapOptionsStrategy from './pages/Strategy/MorningGapOptionsStrategy/MorningGapOptionsStrategy';
import PowerHourOptionsTrading from './pages/Strategy/PowerHourOptionsTrading/PowerHourOptionsTrading';
import ScalpingOptionsGuide from './pages/Strategy/ScalpingOptionsGuide/ScalpingOptionsGuide';
import MomentumOptionsTrading from './pages/Strategy/MomentumOptionsTrading/MomentumOptionsTrading';
import BreakoutOptionsStrategy from './pages/Strategy/BreakoutOptionsStrategy/BreakoutOptionsStrategy';
import ReversalOptionsPlays from './pages/Strategy/ReversalOptionsPlays/ReversalOptionsPlays';
import WeeklyOptionsSwingTrading from './pages/Strategy/WeeklyOptionsSwingTrading/WeeklyOptionsSwingTrading';
import MonthlyOptionsStrategy from './pages/Strategy/MonthlyOptionsStrategy/MonthlyOptionsStrategy';
import EarningsOptionsPlays from './pages/Strategy/EarningsOptionsPlays/EarningsOptionsPlays';
import FedAnnouncementOptionsStrategy from './pages/Strategy/FedAnnouncementOptionsStrategy/FedAnnouncementOptionsStrategy';
import EconomicDataOptionsTrading from './pages/Strategy/EconomicDataOptionsTrading/EconomicDataOptionsTrading';
import SupportResistanceOptions from './pages/Strategy/SupportResistanceOptions/SupportResistanceOptions';
import TrendFollowingOptionsStrategy from './pages/Strategy/TrendFollowingOptionsStrategy/TrendFollowingOptionsStrategy';
import MeanReversionOptions from './pages/Strategy/MeanReversionOptions/MeanReversionOptions';
import ChannelTradingOptions from './pages/Strategy/ChannelTradingOptions/ChannelTradingOptions';
import FibonacciOptionsStrategy from './pages/Strategy/FibonacciOptionsStrategy/FibonacciOptionsStrategy';
import CreditSpreadsStrategy from './pages/Strategy/CreditSpreadsStrategy/CreditSpreadsStrategy';
import DebitSpreadsGuide from './pages/Strategy/DebitSpreadsGuide/DebitSpreadsGuide';
import IronCondorStrategy from './pages/Strategy/IronCondorStrategy/IronCondorStrategy';
import ButterflySpreadOptions from './pages/Strategy/ButterflySpreadOptions/ButterflySpreadOptions';
import StraddleOptionsStrategy from './pages/Strategy/StraddleOptionsStrategy/StraddleOptionsStrategy';
import StrangleOptionsGuide from './pages/Strategy/StrangleOptionsGuide/StrangleOptionsGuide';
import CalendarSpreadStrategy from './pages/Strategy/CalendarSpreadStrategy/CalendarSpreadStrategy';
import RatioSpreadOptions from './pages/Strategy/RatioSpreadOptions/RatioSpreadOptions';
import CoveredCallStrategy from './pages/Strategy/CoveredCallStrategy/CoveredCallStrategy';
import ProtectivePutStrategy from './pages/Strategy/ProtectivePutStrategy/ProtectivePutStrategy';
import SpyOptionsSignals from './pages/StockSpecific/SpyOptionsSignals/SpyOptionsSignals';
import SpyOptionsTradingGuide from './pages/StockSpecific/SpyOptionsTradingGuide/SpyOptionsTradingGuide';
import QqqOptionsSignals from './pages/StockSpecific/QqqOptionsSignals/QqqOptionsSignals';
import QqqOptionsTradingStrategy from './pages/StockSpecific/QqqOptionsTradingStrategy/QqqOptionsTradingStrategy';
import DiaOptionsTrading from './pages/StockSpecific/DiaOptionsTrading/DiaOptionsTrading';
import IwmOptionsSignals from './pages/StockSpecific/IwmOptionsSignals/IwmOptionsSignals';
import VxxVolatilityOptions from './pages/StockSpecific/VxxVolatilityOptions/VxxVolatilityOptions';
import UvxyOptionsTrading from './pages/StockSpecific/UvxyOptionsTrading/UvxyOptionsTrading';
import TltTreasuryOptions from './pages/StockSpecific/TltTreasuryOptions/TltTreasuryOptions';
import GldGoldOptionsSignals from './pages/StockSpecific/GldGoldOptionsSignals/GldGoldOptionsSignals';
import AaplOptionsSignals from './pages/StockSpecific/AaplOptionsSignals/AaplOptionsSignals';
import TslaOptionsTradingGuide from './pages/StockSpecific/TslaOptionsTradingGuide/TslaOptionsTradingGuide';
import NvdaOptionsSignals from './pages/StockSpecific/NvdaOptionsSignals/NvdaOptionsSignals';
import MsftOptionsStrategy from './pages/StockSpecific/MsftOptionsStrategy/MsftOptionsStrategy';
import AmznOptionsTrading from './pages/StockSpecific/AmznOptionsTrading/AmznOptionsTrading';
import GooglOptionsSignals from './pages/StockSpecific/GooglOptionsSignals/GooglOptionsSignals';
import MetaOptionsTrading from './pages/StockSpecific/MetaOptionsTrading/MetaOptionsTrading';
import NflxOptionsStrategy from './pages/StockSpecific/NflxOptionsStrategy/NflxOptionsStrategy';
import AmdOptionsSignals from './pages/StockSpecific/AmdOptionsSignals/AmdOptionsSignals';
import CrmOptionsTrading from './pages/StockSpecific/CrmOptionsTrading/CrmOptionsTrading';
import GmeOptionsSignals from './pages/StockSpecific/GmeOptionsSignals/GmeOptionsSignals';
import AmcOptionsTrading from './pages/StockSpecific/AmcOptionsTrading/AmcOptionsTrading';
import PltrOptionsStrategy from './pages/StockSpecific/PltrOptionsStrategy/PltrOptionsStrategy';
import SofiOptionsSignals from './pages/StockSpecific/SofiOptionsSignals/SofiOptionsSignals';
import CoinOptionsTrading from './pages/StockSpecific/CoinOptionsTrading/CoinOptionsTrading';
import InternativeTradersReview from './pages/Comparison/InternativeTradersReview/InternativeTradersReview';
import InternativeTradersVsOnlyoptions from './pages/Comparison/InternativeTradersVsOnlyoptions/InternativeTradersVsOnlyoptions';
import StockKingOptionsReview from './pages/Comparison/StockKingOptionsReview/StockKingOptionsReview';
import FoolproofOptionsReview from './pages/Comparison/FoolproofOptionsReview/FoolproofOptionsReview';
import MindfulTraderReview from './pages/Comparison/MindfulTraderReview/MindfulTraderReview';
import OptionAlphaReview from './pages/Comparison/OptionAlphaReview/OptionAlphaReview';
import ProfitLyOptionsReview from './pages/Comparison/ProfitLyOptionsReview/ProfitLyOptionsReview';
import BenzingaOptionsReview from './pages/Comparison/BenzingaOptionsReview/BenzingaOptionsReview';
import BestOptionsSignalsServicesComparison2026 from './pages/Comparison/BestOptionsSignalsServicesComparison2026/BestOptionsSignalsServicesComparison2026';
import OptionsSignalsPricingComparison from './pages/Comparison/OptionsSignalsPricingComparison/OptionsSignalsPricingComparison';
import DiscordVsTelegramOptionsAlerts from './pages/Comparison/DiscordVsTelegramOptionsAlerts/DiscordVsTelegramOptionsAlerts';
import OptionsSignalsVsTradingCourse from './pages/Comparison/OptionsSignalsVsTradingCourse/OptionsSignalsVsTradingCourse';
import BestCheapOptionsSignalsUnder100 from './pages/Comparison/BestCheapOptionsSignalsUnder100/BestCheapOptionsSignalsUnder100';
import PremiumOptionsSignalsWorthIt from './pages/Comparison/PremiumOptionsSignalsWorthIt/PremiumOptionsSignalsWorthIt';
import InternativeTradersAlternative from './pages/Comparison/InternativeTradersAlternative/InternativeTradersAlternative';
import BestInternativeTradersCompetitor from './pages/Comparison/BestInternativeTradersCompetitor/BestInternativeTradersCompetitor';
import CheaperThanStockKingOptions from './pages/Comparison/CheaperThanStockKingOptions/CheaperThanStockKingOptions';
import BetterWinRateThanMindfulTrader from './pages/Comparison/BetterWinRateThanMindfulTrader/BetterWinRateThanMindfulTrader';
import MostAccurateOptionsSignals2026 from './pages/Comparison/MostAccurateOptionsSignals2026/MostAccurateOptionsSignals2026';
import OptionsProfitCalculator from './pages/Tools/OptionsProfitCalculator/OptionsProfitCalculator';
import OptionsBreakevenCalculator from './pages/Tools/OptionsBreakevenCalculator/OptionsBreakevenCalculator';
import PositionSizeCalculator from './pages/Tools/PositionSizeCalculator/PositionSizeCalculator';
import OptionsGreeksCalculator from './pages/Tools/OptionsGreeksCalculator/OptionsGreeksCalculator';
import ImpliedVolatilityCalculator from './pages/Tools/ImpliedVolatilityCalculator/ImpliedVolatilityCalculator';
import MaxPainCalculator from './pages/Tools/MaxPainCalculator/MaxPainCalculator';
import OptionsSpreadCalculator from './pages/Tools/OptionsSpreadCalculator/OptionsSpreadCalculator';
import RoiCalculatorOptions from './pages/Tools/RoiCalculatorOptions/RoiCalculatorOptions';
import TermsOfService from './pages/Legal/TermsOfService/TermsOfService';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy/PrivacyPolicy';
import RiskDisclaimer from './pages/Legal/RiskDisclaimer/RiskDisclaimer';
import RefundPolicy from './pages/Legal/RefundPolicy/RefundPolicy';
import AffiliateProgram from './pages/Legal/AffiliateProgram/AffiliateProgram';
import ReferralProgram from './pages/Legal/ReferralProgram/ReferralProgram';
import HelpCenter from './pages/Legal/HelpCenter/HelpCenter';
import GettingStartedGuide from './pages/Legal/GettingStartedGuide/GettingStartedGuide';
import AccountManagement from './pages/Legal/AccountManagement/AccountManagement';
import Sitemap from './pages/Legal/Sitemap/Sitemap';
import BestOptionsTradingSignals from './pages/Educational/BestOptionsTradingSignals/BestOptionsTradingSignals';

import ComingSoon from './pages/ComingSoon';

function App() {
  return (
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/education/options-trading-101" element={<OptionsTrading101 />} />
        <Route path="/what-are-call-options" element={<WhatAreCallOptions />} />
        <Route path="/what-are-put-options" element={<WhatArePutOptions />} />
        <Route path="/options-expiration-dates-explained" element={<OptionsExpirationDatesExplained />} />
        <Route path="/strike-price-guide" element={<StrikePriceGuide />} />
        <Route path="/in-the-money-vs-out-of-the-money" element={<InTheMoneyVsOutOfTheMoney />} />
        <Route path="/options-premium-explained" element={<OptionsPremiumExplained />} />
        <Route path="/intrinsic-value-vs-extrinsic-value" element={<IntrinsicValueVsExtrinsicValue />} />
        <Route path="/time-decay-theta-guide" element={<TimeDecayThetaGuide />} />
        <Route path="/options-delta-explained" element={<OptionsDeltaExplained />} />
        <Route path="/options-gamma-guide" element={<OptionsGammaGuide />} />
        <Route path="/options-vega-volatility" element={<OptionsVegaVolatility />} />
        <Route path="/implied-volatility-explained" element={<ImpliedVolatilityExplained />} />
        <Route path="/how-to-read-options-chains" element={<HowToReadOptionsChains />} />
        <Route path="/options-bid-ask-spread" element={<OptionsBidAskSpread />} />
        <Route path="/what-are-options-trading-signals" element={<WhatAreOptionsTradingSignals />} />
        <Route path="/how-to-read-options-signals" element={<HowToReadOptionsSignals />} />
        <Route path="/best-options-signals-services-2026" element={<BestOptionsSignalsServices2026 />} />
        <Route path="/free-options-signals-vs-paid" element={<FreeOptionsSignalsVsPaid />} />
        <Route path="/options-discord-servers-list" element={<OptionsDiscordServersList />} />
        <Route path="/options-telegram-alerts" element={<OptionsTelegramAlerts />} />
        <Route path="/options-sms-alerts" element={<OptionsSmsAlerts />} />
        <Route path="/how-accurate-are-options-signals" element={<HowAccurateAreOptionsSignals />} />
        <Route path="/options-signals-scams-how-to-avoid" element={<OptionsSignalsScamsHowToAvoid />} />
        <Route path="/best-time-to-trade-options-signals" element={<BestTimeToTradeOptionsSignals />} />
        <Route path="/options-signals-for-beginners" element={<OptionsSignalsForBeginners />} />
        <Route path="/options-signals-risk-management" element={<OptionsSignalsRiskManagement />} />
        <Route path="/options-signals-position-sizing" element={<OptionsSignalsPositionSizing />} />
        <Route path="/options-signals-vs-stock-picks" element={<OptionsSignalsVsStockPicks />} />
        <Route path="/how-much-money-do-i-need-for-options-signals" element={<HowMuchMoneyDoINeedForOptionsSignals />} />
        <Route path="/best-brokers-for-options-trading" element={<BestBrokersForOptionsTrading />} />
        <Route path="/thinkorswim-options-trading-guide" element={<ThinkorswimOptionsTradingGuide />} />
        <Route path="/webull-options-trading" element={<WebullOptionsTrading />} />
        <Route path="/robinhood-options-trading" element={<RobinhoodOptionsTrading />} />
        <Route path="/tastyworks-options-platform" element={<TastyworksOptionsPlatform />} />
        <Route path="/interactive-brokers-options" element={<InteractiveBrokersOptions />} />
        <Route path="/etrade-options-trading" element={<EtradeOptionsTrading />} />
        <Route path="/fidelity-options-trading" element={<FidelityOptionsTrading />} />
        <Route path="/charles-schwab-options" element={<CharlesSchwabOptions />} />
        <Route path="/best-mobile-app-for-options-trading" element={<BestMobileAppForOptionsTrading />} />
        <Route path="/options-trading-commissions-comparison" element={<OptionsTradingCommissionsComparison />} />
        <Route path="/options-approval-levels-explained" element={<OptionsApprovalLevelsExplained />} />
        <Route path="/how-to-get-approved-for-options-trading" element={<HowToGetApprovedForOptionsTrading />} />
        <Route path="/pattern-day-trader-rule-options" element={<PatternDayTraderRuleOptions />} />
        <Route path="/cash-account-vs-margin-account-options" element={<CashAccountVsMarginAccountOptions />} />
        <Route path="/strategies/0dte-options-strategy" element={<Page0dteOptionsStrategyCompleteGuide />} />
        <Route path="/same-day-options-trading" element={<SameDayOptionsTrading />} />
        <Route path="/spy-0dte-strategy" element={<Spy0dteStrategy />} />
        <Route path="/qqq-0dte-trading" element={<Qqq0dteTrading />} />
        <Route path="/morning-gap-options-strategy" element={<MorningGapOptionsStrategy />} />
        <Route path="/power-hour-options-trading" element={<PowerHourOptionsTrading />} />
        <Route path="/scalping-options-guide" element={<ScalpingOptionsGuide />} />
        <Route path="/momentum-options-trading" element={<MomentumOptionsTrading />} />
        <Route path="/breakout-options-strategy" element={<BreakoutOptionsStrategy />} />
        <Route path="/reversal-options-plays" element={<ReversalOptionsPlays />} />
        <Route path="/weekly-options-swing-trading" element={<WeeklyOptionsSwingTrading />} />
        <Route path="/monthly-options-strategy" element={<MonthlyOptionsStrategy />} />
        <Route path="/earnings-options-plays" element={<EarningsOptionsPlays />} />
        <Route path="/fed-announcement-options-strategy" element={<FedAnnouncementOptionsStrategy />} />
        <Route path="/economic-data-options-trading" element={<EconomicDataOptionsTrading />} />
        <Route path="/support-resistance-options" element={<SupportResistanceOptions />} />
        <Route path="/trend-following-options-strategy" element={<TrendFollowingOptionsStrategy />} />
        <Route path="/mean-reversion-options" element={<MeanReversionOptions />} />
        <Route path="/channel-trading-options" element={<ChannelTradingOptions />} />
        <Route path="/fibonacci-options-strategy" element={<FibonacciOptionsStrategy />} />
        <Route path="/credit-spreads-strategy" element={<CreditSpreadsStrategy />} />
        <Route path="/debit-spreads-guide" element={<DebitSpreadsGuide />} />
        <Route path="/iron-condor-strategy" element={<IronCondorStrategy />} />
        <Route path="/butterfly-spread-options" element={<ButterflySpreadOptions />} />
        <Route path="/straddle-options-strategy" element={<StraddleOptionsStrategy />} />
        <Route path="/strangle-options-guide" element={<StrangleOptionsGuide />} />
        <Route path="/calendar-spread-strategy" element={<CalendarSpreadStrategy />} />
        <Route path="/ratio-spread-options" element={<RatioSpreadOptions />} />
        <Route path="/covered-call-strategy" element={<CoveredCallStrategy />} />
        <Route path="/protective-put-strategy" element={<ProtectivePutStrategy />} />
        <Route path="/signals/spy-options-signals" element={<SpyOptionsSignals />} />
        <Route path="/spy-options-trading-guide" element={<SpyOptionsTradingGuide />} />
        <Route path="/qqq-options-signals" element={<QqqOptionsSignals />} />
        <Route path="/qqq-options-trading-strategy" element={<QqqOptionsTradingStrategy />} />
        <Route path="/dia-options-trading" element={<DiaOptionsTrading />} />
        <Route path="/iwm-options-signals" element={<IwmOptionsSignals />} />
        <Route path="/vxx-volatility-options" element={<VxxVolatilityOptions />} />
        <Route path="/uvxy-options-trading" element={<UvxyOptionsTrading />} />
        <Route path="/tlt-treasury-options" element={<TltTreasuryOptions />} />
        <Route path="/gld-gold-options-signals" element={<GldGoldOptionsSignals />} />
        <Route path="/aapl-options-signals" element={<AaplOptionsSignals />} />
        <Route path="/tsla-options-trading-guide" element={<TslaOptionsTradingGuide />} />
        <Route path="/nvda-options-signals" element={<NvdaOptionsSignals />} />
        <Route path="/msft-options-strategy" element={<MsftOptionsStrategy />} />
        <Route path="/amzn-options-trading" element={<AmznOptionsTrading />} />
        <Route path="/googl-options-signals" element={<GooglOptionsSignals />} />
        <Route path="/meta-options-trading" element={<MetaOptionsTrading />} />
        <Route path="/nflx-options-strategy" element={<NflxOptionsStrategy />} />
        <Route path="/amd-options-signals" element={<AmdOptionsSignals />} />
        <Route path="/crm-options-trading" element={<CrmOptionsTrading />} />
        <Route path="/gme-options-signals" element={<GmeOptionsSignals />} />
        <Route path="/amc-options-trading" element={<AmcOptionsTrading />} />
        <Route path="/pltr-options-strategy" element={<PltrOptionsStrategy />} />
        <Route path="/sofi-options-signals" element={<SofiOptionsSignals />} />
        <Route path="/coin-options-trading" element={<CoinOptionsTrading />} />
        <Route path="/internative-traders-review" element={<InternativeTradersReview />} />
        <Route path="/internative-traders-vs-onlyoptions" element={<InternativeTradersVsOnlyoptions />} />
        <Route path="/stock-king-options-review" element={<StockKingOptionsReview />} />
        <Route path="/foolproof-options-review" element={<FoolproofOptionsReview />} />
        <Route path="/mindful-trader-review" element={<MindfulTraderReview />} />
        <Route path="/option-alpha-review" element={<OptionAlphaReview />} />
        <Route path="/profit-ly-options-review" element={<ProfitLyOptionsReview />} />
        <Route path="/benzinga-options-review" element={<BenzingaOptionsReview />} />
        <Route path="/best-options-signals-services-comparison-2026" element={<BestOptionsSignalsServicesComparison2026 />} />
        <Route path="/options-signals-pricing-comparison" element={<OptionsSignalsPricingComparison />} />
        <Route path="/discord-vs-telegram-options-alerts" element={<DiscordVsTelegramOptionsAlerts />} />
        <Route path="/options-signals-vs-trading-course" element={<OptionsSignalsVsTradingCourse />} />
        <Route path="/best-cheap-options-signals-under-100" element={<BestCheapOptionsSignalsUnder100 />} />
        <Route path="/premium-options-signals-worth-it" element={<PremiumOptionsSignalsWorthIt />} />
        <Route path="/internative-traders-alternative" element={<InternativeTradersAlternative />} />
        <Route path="/best-internative-traders-competitor" element={<BestInternativeTradersCompetitor />} />
        <Route path="/cheaper-than-stock-king-options" element={<CheaperThanStockKingOptions />} />
        <Route path="/better-win-rate-than-mindful-trader" element={<BetterWinRateThanMindfulTrader />} />
        <Route path="/most-accurate-options-signals-2026" element={<MostAccurateOptionsSignals2026 />} />
        <Route path="/options-profit-calculator" element={<OptionsProfitCalculator />} />
        <Route path="/options-breakeven-calculator" element={<OptionsBreakevenCalculator />} />
        <Route path="/tools/position-size-calculator" element={<PositionSizeCalculator />} />
        <Route path="/options-greeks-calculator" element={<OptionsGreeksCalculator />} />
        <Route path="/implied-volatility-calculator" element={<ImpliedVolatilityCalculator />} />
        <Route path="/max-pain-calculator" element={<MaxPainCalculator />} />
        <Route path="/options-spread-calculator" element={<OptionsSpreadCalculator />} />
        <Route path="/roi-calculator-options" element={<RoiCalculatorOptions />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/affiliate-program" element={<AffiliateProgram />} />
        <Route path="/referral-program" element={<ReferralProgram />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/getting-started-guide" element={<GettingStartedGuide />} />
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/best-options-trading-signals" element={<BestOptionsTradingSignals />} />

        {/* 404 Error fallback */}
        <Route path="*" element={<ComingSoon title="Page Not Found" category="Error" />} />
      </Route>
    </Routes>
  );
}

export default App;
