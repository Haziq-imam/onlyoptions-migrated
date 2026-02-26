export interface SiteRoute {
  path: string;
  title: string;
  category: string;
  priorityMonth1?: boolean;
}

export const sitemap: SiteRoute[] = [
  // 1. CORE PAGES (12 Pages)
  { path: '/', title: 'Homepage', category: 'Core', priorityMonth1: true },
  { path: '/about', title: 'About Us', category: 'Core' },
  { path: '/pricing', title: 'Pricing', category: 'Core', priorityMonth1: true },
  { path: '/performance', title: 'Performance Dashboard', category: 'Core', priorityMonth1: true },
  { path: '/how-it-works', title: 'How It Works', category: 'Core', priorityMonth1: true },
  { path: '/testimonials', title: 'Testimonials', category: 'Core' },
  { path: '/faq', title: 'FAQ', category: 'Core' },
  { path: '/contact', title: 'Contact', category: 'Core' },
  { path: '/signup', title: 'Sign Up', category: 'Core', priorityMonth1: true },
  { path: '/login', title: 'Login', category: 'Core' },
  { path: '/blog', title: 'Blog', category: 'Core' },
  { path: '/free-trial', title: 'Free Trial', category: 'Core' },

  // 2. EDUCATIONAL CONTENT (45 Pages)
  // Options Basics
  { path: '/options-trading-101', title: 'Options Trading 101', category: 'Educational', priorityMonth1: true },
  { path: '/what-are-call-options', title: 'What Are Call Options', category: 'Educational' },
  { path: '/what-are-put-options', title: 'What Are Put Options', category: 'Educational' },
  { path: '/options-expiration-dates-explained', title: 'Options Expiration Dates Explained', category: 'Educational' },
  { path: '/strike-price-guide', title: 'Strike Price Guide', category: 'Educational' },
  { path: '/in-the-money-vs-out-of-the-money', title: 'In The Money vs Out Of The Money', category: 'Educational' },
  { path: '/options-premium-explained', title: 'Options Premium Explained', category: 'Educational' },
  { path: '/intrinsic-value-vs-extrinsic-value', title: 'Intrinsic Value vs Extrinsic Value', category: 'Educational' },
  { path: '/time-decay-theta-guide', title: 'Time Decay (Theta) Guide', category: 'Educational' },
  { path: '/options-delta-explained', title: 'Options Delta Explained', category: 'Educational' },
  { path: '/options-gamma-guide', title: 'Options Gamma Guide', category: 'Educational' },
  { path: '/options-vega-volatility', title: 'Options Vega (Volatility)', category: 'Educational' },
  { path: '/implied-volatility-explained', title: 'Implied Volatility Explained', category: 'Educational' },
  { path: '/how-to-read-options-chains', title: 'How to Read Options Chains', category: 'Educational' },
  { path: '/options-bid-ask-spread', title: 'Options Bid-Ask Spread', category: 'Educational' },

  // Options Signals & Alerts
  { path: '/what-are-options-trading-signals', title: 'What Are Options Trading Signals', category: 'Educational', priorityMonth1: true },
  { path: '/how-to-read-options-signals', title: 'How to Read Options Signals', category: 'Educational', priorityMonth1: true },
  { path: '/best-options-signals-services-2026', title: 'Best Options Signals Services 2026', category: 'Educational' },
  { path: '/free-options-signals-vs-paid', title: 'Free Options Signals vs Paid', category: 'Educational', priorityMonth1: true },
  { path: '/options-discord-servers-list', title: 'Options Discord Servers List', category: 'Educational', priorityMonth1: true },
  { path: '/options-telegram-alerts', title: 'Options Telegram Alerts', category: 'Educational' },
  { path: '/options-sms-alerts', title: 'Options SMS Alerts', category: 'Educational' },
  { path: '/how-accurate-are-options-signals', title: 'How Accurate Are Options Signals', category: 'Educational' },
  { path: '/options-signals-scams-how-to-avoid', title: 'Options Signals Scams & How To Avoid Them', category: 'Educational', priorityMonth1: true },
  { path: '/best-time-to-trade-options-signals', title: 'Best Time to Trade Options Signals', category: 'Educational' },
  { path: '/options-signals-for-beginners', title: 'Options Signals for Beginners', category: 'Educational', priorityMonth1: true },
  { path: '/options-signals-risk-management', title: 'Options Signals Risk Management', category: 'Educational' },
  { path: '/options-signals-position-sizing', title: 'Options Signals Position Sizing', category: 'Educational' },
  { path: '/options-signals-vs-stock-picks', title: 'Options Signals vs Stock Picks', category: 'Educational' },
  { path: '/how-much-money-do-i-need-for-options-signals', title: 'How Much Money Do I Need for Options Signals?', category: 'Educational', priorityMonth1: true },

  // Trading Platforms & Brokers
  { path: '/best-brokers-for-options-trading', title: 'Best Brokers for Options Trading', category: 'Educational', priorityMonth1: true },
  { path: '/thinkorswim-options-trading-guide', title: 'Thinkorswim Options Trading Guide', category: 'Educational' },
  { path: '/webull-options-trading', title: 'Webull Options Trading', category: 'Educational' },
  { path: '/robinhood-options-trading', title: 'Robinhood Options Trading', category: 'Educational' },
  { path: '/tastyworks-options-platform', title: 'Tastyworks Options Platform', category: 'Educational' },
  { path: '/interactive-brokers-options', title: 'Interactive Brokers Options', category: 'Educational' },
  { path: '/etrade-options-trading', title: 'E*TRADE Options Trading', category: 'Educational' },
  { path: '/fidelity-options-trading', title: 'Fidelity Options Trading', category: 'Educational' },
  { path: '/charles-schwab-options', title: 'Charles Schwab Options', category: 'Educational' },
  { path: '/best-mobile-app-for-options-trading', title: 'Best Mobile App for Options Trading', category: 'Educational' },
  { path: '/options-trading-commissions-comparison', title: 'Options Trading Commissions Comparison', category: 'Educational' },
  { path: '/options-approval-levels-explained', title: 'Options Approval Levels Explained', category: 'Educational' },
  { path: '/how-to-get-approved-for-options-trading', title: 'How to Get Approved for Options Trading', category: 'Educational' },
  { path: '/pattern-day-trader-rule-options', title: 'Pattern Day Trader Rule (PDT) for Options', category: 'Educational' },
  { path: '/cash-account-vs-margin-account-options', title: 'Cash Account vs Margin Account for Options', category: 'Educational' },

  // 3. STRATEGY GUIDES (30 Pages)
  // Day Trading
  { path: '/0dte-options-strategy-complete-guide', title: '0DTE Options Strategy Complete Guide', category: 'Strategy', priorityMonth1: true },
  { path: '/same-day-options-trading', title: 'Same Day Options Trading', category: 'Strategy' },
  { path: '/spy-0dte-strategy', title: 'SPY 0DTE Strategy', category: 'Strategy' },
  { path: '/qqq-0dte-trading', title: 'QQQ 0DTE Trading', category: 'Strategy' },
  { path: '/morning-gap-options-strategy', title: 'Morning Gap Options Strategy', category: 'Strategy' },
  { path: '/power-hour-options-trading', title: 'Power Hour Options Trading', category: 'Strategy' },
  { path: '/scalping-options-guide', title: 'Scalping Options Guide', category: 'Strategy' },
  { path: '/momentum-options-trading', title: 'Momentum Options Trading', category: 'Strategy' },
  { path: '/breakout-options-strategy', title: 'Breakout Options Strategy', category: 'Strategy' },
  { path: '/reversal-options-plays', title: 'Reversal Options Plays', category: 'Strategy' },

  // Swing Trading
  { path: '/weekly-options-swing-trading', title: 'Weekly Options Swing Trading', category: 'Strategy', priorityMonth1: true },
  { path: '/monthly-options-strategy', title: 'Monthly Options Strategy', category: 'Strategy' },
  { path: '/earnings-options-plays', title: 'Earnings Options Plays', category: 'Strategy', priorityMonth1: true },
  { path: '/fed-announcement-options-strategy', title: 'Fed Announcement Options Strategy', category: 'Strategy' },
  { path: '/economic-data-options-trading', title: 'Economic Data Options Trading', category: 'Strategy' },
  { path: '/support-resistance-options', title: 'Support & Resistance Options', category: 'Strategy' },
  { path: '/trend-following-options-strategy', title: 'Trend Following Options Strategy', category: 'Strategy' },
  { path: '/mean-reversion-options', title: 'Mean Reversion Options', category: 'Strategy' },
  { path: '/channel-trading-options', title: 'Channel Trading Options', category: 'Strategy' },
  { path: '/fibonacci-options-strategy', title: 'Fibonacci Options Strategy', category: 'Strategy' },

  // Advanced Strategies
  { path: '/credit-spreads-strategy', title: 'Credit Spreads Strategy', category: 'Strategy', priorityMonth1: true },
  { path: '/debit-spreads-guide', title: 'Debit Spreads Guide', category: 'Strategy' },
  { path: '/iron-condor-strategy', title: 'Iron Condor Strategy', category: 'Strategy' },
  { path: '/butterfly-spread-options', title: 'Butterfly Spread Options', category: 'Strategy' },
  { path: '/straddle-options-strategy', title: 'Straddle Options Strategy', category: 'Strategy' },
  { path: '/strangle-options-guide', title: 'Strangle Options Guide', category: 'Strategy' },
  { path: '/calendar-spread-strategy', title: 'Calendar Spread Strategy', category: 'Strategy' },
  { path: '/ratio-spread-options', title: 'Ratio Spread Options', category: 'Strategy' },
  { path: '/covered-call-strategy', title: 'Covered Call Strategy', category: 'Strategy' },
  { path: '/protective-put-strategy', title: 'Protective Put Strategy', category: 'Strategy' },

  // 4. STOCK-SPECIFIC PAGES (25 Pages)
  // Indices & ETFs
  { path: '/spy-options-signals', title: 'SPY Options Signals', category: 'Stock-Specific', priorityMonth1: true },
  { path: '/spy-options-trading-guide', title: 'SPY Options Trading Guide', category: 'Stock-Specific' },
  { path: '/qqq-options-signals', title: 'QQQ Options Signals', category: 'Stock-Specific', priorityMonth1: true },
  { path: '/qqq-options-trading-strategy', title: 'QQQ Options Trading Strategy', category: 'Stock-Specific' },
  { path: '/dia-options-trading', title: 'DIA Options Trading', category: 'Stock-Specific' },
  { path: '/iwm-options-signals', title: 'IWM Options Signals', category: 'Stock-Specific' },
  { path: '/vxx-volatility-options', title: 'VXX Volatility Options', category: 'Stock-Specific' },
  { path: '/uvxy-options-trading', title: 'UVXY Options Trading', category: 'Stock-Specific' },
  { path: '/tlt-treasury-options', title: 'TLT Treasury Options', category: 'Stock-Specific' },
  { path: '/gld-gold-options-signals', title: 'GLD Gold Options Signals', category: 'Stock-Specific' },

  // Mega Cap Tech
  { path: '/aapl-options-signals', title: 'AAPL Options Signals', category: 'Stock-Specific' },
  { path: '/tsla-options-trading-guide', title: 'TSLA Options Trading Guide', category: 'Stock-Specific', priorityMonth1: true },
  { path: '/nvda-options-signals', title: 'NVDA Options Signals', category: 'Stock-Specific', priorityMonth1: true },
  { path: '/msft-options-strategy', title: 'MSFT Options Strategy', category: 'Stock-Specific' },
  { path: '/amzn-options-trading', title: 'AMZN Options Trading', category: 'Stock-Specific' },
  { path: '/googl-options-signals', title: 'GOOGL Options Signals', category: 'Stock-Specific' },
  { path: '/meta-options-trading', title: 'META Options Trading', category: 'Stock-Specific' },
  { path: '/nflx-options-strategy', title: 'NFLX Options Strategy', category: 'Stock-Specific' },
  { path: '/amd-options-signals', title: 'AMD Options Signals', category: 'Stock-Specific' },
  { path: '/crm-options-trading', title: 'CRM Options Trading', category: 'Stock-Specific' },

  // Popular Meme & Volatile
  { path: '/gme-options-signals', title: 'GME Options Signals', category: 'Stock-Specific' },
  { path: '/amc-options-trading', title: 'AMC Options Trading', category: 'Stock-Specific' },
  { path: '/pltr-options-strategy', title: 'PLTR Options Strategy', category: 'Stock-Specific' },
  { path: '/sofi-options-signals', title: 'SOFI Options Signals', category: 'Stock-Specific' },
  { path: '/coin-options-trading', title: 'COIN Options Trading', category: 'Stock-Specific' },

  // 5. COMPARISON & REVIEW PAGES (20 Pages)
  { path: '/internative-traders-review', title: 'InterNative Traders Review', category: 'Comparison', priorityMonth1: true },
  { path: '/internative-traders-vs-onlyoptions', title: 'InterNative Traders vs OnlyOptions', category: 'Comparison', priorityMonth1: true },
  { path: '/stock-king-options-review', title: 'Stock King Options Review', category: 'Comparison' },
  { path: '/foolproof-options-review', title: 'Foolproof Options Review', category: 'Comparison' },
  { path: '/mindful-trader-review', title: 'Mindful Trader Review', category: 'Comparison' },
  { path: '/option-alpha-review', title: 'Option Alpha Review', category: 'Comparison' },
  { path: '/profit-ly-options-review', title: 'Profit.ly Options Review', category: 'Comparison' },
  { path: '/benzinga-options-review', title: 'Benzinga Options Review', category: 'Comparison' },
  { path: '/best-options-signals-services-comparison-2026', title: 'Best Options Signals Services Comparison 2026', category: 'Comparison', priorityMonth1: true },
  { path: '/options-signals-pricing-comparison', title: 'Options Signals Pricing Comparison', category: 'Comparison' },
  { path: '/discord-vs-telegram-options-alerts', title: 'Discord vs Telegram Options Alerts', category: 'Comparison' },
  { path: '/options-signals-vs-trading-course', title: 'Options Signals vs Trading Course', category: 'Comparison' },
  { path: '/best-cheap-options-signals-under-100', title: 'Best Cheap Options Signals Under $100', category: 'Comparison' },
  { path: '/premium-options-signals-worth-it', title: 'Are Premium Options Signals Worth It?', category: 'Comparison' },
  { path: '/internative-traders-alternative', title: 'InterNative Traders Alternative', category: 'Comparison' },
  { path: '/best-internative-traders-competitor', title: 'Best InterNative Traders Competitor', category: 'Comparison' },
  { path: '/cheaper-than-stock-king-options', title: 'Cheaper than Stock King Options', category: 'Comparison' },
  { path: '/better-win-rate-than-mindful-trader', title: 'Better Win Rate than Mindful Trader', category: 'Comparison' },
  { path: '/most-accurate-options-signals-2026', title: 'Most Accurate Options Signals 2026', category: 'Comparison' },

  // 6. TOOLS & CALCULATORS (8 Pages)
  { path: '/options-profit-calculator', title: 'Options Profit Calculator', category: 'Tools', priorityMonth1: true },
  { path: '/options-breakeven-calculator', title: 'Options Breakeven Calculator', category: 'Tools' },
  { path: '/position-size-calculator', title: 'Position Size Calculator', category: 'Tools', priorityMonth1: true },
  { path: '/options-greeks-calculator', title: 'Options Greeks Calculator', category: 'Tools' },
  { path: '/implied-volatility-calculator', title: 'Implied Volatility Calculator', category: 'Tools' },
  { path: '/max-pain-calculator', title: 'Max Pain Calculator', category: 'Tools' },
  { path: '/options-spread-calculator', title: 'Options Spread Calculator', category: 'Tools' },
  { path: '/roi-calculator-options', title: 'ROI Calculator Options', category: 'Tools' },

  // 7. LEGAL & SUPPORT PAGES (10 Pages)
  { path: '/terms-of-service', title: 'Terms of Service', category: 'Legal' },
  { path: '/privacy-policy', title: 'Privacy Policy', category: 'Legal' },
  { path: '/risk-disclaimer', title: 'Risk Disclaimer', category: 'Legal' },
  { path: '/refund-policy', title: 'Refund Policy', category: 'Legal' },
  { path: '/affiliate-program', title: 'Affiliate Program', category: 'Legal' },
  { path: '/referral-program', title: 'Referral Program', category: 'Legal' },
  { path: '/help-center', title: 'Help Center', category: 'Legal' },
  { path: '/getting-started-guide', title: 'Getting Started Guide', category: 'Legal' },
  { path: '/account-management', title: 'Account Management', category: 'Legal' },
  { path: '/sitemap', title: 'Sitemap', category: 'Legal' },
  
  // Custom SEO extra catching page
  { path: '/best-options-trading-signals', title: 'Best Options Trading Signals', category: 'Educational', priorityMonth1: true }
];
