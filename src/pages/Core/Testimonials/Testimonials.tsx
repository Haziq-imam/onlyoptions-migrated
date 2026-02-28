import HeroSection from '../../../components/ui/Hero/HeroSection';
import { Card, CardContent } from '../../../components/ui/Card/Card';
import { Star, Quote } from 'lucide-react';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import mockupImg from '../../../assets/pages images/Mobile Trading Signals App-13.png';

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
    <div className="bg-black">
      <HeroSection
        title={<>Real Stories from <br /><span className="text-brand-500">Real Traders</span></>}
        subtitle="Join 1,247+ members who have elevated their game. Read real reviews from our thriving global community."
        primaryCtaText="Join Community"
        primaryCtaLink="/signup"
        image={mockupImg}
        badgeText="Wall of Fame"
      />

      <StandardSection variant="institutional" dotGrid spacing="lg" divider="bottom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} variant="glass" className="p-10 border-white/5 flex flex-col relative group">
                <div className="absolute top-4 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-12 h-12 text-brand-400" />
                </div>
                <div className="flex gap-1.5 mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                <CardContent className="flex-1 italic text-gray-400 text-sm leading-relaxed mb-10 p-0">
                  "{review.text}"
                </CardContent>
                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center font-black text-brand-500 text-sm border border-brand-500/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-black text-white text-sm uppercase tracking-tight mb-1">{review.name}</h5>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </StandardSection>

      <StandardSection spacing="lg" divider="bottom">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <SectionHeader
            title="Voted #1 Signal Provider"
            description="We've been ranked as a top education and signal provider for three years running."
          />
          <div className="flex flex-wrap items-center justify-center gap-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="font-black text-3xl tracking-tighter">TRUSTPILOT</div>
            <div className="font-black text-3xl tracking-tighter italic">FINVIZ</div>
            <div className="font-black text-3xl tracking-tighter uppercase">Discord</div>
          </div>
        </div>
      </StandardSection>

      <StandardCTA
        title="Ready to Write Your Success Story?"
        subtitle="Join 1,247+ professional traders receiving live alerts every market day."
      />
    </div>
  );
};

export default Testimonials;
