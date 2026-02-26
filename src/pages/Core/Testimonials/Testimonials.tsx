import HeroSection from '../../../components/sections/Hero/HeroSection';
import CTASection from '../../../components/sections/CTA/CTASection';
import { Card, CardContent } from '../../../components/ui/Card/Card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Jordan K.",
      role: "Part-time Trader",
      text: "I've been in dozen of Discord groups, but OnlyOptions is the only one that actually shows you HOW to trade, not just what to buy. My win rate has jumped from 45% to nearly 70% in two months.",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Full-time Professional",
      text: "The 0DTE alerts are insane. They catch the momentum almost perfectly every time. I hit my first 4-figure trade last week thanks to Vortex's technical levels.",
      rating: 5
    },
    {
      name: "David L.",
      role: "SaaS Founder / Investor",
      text: "Transparency is rare in this industry. OnlyOptions posts every loss as clearly as every win. That's why I'm an annual subscriber.",
      rating: 5
    },
    {
      name: "Elena P.",
      role: "Beginner Trader",
      text: "The education library alone is worth the price. I went from not knowing what a 'delta' was to executing complex spreads with confidence. Highly recommended.",
      rating: 5
    },
    {
      name: "Marcus T.",
      role: "Swing Trader",
      text: "I prefer the weekly swings over the day trades. The entry and exit points are always super clear, making it easy to trade while working my day job.",
      rating: 5
    },
    {
      name: "Robert S.",
      role: "Retired Veteran",
      text: "Clean, professional, and consistent. No hype, just data-driven signals. The community is also very welcoming and helpful.",
      rating: 5
    }
  ];

  return (
    <div className="pb-20">
      <HeroSection
        title="What Our Members are Saying"
        subtitle="Join 5,000+ traders who have elevated their game. Read real reviews from our thriving global community."
        primaryCtaText="Join the Community"
        primaryCtaLink="/signup"
      />

      <section className="py-20 px-6 md:px-12 bg-[var(--color-base-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 border-brand-800/10 flex flex-col relative group">
                <div className="absolute top-4 right-6 opacity-10 group-hover:scale-110 transition-transform">
                  <Quote className="w-10 h-10 text-brand-400" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                <CardContent className="flex-1 italic text-gray-300 mb-8 leading-relaxed">
                  "{review.text}"
                </CardContent>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center font-bold text-brand-400 text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-white leading-none mb-1">{review.name}</h5>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">Voted #1 Signals Group on Discord</h2>
          <p className="text-gray-400 text-lg mb-12">
            We've been ranked as a top education and signal provider for three years running. Our community is built on mutual success and data-driven discipline.
          </p>
          <div className="flex items-center justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Mock partner logos or badges */}
            <div className="font-black text-2xl tracking-tighter">TRUSTPILOT</div>
            <div className="font-black text-2xl tracking-tighter italic">FINVIZ</div>
            <div className="font-black text-2xl tracking-tighter uppercase">Discord</div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Write Your Success Story?"
        subtitle="Start your 7-day free trial today and get immediate access to the signals."
        primaryCtaText="Claim Free Trial"
        primaryCtaLink="/signup"
      />
    </div>
  );
};

export default Testimonials;
