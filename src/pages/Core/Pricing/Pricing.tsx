import HeroSection from '../../../components/sections/Hero/HeroSection';
import PricingSection from '../../../components/sections/Pricing/PricingSection';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/Table/Table';

const Pricing = () => {
  const tiers = [
    {
      name: "Basic Plan",
      price: "$60",
      period: "month",
      description: "Perfect for beginners starting their options journey.",
      features: [
        "2-4 Daily Signals",
        "Discord Access",
        "Basic Video Library",
        "Weekly Watchlist"
      ],
      ctaUrl: "/signup?plan=basic"
    },
    {
      name: "Pro Plan",
      price: "$99",
      period: "month",
      description: "Everything you need for serious options trading.",
      isPopular: true,
      features: [
        "All Basic Features",
        "Instant SMS Alerts",
        "Priority 1-on-1 Support",
        "Advanced Strategy Guides",
        "Live Trading Voice Channels"
      ],
      ctaUrl: "/signup?plan=pro"
    },
    {
      name: "Annual Pro",
      price: "$600",
      period: "year",
      description: "Save $588 per year with our annual commitment.",
      features: [
        "All Pro Features",
        "Save 50% vs Monthly",
        "Exclusive Annual Webinars",
        "1-on-1 Portfolio Review",
        "Early Access to New Tools"
      ],
      ctaUrl: "/signup?plan=annual"
    }
  ];

  return (
    <div>
      <HeroSection
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your trading style. All plans include a 7-day money-back guarantee."
        primaryCtaText="Start Free Trial"
        primaryCtaLink="/signup"
      />

      <PricingSection
        heading="Unlock Elite Options Trading"
        subheading="Join thousands of traders who have transformed their portfolios with our signals."
        tiers={tiers}
      />

      <section className="py-24 px-6 md:px-12 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>
          <Table className="bg-gray-900/50 border border-brand-800/20 rounded-2xl overflow-hidden">
            <TableHeader>
              <TableRow className="bg-white/5">
                <TableHead>Features</TableHead>
                <TableHead>OnlyOptions Pro</TableHead>
                <TableHead>Competitor A</TableHead>
                <TableHead>Competitor B</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { f: "Options Focus", o: "100% Dedicated", a: "Diluted", b: "Mixed" },
                { f: "Verified P&L Log", o: "Public & Updated Daily", a: "Hidden/Cherry-picked", b: "None" },
                { f: "SMS Alerts", o: "Included (Under 1s delay)", a: "Upcharge", b: "No" },
                { f: "Avg Monthly Cost", o: "$99", a: "$149+", b: "$50-$60" }
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell label="Feature" className="text-gray-400 font-medium md:text-white">{row.f}</TableCell>
                  <TableCell label="OnlyOptions" className="text-green-400 font-bold">{row.o}</TableCell>
                  <TableCell label="Competitor A" className="text-red-500/80 md:text-gray-500">{row.a}</TableCell>
                  <TableCell label="Competitor B" className="text-gray-500">{row.b}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
