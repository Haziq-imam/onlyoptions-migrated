import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';

const WhatWeTradeSection = () => (
    <StandardSection variant="institutional" dotGrid divider="top" spacing="lg">
        <div className="max-w-7xl mx-auto">
            <SectionHeader
                label="Market Focus"
                title={<>What We <span className="text-brand-500">Trade</span></>}
                description="OnlyOptions covers standard equity options on U.S.-listed stocks and ETFs. Below are our primary signal tickers and the expiration types we use most frequently."
                align="center"
                className="mb-20"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                    <h4 className="text-white font-black text-lg mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500" /> Tickers
                    </h4>
                    <ul className="space-y-3">
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">SPY</span> — S&P 500 ETF</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">QQQ</span> — Nasdaq 100 ETF</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">NVDA, AAPL, TSLA</span></li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">MSFT, AMZN, META</span></li>
                        <li className="text-gray-500 text-sm italic">+ high-momentum tickers</li>
                    </ul>
                </Card>

                <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                    <h4 className="text-white font-black text-lg mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500" /> Options
                    </h4>
                    <ul className="space-y-3">
                        <li className="text-gray-400 text-sm font-bold"><span className="text-brand-400">Call options</span> (bullish)</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-red-400">Put options</span> (bearish)</li>
                        <li className="text-gray-400 text-sm font-bold">Single-leg standard options</li>
                        <li className="text-gray-400 text-sm font-bold">Max loss limited to premium</li>
                        <li className="text-gray-500 text-sm italic">Options Level 2 required</li>
                    </ul>
                </Card>

                <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                    <h4 className="text-white font-black text-lg mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500" /> Strategy
                    </h4>
                    <ul className="space-y-3">
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">0DTE</span> — same-day expiry</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">Weekly</span> — Mon/Wed/Fri</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">Monthly</span> — standard expiry</li>
                        <li className="text-gray-400 text-sm font-bold mt-4 pt-4 border-t border-white/5 text-xs border-dashed">Signals: 9 AM – 3:30 PM ET</li>
                        <li className="text-gray-400 text-sm font-bold text-xs">2–4 signals per trading day</li>
                    </ul>
                </Card>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-12">
                <a href="/spy-options-signals" className="hover:text-brand-500 transition-colors">SPY signals</a>
                <span className="hidden md:block opacity-30">|</span>
                <a href="/qqq-options-signals" className="hover:text-brand-500 transition-colors">QQQ signals</a>
                <span className="hidden md:block opacity-30">|</span>
                <a href="/0dte-options-strategy-complete-guide" className="hover:text-brand-500 transition-colors">0DTE guide</a>
                <span className="hidden md:block opacity-30">|</span>
                <a href="/best-brokers-for-options-trading" className="hover:text-brand-500 transition-colors">Best brokers</a>
            </div>
        </div>
    </StandardSection>
);

export default WhatWeTradeSection;
