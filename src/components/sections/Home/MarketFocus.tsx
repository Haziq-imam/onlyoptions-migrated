import { Globe, Zap, Shield } from 'lucide-react';
import StandardSection from '../../ui/Layout/StandardSection';
import SectionHeader from '../../ui/Layout/SectionHeader';

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
        <StandardSection className="py-32">
            <SectionHeader
                label="Coverage"
                title={<>What We <span className="text-brand-500">Trade</span></>}
                description="Focusing exclusively on high-liquidity U.S. Equities and ETFs."
                align="center"
                className="mb-16"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Tickers Grid */}
                <div className="lg:col-span-2">
                    <h4 className="text-sm font-black uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                        <Globe className="w-5 h-5 text-brand-400" />
                        Primary Signal Tickers
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {tickers.map((ticker, i) => (
                            <a
                                key={i}
                                href={ticker.link}
                                className="p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.05] transition-all group"
                            >
                                <p className="text-2xl font-black text-white group-hover:text-brand-400 leading-none mb-2">{ticker.name}</p>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{ticker.type}</p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Meta Info */}
                <div className="space-y-12">
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-white mb-6 flex items-center gap-3">
                            <Zap className="w-5 h-5 text-brand-400" />
                            Signal Types
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Call options", sub: "(bullish)" },
                                { label: "Put options", sub: "(bearish)" },
                                { label: "Single-leg standard options", sub: "" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                    <span>{item.label} <span className="text-gray-600 text-xs">{item.sub}</span></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-white mb-6 flex items-center gap-3">
                            <Shield className="w-5 h-5 text-brand-400" />
                            Expiration Styles
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                <a href="/0dte-options-strategy-complete-guide" className="hover:text-brand-400 underline decoration-white/10 underline-offset-4 transition-colors">0DTE (Same-Day)</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                <span>Weekly & Monthly Expiries</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                <span>Signals 9 AM – 3:30 PM ET</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-widest text-gray-500">
                <a href="/best-brokers-for-options-trading" className="hover:text-brand-400 transition-colors">Best Brokers for Options</a>
                <a href="/options-trading-101" className="hover:text-brand-400 transition-colors">Options Trading 101</a>
            </div>
        </StandardSection>
    );
};

export default MarketFocus;
