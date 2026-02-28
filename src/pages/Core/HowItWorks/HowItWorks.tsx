import HeroSection from '../../../components/ui/Hero/HeroSection';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Card } from '../../../components/ui/Card/Card';
import { CheckCircle2, Bell, TrendingUp, Info } from 'lucide-react';
import appMockup from '../../../assets/pages images/Mobile Trading Signals App-12.png';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Subscribe and Join",
      description: "Choose your plan and get instant access to our private Discord community. The setup takes less than 2 minutes.",
      icon: <CheckCircle2 className="w-8 h-8 text-brand-400" />
    },
    {
      number: "02",
      title: "Receive Real-Time Alerts",
      description: "Get precise options signals delivered directly to your device via Discord and Pro Plan SMS alerts.",
      icon: <Bell className="w-8 h-8 text-brand-400" />
    },
    {
      number: "03",
      title: "Execute Your Trades",
      description: "Follow our clear entry points, strike prices, and exit targets to execute trades in your preferred broker.",
      icon: <TrendingUp className="w-8 h-8 text-brand-400" />
    }
  ];

  return (
    <div className="bg-black">
      <HeroSection
        title={<>Predictable Profits, <br /><span className="text-brand-500">Simple Process</span></>}
        subtitle="We've streamlined options trading into a three-step process designed for consistency and risk management."
        primaryCtaText="Start Free Trial"
        primaryCtaLink="/signup"
        image={appMockup}
        badgeText="The Workflow"
      />

      <StandardSection variant="institutional" dotGrid spacing="lg" divider="bottom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} variant="glass" className="relative overflow-hidden group border-white/5 p-8">
                <div className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-brand-500/10 transition-colors">
                  {step.number}
                </div>
                <div className="mb-8">{step.icon}</div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </StandardSection>

      <StandardSection spacing="lg" divider="bottom">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionHeader
            title="Signal Format Explained"
            description="Every alert we send contains these 8 critical data points to ensure you trade with confidence."
            align="center"
          />

          <Card variant="glass" className="p-8 md:p-12 border-brand-500/20 bg-brand-500/5 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Ticker</span>
                  <span className="text-white font-black">SPY (S&P 500 ETF)</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Type</span>
                  <span className="text-brand-500 font-black">CALL / PUT</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Strike</span>
                  <span className="text-white font-black">$450</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Expiry</span>
                  <span className="text-white font-black text-right">0DTE (Same Day) <br /> <span className="text-[10px] text-gray-500">or Weekly</span></span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Entry Range</span>
                  <span className="text-teal-400 font-black">$1.20 - $1.40</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Stop-Loss</span>
                  <span className="text-red-400 font-black">$0.80 (-30%)</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Targets</span>
                  <span className="text-green-400 font-black">$1.80, $2.50, $4.0+</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Rationale</span>
                  <span className="text-white font-black italic text-xs">Technical Analysis</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-4 text-gray-500 italic text-xs">
              <Info className="w-4 h-4 text-brand-500 shrink-0" />
              Every signal includes real-time updates on when to scale out or close the position completely.
            </div>
          </Card>
        </div>
      </StandardSection>

      <StandardCTA
        title="Ready to Scale Your Portfolio?"
        subtitle="Join the Discord community today and stop trading in the dark."
      />
    </div>
  );
};

export default HowItWorks;
