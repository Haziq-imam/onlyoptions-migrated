import React, { useState, useEffect } from 'react';
import StandardSection from '../../components/ui/Layout/StandardSection';
import SectionHeader from '../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../components/ui/CTA/StandardCTA';
import { FiShield, FiClock, FiFileText, FiChevronRight, FiAlertTriangle, FiZap, FiInfo } from 'react-icons/fi';

const sections = [
    { id: 'introduction', title: 'Introduction', num: '00' },
    { id: 'general-risks', title: 'General Options Risks', num: '01' },
    { id: 'signal-risks', title: 'Signals & Analysis Risks', num: '02' },
    { id: '0dte-risks', title: '0DTE Specific Risks', num: '03' },
    { id: 'hypothetical', title: 'Hypothetical Performance', num: '04' },
    { id: 'market-risks', title: 'General Market Risks', num: '05' },
    { id: 'responsibilities', title: 'Your Responsibilities', num: '06' },
    { id: 'liability', title: 'Limitation of Liability', num: '07' },
    { id: 'regulatory', title: 'Regulatory Disclaimers', num: '08' },
    { id: 'forward-looking', title: 'Forward-Looking Statements', num: '09' },
    { id: 'acknowledgment', title: 'Acknowledgment', num: '10' },
    { id: 'contact', title: 'Contact Information', num: '11' },
];

