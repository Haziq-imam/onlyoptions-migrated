import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap, FiTarget as FiBullseye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../components/ui/Card/Card';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/Table/Table';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white uppercase tracking-wider text-sm">
                {question}
                <span className="text-brand-500 transition-transform group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
            </summary>
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {answer}
            </div>
        </details>
    );
};

const linksData = [
    { title: "Options 101", path: "/options-trading-101" },
    { title: "Greeks explained", path: "/options-greeks-explained" },
    { title: "Risk management", path: "/options-signals-risk-management" },
    { title: "Position sizing", path: "/position-size-calculator" },
    { title: "How it works", path: "/how-it-works" },
    { title: "Free trial", path: "/free-trial" },
    { title: "Performance", path: "/performance" },
    { title: "Best brokers", path: "/best-brokers-for-options-trading" },
    { title: "Beginners guide", path: "/options-signals-for-beginners" },
    { title: "SPY signals", path: "/spy-options-signals" },
    { title: "Risk disclaimer", path: "/risk-disclaimer" },
    { title: "FAQ", path: "/faq" }
];

const Page0dteOptionsStrategyCompleteGuide = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>0DTE Options Strategy: Complete Guide | Same-Day Trading</title>
                <meta name="description" content="Learn 0DTE options trading: what it is, how it works, risks, strategies, and who should trade same-day expiration options. Complete beginner-to-advanced guide." />
                <link rel="canonical" href="https://onlyoptions.us/0dte-options-strategy-complete-guide" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Strategy"
                    title={<>0DTE Options <span className="text-brand-500">Strategy</span></>}
                    description="Complete Guide to Same-Day Expiration Options Trading"
                    align="center"
                    className="mb-20"
                />

                <Card variant="institutional" className="p-8 md:p-12 mb-20 border-red-500/20 bg-red-500/[0.02]">
                    <h3 className="text-2xl font-black mb-6 tracking-tight text-red-500 uppercase italic flex items-center gap-3">
                        <FiAlertTriangle className="shrink-0" /> WARNING: 0DTE OPTIONS ARE AMONG THE RISKIEST TYPES OF OPTIONS TRADING
                    </h3>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            0DTE (Zero Days to Expiration) options expire at 4:00 PM ET on the same day you trade them. They offer explosive profit potential (50-200% in hours) but also catastrophic loss risk (100% loss in minutes). This is not for beginners.
                        </p>
                        <p>
                            This guide explains what 0DTE options are, how they work, who should trade them, and proven strategies for success.
                        </p>
                    </div>
                </Card>

                {/* Definition */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What Are 0DTE Options?</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Definition & Mechanics</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                             <h4 className="text-white uppercase italic">Definition</h4>
                             <p>
                                0DTE options are options contracts that expire at 4:00 PM ET today. They have zero days remaining until expiration. Also called "same-day expiration" or "intraday options."
                             </p>
                             <h4 className="text-white uppercase italic mt-8">How They Work</h4>
                             <div className="flex flex-col gap-4">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">Standard Options:</span>
                                    <span className="text-white font-bold">Bought Monday, expire Friday = 4 days to expiration</span>
                                </div>
                                <div className="p-4 bg-brand-500/5 border border-brand-500/10 rounded-xl">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-500 block mb-1">0DTE Options:</span>
                                    <span className="text-white font-bold">Bought Monday 10 AM, expire Monday 4 PM = 0 days to expiration</span>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                         <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Key Characteristics:</h4>
                         <div className="space-y-3">
                            {[
                                "Expire at 4:00 PM ET on the same trading day",
                                "Extremely fast time decay (theta burns value by the hour)",
                                "High volatility — prices swing wildly",
                                "Binary outcomes: Finish in-the-money (profit) or worthless (total loss)",
                                "Tight bid-ask spreads on liquid tickers (SPY, QQQ)",
                                "Wide spreads on illiquid tickers (avoid these)"
                            ].map((char, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <FiCheck className="text-brand-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-xs font-black uppercase tracking-widest leading-relaxed">{char}</span>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            </StandardSection>

            {/* Why Trade 0DTE */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Analysis" title="Why Trade 0DTE Options?" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-12">
                         <h4 className="text-brand-500 font-black uppercase tracking-[0.2em] text-sm text-center italic">The Appeal</h4>
                         <div className="grid grid-cols-1 gap-6">
                            {[
                                { t: "1. Explosive Profit Potential", d: "50-200% returns in 2-4 hours are common when directionally correct. A $500 position can turn into $1,500 by lunch." },
                                { t: "2. No Overnight Risk", d: "All positions close by 4 PM. No gap risk, no overnight news surprises, no stress holding positions overnight." },
                                { t: "3. Frequent Opportunities", d: "SPY and QQQ have 0DTE options available every trading day (Monday-Friday). 5 opportunities per week." },
                                { t: "4. Defined Risk", d: "Maximum loss = premium paid. Unlike short selling or margin trading, you cannot lose more than your initial investment." }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                    <h4 className="text-white font-black mb-4 uppercase tracking-widest text-xs italic">{item.t}</h4>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{item.d}</p>
                                </Card>
                            ))}
                         </div>
                    </div>
                    <div className="space-y-12">
                         <h4 className="text-red-500 font-black uppercase tracking-[0.2em] text-sm text-center italic">The Reality</h4>
                         <Card variant="institutional" className="p-10 border-red-500/20 bg-red-500/[0.02] h-full flex items-center">
                            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    Most 0DTE traders lose money. Win rates are typically 40-60% (lower than weekly options). Average losing trade is -70% to -100% (total loss).
                                </p>
                                <p>
                                    Time decay is brutal — option can lose 50% of value in 2 hours even if underlying stock moves in your favor slightly.
                                </p>
                            </div>
                         </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Risks */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Danger Zone" title="0DTE Risks — Understand Before Trading" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-32">
                    {[
                        { t: "Extreme Time Decay (Theta)", d: "A 0DTE option worth $2.00 at 10 AM might be worth $0.50 by 2 PM even if the stock moves sideways. Theta decay accelerates exponentially in the final hours." },
                        { t: "Binary Outcomes", d: "At 4:00 PM, your option is either in-the-money (has value) or out-of-the-money (worthless). No middle ground. A $575 call on SPY trading at $574.90 at 4 PM = $0 value." },
                        { t: "Whipsaw Risk", d: "Stock moves $3 in your favor by noon (+100% profit), then reverses $4 against you by 2 PM (-80% loss). Intraday volatility is extreme." },
                        { t: "Emotional Trading", d: "Fast-paced 0DTE trading triggers emotional decisions. FOMO (fear of missing out) and panic selling destroy accounts. Discipline is critical." },
                        { t: "Liquidity Risk", d: "During extreme volatility (VIX >30), bid-ask spreads widen. You may not be able to exit at a fair price. Stuck holding until expiration." }
                    ].map((risk, i) => (
                        <Card key={i} variant="glass" className="p-6 border-red-500/10 bg-gray-950/40 hover:border-red-500/30 transition-all">
                            <h4 className="text-white font-black mb-4 uppercase tracking-widest text-[10px] italic min-h-[40px] flex items-center">Risk #{i + 1}: {risk.t}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{risk.d}</p>
                        </Card>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card variant="institutional" className="p-12 border-white/5 bg-gray-950/60">
                         <h4 className="text-white font-black mb-12 uppercase tracking-[0.2em] text-center italic">Who Should NOT Trade 0DTE</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4">
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Do not trade 0DTE if you:</p>
                                {[
                                    "Have less than 6 months options trading experience",
                                    "Cannot monitor positions during market hours (9:30 AM - 4:00 PM ET)",
                                    "Have an account under $5,000",
                                    "Are uncomfortable with rapid, large losses",
                                    "Struggle with emotional discipline",
                                    "Do not understand Greeks (Delta, Theta, Gamma)"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="text-red-500 font-black">•</span>
                                        <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-8 bg-brand-500/5 rounded-2xl border border-brand-500/10 text-center">
                                <p className="text-white text-xs font-black uppercase tracking-widest leading-relaxed italic">
                                    If any of the above apply, stick to weekly or monthly options until you gain more experience.
                                </p>
                            </div>
                         </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Strategies */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Methods" title="0DTE Trading Strategies" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Strategy 1 */}
                    <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                         <div className="flex items-center gap-4 mb-8">
                            <FiActivity className="text-brand-500 w-6 h-6" />
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Strategy 1: Directional Momentum Play</h4>
                         </div>
                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-8 leading-relaxed">Trade with strong intraday momentum in one direction.</p>
                         <div className="space-y-6">
                            <div>
                                <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-3 italic">Setup:</h5>
                                <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> SPY breaks above resistance (e.g., $575) with volume</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Uptrend confirmed on 15-minute chart</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Buy slightly OTM call (e.g., $577 strike)</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Entry: 10:00-11:00 AM (avoid first 30 minutes)</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Target: +50-75% profit</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Stop-loss: -40% (exit immediately)</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                 <h5 className="text-white text-[10px] font-black uppercase tracking-widest mb-4 italic">Example:</h5>
                                 <div className="space-y-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                    <p>10:15 AM: SPY at $575.50, breaking above $575 resistance</p>
                                    <p>Buy SPY $577 call for $1.20 | Target: $1.80 | Stop: $0.72</p>
                                    <p className="text-brand-500 font-black italic">Outcome: SPY reaches $578 by 12:30 PM, exit at $1.85 (+54% profit)</p>
                                 </div>
                            </div>
                         </div>
                    </Card>

                    {/* Strategy 2 */}
                    <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                         <div className="flex items-center gap-4 mb-8">
                            <FiBullseye className="text-brand-500 w-6 h-6" />
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Strategy 2: Mean Reversion Scalp</h4>
                         </div>
                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-8 leading-relaxed">Fade extreme intraday moves expecting reversion to mean.</p>
                         <div className="space-y-6">
                            <div>
                                <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-3 italic">Setup:</h5>
                                <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> SPY drops -1% in first hour (oversold)</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> RSI &lt; 30 on 15-minute chart</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Buy ATM call expecting bounce</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Entry: 10:30-11:30 AM</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Target: +30-50% quick profit</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Stop: -30% tight</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                 <h5 className="text-white text-[10px] font-black uppercase tracking-widest mb-4 italic">Example:</h5>
                                 <div className="space-y-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                    <p>10:45 AM: SPY drops from $577 to $573 (-0.7%) on no news</p>
                                    <p>Buy SPY $573 call for $2.50 | Target: $3.25 | Stop: $1.75</p>
                                    <p className="text-brand-500 font-black italic">Outcome: SPY bounces to $575 by 11:45 AM, exit at $3.40 (+36%)</p>
                                 </div>
                            </div>
                         </div>
                    </Card>

                    {/* Strategy 3 */}
                    <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                         <div className="flex items-center gap-4 mb-8">
                            <FiZap className="text-brand-500 w-6 h-6" />
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Strategy 3: Event-Based Volatility</h4>
                         </div>
                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-8 leading-relaxed">Trade around scheduled events: Fed announcements, CPI data, FOMC.</p>
                         <div className="space-y-6">
                            <div>
                                <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-3 italic">Setup:</h5>
                                <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Major economic data release at 8:30 AM or 2:00 PM</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Buy straddle (call + put) 30 minutes before event</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Exit winner within 1 hour after event</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> High IV before event, IV crush after</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                 <h5 className="text-white text-[10px] font-black uppercase tracking-widest mb-4 italic">Example:</h5>
                                 <div className="space-y-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                    <p>1:30 PM: Fed announces rate decision at 2:00 PM</p>
                                    <p>Buy SPY $575 call + $575 put (straddle) for $4.00 total</p>
                                    <p className="text-brand-500 font-black italic">2:15 PM: SPY spikes to $580, call worth $6.00, exit at $6.00 (+50% profit)</p>
                                 </div>
                            </div>
                         </div>
                    </Card>

                    {/* Strategy 4 */}
                    <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                         <div className="flex items-center gap-4 mb-8">
                            <FiArrowRight className="text-brand-500 w-6 h-6" />
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Strategy 4: Opening Range Breakout</h4>
                         </div>
                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-8 leading-relaxed">Trade breakouts from the first 30-minute range.</p>
                         <div className="space-y-6">
                            <div>
                                <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-3 italic">Setup:</h5>
                                <ul className="space-y-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Wait for 10:00 AM (first 30 minutes complete)</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Identify high and low of 9:30-10:00 AM range</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Buy call if SPY breaks above high, put if below low</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Target: Previous day's high/low</li>
                                    <li className="flex gap-2"><span className="text-brand-500">•</span> Stop: Back inside opening range</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                 <h5 className="text-white text-[10px] font-black uppercase tracking-widest mb-4 italic">Example:</h5>
                                 <div className="space-y-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                    <p>9:30-10:00 AM: SPY range $574-$576</p>
                                    <p>10:05 AM: SPY breaks above $576 | Buy $577 call for $1.50</p>
                                    <p className="text-brand-500 font-black italic">Outcome: SPY reaches $578.50 by 11:30 AM, exit call at $2.60 (+73%)</p>
                                 </div>
                            </div>
                         </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Position Sizing */}
            <StandardSection variant="default" divider="top" spacing="lg">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">0DTE Position Sizing and Risk Management</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Capital Preservation</p>
                        </div>
                        <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                             <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">The 1% Rule for 0DTE</h4>
                             <div className="prose prose-invert prose-brand max-w-none text-gray-400 leading-relaxed mb-8 text-xs">
                                <p>
                                    Because 0DTE is riskier than standard options, never risk more than 1% of your account per trade (vs 2% for weekly/monthly).
                                </p>
                             </div>
                             <div className="p-6 bg-brand-500/5 rounded-xl border border-brand-500/10">
                                 <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4 italic">Example:</h5>
                                 <div className="space-y-2 text-xs font-black uppercase tracking-widest text-white">
                                    <p>$10,000 account | 1% risk = $100 max loss</p>
                                    <p>Buy @ $1.50, stop @ $0.60 (lose $0.90 / contract)</p>
                                    <p className="text-gray-400">Max contracts: $100 ÷ $90 = 1.1 → Trade 1 contract only</p>
                                 </div>
                             </div>
                        </Card>
                    </div>
                    <div className="space-y-8 pt-12">
                         <Card variant="institutional" className="p-10 border-white/5 bg-gray-950/40">
                            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">Time-Based Stops</h4>
                            <div className="space-y-3">
                                {[
                                    "If position is not profitable by 1:00 PM, exit",
                                    "Never hold 0DTE past 3:30 PM (final 30 minutes too risky)",
                                    "If down -30% within first 30 minutes, exit immediately"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                                        <FiActivity className="text-brand-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/5">
                                <h4 className="text-white font-black mb-4 uppercase tracking-widest text-xs">Maximum Concurrent 0DTE Positions</h4>
                                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest italic">Limit: 2 open 0DTE positions maximum at any time. Total portfolio heat: 2% (1% each).</p>
                            </div>
                         </Card>
                    </div>
                </div>

                {/* Best Tickers */}
                <SectionHeader label="Assets" title="Best Tickers for 0DTE Trading" align="center" className="mb-12" />
                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-32">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Ticker</TableHead>
                                <TableHead>Liquidity</TableHead>
                                <TableHead>Spread</TableHead>
                                <TableHead>Best For</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { t: "SPY", l: "Excellent", s: "$0.01-0.05", f: "All strategies" },
                                { t: "QQQ", l: "Excellent", s: "$0.02-0.08", f: "Tech momentum" },
                                { t: "IWM", l: "Good", s: "$0.05-0.15", f: "Small cap plays" },
                                { t: "NVDA", l: "Moderate", s: "$0.10-0.30", f: "Earnings, events" },
                                { t: "TSLA", l: "Moderate", s: "$0.15-0.40", f: "High volatility" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Ticker" className="font-black text-brand-500 uppercase italic tracking-wider">{row.t}</TableCell>
                                    <TableCell label="Liquidity" className="text-white">{row.l}</TableCell>
                                    <TableCell label="Spread" className="text-gray-400 font-mono text-xs">{row.s}</TableCell>
                                    <TableCell label="Best For" className="text-white text-xs">{row.f}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="p-6 bg-brand-500/5 text-center text-[10px] font-black uppercase tracking-[0.2em] italic text-gray-400">
                        Recommendation: Stick to SPY and QQQ for 90% of your 0DTE trades. Tight spreads, excellent liquidity, predictable behavior.
                    </div>
                </Card>
            </StandardSection>

            {/* Performance */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Results" title="0DTE Performance Metrics" align="center" className="mb-20" />
                <div className="max-w-4xl mx-auto space-y-12">
                    <Card variant="glass" className="p-8 md:p-12 border-white/5 bg-gray-950/40">
                         <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm italic text-center">OnlyOptions 0DTE Track Record</h4>
                         <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] text-center mb-12 italic">Data from Jan 2023 - Feb 2026</p>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Metric</TableHead>
                                    <TableHead>Performance</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { m: "Total 0DTE Signals Sent", p: "427" },
                                    { m: "Win Rate", p: "68.2%", c: "text-brand-500" },
                                    { m: "Average Winner", p: "+62%", c: "text-brand-400" },
                                    { m: "Average Loser", p: "-48%", c: "text-red-500" },
                                    { m: "Risk-Reward Ratio", p: "1.3:1" },
                                    { m: "Best Trade", p: "+187%", c: "text-brand-500" },
                                    { m: "Worst Trade", p: "-95%", c: "text-red-600" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Metric" className="text-gray-400 text-xs font-black uppercase tracking-widest">{row.m}</TableCell>
                                        <TableCell label="Value" className={`text-white font-black text-sm ${row.c || ''}`}>{row.p}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </Card>
                    <div className="prose prose-invert prose-brand max-w-none text-center">
                        <p className="text-gray-500 uppercase italic text-sm">
                            Note: 0DTE win rate (68.2%) is slightly lower than our overall win rate (70.3%), but average winners are larger (+62% vs +87% for weekly), making 0DTE profitable overall.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* Common Mistakes */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Pitfalls" title="Common 0DTE Mistakes" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        { t: "Trading the First 30 Minutes", d: "9:30-10:00 AM is chaos. Spreads are wide, prices whipsaw. Wait until 10:00 AM for clearer direction." },
                        { t: "Holding Past 3:30 PM", d: "Final 30 minutes have extreme gamma risk. Positions can swing 50-100% in minutes. Exit by 3:30 PM maximum." },
                        { t: "Buying Far OTM Options", d: "SPY at $575, buying $585 calls because they are cheap ($0.10). These have <5% chance of profit. Wasted money." },
                        { t: "Not Using Limit Orders", d: "Market orders on 0DTE get terrible fills due to wide spreads and fast movement. Always use limit orders." },
                        { t: "Ignoring Time Decay", d: "You are up +20% at 11 AM but hold for more. By 2 PM, theta decay has eroded gains to -10%. Take profits quickly." }
                    ].map((mistake, i) => (
                        <Card key={i} variant="glass" className="p-6 border-red-500/10 bg-gray-950/40 hover:border-brand-500/20 transition-all flex flex-col h-full">
                            <h4 className="text-white font-black mb-4 uppercase tracking-widest text-[10px] italic underline decoration-red-500/30 underline-offset-8 decoration-2 flex items-center min-h-[40px]">Mistake #{i + 1}: {mistake.t}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed mt-auto">{mistake.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* FAQ */}
            <StandardSection variant="muted" divider="top" spacing="lg" containerSize="4xl">
                 <div className="prose prose-invert prose-brand max-w-none space-y-16">
                    <section>
                        <SectionHeader label="Questions" title={<>0DTE Trading <span className="text-brand-500">FAQ</span></>} align="center" className="mb-12" />
                        <div className="space-y-4">
                             {[
                                { q: "Can beginners trade 0DTE?", a: "Not recommended. 0DTE requires experience with options, Greeks, technical analysis, and emotional discipline. Start with weekly or monthly options for at least 6 months before attempting 0DTE." },
                                { q: "What time of day is best for 0DTE?", a: "10:00 AM - 1:00 PM typically best. Avoid 9:30-10:00 AM (too chaotic) and 3:00-4:00 PM (extreme gamma risk). Best setups appear mid-morning after initial volatility settles." },
                                { q: "Can I hold 0DTE overnight?", a: "No. 0DTE options expire at 4:00 PM ET and become worthless. You cannot hold them overnight. All positions must be closed or will expire by 4:00 PM." },
                                { q: "What is a good win rate for 0DTE?", a: "60-70% is excellent. Most retail traders have 40-50% win rates on 0DTE. Our verified 68.2% win rate is above average. Lower than weekly options (72%) due to higher difficulty." },
                                { q: "How much money do I need to trade 0DTE?", a: "Minimum $5,000 recommended. With 1% risk rule, that allows $50 risk per trade. Smaller accounts ($2,000-$5,000) limit you to 1 contract, reducing profit potential significantly." },
                                { q: "Should I trade 0DTE every day?", a: "No. Only trade when high-probability setups appear. OnlyOptions sends 0DTE signals 2-3 times per week (not daily) because we only trade the best setups. Quality over quantity." },
                                { q: "Do I need special broker approval for 0DTE?", a: "No. If you have Level 1 options approval (buying calls and puts), you can trade 0DTE. It is the same approval level as weekly or monthly options." },
                                { q: "What happens if my 0DTE option expires in-the-money?", a: "Most brokers automatically exercise ITM options at expiration. A $575 call with SPY at $580 = you buy 100 shares at $575. Most traders sell before expiration to avoid this. Close positions by 3:45 PM." }
                            ].map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </section>

                    {/* Disclaimer Footnote */}
                    <div className="text-center pt-8 border-t border-white/5">
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">0DTE Strategy Guide — high risk, high reward, high discipline required.</p>
                    </div>

                    {/* Resources */}
                    <section className="border-t border-white/5 pt-16">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8 text-center">Resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {linksData.map((link, i) => (
                                <Link key={i} to={link.path} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA />
            </div>
        </div>
    );
};

export default Page0dteOptionsStrategyCompleteGuide;
