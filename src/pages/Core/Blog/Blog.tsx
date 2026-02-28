import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';

import BlogHero from './sections/BlogHero';
import CategoryFilter from './sections/CategoryFilter';
import BlogGrid from './sections/BlogGrid';
import { blogPosts } from './data/blogData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const schemaBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "OnlyOptions Market Insights",
    "description": "Daily options trading analysis, 0DTE strategies, and market education from OnlyOptions analysts.",
    "url": "https://onlyoptions.us/blog",
    "publisher": {
      "@type": "Organization",
      "name": "OnlyOptions.us"
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Helmet>
        <title>Options Trading Blog | Market Insights & Strategies | OnlyOptions.us</title>
        <meta name="description" content="Stay ahead of the market with OnlyOptions.us blog. Featuring 0DTE strategy guides, market analysis, and professional options trading education from our FINRA-licensed team." />
        <script type="application/ld+json">{JSON.stringify(schemaBlog)}</script>
      </Helmet>

      <BlogHero />

      <StandardSection variant="institutional" dotGrid spacing="lg" divider="bottom">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <BlogGrid posts={filteredPosts} />

          {filteredPosts.length > 5 && (
            <div className="mt-24 text-center">
              <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:bg-brand-500 hover:text-black hover:border-brand-500 transition-all duration-300 shadow-xl hover:shadow-brand-500/20">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </StandardSection>

      <StandardCTA
        title="Get These Insights via Live Alerts"
        subtitle="Join our Discord and stop reading old news—trade the live price action with our professional team of analysts."
        buttonText="Join Discord Now"
      />

      <div className="bg-black pb-24 text-center">
        <div className="flex justify-center flex-wrap gap-8 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
          <span>1,200+ Active Readers</span>
          <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
          <span>Daily Analysis</span>
          <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
          <span>Proven Strategies</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
