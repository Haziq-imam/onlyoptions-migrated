import HeroSection from '../../../components/sections/Hero/HeroSection';
import CTASection from '../../../components/sections/CTA/CTASection';
import { Card, CardTitle, CardContent } from '../../../components/ui/Card/Card';
import { CheckCircle2, Bell, TrendingUp, Info } from 'lucide-react';

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
    <div>
      <HeroSection
        title="Predictable Profits, Simple Process"
        subtitle="We've streamlined options trading into a three-step process designed for consistency and risk management."
        primaryCtaText="Start Free Trial"
        primaryCtaLink="/signup"
      />

      <section className="py-20 px-6 md:px-12 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group border-brand-800/20">
                <div className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-brand-500/10 transition-colors">
                  {step.number}
                </div>
                <div className="mb-6">{step.icon}</div>
                <CardTitle className="mb-4 text-2xl">{step.title}</CardTitle>
                <CardContent className="text-gray-400 leading-relaxed">
                  {step.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-brand-900/10 border border-brand-500/20 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400">
              <Info className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Signal Format Explained</h2>
          </div>

          <div className="bg-gray-950/50 rounded-2xl p-6 border border-white/5 font-mono text-sm md:text-base leading-relaxed">
            <div className="flex flex-col gap-3">
              <p><span className="text-brand-400 font-bold">Ticker:</span> SPY (S&P 500 ETF)</p>
              <p><span className="text-brand-400 font-bold">Type:</span> CALL / PUT</p>
              <p><span className="text-brand-400 font-bold">Strike:</span> $450</p>
              <p><span className="text-brand-400 font-bold">Expiry:</span> 0DTE (Same Day) or Weekly</p>
              <hr className="border-white/5 my-2" />
              <p><span className="text-teal-400 font-bold">Entry:</span> $1.20 - $1.40</p>
              <p><span className="text-red-400 font-bold">Stop-Loss:</span> $0.80 (-30%)</p>
              <p><span className="text-green-400 font-bold">Targets:</span> $1.80, $2.50, $4.00+</p>
            </div>
          </div>

          <p className="mt-8 text-gray-400 italic">
            *Every signal includes real-time updates on when to scale out or close the position completely.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to Scale Your Portfolio?"
        subtitle="Join the Discord and start receiving high-probability signals today."
        primaryCtaText="Join Now"
        primaryCtaLink="/signup"
        secondaryCtaText="View Performance"
        secondaryCtaLink="/performance"
      />
    </div>
  );
};

export default HowItWorks;
