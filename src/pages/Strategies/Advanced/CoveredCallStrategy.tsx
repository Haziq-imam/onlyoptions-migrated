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

const CoveredCallStrategy = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Covered Calls Strategy Guide | Generate Consistent Monthly Income</title>
                <meta name="description" content="Master the covered call strategy. Learn how to generate consistent monthly income on stocks you already own while reducing your cost basis over time." />
                <link rel="canonical" href="https://onlyoptions.us/covered-call-strategy" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Strategy Guide #13 of 30"
                    title={<>Covered Calls <span className="text-brand-500">Strategy</span> Guide</>}
                    description="The World's Most Popular Options Strategy — Done Right 📈"
                    align="center"
                    className="mb-12"
                />

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-20 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Monthly Yield", value: "1.5-3.5%" },
                        { label: "Win Rate", value: "74.8%" },
                        { label: "Annualized Return", value: "18-42%" },
                        { label: "Best Month", value: "+6.2%" },
                        { label: "Consistency", value: "9/10 Positive" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Covered calls are the entry point for millions of options traders — and for good reason. They generate consistent monthly income on stocks you already own, reduce your cost basis over time, and work in flat, slightly bullish, and even mildly bearish markets. But most traders do them wrong. This guide shows you exactly how OnlyOptions members use covered calls to build reliable income.
                    </p>
                </div>

                {/* What is a Covered Call */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What Is a Covered Call?</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Definition & Dynamics</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                             <p>
                                A covered call means you own 100 shares of stock and sell one call option against those shares. You collect the premium immediately. In exchange, you agree to sell your shares at the strike price if the stock rises above it by expiration.
                             </p>
                             <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl mt-6">
                                 <h4 className="flex items-center gap-2 text-brand-500 font-bold mb-4 italic uppercase tracking-wider text-xs">
                                     <FiShield className="w-4 h-4 shrink-0" /> The Core Trade:
                                 </h4>
                                 <ul className="space-y-3 m-0 list-none">
                                     <li className="flex gap-3 text-sm text-gray-300">
                                         <span className="text-brand-500 font-bold">Own:</span> 100 shares of AAPL at $185
                                     </li>
                                     <li className="flex gap-3 text-sm text-gray-300">
                                         <span className="text-brand-500 font-bold">Sell:</span> 1 AAPL $195 call, 35 DTE, collect $2.40 premium ($240)
                                     </li>
                                     <li className="flex gap-3 text-sm text-white font-black italic">
                                         <span className="text-brand-500">Result:</span> $240 cash in your account immediately
                                     </li>
                                 </ul>
                             </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Three Possible Outcomes:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Outcome</TableHead>
                                        <TableHead>What Happens</TableHead>
                                        <TableHead>Your Result</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { o: "Stock stays below $195", w: "Call expires worthless", r: "Keep $240 premium + 100 shares", rc: "text-green-400 font-bold" },
                                        { o: "Stock rises above $195", w: "Shares get called away at $195", r: "Keep $240 + sell at $195", rc: "text-brand-400 font-bold" },
                                        { o: "Stock falls", w: "Call expires worthless", r: "Keep $240, shares decline in value", rc: "text-gray-400" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Outcome" className="text-white text-xs font-bold">{row.o}</TableCell>
                                            <TableCell label="What" className="text-gray-400 text-xs">{row.w}</TableCell>
                                            <TableCell label="Result" className={`text-xs ${row.rc}`}>{row.r}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Why They Work */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Performance" title="Why Covered Calls Work" align="center" className="mb-12" />
                <div className="max-w-4xl mx-auto space-y-12">
                     <p className="text-center text-gray-400 text-lg leading-relaxed">
                        You get paid while you wait. Most stock holders sit on shares for months earning nothing. Covered call sellers collect monthly income whether the stock moves up, sideways, or slightly down.
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                             <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic text-center">OnlyOptions Covered Call Stats (2022-2024)</h4>
                             <div className="space-y-4">
                                 {[
                                     { label: "Average Monthly Yield", value: "1.5-3.5% on stock value" },
                                     { label: "Win Rate (premium kept)", value: "74.8%" },
                                     { label: "Average Annualized Return", value: "18-42%" },
                                     { label: "Best Month", value: "+6.2% (TSLA, high IV)" },
                                     { label: "Consistency", value: "9 out of 10 months positive" }
                                 ].map((item, i) => (
                                     <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                         <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                                         <span className="text-white font-black text-sm">{item.value}</span>
                                     </div>
                                 ))}
                             </div>
                         </Card>
                         <div className="flex flex-col justify-center gap-6">
                             <div className="p-8 bg-gray-950/60 border border-white/5 rounded-2xl">
                                <FiActivity className="text-brand-500 w-8 h-8 mb-4" />
                                <h4 className="text-white font-bold mb-2">Passive Efficiency</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    While standard investors hope for price appreciation, covered call sellers engineer their own yield, effectively creating a dividend where one might not exist.
                                </p>
                             </div>
                         </div>
                     </div>
                </div>
            </StandardSection>

            {/* Core Strategies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Variants" title="The Three Core Covered Call Strategies" align="center" className="mb-20" />
                
                <div className="space-y-32">
                    {/* Strategy 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black italic uppercase text-white">Strategy 1: The Standard Monthly Income Call</h3>
                            <p className="text-gray-400 leading-relaxed">
                                <span className="text-brand-500 font-bold block mb-2 uppercase tracking-widest text-xs">Goal:</span>
                                Generate consistent, predictable monthly income. Not trying to maximize premium — optimizing for consistency and capital preservation.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Strike", value: "5-8% OTM" },
                                    { label: "Delta", value: "25-30" },
                                    { label: "Expiration", value: "30-45 DTE" },
                                    { label: "Target Premium", value: "1.5-2.5%/mo" }
                                ].map((rule, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{rule.label}</p>
                                        <p className="text-brand-500 font-black italic">{rule.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Best stocks for standard monthly income:</h4>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Stock</TableHead>
                                            <TableHead>Monthly Premium</TableHead>
                                            <TableHead>Annual Yield</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { t: "AAPL", p: "$2.00-$3.50", y: "13-24%" },
                                            { t: "MSFT", p: "$5.00-$8.00", y: "16-25%" },
                                            { t: "JPM", p: "$2.50-$4.00", y: "15-24%" },
                                            { t: "WMT", p: "$1.00-$1.80", y: "14-21%" },
                                            { t: "V", p: "$3.00-$4.50", y: "13-20%" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Ticker" className="text-brand-500 font-black uppercase italic tracking-wider">{row.t}</TableCell>
                                                <TableCell label="Premium" className="text-white text-xs">{row.p}</TableCell>
                                                <TableCell label="Yield" className="text-gray-400 font-bold text-xs">{row.y}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>

                    {/* Strategy 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8 lg:order-2">
                             <h3 className="text-2xl font-black italic uppercase text-white">Strategy 2: The Aggressive Income Call</h3>
                             <p className="text-gray-400 leading-relaxed">
                                <span className="text-brand-500 font-bold block mb-2 uppercase tracking-widest text-xs">Goal:</span>
                                Maximize premium during periods of elevated volatility. Accept higher assignment risk in exchange for much larger premium.
                             </p>
                             <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl">
                                 <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-4 italic">When to use:</h4>
                                 <ul className="space-y-2">
                                     {["IV Rank above 50% (options are expensive)", "Post-earnings when stock has settled", "VIX spike has elevated premiums", "Comfortable selling shares if assigned"].map((item, i) => (
                                         <li key={i} className="flex gap-3 text-xs text-gray-300">
                                             <FiZap className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Strike", value: "2-4% OTM" },
                                    { label: "Delta", value: "35-45" },
                                    { label: "Expiration", value: "21-30 DTE" },
                                    { label: "Target Premium", value: "3-5%/mo" }
                                ].map((rule, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{rule.label}</p>
                                        <p className="text-brand-400 font-black italic">{rule.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8 lg:order-1">
                             <Card variant="glass" className="p-8 border-brand-500/20 bg-gray-950/40">
                                 <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">Example Case Study: NVDA Post-Earnings</h4>
                                 <div className="space-y-4">
                                     <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Position:</p>
                                         <p className="text-white text-sm">Own 100 NVDA at $875</p>
                                     </div>
                                     <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Setup:</p>
                                         <p className="text-white text-sm">IV Rank 68%, Sold $920 Call, 21 DTE @ $18.40</p>
                                     </div>
                                     <div className="p-4 bg-brand-500/10 rounded-lg border border-brand-500/30">
                                         <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest mb-1">Result:</p>
                                         <p className="text-white text-sm font-black italic">Collected $1,840 (2.1% in 21 days) = 37% Annualized ✅</p>
                                     </div>
                                 </div>
                             </Card>
                        </div>
                    </div>

                    {/* Strategy 3 */}
                    <div className="space-y-12">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                             <h3 className="text-2xl font-black italic uppercase text-white">Strategy 3: The "Wheel" Covered Call</h3>
                             <p className="text-gray-400 leading-relaxed">
                                Continue generating income after being assigned shares from a cash-secured put. Never sell a covered call that forces you to sell shares at a loss.
                             </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {[
                                { s: "1", t: "Sell Cash-Secured Put", d: "Collect premium. Stock falls → assigned 100 shares at discount." },
                                { s: "2", t: "Sell Covered Call", d: "Sell at or above cost basis. Collect more premium. Stock rises → shares called away." },
                                { s: "3", t: "Repeat Sequence", d: "Start the cycle over with a new put. Generate ongoing income indefinitely." }
                            ].map((step, i) => (
                                <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 text-center relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black italic group-hover:opacity-20 transition-all">0{step.s}</div>
                                    <FiTrendingUp className="text-brand-500 w-10 h-10 mb-6 mx-auto" />
                                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">{step.t}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{step.d}</p>
                                </Card>
                            ))}
                        </div>

                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto">
                            <div className="p-6 bg-white/5 border-b border-white/5">
                                <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Full Wheel Example on AAPL:</h4>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Step</TableHead>
                                        <TableHead>Action</TableHead>
                                        <TableHead>Premium</TableHead>
                                        <TableHead>Running P&L</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "Week 1", a: "Sell $182.50 put, own cash", p: "+$2.85", pl: "+$285" },
                                        { s: "Week 5", a: "Assigned at $182.50", p: "—", pl: "Cost Basis: $179.65" },
                                        { s: "Week 6", a: "Sell $185 covered call", p: "+$3.20", pl: "+$605" },
                                        { s: "Week 10", a: "Called away at $185", p: "—", pl: "+$535 gain on shares" },
                                        { s: "Total", a: "Complete Wheel Cycle", p: "—", pl: "+$1,140 Net Profit", plc: "text-brand-500 font-black italic" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Step" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.s}</TableCell>
                                            <TableCell label="Action" className="text-white text-xs">{row.a}</TableCell>
                                            <TableCell label="Premium" className="text-brand-400 text-xs font-bold">{row.p}</TableCell>
                                            <TableCell label="P&L" className={`text-xs ${row.plc || 'text-gray-400'}`}>{row.pl}</TableCell>
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
                <SectionHeader label="Strategy" title="Strike Selection — The Most Important Decision" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                     {[
                        { z: "Zone 1 — Conservative", d: "15-20 Delta", p: "0.8-1.2%", r: "Low (~15%)", b: "Stocks you do NOT want to sell", y: "10-15%", c: "border-gray-500/20" },
                        { z: "Zone 2 — Balanced", d: "25-35 Delta", p: "1.5-2.5%", r: "Moderate (~30%)", b: "Most covered call situations", y: "18-30%", c: "border-brand-500/40 bg-brand-500/5", badge: "OnlyOptions Default" },
                        { z: "Zone 3 — Aggressive", d: "40-50 Delta", p: "3-5%", r: "High (~45%)", b: "Stocks you're comfortable selling", y: "36-60%", c: "border-red-500/20" }
                     ].map((zone, i) => (
                        <Card key={i} variant="glass" className={`p-8 ${zone.c} relative`}>
                            {zone.badge && <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{zone.badge}</div>}
                            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">{zone.z}</h4>
                            <div className="space-y-4">
                                {[
                                    { l: "Delta", v: zone.d },
                                    { l: "Premium", v: zone.p },
                                    { l: "Assignment Risk", v: zone.r },
                                    { l: "Best For", v: zone.b },
                                    { l: "Annualized", v: zone.y, c: zone.badge ? "text-brand-500" : "text-white" }
                                ].map((item, j) => (
                                    <div key={j} className="flex flex-col border-b border-white/5 pb-2">
                                        <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{item.l}</span>
                                        <span className={`text-xs font-bold ${item.c || 'text-gray-300'}`}>{item.v}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                     ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Timing" title="Expiration Selection — Why 30-45 DTE?" align="center" className="mb-12" />
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>DTE</TableHead>
                                    <TableHead>Theta Decay Rate</TableHead>
                                    <TableHead>Premium Level</TableHead>
                                    <TableHead>Recommended?</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { d: "7 DTE", t: "Very Fast", p: "Very Low", r: "❌ Not worth the risk", rc: "text-red-400" },
                                    { d: "14 DTE", t: "Fast", p: "Low-Moderate", r: "❌ Frequent management", rc: "text-red-400" },
                                    { d: "30-45 DTE", t: "Optimal", p: "Moderate-High", r: "✅ OnlyOptions default", rc: "text-brand-500 font-black italic" },
                                    { d: "60 DTE", t: "Moderate", p: "Higher", r: "⚠️ For stable stocks only", rc: "text-gray-400" },
                                    { d: "90+ DTE", t: "Slow", p: "Highest", r: "❌ Too much time/capital", rc: "text-red-400" }
                                ].map((row, i) => (
                                    <TableRow key={i} className={row.rc.includes('brand') ? "bg-brand-500/5" : ""}>
                                        <TableCell label="DTE" className="text-white text-xs font-bold">{row.d}</TableCell>
                                        <TableCell label="Theta" className="text-gray-400 text-xs font-bold italic">{row.t}</TableCell>
                                        <TableCell label="Premium" className="text-gray-400 text-xs">{row.p}</TableCell>
                                        <TableCell label="Status" className={`text-xs ${row.rc}`}>{row.r}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <div className="mt-12 p-8 bg-brand-500/10 border border-brand-500/20 rounded-2xl text-center">
                        <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto italic">
                             "Why not weeklies? Weekly covered calls require you to manage the trade every single week. Transaction costs, time commitment, and stress all compound rapidly. Monthly covered calls are set-and-manage, not set-and-forget."
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* Management Scenarios */}
            <StandardSection variant="default" divider="top" spacing="lg">
                 <SectionHeader label="Management" title="Managing the Covered Call — 4 Scenarios" align="center" className="mb-20" />
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                     {[
                         { t: "Scenario 1: Expires Worthless", d: "Stock stayed below your strike. You keep full premium. Action: Immediately sell the next month's call.", i: <FiCheck className="text-green-500" /> },
                         { t: "Scenario 2: Stock Rises (Threatened)", d: "Approach: Let it get called away or 'Roll Up and Out' if you want to keep shares. Only roll if you collect a net credit.", i: <FiTrendingUp className="text-brand-500" /> },
                         { t: "Scenario 3: Stock Falls Significantly", d: "The call cushions the loss. Action: Sell the next call at the new lower level to continue recovering cost basis.", i: <FiTrendingDown className="text-red-500" /> },
                         { t: "Scenario 4: Earnings Approaching", d: "Decision: Roll to a higher strike BEFORE or close it. Never sell a new call the week before earnings.", i: <FiAlertTriangle className="text-brand-400" /> }
                     ].map((item, i) => (
                         <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                             <div className="flex gap-6">
                                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                     {item.i}
                                 </div>
                                 <div className="space-y-2">
                                     <h4 className="text-white font-black uppercase tracking-widest text-sm italic">{item.t}</h4>
                                     <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
                                 </div>
                             </div>
                         </Card>
                     ))}
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-8">
                         <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The Tax Implications</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Qualified vs Non-Qualified</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                             Qualified Covered Calls: If your call meets IRS "qualified" criteria, your holding period on the underlying shares is NOT disrupted. Misstructuring can convert long-term capital gains into short-term — a costly mistake.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                            {["Strike must be at least 1 strike below closing (not deep ITM)", "Expiration must be more than 30 days out", "Cannot be on shares held less than 30 days"].map((rule, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 items-center">
                                    <FiCheck className="text-brand-500" />
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{rule}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 bg-gray-950/60 border border-white/5 rounded-2xl flex flex-col justify-center gap-6">
                         <h4 className="text-white font-black uppercase tracking-widest text-sm italic">The Dividend Trap:</h4>
                         <p className="text-gray-400 text-sm leading-relaxed italic">
                            "If your call goes ITM before the ex-dividend date, buyers may exercise early to capture the dividend. You miss it entirely. Check ex-div dates and roll up and out if threatened."
                         </p>
                         <div className="p-4 bg-brand-500/5 rounded-xl border border-brand-500/10">
                             <h5 className="text-brand-500 font-black uppercase tracking-widest text-[10px] mb-2">How to Avoid:</h5>
                             <ul className="space-y-2 text-xs text-gray-400 italic">
                                 <li>• Avoid ITM calls in the week before ex-dividend</li>
                                 <li>• Roll up and out immediately if ITM 2 weeks before</li>
                             </ul>
                         </div>
                    </div>
                 </div>
            </StandardSection>

            {/* Portfolio Building */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="System" title="The 5-Stock Monthly Income System" align="center" className="mb-20" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    Goal: Generate 2-3% monthly income on a $100,000+ stock portfolio using covered calls.
                </p>

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-6xl mx-auto mb-24">
                     <Table>
                         <TableHeader>
                             <TableRow>
                                 <TableHead>Stock</TableHead>
                                 <TableHead>Shares</TableHead>
                                 <TableHead>Position Value</TableHead>
                                 <TableHead>Monthly Premium</TableHead>
                                 <TableHead>Monthly Yield</TableHead>
                             </TableRow>
                         </TableHeader>
                         <TableBody>
                             {[
                                 { t: "AAPL", s: "100", v: "$18,500", p: "$310", y: "1.68%" },
                                 { t: "MSFT", s: "100", v: "$41,500", p: "$580", y: "1.40%" },
                                 { t: "JPM", s: "100", v: "$21,000", p: "$390", y: "1.86%" },
                                 { t: "NVDA", s: "50", v: "$43,750", p: "$920", y: "2.10%", co: "text-brand-400" },
                                 { t: "WMT", s: "200", v: "$19,000", p: "$280", y: "1.47%" }
                             ].map((row, i) => (
                                 <TableRow key={i}>
                                     <TableCell label="Ticker" className="text-white font-bold">{row.t}</TableCell>
                                     <TableCell label="Shares" className="text-gray-400 text-xs">{row.s}</TableCell>
                                     <TableCell label="Value" className="text-gray-300 text-xs">{row.v}</TableCell>
                                     <TableCell label="Premium" className="text-white text-xs font-bold">{row.p}</TableCell>
                                     <TableCell label="Yield" className={`text-xs ${row.co || 'text-brand-500'} font-bold`}>{row.y}</TableCell>
                                 </TableRow>
                             ))}
                             <TableRow className="bg-brand-500/10">
                                 <TableCell colSpan={3} className="text-white font-black italic uppercase tracking-widest text-sm">Portfolio Total Results:</TableCell>
                                 <TableCell className="text-brand-500 font-black text-sm">$2,480 / mo</TableCell>
                                 <TableCell className="text-brand-500 font-black text-sm">20.7% Annualized ✅</TableCell>
                             </TableRow>
                         </TableBody>
                     </Table>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                         <SectionHeader label="Selection" title="Best Stocks by Strategy" align="left" className="mb-0" />
                         <div className="space-y-4">
                             {[
                                 { t: "Conservative", d: "AAPL, MSFT, JPM, WMT, V — stable, liquid, predictable" },
                                 { t: "Aggressive", d: "NVDA, TSLA, AMD, COIN, PLTR — high IV = high premium" },
                                 { t: "Wheel Trades", d: "AAPL, MSFT, JPM, AMZN, GOOGL — stocks you want to own" }
                             ].map((item, i) => (
                                 <div key={i} className="p-5 rounded-xl bg-gray-950/40 border border-white/5">
                                     <h5 className="text-brand-500 font-bold uppercase tracking-widest text-[10px] mb-1">{item.t}</h5>
                                     <p className="text-gray-300 text-xs">{item.d}</p>
                                 </div>
                             ))}
                         </div>
                    </div>
                    <div className="space-y-8">
                         <SectionHeader label="Comparison" title="Covered Calls vs. Holding" align="left" className="mb-0" />
                         <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                             <Table>
                                 <TableHeader>
                                     <TableRow>
                                         <TableHead>Strategy</TableHead>
                                         <TableHead>3-Year Result ($100K)</TableHead>
                                     </TableRow>
                                 </TableHeader>
                                 <TableBody>
                                     {[
                                         { s: "Buy and Hold Only", r: "Market return only (e.g. +45%)" },
                                         { s: "Covered Calls (1.5%/mo)", r: "Market return + $54,000 cash", co: "text-brand-400" },
                                         { s: "Covered Calls (2.5%/mo)", r: "Market return + $90,000 cash", co: "text-brand-500 font-bold" }
                                     ].map((row, i) => (
                                         <TableRow key={i}>
                                             <TableCell label="Method" className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{row.s}</TableCell>
                                             <TableCell label="Result" className={`text-xs ${row.co || 'text-white'}`}>{row.r}</TableCell>
                                         </TableRow>
                                     ))}
                                 </TableBody>
                             </Table>
                         </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Reading Signals */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="System" title="Reading OnlyOptions Covered Call Signals" align="center" className="mb-12" />
                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto mb-24">
                    <Table>
                        <TableBody>
                            {[
                                { f: "Strategy", e: "Covered Call (Requires owning 100 shares)", a: "text-white" },
                                { f: "Strike", e: "$197.50C", a: "text-brand-500 font-black" },
                                { f: "Premium Target", e: "$2.95-$3.30 collections per share", a: "text-white" },
                                { f: "Monthly Yield", e: "1.65% based on entry price", a: "text-brand-400" },
                                { f: "IV Rank", e: "44% (Elevated — good time to sell)", a: "text-gray-400" },
                                { f: "Roll Trigger", e: "Stock reaches $194.50 — consider rolling", a: "text-red-400" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                    <TableCell label="Instruction" className={`text-sm ${row.a}`}>{row.e}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>

                <SectionHeader label="Pitfalls" title="Common Covered Call Mistakes" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {[
                        { t: "Selling Too Close (OTM)", d: "Collecting extra pennies at ATM isn't worth constant assignment stress. Stick to Zone 2 defaults." },
                        { t: "Selling on Bearish Stocks", d: "Covered calls cushion losses but don't stop crashes. If you're bearish, just SELL the stock." },
                        { t: "Forgetting Earnings", d: "ITM during a pop means you miss the entire move. Check the calendar every time you sell a call." },
                        { t: "Anchoring to Old Strikes", d: "If stock falls 15%, adjust your strike. Don't sell original strikes for zero premium." },
                        { t: "Ignoring Catalysts", d: "FDA approvals and binary news send stocks 20%+ overnight. Only cap upside when outlook is stable." }
                    ].map((mistake, i) => (
                        <Card key={i} variant="glass" className="p-6 border-red-500/10 bg-gray-950/40 hover:border-brand-500/30 transition-all">
                             <h4 className="text-white font-black mb-3 uppercase tracking-widest text-[10px] italic flex items-center">
                                 <FiAlertTriangle className="text-red-500 mr-2" /> Mistake #{i + 1}: {mistake.t}
                             </h4>
                             <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                 {mistake.d}
                             </p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Testimonials */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Success" title="Member Results — Covered Calls" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                     {[
                        { q: "Covered calls on my AAPL and MSFT position generated $2,100/month in income. My stock portfolio now pays me more than my dividend portfolio ever did.", a: "Patricia M., Florida" },
                        { q: "The Wheel on JPM — 14 months of continuous income. $23,400 total from covered calls and cash-secured puts. Never once lost money.", a: "Robert K., Illinois" },
                        { q: "NVDA covered calls during the rally — sold $940 calls 4 times in a row, collected $7,200 in premium before finally getting called away. Best 'loss' ever.", a: "Steven L., California" }
                     ].map((t, i) => (
                        <Card key={i} variant="institutional" className="p-8 border-white/5 bg-gray-950/40">
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{t.q}"</p>
                            <span className="text-brand-500 font-black uppercase tracking-widest text-[10px]">— {t.a}</span>
                        </Card>
                     ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Summary" title="Quick Reference Cheat Sheet" align="center" className="mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <Card variant="glass" className="p-6 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-[10px] italic">Entry Checklist</h4>
                            <ul className="space-y-3">
                                {["Own exactly 100 shares", "Neutral to bullish trend", "IV Rank above 25%", "No earnings in window", "Strike selected by goal"].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-[11px] text-gray-300 font-bold uppercase tracking-wider">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-6 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-[10px] italic">Monthly Rules</h4>
                            <ul className="space-y-3">
                                {["Sell within 1-2 days of exp", "Adjust to current price", "Check IV Rank before sell", "Never sell below cost basis", "Take assignment gracefully"].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-[11px] text-gray-300 font-bold uppercase tracking-wider">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-6 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-[10px] italic">Management Rules</h4>
                            <ul className="space-y-3">
                                {["Roll up/out for net credit", "Close before earnings ITM", "Monitor ex-div dates", "Sell next call immediately", "Keep shares long-term"].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-[11px] text-gray-300 font-bold uppercase tracking-wider">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto py-24">
                    <SectionHeader label="Knowledge Base" title="Covered Calls FAQ" align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "What happens if the stock price crashes suddenly?", a: "The premium you collected acts as a small cushion. However, a covered call does NOT provide significant downside protection. If you are worried about a crash, you should use protective puts or simply sell the stock." },
                            { q: "Do I still get dividends while I have a covered call open?", a: "Yes, you own the shares, so you receive dividends. However, if the call is 'In-The-Money' near the ex-dividend date, the call buyer might exercise early to steal the dividend from you." },
                            { q: "Is it better to sell weekly or monthly covered calls?", a: "Monthly (30-45 DTE) is generally better. It offers a superior balance of premium, theta decay, and management time. Weeklies are too labor-intensive and have much higher 'gamma risk' near expiration." },
                            { q: "Can I sell a covered call on less than 100 shares?", a: "No. One standard options contract always represents 100 shares. If you own 150 shares, you can only sell one covered call. The other 50 shares remain uncovered." }
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
                            { title: "Credit Spreads", path: "/strategies/credit-spreads" },
                            { title: "Iron Condors", path: "/strategies/iron-condor" },
                            { title: "Cash Secured Puts", path: "/strategies/cash-secured-put" },
                            { title: "Protective Puts", path: "/strategies/protective-puts" },
                            { title: "Options Greeks", path: "/options-greeks-explained" },
                            { title: "Implied Volatility", path: "/understanding-implied-volatility" },
                            { title: "Dividend Trading", path: "/dividend-trading-strategies" },
                            { title: "Performance", path: "/performance" }
                        ].map((link, i) => (
                            <Link key={i} to={link.path} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all uppercase tracking-widest">
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="pt-20 border-t border-white/5 text-center text-[10px] text-gray-600 space-y-4">
                    <p className="font-black uppercase tracking-[0.3em]">DISCLAIMER</p>
                    <p className="max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                        Options trading involves risk. Covered calls cap upside potential and do not fully protect against downside loss. Results shown are from actual member trades but do not guarantee future performance. OnlyOptions signals are for educational purposes.
                    </p>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA 
                   title="Start Generating Monthly Income Today"
                   subtitle={<>Join OnlyOptions to receive covered call signals with:<br/>✅ Strategic Strike Selection ✅ Monthly Yield Forecasting ✅ Earnings Guardrails ✅ Roll Notifications</>}
                />
            </div>
        </div>
    );
};

export default CoveredCallStrategy;
