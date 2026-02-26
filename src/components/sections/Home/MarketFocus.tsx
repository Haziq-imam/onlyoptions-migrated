import { Globe, Zap, Shield } from 'lucide-react';

const tickers = [
    { name: "SPY", type: "S&P 500 ETF", link: "/spy-options-signals" },
    { name: "QQQ", type: "Nasdaq 100 ETF", link: "/qqq-options-signals" },
    { name: "NVDA", type: "Nvidia", link: "/nvda-options-signals" },
    { name: "AAPL", type: "Apple", link: "/aapl-options-signals" },
    { name: "TSLA", type: "Tesla", link: "/tsla-options-trading-guide" },
    { name: "MSFT", type: "Microsoft", link: "/msft-options-strategy" },
    { name: "AMZN", type: "Amazon", link: "/amzn-options-trading" },
    { name: "GOOGL", type: "Google", link: "/googl-options-signals" },
    { name: "META", type: "Meta", link: "/meta-options-trading" }
];

const MarketFocus = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-gray-950/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4 tracking-tight">What We Trade</h2>
                    <p className="text-gray-400 text-lg">Focusing exclusively on high-liquidity U.S. Equities and ETFs.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Tickers Grid */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <Globe className="w-6 h-6 text-brand-400" />
                            Primary Signal Tickers
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {tickers.map((ticker, i) => (
                                <a
                                    key={i}
                                    href={ticker.link}
                                    className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.08] transition-all group"
                                >
                                    <p className="text-2xl font-black text-white group-hover:text-brand-400 leading-none mb-1">{ticker.name}</p>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{ticker.type}</p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-brand-400" />
                                Signal Types
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                    <span>Call options <span className="text-gray-600">(bullish)</span></span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                    <span>Put options <span className="text-gray-600">(bearish)</span></span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                    <span>Single-leg standard options</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Shield className="w-6 h-6 text-brand-400" />
                                Expiration Styles
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                    <a href="/0dte-options-strategy-complete-guide" className="hover:text-brand-400 underline decoration-white/10 underline-offset-4 transition-colors">0DTE (Same-Day)</a>
                                </li>
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                    <span>Weekly & Monthly Expiries</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                    <span>Signals 9 AM – 3:30 PM ET</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
                    <a href="/best-brokers-for-options-trading" className="hover:text-brand-400 transition-colors">Best Brokers for Options</a>
                    <a href="/options-trading-101" className="hover:text-brand-400 transition-colors">Options Trading 101</a>
                </div>
            </div>
        </section>
    );
};

export default MarketFocus;
