import HeroSection from '../../../components/sections/Hero/HeroSection';
import PricingSection from '../../../components/sections/Pricing/PricingSection';

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
    </div>
  );
};

export default Pricing;
