import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap, FiShield, FiTrendingDown, FiClock, FiDollarSign, FiPercent } from 'react-icons/fi';
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
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                {answer}
            </div>
        </details>
    );
};

const IronCondorStrategy = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Iron Condors Strategy Guide | Range-Bound Income Machine</title>
                <meta name="description" content="Master the Iron Condor strategy. Learn how to generate consistent monthly income in range-bound markets using this risk-defined, four-legged options strategy." />
                <link rel="canonical" href="https://onlyoptions.us/iron-condor-strategy" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Strategy Guide #8 of 30"
                    title={<>Iron Condors <span className="text-brand-500">Strategy</span> Guide</>}
                    description="The Ultimate Income Machine for Range-Bound Markets"
                    align="center"
                    className="mb-12"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { label: "Win Rate", value: "71.4%" },
                        { label: "Avg Monthly Income", value: "+4.2%" },
                        { label: "Trade Structure", value: "4 Legs" },
                        { label: "Ideal Expiration", value: "30-45 DTE" }
                    ].map((stat, i) => (
                        <Card key={i} variant="glass" className="p-6 text-center border-white/5 bg-gray-950/40 hover:border-brand-500/30 transition-all">
                            <h4 className="text-brand-500 font-black mb-2 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </Card>
                    ))}
                </div>

                {/* What is an Iron Condor */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What Is an Iron Condor?</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Definition & Dynamics</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                             <p>
                                An iron condor combines two credit spreads into a single, four-legged trade. You sell an OTM call spread above the current price AND sell an OTM put spread below the current price — simultaneously. The result is a position that profits from time decay when the stock stays inside a defined range.
                             </p>
                             <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl mt-6">
                                 <h4 className="flex items-center gap-2 text-brand-500 font-bold mb-2 uppercase tracking-wider text-xs">
                                     <FiShield className="w-4 h-4 shrink-0" /> The Core Concept:
                                 </h4>
                                 <p className="text-gray-300 m-0 text-sm leading-relaxed">
                                    Think of it as collecting rent from both sides of the market at once. As long as the stock doesn't move too far in either direction, all four options expire worthless and you keep the full premium collected.
                                 </p>
                             </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">The Four Legs Explained:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Leg</TableHead>
                                        <TableHead>Action</TableHead>
                                        <TableHead>Strike Position</TableHead>
                                        <TableHead>Purpose</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { l: "Leg 1", a: "Sell OTM Put", s: "Below support", p: "Bottom of profit zone" },
                                        { l: "Leg 2", a: "Buy OTM Put", s: "Further below Leg 1", p: "Protection (defines max loss)" },
                                        { l: "Leg 3", a: "Sell OTM Call", s: "Above resistance", p: "Top of profit zone" },
                                        { l: "Leg 4", a: "Buy OTM Call", s: "Further above Leg 3", p: "Protection (defines max loss)" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Leg" className="text-white text-xs font-bold">{row.l}</TableCell>
                                            <TableCell label="Action" className="text-brand-500 font-bold text-xs">{row.a}</TableCell>
                                            <TableCell label="Strike" className="text-gray-400 text-xs">{row.s}</TableCell>
                                            <TableCell label="Purpose" className="text-gray-500 text-[10px] uppercase font-bold">{row.p}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>

                {/* Profit & Loss Diagram */}
                <div className="max-w-4xl mx-auto py-12 px-4">
                    <h4 className="text-center text-white font-black uppercase tracking-[0.3em] text-xs mb-8 italic">Profit & Loss Diagram</h4>
                    <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40 text-center overflow-x-auto">
                        <div className="min-w-[600px] space-y-6">
                            <p className="text-brand-500 font-black uppercase tracking-[0.2em] italic">IRON CONDOR PROFIT ZONE</p>
                            <div className="relative">
                                <div className="border-t-2 border-dashed border-brand-500/30 w-full absolute top-1/2 -translate-y-1/2" />
                                <div className="flex justify-between items-center relative z-10 px-4">
                                    <div className="space-y-2">
                                        <div className="w-4 h-12 bg-red-500/20 border border-red-500/30 mx-auto rounded-md" />
                                        <p className="text-[10px] text-gray-500 font-bold uppercase">[Long Put]</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-4 h-12 bg-red-500/40 border border-red-500 mx-auto rounded-md" />
                                        <p className="text-[10px] text-gray-500 font-bold uppercase">[Short Put]</p>
                                    </div>
                                    <div className="flex-1 px-8">
                                        <div className="h-16 bg-brand-500/10 border-2 border-brand-500 rounded-xl flex items-center justify-center">
                                            <p className="text-brand-500 font-black italic uppercase tracking-widest">PROFIT ZONE</p>
                                        </div>
                                        <p className="text-[10px] text-brand-500 font-bold uppercase mt-2">Max Profit (full credit collected)</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-4 h-12 bg-red-500/40 border border-red-500 mx-auto rounded-md" />
                                        <p className="text-[10px] text-gray-500 font-bold uppercase">[Short Call]</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-4 h-12 bg-red-500/20 border border-red-500/30 mx-auto rounded-md" />
                                        <p className="text-[10px] text-gray-500 font-bold uppercase">[Long Call]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between text-red-500/40 font-black uppercase tracking-widest text-[10px] italic">
                                <span>Max Loss Zone</span>
                                <span>Max Loss Zone</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Entry Criteria */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Selection" title="When OnlyOptions Signals an Iron Condor" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
                    Not every market environment is right for iron condors. Our signals only go out when all conditions align. Here are the exact criteria our analysts check before issuing every iron condor signal:
                </p>

                <div className="max-w-5xl mx-auto">
                    <Card variant="institutional" className="p-8 md:p-12 border-brand-500/20 bg-brand-500/5">
                        <h3 className="text-2xl font-black mb-10 tracking-tight text-white uppercase italic flex items-center gap-3">
                            <FiCheck className="shrink-0 text-brand-500" /> Iron Condor Entry Criteria (All Must Be Met)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                "IV Rank above 40% — options must be expensive enough to make selling worthwhile",
                                "Stock confirmed in a range for 2+ weeks with clear support and resistance",
                                "No earnings announcement within 21 days of expiration",
                                "VIX between 15-25 — ideal premium-selling environment",
                                "Both the 20-day and 50-day moving averages are relatively flat (not steeply trending)",
                                "Sector ETF also range-bound (confirming stock isn't about to break out)"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-brand-500 font-black">•</span>
                                    <span className="text-gray-300 text-sm font-bold leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Strike Selection */}
            <StandardSection variant="default" divider="top" spacing="lg">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Strike Selection — The 1SD Rule</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Statistical Advantage</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400 text-sm leading-relaxed">
                             <p>
                                OnlyOptions uses the 1 Standard Deviation (1SD) rule for all iron condor strikes. This means we sell strikes that have approximately a 16% chance of being breached — giving us roughly 68% probability of full profit on both sides combined.
                             </p>
                             <div className="p-6 bg-gray-950/60 border border-white/5 rounded-2xl mt-8">
                                 <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-4 italic">Our Default Configuration:</h4>
                                 <p className="text-gray-400 italic">"Our default is the 30-delta short strike on both sides. This gives us approximately 70% probability of profit on each individual spread, which translates to roughly 49% probability of collecting maximum profit — but with active management and rolling, our actual max profit rate is significantly higher."</p>
                             </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic text-center">Delta-Based Strike Selection:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Short Strike Delta</TableHead>
                                        <TableHead>Prob. of Profit</TableHead>
                                        <TableHead>Rating</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { d: "10 Delta", p: "~90%", r: "Too conservative", rc: "text-gray-500" },
                                        { d: "16 Delta", p: "~84%", r: "Conservative Income", rc: "text-brand-400" },
                                        { d: "25 Delta", p: "~75%", r: "Balanced Risk", rc: "text-brand-500" },
                                        { d: "30 Delta", p: "~70%", r: "OnlyOptions Default", rc: "text-brand-500 font-black italic bg-brand-500/10" },
                                        { d: "45 Delta", p: "~55%", r: "Aggressive / Expert Only", rc: "text-red-400" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.rc.includes('bg-brand') ? "bg-brand-500/5" : ""}>
                                            <TableCell label="Delta" className="text-white text-xs font-bold">{row.d}</TableCell>
                                            <TableCell label="Probability" className="text-gray-300 text-xs">{row.p}</TableCell>
                                            <TableCell label="Rating" className={`text-xs ${row.rc.split(' ').filter(c => !c.includes('bg')).join(' ')}`}>{row.r}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>

                {/* Real Trade Examples */}
                <SectionHeader label="Case Studies" title="Real Trade Examples" align="center" className="mb-20" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Example 1 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                         <div className="p-6 bg-white/5 border-b border-white/5 flex justify-between items-center">
                             <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 1 — SPY Iron Condor (Aug 2023)</h4>
                             <span className="text-green-500 font-black text-xs">+233% ROC</span>
                         </div>
                         <Table>
                             <TableBody>
                                 {[
                                     { f: "Underlying", e: "SPY at $448", n: "Range-bound 3 weeks: $440-$458" },
                                     { f: "Short Call", e: "$460 call @ $1.85", n: "Above resistance, 28-delta" },
                                     { f: "Short Put", e: "$436 put @ $1.65", n: "Below support, 26-delta" },
                                     { f: "Net Credit", e: "$3.50 per condor", n: "Collected upfront (Max Profit)", ec: "text-brand-500 font-bold" },
                                     { f: "Max Loss", e: "$1.50 per condor", n: "Defined risk: 5 wide - credit", ec: "text-red-400" },
                                     { f: "Outcome", e: "Expired inside range", n: "+$350 per condor profit", ec: "text-green-500 font-black italic" }
                                 ].map((row, i) => (
                                     <TableRow key={i}>
                                         <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-[10px] w-1/4">{row.f}</TableCell>
                                         <TableCell label="Details" className={`text-xs ${row.ec || 'text-white'}`}>{row.e}</TableCell>
                                         <TableCell label="Notes" className="text-gray-500 text-[10px] italic">{row.n}</TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                    </Card>

                    {/* Example 2 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                         <div className="p-6 bg-white/5 border-b border-white/5 flex justify-between items-center">
                             <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 2 — AAPL Iron Condor (Jan 2024)</h4>
                             <span className="text-green-500 font-black text-xs">+43% ROC in 19 Days</span>
                         </div>
                         <Table>
                             <TableBody>
                                 {[
                                     { f: "Underlying", e: "AAPL at $185", n: "Choppy post-earnings: $178-$192" },
                                     { f: "Net Credit", e: "$2.30 per condor", n: "Collected upfront", ec: "text-brand-500 font-bold" },
                                     { f: "Management", e: "Closed at 50% Profit", n: "Exited day 19 of 35-day hold", ec: "text-brand-400" },
                                     { f: "Profit", e: "$115 per condor", n: "+43% return on capital at risk", ec: "text-green-500 font-black italic" },
                                     { f: "Annualized", e: "+82% annualized", n: "Extrapolated from 19-day hold" }
                                 ].map((row, i) => (
                                     <TableRow key={i}>
                                         <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-[10px] w-1/4">{row.f}</TableCell>
                                         <TableCell label="Details" className={`text-xs ${row.ec || 'text-white'}`}>{row.e}</TableCell>
                                         <TableCell label="Notes" className="text-gray-500 text-[10px] italic">{row.n}</TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* The 50% Rule */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Management" title="The 50% Rule — Most Important Management Rule" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
                    The 50% rule is non-negotiable in the OnlyOptions iron condor system. When your condor has decayed to 50% of the credit received, you close the entire position.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Credit Received</TableHead>
                                    <TableHead>Close When Value Reaches</TableHead>
                                    <TableHead className="text-brand-500">Profit Locked In</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { c: "$3.50", r: "$1.75", p: "$1.75 per condor" },
                                    { c: "$2.30", r: "$1.15", p: "$1.15 per condor" },
                                    { c: "$4.10", r: "$2.05", p: "$2.05 per condor" },
                                    { c: "$1.80", r: "$0.90", p: "$0.90 per condor" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Credit" className="text-white text-xs font-bold">{row.c}</TableCell>
                                        <TableCell label="Target" className="text-brand-500 font-bold text-xs">{row.r}</TableCell>
                                        <TableCell label="Profit" className="text-gray-400 text-xs italic">{row.p}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <div className="space-y-8">
                         <div className="p-8 bg-brand-500/10 border border-brand-500/20 rounded-2xl">
                             <h4 className="text-brand-500 font-black uppercase tracking-widest text-sm mb-4 italic">Why 50%?</h4>
                             <p className="text-gray-300 text-sm leading-relaxed">
                                Because the final 50% of premium takes the same amount of time to decay but exposes you to dramatically higher gamma risk. Closing at 50% dramatically improves your risk-adjusted return.
                             </p>
                         </div>
                         <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl">
                             <h4 className="text-red-500 font-black uppercase tracking-widest text-sm mb-4 italic">The 21 DTE Rule:</h4>
                             <p className="text-gray-300 text-sm leading-relaxed">
                                Even if your condor has NOT reached 50% profit, close the entire position at 21 days to expiration. This eliminates gamma risk — the danger of rapid, unpredictable moves that turn winners into max losers overnight.
                             </p>
                         </div>
                    </div>
                </div>
            </StandardSection>

            {/* Active Management */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Defense" title="Active Management — When Trades Go Wrong" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <FiActivity className="text-brand-500" />
                        </div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Scenario 1: One Side Threatened</h4>
                        <ul className="space-y-3 text-xs text-gray-500 leading-relaxed">
                            <li>• Stock drifts toward short strike but hasn't breached it</li>
                            <li>• Check: Is short strike OTM with 21+ DTE remaining?</li>
                            <li className="text-brand-500 font-bold">• If yes — hold and monitor. One side threatened is normal.</li>
                            <li>• If breached — move to adjustment below</li>
                        </ul>
                    </Card>

                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <FiZap className="text-brand-500" />
                        </div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Scenario 2: Adjustment (Rolling)</h4>
                        <ul className="space-y-3 text-xs text-gray-500 leading-relaxed">
                            <li>• Roll if threatened with 21+ DTE remaining</li>
                            <li>• Realize loss on threatened spread; sell new spread further OTM</li>
                            <li className="text-brand-500 font-bold">• ONLY roll for a net credit — never pay to roll an IC</li>
                            <li className="text-red-500 font-bold italic">• Only roll ONCE. If threatened again, accept the loss.</li>
                        </ul>
                    </Card>

                    <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/5 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                            <FiAlertTriangle className="text-red-500" />
                        </div>
                        <h4 className="text-red-500 font-black uppercase tracking-widest text-sm italic">Scenario 3: Universal Stop Loss</h4>
                        <ul className="space-y-3 text-xs text-red-500/70 leading-relaxed font-bold">
                            <li>• Position losses reach 2x credit received (Maximum Stop)</li>
                            <li>• Stock breaches short strike with less than 21 DTE</li>
                            <li>• Earnings date moves into expiration window</li>
                            <li>• VIX spikes above 35 (Gap risk becomes catastrophic)</li>
                        </ul>
                    </Card>
                </div>
            </StandardSection>

            {/* Asset Selection */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                 <SectionHeader label="Playbook" title="Iron Condors on Different Underlyings" align="center" className="mb-20" />
                 
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto mb-32">
                    <div className="space-y-8">
                         <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Best Underlyings for Iron Condors:</h4>
                         <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Ticker</TableHead>
                                        <TableHead>Why It Works</TableHead>
                                        <TableHead>Width</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { t: "SPY", w: "Low vol, predictable range, max liquidity", d: "$5-$10 wide" },
                                        { t: "QQQ", w: "Tech ETF, higher vol = more premium", d: "$5-$10 wide" },
                                        { t: "SPX", w: "European settlement, tax advantages (60/40)", d: "$25-$50 wide", tc: "text-brand-500 font-bold" },
                                        { t: "AAPL", w: "Range-bound post-earnings, liquid", d: "$5 wide" },
                                        { t: "MSFT", w: "Consistent range holder, predictable", d: "$5 wide" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Ticker" className={`text-white font-black italic uppercase tracking-wider ${row.tc || ''}`}>{row.t}</TableCell>
                                            <TableCell label="Reason" className="text-gray-400 text-xs">{row.w}</TableCell>
                                            <TableCell label="Width" className="text-gray-500 text-[10px] font-bold uppercase">{row.d}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                         </Card>
                    </div>
                    <div className="space-y-8">
                         <h4 className="text-red-500 font-black uppercase tracking-widest text-sm italic">Underlyings to AVOID:</h4>
                         <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "TSLA", r: "Too volatile — gaps through strikes regularly" },
                                { t: "NVDA", r: "AI-driven moves too large and unpredictable" },
                                { t: "COIN", r: "Crypto-correlated — extreme overnight moves" },
                                { t: "Pre-Earnings", r: "IV crush creates massive gap risk on any beat/miss" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-xl bg-red-500/[0.02] border border-red-500/10">
                                    <FiAlertTriangle className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h5 className="text-white font-bold text-sm mb-1">{item.t}</h5>
                                        <p className="text-gray-500 text-xs leading-relaxed">{item.r}</p>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                 </div>

                 {/* SPX vs SPY */}
                 <div className="max-w-4xl mx-auto mb-32">
                     <SectionHeader label="Advanced" title="SPX Iron Condors — Advanced Strategy" align="center" className="mb-12" />
                     <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                         <Table>
                             <TableHeader>
                                 <TableRow>
                                     <TableHead>Feature</TableHead>
                                     <TableHead>SPY Condors</TableHead>
                                     <TableHead className="text-brand-500">SPX Condors</TableHead>
                                 </TableRow>
                             </TableHeader>
                             <TableBody>
                                 {[
                                     { f: "Settlement", s: "American style (can be assigned early)", x: "European style (no early assignment)" },
                                     { f: "Tax Treatment", s: "Short-term gains", x: "60/40 Long/Short (Section 1256)", xc: "text-green-400 font-bold" },
                                     { f: "Position Size", s: "Standard", x: "10x larger per contract" },
                                     { f: "Ideal For", s: "Beginners, smaller accounts", x: "Advanced traders, tax efficiency" }
                                 ].map((row, i) => (
                                     <TableRow key={i}>
                                         <TableCell label="Feature" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                         <TableCell label="SPY" className="text-gray-400 text-xs">{row.s}</TableCell>
                                         <TableCell label="SPX" className={`text-xs ${row.xc || 'text-brand-400'}`}>{row.x}</TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                     </Card>
                     <p className="text-center text-gray-500 italic mt-8 text-sm">"The Section 1256 tax benefit alone makes SPX condors significantly more profitable on an after-tax basis for traders in higher tax brackets."</p>
                 </div>
            </StandardSection>

            {/* Greeks */}
            <StandardSection variant="default" divider="top" spacing="lg">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-8">
                         <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The Greeks — Understanding Your Condor</h2>
                         <div className="space-y-6">
                            {[
                                { g: "Delta", d: "Near zero at entry — you're not making a directional bet. Monitor daily; if delta grows, a side is threatened." },
                                { g: "Theta", d: "Positive — you earn money every day the stock stays in range. Accelerates as expiry approaches.", c: "text-brand-500" },
                                { g: "Vega", d: "Negative — rising IV hurts your position short-term. Enter when IV is already high (IV Rank 40%+)." },
                                { g: "Gamma", d: "DANGEROUS near expiration. This is precisely why you close at 21 DTE to eliminate spikes.", c: "text-red-500 font-black italic" }
                            ].map((greek, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <span className={`font-black uppercase tracking-widest text-[10px] ${greek.c || 'text-white'}`}>{greek.g}</span>
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed font-bold uppercase tracking-wider">{greek.d}</p>
                                </div>
                            ))}
                         </div>
                    </div>
                    <div className="space-y-12">
                         <SectionHeader label="System" title="Iron Condor Income Ladder" align="left" className="mb-0" />
                         <div className="space-y-4">
                             {[
                                 { s: "$5,000", i: "$150-$300/mo", d: "1-2 SPY condors, $5-wide spreads" },
                                 { s: "$15,000", i: "$500-$900/mo", d: "Mix of SPY, QQQ, individual stocks" },
                                 { s: "$30,000", i: "$1,200-$2,000/mo", d: "Diversified across 4-5 sectors" },
                                 { s: "$75,000+", i: "$3,000-$5,500/mo", d: "SPX condors + individual stocks", tc: "text-brand-500" }
                             ].map((step, i) => (
                                 <Card key={i} variant="glass" className="p-6 border-white/5 bg-gray-950/40 flex justify-between items-center">
                                     <div>
                                         <h5 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{step.s} Account</h5>
                                         <p className="text-gray-300 text-xs">{step.d}</p>
                                     </div>
                                     <div className="text-right">
                                         <p className={`font-black text-sm italic ${step.tc || 'text-white'}`}>{step.i}</p>
                                     </div>
                                 </Card>
                             ))}
                         </div>
                         <p className="text-gray-600 text-[10px] uppercase font-bold italic">Targets assume consistent execution and ~70% win rate. Results vary by market condition.</p>
                    </div>
                 </div>

                 {/* Common Mistakes */}
                 <SectionHeader label="Pitfalls" title="Common Iron Condor Mistakes" align="center" className="mb-20" />
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {[
                        { t: "Entering when IV Rank < 25%", d: "Low IV = luxury risk for tiny credit. Always wait for IV Rank > 40%." },
                        { t: "Holding Through Earnings", d: "Single earnings gap destroys entire spread in seconds. Always exit before." },
                        { t: "No Stop Loss Plan", d: "Don't 'hold and hope' winners into losers. Pre-define stops at 2x credit." },
                        { t: "Sizing Too Large", d: "One max-loss wipes out 3 winners. Never risk > 3% per condor." },
                        { t: "Ignoring 21 DTE Rule", d: "Gamma risk near expiry destroys winning trades. Close at 21 DTE, no exceptions." },
                        { t: "Sector Correlation", d: "5 tech condors = 1 massive correlated risk. Diversify sectors." },
                        { t: "Chasing Max Premium", d: "Low probability 50-delta strikes lose 45% of time. Stick to 25-30 delta." },
                        { t: "Poor Execution", d: "Always use limit orders for the entire spread. Never leg into IC positions." }
                    ].map((mistake, i) => (
                        <Card key={i} variant="glass" className="p-6 border-red-500/10 bg-gray-950/40 hover:border-brand-500/30 transition-all">
                             <h4 className="text-white font-black mb-3 uppercase tracking-widest text-[10px] italic flex items-center min-h-[30px]">
                                 <FiAlertTriangle className="text-red-500 mr-2" /> Mistake #{i + 1}: {mistake.t}
                             </h4>
                             <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                 {mistake.d}
                             </p>
                        </Card>
                    ))}
                 </div>
            </StandardSection>

            {/* Reading Signals */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="System" title="Reading OnlyOptions Iron Condor Signals" align="center" className="mb-12" />
                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto mb-20">
                    <Table>
                        <TableBody>
                            {[
                                { f: "Strategy", e: "Iron Condor (4-leg spread trade)", a: "text-white" },
                                { f: "Net Credit Target", e: "$2.85 - $3.20 total collection", a: "text-brand-500 font-black italic" },
                                { f: "Max Profit", e: "$302 per condor (if all 4 expire worthless)", a: "text-white" },
                                { f: "Max Loss", e: "$198 per condor (Width - Credit)", a: "text-red-400 font-bold" },
                                { f: "Close At", e: "$1.50 credit remaining (50% target)", a: "text-brand-400" },
                                { f: "Stop Loss", e: "Position worth $5.70+ (2x credit received)", a: "text-red-500" },
                                { f: "IV Rank", e: "52% (Premium is elevated)", a: "text-gray-400" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                    <TableCell label="Instruction" className={`text-sm ${row.a}`}>{row.e}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
                <div className="p-6 bg-brand-500/5 rounded-2xl border border-brand-500/20 text-center max-w-3xl mx-auto italic text-sm text-gray-400">
                    "Always use a limit order for the entire iron condor as a single spread order. Never leg into an iron condor by entering each leg separately — you risk getting filled on only part of the position."
                </div>
            </StandardSection>

            {/* Testimonials */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Success" title="Member Results — Iron Condors" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                     {[
                        { q: "SPY iron condors every month for 8 months straight. 7 wins, 1 loss. Net income: $4,200 on a $20K allocation. I finally feel like a professional trader.", a: "Michael T., Ohio" },
                        { q: "The 50% rule saved me. Closed at target; SPY gapped up the next day — would have been a max loss. Rules exist for a reason.", a: "Jennifer K., California" },
                        { q: "Started with 1 SPY condor on $7K account. Now running 4-5 condors on $35K account. $1,800/month consistent income. Iron condors changed everything.", a: "David R., Texas" }
                     ].map((t, i) => (
                        <Card key={i} variant="institutional" className="p-8 border-white/5 bg-gray-950/40">
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{t.q}"</p>
                            <span className="text-brand-500 font-black uppercase tracking-widest text-[10px]">— {t.a}</span>
                        </Card>
                     ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Summary" title="Quick Reference Cheat Sheet" align="center" className="mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <Card variant="glass" className="p-10 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-8 uppercase tracking-widest text-sm italic">IC Entry Checklist</h4>
                            <ul className="space-y-4">
                                {[
                                    "IV Rank above 40% (options expensive)",
                                    "Stock range-bound 2+ weeks",
                                    "No earnings within expiration window",
                                    "VIX between 15-25",
                                    "Collect min 30% of spread width",
                                    "Risk max 3% of account per trade",
                                    "30-45 DTE expiration preferred"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-10 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-8 uppercase tracking-widest text-sm italic">Management Rules</h4>
                            <ul className="space-y-4">
                                {[
                                    "Close at 50% of credit received — ALWAYS",
                                    "Close at 21 DTE — ALWAYS",
                                    "Stop loss at 2x credit received — ALWAYS",
                                    "Only roll once if threatened — NEVER double-roll",
                                    "Never hold through earnings announcement",
                                    "Exit immediately on VIX spike > 35"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-red-400 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    {/* FAQ */}
                    <div className="max-w-4xl mx-auto py-24">
                        <SectionHeader label="Knowledge Base" title="Iron Condors FAQ" align="center" className="mb-20" />
                        <div className="space-y-4">
                            {[
                                { q: "Why is the Iron Condor better than a single credit spread?", a: "An Iron Condor collects more total premium without increasing your margin requirement (since only one side can be at risk at a time). This effectively doubles your potential income on the same collateral." },
                                { q: "What should I do if the market gaps through my strikes overnight?", a: "This is the primary risk of Iron Condors. If it gaps through, the trade is dead. Accept the max loss and move on. Never 'average down' or add to a losing four-legged position." },
                                { q: "Is the Iron Condor a 'neutral' strategy?", a: "Yes, but it's specifically a 'low volatility' play. You are betting that the market will move less than the options are currently pricing in." },
                                { q: "Why close at 21 DTE even if the trade is winning?", a: "Gamma risk. As expiration approaches, even small moves in the stock cause huge swings in the option price. Closing at 21 DTE harvests the majority of the theta decay while avoiding the 'gamma explosion' of the final week." }
                            ].map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>

                    {/* Internal Links Grid */}
                    <div className="max-w-6xl mx-auto py-20 border-t border-white/5 text-center">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Related Strategy Guides</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                { n: "Credit Spreads", p: "/strategies/credit-spreads" },
                                { n: "Butterfly Spreads", p: "/strategies/butterfly-spreads" },
                                { n: "Calendar Spreads", p: "/strategies/calendar-spreads" },
                                { n: "Ratio Spreads", p: "/strategies/ratio-spreads" },
                                { n: "Options Greeks", p: "/options-greeks-explained" },
                                { n: "Implied Volatility", p: "/understanding-implied-volatility" },
                                { n: "Position Sizing", p: "/position-sizing-guide-options" },
                                { n: "Performance", p: "/performance" }
                            ].map((link, i) => (
                                <Link key={i} to={link.p} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all">
                                    {link.n}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="pt-20 border-t border-white/5 text-center text-[10px] text-gray-600 space-y-4">
                        <p className="font-black uppercase tracking-[0.3em]">DISCLAIMER</p>
                        <p className="max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                            Options trading involves substantial risk of loss. Iron condors carry defined but real risk of maximum loss. OnlyOptions signals are for educational purposes only. Past performance does not guarantee future results. Never trade with capital you cannot afford to lose.
                        </p>
                    </div>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA 
                   title="Ready to Start Collecting Premium?"
                   subtitle={<>Join OnlyOptions for pre-calculated signals:<br/>✅ Strikes Pre-Selected ✅ Credit Targets Set ✅ Profit/Stop Levels Defined ✅ Calendar Verified</>}
                />
            </div>
        </div>
    );
};

export default IronCondorStrategy;
