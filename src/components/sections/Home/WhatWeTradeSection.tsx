const WhatWeTradeSection = () => (
    <section className="py-24 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[rgb(32,109,254)] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Market Focus</p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What We <span className="text-[rgb(32,109,254)]">Trade</span></h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">OnlyOptions covers standard equity options on U.S.-listed stocks and ETFs. Below are our primary signal tickers and the expiration types we use most frequently.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                <div className="p-8 rounded-3xl bg-black border border-white/5">
                    <h4 className="text-white font-black text-lg mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(32,109,254)]" /> Our Signal Tickers
                    </h4>
                    <ul className="space-y-3">
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">SPY</span> — S&P 500 ETF</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">QQQ</span> — Nasdaq 100 ETF</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">NVDA, AAPL, TSLA</span></li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">MSFT, AMZN, GOOGL, META</span></li>
                        <li className="text-gray-500 text-sm italic">+ select high-momentum tickers</li>
                    </ul>
                </div>

                <div className="p-8 rounded-3xl bg-black border border-white/5">
                    <h4 className="text-white font-black text-lg mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(32,109,254)]" /> Signal Types
                    </h4>
                    <ul className="space-y-3">
                        <li className="text-gray-400 text-sm font-bold"><span className="text-[rgb(32,109,254)]">Call options</span> (bullish direction)</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-red-400">Put options</span> (bearish direction)</li>
                        <li className="text-gray-400 text-sm font-bold">Single-leg standard options</li>
                        <li className="text-gray-400 text-sm font-bold">Max loss always limited to premium paid</li>
                        <li className="text-gray-500 text-sm italic">Options approval Level 2 required</li>
                    </ul>
                </div>

                <div className="p-8 rounded-3xl bg-black border border-white/5">
                    <h4 className="text-white font-black text-lg mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(32,109,254)]" /> Expiration Styles
                    </h4>
                    <ul className="space-y-3">
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">0DTE</span> — same-day expiry</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">Weekly</span> — Mon/Wed/Fri expiry</li>
                        <li className="text-gray-400 text-sm font-bold"><span className="text-white">Monthly</span> — standard monthly expiry</li>
                        <li className="text-gray-400 text-sm font-bold mt-4 pt-4 border-t border-white/5 text-xs border-dashed">Signals sent 9 AM – 3:30 PM ET</li>
                        <li className="text-gray-400 text-sm font-bold text-xs">2–4 signals on most trading days</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-black uppercase tracking-widest text-gray-500">
                <a href="/spy-options-signals" className="hover:text-[rgb(32,109,254)] transition-colors">SPY options signals</a>
                <span className="hidden md:block opacity-30">|</span>
                <a href="/qqq-options-signals" className="hover:text-[rgb(32,109,254)] transition-colors">QQQ options signals</a>
                <span className="hidden md:block opacity-30">|</span>
                <a href="/0dte-options-strategy-complete-guide" className="hover:text-[rgb(32,109,254)] transition-colors">0DTE strategy guide</a>
                <span className="hidden md:block opacity-30">|</span>
                <a href="/best-brokers-for-options-trading" className="hover:text-[rgb(32,109,254)] transition-colors">Best brokers for options</a>
            </div>
        </div>
    </section>
);

export default WhatWeTradeSection;
