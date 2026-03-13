import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap, FiClock } from 'react-icons/fi';
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

const CalendarSpreadStrategy = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Calendar Spreads Deep Dive Guide | Master the Art of Selling Time</title>
                <meta name="description" content="Complete Calendar Spreads Strategy Guide. Master the Art of Selling Time. Profit from the difference in how fast two options decay over time." />
                <link rel="canonical" href="https://onlyoptions.us/calendar-spread-strategy" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Strategy Guide #12 of 30"
                    title={<>Calendar Spreads <span className="text-brand-500">—</span> Deep Dive Guide</>}
                    description="Master the Art of Selling Time"
                    align="center"
                    className="mb-12"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
                    {[
                        { label: "Win Rate", value: "68.4%" },
                        { label: "Avg Winner", value: "+62%" },
                        { label: "Front Month DTE", value: "30-45" },
                        { label: "Best Entry Condition", value: "Low IV" },
                        { label: "Back/Front DTE Ratio", value: "2x" }
                    ].map((stat, i) => (
                        <Card key={i} variant="glass" className="p-6 text-center border-white/5 bg-gray-950/40 hover:border-brand-500/30 transition-all">
                            <h4 className="text-brand-500 font-black mb-2 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </Card>
                    ))}
                </div>

                {/* What is a Calendar Spread */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What Is a Calendar Spread?</h2>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                             <p>
                                A calendar spread (also called a time spread or horizontal spread) involves selling a near-term option and buying a longer-dated option at the same strike price. You profit from the difference in how fast the two options decay over time.
                             </p>
                             <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl mt-6">
                                 <h4 className="flex items-center gap-2 text-brand-500 font-bold mb-2">
                                     <FiZap className="w-5 h-5 shrink-0" /> The Core Insight:
                                 </h4>
                                 <p className="text-gray-300 m-0">
                                    Near-term options lose value faster than long-term options. By selling the fast-decaying near-term option and owning the slower-decaying long-term option, you pocket the difference as profit — as long as the stock stays near your strike.
                                 </p>
                             </div>
                        </div>
                    </div>
                    
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Component</TableHead>
                                    <TableHead>Action</TableHead>
                                    <TableHead>Expiration</TableHead>
                                    <TableHead>Purpose</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { c: "Front-month option", a: "SELL (short)", e: "Near-term (30-45 DTE)", p: "Collect fast theta decay", co: "text-red-400 font-bold" },
                                    { c: "Back-month option", a: "BUY (long)", e: "Longer-term (60-90 DTE)", p: "Slower decay, provides hedge", co: "text-green-500 font-bold" },
                                    { c: "Net position", a: "Debit spread", e: "Two different expirations", p: "Profit from theta differential", co: "text-white font-bold" },
                                    { c: "Max profit", a: "At expiration of front month", e: "Stock at exactly the strike", p: "Both at-the-money = maximum value", co: "text-brand-500 font-bold" },
                                    { c: "Max loss", a: "Net debit paid", e: "If stock moves far from strike", p: "Both options lose value together", co: "text-gray-400" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Component" className="text-gray-300 text-xs font-bold uppercase tracking-wider">{row.c}</TableCell>
                                        <TableCell label="Action" className={`text-xs ${row.co || 'text-gray-400'}`}>{row.a}</TableCell>
                                        <TableCell label="Expiration" className="text-gray-400 text-xs">{row.e}</TableCell>
                                        <TableCell label="Purpose" className="text-gray-500 text-xs">{row.p}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* The Theta Engine */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Mechanics" title="The Theta Engine — Why Calendar Spreads Work" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    Everything in calendar spreads comes down to one concept: theta decay is not linear. Near-term options decay much faster than long-term options, especially in the final 30-45 days before expiration.
                </p>

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-16 max-w-5xl mx-auto">
                    <div className="p-6 bg-white/5 border-b border-white/5">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Theta Decay Rate Comparison</h4>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Option DTE</TableHead>
                                <TableHead>Daily Theta Decay</TableHead>
                                <TableHead>Decay Speed</TableHead>
                                <TableHead>Role in Calendar</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { d: "7 DTE", t: "Very fast (-$0.08-$0.15/day)", s: "Explosive", r: "Never use — too dangerous for front month", c: "text-red-500" },
                                { d: "21 DTE", t: "Fast (-$0.05-$0.09/day)", s: "Accelerating", r: "Aggressive front month (riskier)", c: "text-yellow-500" },
                                { d: "30 DTE", t: "Moderate-fast (-$0.04-$0.07/day)", s: "Sweet spot begins", r: "OnlyOptions default front month", c: "text-brand-500 font-bold" },
                                { d: "45 DTE", t: "Moderate (-$0.03-$0.05/day)", s: "Good theta/risk balance", r: "Conservative front month", c: "text-brand-400" },
                                { d: "60 DTE", t: "Slow (-$0.02-$0.04/day)", s: "Back month zone", r: "OnlyOptions back month", c: "text-green-400" },
                                { d: "90 DTE", t: "Slow (-$0.015-$0.03/day)", s: "Slow decay", r: "Long-dated back month", c: "text-gray-400" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Option DTE" className={`text-xs font-bold ${row.c || 'text-white'}`}>{row.d}</TableCell>
                                    <TableCell label="Daily Theta" className="text-gray-300 text-xs">{row.t}</TableCell>
                                    <TableCell label="Decay Speed" className="text-gray-400 text-xs">{row.s}</TableCell>
                                    <TableCell label="Role" className="text-gray-500 text-xs">{row.r}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-start gap-4">
                        <FiClock className="w-8 h-8 text-brand-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="text-brand-500 font-black uppercase tracking-widest text-sm mb-2">Key Insight:</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                The 30 DTE front-month option decays at roughly 2x the speed of the 60 DTE back-month option. This theta differential is the engine that powers calendar spread profits.
                            </p>
                        </div>
                    </div>

                    <Card variant="glass" className="p-6 border-white/5 bg-gray-950/40">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs italic mb-4">Visual: Theta Decay Comparison</h4>
                        <div className="font-mono text-xs text-gray-400 space-y-4">
                            <div>
                                <div className="text-green-400 mb-1">60 DTE option:</div>
                                <div className="flex items-center gap-3">
                                    <div className="h-4 bg-green-500/20 border-l-4 border-green-500 w-1/2"></div>
                                    <span className="text-[10px] uppercase text-gray-500 tracking-wider">slow decay → loses $0.025/day</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-red-400 mb-1">30 DTE option:</div>
                                <div className="flex items-center gap-3">
                                    <div className="h-4 bg-red-500/20 border-l-4 border-red-500 w-full"></div>
                                    <span className="text-[10px] uppercase text-gray-500 tracking-wider">fast decay → loses $0.055/day</span>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/5 text-brand-400 font-bold">
                                Daily theta advantage: +$0.030/day in your favour by being long 60 DTE, short 30 DTE
                            </div>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* The 4 Types */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Variants" title="The 4 Types of Calendar Spreads" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { 
                            t: "Type 1 — Neutral Calendar Spread (ATM)", 
                            d: "The most common type. Sell and buy the ATM option at the same strike. Profits when the stock pins near the strike at front-month expiration — ideal for range-bound stocks.",
                            l: [
                                "Best when: Stock is pinned to a price level with no catalyst expected",
                                "Ideal environment: Low IV Rank (below 30%) — calendars thrive when IV is cheap",
                                "Strike selection: ATM or within 2% of current price",
                                "Max profit: Stock closes exactly at the strike on front-month expiration"
                            ]
                        },
                        { 
                            t: "Type 2 — Bullish Calendar Spread", 
                            d: "Sell and buy a call option above the current price (OTM call calendar). Profits if the stock rises moderately to the call strike by front-month expiration.",
                            l: [
                                "Best when: Mild bullish bias, stock expected to drift up slowly",
                                "Strike: 3-5% above current price (the target you expect stock to reach)",
                                "Advantage over buying calls: Much cheaper because you're selling the near-term call",
                                "Risk: If stock surges past the strike fast, both calls go deep ITM and the spread collapses"
                            ]
                        },
                        { 
                            t: "Type 3 — Bearish Calendar Spread", 
                            d: "Sell and buy a put option below the current price (OTM put calendar). Profits if the stock drifts down to the put strike by front-month expiration.",
                            l: [
                                "Best when: Mild bearish bias, stock expected to drift lower slowly",
                                "Strike: 3-5% below current price",
                                "Risk: Fast crashes move through the strike too quickly — the spread doesn't profit on violent drops"
                            ]
                        },
                        { 
                            t: "Type 4 — Double Calendar Spread", 
                            d: "Place two calendar spreads simultaneously — one OTM call calendar AND one OTM put calendar. Creates a wider profit zone similar to an iron condor but built from time spreads.",
                            l: [
                                "Best when: Expecting a moderate move in either direction, not sure which",
                                "Advantage: Wider profit zone than a single calendar",
                                "Cost: 2x the debit of a single calendar",
                                "OnlyOptions uses this before events where IV term structure is steep"
                            ]
                        }
                    ].map((type, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                             <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic text-brand-500">{type.t}</h4>
                             <p className="text-gray-400 text-sm leading-relaxed mb-6">{type.d}</p>
                             <ul className="space-y-3">
                                {type.l.map((item, j) => (
                                    <li key={j} className="flex gap-3 text-[13px] text-gray-300">
                                        <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span> {item}
                                    </li>
                                ))}
                             </ul>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* When to Trade */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Conditions" title="When to Trade Calendar Spreads" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    Calendar spreads perform best in specific market conditions. Getting the entry timing right is the single biggest factor in profitability.
                </p>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h3 className="text-2xl font-black italic uppercase text-white mb-6">The IV Term Structure — Your Most Important Tool</h3>
                        <p className="text-gray-400 mb-8">
                            Calendar spreads profit when the near-term IV is HIGH relative to long-term IV (contango), or when both converge after entry. They lose when near-term IV is LOW (backwardation).
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>IV Term Structure</TableHead>
                                        <TableHead>Condition</TableHead>
                                        <TableHead>Calendar Spread Performance</TableHead>
                                        <TableHead>OnlyOptions Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "Contango (normal)", c: "Near-term IV < Long-term IV", p: "Neutral — depends on theta", a: "Acceptable entry", ac: "text-white" },
                                        { s: "Steep contango", c: "Near-term IV much lower than back", p: "Poor — selling cheap front, buying expensive back", a: "AVOID", ac: "text-red-500 font-bold" },
                                        { s: "Flat term structure", c: "Near-term IV ≈ Long-term IV", p: "Good — fair pricing both legs", a: "Good entry", ac: "text-green-400" },
                                        { s: "Backwardation", c: "Near-term IV > Long-term IV", p: "EXCELLENT — selling expensive front month", a: "BEST ENTRY — signal issued", ac: "text-brand-500 font-bold" },
                                        { s: "Post-earnings backwardation", c: "Earnings just passed, front still elevated", p: "Excellent near-term opportunity", a: "Prime calendar signal", ac: "text-brand-500 font-bold" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Term Structure" className="text-white text-xs font-bold">{row.s}</TableCell>
                                            <TableCell label="Condition" className="text-gray-400 text-xs">{row.c}</TableCell>
                                            <TableCell label="Performance" className="text-gray-300 text-xs">{row.p}</TableCell>
                                            <TableCell label="Action" className={`text-xs ${row.ac}`}>{row.a}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div>
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 h-full">
                            <h4 className="flex items-center gap-3 text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">
                                <FiCheck className="w-5 h-5 shrink-0" />
                                OnlyOptions Calendar Spread Entry Checklist (All Must Be Met)
                            </h4>
                            <ul className="space-y-5">
                                {[
                                    "IV Rank below 35% — low IV environment favors buying the back month cheaply",
                                    "Stock in a clear price range for 2+ weeks with no catalyst in sight",
                                    "IV term structure is flat or in slight backwardation (near-term IV >= back-month IV)",
                                    "Stock trading within 2% of your chosen strike (ATM calendar) OR drifting toward target (directional)",
                                    "No earnings within the front-month expiration window",
                                    "VIX between 12-22 — extreme VIX in either direction hurts calendar performance"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-[13px] text-gray-300 leading-relaxed">
                                        <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <FiCheck className="w-3 h-3 text-brand-500" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Complete Setup Guide */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="Complete Setup Guide — Step by Step" align="center" className="mb-20" />
                
                <div className="space-y-16 max-w-5xl mx-auto">
                    {/* Step 1 */}
                    <div className="flex flex-col xl:flex-row gap-8 items-start">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 font-black text-2xl">1</div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-white mb-4">Choose Your Underlying</h3>
                            <p className="text-gray-400 mb-6">The best underlyings for calendar spreads have two properties: they tend to trade in a range (not strong trends), and they have enough options liquidity for tight bid-ask spreads on both expirations.</p>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5 w-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Stock/ETF</TableHead>
                                            <TableHead>Why It Works for Calendars</TableHead>
                                            <TableHead>Typical Debit</TableHead>
                                            <TableHead>Account Needed</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { s: "SPY", w: "Most liquid, tight spreads, predictable range", d: "$1.20-$2.50", a: "$5,000+" },
                                            { s: "QQQ", w: "Tech-heavy, range-bound between earnings seasons", d: "$1.50-$3.00", a: "$5,000+" },
                                            { s: "AAPL", w: "Post-earnings settling, frequent price pins", d: "$1.80-$3.50", a: "$8,000+" },
                                            { s: "MSFT", w: "Consistent range-holder between catalysts", d: "$2.00-$4.00", a: "$10,000+" },
                                            { s: "SPX", w: "Large premiums, tax efficient (Section 1256)", d: "$15-$40", a: "$30,000+" },
                                            { s: "META", w: "Post-earnings settling, strong support levels", d: "$4.00-$8.00", a: "$15,000+" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Stock/ETF" className="text-brand-500 font-bold text-xs">{row.s}</TableCell>
                                                <TableCell label="Why" className="text-gray-400 text-xs">{row.w}</TableCell>
                                                <TableCell label="Debit" className="text-white text-xs">{row.d}</TableCell>
                                                <TableCell label="Account" className="text-gray-500 text-xs">{row.a}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col xl:flex-row gap-8 items-start">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 font-black text-2xl">2</div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-white mb-4">Strike Selection</h3>
                            <p className="text-gray-400 mb-6">Your strike selection determines where your max profit point is. Choose based on where you expect the stock to be at front-month expiration.</p>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5 w-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Your View</TableHead>
                                            <TableHead>Strike Choice</TableHead>
                                            <TableHead>Entry Condition</TableHead>
                                            <TableHead>Example</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { v: "Stock stays flat", s: "ATM — current price", e: "Stock pinned to level", ex: "SPY at $450 → sell/buy $450 calendar" },
                                            { v: "Stock drifts slightly higher", s: "OTM call — 3-5% above", e: "Mild bullish drift expected", ex: "SPY at $450 → $462 call calendar" },
                                            { v: "Stock drifts slightly lower", s: "OTM put — 3-5% below", e: "Mild bearish drift expected", ex: "SPY at $450 → $438 put calendar" },
                                            { v: "Uncertain, want wider zone", s: "Double calendar — both sides", e: "Expecting moderate move either way", ex: "Sell $462C + $438P calendars simultaneously" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="View" className="text-white text-xs font-bold">{row.v}</TableCell>
                                                <TableCell label="Strike" className="text-brand-400 text-xs font-bold">{row.s}</TableCell>
                                                <TableCell label="Condition" className="text-gray-400 text-xs">{row.e}</TableCell>
                                                <TableCell label="Example" className="text-gray-500 text-xs">{row.ex}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col xl:flex-row gap-8 items-start">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 font-black text-2xl">3</div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-white mb-4">Choose Expirations</h3>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5 w-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Leg</TableHead>
                                            <TableHead>Target DTE</TableHead>
                                            <TableHead>Reasoning</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { l: "Front month (sell)", t: "30-45 DTE", r: "Fastest theta decay zone, manageable gamma risk", c: "text-white" },
                                            { l: "Back month (buy)", t: "60-90 DTE", r: "Slow decay, gives you coverage through front-month expiration", c: "text-white" },
                                            { l: "DTE Ratio", t: "Approximately 2:1 back/front", r: "Back month should be roughly 2x the front month DTE", c: "text-brand-500 font-bold" },
                                            { l: "Avoid", t: "Weekly front months (under 14 DTE)", r: "Too much gamma risk, spread blows up on any move", c: "text-red-400" },
                                            { l: "Avoid", t: "LEAPS as back month (over 120 DTE)", r: "Too expensive, vega exposure becomes dominant", c: "text-red-400" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Leg" className="text-gray-400 text-xs font-bold uppercase tracking-wider">{row.l}</TableCell>
                                                <TableCell label="DTE" className={`text-xs ${row.c}`}>{row.t}</TableCell>
                                                <TableCell label="Reasoning" className="text-gray-400 text-xs">{row.r}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col xl:flex-row gap-8 items-start">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 font-black text-2xl">4</div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-white mb-4">Calculate Fair Value and Entry Price</h3>
                            <p className="text-gray-400 mb-6">A calendar spread should always be entered as a debit (you pay to put it on). The debit you pay is your maximum possible loss.</p>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5 w-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Calculation</TableHead>
                                            <TableHead>Formula</TableHead>
                                            <TableHead>Example (SPY $450 Calendar)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { c: "Front month premium", f: "Look up ask price", ex: "Sell $450 call, 35 DTE → $5.80 credit" },
                                            { c: "Back month premium", f: "Look up ask price", ex: "Buy $450 call, 70 DTE → $8.40 debit" },
                                            { c: "Net debit", f: "Back - Front", ex: "$8.40 - $5.80 = $2.60 debit per spread", co: "text-brand-500 font-bold" },
                                            { c: "Max loss", f: "Net debit paid", ex: "$2.60 per spread ($260 per contract)", co: "text-red-400 font-bold" },
                                            { c: "Max profit (theoretical)", f: "When front expires ATM", ex: "$4.00-$5.00 (back month retains most value)" },
                                            { c: "Target return", f: "50-80% of max theoretical profit", ex: "Exit at $4.00-$4.50 spread value = +54-73%", co: "text-green-400 font-bold" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Calculation" className="text-white text-xs font-bold">{row.c}</TableCell>
                                                <TableCell label="Formula" className="text-gray-400 text-xs">{row.f}</TableCell>
                                                <TableCell label="Example" className={`text-xs ${row.co || 'text-gray-300'}`}>{row.ex}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Real Trade Examples */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Case Studies" title="Real Trade Examples" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    {/* Ex 1 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 1 — SPY ATM Calendar (September 2023)</h4>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Field</TableHead>
                                    <TableHead>Detail</TableHead>
                                    <TableHead>Notes</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { f: "Date", d: "September 5, 2023", n: "SPY range-bound for 3 weeks" },
                                    { f: "SPY Price", d: "$448", n: "Stock pinned near $448-$452 all month" },
                                    { f: "Front Month Sold", d: "$448 call, Sep 29 expiry @ $5.40", n: "24 DTE — fast theta approaching" },
                                    { f: "Back Month Bought", d: "$448 call, Oct 27 expiry @ $8.10", n: "52 DTE — slower decay" },
                                    { f: "Net Debit Paid", d: "$2.70 per spread ($270 per contract)", n: "Maximum possible loss" },
                                    { f: "IV Rank at Entry", d: "21% — low IV, ideal for calendars", n: "Cheap back month" },
                                    { f: "Max Profit Zone", d: "$445-$452 at Sep 29 expiration", n: "Stock needs to stay in range" },
                                    { f: "SPY at Sep 29 Expiry", d: "$449.80 — pinned perfectly", n: "Inside profit zone" },
                                    { f: "Front Month Value", d: "$0.30 (nearly expired)", n: "Almost fully decayed" },
                                    { f: "Back Month Value", d: "$6.20 (still has 28 DTE)", n: "Retained most premium" },
                                    { f: "Spread Value at Close", d: "$5.90 ($590 per contract)", n: "Sell to close", c: "text-brand-500 font-bold" },
                                    { f: "Profit", d: "+$3.20 per spread = +$320 per contract", n: "Return: +118% on $270 invested", c: "text-green-500 font-bold" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-white'}`}>{row.d}</TableCell>
                                        <TableCell label="Notes" className="text-gray-400 text-xs hidden sm:table-cell">{row.n}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    {/* Ex 2 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 2 — META Post-Earnings Calendar (Nov 2023)</h4>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Field</TableHead>
                                    <TableHead>Detail</TableHead>
                                    <TableHead>Notes</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { f: "Date", d: "November 2, 2023", n: "META reported earnings Oct 25, stock settled" },
                                    { f: "META Price", d: "$338", n: "Stock stable after big earnings move" },
                                    { f: "Setup", d: "Post-earnings calendars are ideal", n: "IV term structure flattened perfectly" },
                                    { f: "Front Month Sold", d: "$338 call, Nov 17 expiry @ $6.80", n: "15 DTE — fast decay" },
                                    { f: "Back Month Bought", d: "$338 call, Dec 15 expiry @ $10.40", n: "43 DTE" },
                                    { f: "Net Debit", d: "$3.60 per spread", n: "Maximum loss" },
                                    { f: "IV Term Structure", d: "Near-term: 38%  Back-month: 36%", n: "Nearly flat — excellent calendar condition" },
                                    { f: "Outcome", d: "META traded $334-$342 for 2 weeks", n: "Stock pinned near strike" },
                                    { f: "Exit Date", d: "November 14 (3 days before expiry)", n: "Exited before gamma risk spiked" },
                                    { f: "Spread Value at Exit", d: "$5.80", n: "Front nearly gone, back still valuable", c: "text-brand-500 font-bold" },
                                    { f: "Profit", d: "+$2.20 per spread = +61%", n: "Booked in 12 days", c: "text-green-500 font-bold" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-white'}`}>{row.d}</TableCell>
                                        <TableCell label="Notes" className="text-gray-400 text-xs hidden sm:table-cell">{row.n}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* Greeks Deep Dive */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <SectionHeader label="Analysis" title="Greeks Deep Dive: Vega" align="left" className="mb-10" />
                        <h4 className="text-white font-bold text-lg mb-4">Vega — The Dominant Greek in Calendar Spreads</h4>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Unlike most options strategies, vega is MORE important than theta in calendar spreads. Here's why:
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            When you buy a calendar spread, you are <span className="text-brand-400 font-bold">NET LONG vega</span>. The back-month option has more vega than the front-month option. This means:
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-sm text-gray-300">
                                <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span> IV rises across the board → your calendar GAINS value (good)
                            </li>
                            <li className="flex gap-3 text-sm text-gray-300">
                                <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span> IV drops across the board → your calendar LOSES value (bad)
                            </li>
                            <li className="flex gap-3 text-sm text-gray-300">
                                <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span> This is why low IV entry is critical — you buy vega cheap and sell it expensive later
                            </li>
                        </ul>
                        
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">The Vega Rule for Calendar Spreads</h4>
                            <ul className="space-y-4">
                                {[
                                    "Enter when IV Rank is below 35% (buying cheap vega in the back month)",
                                    "Exit when IV Rank rises above 50% OR reaches your profit target",
                                    "A VIX spike HELPS your calendar in the short term — don't panic out",
                                    "A sustained IV collapse hurts your calendar — this is your main risk",
                                    "Post-earnings calendars work because IV collapses in front month but stays elevated in back month"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <SectionHeader label="Mechanics" title="Theta & Gamma" align="left" className="mb-8" />
                            <h4 className="text-white font-bold text-lg mb-4">Theta — Your Daily Earner</h4>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Your net theta is positive (you earn money each day the stock stays near your strike). But the amount changes dramatically based on how close the front month is to expiration:
                            </p>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-8">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Days Until Front Expiry</TableHead>
                                            <TableHead>Daily Theta Earned</TableHead>
                                            <TableHead>Position Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { d: "30+ DTE", t: "$10-$20/day per contract", s: "Slow but steady income phase", c: "text-gray-400" },
                                            { d: "21 DTE", t: "$20-$35/day per contract", s: "Theta accelerating — sweet zone", c: "text-green-400" },
                                            { d: "14 DTE", t: "$35-$55/day per contract", s: "High theta — monitoring closely", c: "text-yellow-500" },
                                            { d: "7 DTE", t: "$50-$90/day per contract", s: "High theta BUT high gamma risk", c: "text-orange-500" },
                                            { d: "3 DTE", t: "$80-$150/day per contract", s: "Extreme gamma risk — CLOSE or ROLL NOW", c: "text-red-500 font-bold" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="DTE" className="text-white text-xs font-bold">{row.d}</TableCell>
                                                <TableCell label="Theta" className={`text-xs ${row.c}`}>{row.t}</TableCell>
                                                <TableCell label="Status" className="text-gray-400 text-xs">{row.s}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                        
                        <div>
                            <h4 className="text-red-400 font-bold text-lg mb-4">Gamma — Your Main Risk</h4>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Gamma is the rate of change of delta. Near expiration, the front-month option has extreme gamma — small moves in the stock create large, unpredictable changes in the option's price.
                            </p>
                            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                                <h4 className="text-red-500 font-black uppercase tracking-widest text-sm italic mb-4">Gamma Risk Management Rule — Critical</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Never hold a calendar spread into the final 5 days of the front-month expiration",
                                        "At 7 DTE on the front month: either close the entire spread OR roll the front month",
                                        "A 2-3% stock move in the last week can turn a profitable calendar into a max loss",
                                        "Rolling: buy back the front month, sell a new front month one expiration further out",
                                        "Rolling resets your theta clock and eliminates gamma risk immediately"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-red-100/80">
                                            <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Active Management */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="System" title="Active Management — 4 Scenarios" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Scenario 1 */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h3 className="text-xl font-bold text-green-400 mb-4">Scenario 1: Stock Stays Near Strike (Best Case)</h3>
                        <p className="text-gray-400 mb-6 text-sm">
                            The ideal outcome. The front month decays rapidly while the back month retains most of its value. The spread widens in your favour every day.
                        </p>
                        <ol className="space-y-4 list-decimal list-inside text-gray-300 text-sm">
                            <li>Monitor daily — ensure stock stays within 3% of your strike</li>
                            <li><span className="text-brand-400 font-bold">At 7 DTE on front month: close the entire spread (take profits)</span></li>
                            <li>Target exit: when spread value = 1.5-2x your entry debit</li>
                            <li>Alternatively: roll the front month out one month to collect more premium</li>
                        </ol>
                    </Card>

                    {/* Scenario 2 */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h3 className="text-xl font-bold text-red-400 mb-4">Scenario 2: Stock Moves Away from Strike (Challenged)</h3>
                        <p className="text-gray-400 mb-6 text-sm">
                            The spread loses value when the stock moves away from your strike. Both options move together, reducing the theta differential.
                        </p>
                        <div className="overflow-x-auto -mx-8 px-8 sm:mx-0 sm:px-0">
                             <Table className="min-w-[400px]">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Stock Move</TableHead>
                                        <TableHead>Effect on Calendar</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { m: "Moves 2-3% from strike, 15+ DTE", e: "Spread value drops 20-35%", a: "Hold — stock may revert", c: "text-gray-400" },
                                        { m: "Moves 5%+ from strike, 15+ DTE", e: "Spread value drops 40-60%", a: "Close at pre-set stop loss", c: "text-red-400" },
                                        { m: "Moves 2-3% from strike, under 7 DTE", e: "Gamma explodes — rapid loss", a: "Close immediately", c: "text-red-500 font-bold" },
                                        { m: "Stock makes new trend move away", e: "Calendar structure broken", a: "Close — thesis is invalidated", c: "text-white" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Move" className="text-white text-[11px]">{row.m}</TableCell>
                                            <TableCell label="Effect" className="text-gray-400 text-[11px]">{row.e}</TableCell>
                                            <TableCell label="Action" className={`text-[11px] ${row.c}`}>{row.a}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Card>

                    {/* Scenario 3 */}
                    <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 lg:col-span-2">
                        <h3 className="text-xl font-bold text-brand-500 mb-4">Scenario 3: Rolling the Front Month</h3>
                        <p className="text-gray-300 mb-6">
                            When the front month is close to expiration (7-10 DTE) and you still have conviction the stock will stay near your strike, roll forward instead of closing.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <ol className="space-y-4 list-decimal list-inside text-gray-400 text-sm">
                                <li>Buy back the expiring front-month option (close it)</li>
                                <li>Sell a new front-month option in the next expiration at the same strike</li>
                                <li>Collect the new front-month premium</li>
                                <li>Your back-month option continues as-is</li>
                                <li className="text-white font-bold content-['5._'] before:inline-block before:w-4 before:-ml-4">Net effect: you've extended your theta collection window by 30 more days</li>
                            </ol>
                            <div className="p-4 bg-black/40 border border-brand-500/30 rounded-xl text-center text-sm text-brand-300 italic">
                                "Rolling is the heart of the calendar spread income strategy — you can roll a successful ATM calendar 3-4 times before the back month approaches expiration, multiplying your returns."
                            </div>
                        </div>
                    </Card>
                    
                    {/* Scenario 4 */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 lg:col-span-2">
                         <h3 className="text-xl font-bold text-white mb-4">Scenario 4: Converting to a Diagonal</h3>
                         <p className="text-gray-400 mb-6 text-sm">
                             If the stock has moved significantly, you can convert your calendar to a diagonal by rolling the front month to a different strike — closer to where the stock now trades.
                         </p>
                         <ul className="space-y-3">
                             {[
                                 "Original ATM calendar: sold $450 call, stock moves to $460",
                                 "Roll: buy back $450 call, sell new $460 call at the same expiration",
                                 "Result: now have a $450/$460 diagonal — still profitable if stock stays near $460",
                                 "This is how experienced traders rescue challenged calendars instead of taking a loss"
                             ].map((item, i) => (
                                 <li key={i} className="flex gap-3 text-sm text-gray-300">
                                     <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span> {item}
                                 </li>
                             ))}
                         </ul>
                    </Card>
                </div>
            </StandardSection>

             {/* Comparisons */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Analysis" title="Calendar Spreads vs. Competing Strategies" align="center" className="mb-20" />
                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto mb-16">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Strategy</TableHead>
                                <TableHead>Best Condition</TableHead>
                                <TableHead>Worst Condition</TableHead>
                                <TableHead>Cost</TableHead>
                                <TableHead>Max Return</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { s: "Calendar Spread", b: "Low IV, stock pinned to a level", w: "Stock trends strongly away from strike", c: "Low debit (1-3%)", r: "50-120% on debit", co: "text-brand-500 font-bold bg-brand-500/5" },
                                { s: "Iron Condor", b: "High IV, wide range", w: "Stock breaks out of range", c: "Credit collected", r: "Credit / margin", co: "" },
                                { s: "Credit Spread", b: "High IV, directional", w: "Stock reverses sharply", c: "Credit collected", r: "Credit / spread width", co: "" },
                                { s: "Long Straddle", b: "Low IV, big move expected", w: "Stock stays flat", c: "Higher debit", r: "Unlimited", co: "" },
                                { s: "Covered Call", b: "Neutral, own shares", w: "Stock surges past strike", c: "Requires shares", r: "Premium only", co: "" }
                            ].map((row, i) => (
                                <TableRow key={i} className={row.co ? "bg-white/[0.02]" : ""}>
                                    <TableCell label="Strategy" className={`text-xs font-bold uppercase tracking-wider ${row.co ? "text-brand-500" : "text-gray-300"}`}>{row.s}</TableCell>
                                    <TableCell label="Best Condition" className="text-gray-300 text-xs">{row.b}</TableCell>
                                    <TableCell label="Worst Condition" className="text-gray-400 text-xs">{row.w}</TableCell>
                                    <TableCell label="Cost" className="text-gray-400 text-xs">{row.c}</TableCell>
                                    <TableCell label="Max Return" className="text-gray-500 text-xs">{row.r}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
                <div className="max-w-4xl mx-auto p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl text-center">
                    <h4 className="text-brand-500 font-black uppercase tracking-widest text-sm mb-3">The Calendar Spread's Unique Edge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        It is the only strategy that directly profits from the difference in theta decay rates between expirations. It can be profitable in flat, slightly up, or slightly down markets — and it benefits from any rise in implied volatility after entry.
                    </p>
                </div>
            </StandardSection>

            {/* Reading Signals */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                 <SectionHeader label="Playbook" title="Reading OnlyOptions Calendar Spread Signals" align="center" className="mb-20" />
                 <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto">
                     <Table>
                         <TableHeader>
                             <TableRow>
                                 <TableHead>Signal Field</TableHead>
                                 <TableHead>Example</TableHead>
                                 <TableHead>What It Means / Action</TableHead>
                             </TableRow>
                         </TableHeader>
                         <TableBody>
                             {[
                                 { f: "Strategy", e: "ATM Calendar Spread", m: "Neutral calendar — stock near strike" },
                                 { f: "Underlying", e: "SPY", m: "The ETF or stock to trade" },
                                 { f: "Strike", e: "$450", m: "Both legs use this same strike" },
                                 { f: "Front Month (Sell)", e: "$450 call, Sep 29 expiry", m: "SELL this option — collect premium", c: "text-red-400 font-bold" },
                                 { f: "Back Month (Buy)", e: "$450 call, Oct 27 expiry", m: "BUY this option — slower decay", c: "text-green-400 font-bold" },
                                 { f: "Net Debit Target", e: "$2.40-$2.80", m: "What you pay to enter the spread", c: "text-white font-bold" },
                                 { f: "Entry Condition", e: "IV Rank: 19%, stock pinned $448-$452", m: "Why now is the right time" },
                                 { f: "Max Profit Zone", e: "$445-$455 at front expiry", m: "Where you need stock to be" },
                                 { f: "Exit Target", e: "$4.50 spread value (+67% on $2.70 debit)", m: "Close when this is reached", c: "text-brand-400" },
                                 { f: "Stop Loss", e: "$1.35 (50% of debit)", m: "Close if spread falls to this value", c: "text-red-400" },
                                 { f: "Roll Trigger", e: "Front month reaches 7 DTE", m: "Roll or close at this point", c: "text-yellow-500" },
                                 { f: "Earnings Check", e: "Clear — next earnings Nov 2", m: "No earnings risk this window" }
                             ].map((row, i) => (
                                 <TableRow key={i}>
                                     <TableCell label="Field" className="text-gray-400 text-xs font-bold uppercase tracking-wider whitespace-nowrap">{row.f}</TableCell>
                                     <TableCell label="Example" className={`text-xs ${row.c || 'text-white'}`}>{row.e}</TableCell>
                                     <TableCell label="Action" className="text-gray-500 text-xs">{row.m}</TableCell>
                                 </TableRow>
                             ))}
                         </TableBody>
                     </Table>
                 </Card>
            </StandardSection>

            {/* Testimonials */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Testimonials" title="Member Results — Calendar Spreads" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                     {[
                        { q: "SPY calendar spread every month for 5 months straight. Rolled 3 times on my best one. Turned a $270 debit into $1,840 over 90 days by rolling. Calendar spreads are the most underrated strategy on the platform.", a: "Tom W., Arizona — $1,570 net profit from rolling a single calendar" },
                        { q: "META post-earnings calendar — entered the day after earnings settled. Stock pinned perfectly for 2 weeks. +61% in 12 days on a $360 debit. OnlyOptions called the exact setup.", a: "Jennifer K., California — +$220 profit, 12-day hold" },
                        { q: "Double calendar on SPY during low VIX period. Iron condors weren't working because IV was too low. Double calendar made +88% while iron condors would have collected almost nothing.", a: "David R., Texas — Using the right strategy for the right environment" }
                     ].map((t, i) => (
                        <Card key={i} variant="institutional" className="p-6 border-white/5">
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{t.q}"</p>
                            <span className="text-brand-500 font-black uppercase tracking-widest text-[10px]">— {t.a}</span>
                        </Card>
                     ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Summary" title="Quick Reference Cheat Sheet" align="center" className="mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">Entry Checklist</h4>
                            <ul className="space-y-4">
                                {[
                                    "IV Rank below 35% — back month option is cheap",
                                    "Stock pinned to a clear level for 2+ weeks",
                                    "IV term structure flat or in backwardation (near >= back IV)",
                                    "No earnings within front-month expiration window",
                                    "Front month: 30-45 DTE",
                                    "Back month: 60-90 DTE (approximately 2x front month)",
                                    "Strike: ATM for neutral, 3-5% OTM for directional",
                                    "Net debit is less than 3% of underlying price"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">Management Rules</h4>
                            <ul className="space-y-4">
                                {[
                                    "Exit or roll when front month reaches 7 DTE — no exceptions",
                                    "Stop loss: close if spread loses 50% of debit paid",
                                    "Profit target: close when spread = 1.5-2x the debit paid",
                                    "Roll rule: only roll if you can collect a net credit",
                                    "Max rolls: 3 times before closing the back month too",
                                    "VIX spike: hold or add — rising IV helps long-vega position",
                                    "Strong trend away from strike: close immediately"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                                        <FiCheck className="text-gray-600 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 text-center text-xs text-gray-600 max-w-4xl mx-auto space-y-4">
                    <p className="font-bold uppercase tracking-widest">DISCLAIMER</p>
                    <p>Options trading involves substantial risk of loss. Calendar spreads can result in loss of the full debit paid. Rolling strategies may extend losses. OnlyOptions signals are for educational purposes only. Past performance does not guarantee future results. Always consult a qualified financial advisor before trading.</p>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto py-24">
                    <SectionHeader label="Knowledge Base" title="Calendar Spreads FAQ" align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "What's the best time to enter a calendar spread?", a: "When IV is relatively low (IV Rank < 35%) and the stock is pinned to a price level. You want to buy the long-dated option when it's cheap." },
                            { q: "Does a calendar spread profit more if the stock moves up or stays flat?", a: "It depends on which strike you choose. An ATM calendar profits most when the stock stays flat. A directional calendar (strike away from current price) profits most when the stock moves toward that strike." },
                            { q: "What happens if volatility spikes after I enter?", a: "A spike in Implied Volatility (IV) typically helps a calendar spread because you are 'Net Long Vega'. The long-dated option appreciates more than the short-dated one." },
                            { q: "Is it better to use calls or puts for neutral calendars?", a: "For neutral (ATM) calendars, calls and puts usually have similar performance. However, calls sometimes have better liquidity and slightly more favourable skew." }
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
                            { n: "Iron Condors", p: "/strategies/iron-condor" },
                            { n: "Covered Calls", p: "/strategies/covered-calls" },
                            { n: "Protective Puts", p: "/strategies/protective-puts" },
                            { n: "Options Greeks", p: "/options-greeks-explained" },
                            { n: "Implied Volatility", p: "/understanding-implied-volatility" },
                            { n: "Risk Management", p: "/options-risk-management" },
                            { n: "Performance", p: "/performance" }
                        ].map((link, i) => (
                            <Link key={i} to={link.p} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all">
                                {link.n}
                            </Link>
                        ))}
                    </div>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA 
                    title="Start Profiting from Time — Not Just Direction" 
                    subtitle={<>OnlyOptions calendar spread signals include everything you need:<br/>✅ Strike & both expirations pre-selected ✅ IV Rank verified ✅ Entry debit target specified<br/>✅ Profit target calculated ✅ Roll trigger date included ✅ Earnings window cleared</>} 
                />
            </div>
        </div>
    );
};

export default CalendarSpreadStrategy;
