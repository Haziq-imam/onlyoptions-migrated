import HeroSection from '../../../components/sections/Hero/HeroSection';
import FeatureGrid from '../../../components/sections/Features/FeatureGrid';
import CTASection from '../../../components/sections/CTA/CTASection';
import { Card } from '../../../components/ui/Card/Card';
import { Target, Users, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Transparency First",
      description: "We post every single trade result, win or loss. Our mission is to build trust through unedited, live performance data.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Options-Only Focus",
      description: "By specializing exclusively in options, we provide deep expertise that multi-asset services simply can't match.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Community Driven",
      description: "OnlyOptions is more than a signal service; it's a thriving hub for collective learning and wealth creation.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="pb-20">
      <HeroSection
        title="Our Mission: Empower Retail Traders"
        subtitle="OnlyOptions was built to bridge the gap between Wall Street's institutions and everyday retail traders using institutional-grade strategies."
        primaryCtaText="Join Our Mission"
        primaryCtaLink="/signup"
      />

      <section className="py-20 px-6 md:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Why We Focus <span className="text-brand-400 underline decoration-brand-500/30 underline-offset-8">Only on Options</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                In a world of diluted trading services offering crypto, forex, and stocks, we chose to master one thing: <span className="text-white font-semibold">The Options Market.</span>
              </p>
              <p>
                Options offer unique leverage and asymmetric risk-reward profiles that are inaccessible in standard equity trading. By specializing, we can identify volatility patterns and institutional order flows that others miss.
              </p>
              <div className="pt-4 flex items-center gap-4 text-white font-bold">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                  <Zap className="w-6 h-6" />
                </div>
                Mastering one market beats being average in ten.
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-8 border-brand-800/10">
              <p className="text-4xl font-bold text-brand-400 mb-2">5,000+</p>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold leading-none">Active Members</p>
            </Card>
            <Card className="p-8 border-brand-800/10">
              <p className="text-4xl font-bold text-teal-400 mb-2">74%</p>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold leading-none">Historical Win Rate</p>
            </Card>
            <Card className="p-8 border-brand-800/10 sm:col-span-2">
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold leading-none">Real-Time Global Monitoring</p>
            </Card>
          </div>
        </div>
      </section>

      <FeatureGrid
        heading="Our Core Values"
        subheading="How we maintain our status as the #1 ranked options alert community in 2026."
        features={values}
      />

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">The Trading Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-brand-800/10 group">
              <div className="w-24 h-24 rounded-2xl bg-brand-500/10 mx-auto mb-6 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <p className="text-xl font-bold mb-2">Alex "Vortex" R.</p>
              <p className="text-brand-400 text-sm font-semibold mb-4 uppercase tracking-widest">Head Strategist (0DTE)</p>
              <p className="text-gray-400 text-sm">12 years institutional trading experience. Ex-Chicago Board Options Exchange (CBOE) floor trader.</p>
            </Card>
            <Card className="p-8 border-brand-800/10 group">
              <div className="w-24 h-24 rounded-2xl bg-teal-500/10 mx-auto mb-6 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <p className="text-xl font-bold mb-2">Sarah Thompson</p>
              <p className="text-teal-400 text-sm font-semibold mb-4 uppercase tracking-widest">Macro & Swing Specialist</p>
              <p className="text-gray-400 text-sm">Macro-economic analyst specializing in weekly and monthly directional options setups.</p>
            </Card>
            <Card className="p-8 border-brand-800/10 group">
              <div className="w-24 h-24 rounded-2xl bg-blue-500/10 mx-auto mb-6 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <p className="text-xl font-bold mb-2">Marcus Chen</p>
              <p className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-widest">Quantitative Risk Lead</p>
              <p className="text-gray-400 text-sm">Masters in Financial Engineering. Architect of our proprietary probability algorithms.</p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Difference"
        subtitle="Start your 7-day free trial today and trade with the pro team."
        primaryCtaText="Join Today"
        primaryCtaLink="/signup"
      />
    </div>
  );
};

export default About;
