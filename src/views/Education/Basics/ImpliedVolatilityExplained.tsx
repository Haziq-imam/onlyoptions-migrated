import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiTrendingUp, FiTrendingDown, FiZap, FiAlertTriangle, FiCheck, FiX, FiActivity, FiShield } from 'react-icons/fi';
import { Link } from "@/lib/react-router-dom-stub";
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

const ImpliedVolatilityExplained = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Implied Volatility Explained: IV Guide for Options Trading</title>
                <meta name="description" content="Learn what implied volatility (IV) is, how it affects option prices, IV crush after earnings, IV rank vs percentile, and how to trade high/low IV environments effectively." />
                <link rel="canonical" href="https://onlyoptions.us/understanding-implied-volatility-options" />
            </Helmet>

            {/* ── HERO ── */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8 text-center">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                        <FiActivity className="text-brand-500" /> Volatility Mastery
                    </span>
                    <SectionHeader
                        label="Education"
                        title={<>Understanding <span className="text-brand-500">Implied Volatility</span> (IV)</>}
                        description="Complete Guide to IV and Why It Matters for Options Trading"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        You buy a call. The stock rises. Your option… loses money? Welcome to implied volatility — the invisible force that controls option prices.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        IV determines how expensive or cheap options are. Understanding IV prevents costly mistakes like holding through earnings (IV crush) or buying overpriced contracts.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Buy When", value: "IV Rank <25" },
                        { label: "Avoid When", value: "IV Rank >75" },
                        { label: "Crush Event", value: "Earnings" },
                        { label: "Measured By", value: "Vega" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-white font-black mb-1 text-2xl tracking-tight uppercase italic">{stat.value}</h4>
                            <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* ── WHAT IS IV ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">The Foundation</p>
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What is Implied Volatility?</h2>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Simple Definition</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Implied volatility is the market's expectation of how much a stock will move in the future. It is "implied" from current option prices — not calculated from past data.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="glass" className="p-6 border-red-500/10 bg-red-500/[0.02] text-center space-y-2">
                                <FiTrendingUp className="text-red-400 mx-auto" size={24} />
                                <p className="text-red-400 font-black uppercase tracking-widest text-[10px]">High IV</p>
                                <p className="text-gray-400 text-xs italic leading-relaxed">Market expects big moves. Options are expensive.</p>
                            </Card>
                            <Card variant="glass" className="p-6 border-green-500/10 bg-green-500/[0.02] text-center space-y-2">
                                <FiTrendingDown className="text-green-400 mx-auto" size={24} />
                                <p className="text-green-400 font-black uppercase tracking-widest text-[10px]">Low IV</p>
                                <p className="text-gray-400 text-xs italic leading-relaxed">Market expects small moves. Options are cheap.</p>
                            </Card>
                        </div>

                        <div className="p-6 bg-brand-500/5 border border-brand-500/20 rounded-2xl flex gap-4 items-start">
                            <FiZap className="text-brand-500 shrink-0 mt-1" size={16} />
                            <p className="text-gray-400 text-xs leading-relaxed italic">
                                <span className="text-brand-500 font-black not-italic uppercase tracking-widest text-[10px] mr-2">Key Insight:</span>
                                IV is NOT about past movement. It is about expected future movement. Like insurance — higher risk = higher premium.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Real-World Analogy</p>
                            <h3 className="text-xl font-black italic uppercase text-white tracking-tight">IV = Insurance Premiums</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            When a hurricane approaches Florida, home insurance becomes expensive (high IV). When weather is calm, insurance is cheap (low IV). Option premiums work exactly the same way.
                        </p>

                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <div className="px-8 pt-6 pb-4 border-b border-white/5">
                                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-brand-500">How IV Affects Price — SPY @ $575, 30 DTE</p>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>IV Level</TableHead>
                                        <TableHead className="text-brand-500">$575 Call Cost</TableHead>
                                        <TableHead>Difference</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { iv: "Low IV (12%)", p: "$3.50", d: "Baseline", c: "text-green-400" },
                                        { iv: "Normal IV (18%)", p: "$4.90", d: "+40%", c: "text-yellow-400" },
                                        { iv: "High IV (25%)", p: "$6.80", d: "+94%", c: "text-orange-400" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="IV" className={`font-black text-xs ${row.c}`}>{row.iv}</TableCell>
                                            <TableCell label="Cost" className="text-white font-black text-xs">{row.p}</TableCell>
                                            <TableCell label="vs Baseline" className={`font-bold text-xs ${row.c}`}>{row.d}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="px-8 py-4 border-t border-white/5">
                                <p className="text-gray-600 text-[9px] italic">Stock price unchanged. Only IV changed.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* ── IV LEVELS ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Reference" title={<>IV Levels — High vs <span className="text-brand-500">Low by Ticker</span></>} align="center" className="mb-12" />
                <div className="max-w-4xl mx-auto space-y-6">
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Ticker</TableHead>
                                    <TableHead className="text-green-400">Low IV</TableHead>
                                    <TableHead className="text-yellow-400">Normal IV</TableHead>
                                    <TableHead className="text-red-400">High IV</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { t: "SPY", lo: "<12%", n: "12–18%", hi: ">20%" },
                                    { t: "QQQ", lo: "<15%", n: "18–25%", hi: ">28%" },
                                    { t: "NVDA", lo: "<35%", n: "40–60%", hi: ">70%" },
                                    { t: "TSLA", lo: "<45%", n: "50–70%", hi: ">80%" },
                                ].map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell label="Ticker" className="text-white font-black text-sm">{row.t}</TableCell>
                                        <TableCell label="Low IV" className="text-green-400 font-black text-xs">{row.lo}</TableCell>
                                        <TableCell label="Normal IV" className="text-yellow-400 font-bold text-xs">{row.n}</TableCell>
                                        <TableCell label="High IV" className="text-red-400 font-black text-xs">{row.hi}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl flex gap-4 items-start">
                        <FiAlertTriangle className="text-yellow-500 shrink-0 mt-1" size={14} />
                        <p className="text-gray-400 text-xs leading-relaxed italic">
                            <span className="text-white font-black not-italic">IV is always relative.</span> TSLA at 50% IV is completely normal. SPY at 50% IV would indicate extreme market panic rivaling 2020 Covid crash levels.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* ── IV RANK ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">The Key Metric</p>
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">IV Rank &amp; IV Percentile</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            IV Rank compares current IV to the past 52 weeks. It tells you whether options are cheap or expensive relative to their own history — not just an absolute number.
                        </p>
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 space-y-4">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-500">Formula</p>
                            <p className="text-white font-black text-sm italic leading-relaxed">
                                IV Rank = (Current IV − 52wk Low) ÷ (52wk High − 52wk Low) × 100
                            </p>
                            <div className="pt-4 border-t border-white/10 space-y-2">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">Example — SPY</p>
                                <div className="space-y-1 text-xs">
                                    <div className="flex justify-between"><span className="text-gray-500">Current IV</span><span className="text-white font-bold">18%</span></div>
                                    <div className="flex justify-between"><span className="text-gray-500">52-week Low</span><span className="text-white font-bold">10%</span></div>
                                    <div className="flex justify-between"><span className="text-gray-500">52-week High</span><span className="text-white font-bold">30%</span></div>
                                    <div className="flex justify-between pt-2 border-t border-white/5">
                                        <span className="text-brand-500 font-black uppercase tracking-widest text-[10px]">IV Rank</span>
                                        <span className="text-brand-500 font-black text-lg">40</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-[10px] italic">IV is at 40th percentile of the past year — moderate, acceptable to buy.</p>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-black italic uppercase text-white tracking-tight">IV Rank Interpretation</h3>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>IV Rank</TableHead>
                                        <TableHead>Meaning</TableHead>
                                        <TableHead className="text-brand-500">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { r: "0–25", m: "Very Low IV", a: "Great time to buy", c: "text-green-500" },
                                        { r: "25–50", m: "Below Average", a: "Decent time to buy", c: "text-green-400" },
                                        { r: "50–75", m: "Above Average", a: "Be cautious buying", c: "text-yellow-400" },
                                        { r: "75–100", m: "Very High IV", a: "Avoid buying (expensive)", c: "text-red-400" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Rank" className="text-white font-black text-xs">{row.r}</TableCell>
                                            <TableCell label="Meaning" className={`font-bold text-xs ${row.c}`}>{row.m}</TableCell>
                                            <TableCell label="Action" className="text-gray-400 text-xs font-bold">{row.a}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl flex gap-4 items-start">
                            <FiShield className="text-brand-500 shrink-0 mt-1" size={14} />
                            <p className="text-gray-400 text-xs leading-relaxed italic">
                                Your broker's options chain shows IV%. Use a tool like TastyTrade, ThinkorSwim, or Market Chameleon to check IV Rank instantly before every trade.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* ── IV CRUSH ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="The Silent Killer" title={<>IV Crush — <span className="text-red-400">The Option Killer</span></>} align="center" className="mb-16" />
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            IV crush happens when implied volatility drops suddenly, causing option prices to plummet — even if the stock moves in your favor. Most common after earnings announcements.
                        </p>

                        <Card variant="glass" className="p-8 border-red-500/10 bg-red-500/[0.02] space-y-5">
                            <p className="text-red-400 text-[9px] font-black uppercase tracking-[0.25em]">Earnings IV Crush — Real Example (NVDA)</p>
                            <div className="space-y-3 text-xs">
                                {[
                                    { l: "Stock pre-earnings", v: "$850", c: "text-white" },
                                    { l: "IV before earnings", v: "80% → $870 call = $18.00", c: "text-yellow-400" },
                                    { l: "Earnings result", v: "Beat! NVDA rallies to $875 (+$25)", c: "text-green-400" },
                                    { l: "IV after earnings", v: "Drops to 40% (IV crush)", c: "text-red-400" },
                                    { l: "$870 call now worth", v: "$14.00 (was $18.00)", c: "text-red-500" },
                                    { l: "Net result", v: "Stock +$25. You LOSE -$4.00 (-22%)", c: "text-red-500" },
                                ].map((r, i) => (
                                    <div key={i} className={`flex justify-between items-center py-2 border-b border-white/5 ${i === 5 ? 'border-red-500/20' : ''}`}>
                                        <span className="text-gray-500 font-bold uppercase tracking-wider text-[9px]">{r.l}</span>
                                        <span className={`font-black text-xs italic ${r.c}`}>{r.v}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-black italic uppercase text-white tracking-tight">How to Avoid IV Crush</h3>
                        {[
                            {
                                n: "Strategy 1",
                                t: "Exit Before Earnings",
                                d: "If you bought 1–2 weeks before earnings, sell the day before. Capture IV expansion, avoid IV crush entirely.",
                                c: "text-green-500", bg: "border-green-500/10 bg-green-500/[0.02]"
                            },
                            {
                                n: "Strategy 2",
                                t: "Buy Further-Dated Options",
                                d: "Monthly options (30+ days) have less IV exposure than weeklies. They survive IV crush with smaller losses.",
                                c: "text-brand-500", bg: "border-brand-500/10 bg-brand-500/[0.02]"
                            },
                            {
                                n: "Strategy 3",
                                t: "Use Vertical Spreads",
                                d: "Buy one option, sell another. Both legs get crushed equally, offsetting the IV crush effect on profit/loss.",
                                c: "text-yellow-500", bg: "border-yellow-500/10 bg-yellow-500/[0.02]"
                            },
                            {
                                n: "Strategy 4",
                                t: "Small Size Through Earnings",
                                d: "If trading earnings, use only 1% risk (not 2%). IV crush is unpredictable and can erase gains even when right on direction.",
                                c: "text-orange-400", bg: "border-orange-500/10 bg-orange-500/[0.02]"
                            },
                        ].map((s, i) => (
                            <div key={i} className={`p-5 rounded-2xl border flex gap-4 ${s.bg}`}>
                                <div className="shrink-0">
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${s.c}`}>{s.n}</span>
                                </div>
                                <div className="space-y-1">
                                    <h5 className="text-white font-black uppercase tracking-widest text-[11px] italic">{s.t}</h5>
                                    <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </StandardSection>

            {/* ── HIGH vs LOW IV TRADING ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Market Conditions" title="Trading High vs Low IV Environments" align="center" className="mb-12" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* High IV */}
                    <Card variant="glass" className="p-8 border-red-500/10 bg-red-500/[0.02] space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-red-500/10 rounded-xl"><FiTrendingUp className="text-red-400" size={18} /></div>
                            <div>
                                <h3 className="text-white font-black uppercase tracking-widest text-sm italic">High IV Environment</h3>
                                <p className="text-red-400 text-[9px] font-black uppercase tracking-widest">{"VIX >25, SPY IV >18%"}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-3">Characteristics</p>
                            {[
                                "Options are expensive (high premiums)",
                                "Market uncertainty (Fed decisions, crises)",
                                "Big intraday swings (+/−1–2%)",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2 text-gray-400 text-xs items-start">
                                    <FiAlertTriangle className="text-red-400 shrink-0 mt-0.5" size={11} /> {item}
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2 pt-4 border-t border-white/5">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-3">How to Trade</p>
                            {[
                                "Avoid buying options (too expensive)",
                                "Wait for IV to drop before entering",
                                "Use shorter expirations to minimize vega",
                                "Reduce position size to 1% risk",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2 text-gray-400 text-xs items-start">
                                    <FiX className="text-red-500 shrink-0 mt-0.5" size={11} /> {item}
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Low IV */}
                    <Card variant="glass" className="p-8 border-green-500/10 bg-green-500/[0.02] space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-green-500/10 rounded-xl"><FiTrendingDown className="text-green-400" size={18} /></div>
                            <div>
                                <h3 className="text-white font-black uppercase tracking-widest text-sm italic">Low IV Environment</h3>
                                <p className="text-green-400 text-[9px] font-black uppercase tracking-widest">VIX &lt;15, SPY IV &lt;12%</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-3">Characteristics</p>
                            {[
                                "Options are cheap (low premiums)",
                                "Market calm (no major catalysts)",
                                "Small daily moves (+/−0.3–0.5%)",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2 text-gray-400 text-xs items-start">
                                    <FiCheck className="text-green-500 shrink-0 mt-0.5" size={11} /> {item}
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2 pt-4 border-t border-white/5">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-3">How to Trade</p>
                            {[
                                "Great time to buy options (cheap entry)",
                                "Use longer expirations — cheap theta",
                                "Expect smaller moves but more predictable",
                                "Use full 2% position size",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2 text-gray-400 text-xs items-start">
                                    <FiCheck className="text-green-500 shrink-0 mt-0.5" size={11} /> {item}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* ── VEGA ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">The IV Greek</p>
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Vega — How IV Changes Price</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Vega measures how much an option price changes when IV changes by 1%. Higher vega = more sensitive to IV changes.
                        </p>

                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 space-y-4">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-500">Vega Example — SPY $575 Call, 30 DTE, Vega 0.20</p>
                            {[
                                { scenario: "IV rises 15% → 20% (+5%)", effect: "+5 × 0.20 = +$1.00/share", gain: true },
                                { scenario: "IV drops 15% → 10% (−5%)", effect: "−5 × 0.20 = −$1.00/share", gain: false },
                            ].map((row, i) => (
                                <div key={i} className={`p-4 rounded-xl border ${row.gain ? 'border-green-500/10 bg-green-500/5' : 'border-red-500/10 bg-red-500/5'}`}>
                                    <p className={`text-[9px] font-black uppercase tracking-widest mb-1 ${row.gain ? 'text-green-400' : 'text-red-400'}`}>{row.scenario}</p>
                                    <p className={`text-sm font-black italic ${row.gain ? 'text-green-400' : 'text-red-400'}`}>{row.effect}</p>
                                    <p className="text-gray-600 text-[9px] italic mt-1">{row.gain ? '+$100 per contract' : '−$100 per contract'}</p>
                                </div>
                            ))}
                        </Card>
                        <p className="text-gray-400 text-xs leading-relaxed border-l-2 border-brand-500 pl-4 italic">
                            Longer expirations = higher vega. 0DTE options have almost zero vega — no time for volatility to matter.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-black italic uppercase text-white tracking-tight">Vega by Expiration</h3>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Expiration</TableHead>
                                        <TableHead className="text-brand-500">Typical Vega</TableHead>
                                        <TableHead>IV Sensitivity</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { e: "0DTE", v: "0.01 – 0.05", s: "Minimal", c: "text-gray-400" },
                                        { e: "7-day (weekly)", v: "0.08 – 0.15", s: "Low", c: "text-yellow-400" },
                                        { e: "30-day (monthly)", v: "0.15 – 0.30", s: "Moderate", c: "text-orange-400" },
                                        { e: "90-day (quarterly)", v: "0.30 – 0.50", s: "High", c: "text-red-400" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Expiration" className="text-white font-bold text-xs">{row.e}</TableCell>
                                            <TableCell label="Vega" className="text-brand-500 font-black text-xs">{row.v}</TableCell>
                                            <TableCell label="IV Sensitivity" className={`font-black text-xs ${row.c}`}>{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* ── PRACTICAL STRATEGIES ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Actionable Playbook" title={<>Practical <span className="text-brand-500">IV Strategies</span></>} align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            n: "Strategy 1",
                            t: "Buy Low IV, Avoid High IV",
                            d: "IV Rank <25: Buy options (cheap entry). IV Rank >75: Avoid buying or use spreads instead.",
                            icon: <FiShield className="text-brand-500" />
                        },
                        {
                            n: "Strategy 2",
                            t: "Capture IV Expansion Pre-Earnings",
                            d: "Buy options 1–2 weeks before earnings. IV rises as event approaches. Sell 1 day before to capture expansion without IV crush risk.",
                            icon: <FiTrendingUp className="text-green-500" />
                        },
                        {
                            n: "Strategy 3",
                            t: "Fade IV Spikes",
                            d: "VIX spikes to 35 on panic. SPY IV hits 25%. Wait 2–3 days for IV to normalize back to 15–18%, then buy calls at a cheaper entry.",
                            icon: <FiActivity className="text-yellow-500" />
                        },
                        {
                            n: "Strategy 4",
                            t: "Adjust Position Size by IV Rank",
                            d: "IV Rank <30: Full 2% risk. IV Rank 30–70: 1.5% risk. IV Rank >70: 1% risk or skip. Protect yourself from overpaying.",
                            icon: <FiZap className="text-brand-500" />
                        },
                    ].map((s, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/15 transition-all space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white/5 rounded-xl">{s.icon}</div>
                                <div>
                                    <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.2em]">{s.n}</p>
                                    <h4 className="text-white font-black uppercase tracking-widest text-xs italic">{s.t}</h4>
                                </div>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                        </div>
                    ))}
                </div>

                {/* Pre-trade checklist */}
                <div className="max-w-3xl mx-auto mt-12">
                    <Card variant="institutional" className="p-8 border-brand-500/20 bg-brand-500/5 space-y-6">
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-500 mb-2">Pre-Trade IV Checklist</p>
                            <h4 className="text-white font-black text-lg italic uppercase">Check Before Every Trade</h4>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Check current IV% (e.g., SPY at 16%)",
                                "Check IV Rank (high or low relative to past year?)",
                                "Check VIX (overall market volatility level)",
                                "Ask: Is this option expensive or cheap right now?",
                                "If IV Rank >70 → seriously consider waiting or skipping"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider items-start">
                                    <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </StandardSection>

            {/* ── COMMON IV MISTAKES ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Avoid These" title="Common IV Mistakes" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        {
                            t: "Ignoring IV Entirely",
                            d: "Buying calls because stock looks bullish without checking IV. IV Rank is 95 (extremely expensive). You overpay 30–50%. Even correct directional calls lose money."
                        },
                        {
                            t: "Holding Through Earnings for 'Big Gains'",
                            d: "Stock moves 8% in your favor. IV crush destroys 12% of option value. Net result: You lose money despite being right on direction."
                        },
                        {
                            t: "Buying 0DTE on High IV Days",
                            d: "VIX at 30, SPY IV at 22%. 0DTE options already have minimal vega — high IV does not help. Theta + spread widen destroy value quickly."
                        },
                        {
                            t: "Confusing Historical Volatility with IV",
                            d: "Historical volatility (HV) = past movement. Implied volatility (IV) = expected future movement. They are different metrics. IV is what matters for option pricing."
                        }
                    ].map((m, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-red-500/[0.02] border border-red-500/10 flex gap-5">
                            <FiX className="text-red-500 shrink-0 mt-1" size={18} />
                            <div className="space-y-2">
                                <h5 className="text-white font-black uppercase tracking-widest text-[11px] italic underline decoration-red-500/30">{m.t}</h5>
                                <p className="text-gray-400 text-xs leading-relaxed italic">{m.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* ── FAQ ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto pb-10">
                    <SectionHeader label="Knowledge Base" title={<>Implied Volatility <span className="text-brand-500">FAQ</span></>} align="center" className="mb-16" />
                    <div className="space-y-4">
                        {[
                            {
                                q: "What is a good IV to buy options?",
                                a: "IV Rank <25 is ideal. IV Rank 25–50 is acceptable. Above 50 means options are expensive — wait for IV to drop or skip the trade. Never buy when IV Rank >75 unless you have a specific edge."
                            },
                            {
                                q: "Does IV affect 0DTE options?",
                                a: "Very little. 0DTE options have almost zero vega because there is no time for volatility to matter. For 0DTE, focus on delta and theta — not IV."
                            },
                            {
                                q: "How long does IV crush last after earnings?",
                                a: "Immediately. IV drops within seconds of earnings release. By next morning, new IV is established — usually 30–50% lower than pre-earnings. Full recovery can take 2–4 weeks."
                            },
                            {
                                q: "Can I profit from IV crush?",
                                a: "Yes, by selling options before earnings (advanced strategy). You collect high premium before the event. After IV crush, you buy back the option cheaper. This requires Level 3+ options approval."
                            },
                            {
                                q: "Why does IV spike on bad news but not good news?",
                                a: "Fear creates more volatility than greed. Market drops trigger panic selling, spiking IV. Market rallies are typically orderly, so IV stays low. This is why VIX is called the 'fear index.'"
                            },
                            {
                                q: "Should I adjust position size based on IV?",
                                a: "Yes. High IV means options are expensive and prone to IV contraction. Reduce size to 1–1.5% instead of 2% when IV Rank >70. This protects you from overpaying and losing even when directionally correct."
                            },
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links */}
                <div className="max-w-6xl mx-auto mt-20 pt-20 border-t border-white/5 text-center px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Related Guides</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "Greeks Explained", path: "/options-greeks-explained" },
                            { title: "Options 101", path: "/options-trading-101" },
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "0DTE Strategy", path: "/0dte-options-strategy-complete-guide" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "QQQ Signals", path: "/qqq-options-signals" },
                            { title: "Beginners Guide", path: "/options-signals-for-beginners" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "Performance", path: "/performance" },
                            { title: "FAQ", path: "/faq" },
                            { title: "Contact", path: "/contact" },
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
                    title="Trade With IV Edge"
                    subtitle="Our signals screen IV rank before every alert. You only receive trades when options are fairly priced — never overpaying for premium."
                    className="bg-transparent"
                />
            </div>
        </div>
    );
};

export default ImpliedVolatilityExplained;
