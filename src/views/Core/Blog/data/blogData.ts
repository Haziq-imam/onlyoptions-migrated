export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    link: string;
    readTime: string;
    image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: "How to Master 0DTE Options Trading in 2026",
        excerpt: "Zero Days to Expiration options are the fastest growing segment of the market. Learn our proprietary strategy for consistent gains.",
        date: "Feb 24, 2026",
        author: "Alex Vortex",
        category: "Strategy",
        link: "/0dte-options-strategy-complete-guide",
        readTime: "8 min"
    },
    {
        title: "The Importance of Delta Neutral Trading",
        excerpt: "Why staying delta neutral can protect your portfolio during extreme market volatility and sudden gap-downs.",
        date: "Feb 22, 2026",
        author: "Marcus Chen",
        category: "Education",
        link: "/blog/importance-of-delta-neutral-trading",
        readTime: "6 min"
    },
    {
        title: "Top 5 Mistakes Beginner Options Traders Make",
        excerpt: "Avoid these common pitfalls that wipe out 90% of retail trading accounts in their first three months.",
        date: "Feb 18, 2026",
        author: "Sarah Thompson",
        category: "Beginners",
        link: "/options-signals-for-beginners",
        readTime: "5 min"
    },
    {
        title: "Understanding Implied Volatility (IV) Crush",
        excerpt: "Trading through earnings can be lucrative, but IV crush is the silent killer. Here is how to navigate it safely.",
        date: "Feb 15, 2026",
        author: "Alex Vortex",
        category: "Advanced",
        link: "/blog/understanding-iv-crush",
        readTime: "10 min"
    },
    {
        title: "Why Discord is the Best Platform for Trading Alerts",
        excerpt: "Comparing Telegram, SMS, and Discord for high-frequency trading alerts. Why low latency matters most.",
        date: "Feb 10, 2026",
        author: "OnlyOptions Team",
        category: "Tools",
        link: "/options-discord-servers-list",
        readTime: "4 min"
    },
    {
        title: "SPY vs QQQ: Which ETF is Best for Day Trading?",
        excerpt: "A deep dive comparison of liquidity, spread, and ADR for the two most popular indices in the world.",
        date: "Feb 05, 2026",
        author: "Marcus Chen",
        category: "Market Analysis",
        link: "/spy-options-signals",
        readTime: "7 min"
    }
];

export const allCategories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
