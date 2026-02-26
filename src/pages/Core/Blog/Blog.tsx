import HeroSection from '../../../components/sections/Hero/HeroSection';
import CTASection from '../../../components/sections/CTA/CTASection';
import { Card, CardTitle, CardContent } from '../../../components/ui/Card/Card';
import { Calendar, User, ArrowRight } from 'lucide-react';

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
    <div className="pb-20">
      <HeroSection
        title="Market Insights & Education"
        subtitle="Stay ahead of the curve with our latest analysis, strategy deep-dives, and community announcements."
        primaryCtaText="Subscribe to Newsletter"
        primaryCtaLink="/signup"
      />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <a href={post.link} key={index} className="group">
                <Card className="h-full flex flex-col border-brand-800/10 hover:border-brand-500/30 transition-all hover:bg-white/[0.02]">
                  <div className="flex-1">
                    <div className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-4 inline-block bg-brand-500/10 px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                    <CardTitle className="text-2xl mb-4 leading-tight group-hover:text-brand-300 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardContent className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardContent>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-gray-950 transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-white/10 rounded-full text-gray-400 font-bold hover:bg-white/5 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="Get These Insights via Live Alerts"
        subtitle="Join our Discord and stop reading old news—trade the live price action with our team."
        primaryCtaText="Start Free Trial"
        primaryCtaLink="/signup"
      />
    </div>
  );
};

export default Blog;
