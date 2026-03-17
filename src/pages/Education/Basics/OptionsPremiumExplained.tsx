import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiDollarSign, FiClock, FiTrendingUp, FiTrendingDown, FiZap, FiCheck, FiAlertTriangle, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../components/ui/Card/Card';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/Table/Table';

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
    <details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white uppercase tracking-wider text-sm transition-colors hover:bg-white/[0.02]">
            {question}
            <span className="text-brand-500 transition-transform group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
        </summary>
        <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-4 pt-6">
            {answer}
        </div>
    </details>
);

const OptionsPremiumExplained = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Options Premium Pricing Explained: Complete Guide 2026</title>
                <meta name="description" content="Learn what determines options premium prices: intrinsic value, time value, the 6 factors that affect pricing, and why options cost what they cost. Complete guide with examples." />
                <link rel="canonical" href="https://onlyoptions.us/understanding-options-premium-pricing" />
            </Helmet>

            {/* ── HERO ── */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8 text-center">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                        <FiDollarSign className="text-brand-500" /> Pricing Fundamentals
                    </span>
                    <SectionHeader
                        label="Education"
                        title={<>Understanding Options <span className="text-brand-500">Premium Pricing</span></>}
                        description="Complete Guide to What Determines Option Prices"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        You see an option priced at $2.40 ($240 per contract). But why $2.40? Why not $1.20 or $4.80? Options prices are not random — they are calculated based on 6 key factors.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Understanding these factors helps you identify cheap vs expensive options and make smarter trading decisions.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Components", value: "2 Parts" },
                        { label: "Pricing Factors", value: "6 Forces" },
                        { label: "Main Driver", value: "IV & Theta" },
                        { label: "Decay Accelerates", value: "Last 7 Days" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-white font-black mb-1 text-2xl tracking-tight uppercase italic">{stat.value}</h4>
                            <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* ── TWO COMPONENTS ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Core Concept" title="The Two Components of Option Premium" align="center" className="mb-16" />
                <div className="max-w-5xl mx-auto space-y-8">
                    <Card variant="institutional" className="p-8 border-brand-500/20 bg-brand-500/5 text-center">
                        <p className="text-brand-500 text-[10px] font-black uppercase tracking-[0.25em] mb-3">Formula</p>
                        <p className="text-white font-black text-xl md:text-2xl italic tracking-tight">
                            Option Premium = Intrinsic Value + Extrinsic Value
                        </p>
                        <p className="text-gray-500 text-xs mt-3 italic">= What It's Worth Now + What It Might Be Worth Later</p>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Intrinsic Value */}
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 space-y-6">
                            <div>
                                <h3 className="text-white font-black text-xl italic uppercase tracking-tight mb-1">Intrinsic Value</h3>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Real / "In-the-Money" Value</p>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                How much the option is in-the-money right now. The profit you would make if you exercised immediately.
                            </p>
                            <div className="space-y-3 bg-black/30 rounded-2xl p-5 border border-white/5">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-500 mb-3">Formulas</p>
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-500 font-bold uppercase">Call Intrinsic</span>
                                    <span className="text-white font-black italic">Stock Price − Strike (if +)</span>
                                </div>
                                <div className="flex justify-between text-xs mt-2">
                                    <span className="text-gray-500 font-bold uppercase">Put Intrinsic</span>
                                    <span className="text-white font-black italic">Strike − Stock Price (if +)</span>
                                </div>
                            </div>
                            <div className="space-y-3 text-xs">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-2">Examples (SPY @ $575)</p>
                                {[
                                    { s: "$570 call (ITM)", v: "$5.00 intrinsic", c: "text-green-400" },
                                    { s: "$575 call (ATM)", v: "$0.00 intrinsic", c: "text-yellow-500" },
                                    { s: "$580 call (OTM)", v: "$0 (can't be negative)", c: "text-red-400" },
                                ].map((r, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-gray-400 font-bold uppercase tracking-wider">{r.s}</span>
                                        <span className={`font-black italic ${r.c}`}>{r.v}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Extrinsic Value */}
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 space-y-6">
                            <div>
                                <h3 className="text-white font-black text-xl italic uppercase tracking-tight mb-1">Extrinsic Value</h3>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Time Value / "Hope Premium"</p>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                What traders pay for the possibility the option will gain intrinsic value before expiration. Pure time premium.
                            </p>
                            <div className="space-y-3 bg-black/30 rounded-2xl p-5 border border-white/5">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-500 mb-3">Formula</p>
                                <p className="text-white font-black text-xs italic">Extrinsic = Total Premium − Intrinsic Value</p>
                            </div>
                            <div className="space-y-3 text-xs">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">Example (SPY @ $580, $575 call @ $8.50, 7 DTE)</p>
                                {[
                                    { l: "Total Premium", v: "$8.50", c: "text-white" },
                                    { l: "Intrinsic ($580−$575)", v: "$5.00", c: "text-green-400" },
                                    { l: "Extrinsic (Time)", v: "$3.50", c: "text-brand-500" },
                                ].map((r, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-gray-400 font-bold uppercase tracking-wider">{r.l}</span>
                                        <span className={`font-black italic ${r.c}`}>{r.v}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Visual Breakdown Table */}
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="px-8 pt-6 pb-4 border-b border-white/5">
                            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-brand-500">Visual Breakdown — SPY @ $575</p>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Option</TableHead>
                                    <TableHead>Total Premium</TableHead>
                                    <TableHead className="text-green-400">Intrinsic</TableHead>
                                    <TableHead className="text-brand-500">Extrinsic</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { o: "SPY $570 call (ITM)", t: "$9.20", i: "$5.00", e: "$4.20" },
                                    { o: "SPY $575 call (ATM)", t: "$4.20", i: "$0.00", e: "$4.20" },
                                    { o: "SPY $580 call (OTM)", t: "$1.80", i: "$0.00", e: "$1.80" },
                                ].map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell label="Option" className="text-white font-black text-xs">{row.o}</TableCell>
                                        <TableCell label="Total" className="text-white font-bold text-xs">{row.t}</TableCell>
                                        <TableCell label="Intrinsic" className="text-green-400 font-black text-xs">{row.i}</TableCell>
                                        <TableCell label="Extrinsic" className="text-brand-500 font-black text-xs">{row.e}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    <div className="p-6 bg-brand-500/5 border border-brand-500/20 rounded-2xl flex gap-4 items-start max-w-4xl mx-auto">
                        <FiZap className="text-brand-500 shrink-0 mt-1" size={18} />
                        <p className="text-gray-400 text-sm leading-relaxed italic">
                            <span className="text-brand-500 font-black not-italic uppercase tracking-widest text-[10px] mr-2">Key Insight:</span>
                            OTM and ATM options are 100% extrinsic value (pure time value). In-the-money options have both components.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* ── 6 FACTORS ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Pricing Science" title={<>The 6 Factors That <span className="text-brand-500">Determine Option Price</span></>} align="center" className="mb-16" />

                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Factor 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div>
                                <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1">Factor 1</p>
                                <h3 className="text-white font-black text-2xl italic uppercase tracking-tight">Stock Price vs Strike</h3>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Moneyness</p>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The closer the stock price to the strike, the more expensive the option. Every $1 move changes option price by its Delta (e.g., Delta 0.50 = $0.50 per $1 stock move).
                            </p>
                        </div>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Strike (SPY @ $575)</TableHead>
                                        <TableHead>Call Premium</TableHead>
                                        <TableHead>Moneyness</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { k: "$570 (ITM)", p: "$9.20", m: "$5 in-the-money", c: "text-green-400" },
                                        { k: "$575 (ATM)", p: "$4.20", m: "At-the-money", c: "text-yellow-400" },
                                        { k: "$580 (OTM)", p: "$1.80", m: "$5 out-of-money", c: "text-red-400" },
                                        { k: "$585 (OTM)", p: "$0.65", m: "$10 out-of-money", c: "text-red-500" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Strike" className="text-white font-bold text-xs">{row.k}</TableCell>
                                            <TableCell label="Premium" className="text-brand-500 font-black text-xs">{row.p}</TableCell>
                                            <TableCell label="Moneyness" className={`text-xs font-bold ${row.c}`}>{row.m}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="h-px bg-white/5" />

                    {/* Factor 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div>
                                <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1">Factor 2</p>
                                <h3 className="text-white font-black text-2xl italic uppercase tracking-tight">Time to Expiration</h3>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Theta</p>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                More time = higher premium. Time value decays as expiration approaches. Doubling time does NOT double price — decay accelerates near expiry.
                            </p>
                        </div>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Time to Expiration</TableHead>
                                        <TableHead className="text-brand-500">SPY $575 Call</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { t: "0 days (0DTE)", p: "$1.80" },
                                        { t: "7 days (weekly)", p: "$4.20" },
                                        { t: "30 days (monthly)", p: "$9.50" },
                                        { t: "60 days", p: "$13.20" },
                                        { t: "90 days", p: "$16.00" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Time" className="text-white font-bold text-xs">{row.t}</TableCell>
                                            <TableCell label="Premium" className="text-brand-500 font-black text-xs">{row.p}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="h-px bg-white/5" />

                    {/* Factor 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div>
                                <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1">Factor 3</p>
                                <h3 className="text-white font-black text-2xl italic uppercase tracking-tight">Implied Volatility (IV)</h3>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Biggest Driver of Extrinsic Value</p>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Higher volatility expectation = higher premium. Same option, same stock price — premium can be nearly 3x higher with extreme IV. Checking IV before buying is critical.
                            </p>
                        </div>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Implied Volatility</TableHead>
                                        <TableHead className="text-brand-500">SPY $575 Call (7 days)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { iv: "Low IV (12%)", p: "$3.50", c: "text-green-400" },
                                        { iv: "Normal IV (18%)", p: "$4.20", c: "text-yellow-400" },
                                        { iv: "High IV (25%)", p: "$6.80", c: "text-orange-400" },
                                        { iv: "Extreme IV (35%)", p: "$9.20", c: "text-red-400" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="IV Level" className={`font-black text-xs ${row.c}`}>{row.iv}</TableCell>
                                            <TableCell label="Premium" className="text-white font-black text-xs">{row.p}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="h-px bg-white/5" />

                    {/* Factors 4, 5, 6 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                n: "Factor 4",
                                t: "Interest Rates",
                                icon: <FiTrendingUp className="text-brand-500" />,
                                d: "Higher rates slightly increase call premiums and decrease put premiums. Small effect (1–3%) vs other factors. Buying calls is like borrowing money to control stock."
                            },
                            {
                                n: "Factor 5",
                                t: "Dividends",
                                icon: <FiTrendingDown className="text-yellow-500" />,
                                d: "Expected dividends decrease call premiums and increase put premiums slightly. Only matters for stocks with large dividends (>2% yield). Stock drops on ex-dividend date."
                            },
                            {
                                n: "Factor 6",
                                t: "Supply & Demand",
                                icon: <FiZap className="text-green-500" />,
                                d: "If everyone is buying calls, premiums rise above theoretical value. This is why high-volume stocks (SPY, AAPL) have tighter, more efficient pricing than illiquid names."
                            }
                        ].map((f, i) => (
                            <Card key={i} variant="institutional" className="p-8 border-white/5 bg-gray-950/60 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white/5 rounded-xl">{f.icon}</div>
                                    <div>
                                        <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.2em]">{f.n}</p>
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs italic">{f.t}</h4>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-[11px] leading-relaxed">{f.d}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </StandardSection>

            {/* ── BLACK-SCHOLES ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Pricing Models</p>
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Black-Scholes Model</h2>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">The Math Behind Every Option Price</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Options are priced using mathematical models. You do not need to calculate this — your broker does it automatically using live market data.
                        </p>
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 space-y-4">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-500 mb-4">Inputs to Black-Scholes</p>
                            <ul className="space-y-3">
                                {[
                                    "Current stock price",
                                    "Strike price",
                                    "Time to expiration",
                                    "Implied volatility",
                                    "Risk-free interest rate",
                                    "Expected dividends"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-start">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-green-500 mb-2">Output</p>
                                <p className="text-white font-black text-sm italic">Theoretical fair value (e.g., $4.23)</p>
                                <p className="text-gray-500 text-[10px] italic mt-1">Market price may differ 2–5% due to supply/demand.</p>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Your Role</p>
                            <h3 className="text-2xl font-black italic uppercase text-white tracking-tight">You Don't Need to Calculate</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Market makers calculate fair value. Your job as a trader is to understand what makes prices move — not run the math.
                        </p>
                        <div className="space-y-4">
                            {[
                                { t: "Understand Movement Drivers", d: "Know what forces push premiums up or down." },
                                { t: "Identify Cheap vs Expensive", d: "Use IV Rank to judge if premium is elevated." },
                                { t: "Time Your Entry", d: "Enter when IV is normal or low for long options." },
                                { t: "Use Stop-Losses", d: "Manage risk by defining max loss before entry." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/10 transition-colors">
                                    <FiCheck className="text-brand-500 shrink-0 mt-1" />
                                    <div>
                                        <h5 className="text-white font-black uppercase tracking-widest text-[11px] mb-1 italic">{item.t}</h5>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* ── TIME DECAY ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Theta" title={<>Why Options Lose Value <span className="text-brand-500">Over Time</span></>} align="center" className="mb-16" />
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Extrinsic value decreases every day as expiration approaches. This is <span className="text-white font-bold italic">time decay (theta)</span>. It accelerates dramatically in the final 7 days.
                        </p>
                        <div className="p-6 bg-red-500/[0.02] border border-red-500/10 rounded-2xl flex gap-4">
                            <FiAlertTriangle className="text-red-500 shrink-0 mt-1" />
                            <p className="text-gray-400 text-xs leading-relaxed italic">
                                An option loses ~50% of remaining extrinsic value in its last 3 days. Holding to expiration is extremely dangerous for long options.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-4">30-Day Option Example</p>
                            {[
                                { d: "Day 1", p: "$9.50", note: "All extrinsic" },
                                { d: "Day 10", p: "$8.20", note: "−$1.30 theta" },
                                { d: "Day 20", p: "$6.10", note: "−$2.10 more" },
                                { d: "Day 27", p: "$3.50", note: "−$2.60 (accelerating)" },
                                { d: "Day 30", p: "$0.00", note: "Expires worthless (OTM)" },
                            ].map((row, i) => (
                                <div key={i} className={`flex justify-between items-center p-4 rounded-xl border ${i === 4 ? 'bg-red-500/5 border-red-500/20' : 'bg-white/[0.02] border-white/5'}`}>
                                    <span className="text-gray-500 font-black uppercase tracking-widest text-[9px]">{row.d}</span>
                                    <span className={`font-black text-sm italic ${i === 4 ? 'text-red-500' : 'text-white'}`}>{row.p}</span>
                                    <span className="text-gray-600 text-[9px] italic">{row.note}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="px-8 pt-6 pb-4 border-b border-white/5">
                            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-brand-500">Daily Theta by Time Left</p>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Days Left</TableHead>
                                    <TableHead className="text-red-400">Daily Theta (Approx)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { d: "30+ days", t: "−$0.03 to −$0.05", c: "text-green-400" },
                                    { d: "14–30 days", t: "−$0.05 to −$0.08", c: "text-yellow-400" },
                                    { d: "7–14 days", t: "−$0.08 to −$0.15", c: "text-orange-400" },
                                    { d: "3–7 days", t: "−$0.15 to −$0.30", c: "text-red-400" },
                                    { d: "0–3 days", t: "−$0.30 to −$0.60", c: "text-red-500" },
                                ].map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell label="Days" className="text-white font-bold text-xs">{row.d}</TableCell>
                                        <TableCell label="Theta" className={`font-black text-xs ${row.c}`}>{row.t}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* ── ITM / ATM / OTM EXAMPLES ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Real Examples" title="Intrinsic vs Extrinsic Breakdown" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Deep ITM Call",
                            sub: "SPY @ $590, $575 Call @ $18.50, 7 DTE",
                            rows: [
                                { l: "Intrinsic", v: "$15.00", c: "text-green-400" },
                                { l: "Extrinsic", v: "$3.50", c: "text-brand-500" },
                                { l: "Split", v: "81% / 19%", c: "text-white" },
                            ],
                            note: "Moves almost 1:1 with stock (Delta ~0.90). Minimal theta risk.",
                            badge: "ITM",
                            bc: "bg-green-500/10 text-green-400 border-green-500/20"
                        },
                        {
                            title: "At-the-Money Call",
                            sub: "SPY @ $575, $575 Call @ $4.20, 7 DTE",
                            rows: [
                                { l: "Intrinsic", v: "$0.00", c: "text-gray-400" },
                                { l: "Extrinsic", v: "$4.20", c: "text-brand-500" },
                                { l: "Split", v: "0% / 100%", c: "text-white" },
                            ],
                            note: "Pure time value. High theta risk. Stock must move quickly.",
                            badge: "ATM",
                            bc: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                        },
                        {
                            title: "Out-of-Money Call",
                            sub: "SPY @ $575, $585 Call @ $0.65, 7 DTE",
                            rows: [
                                { l: "Intrinsic", v: "$0.00", c: "text-gray-400" },
                                { l: "Extrinsic", v: "$0.65", c: "text-brand-500" },
                                { l: "Split", v: "0% / 100%", c: "text-white" },
                            ],
                            note: "Lottery ticket. Needs +$10 move. High risk, low probability.",
                            badge: "OTM",
                            bc: "bg-red-500/10 text-red-400 border-red-500/20"
                        },
                    ].map((ex, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 space-y-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h4 className="text-white font-black uppercase tracking-widest text-xs italic mb-1">{ex.title}</h4>
                                    <p className="text-gray-600 text-[9px] italic leading-relaxed">{ex.sub}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-lg border text-[9px] font-black uppercase tracking-widest shrink-0 ${ex.bc}`}>{ex.badge}</span>
                            </div>
                            <div className="space-y-3">
                                {ex.rows.map((r, j) => (
                                    <div key={j} className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{r.l}</span>
                                        <span className={`font-black text-sm italic ${r.c}`}>{r.v}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-500 text-[10px] leading-relaxed italic border-l-2 border-brand-500/50 pl-3">{ex.note}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* ── CHEAP vs EXPENSIVE ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Valuation" title="Cheap vs Expensive Options" align="center" className="mb-12" />
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card variant="institutional" className="p-8 border-red-500/10 bg-red-500/[0.02] space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-red-500/10 rounded-xl"><FiX className="text-red-500" size={18} /></div>
                            <div>
                                <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Expensive Option</h4>
                                <p className="text-red-400 text-[9px] font-black uppercase tracking-widest">High Extrinsic Relative to Probability</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "Implied Volatility elevated (IV Rank >75)",
                                "Too much time premium for likelihood of move",
                                "Market expects big move that may not happen",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-400 text-xs font-bold items-start">
                                    <FiX className="text-red-500 shrink-0 mt-0.5" size={12} /> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="p-4 bg-black/30 rounded-xl border border-white/5">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-2">Example</p>
                            <p className="text-gray-400 text-xs italic leading-relaxed">
                                SPY $575 call, 7 days, IV 25% → <span className="text-red-400 font-black">$6.80</span><br />
                                vs Normal IV 15% → <span className="text-white font-bold">$4.20</span><br />
                                Overpaying <span className="text-red-400 font-black">$2.60 (62%)</span> for elevated IV.
                            </p>
                        </div>
                    </Card>

                    <Card variant="institutional" className="p-8 border-green-500/10 bg-green-500/[0.02] space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-green-500/10 rounded-xl"><FiCheck className="text-green-500" size={18} /></div>
                            <div>
                                <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Cheap Option</h4>
                                <p className="text-green-400 text-[9px] font-black uppercase tracking-widest">Low Extrinsic Relative to Probability</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "Implied Volatility is low (IV Rank <25)",
                                "Short time to expiration with clear catalyst",
                                "Market underestimates potential move",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-400 text-xs font-bold items-start">
                                    <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} /> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="p-4 bg-black/30 rounded-xl border border-white/5">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-2">Example</p>
                            <p className="text-gray-400 text-xs italic leading-relaxed">
                                SPY $575 call, 7 days, IV 12% → <span className="text-green-400 font-black">$3.50</span><br />
                                17% cheaper than "normal" $4.20 pricing.<br />
                                <span className="text-white font-bold">Good time to buy</span> if setup is right.
                            </p>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* ── FAQ ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto pb-10">
                    <SectionHeader label="Knowledge Base" title={<>Premium Pricing <span className="text-brand-500">FAQ</span></>} align="center" className="mb-16" />
                    <div className="space-y-4">
                        {[
                            {
                                q: "Why does my option lose money when stock moves sideways?",
                                a: "Time decay (theta). Every day that passes, extrinsic value decreases. If stock does not move enough to offset theta, you lose money even with no stock movement."
                            },
                            {
                                q: "Can intrinsic value decay?",
                                a: "No. Intrinsic value only changes with stock price. Only extrinsic value decays over time. Deep in-the-money options have minimal theta because they are mostly intrinsic value."
                            },
                            {
                                q: "Why do far OTM options cost so little?",
                                a: "Low probability of finishing in-the-money. Market prices in <10% chance. All extrinsic value, and very little of it. They are cheap because they usually expire worthless."
                            },
                            {
                                q: "How do I know if premium is too high?",
                                a: "Check IV Rank. If >75, premium is expensive. Compare current IV to historical average. If current is 50% above average, wait for IV to drop before buying."
                            },
                            {
                                q: "Do options ever trade below intrinsic value?",
                                a: "Rarely, and only deep in-the-money options with high transaction costs. For example: $575 call with stock at $600, 1 day left, might trade at $24.80 (intrinsic $25) due to exercise costs. Not common."
                            },
                            {
                                q: "Should I focus on cheap or expensive options?",
                                a: "Neither. Focus on probability. A cheap $0.15 OTM option is expensive if the probability is 2%. An expensive $4.20 ATM option is cheap if the setup has a 70% win rate. Price without probability is meaningless."
                            },
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links */}
                <div className="max-w-6xl mx-auto mt-20 pt-20 border-t border-white/5 text-center px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Keep Learning</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "Greeks Explained", path: "/options-greeks-explained" },
                            { title: "Implied Volatility", path: "/understanding-implied-volatility-options" },
                            { title: "Options 101", path: "/options-trading-101" },
                            { title: "Weekly vs Monthly", path: "/weekly-vs-monthly-options-guide" },
                            { title: "0DTE Strategy", path: "/0dte-options-strategy-complete-guide" },
                            { title: "Earnings Plays", path: "/options-earnings-plays-strategy" },
                            { title: "Common Mistakes", path: "/common-options-trading-mistakes" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "FAQ", path: "/faq" },
                        ].map((link, i) => (
                            <Link key={i} to={link.path} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-500 text-[10px] font-black hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all uppercase tracking-widest italic">
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </StandardSection>

            <div className="bg-brand-500 shadow-[0_-20px_50px_rgba(32,109,254,0.1)]">
                <StandardCTA
                    title="Price Options Like a Pro"
                    subtitle="Our signals account for IV, theta, and premium pricing so you never overpay. Join 1,200+ traders getting edge on every trade."
                    className="bg-transparent"
                />
            </div>
        </div>
    );
};

export default OptionsPremiumExplained;
