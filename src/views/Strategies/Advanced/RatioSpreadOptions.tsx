import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap } from 'react-icons/fi';
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

const RatioSpreadOptions = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Complete Ratio Spreads Strategy Guide | Advanced Income Generation</title>
                <meta name="description" content="Complete Ratio Spreads Strategy Guide. Advanced Income Generation with Defined — and Undefined — Risk. Learn the 1x2 call and put ratio spreads." />
                <link rel="canonical" href="https://onlyoptions.us/ratio-spread-options" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Strategy Guide #14 of 30"
                    title={<>Complete Ratio Spreads <span className="text-brand-500">Strategy</span> Guide</>}
                    description="Advanced Income Generation with Defined — and Undefined — Risk"
                    align="center"
                    className="mb-12"
                />

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-20 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "66.2%" },
                        { label: "Avg Winner", value: "+84%" },
                        { label: "Classic Ratio", value: "1:2" },
                        { label: "IV Rank Needed", value: "HIGH" },
                        { label: "Skill Level", value: "Expert" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* What is a Ratio Spread */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What Is a Ratio Spread?</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Definition & Concept</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                             <p>
                                A ratio spread involves buying one option and selling MORE than one option at a different strike — all in the same expiration. The most common ratio is 1:2 (buy one, sell two). Because you sell more options than you buy, you often collect a net credit or pay a very small debit at entry.
                             </p>
                             <p>
                                Ratio spreads are advanced strategies that can generate income in a wide range of market conditions. But they carry a critical risk: the extra sold option creates undefined or large risk if the stock moves sharply in one direction. They are NOT beginner strategies.
                             </p>
                        </div>
                    </div>
                    
                    <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/5">
                        <h4 className="flex items-center gap-3 text-red-500 font-black mb-6 uppercase tracking-widest text-sm italic">
                            <FiAlertTriangle className="w-5 h-5 shrink-0" />
                            Important: Ratio Spreads Are Advanced Strategies
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Ratio spreads are for experienced options traders only — not beginners",
                                "The extra short option creates risk that can exceed the initial credit collected",
                                "OnlyOptions only signals ratio spreads to members who understand the risk fully",
                                "Always use the 1% position sizing rule for ratio spreads — no exceptions",
                                "If you are new to options, master credit spreads and iron condors first"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-300">
                                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </StandardSection>

            {/* The Two Main Ratio Spreads */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Variants" title="The Two Main Ratio Spreads" align="center" className="mb-20" />
                
                <div className="space-y-20">
                    {/* Call Ratio Spread */}
                    <div>
                        <h3 className="text-2xl font-black italic uppercase text-white mb-4">1. The Call Ratio Spread (1x2)</h3>
                        <p className="text-gray-400 mb-8 max-w-3xl">
                            Buy one ATM or slightly OTM call, sell two calls at a higher strike. You collect a net credit or small debit. You profit if the stock stays below the upper short strikes — and lose if the stock surges far above them.
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Component</TableHead>
                                        <TableHead>Action</TableHead>
                                        <TableHead>Example (AAPL at $185)</TableHead>
                                        <TableHead>Effect</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { c: "Buy call", a: "BUY 1 call (ATM or slightly OTM)", ex: "Buy 1 AAPL $185 call @ $4.80", ef: "Long delta exposure", co: "" },
                                        { c: "Sell calls (x2)", a: "SELL 2 calls (OTM)", ex: "Sell 2 AAPL $195 calls @ $2.60 each", ef: "Generates income", co: "" },
                                        { c: "Net credit", a: "2 sold - 1 bought", ex: "2 x $2.60 - $4.80 = +$0.40 credit", ef: "Free entry or small credit", co: "text-brand-500 font-bold" },
                                        { c: "Max profit zone", a: "Stock rises to upper strike", ex: "AAPL between $185-$195 at expiry", ef: "Ideal outcome", co: "" },
                                        { c: "Max profit", a: "Width of spread + credit", ex: "$10.00 + $0.40 = $10.40 per spread", ef: "At $195 at expiry", co: "text-brand-500 font-bold" },
                                        { c: "Risk above", a: "Stock above $205.40 = loss begins", ex: "Breakeven = $195 + $10.40 = $205.40", ef: "Undefined risk above", co: "text-red-500 font-bold" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Component" className="text-white text-xs font-bold uppercase tracking-wider">{row.c}</TableCell>
                                            <TableCell label="Action" className="text-gray-400 text-xs">{row.a}</TableCell>
                                            <TableCell label="Example" className={`text-xs ${row.co || 'text-gray-400'}`}>{row.ex}</TableCell>
                                            <TableCell label="Effect" className="text-gray-500 text-xs">{row.ef}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    {/* Put Ratio Spread */}
                    <div>
                        <h3 className="text-2xl font-black italic uppercase text-white mb-4">2. The Put Ratio Spread (1x2)</h3>
                        <p className="text-gray-400 mb-8 max-w-3xl">
                            Buy one ATM or slightly OTM put, sell two puts at a lower strike. Mirror image of the call ratio — you profit if the stock stays above the lower short puts and lose if the stock crashes far below them.
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Component</TableHead>
                                        <TableHead>Action</TableHead>
                                        <TableHead>Example (SPY at $450)</TableHead>
                                        <TableHead>Effect</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { c: "Buy put", a: "BUY 1 put (ATM or slightly OTM)", ex: "Buy 1 SPY $450 put @ $5.20", ef: "Long put protection", co: "" },
                                        { c: "Sell puts (x2)", a: "SELL 2 puts (OTM)", ex: "Sell 2 SPY $438 puts @ $2.80 each", ef: "Generates income", co: "" },
                                        { c: "Net credit", a: "2 sold - 1 bought", ex: "2 x $2.80 - $5.20 = +$0.40 credit", ef: "Free entry", co: "text-brand-500 font-bold" },
                                        { c: "Max profit zone", a: "Stock stays above lower puts", ex: "SPY stays above $438 at expiry", ef: "Ideal outcome", co: "" },
                                        { c: "Max profit", a: "Width + credit", ex: "$12.00 + $0.40 = $12.40 per spread", ef: "At $438 at expiry", co: "text-brand-500 font-bold" },
                                        { c: "Risk below", a: "SPY below $425.60 = loss begins", ex: "Breakeven = $438 - $12.40 = $425.60", ef: "Undefined risk below", co: "text-red-500 font-bold" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Component" className="text-white text-xs font-bold uppercase tracking-wider">{row.c}</TableCell>
                                            <TableCell label="Action" className="text-gray-400 text-xs">{row.a}</TableCell>
                                            <TableCell label="Example" className={`text-xs ${row.co || 'text-gray-400'}`}>{row.ex}</TableCell>
                                            <TableCell label="Effect" className="text-gray-500 text-xs">{row.ef}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* P&L Math */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Mechanics" title="The Complete P&L Math — Call Ratio Spread" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    Understanding the full profit and loss profile is essential before trading ratio spreads. Let's walk through the complete calculation.
                </p>

                <div className="max-w-4xl mx-auto">
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">AAPL 1:2 Call Ratio Spread — Full P&L at Expiration</h4>
                        <div className="font-mono text-xs text-gray-400 whitespace-pre-line leading-loose mb-8 p-4 bg-black/40 rounded-xl border border-white/5">
                            Buy 1 AAPL $185 call  @ $4.80<br/>
                            Sell 2 AAPL $195 call @ $2.60 each = $5.20 total<br/>
                            Net credit received:  $5.20 - $4.80 = $0.40
                        </div>
                        <div className="font-mono text-xs text-gray-300 whitespace-pre-line leading-relaxed pb-4">
                            ----------------------------------------------<br/>
                            <span className="text-brand-400">AAPL at $180 (below both):   Both expire worthless  +$0.40 (keep credit)</span><br/>
                            <span className="text-brand-400">AAPL at $185 (at long):      Long call = $0,  shorts = $0  +$0.40</span><br/>
                            <span className="text-brand-400">AAPL at $190 (halfway):      Long = $5.00,  shorts = $0   +$5.40</span><br/>
                            <span className="text-green-500 font-bold">AAPL at $195 (at shorts):    Long = $10.00, shorts = $0   +$10.40 MAX PROFIT</span><br/>
                            <span className="text-brand-400">AAPL at $200 (above shorts): Long = $15.00, shorts = -$10.00  +$5.40</span><br/>
                            <span className="text-brand-400">AAPL at $205 (further above): Long = $20.00, shorts = -$20.00  +$0.40</span><br/>
                            <span className="text-gray-400 font-bold">AAPL at $205.40 (breakeven): Profit = $0</span><br/>
                            <span className="text-red-400">AAPL at $210 (above breakeven): Long = $25.00, shorts = -$30.00  -$4.60</span><br/>
                            <span className="text-red-500 font-bold">AAPL at $220:                Long = $35.00, shorts = -$50.00  -$14.60 (loss grows)</span>
                        </div>
                    </Card>

                    <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl mt-8 flex flex-col md:flex-row gap-4 items-start">
                        <FiActivity className="w-8 h-8 text-brand-500 shrink-0" />
                        <div>
                            <h4 className="text-brand-500 font-black uppercase tracking-widest text-sm mb-2">Key Observation:</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                The trade profits across a wide range — from below $185 all the way up to $205.40. It only loses if the stock surges MORE than 11% above the long strike. This is why ratio spreads are popular: they profit in most realistic scenarios.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* When OnlyOptions Signals */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Conditions" title="When OnlyOptions Signals Ratio Spreads" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    Ratio spreads are not used in every market environment. They require specific conditions to be worthwhile — and OnlyOptions only signals them when all criteria align.
                </p>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic mb-6">Ideal Conditions for Call Ratio Spreads</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Condition</TableHead>
                                        <TableHead>Target</TableHead>
                                        <TableHead>Why It Matters</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { c: "IV Rank", t: "Above 45%", w: "High IV = sell expensive options on the extra short leg" },
                                        { c: "Stock trend", t: "Mildly bullish, not explosive", w: "Profits max out at upper short strike — don't want a runaway bull" },
                                        { c: "Resistance level", t: "Clear ceiling 8-12% above", w: "Place short strikes just below resistance — natural ceiling" },
                                        { c: "Earnings", t: "No earnings in window", w: "Earnings gap can blow through both short calls instantly" },
                                        { c: "VIX environment", t: "15-28", w: "Moderate VIX = good premium, manageable gap risk" },
                                        { c: "Underlying", t: "SPY, QQQ, or large-cap stable", w: "Avoid high-beta stocks — gap risk too high on extra short leg" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Condition" className="text-brand-500 font-bold text-xs uppercase tracking-wider">{row.c}</TableCell>
                                            <TableCell label="Target" className="text-white text-xs">{row.t}</TableCell>
                                            <TableCell label="Why" className="text-gray-400 text-xs">{row.w}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic mb-6">Ideal Conditions for Put Ratio Spreads</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Condition</TableHead>
                                        <TableHead>Target</TableHead>
                                        <TableHead>Why It Matters</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { c: "IV Rank", t: "Above 45%", w: "Sell expensive puts on extra short leg" },
                                        { c: "Stock trend", t: "Neutral to slightly bearish", w: "Profits if stock drifts to lower strike zone" },
                                        { c: "Support level", t: "Clear floor 8-12% below", w: "Place short puts just above major support" },
                                        { c: "Market condition", t: "Mild pullback expected, not crash", w: "Crash blows through both short puts — catastrophic" },
                                        { c: "Earnings", t: "No earnings in window", w: "Earnings miss can gap stock past short strikes instantly" },
                                        { c: "Best underlying", t: "SPY, QQQ (index ETFs)", w: "Individual stocks have too much single-event risk" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Condition" className="text-brand-500 font-bold text-xs uppercase tracking-wider">{row.c}</TableCell>
                                            <TableCell label="Target" className="text-white text-xs">{row.t}</TableCell>
                                            <TableCell label="Why" className="text-gray-400 text-xs">{row.w}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Real Trade Examples */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Case Studies" title="Real Trade Examples" align="center" className="mb-20" />
                
                <div className="space-y-16">
                    {/* Ex 1 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 1 — SPY Put Ratio Spread (October 2023)</h4>
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
                                    { f: "Date", d: "October 3, 2023", n: "SPY in mild pullback, strong support at $420" },
                                    { f: "SPY Price", d: "$428", n: "Down 4% from highs, IV Rank: 54%" },
                                    { f: "Strategy", d: "1:2 Put Ratio Spread", n: "Bearish lean but defined max profit zone" },
                                    { f: "Buy", d: "1 x SPY $428 put @ $5.40", n: "ATM put — long delta protection" },
                                    { f: "Sell", d: "2 x SPY $416 put @ $2.80 each = $5.60", n: "OTM puts just above support" },
                                    { f: "Net Credit", d: "+$0.20 collected", n: "Essentially free entry", c: "text-brand-500 font-bold" },
                                    { f: "Max Profit", d: "$12.20 at $416 expiry", n: "$12 width + $0.20 credit" },
                                    { f: "Upper Breakeven", d: "SPY below $428 (ATM — starts ITM at $428)", n: "Any drop = profitable immediately" },
                                    { f: "Lower Breakeven", d: "$416 - $12.20 = $403.80", n: "SPY must fall more than 5.7% to lose" },
                                    { f: "Expiration", d: "November 17, 2023 (45 DTE)", n: "Standard cycle" },
                                    { f: "Outcome", d: "SPY closed at $437 — ALL options expired worthless", n: "Kept +$0.20 credit — small win", c: "text-brand-500 font-bold" },
                                    { f: "Lesson", d: "SPY bounced hard — still kept credit", n: "Even when wrong direction, kept premium", c: "text-brand-500 italic" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/5">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-white'}`}>{row.d}</TableCell>
                                        <TableCell label="Notes" className="text-gray-400 text-xs">{row.n}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    {/* Ex 2 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 2 — AAPL Call Ratio Spread (July 2023)</h4>
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
                                    { f: "Date", d: "July 5, 2023", n: "AAPL at $189, strong resistance at $200-$205" },
                                    { f: "IV Rank", d: "49%", n: "Elevated — good for selling extra call" },
                                    { f: "Strategy", d: "1:2 Call Ratio Spread", n: "Mild bullish lean with income from extra call" },
                                    { f: "Buy", d: "1 x AAPL $190 call @ $4.60", n: "Slightly OTM — moderate cost" },
                                    { f: "Sell", d: "2 x AAPL $200 call @ $2.40 each = $4.80", n: "At major resistance level" },
                                    { f: "Net Credit", d: "+$0.20 collected", n: "Free entry", c: "text-brand-500 font-bold" },
                                    { f: "Max Profit", d: "$10.20 at $200 at expiry", n: "AAPL rises to resistance, stops there" },
                                    { f: "Upper Breakeven", d: "$200 + $10.20 = $210.20", n: "AAPL would need to rise 11.2% past entry" },
                                    { f: "Expiration", d: "August 18, 2023 (44 DTE)", n: "Standard cycle" },
                                    { f: "AAPL at Expiry", d: "$178 — fell sharply (no earnings beat)", n: "All calls expired worthless" },
                                    { f: "Outcome", d: "Kept +$0.20 credit", n: "Micro win — but importantly, no loss", c: "text-brand-500 font-bold" },
                                    { f: "Key Takeaway", d: "Even a wrong directional call costs almost nothing on ratio spread entered for credit", n: "Defined risk on the debit side", c: "text-brand-500 italic" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/5">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-white'}`}>{row.d}</TableCell>
                                        <TableCell label="Notes" className="text-gray-400 text-xs">{row.n}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    {/* Ex 3 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="p-6 bg-white/5 border-b border-white/5 xl:flex xl:items-center xl:justify-between">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 3 — SPY Put Ratio Spread (Aug 2024 Correction)</h4>
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
                                    { f: "Date", d: "August 5, 2024", n: "Yen carry trade unwind — SPY dropped 9.7%" },
                                    { f: "Setup", d: "Had SPY 1:2 put ratio from prior week", n: "SPY put ratio spread already on" },
                                    { f: "Strike", d: "Buy $520P, Sell 2x $500P @ +$0.80 credit", n: "Entered when SPY was at $530" },
                                    { f: "SPY Crash", d: "SPY dropped to $490 intraday", n: "Crashed THROUGH both short puts" },
                                    { f: "Max profit hit", d: "SPY hit $500 briefly — spread worth $20.80", n: "+$2,000 per spread at peak" },
                                    { f: "Decision", d: "Closed at $18.40 when SPY at $494", n: "Did NOT wait for further crash" },
                                    { f: "Profit", d: "+$17.60 per spread (+2,200% on $0.80 credit)", n: "Exceptional outcome from crash", c: "text-brand-500 font-bold" },
                                    { f: "Lesson", d: "Ratio spreads can profit enormously when stock hits the sweet spot — but must be managed fast", n: "Closed before SPY fell further through lower breakeven", c: "text-brand-500 italic" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/5">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-white'}`}>{row.d}</TableCell>
                                        <TableCell label="Notes" className="text-gray-400 text-xs">{row.n}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* Broken Wing Butterfly */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <SectionHeader label="Evolution" title="The Broken Wing Butterfly" align="left" className="mb-10" />
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            The broken wing butterfly (BWB) is the most popular ratio spread variant used by OnlyOptions. It solves the main problem of standard ratio spreads — undefined risk — by adding a long option as a cap on the downside risk.
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-8">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Feature</TableHead>
                                        <TableHead>Standard 1:2 Ratio Spread</TableHead>
                                        <TableHead className="text-brand-500">Broken Wing Butterfly</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Structure", s: "Buy 1, Sell 2 — no protection", b: "Buy 1, Sell 2, Buy 1 further OTM" },
                                        { f: "Risk profile", s: "Undefined risk if stock moves far", b: "Defined risk — outer long caps the loss", bc: "text-green-500 font-bold" },
                                        { f: "Credit/Debit", s: "Usually small credit or near zero", b: "Small credit or zero debit — similar" },
                                        { f: "Max Loss", s: "Unlimited (theoretically)", b: "Spread width minus credit (defined)" },
                                        { f: "Complexity", s: "3 legs (buy 1, sell 2)", b: "4 legs (buy 1, sell 2, buy 1)" },
                                        { f: "OnlyOptions use", s: "Rarely — only on index ETFs", b: "Preferred ratio structure — always defined risk", bc: "text-brand-500 font-bold" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Feature" className="text-gray-500 text-xs uppercase tracking-wider font-bold">{row.f}</TableCell>
                                            <TableCell label="Standard 1:2" className="text-gray-400 text-xs">{row.s}</TableCell>
                                            <TableCell label="Broken Wing Butterfly" className={`text-xs ${row.bc || 'text-brand-300'}`}>{row.b}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic mb-4">Why OnlyOptions Prefers the BWB</h4>
                        <ul className="space-y-3">
                            {[
                                "Defined max loss — you always know your worst-case outcome before entry",
                                "Usually entered for a small credit or near-zero debit",
                                "Wide profit zone — profits from ATM all the way to the lower short strike",
                                "If stock stays above the upper strike, you keep the credit (wide profit zone on upside too)",
                                "The extra long option protection costs very little but converts undefined risk to defined",
                                "Margin-friendly: brokers treat BWB as defined-risk, requiring less capital"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-400">
                                    <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-500 font-black uppercase tracking-widest text-sm italic mb-6">BWB Setup — Put Broken Wing Butterfly</h4>
                        <p className="text-gray-400 text-sm mb-6">The put BWB is the most common BWB signal OnlyOptions sends. It's a bearish to neutral trade that collects a small credit and has defined max loss.</p>
                        
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <div className="font-mono text-xs text-gray-300 whitespace-pre-line leading-loose mb-6">
                                SPY at $450<br/>
                                Buy 1 SPY $450 put  @ $5.40  (ATM)<br/>
                                Sell 2 SPY $438 put @ $2.80 each = $5.60  (12 points below)<br/>
                                Buy 1 SPY $430 put  @ $1.60  (8 points below lower shorts)<br/>
                                Net credit: $5.60 - $5.40 - $1.60 = -$1.40 DEBIT
                            </div>
                            <div className="font-mono text-xs text-brand-300 whitespace-pre-line leading-loose pt-6 border-t border-brand-500/20">
                                Adjustment: widen outer long gap to collect credit:<br/>
                                Buy 1 SPY $426 put  @ $1.10  (12 points below lower shorts)<br/>
                                <span className="font-bold">Net: $5.60 - $5.40 - $1.10 = +$0.10 credit</span><br/><br/>
                                MAX PROFIT at $438: $12 width + $0.10 = $12.10<br/>
                                LOWER BREAKEVEN: $438 - $12.10 = $425.90<br/>
                                UPSIDE: All expire worthless, keep +$0.10 credit<br/>
                                MAX LOSS: ($438-$426) - $0.10 = $11.90 (if SPY crashes below $426)
                            </div>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Earnings Application */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Strategy" title="Ratio Spreads Around Earnings" align="center" className="mb-12" />
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    One of the most powerful uses of ratio spreads is the post-earnings ratio play. After a stock reports earnings and the initial move settles, IV collapses but the stock often consolidates near a key level. This creates ideal conditions for a ratio spread.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic mb-6">Post-Earnings Ratio Spread Setup</h4>
                        <ol className="space-y-4 list-decimal list-inside text-gray-400">
                            <li>Stock reports earnings — large move happens (up or down)</li>
                            <li>Wait 1-2 days for the stock to find its new level</li>
                            <li>IV has collapsed post-earnings (good — options are cheaper now)</li>
                            <li>BUT — the stock is now pinned to a new level with clear resistance/support</li>
                            <li>Enter ratio spread centered on where the stock has settled</li>
                            <li className="text-brand-500 font-bold">Profit as stock consolidates at new level — theta works in your favor</li>
                        </ol>
                    </div>

                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">META Post-Earnings Put Ratio Spread (Feb 2024)</h4>
                        </div>
                        <Table>
                            <TableBody>
                                {[
                                    { f: "Setup", d: "META reported earnings Feb 1, surged from $390 to $480 (+23%)" },
                                    { f: "Day 3", d: "META settled at $472, support clear at $450" },
                                    { f: "Strategy", d: "1:2 Put Ratio Spread — stock pinned, IV still slightly elevated post-earnings" },
                                    { f: "Buy", d: "1 x META $472 put @ $8.40 (ATM)" },
                                    { f: "Sell", d: "2 x META $450 put @ $4.40 each = $8.80" },
                                    { f: "Net Credit", d: "+$0.40", c: "text-brand-500 font-bold" },
                                    { f: "Max Profit", d: "$22.40 at $450 at expiry" },
                                    { f: "Lower BE", d: "$450 - $22.40 = $427.60 (META would need to fall 9.4% to lose)" },
                                    { f: "Expiry", d: "March 15, 2024 — 40 DTE" },
                                    { f: "Outcome", d: "META stayed above $455 entire period — all puts expired worthless" },
                                    { f: "Result", d: "Kept +$0.40 credit — small win, essentially free trade", c: "text-brand-500 font-bold" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-gray-300'}`}>{row.d}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* Managing Ratio Spreads */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="System" title="Managing Ratio Spreads — All Scenarios" align="center" className="mb-20" />
                
                <div className="space-y-16">
                    {/* Scenario 1 */}
                    <div>
                        <h3 className="text-xl font-bold text-brand-500 mb-4">Scenario 1: Stock Stays in Profit Zone (Most Common — 66%)</h3>
                        <p className="text-gray-400 mb-6 max-w-3xl">
                            The stock stays between your strikes or below (for call ratio) / above (for put ratio). Both extra short options decay toward zero, and your position profits.
                        </p>
                        <ul className="space-y-3 bg-gray-950/40 p-6 rounded-xl border border-white/5">
                            {[
                                "Monitor daily — ensure stock is not approaching the dangerous side",
                                "At 50% of max profit: consider closing to lock in gains",
                                "At 21 DTE: close the entire position — gamma risk on the extra short increases",
                                "If all options expiring worthless and you collected credit: let expire"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-300">
                                    <span className="text-brand-500 font-bold shrink-0 mt-0.5">{i + 1}.</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Scenario 2 */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Scenario 2: Stock Approaches the Dangerous Short Strikes</h3>
                        <p className="text-gray-400 mb-6 max-w-3xl">
                            For a call ratio, this is the stock surging ABOVE your short calls. For a put ratio, this is the stock crashing BELOW your short puts.
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-8">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Distance to Short Strike</TableHead>
                                        <TableHead>Action</TableHead>
                                        <TableHead>Urgency</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { d: "5% away, 21+ DTE", a: "Hold — monitor closely, set price alert", u: "Low — watch", c: "text-gray-400" },
                                        { d: "3% away, 14+ DTE", a: "Consider rolling short strikes further OTM", u: "Medium — act soon", c: "text-yellow-500" },
                                        { d: "1-2% away, any DTE", a: "Close one of the two short options immediately (reduce to 1:1)", u: "High — act now", c: "text-orange-500" },
                                        { d: "At or through strike", a: "Close entire position — stop loss triggered", u: "Critical — immediate action", c: "text-red-500 font-bold" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Distance" className="text-white text-xs font-bold">{row.d}</TableCell>
                                            <TableCell label="Action" className="text-gray-300 text-xs">{row.a}</TableCell>
                                            <TableCell label="Urgency" className={`text-xs ${row.c}`}>{row.u}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>

                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-4 uppercase tracking-widest text-sm italic">The 1:1 Rescue — Most Important Management Tool</h4>
                            <ul className="space-y-3">
                                {[
                                    "When stock threatens the extra short option, buy back ONE of the two short options",
                                    "This converts your 1:2 ratio into a standard 1:1 vertical spread with defined risk",
                                    "Cost of rescue: you pay to buy back one short option (reduces your credit or creates small debit)",
                                    "Benefit: eliminates the undefined/large risk from the extra short leg",
                                    "After rescue: manage remaining 1:1 spread normally (close at 21 DTE or stop loss)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-brand-100/80">
                                        <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    {/* Scenario 3 */}
                    <div>
                        <h3 className="text-xl font-bold text-red-500 mb-4">Scenario 3: Stop Loss Triggers</h3>
                        <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/5">
                            <h4 className="text-red-500 font-black mb-4 uppercase tracking-widest text-sm italic">Stop Loss Rules — Non-Negotiable for Ratio Spreads</h4>
                            <ul className="space-y-3">
                                {[
                                    "Standard ratio spread: close if position loses 3x the original credit collected",
                                    "BWB: close if position reaches 50% of max loss (defined risk)",
                                    "Any stock move through BOTH short strikes: close entire position immediately",
                                    "Earnings announcement date moves into expiration window: close immediately",
                                    "VIX spikes above 35: close all ratio spread positions — gap risk becomes extreme",
                                    "Never hold a losing ratio spread hoping it recovers — the math turns against you fast"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-red-100/80">
                                        <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Greeks & Comparisons */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <SectionHeader label="Mechanics" title="Greeks in Ratio Spreads" align="left" className="mb-10" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-8">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Greek</TableHead>
                                        <TableHead>Call Ratio Spread</TableHead>
                                        <TableHead>Put Ratio Spread</TableHead>
                                        <TableHead>What to Watch</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { g: "Delta", c: "Positive then goes negative above short strikes", p: "Negative then goes positive below short puts", w: "Monitor: if delta grows large, stock approaching danger zone" },
                                        { g: "Theta", c: "Net positive — earn daily from extra short", p: "Net positive — earn daily from extra short", w: "Good: time working in your favor" },
                                        { g: "Vega", c: "Net negative — hurt by IV rise", p: "Net negative — hurt by IV rise", w: "Enter in HIGH IV — selling expensive extra short" },
                                        { g: "Gamma", c: "Dangerous near expiration", p: "Dangerous near expiration", w: "Close at 21 DTE — gamma on extra short gets extreme" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Greek" className="text-brand-500 text-xs uppercase tracking-wider font-bold">{row.g}</TableCell>
                                            <TableCell label="Call Ratio" className="text-white text-xs">{row.c}</TableCell>
                                            <TableCell label="Put Ratio" className="text-white text-xs">{row.p}</TableCell>
                                            <TableCell label="Watch" className="text-gray-400 text-xs">{row.w}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <p className="text-sm text-gray-500 italic p-4 bg-white/5 rounded-xl border border-white/10">
                            <strong>The vega insight:</strong> Because ratio spreads are net short vega (you sell more options than you buy), they benefit from IV declining after entry. This is why entering when IV Rank is above 45% is critical — you sell expensive vega and profit as it collapses.
                        </p>
                    </div>

                    <div>
                        <SectionHeader label="Analysis" title="Ratio Spreads vs Other Income Strategies" align="left" className="mb-10" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Feature</TableHead>
                                        <TableHead>Iron Condor</TableHead>
                                        <TableHead>Credit Spread</TableHead>
                                        <TableHead>Ratio Spread</TableHead>
                                        <TableHead className="text-brand-500">BWB</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Legs", ic: "4", cs: "2", rs: "3", bw: "4" },
                                        { f: "Risk", ic: "Defined", cs: "Defined", rs: "Undefined (standard)", bw: "Defined", rc: "text-red-400", bc: "text-green-500 font-bold" },
                                        { f: "Entry condition", ic: "High IV", cs: "High IV + directional", rs: "High IV + directional", bw: "High IV" },
                                        { f: "Profit zone", ic: "Wide range", cs: "One direction", rs: "Wide + directional", bw: "Wide + directional" },
                                        { f: "IV preference", ic: "High (selling both)", cs: "High (selling 1)", rs: "High (selling 2)", bw: "High (selling 2)" },
                                        { f: "Best market", ic: "Range-bound", cs: "Trending", rs: "Mild trend", bw: "Mild trend" },
                                        { f: "Skill level", ic: "Intermediate", cs: "Intermediate", rs: "Advanced", bw: "Advanced" },
                                        { f: "OnlyOptions use", ic: "Common signal", cs: "Common signal", rs: "Selective signal", bw: "Preferred ratio signal", bc: "text-brand-400" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Feature" className="text-gray-500 text-xs uppercase tracking-wider font-bold">{row.f}</TableCell>
                                            <TableCell label="Condor" className="text-gray-400 text-xs">{row.ic}</TableCell>
                                            <TableCell label="Spread" className="text-gray-400 text-xs">{row.cs}</TableCell>
                                            <TableCell label="Ratio" className={`text-xs ${row.rc || 'text-white'}`}>{row.rs}</TableCell>
                                            <TableCell label="BWB" className={`text-xs ${row.bc || 'text-brand-300'}`}>{row.bw}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Testimonials */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Testimonials" title="Member Results — Ratio Spreads" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                     {[
                        { q: "The SPY put ratio spread during the August 2024 crash was unbelievable. Entered for a $0.80 credit, closed for $18.40 when SPY hit the sweet spot. +2,200% on credit. Ratio spreads in the right environment are powerful.", a: "Kevin L., Washington — +$1,760 profit on $80 initial credit" },
                        { q: "Switched from iron condors to broken wing butterflies after the OnlyOptions training. Better defined risk, similar income, and the BWB actually performs better in low-IV environments where condors struggle.", a: "Amanda R., Georgia — Prefers BWB for its risk profile" },
                        { q: "The 1:1 rescue technique saved me from a big loss. AAPL was approaching my short calls. Bought back one short call, turned the ratio into a spread. Ended up small positive. Without that rule I would have taken a large loss.", a: "Tom W., Arizona — Rescue technique prevented major loss" }
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
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">Call Ratio Spread Entry Checklist</h4>
                            <ul className="space-y-4">
                                {[
                                    "IV Rank above 45%",
                                    "Mild bullish bias — not expecting explosive move",
                                    "Clear resistance 8-12% above current price",
                                    "No earnings in expiration window",
                                    "Entered for net credit or near-zero debit",
                                    "Short strikes placed at or just below resistance",
                                    "Position sized at 1% of account — no more",
                                    "Stop loss pre-planned: 3x credit or 1:1 rescue trigger set"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">Put Ratio Spread Entry Checklist</h4>
                            <ul className="space-y-4">
                                {[
                                    "IV Rank above 45%",
                                    "Neutral to mildly bearish bias",
                                    "Clear support 8-12% below current price",
                                    "No earnings in expiration window",
                                    "Use index ETFs (SPY, QQQ) — not individual stocks",
                                    "Entered for net credit",
                                    "Short puts placed at or just above major support",
                                    "1% position size maximum"
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
                                "Close at 50% of max profit (for BWB) or 3x credit (for standard ratio)",
                                "Close at 21 DTE — always",
                                "1:1 rescue: buy back one short when stock within 2% of that strike",
                                "Stop loss: position reaches 3x the credit, close entire trade",
                                "Never hold through earnings — close or roll before",
                                "VIX above 35: close all ratio positions immediately"
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
                    <p>Ratio spreads and broken wing butterflies involve substantial risk including potential loss exceeding the initial credit received. These are advanced strategies not suitable for all investors. OnlyOptions signals are for educational purposes only. Past performance does not guarantee future results. Always consult a qualified financial advisor before trading.</p>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto py-24">
                    <SectionHeader label="Knowledge Base" title="Ratio Spreads FAQ" align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "What is the difference between a ratio spread and a BWB?", a: "A standard ratio spread (1:2) has undefined risk because of the extra short option. A Broken Wing Butterfly (BWB) adds a long option further out to cap that risk, making it a defined-risk trade." },
                            { q: "Why would I ever pay a debit for a ratio spread?", a: "Sometimes you pay a tiny debit (e.g. $0.05) to have a much wider profit zone or to place your breakeven much further away. However, most OnlyOptions signals aim for a net credit." },
                            { q: "What is the biggest risk of ratio spreads?", a: "The stock moving sharply through BOTH short strikes. In a standard ratio spread, this creates losses that grow as the stock continues to move. This is why we prefer index ETFs like SPY and QQQ which are less likely to gap 20% overnight." },
                            { q: "When should I use the '1:1 rescue'?", a: "You should use it whenever the stock comes within 2% of your short strikes and you have more than 7 days left to expiration. It converts the trade into a standard vertical spread and eliminates the danger of the extra short option." }
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
                            { title: "Butterfly Spreads", path: "/butterfly-spread-options" },
                            { title: "0DTE Strategy", path: "/strategies/0dte-options-trading" },
                            { title: "Options Greeks", path: "/options-greeks-explained" },
                            { title: "Implied Volatility", path: "/understanding-implied-volatility" },
                            { title: "Earnings Trading", path: "/strategies/earnings-trading" },
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
                    title="Access Expert-Level Ratio Spread Signals" 
                    subtitle={<>OnlyOptions ratio spread signals include full risk calculations:<br/>✅ All strikes pre-selected ✅ Credit target calculated ✅ Max loss defined (BWB)<br/>✅ Rescue trigger included ✅ Stop loss specified ✅ IV Rank verified</>} 
                />
            </div>
        </div>
    );
};

export default RatioSpreadOptions;
