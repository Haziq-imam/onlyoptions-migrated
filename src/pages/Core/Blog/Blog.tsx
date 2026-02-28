import HeroSection from '../../../components/ui/Hero/HeroSection';
import { Card } from '../../../components/ui/Card/Card';
import { Calendar, User, ArrowRight } from 'lucide-react';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import mockupImg from '../../../assets/pages images/Mobile Trading Signals App-5.png';

const Blog = () => {
  const posts = [
    {
      title: "How to Master 0DTE Options Trading in 2026",
      excerpt: "Zero Days to Expiration options are the fastest growing segment of the market. Learn our proprietary strategy for consistent gains.",
      date: "Feb 24, 2026",
      author: "Alex Vortex",
      category: "Strategy",
      link: "/0dte-options-strategy-complete-guide"
    },
    {
      title: "The Importance of Delta Neutral Trading",
      excerpt: "Why staying delta neutral can protect your portfolio during extreme market volatility and sudden gap-downs.",
      date: "Feb 22, 2026",
      author: "Marcus Chen",
      category: "Education",
      link: "/blog/importance-of-delta-neutral-trading"
    },
    {
      title: "Top 5 Mistakes Beginner Options Traders Make",
      excerpt: "Avoid these common pitfalls that wipe out 90% of retail trading accounts in their first three months.",
      date: "Feb 18, 2026",
      author: "Sarah Thompson",
      category: "Beginners",
      link: "/options-signals-for-beginners"
    },
    {
      title: "Understanding Implied Volatility (IV) Crush",
      excerpt: "Trading through earnings can be lucrative, but IV crush is the silent killer. Here is how to navigate it safely.",
      date: "Feb 15, 2026",
      author: "Alex Vortex",
      category: "Advanced",
      link: "/blog/understanding-iv-crush"
    },
    {
      title: "Why Discord is the Best Platform for Trading Alerts",
      excerpt: "Comparing Telegram, SMS, and Discord for high-frequency trading alerts. Why low latency matters most.",
      date: "Feb 10, 2026",
      author: "OnlyOptions Team",
      category: "Tools",
      link: "/options-discord-servers-list"
    },
    {
      title: "SPY vs QQQ: Which ETF is Best for Day Trading?",
      excerpt: "A deep dive comparison of liquidity, spread, and ADR for the two most popular indices in the world.",
      date: "Feb 05, 2026",
      author: "Marcus Chen",
      category: "Market Analysis",
      link: "/spy-options-signals"
    }
  ];

  return (
    <div className="bg-black">
      <HeroSection
        title={<>Market Insights & <br /><span className="text-brand-500">Education</span></>}
        subtitle="Stay ahead of the curve with our latest analysis, strategy deep-dives, and community announcements."
        primaryCtaText="Subscribe to Newsletter"
        primaryCtaLink="/signup"
        image={mockupImg}
        badgeText="The Journal"
      />

      <StandardSection variant="institutional" dotGrid spacing="lg" divider="bottom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <a href={post.link} key={index} className="group">
                <Card variant="glass" className="h-full flex flex-col border-white/5 p-8 transition-all hover:bg-white/[0.04]">
                  <div className="flex-1">
                    <div className="text-[10px] font-black text-brand-500 uppercase tracking-widest mb-6 inline-block bg-brand-500/5 px-4 py-1.5 rounded-full border border-brand-500/10">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 leading-tight group-hover:text-brand-400 transition-colors uppercase tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-medium">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-6 text-[10px] text-gray-600 font-black uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-brand-500/40" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3 text-brand-500/40" />
                        {post.author}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-black transition-all border border-white/5">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:bg-white/10 hover:text-white transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </StandardSection>

      <StandardCTA
        title="Get These Insights via Live Alerts"
        subtitle="Join our Discord and stop reading old news—trade the live price action with our team."
      />
    </div>
  );
};

export default Blog;
