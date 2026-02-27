import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '../../../components/ui/Card/Card';
import Button from '../../../components/ui/Button/Button';
import { Check, X, ShieldCheck, Zap, BarChart3, Target, ChevronDown, ChevronUp } from 'lucide-react';
import AppStoreButtons from '../../../components/ui/AppStoreButtons/AppStoreButtons';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/Table/Table';

// Asset Imports (Unique to this page)
import signalMockup from '../../../assets/pages images/signal-looklike.png';
import appMockup from '../../../assets/pages images/Mobile Trading Signals App-12.png';
import analyticsMockup from '../../../assets/pages images/Analytics.png';
import brandingImg from '../../../assets/pages images/Modern Lotto and Stocks App.png';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card variant="glass" className="overflow-hidden border-white/5 transition-all duration-300">
      <button
        className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-black text-white flex items-center gap-3">
          <span className="text-brand-500/50 text-[10px] tracking-tighter">Q.</span>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      <div
        className={`px-8 text-gray-400 text-sm leading-relaxed transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="ml-7 border-l border-white/5 pl-6 whitespace-pre-line">
          {answer}
        </div>
      </div>
    </Card>
  );
};

const About = () => {
  const faqData = [
    {
      q: "Who runs OnlyOptions.us?",
      a: "OnlyOptions.us is operated by a team of professional options traders with over 30 years of combined experience across institutional finance and independent trading. Our analysts have backgrounds in equity derivatives trading at major financial institutions, quantitative analysis, and documented personal options trading. We do not publicly list individual team member names — the service is evaluated on the performance record and methodology, both of which are fully public on our Performance Dashboard and How It Works page."
    },
    {
      q: "When was OnlyOptions founded?",
      a: "OnlyOptions.us was founded in January 2023. We launched with a beta group of 50 traders and have been operating continuously since. Our full signal history is published from our first month of operation. As of February 2026, we have published results from 1,847 closed signals across 38 months of operation."
    },
    {
      q: "How is the OnlyOptions win rate calculated and verified?",
      a: "Our 70.3% win rate is calculated from 1,847 closed signals published between January 2023 and February 2026. A signal is counted as a win when it is closed at or above the entry price — whether at the profit target or via an early exit above breakeven. A signal is counted as a loss when it is closed at the stop-loss level or below. We use mid-prices (midpoint of bid and ask) at signal entry and exit times. Every result is published on the Performance Dashboard with dates, tickers, strike prices, entry prices, exit prices, and percentage returns. We do not remove or reclassify results."
    },
    {
      q: "Do the OnlyOptions analysts trade their own signals?",
      a: "Yes. Our analysts trade their own personal capital using the same signals they send to subscribers. All signals are transmitted simultaneously — analysts do not receive signals in advance of subscribers. This is a voluntary practice we adopted because we believe signal providers should have personal financial stake in the quality of their recommendations. We disclose this practice publicly as part of our commitment to transparency."
    },
    {
      q: "Why does OnlyOptions only cover options and not stocks?",
      a: "We cover options exclusively because that is where our team's expertise is deepest and most verifiable. Options are a precise enough instrument that signal quality — the specific strike, expiration date, entry range, stop-loss, and exit timing — meaningfully affects outcomes in ways that a vague directional call cannot. Expanding into stocks, ETF long positions, or other asset classes would require different expertise and would dilute the quality of what we do well. We built OnlyOptions to be the best options signal service, not the broadest signal service."
    },
    {
      q: "Is OnlyOptions a registered investment adviser?",
      a: "No. OnlyOptions LLC is not registered as an investment adviser under the Investment Advisers Act of 1940 with the SEC or any state securities regulator. Our service is educational in nature. Signals represent the professional analytical opinions of our team and are not personalized investment advice tailored to your individual circumstances. We do not manage client funds, hold client assets, or execute trades on your behalf. All trading decisions are made independently by each subscriber. See our full Risk Disclaimer for complete disclosures."
    },
    {
      q: "How can I verify OnlyOptions performance claims?",
      a: "Every closed signal we have ever sent is published on the Performance Dashboard. You can view the complete trade history — dates, tickers, option types, strike prices, expiration dates, entry prices, exit prices, and percentage returns — before subscribing. The data is available to the public. We also publish monthly and annual performance summaries with totals. Our Performance Dashboard is not locked behind a paywall — visit onlyoptions.us/performance to review our complete record."
    },
    {
      q: "What makes OnlyOptions different from other signal services?",
      a: "Three things separate us from most signal services. First, complete performance transparency — we publish every signal result including losses, with time-stamps and full trade details. Most services either do not publish results or publish only winning trades. Second, complete signal format — every signal includes 10 fields: ticker, type, strike, expiry, entry range, target, stop-loss, risk/reward ratio, confidence rating, and written rationale. You never receive a vague alert without the information to execute it. Third, exit alerts — we notify you when every position should be closed, which most signal services do not do."
    },
    {
      q: "How do I contact OnlyOptions?",
      a: "For account and billing questions, email support@onlyoptions.us. For questions about signals or market analysis, email analysts@onlyoptions.us. Our support team responds within 24 hours on business days. Pro plan subscribers receive priority support with a 1-hour response window during market hours (9:00 AM to 4:30 PM ET, Monday through Friday)."
    },
    {
      q: "What happens if I am not satisfied with the service?",
      a: "New subscribers receive a 7-day money-back guarantee on their first payment. If you subscribe and are not satisfied within 7 days of your first charge, contact support@onlyoptions.us for a full refund — no questions asked. The 7-day free trial (no credit card required) also gives you complete access to the service before any payment is made, so you can evaluate the signal quality and format before committing to a subscription."
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OnlyOptions",
    "url": "https://onlyoptions.us",
    "foundingDate": "2023",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "3-5" },
    "description": "Options trading signal service. 70.3% win rate. 1,847 verified signals. iOS and Android app.",
    "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "support@onlyoptions.us" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="bg-black min-h-screen text-gray-200 font-sans selection:bg-brand-500/30">
      <Helmet>
        <title>About OnlyOptions | The Options Signal Service Built by Traders, for Traders</title>
        <meta name="description" content="Learn who built OnlyOptions.us, why we built it, and how our signal methodology works. Professional options traders with 30+ years combined experience. Verified 70.3% win rate across 1,847 signals." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <StandardSection className="pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader
              label="Our Mission"
              title={<>Built by Options Traders, <br /> <span className="text-brand-500">for Options Traders</span></>}
              description="OnlyOptions.us is a professional options trading signal service founded in 2023. Our team of experienced options traders sends 2–4 fully detailed signals every market day through the iOS and Android app. Every signal includes the complete trade parameters: ticker, option type, strike, expiry, entry range, target, stop-loss, and written rationale."
            />
            <p className="text-gray-500 text-sm max-w-xl mb-10 leading-relaxed italic">
              This page explains who we are, why we built this service, what our methodology looks like, and what we stand for as a company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/free-trial" variant="primary" className="px-8 h-14 rounded-2xl font-black text-sm">
                Start 7-Day Free Trial
              </Button>
              <AppStoreButtons variant="glass" />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-10 bg-brand-500/5 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative p-2 group-hover:-translate-y-1 transition-transform duration-700 max-w-lg ml-auto">
              <img src={brandingImg} alt="OnlyOptions Interface" className="w-full h-auto max-h-[450px] object-contain rounded-[24px] opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </StandardSection>

      {/* Quick Stats Bar (Non-Sticky) */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left text-white/80">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">70.3% Win Rate</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <Target className="w-5 h-5 text-brand-400 shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">Options Only</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <BarChart3 className="w-5 h-5 text-brand-400 shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">Full Transparency</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <Zap className="w-5 h-5 text-brand-400 shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">$60/Month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <StandardSection className="py-32">
        <div className="max-w-4xl">
          <SectionHeader
            label="Our Story"
            title="Why We Built OnlyOptions"
            description="OnlyOptions was founded after years of frustration with what options signal services were offering. The same problems appeared everywhere: win rates with no methodology behind them, signal formats that left out critical information, no exit alerts, and performance records that only showed winning trades."
          />
          <div className="space-y-8 mt-12">
            <p className="text-gray-400 leading-relaxed">
              Our founders—a group of professional options traders with backgrounds in institutional finance and independent trading—agreed on what a proper signal service had to look like before they would trust it with real money. They built OnlyOptions to those standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Complete transparency", desc: "Every signal result published, wins and losses, with dates, prices, and percentage returns. No selective reporting. No deleted losses." },
                { title: "Actionable precision", desc: "Every signal includes ticker, option type, strike, expiry, entry range, target, stop-loss, and written rationale. Execute within 60 seconds." },
                { title: "Options only", desc: "A focused service built exclusively for options traders. No dilution into other asset classes like stocks, futures, or crypto." }
              ].map((p, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-brand-500 font-black text-xs uppercase tracking-widest">{i + 1}. {p.title}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm font-medium pt-8 border-t border-white/5">
              OnlyOptions launched in January 2023 with a beta group of 50 traders. As of early 2026, over 1,200 traders receive our signals daily through the OnlyOptions platform.
            </p>
          </div>
        </div>
      </StandardSection>

      {/* Who We Are */}
      <StandardSection className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card variant="institutional" className="relative p-0 overflow-hidden border-white/5 bg-gray-950/40">
              <div className="p-10">
                <h3 className="text-2xl font-black text-white mb-8 border-b border-white/5 pb-6">About Our Team</h3>
                <div className="space-y-6">
                  {[
                    { label: "Experience", value: "30+ years institutional & independent trading" },
                    { label: "Background", value: "Ex-institutional analysts in equity derivatives" },
                    { label: "Independent", value: "Experienced traders with documented personal track records" },
                    { label: "Review Process", value: "Multi-analyst peer review for every signal" },
                    { label: "Skin in the game", value: "Analysts trade personal capital simultaneously" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center gap-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-400 shrink-0">{row.label}</span>
                      <span className="text-gray-300 text-xs text-right font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 px-10 pb-10">
                <div className="relative group/analytics">
                  <div className="absolute -inset-4 bg-brand-500/10 blur-2xl rounded-full opacity-0 group-hover/analytics:opacity-100 transition-opacity duration-700" />
                  <img
                    src={analyticsMockup}
                    alt="Data Analysis"
                    className="relative w-full h-auto max-h-[320px] object-contain drop-shadow-2xl transition-transform duration-700 group-hover/analytics:scale-[1.02]"
                  />
                </div>
              </div>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              label="Professional Standards"
              title="Who We Are"
              description="OnlyOptions is run by a small, focused team of professional options traders. We do not publicly list individual names — the service is the product, not the personalities behind it."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold text-sm mb-2">Institutional Rooted</h4>
                <p className="text-gray-500 text-xs">Combining hedge fund precision with retail execution speed.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold text-sm mb-2">Independent Mentality</h4>
                <p className="text-gray-500 text-xs">Analysts who have successfully traded their own capital for years.</p>
              </div>
            </div>
          </div>
        </div>
      </StandardSection>

      {/* What We Cover */}
      <StandardSection className="py-32" containerSize="6xl">
        <SectionHeader
          label="Focus"
          title={<>What <span className="text-brand-500">We Cover</span></>}
          description="OnlyOptions is an options-only service. We believe that focus produces better results than breadth. Our analytical process is built exclusively around standard equity options on U.S.-listed stocks and ETFs."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="glass" className="p-10 border-green-500/10 hover:border-green-500/30">
            <h4 className="text-green-500 font-black uppercase tracking-widest text-[10px] mb-8 flex items-center gap-2">
              <Check className="w-4 h-4" /> What We Signal
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Call & Put options",
                "SPY, QQQ, NVDA, AAPL",
                "TSLA, MSFT, AMZN, META",
                "High-liquidity U.S. equities",
                "0DTE, Weekly & Monthly",
                "2–4 signals per market day"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-gray-200">
                  <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card variant="glass" className="p-10 border-red-500/10 hover:border-red-500/30">
            <h4 className="text-red-500 font-black uppercase tracking-widest text-[10px] mb-8 flex items-center gap-2">
              <X className="w-4 h-4" /> What We Do Not Signal
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Stock buy/sell alerts",
                "ETF long-term positions",
                "Multi-leg spreads or condors",
                "Penny stocks",
                "Futures, Forex, or Crypto",
                "Options on international markets"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-gray-500 italic">
                  <div className="w-1 h-1 rounded-full bg-red-500/30 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </StandardSection>

      {/* Methodology Section */}
      <StandardSection className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-12">
            <SectionHeader
              label="The Logic"
              title="Signal Methodology"
              description="Every signal we send follows a rigorous analytical protocol. We do not send signals based on social media trends, unverified patterns, or gut instinct."
            />
            <div className="space-y-4">
              {[
                { tag: "Market Regime", title: "Regime Analysis", desc: "Assessing overall market conditions: SPY/QQQ trend, VIX levels, and breadth indicators to determine daily aggression." },
                { tag: "Volatility", title: "Assessment", desc: "Analyzing implied volatility relative to historical levels to ensure option pricing is favorable for the setup." },
                { tag: "Technical", title: "Trigger Strategy", desc: "Breakout levels, support/resistance, and momentum setups with a minimum 2:1 risk-to-reward ratio requirements." },
                { tag: "Selection", title: "Option Parameter", desc: "Selecting contracts based on delta, premium cost, liquidity, and time value appropriate for the hold period." },
                { tag: "Verification", title: "Dual-Analyst Review", desc: "Every setup is independently evaluated by a second analyst. If there is material disagreement, the signal is not sent." },
                { tag: "Monitoring", title: "Transmission & Alerts", desc: "Immediate app transmission and continuous monitoring with dedicated exit alerts for every single position." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20">
                    <Zap className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm mb-1">{i + 1}. {item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center lg:text-left">
              <a href="/how-it-works" className="text-brand-500 font-black uppercase text-[10px] tracking-widest hover:text-brand-400 flex items-center gap-2">
                Full step-by-step signal guide <Zap className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-10 bg-brand-500/5 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative p-2 group-hover:-translate-y-1 transition-transform duration-700 max-w-lg mx-auto">
              <img src={signalMockup} alt="Signal Protocol Illustration" className="w-full h-auto max-h-[400px] object-contain rounded-xl opacity-90 drop-shadow-2xl" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-400 mb-2">Protocol Verified</p>
                <p className="text-white text-xs leading-relaxed">Systematic analysis ensuring every entry has a mathematical edge.</p>
              </div>
            </div>
          </div>
        </div>
      </StandardSection>

      {/* Transparency Snapshot */}
      <StandardSection className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="relative group max-w-lg">
            <div className="absolute inset-0 bg-brand-500/5 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
            <img src={appMockup} alt="Transparency Dashboard" className="relative w-full h-auto max-h-[450px] object-contain opacity-80 group-hover:scale-105 transition-all duration-1000 drop-shadow-2xl" />
          </div>
          <div className="space-y-10">
            <SectionHeader
              label="Values"
              title="Transparency Commitment"
              description="Transparency is more important than the win rate number itself, because the win rate is only meaningful if you can verify it."
            />
            <div className="space-y-5">
              <div className="flex flex-col gap-4">
                <h5 className="text-green-500 font-black text-[10px] uppercase tracking-widest">What We Do</h5>
                <ul className="space-y-3">
                  {[
                    "Publish every closed signal — wins and losses",
                    "Time-stamp every signal at moment of transmission",
                    "Show full performance record from launch",
                    "Include rationale & exit alerts for every trade",
                    "Disclose analyst personal staking"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-gray-300 font-medium">
                      <Check className="w-4 h-4 text-green-500 shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 rounded-[40px] bg-red-500/[0.02] border border-red-500/10">
            <h5 className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-8">What We Never Do</h5>
            <ul className="space-y-5">
              {[
                "Delete or modify losing trade records",
                "Report backtested results as live results",
                "Selective reporting or hiding poor months",
                "Guarantee future profits or risk-free trading",
                "Signals without documented analytical rationale",
                "Advance analyst access before subscribers"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-gray-500 italic">
                  <X className="w-4 h-4 text-red-500/50 shrink-0 mt-0.5" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </StandardSection>

      {/* Performance Record Table */}
      <StandardSection className="py-32" containerSize="4xl">
        <SectionHeader
          label="Transparency"
          title="Verified Performance Record"
          description="All performance data is calculated from our live signal history, published in full on the Performance Dashboard. The numbers below represent our complete record since launch."
          align="center"
        />
        <Card variant="institutional" className="mt-16 border-white/5 bg-gray-950/40">
          <Table>
            <TableHeader>
              <TableRow className="bg-white/5">
                <TableHead>Period</TableHead>
                <TableHead>Signals</TableHead>
                <TableHead>Win Rate</TableHead>
                <TableHead>Avg Winner</TableHead>
                <TableHead>Avg Loser</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { p: "2023 (Full Year)", s: "612", w: "68.1%", win: "+79%", loss: "-32%" },
                { p: "2024 (Full Year)", s: "731", w: "71.4%", win: "+89%", loss: "-31%" },
                { p: "2025 (Full Year)", s: "392", w: "70.9%", win: "+91%", loss: "-29%" },
                { p: "2026 (Jan–Feb)", s: "112", w: "72.3%", win: "+94%", loss: "-28%" },
              ].map((row, i) => (
                <TableRow key={i} className="hover:bg-white/[0.02]">
                  <TableCell label="Period" className="text-white">{row.p}</TableCell>
                  <TableCell label="Signals" className="text-gray-400">{row.s}</TableCell>
                  <TableCell label="Win Rate" className="text-brand-400 font-black">{row.w}</TableCell>
                  <TableCell label="Avg Winner" className="text-green-400">{row.win}</TableCell>
                  <TableCell label="Avg Loser" className="text-red-500">{row.loss}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-brand-500/5 font-black border-none">
                <TableCell label="Period" className="text-white uppercase tracking-widest text-[10px]">All-Time Total</TableCell>
                <TableCell label="Signals" className="text-white">1,847</TableCell>
                <TableCell label="Win Rate" className="text-brand-500 text-sm">70.3%</TableCell>
                <TableCell label="Avg Winner" className="text-green-400">+87%</TableCell>
                <TableCell label="Avg Loser" className="text-red-500">-30%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <p className="mt-8 text-[10px] text-gray-600 uppercase text-center font-bold tracking-widest leading-relaxed">
          Win rate calculated from mid-prices at signal entry and exit. Past performance does not guarantee future results.
          <br /><a href="/performance" className="text-brand-500/60 hover:text-brand-500 underline underline-offset-4 mt-2 inline-block">View Full Record Dashboard</a>
        </p>
      </StandardSection>

      {/* Disclosures & Accountability */}
      <StandardSection className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" /> Important Disclosures
            </h4>
            <div className="space-y-4 text-[13px] text-gray-500 leading-relaxed">
              <p>OnlyOptions LLC is an educational options signal service. We are not registered investment advisers, broker-dealers, or financial planners under any U.S. federal or state regulatory framework.</p>
              <p>Our signals represent the analytical opinions of our team based on technical and quantitative analysis. They are not personalized investment advice tailored to your individual financial situation.</p>
              <p>Options trading involves substantial risk of loss. You can lose some or all of your invested capital. Never trade with money you cannot afford to lose.</p>
              <a href="/risk-disclaimer" className="text-brand-500 font-bold hover:underline inline-block">Read full Risk Disclaimer →</a>
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <Target className="w-4 h-4 text-brand-500" /> Accountability Standards
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">We hold ourselves to standards beyond what is legally required. Here is what we commit to if our performance ever deviates from our standard:</p>
            <div className="space-y-4">
              {[
                { trigger: "Rolling 90-day win rate drops below 60%", commit: "We will notify all subscribers, pause new signals for internal review, and offer pro-rated credits upon request." },
                { trigger: "Service goes offline for >24 hours", commit: "Clear email communication and automatic account extensions for all affected subscribers." },
                { trigger: "Signal data error (Ticker/Strike/Expiry)", commit: "Immediate app correction alert and documentation in Performance Dashboard notes." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border-l-2 border-brand-500/20">
                  <div className="text-white font-bold text-xs mb-2">{item.trigger}</div>
                  <p className="text-gray-500 text-xs">{item.commit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StandardSection>

      {/* FAQ Section */}
      <StandardSection className="py-32" containerSize="4xl">
        <SectionHeader
          label="Support"
          title="About Us FAQ"
          description="Common questions about our background and standards."
          align="center"
        />
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <FaqItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </StandardSection>

      {/* Final CTA */}
      <StandardCTA />
    </div>
  );
};

export default About;
