import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap, FiShield, FiTrendingDown, FiClock } from 'react-icons/fi';
import { Link } from "@/lib/react-router-dom-stub";
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

const ProtectivePutStrategy = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Protective Puts Strategy Guide | Portfolio Insurance That Actually Works</title>
                <meta name="description" content="Complete Protective Puts Strategy Guide. Learn how to use portfolio insurance to protect your stocks from crashes while maintaining unlimited upside." />
                <link rel="canonical" href="https://onlyoptions.us/protective-put-strategy" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Strategy Guide #11 of 30"
                    title={<>Protective Puts <span className="text-brand-500">—</span> Deep Dive Guide</>}
                    description="Portfolio Insurance That Actually Works"
                    align="center"
                    className="mb-12"
                />

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-20 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Downside Protection", value: "100%" },
                        { label: "Monthly Cost", value: "0.5-1%" },
                        { label: "Best Underlying", value: "SPY" },
                        { label: "Ideal DTE", value: "60-90" },
                        { label: "Typical OTM Strike", value: "5-10%" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* What is a Protective Put */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What Is a Protective Put?</h2>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                             <p>
                                A protective put is simply buying a put option on a stock you already own. It acts like insurance — you pay a small premium, and in return, your downside is capped. No matter how far the stock falls, you can always sell your shares at the put's strike price.
                             </p>
                             <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl mt-6">
                                 <h4 className="flex items-center gap-2 text-brand-500 font-bold mb-2">
                                     <FiShield className="w-5 h-5 shrink-0" /> The Core Concept:
                                 </h4>
                                 <p className="text-gray-300 m-0">
                                    Think of it as car insurance for your stock portfolio. You hope you never need it, but when a crash happens, it's the difference between a minor inconvenience and a catastrophic loss.
                                 </p>
                             </div>
                        </div>
                    </div>
                    
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Component</TableHead>
                                    <TableHead>Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { c: "You own", d: "100+ shares of a stock or ETF" },
                                    { c: "You buy", d: "1 put option per 100 shares (same underlying)" },
                                    { c: "Strike price", d: "5-10% below current price (OTM) — your floor" },
                                    { c: "Premium paid", d: "The cost of the insurance (0.5-2% of position value)" },
                                    { c: "Max loss", d: "Stock drops to strike — loss capped at (purchase price - strike) + premium paid" },
                                    { c: "Upside", d: "Unlimited — put just expires worthless if stock rises" },
                                    { c: "Time frame", d: "60-180 days — gives enough time to be useful" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Component" className="text-gray-300 text-xs font-bold uppercase tracking-wider">{row.c}</TableCell>
                                        <TableCell label="Details" className="text-gray-400 text-sm">{row.d}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* Why They Matter */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Protection" title="Why Protective Puts Matter for Options Traders" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    Most options traders focus entirely on making money. The best traders also focus on keeping it. Protective puts are how OnlyOptions members protect large profitable positions from sudden reversals.
                </p>

                <h3 className="text-2xl font-black italic uppercase text-white text-center mb-10">The 3 Scenarios Where Protective Puts Save Accounts</h3>
                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-16 max-w-5xl mx-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Scenario</TableHead>
                                <TableHead>Without Protection</TableHead>
                                <TableHead className="text-brand-500">With Protective Put</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { s: "NVDA drops 35% on earnings miss", w: "Lose $35,000 on 100-share position", p: "Loss capped at ~$8,000 (put kicks in)", c: "text-green-400 font-bold" },
                                { s: "Market crashes -25% in 3 weeks", w: "Portfolio loses $50K on $200K account", p: "SPY puts offset $35K+ of losses", c: "text-green-400 font-bold" },
                                { s: "Stock halted on fraud allegations", w: "Shares worthless before you can exit", p: "Put gives you the right to sell at strike", c: "text-green-400 font-bold" },
                                { s: "Fed emergency rate hike surprises", w: "Gap down -10% at open, can't exit fast", p: "Put locks in your sell price regardless", c: "text-green-400 font-bold" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Scenario" className="text-white text-xs font-bold">{row.s}</TableCell>
                                    <TableCell label="Without" className="text-red-400/80 text-xs">{row.w}</TableCell>
                                    <TableCell label="With" className={`text-xs ${row.c}`}>{row.p}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </StandardSection>

            {/* The 3 Types */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Variants" title="The 3 Types of Protective Put Strategies" align="center" className="mb-20" />
                
                <div className="space-y-24">
                    {/* Type 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black italic uppercase text-white">Type 1 — The Standard Protective Put (Most Common)</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Buy one put option for every 100 shares you own. The put strike is 5-10% below the current price — you accept a small loss if the stock falls modestly, but you're fully protected from a major crash.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Card variant="glass" className="p-4 text-center border-white/5 bg-gray-950/40">
                                    <h4 className="text-brand-500 font-black mb-1 text-lg">$87,500</h4>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Position Value</p>
                                </Card>
                                <Card variant="glass" className="p-4 text-center border-white/5 bg-gray-950/40">
                                    <h4 className="text-brand-500 font-black mb-1 text-lg">$787.50</h4>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Put Strike (10% OTM)</p>
                                </Card>
                                <Card variant="glass" className="p-4 text-center border-white/5 bg-gray-950/40">
                                    <h4 className="text-red-500 font-black mb-1 text-lg">$9,750</h4>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Max Risk (Plus Premium)</p>
                                </Card>
                            </div>

                            <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                                <h4 className="text-brand-500 font-black mb-4 uppercase tracking-widest text-sm italic">Real Example — NVDA Protective Put:</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Own 100 shares NVDA at $875 (position value: $87,500)",
                                        "Buy 1 NVDA $787.50 put, 90 DTE @ $18.40 ($1,840 total cost)",
                                        "Max loss if NVDA crashes to zero: Capped at $10,590 (Strike diff + Premium)",
                                        "Without put: Lose entire $87,500 if NVDA went to zero",
                                        "Monthly insurance cost: $613/month (0.70% of position)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-300">
                                            <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                        
                        <div className="space-y-8">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">When to Use Standard Protective Put:</h4>
                            <div className="space-y-4">
                                {[
                                    { t: "Unrealized Gains", d: "You hold a large profitable position and don't want to sell for tax reasons or high conviction." },
                                    { t: "Earnings Protection", d: "Earnings approaching on a stock you own — protect against a gap-down miss." },
                                    { t: "Market Extension", d: "Broad market looks extended — buy SPY/QQQ puts to protect your entire portfolio." },
                                    { t: "Profit Locking", d: "You've made 50%+ profit and want to lock in gains without exiting the shares." }
                                ].map((reason, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center shrink-0">
                                            <FiTarget className="text-brand-500" />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-1">{reason.t}</h5>
                                            <p className="text-gray-500 text-xs leading-relaxed">{reason.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Type 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black italic uppercase text-white">Type 2 — The Married Put (Bought Together with Stock)</h3>
                            <p className="text-gray-400 leading-relaxed">
                                A married put is when you buy the stock AND the put at the same time. You're entering the position with insurance already in place — often used for high-conviction but high-risk volatile plays.
                            </p>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Comparison</TableHead>
                                            <TableHead>Stock Only</TableHead>
                                            <TableHead className="text-brand-300">Married Put</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { f: "Upfront Cost", s: "Stock price only", m: "Stock price + put premium" },
                                            { f: "Max Loss", s: "Full position value", m: "Limited to (spread) + premium", mc: "text-green-400 font-bold" },
                                            { f: "Breakeven", s: "Entry price", m: "Entry price + put premium" },
                                            { f: "Best For", s: "Lower-risk, stable stocks", m: "High-conviction volatile plays" },
                                            { f: "Example Cost", s: "$87,500", m: "$89,340 (incl. $1,840 put)" },
                                            { f: "Example Max Loss", s: "$87,500", m: "$10,590", mc: "text-red-400 font-bold" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Feature" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                                <TableCell label="Stock Only" className="text-gray-400 text-xs">{row.s}</TableCell>
                                                <TableCell label="Married Put" className={`text-xs ${row.mc || 'text-brand-400'}`}>{row.m}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                        <div className="p-8 bg-brand-500/10 border border-brand-500/20 rounded-2xl h-full flex flex-col justify-center">
                            <h4 className="flex items-center gap-2 text-brand-500 font-bold mb-4 italic uppercase tracking-wider">
                                <FiZap className="w-5 h-5 shrink-0" /> Professional Insight:
                            </h4>
                            <p className="text-gray-300 leading-relaxed italic text-lg">
                                "The married put is ideal for earnings plays where you want to buy the stock going into earnings but protect against a miss. You participate in the upside while capping the downside."
                            </p>
                        </div>
                    </div>

                    {/* Type 3 */}
                    <div className="space-y-12">
                         <div className="text-center max-w-3xl mx-auto space-y-6">
                            <h3 className="text-2xl font-black italic uppercase text-white">Type 3 — The Portfolio Hedge (SPY/QQQ Puts)</h3>
                            <p className="text-gray-400 leading-relaxed">
                                instead of buying puts on every individual stock you own, buy puts on SPY or QQQ to hedge your entire portfolio at once. This is the most cost-efficient form of portfolio protection.
                            </p>
                         </div>
                         
                         <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Portfolio Size</TableHead>
                                        <TableHead>Hedge Approach</TableHead>
                                        <TableHead>Contracts</TableHead>
                                        <TableHead>Approx Cost (90 DTE, 8% OTM)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "$50,000 tech-heavy", a: "QQQ puts", n: "3-4 contracts", c: "$600-$900 (1.4-1.8%)" },
                                        { s: "$100,000 diversified", a: "SPY puts", n: "5-6 contracts", c: "$800-$1,200 (0.9-1.2%)" },
                                        { s: "$200,000 mixed", a: "SPY + QQQ puts", n: "8-10 contracts", c: "$1,400-$2,000 (0.8-1.0%)" },
                                        { s: "$500,000+", a: "SPX puts (tax efficient)", n: "10-15 contracts", c: "$3,500-$5,000 (0.8-1.0%)" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Size" className="text-white text-xs font-bold">{row.s}</TableCell>
                                            <TableCell label="Approach" className="text-brand-500 font-bold text-xs">{row.a}</TableCell>
                                            <TableCell label="Contracts" className="text-gray-300 text-xs">{row.n}</TableCell>
                                            <TableCell label="Cost" className="text-gray-400 text-xs">{row.c}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                         </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Strike Selection */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="Strike Selection — How Far OTM?" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    The strike price determines how much protection you get and what you pay for it. There is always a trade-off: deeper OTM = cheaper but less protection. Closer to ATM = expensive but activates sooner.
                </p>

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-16 max-w-5xl mx-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>OTM %</TableHead>
                                <TableHead>Monthly Cost</TableHead>
                                <TableHead>Activates When</TableHead>
                                <TableHead>Best Used For</TableHead>
                                <TableHead>OnlyOptions View</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { p: "2-3% OTM", c: "1.5-2.5%/month", a: "Small dip (-2-3%)", b: "Highly volatile stocks (TSLA)", v: "Too expensive for regular use", co: "text-red-400" },
                                { p: "5% OTM", c: "0.8-1.2%/month", a: "Moderate drop (-5%)", b: "Individual stock protection", v: "Good for earnings protection", co: "text-white" },
                                { p: "8-10% OTM", c: "0.4-0.7%/month", a: "Significant drop (-8-10%)", b: "Crash insurance, portfolio hedge", v: "OnlyOptions Default", co: "text-brand-500 font-bold bg-brand-500/5" },
                                { p: "15%+ OTM", c: "0.15-0.3%/month", a: "Market crash (-15%+)", b: "Catastrophic event insurance", v: "Use for long-term portfolio", co: "text-gray-400" }
                            ].map((row, i) => (
                                <TableRow key={i} className={row.co.includes('brand') ? "bg-brand-500/5" : ""}>
                                    <TableCell label="OTM %" className="text-white text-xs font-bold">{row.p}</TableCell>
                                    <TableCell label="Cost" className="text-gray-400 text-xs">{row.c}</TableCell>
                                    <TableCell label="Activates" className="text-gray-300 text-xs">{row.a}</TableCell>
                                    <TableCell label="Best For" className="text-gray-400 text-xs">{row.b}</TableCell>
                                    <TableCell label="View" className={`text-xs ${row.co.split(' ')[0]}`}>{row.v}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                        <h4 className="flex items-center gap-3 text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">
                            <FiCheck className="w-5 h-5 shrink-0" /> OnlyOptions Default Strategy
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "8-10% OTM gives meaningful crash protection at a reasonable cost (0.4-0.7%/month)",
                                "60-90 DTE gives enough time for the put to respond to macro deterioration",
                                "Avoid buying puts with less than 30 DTE for protection — too much theta decay",
                                "Roll the put forward when it reaches 30 DTE — don't let it expire worthless while still needed"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-[13px] text-gray-300 leading-relaxed">
                                    <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <div className="flex flex-col justify-center gap-6">
                        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <h4 className="text-red-500 font-black uppercase tracking-widest text-xs mb-2 italic">Golden Rule:</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Buy insurance when it's cheap, not when you need it. VIX at 12 = cheap insurance. VIX at 35 = expensive insurance when it's already too late.
                            </p>
                        </div>
                         <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl">
                            <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-2 italic">Pro Tip:</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                The best time to buy protective puts is when everything looks fine and nobody is worried. Waiting until markets are falling is like buying car insurance after the accident.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Managing the Cost */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Optimization" title="Managing the Cost of Protection" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    Paying 0.5-1% per month means 6-12% per year just for insurance — a significant drag on returns. Here are the strategies OnlyOptions members use to reduce this cost dramatically.
                </p>

                <div className="space-y-24">
                    {/* Strategy 1: The Collar */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black italic uppercase text-white">Strategy 1 — The Collar (Reduce Cost to Near Zero)</h3>
                            <p className="text-gray-400 leading-relaxed">
                                A collar combines a protective put with a covered call. You buy the put for protection AND sell a call above the current price. The call premium offsets the put cost — sometimes making the hedge completely free.
                            </p>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Collar Component</TableHead>
                                            <TableHead>Action</TableHead>
                                            <TableHead>Cash Flow</TableHead>
                                            <TableHead>Effect</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { c: "Own 100 shares AAPL @ $185", a: "Hold existing position", f: "$0", e: "Base position" },
                                            { c: "Buy $172.50 put (7% OTM, 60 DTR)", a: "BUY protection", f: "-$2.10 (-$210)", e: "Floor at $172.50" },
                                            { c: "Sell $197.50 call (7% OTM, 60 DTE)", a: "SELL upside", f: "+$2.35 (+$235)", e: "Cap upside at $197.50" },
                                            { c: "Net Cost of Collar", a: "Credit received", f: "+$0.25 (+$25)", e: "FREE PROTECTION", co: "text-brand-500 font-bold bg-brand-500/5" }
                                        ].map((row, i) => (
                                            <TableRow key={i} className={row.co ? "bg-brand-500/5" : ""}>
                                                <TableCell label="Component" className="text-gray-400 text-xs font-bold uppercase tracking-wider">{row.c}</TableCell>
                                                <TableCell label="Action" className="text-gray-300 text-xs">{row.a}</TableCell>
                                                <TableCell label="Cash Flow" className="text-white text-xs">{row.f}</TableCell>
                                                <TableCell label="Effect" className={`text-xs ${row.co ? "text-brand-500" : "text-gray-500"}`}>{row.e}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold text-white uppercase italic tracking-widest text-sm">When to Use a Collar:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Large positions with big unrealized gains",
                                    "Stock approaching a major resistance level",
                                    "Uncertain market environment",
                                    "Approaching retirement or major expense",
                                    "Tax reasons prevent selling",
                                    "Locking in gains without taxable event"
                                ].map((reason, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 items-center">
                                        <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center shrink-0">
                                            <FiCheck className="text-brand-500" />
                                        </div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{reason}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 italic p-6 bg-white/5 rounded-2xl border border-white/10">
                                <span className="text-brand-500 font-bold block mb-2 uppercase tracking-widest text-xs">The trade-off:</span> 
                                You cap your upside. If the stock surges 20%, you miss the move above your short call strike. But your downside is protected for FREE.
                            </p>
                        </div>
                    </div>

                    {/* Strategy 2: Rolling */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                         <div className="space-y-8">
                            <h3 className="text-2xl font-black italic uppercase text-white">Strategy 2 — Rolling (Spread the Cost)</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Instead of buying one 180-day put, buy a 60-day put and roll it forward every 2 months. This lets you adjust your strike to the current price as the stock moves, protecting recent gains — not just the original entry price.
                            </p>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Month</TableHead>
                                            <TableHead>Action</TableHead>
                                            <TableHead>Strike</TableHead>
                                            <TableHead>Monthly Cost</TableHead>
                                            <TableHead>Coverage</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { m: "Month 1", a: "Buy 60-day put", s: "$170 (8% OTM on $185)", c: "$180", co: "$170 floor for 60 days" },
                                            { m: "Month 3", a: "Roll forward", s: "$182 (8% OTM on $198)", c: "$195", co: "$182 floor — adjusted up!" },
                                            { m: "Month 5", a: "Roll forward", s: "$195 (8% OTM on $212)", c: "$210", co: "$195 floor — keeps rising" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Month" className="text-white text-xs font-bold">{row.m}</TableCell>
                                                <TableCell label="Action" className="text-brand-500 font-bold text-xs">{row.a}</TableCell>
                                                <TableCell label="Strike" className="text-gray-300 text-xs">{row.s}</TableCell>
                                                <TableCell label="Cost" className="text-gray-400 text-xs">{row.c}</TableCell>
                                                <TableCell label="Coverage" className="text-gray-500 text-xs italic">{row.co}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                         </div>
                         <div className="space-y-8 pt-12">
                             <div className="p-8 bg-brand-500/10 border border-brand-500/20 rounded-2xl">
                                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">Why Rolling is Superior:</h4>
                                <ol className="space-y-4">
                                    {[
                                        "Protects unrealized gains as the stock moves higher",
                                        "Keeps the hedge at a consistent distance from market price (the delta)",
                                        "Costs are spread out rather than paid as a lump sum",
                                        "Allows you to exit the hedge if market conditions turn extremely bullish"
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex gap-4 text-sm text-gray-300">
                                            <span className="text-brand-500 font-black">{i + 1}.</span> {benefit}
                                        </li>
                                    ))}
                                </ol>
                             </div>
                         </div>
                    </div>

                    {/* Strategy 3: Put Spread */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                         <div className="space-y-8">
                             <h3 className="text-2xl font-black italic uppercase text-white">Strategy 3 — Put Spread (Reduce Cost by 40-60%)</h3>
                             <p className="text-gray-400 leading-relaxed">
                                 Instead of buying a single put, buy a put spread: buy the put you want for protection AND sell a cheaper, deeper OTM put to offset part of the cost.
                             </p>
                             <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Comparison</TableHead>
                                            <TableHead>Single Put</TableHead>
                                            <TableHead className="text-brand-300">Put Spread</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { f: "Example", s: "Buy $175 put @ $3.20", p: "Buy $175, Sell $155 @ $1.10" },
                                            { f: "Net Cost", s: "$320", p: "$210 (34% cheaper)", pc: "text-green-400 font-bold" },
                                            { f: "Max Protection", s: "Full below $175", p: "Capped — max loss still at $155" },
                                            { f: "Best Use", s: "Crash insurance (no floor)", p: "Moderate crash protection" },
                                            { f: "OnlyOptions Use", s: "Severe crash expectation", p: "Default for most hedges", pc: "text-brand-500 font-bold" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Feature" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                                <TableCell label="Single" className="text-gray-400 text-xs">{row.s}</TableCell>
                                                <TableCell label="Spread" className={`text-xs ${row.pc || 'text-brand-400'}`}>{row.p}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                             </Card>
                         </div>
                         <div className="p-8 bg-gray-950/60 border border-white/5 rounded-2xl h-full flex flex-col justify-center">
                            <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-4">Strategic Trade-Off:</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Selling the outer put limits your protection if the stock falls BELOW that strike. However, most market corrections (8-15%) are fully covered by the put spread. You trade away protection against a "Great Depression" scenario for much cheaper annual insurance costs.
                            </p>
                         </div>
                    </div>
                </div>
            </StandardSection>

            {/* When to Signal */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Conditions" title="When OnlyOptions Signals Protective Puts" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    We don't recommend hedging 100% of the time — that's too expensive. We signal protective put setups when specific market conditions make the cost/benefit especially favorable.
                </p>

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-16 max-w-5xl mx-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Signal Trigger</TableHead>
                                <TableHead>What We Signal</TableHead>
                                <TableHead>Why Now</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { t: "IV Rank below 20% (options cheap)", s: "Buy protective puts on largest positions", w: "Insurance is cheapest when nobody is scared" },
                                { t: "SPY at all-time highs, extended rally", s: "SPY/QQQ put hedge on portfolio", w: "Corrections more likely after extended runs" },
                                { t: "VIX below 13 (extreme complacency)", s: "Add portfolio puts — this never lasts", w: "VIX spikes from these levels = crash insurance" },
                                { t: "Major earnings approaching", s: "Stock-specific put 1-2 weeks before", w: "Protect against earnings gap-down" },
                                { t: "Macro event risk elevated", s: "SPY puts timed to event", w: "Binary macro events can gap SPY 2-4%" },
                                { t: "Member has 100%+ gain", s: "Lock-in put at current price", w: "Don't give back life-changing gains on one bad day" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Trigger" className="text-brand-500 font-bold text-xs uppercase tracking-wider">{row.t}</TableCell>
                                    <TableCell label="Signal" className="text-white text-xs">{row.s}</TableCell>
                                    <TableCell label="Why" className="text-gray-400 text-xs">{row.w}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </StandardSection>

            {/* Case Studies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                 <SectionHeader label="Case Studies" title="Real Trade Examples" align="center" className="mb-20" />
                 
                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                     {/* Case 1 */}
                     <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                         <div className="p-6 bg-white/5 border-b border-white/5">
                             <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 1 — NVDA Protection Before Earnings</h4>
                         </div>
                         <Table>
                             <TableBody>
                                 {[
                                     { f: "Situation", d: "Own 100 NVDA shares at $490, earnings in 8 days" },
                                     { f: "Concern", d: "Worried about profit-taking on any data miss" },
                                     { f: "Put Bought", d: "NVDA $450 put (8.2% OTM), Nov 22 expiry @ $9.40", co: "text-brand-400" },
                                     { f: "Floor Created", d: "$450 per share — Max risk limited to $4,940", co: "text-red-400 font-bold" },
                                     { f: "Actual Outcome", d: "NVDA reported strong — surged to $520" },
                                     { f: "Net Result", d: "Gained $3,000 on shares - $940 insurance = +$2,060 net", co: "text-green-500 font-bold" }
                                 ].map((row, i) => (
                                     <TableRow key={i}>
                                         <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                         <TableCell label="Detail" className={`text-sm ${row.co || 'text-white'}`}>{row.d}</TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                         <div className="p-4 bg-brand-500/5 text-center text-[10px] font-black uppercase tracking-widest text-brand-400 italic">
                             WORTH IT — Peace of mind during catalyst events is invaluable.
                         </div>
                     </Card>

                     {/* Case 2 */}
                     <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                         <div className="p-6 bg-white/5 border-b border-white/5">
                             <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 2 — Portfolio Hedge Saved Account (Aug 2024)</h4>
                         </div>
                         <Table>
                             <TableBody>
                                 {[
                                     { f: "Portfolio", d: "$120,000 — mix of tech titans (NVDA, AAPL, etc)" },
                                     { f: "Hedge Placed", d: "10 x SPY $510 puts, 60 DTE @ $3,400 total (2.8%)", co: "text-brand-400" },
                                     { f: "Market Event", d: "SPY dropped 9.7% in 3 days (Yen carry trade)" },
                                     { f: "Portfolio Loss", d: "Unhedged: -$11,640", co: "text-red-400" },
                                     { f: "Put Gain", d: "+$10,800 profit at peak drop", co: "text-brand-500 font-bold" },
                                     { f: "Net Result", d: "Actual loss: -$840 vs -$11,640 (Turned -9.7% into -0.7%)", co: "text-green-500 font-bold" }
                                 ].map((row, i) => (
                                     <TableRow key={i}>
                                         <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                         <TableCell label="Detail" className={`text-sm ${row.co || 'text-white'}`}>{row.d}</TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                         <div className="p-4 bg-brand-500/5 text-center text-[10px] font-black uppercase tracking-widest text-brand-400 italic">
                             ESSENTIAL — Saved over $10,000 in just three days of market panic.
                         </div>
                     </Card>
                 </div>
            </StandardSection>

            {/* Stop Loss Comparison */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                 <SectionHeader label="Analysis" title="Protective Put vs. Stop Loss — Which Is Better?" align="center" className="mb-12" />
                 <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                <TableHead>Stop Loss Order</TableHead>
                                <TableHead className="text-brand-500">Protective Put</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { f: "Cost", s: "Free", p: "Premium paid (0.5-2%)" },
                                { f: "Gap Protection", s: "NO — stock gaps through stop", p: "YES — right to sell at strike", pc: "text-green-400 font-bold" },
                                { f: "Weekend Risk", s: "NO protection on overnight gaps", p: "YES — protects 24/7", pc: "text-green-400 font-bold" },
                                { f: "Flash Crash Risk", s: "Triggered at wrong price", p: "Unaffected by brief crashes", pc: "text-green-400 font-bold" },
                                { f: "Tax Impact", s: "Triggers a taxable sale", p: "No forced sale of shares" },
                                { f: "Volatile Stocks", s: "Regularly stopped out on noise", p: "Not triggered by noise" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Feature" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                    <TableCell label="Stop Loss" className="text-gray-400 text-xs">{row.s}</TableCell>
                                    <TableCell label="Put" className={`text-xs ${row.pc || 'text-brand-400'}`}>{row.p}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                 </Card>
                 <p className="text-center text-gray-500 leading-relaxed max-w-4xl mx-auto mt-12 text-sm">
                    <span className="text-white font-bold block mb-2">Verdict:</span>
                    Stop losses fail exactly when you need them most — during gaps and crashes. Protective puts are superior for large positions and volatile stocks because they are guaranteed to work regardless of how fast or far the stock falls.
                 </p>
            </StandardSection>

            {/* Annual Cost Analysis */}
            <StandardSection variant="default" divider="top" spacing="lg">
                 <SectionHeader label="Strategy" title="Annual Cost Analysis — Is It Worth It?" align="center" className="mb-12" />
                 <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto mb-16">
                     <Table>
                         <TableHeader>
                             <TableRow>
                                 <TableHead>Scenario ($100K Portfolio)</TableHead>
                                 <TableHead>Annual Put Cost</TableHead>
                                 <TableHead>Annual Return Impact</TableHead>
                                 <TableHead>Protection Verdict</TableHead>
                             </TableRow>
                         </TableHeader>
                         <TableBody>
                             {[
                                 { s: "No protection, average year", c: "$0", i: "+20%", v: "Yes — in hindsight", co: "text-gray-400" },
                                 { s: "Put hedge (0.8%/mo), avg year", c: "-$9,600", i: "+10.4%", v: "Lowered your gains", co: "text-red-400" },
                                 { s: "No protection, crash year", c: "$0", i: "-30%", v: "CATASTROPHIC", co: "text-red-600 font-black" },
                                 { s: "Put hedge, crash year", c: "-$9,600", i: "-7% effective", v: "SAVED $13,000", co: "text-green-500 font-bold" }
                             ].map((row, i) => (
                                 <TableRow key={i}>
                                     <TableCell label="Scenario" className="text-white text-xs font-bold">{row.s}</TableCell>
                                     <TableCell label="Cost" className="text-gray-400 text-xs">{row.c}</TableCell>
                                     <TableCell label="Impact" className="text-gray-300 text-xs">{row.i}</TableCell>
                                     <TableCell label="Verdict" className={`text-xs ${row.co}`}>{row.v}</TableCell>
                                 </TableRow>
                             ))}
                         </TableBody>
                     </Table>
                 </Card>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-6">
                        <h4 className="text-brand-500 font-black uppercase tracking-widest text-sm italic">The Asymmetric Advantage:</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            You give up some gains in good years to avoid catastrophic losses in bad years. For large portfolios, avoiding a 30% drawdown is worth far more than the annual cost of insurance.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Selective Hedging Cuts Cost:</h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {[
                                "Only hedge when VIX is low and risk is elevated",
                                "Use put spreads to cut costs by 40-60%",
                                "Collar strategy can make hedging completely FREE",
                                "Hedging 3-4 months/year costs 0.2% vs 0.8% annually"
                            ].map((rule, i) => (
                                <li key={i} className="flex gap-3 text-xs text-gray-400">
                                    <FiCheck className="text-brand-500 shrink-0" /> {rule}
                                </li>
                            ))}
                        </ul>
                    </div>
                 </div>
            </StandardSection>

            {/* Common Mistakes */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Checklist" title="Common Protective Put Mistakes" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {[
                        { t: "Buying When VIX is High", d: "Premiums are 3-5x more expensive. Buy when VIX is below 15 for max value." },
                        { t: "Buying Too Short-Dated", d: "Under 30 DTE has too much theta decay. Always buy 60-90 DTE minimum." },
                        { t: "Strike Too Far OTM", d: "20%+ OTM is cheap but only saves you in total collapse. 8-10% is the sweet spot." },
                        { t: "Not Rolling at 30 DTE", d: "Protection expires and you're suddenly naked. Set a reminder to roll coverage." },
                        { t: "Over-Hedging Everything", d: "Annual cost drag of 8-12% is too high. Hedge the portfolio with SPY/QQQ puts instead." },
                        { t: "Forgetting Alerts", d: "Set alerts when stock falls 5% to review your strategy — don't just 'set and forget'." },
                        { t: "Collar on Momentum", d: "Capping upside on parabolic stocks like NVDA will lead to massive missed legacy gains." },
                        { t: "Hedge Management", d: "OnlyOptions signals tell you exactly when to take off the hedge to save cost." }
                    ].map((mistake, i) => (
                        <Card key={i} variant="glass" className="p-6 border-red-500/10 bg-gray-950/40 hover:border-brand-500/30 transition-all">
                             <h4 className="text-white font-black mb-3 uppercase tracking-widest text-[10px] italic flex items-center min-h-[30px]">
                                 <FiAlertTriangle className="text-red-500 mr-2" /> {mistake.t}
                             </h4>
                             <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                 {mistake.d}
                             </p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Reading Signals */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="System" title="Reading OnlyOptions Protective Put Signals" align="center" className="mb-12" />
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
                                { f: "Strategy", e: "Protective Put / Portfolio Hedge", a: "The type of protection being signaled" },
                                { f: "Trigger Reason", e: "VIX at 12.8, SPY at ATH", a: "Why we're recommending insurance now" },
                                { f: "Strike", e: "$510P (7.8% OTM)", a: "Your guaranteed floor level", ac: "text-brand-400 font-bold" },
                                { f: "Expiration", e: "90 DTE — Sep 19", a: "Duration of the protection coverage" },
                                { f: "Contracts Needed", e: "1 per $17,000 of portfolio", a: "How to scale to your specific account size" },
                                { f: "Roll Date", e: "When 30 DTE reached", a: "When to extend coverage or exit" },
                                { f: "Remove When", e: "VIX spikes above 25", a: "Take profits on puts; hedge is done", ac: "text-green-500 font-bold" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs">{row.f}</TableCell>
                                    <TableCell label="Example" className={`text-sm ${row.ac || 'text-white'}`}>{row.e}</TableCell>
                                    <TableCell label="Meaning" className="text-gray-400 text-xs">{row.a}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </StandardSection>

            {/* Testimonials */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Results" title="Member Results — Protective Puts" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                     {[
                        { q: "Bought SPY puts in July 2024 when VIX was at 12. August crash hit. My $180K portfolio only dropped $3,200 while friends lost $40,000+. Best $2,800 I ever spent.", a: "Robert K., Illinois — Portfolio saved during correction" },
                        { q: "Collared my AAPL position before uncertainty. Got the put protection FREE by selling the call. AAPL stayed flat — I paid nothing for protection that would have cost $1,800.", a: "Patricia M., Florida — Free protection via collar" },
                        { q: "Had 200 shares of NVDA with $40,000 in gains. Bought protective puts before earnings. NVDA beat but the puts gave me peace of mind. Slept perfectly.", a: "Steven L., California — Peace of mind on $70K position" }
                     ].map((t, i) => (
                        <Card key={i} variant="institutional" className="p-6 border-white/5 bg-gray-950/40">
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{t.q}"</p>
                            <span className="text-brand-500 font-black uppercase tracking-widest text-[10px]">— {t.a}</span>
                        </Card>
                     ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Summary" title="Quick Reference Cheat Sheet" align="center" className="mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">When to Buy Protection</h4>
                            <ul className="space-y-4">
                                {[
                                    "VIX below 15 — options are cheapest right now",
                                    "You hold a position with 50%+ unrealized gain",
                                    "Major earnings approaching on a large position",
                                    "Market at all-time highs after extended rally",
                                    "Macro uncertainty: Fed, election, geopolitics",
                                    "You cannot afford a large drawdown right now"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">Setup Checklist</h4>
                            <ul className="space-y-4">
                                {[
                                    "Strike: 8-10% OTM from current price",
                                    "Expiration: 60-90 DTE minimum",
                                    "Cost: Target 0.4-0.8% of position/month",
                                    "Contracts: 1 put per 100 shares owned",
                                    "Consider put spread to reduce cost by 40%",
                                    "Consider collar if comfortable capping upside"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">Universal Management Rules</h4>
                        <ul className="space-y-4">
                            {[
                                "Roll when put reaches 30 DTE — don't let it lapse",
                                "Sell puts if VIX spikes above 25 — premiums are rich",
                                "Roll up strikes if stock rises significantly to maintain 8-10% distance",
                                "Close put if original concern (event) passes without incident",
                                "Selective hedging only — don't hold indefinitely in bull markets"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-400">
                                    <FiCheck className="text-gray-600 shrink-0 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 text-center text-xs text-gray-600 max-w-4xl mx-auto space-y-4">
                    <p className="font-bold uppercase tracking-widest">DISCLAIMER</p>
                    <p>Options trading involves substantial risk of loss. Protective puts do not guarantee profits and the premium paid may be lost entirely if the underlying does not decline. OnlyOptions signals are for educational purposes only. Past performance does not guarantee future results. Always consult a qualified financial advisor.</p>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto py-24">
                    <SectionHeader label="Knowledge Base" title="Protective Puts FAQ" align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "Is a protective put better than a stop loss?", a: "Yes, because a put protects you against 'gaps' (when a stock opens much lower than it closed). A stop loss will only sell at the next available price, whereas a put guarantees you can sell at the strike price." },
                            { q: "How much should I spend on portfolio insurance?", a: "Ideally, keep hedging costs between 0.5% and 1% of your total portfolio value per month. OnlyOptions helps you time these hedges so you aren't paying for insurance when it's not needed." },
                            { q: "Can I use protective puts on any stock?", a: "Technically yes, if it has an options chain. However, we recommend them primarily for highly liquid stocks and ETFs (SPY, QQQ, AAPL, NVDA) where bid-ask spreads are tight." },
                            { q: "Should I buy puts before or after a market drop?", a: "Before. Buying insurance after a drop is extremely expensive because 'Implied Volatility' (IV) spikes. The best time to buy puts is when the VIX is low and the market is calm." }
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
                            { title: "Covered Calls", path: "/strategies/covered-calls" },
                            { title: "Credit Spreads", path: "/strategies/credit-spreads" },
                            { title: "Iron Condors", path: "/strategies/iron-condor" },
                            { title: "0DTE Strategy", path: "/strategies/0dte-options-trading" },
                            { title: "Options Greeks", path: "/options-greeks-explained" },
                            { title: "Implied Volatility", path: "/understanding-implied-volatility" },
                            { title: "Risk Management", path: "/options-risk-management" },
                            { title: "Performance", path: "/performance" }
                        ].map((link, i) => (
                            <Link key={i} to={link.path} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all uppercase tracking-widest">
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA 
                   title="Protect Your Profits Before the Next Crash"
                   subtitle={<>OnlyOptions protective put signals tell you exactly when to hedge:<br/>✅ Strike & expiration pre-selected ✅ Cost-per-contract calculated ✅ Collar options included<br/>✅ Roll date pre-scheduled ✅ VIX-timed entry ✅ Selective hedging strategy</>}
                />
            </div>
        </div>
    );
};

export default ProtectivePutStrategy;