const RiskDisclaimer: React.FC = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-black min-h-screen relative overflow-visible text-white font-sans selection:bg-brand-500/30">
            {/* Background Glow Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-20 z-10" />
            <div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-brand-500/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />

            <StandardSection variant="transparent" dotGrid spacing="lg" className="pt-40 !overflow-visible relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-[10px] font-black uppercase tracking-widest mb-6">
                            <FiAlertTriangle className="w-3 h-3" />
                            Substantial Risk Warning · Read Carefully
                        </div>
                        <SectionHeader
                            title={<>Risk <span className="text-brand-500">Disclaimer</span></>}
                            description="Updated February 2026"
                            align="left"
                        />

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                    <FiClock />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Effective Date</p>
                                    <p className="text-sm font-bold text-white">Feb 17, 2026</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                    <FiClock />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Last Updated</p>
                                    <p className="text-sm font-bold text-white">Feb 17, 2026</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                    <FiFileText />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Document Type</p>
                                    <p className="text-sm font-bold text-white">Risk Warning</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sticky Sidebar Navigation */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <div className="sticky top-32 space-y-2">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-6">Table of Contents</p>
                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-4 py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-between group ${activeSection === section.id
                                                ? 'bg-brand-500/10 text-brand-500 border border-brand-500/20'
                                                : 'text-gray-500 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={`text-[9px] font-black opacity-40 ${activeSection === section.id ? 'text-brand-500' : ''}`}>
                                                    {section.num === '00' ? '' : section.num}
                                                </span>
                                                {section.title}
                                            </span>
                                            <FiChevronRight className={`w-3 h-3 transition-transform ${activeSection === section.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="lg:col-span-9 space-y-24 pb-40">
                            {/* INTRODUCTION */}
                            <section id="introduction" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">Introduction</h2>
                                </div>
                                <div className="prose prose-invert prose-brand max-w-none text-gray-400 space-y-6 leading-relaxed">
                                    <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 text-red-500">
                                            <FiAlertTriangle className="w-12 h-12" />
                                        </div>
                                        <div className="space-y-4 relative z-10">
                                            <p className="text-xs font-black text-red-500 uppercase tracking-widest">Important Risk Warning</p>
                                            <p className="text-xl font-black text-white leading-tight uppercase">
                                                OPTIONS TRADING INVOLVES SUBSTANTIAL RISK OF LOSS AND IS NOT SUITABLE FOR ALL INVESTORS. YOU CAN LOSE SOME OR ALL OF YOUR INVESTED CAPITAL. NEVER TRADE WITH MONEY YOU CANNOT AFFORD TO LOSE.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mt-8">
                                        This Risk Disclaimer ("Disclaimer") applies to all users of OnlyOptions.us ("we," "us," "our," or "OnlyOptions"). By accessing our website, subscribing to our Service, or using any information, signals, or analysis we provide, you acknowledge and accept the risks outlined in this Disclaimer.
                                    </p>
                                </div>
                            </section>

                            {/* 1. GENERAL OPTIONS TRADING RISKS */}
                            <section id="general-risks" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">1. General Options Trading Risks</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">Speculative Nature</p>
                                        <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">OPTIONS TRADING IS SPECULATIVE AND INVOLVES A HIGH DEGREE OF RISK.</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            Options are complex financial instruments that derive their value from underlying securities. Options trading involves risks that are different from and potentially greater than trading stocks, bonds, or other traditional investments.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20">
                                            <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-4">1.1 Risk of Total Loss</p>
                                            <p className="text-sm text-white font-black mb-4 uppercase">YOU CAN LOSE 100% OF YOUR INVESTMENT IN OPTIONS TRADING.</p>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                Unlike stocks, which can recover over time, options have expiration dates. If an option expires out-of-the-money, it becomes worthless and you lose the entire premium paid.
                                            </p>
                                            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5">
                                                <p className="text-[10px] font-black text-brand-500 uppercase mb-2">Real Example:</p>
                                                <p className="text-[10px] text-gray-500 italic">You buy a SPY $600 call for $300. SPY closes at $598 at expiration. Your option expires worthless. Total loss: $300 (100%).</p>
                                            </div>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                                            <p className="text-xs font-black text-brand-500 uppercase tracking-widest">1.2 Leverage Magnification</p>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                Options provide leverage, meaning small movements in the underlying security can result in large percentage gains or losses. While leverage can amplify profits, it equally amplifies losses.
                                            </p>
                                            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                                <p className="text-[10px] font-black text-white uppercase mb-2">Leverage Effect:</p>
                                                <p className="text-[10px] text-gray-500 italic">A 5% decline in SPY can result in a 50% loss in a call option, or even 100% if it pushes the option out-of-the-money.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                            <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">1.3 Time Decay (Theta)</p>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                Options lose value as they approach expiration due to time decay. This loss occurs every day, regardless of whether the underlying stock moves in your favor. Accelerated decay occurs in short-dated options (0DTE).
                                            </p>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                            <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">1.4 Volatility Risk</p>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                Option prices are affected by implied volatility (IV). Changes in volatility can cause prices to fall even when the underlying stock price remains unchanged (IV Crush).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 2. RISKS SPECIFIC TO ONLYOPTIONS.US SIGNALS */}
                            <section id="signal-risks" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">2. Risks Specific to OnlyOptions Signals</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-10 rounded-[2.5rem] bg-brand-500/5 border border-brand-500/10 space-y-6">
                                        <p className="text-xs font-black text-brand-500 uppercase tracking-widest">2.1 No Guarantee of Profits</p>
                                        <h3 className="text-xl font-black text-white uppercase">WE DO NOT GUARANTEE ANY PROFITS, SPECIFIC RETURNS, OR TRADING PERFORMANCE.</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed italic">
                                            Our historical win rate of 70.3% represents past performance only. Past performance does not guarantee future results. Strategies that worked previously may not work in the future.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                            <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-6">2.2 Individual Variability</p>
                                            <div className="space-y-4">
                                                {[
                                                    { t: 'Execution Timing', d: 'Delayed execution results in worse entry prices.' },
                                                    { t: 'Bid-Ask Spreads', d: 'Actual fills may be worse than published mid-prices.' },
                                                    { t: 'Broker Commissions', d: 'Fees reduce your net returns significantly.' },
                                                    { t: 'Emotional Decisions', d: 'Overriding stop-losses or profit targets.' }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <FiZap className="text-brand-500 mt-1 flex-shrink-0" />
                                                        <div>
                                                            <p className="text-xs font-black text-white">{item.t}</p>
                                                            <p className="text-[10px] text-gray-500">{item.d}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                                <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">2.3 Not Personalized Advice</p>
                                                <p className="text-xs text-gray-400 leading-relaxed uppercase font-black tracking-widest">ONLYOPTIONS.US DOES NOT PROVIDE PERSONALIZED INVESTMENT ADVICE.</p>
                                                <p className="text-[10px] text-gray-500 mt-4 italic">Signals are general educational information. We do not know your financial situation or risk tolerance.</p>
                                            </div>
                                            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                                <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">2.4 No Fiduciary Status</p>
                                                <p className="text-[10px] text-gray-400 leading-relaxed font-bold">We are not registered investment advisers (RIA). We do not manage client funds or execute trades on your behalf.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 3. SPECIFIC RISKS OF 0DTE OPTIONS */}
                            <section id="0dte-risks" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">3. Specific Risks of 0DTE Options</h2>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-brand-500 border border-white/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-10">
                                        <FiZap className="w-32 h-32 text-black" />
                                    </div>
                                    <div className="space-y-6 relative z-10">
                                        <p className="text-black font-black text-lg uppercase tracking-tight">0DTE OPTIONS ARE AMONG THE RISKIEST TYPES OF OPTIONS TRADING.</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="text-sm font-black text-black uppercase tracking-widest">3.1 Extreme Decay</h4>
                                                <p className="text-xs text-white/90 font-bold leading-relaxed">0DTE options lose value rapidly. An option worth $2.00 at 10:00 AM can be worth $0.50 by 2:00 PM with no movement in the underlying stock.</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-sm font-black text-black uppercase tracking-widest">3.2 Binary Outcomes</h4>
                                                <p className="text-xs text-white/90 font-bold leading-relaxed">At 4:00 PM ET expiration, a 0DTE option is either in-the-money or worthless. There is no recovery period.</p>
                                            </div>
                                        </div>
                                        <div className="pt-8 border-t border-white/20">
                                            <p className="text-[10px] font-black text-black uppercase tracking-widest mb-4">3.5 Not for Beginners</p>
                                            <div className="flex flex-wrap gap-4">
                                                {['Account Under $5,000', 'Less than 6mo Experience', 'Cannot active monitor'].map((item, i) => (
                                                    <div key={i} className="px-3 py-1 bg-black/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                                                        NO: {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 4. HYPOTHETICAL PERFORMANCE DISCLAIMER */}
                            <section id="hypothetical" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">4. Hypothetical Performance Disclaimer</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-6 leading-relaxed">
                                        <p className="text-sm text-gray-400">
                                            While our published track record reflects actual signals sent to members in real-time, the specific entry and exit prices we report are based on option mid-prices.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                                <p className="text-[10px] font-black text-brand-500 uppercase mb-2">Mid-Price Gap</p>
                                                <p className="text-[10px] text-gray-500 italic">Buyers pay closer to Ask, Sellers receive closer to Bid. Actual fills are rarely at the exact mid-price.</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                                <p className="text-[10px] font-black text-brand-500 uppercase mb-2">Execution Lag</p>
                                                <p className="text-[10px] text-gray-500 italic">Prices move against you during the delay between signal receipt and your order execution.</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                                <p className="text-[10px] font-black text-brand-500 uppercase mb-2">No Commissions</p>
                                                <p className="text-[10px] text-gray-500 italic">Reported returns are gross. Actual net returns are lower after per-contract commissions and fees.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-gray-900 border border-white/10">
                                        <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-4 text-center">CFTC Rule 4.41 Mandatory Warning</p>
                                        <p className="text-[10px] text-gray-500 leading-loose uppercase tracking-widest font-black text-center italic">
                                            HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN INHERENT LIMITATIONS. UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT ACTUAL TRADING. NO REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFITS OR LOSSES SIMILAR TO THOSE SHOWN.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* 5. GENERAL MARKET RISKS */}
                            <section id="market-risks" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">5. General Market Risks</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { t: '5.1 Market Volatility', d: 'Unexpected economic data, geopolitical events, or "Black Swan" events can cause rapid, severe price movements.' },
                                        { t: '5.2 Gap Risk', d: 'Stocks can gap up or down outside of market hours. You cannot exit or adjust until market open, potentially far below your stop-loss.' },
                                        { t: '5.3 Liquidity Risk', d: 'During extreme volatility, bid-ask spreads widen dramatically, and you may be forced to hold until expiration.' },
                                        { t: '5.4 Systemic Risk', d: 'Circuit breakers, exchange halts, or broker technical failures may prevent trade management entirely.' }
                                    ].map((item, i) => (
                                        <div key={i} className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                            <p className="text-[10px] font-black uppercase text-brand-500 mb-3">{item.t}</p>
                                            <p className="text-xs text-gray-500 leading-relaxed font-bold">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 6. YOUR RESPONSIBILITIES AS A TRADER */}
                            <section id="responsibilities" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">6. Your Responsibilities as a Trader</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/20">
                                        <p className="text-white font-black text-sm uppercase mb-4 tracking-widest">6.1 Understand Options Before Trading</p>
                                        <p className="text-xs text-gray-400 font-bold leading-relaxed mb-6 uppercase tracking-wider">DO NOT TRADE OPTIONS IF YOU DO NOT UNDERSTAND HOW THEY WORK.</p>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                            {['Greeks', 'Intrinsic Value', 'Time Decay', 'Exercise Rules', 'Spread Mechanics', 'Tax Rules'].map((item, i) => (
                                                <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/5 text-[9px] font-black text-gray-500 uppercase text-center">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                            <p className="text-xs font-black text-brand-500 uppercase tracking-widest">6.2 Risk Capital Only</p>
                                            <p className="text-xs text-gray-400 leading-relaxed">Options capital should be money you are prepared to lose entirely without affecting your lifestyle. Not essential funds or margin.</p>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                                            <p className="text-xs font-black text-brand-500 uppercase tracking-widest">6.3 Position Sizing (2% Rule)</p>
                                            <p className="text-xs text-gray-400 leading-relaxed">We recommend never risking more than 2% of your account on any single trade. Survival &gt; Profit.</p>
                                        </div>
                                    </div>
                                    <div className="p-10 rounded-[2.5rem] bg-orange-500/5 border border-orange-500/20">
                                        <h4 className="text-lg font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                            <FiAlertTriangle className="text-orange-500" />
                                            6.4 Always Use Stop-Losses
                                        </h4>
                                        <p className="text-sm font-black text-orange-200 uppercase tracking-[0.1em] leading-relaxed italic border-l-4 border-orange-500 pl-6">
                                            IGNORING STOP-LOSSES IS THE #1 REASON TRADERS FAIL. EVERY SIGNAL INCLUDES A STOP-LOSS. SET THIS IMMEDIATELY AFTER ENTRY.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* 7. LIMITATION OF LIABILITY */}
                            <section id="liability" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">7. Limitation of Liability</h2>
                                </div>
                                <div className="p-10 rounded-[3rem] fintech-glass border border-white/10 space-y-8">
                                    <p className="text-xs font-black text-brand-500 uppercase tracking-[0.3em] text-center">MANDATORY NOTICE</p>
                                    <p className="text-sm text-white font-black leading-relaxed text-center uppercase tracking-widest leading-loose">
                                        ONLYOPTIONS LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES ARE NOT LIABLE FOR ANY TRADING LOSSES OR FINANCIAL DAMAGES ARISING FROM YOUR USE OF OUR SERVICE. YOU ACKNOWLEDGE ALL TRADING DECISIONS ARE MADE SOLELY BY YOU.
                                    </p>
                                </div>
                            </section>

                            {/* 8. REGULATORY AND LEGAL DISCLAIMERS */}
                            <section id="regulatory" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">8. Regulatory & Legal Disclaimers</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-[10px] font-black uppercase text-brand-500 mb-4 tracking-widest">8.1 Not a Broker-Dealer</p>
                                        <p className="text-[10.5px] text-gray-500 leading-relaxed font-bold italic">OnlyOptions.us is not a broker-dealer. We do not accept customer funds, hold securities, or execute trades. All trading is through your own account.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-[10px] font-black uppercase text-brand-500 mb-4 tracking-widest">8.2 Not Tax Advice</p>
                                        <p className="text-[10.5px] text-gray-500 leading-relaxed">Options trading has specific tax treatment (Section 1256, wash sales). Consult a tax professional regarding your situation.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 9. FORWARD-LOOKING STATEMENTS */}
                            <section id="forward-looking" className="space-y-8 scroll-mt-32 text-center">
                                <div className="flex items-center gap-4 mb-4 justify-center">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">9. Forward-Looking Statements</h2>
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                </div>
                                <p className="text-sm text-gray-400 italic leading-loose max-w-2xl mx-auto">
                                    Projections and performance expectations are forward-looking statements based on current analysis. These are not guarantees and actual results may differ materially due to unforeseen events or Black Swan occurrences.
                                </p>
                            </section>

                            {/* 10. ACKNOWLEDGMENT AND ACCEPTANCE OF RISK */}
                            <section id="acknowledgment" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">10. Acknowledgment & Acceptance</h2>
                                </div>
                                <div className="p-10 rounded-[3.5rem] bg-brand-500/5 border border-brand-500/20 space-y-10">
                                    <p className="text-xs font-black text-brand-500 uppercase tracking-widest text-center">Final Agreement</p>
                                    <h3 className="text-xl font-black text-white text-center uppercase tracking-tight">BY USING ONLYOPTIONS.US, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS RISK DISCLAIMER IN ITS ENTIRETY.</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'Options trading involves substantial risk',
                                            'You can lose 100% of capital',
                                            'Past performance ≠ future results',
                                            'Not personalized investment advice',
                                            'Decisions are solely yours',
                                            'We are not liable for losses',
                                            'Trading with risk capital only',
                                            'Following proper risk management'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-[11px] font-bold text-gray-300">
                                                <FiZap className="text-brand-500 flex-shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-center">
                                        <p className="text-[11px] font-black text-red-200 uppercase tracking-widest italic">IF YOU DO NOT ACCEPT THESE RISKS, DO NOT USE THIS SERVICE.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 11. CONTACT INFORMATION */}
                            <section id="contact" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">11. CONTACT INFORMATION</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Legal Compliance</p>
                                            <a href="mailto:legal@onlyoptions.us" className="text-xl font-black text-white hover:text-brand-500 transition-colors">legal@onlyoptions.us</a>
                                        </div>
                                        <div className="space-y-4 pt-6 border-t border-white/5">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Support Desk</p>
                                            <a href="mailto:support@onlyoptions.us" className="text-xl font-black text-white hover:text-brand-400 transition-colors">support@onlyoptions.us</a>
                                        </div>
                                    </div>
                                    <div className="p-10 rounded-3xl bg-brand-500/5 border border-brand-500/20 space-y-4 flex flex-col justify-center">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Official Entity</p>
                                        <p className="text-2xl font-black text-white">OnlyOptions LLC</p>
                                        <p className="text-sm font-bold text-gray-500">Registerd in Delaware, USA</p>
                                        <p className="text-xs text-gray-600 font-medium">https://onlyoptions.us</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </StandardSection>

            <StandardCTA
                title="Dominate the Markets Together"
                subtitle="Join 1,247+ professional traders receiving live alerts every market day."
                className="mt-0"
            />
        </div>
    );
};

export default RiskDisclaimer;
