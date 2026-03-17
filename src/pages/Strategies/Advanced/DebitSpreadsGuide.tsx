import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiTrendingUp, FiTrendingDown, FiZap, FiShield, FiTarget, FiActivity, FiArrowUpRight, FiArrowDownRight, FiCheck, FiX, FiInfo, FiLayers, FiPercent, FiSearch, FiMonitor, FiSmartphone } from 'react-icons/fi';
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

const DebitSpreadsGuide = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Debit Spreads Strategy Guide: Strike Optimization & Catalyst Plays</title>
                <meta name="description" content="Master debit spreads for growth. Learn when to use bull call / bear put spreads instead of credit spreads, strike selection, catalyst plays, and risk management." />
                <link rel="canonical" href="https://onlyoptions.us/debit-spreads-guide" />
            </Helmet>

            {/* ── HERO ── */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8 text-center uppercase italic">
                    <span className="px-4 py-1.5 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[11px] font-black tracking-[0.3em] mb-8 flex items-center gap-2">
                        <FiLayers className="text-brand-500" /> Guide #27 of 30
                    </span>
                    <SectionHeader
                        label="Growth Strategy"
                        title={<>Debit Spreads <span className="text-brand-500 text-6xl">Deep Dive</span></>}
                        description="When to Buy Instead of Sell • Strike Optimization • Catalyst Plays • Scaling for Growth"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-20">
                    {[
                        { label: "Best In", value: "Low IV", icon: <FiTrendingDown className="text-blue-400" /> },
                        { label: "Reward:Risk", value: "2:1 - 5:1", icon: <FiArrowUpRight className="text-green-500" /> },
                        { label: "Win Rate", value: "40 - 55%", icon: <FiPercent className="text-brand-500" /> },
                        { label: "Main Edge", value: "Catalysts", icon: <FiZap className="text-yellow-400" /> },
                        { label: "Risk type", value: "Defined", icon: <FiShield className="text-brand-500" /> },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center gap-2">
                            <div className="mb-2 p-2 bg-white/5 rounded-xl">{stat.icon}</div>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">{stat.label}</p>
                            <h4 className="text-lg font-black italic uppercase tracking-tighter text-white">{stat.value}</h4>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="text-3xl font-black italic uppercase text-white tracking-tight leading-none underline decoration-brand-500/20 decoration-8 underline-offset-8">
                        The Growth Engine of Options Trading
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed italic">
                        Most options educators push credit spreads. Debit spreads don't get enough attention — but they are how options traders build serious wealth in trending markets. A well-placed debit spread on a breakout can return 100-400% on capital at risk. Unlike naked options, debit spreads define your maximum loss and cost 60-80% less.
                    </p>
                </div>
            </StandardSection>

            {/* ── WHEN TO USE ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader 
                            label="Context" 
                            title="When Debit Spreads Outperform Credit Spreads" 
                            className="text-left"
                            align="left"
                        />
                        <div className="space-y-4">
                            {[
                                { t: "Low IV Environment", d: "IV Rank under 30%. Options are cheap — buying makes sense; selling doesn't pay enough.", icon: <FiTrendingDown className="text-blue-400" /> },
                                { t: "Strong Directional Catalyst", d: "Earnings surprise, product launch, analyst upgrade, or major macro event.", icon: <FiZap className="text-yellow-400" /> },
                                { t: "Clear Technical Breakout", d: "Stock breaks resistance with volume confirmation. Reward potential is massive.", icon: <FiTarget className="text-brand-500" /> },
                                { t: "Trending Bull/Bear Markets", d: "Credit spreads cap your upside too early; debit spreads ride the full move.", icon: <FiTrendingUp className="text-green-500" /> },
                                { t: "Post-Earnings IV Crush", d: "If trend continues, debit spreads in low IV are ideal for the next leg higher.", icon: <FiActivity className="text-red-400" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 group hover:border-brand-500/30 transition-all">
                                    <div className="shrink-0 mt-1">{item.icon}</div>
                                    <div className="space-y-1">
                                        <h4 className="text-white font-black uppercase text-xs tracking-widest italic">{item.t}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed italic">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card variant="institutional" className="p-8 border-brand-500/20 bg-brand-500/5 space-y-8 h-full flex flex-col justify-center">
                        <div className="text-center space-y-4">
                            <FiInfo className="mx-auto text-brand-500" size={32} />
                            <h3 className="text-2xl font-black italic uppercase text-white tracking-tight">Strategy Rationale</h3>
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                Credit spreads win by being "not wrong." <br/>
                                <span className="text-brand-500 font-black tracking-widest text-lg italic">Debit spreads win by being "very right."</span>
                            </p>
                            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-left space-y-3">
                                <p className="text-[10px] font-black text-brand-500 uppercase tracking-widest">Key Difference</p>
                                <p className="text-gray-300 text-xs italic leading-relaxed">
                                    When conviction is high and volatility is low, selling premium (Credit) offers a poor risk/reward. Buying premium through a spread (Debit) provides the leverage for exponential account growth.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* ── BULL CALL SPREAD OPTIMIZATION ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Bull Component" title={<>Bull Call Spread — <span className="text-brand-500">Mastering the Long Side</span></>} align="center" className="mb-12" />
                <div className="max-w-5xl mx-auto space-y-8">
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="bg-brand-500/10 py-3 px-8 border-b border-brand-500/20">
                            <p className="text-brand-500 font-black uppercase tracking-[0.2em] text-[10px]">Optimal Entry Conditions</p>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Condition</TableHead>
                                    <TableHead>Ideal Level</TableHead>
                                    <TableHead>Why It Matters</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { c: "IV Rank", l: "Below 30%", w: "Buying cheap options — max leverage for the move." },
                                    { c: "Stock Trend", l: "Higher Highs/Lows", w: "Trend is your friend — don't fight it. 50/200 MA alignment." },
                                    { c: "Volume", l: "Above Average", w: "Confirms genuine institutional buying, not a retail fake-out." },
                                    { c: "Long Leg Delta", l: "0.50 – 0.65", w: "Enough delta for meaningful participation (ATM to slightly ITM)." },
                                    { c: "Spread Width", l: "3–5x Debit Paid", w: "Ensures at least 3:1 reward-to-risk ratio at entry." },
                                    { c: "Time (DTE)", l: "30 – 60 Days", w: "Enough time for thesis, while avoiding peak theta decay." },
                                ].map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell label="Condition" className="text-white font-black text-xs uppercase italic">{row.c}</TableCell>
                                        <TableCell label="Ideal" className="text-brand-500 font-black text-xs">{row.l}</TableCell>
                                        <TableCell label="Why" className="text-gray-500 text-xs leading-relaxed italic">{row.w}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        <div className="space-y-6">
                            <h3 className="text-xl font-black italic uppercase text-white tracking-tight border-b border-brand-500/20 pb-4">Strike Selection Process</h3>
                            <div className="space-y-4">
                                {[
                                    { s: "1", t: "Identify price target — where do you expect stock at expiry?", icon: <FiTarget/> },
                                    { s: "2", t: "Set long call strike: 1-3% OTM or ATM for highest probability.", icon: <FiArrowUpRight/> },
                                    { s: "3", t: "Set short call strike: At or slightly ABOVE your price target.", icon: <FiArrowDownRight/> },
                                    { s: "4", t: "Calculate reward-to-risk: (Width - Debit) / Debit. Must be > 2:1.", icon: <FiPercent/> },
                                    { s: "5", t: "Verify long call delta is 0.45-0.65 for sensitivity.", icon: <FiZap/> },
                                    { s: "6", t: "Add 2 weeks buffer beyond your expected catalyst move date.", icon: <FiActivity/> },
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 font-black text-[10px] shrink-0 mt-0.5 italic">{step.s}</div>
                                        <p className="text-gray-400 text-xs italic">{step.t}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Card variant="glass" className="p-8 border-green-500/20 bg-green-500/[0.02] space-y-6 border-l-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-500/10 rounded-xl"><FiTrendingUp className="text-green-400" size={24} /></div>
                                <h4 className="text-white font-black uppercase text-sm tracking-widest italic">Real Trade Study: NVDA Breakout</h4>
                            </div>
                            <div className="space-y-4 font-mono text-[11px]">
                                <p className="text-gray-500">NVDA @ $495, Breakout confirmed. IVR: 24%.</p>
                                <div className="space-y-1 p-4 bg-black/40 rounded-xl border border-white/5">
                                    <p className="text-white">BUY $500 Call (45 DTE) @ $18.40</p>
                                    <p className="text-white">SELL $560 Call (45 DTE) @ $6.80</p>
                                    <div className="border-t border-white/10 my-2"></div>
                                    <p className="text-brand-500 font-bold">Net Debit: $11.60 ($1,160 risk)</p>
                                    <p className="text-green-400 font-bold">Max Profit: $48.40 ($4,840 gain)</p>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <p className="text-gray-500 uppercase tracking-widest">Return:</p>
                                    <p className="text-green-400 font-black text-xl italic">+417% <span className="text-[10px] text-gray-600">(38 Days)</span></p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* ── BEAR PUT SPREAD ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Bear Component" title={<>Bear Put Spread — <span className="text-red-500">Mastering the Short Side</span></>} align="center" className="mb-12" />
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="bg-red-500/10 py-3 px-8 border-b border-red-500/20">
                            <p className="text-red-400 font-black uppercase tracking-[0.2em] text-[10px]">Bear Put (Debit) vs Bear Call (Credit)</p>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Scenario</TableHead>
                                    <TableHead className="text-red-400">Bear Put (Debit)</TableHead>
                                    <TableHead className="text-brand-500">Bear Call (Credit)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { s: "IV Environment", d: "Low IV (Cheap)", c: "High IV (Expensive)" },
                                    { s: "Conviction", d: "High / Aggressive", c: "Moderate / Neutral" },
                                    { s: "Profit Profile", d: "High Reward (Ride it)", c: "Capped (Wait it out)" },
                                    { s: "Win Probability", d: "~40-55%", c: "~60-70%" },
                                    { s: "Best Market", d: "Trending Breakdown", c: "Range-Bound Resis." },
                                ].map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell label="Scenario" className="text-white font-black text-[10px] uppercase italic">{row.s}</TableCell>
                                        <TableCell label="Debit" className="text-red-400 font-bold text-xs italic">{row.d}</TableCell>
                                        <TableCell label="Credit" className="text-brand-500 font-bold text-xs italic">{row.c}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/[0.02] space-y-6 border-l-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-500/10 rounded-xl"><FiTrendingDown className="text-red-400" size={24} /></div>
                            <h4 className="text-white font-black uppercase text-sm tracking-widest italic">Real Trade Study: QQQ Crash</h4>
                        </div>
                        <div className="space-y-4 font-mono text-[11px]">
                            <p className="text-gray-500">QQQ @ $470, Tech breakdown. IVR: 28%.</p>
                            <div className="space-y-1 p-4 bg-black/40 rounded-xl border border-white/5">
                                <p className="text-white">BUY $462 Put (35 DTE) @ $8.40</p>
                                <p className="text-white">SELL $435 Put (35 DTE) @ $3.20</p>
                                <div className="border-t border-white/10 my-2"></div>
                                <p className="text-red-400 font-bold">Net Debit: $5.20 ($520 risk)</p>
                                <p className="text-green-400 font-bold">Max Profit: $21.80 ($2,180 gain)</p>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <p className="text-gray-500 uppercase tracking-widest">Return:</p>
                                <p className="text-green-400 font-black text-xl italic">+419% <span className="text-[10px] text-gray-600">(12 Days)</span></p>
                            </div>
                            <p className="text-gray-600 text-[10px] italic leading-relaxed pt-2">
                                "The QQQ bear put spread during the Aug 2024 crash returned 419% in 12 days on a fully defined-risk position."
                            </p>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* ── CATALYST FRAMEWORK ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <SectionHeader 
                        label="The Edge" 
                        title="Catalyst-Driven Debit Spreads" 
                        description="The single most powerful application of debit spreads. Capture 80-90% of the upside at 20-30% of the cost."
                        align="center"
                    />
                </div>

                <div className="max-w-6xl mx-auto mb-20 p-1 bg-gradient-to-r from-brand-500/20 via-brand-500/5 to-brand-500/20 rounded-[32px]">
                    <div className="bg-gray-950 rounded-[31px] p-8 md:p-12">
                        <h3 className="text-xl font-black italic uppercase text-white tracking-widest text-center mb-12 underline decoration-brand-500/20">5-Step Catalyst Framework</h3>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {[
                                { t: "Spot", d: "Identify the catalyst: earnings, FDA, product launch, macro event.", icon: <FiSearch/> },
                                { t: "Bias", d: "Determine consensus, recent trend, and insider activities.", icon: <FiTarget/> },
                                { t: "Prep", d: "Enter 5-10 days BEFORE IV expansion for lowest cost.", icon: <FiActivity/> },
                                { t: "Strike", d: "Long at ATM, Short at post-catalyst expected target.", icon: <FiLayers/> },
                                { t: "Size", d: "Risk 2-3% maximum. Catalyst trades are binary.", icon: <FiPercent/> }
                            ].map((step, i) => (
                                <div key={i} className="space-y-4 text-center group">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 mx-auto group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </div>
                                    <h5 className="text-white font-black italic uppercase tracking-tighter text-sm">{step.t}</h5>
                                    <p className="text-gray-500 text-[10px] leading-relaxed italic">{step.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40 max-w-6xl mx-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Catalyst Type</TableHead>
                                <TableHead>Lead Time</TableHead>
                                <TableHead>Strikes</TableHead>
                                <TableHead className="text-green-500">Expected ROI</TableHead>
                                <TableHead>Risk</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { t: "Earnings Beat", l: "3-7 Days", s: "ATM / +10% Wide", r: "100-300%", rsk: "Moderate" },
                                { t: "FDA Approval", l: "5-14 Days", s: "ATM / +25% Wide", r: "200-500%", rsk: "High" },
                                { t: "Product Launch", l: "7-14 Days", s: "2% OTM / +7% Wide", r: "80-200%", rsk: "Med-Low" },
                                { t: "Fed Pivot", l: "1-3 Days", s: "ATM / +4% Wide", r: "50-150%", rsk: "Moderate" },
                                { t: "Analyst Upgrade", l: "Day Of", s: "ATM / +6% Wide", r: "80-200%", rsk: "Low-Med" },
                                { t: "Techn. Breakout", l: "Day Of", s: "1% OTM / +6% Wide", r: "100-250%", rsk: "Moderate" },
                            ].map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell label="Type" className="text-white font-black text-[10px] uppercase italic">{row.t}</TableCell>
                                    <TableCell label="Lead" className="text-gray-400 text-xs italic">{row.l}</TableCell>
                                    <TableCell label="Strikes" className="text-brand-500 font-bold text-xs">{row.s}</TableCell>
                                    <TableCell label="ROI" className="text-green-400 font-black text-xs italic">{row.r}</TableCell>
                                    <TableCell label="Risk" className="text-gray-500 text-xs italic">{row.rsk}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </StandardSection>

            {/* ── MANAGEMENT RULES ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Control" title="The 3 Golden Management Rules" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            num: "Rule 1",
                            t: "Take 80% Profits Early",
                            d: "The last 20% of profit requires too much precision. Capture 80-90% of max value and redeploy capital immediately.",
                            ex: "Paid $4.80 on $10 wide. Max profit $5.20. Exit at $9.00+ credit.",
                            icon: <FiCheck className="text-green-400" />
                        },
                        {
                            num: "Rule 2",
                            t: "Stop Loss at 50% Debit",
                            d: "If the thesis breaks, close when spread loses 50% value. Losing 50% is recoverable; losing 100% is account-damaging.",
                            ex: "Paid $4.80 debit. Stop loss exit if spread value drops to $2.40.",
                            icon: <FiX className="text-red-400" />
                        },
                        {
                            num: "Rule 3",
                            t: "Roll Up on Strong Moves",
                            d: "If stock surges past short strike with 14+ DTE, close and open new higher strikes to capture continued upside.",
                            ex: "Roll when stock moved 10%+ beyond initial target with time on clock.",
                            icon: <FiLayers className="text-brand-500" />
                        }
                    ].map((rule, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-white/[0.02] flex flex-col h-full hover:border-brand-500/20 transition-all group">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-brand-500 font-black text-xs uppercase tracking-widest italic">{rule.num}</span>
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-500/10 transition-colors">{rule.icon}</div>
                            </div>
                            <h4 className="text-white font-black uppercase text-sm tracking-widest italic mb-4">{rule.t}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed italic mb-8 grow">{rule.d}</p>
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5 text-[10px] text-brand-500 italic">
                                <span className="font-black uppercase tracking-tighter">EX:</span> {rule.ex}
                            </div>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* ── POSITION SIZING ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <SectionHeader label="Scale" title="Position Sizing for Growth" align="left" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Account Size</TableHead>
                                        <TableHead>Max / Spread</TableHead>
                                        <TableHead>Concurrent</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { a: "$10,000", m: "$200-$300 (2-3%)", c: "3-4 Spreads" },
                                        { a: "$25,000", m: "$500-$750 (2-3%)", c: "4-5 Spreads" },
                                        { a: "$50,000", m: "$1,000-$1,500 (2-3%)", c: "5-6 Spreads" },
                                        { a: "$100,000", m: "$2,000-$3,000 (2-3%)", c: "6-8 Spreads" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Account" className="text-white font-black text-xs">{row.a}</TableCell>
                                            <TableCell label="Max" className="text-brand-500 font-bold text-xs">{row.m}</TableCell>
                                            <TableCell label="Count" className="text-gray-400 text-xs italic">{row.c}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-xl font-black italic uppercase text-white tracking-tight border-b border-brand-500/20 pb-4">Debit Spreads vs Naked Options</h3>
                        <div className="space-y-4">
                            {[
                                { l: "Cost Efficiency", d: "Spreads cost 20-40% of a naked option for the same directional bet.", icon: <FiPercent className="text-green-500"/> },
                                { l: "Max Potential Risk", d: "Capital at risk is 60-80% lower than naked calls/puts.", icon: <FiShield className="text-brand-500"/> },
                                { l: "Break-Even Price", d: "Closer to current price — requires less stock movement to win.", icon: <FiTarget className="text-yellow-500"/> },
                                { l: "Theta/IV Impact", d: "Short leg mitigates time decay and protects against IV crush.", icon: <FiZap className="text-red-400"/> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 italic">
                                    <div className="shrink-0 mt-1">{item.icon}</div>
                                    <div className="space-y-1">
                                        <h5 className="text-white font-black uppercase text-[10px] tracking-widest">{item.l}</h5>
                                        <p className="text-gray-500 text-[11px] leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* ── TESTIMONIALS ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Results" title="Member Success Stories" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            n: "Kevin L. — Washington",
                            t: "NVDA Bull Call +417%",
                            q: "The NVDA bull call spread returning 417% with defined risk is exactly why I switched from buying naked calls. Same conviction, same stock move — fraction of the capital at risk."
                        },
                        {
                            n: "Patricia M. — Florida",
                            t: "QQQ Bear Put +419%",
                            q: "I saw the breakdown, IV was low so I bought cheap puts via a spread. When QQQ crashed, max profit was waiting. All from a $520 risk position. The ultimate bear market strategy."
                        },
                        {
                            n: "Amanda R. — Georgia",
                            t: "Catalyst Mastery",
                            q: "I now systematically buy debit spreads before each major catalyst instead of randomly guessing. My strike selection and timing improved, and I stopped getting destroyed by IV crush."
                        }
                    ].map((test, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-white/[0.02] italic flex flex-col gap-4">
                            <p className="text-gray-400 text-xs leading-relaxed italic">"{test.q}"</p>
                            <div className="pt-4 border-t border-white/5 mt-auto">
                                <h5 className="text-brand-500 font-black uppercase text-[10px] tracking-widest">{test.t}</h5>
                                <p className="text-gray-600 text-[9px] font-bold uppercase tracking-widest">{test.n}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* ── REFERENCE CHECKLIST ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto p-12 bg-gray-950 border border-brand-500/20 rounded-[32px] space-y-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-black italic uppercase text-white tracking-widest mb-4">Debit Spreads Reference</h3>
                        <p className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">Operational Checklist</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-lg font-black italic uppercase text-white tracking-tight border-b border-brand-500/10 pb-2">Entry Checklist</h4>
                            <div className="space-y-3">
                                {[
                                    "IV Rank below 35%? (Cheap premium)",
                                    "Confirmed technical or catalyst signal?",
                                    "Reward-to-risk at least 2:1?",
                                    "Long leg delta between 0.45 and 0.65?",
                                    "DTE at least 30-45 days?",
                                    "Position sized at 2-3% account max?",
                                    "Short strike at post-move target price?"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center text-gray-400 text-[11px] italic">
                                        <FiCheck className="text-green-500 shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-black italic uppercase text-white tracking-tight border-b border-white/10 pb-2">Management Rules</h4>
                            <div className="space-y-3">
                                {[
                                    "Close at 80-90% of max profit",
                                    "Stop loss at 50% of debit paid",
                                    "Roll strikes if 14+ DTE remains",
                                    "Never add to a losing spread",
                                    "Accept defined loss and move on"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center text-gray-400 text-[11px] italic">
                                        <FiTarget className="text-brand-500 shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Internal Links */}
                <div className="max-w-6xl mx-auto mt-24 pt-24 border-t border-white/5 text-center px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Related Growth Guides</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "Options 101", path: "/options-trading-101" },
                            { title: "Greeks Guide", path: "/options-greeks-explained" },
                            { title: "Premium Pricing", path: "/understanding-options-premium-pricing" },
                            { title: "Best Brokers", path: "/best-brokers-for-options-trading" },
                            { title: "Beginner Signals", path: "/options-signals-for-beginners" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
                            { title: "Common Mistakes", path: "/common-options-trading-mistakes" },
                            { title: "Free Trial", path: "/free-trial" },
                            { title: "Performance", path: "/performance" },
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
                    title="Scale Your Account"
                    subtitle="Debit spreads are the growth engine of professional options portfolios. Get exact strikes and catalyst entries delivered to your phone in real-time."
                    className="bg-transparent"
                />
            </div>
        </div>
    );
};

export default DebitSpreadsGuide;
