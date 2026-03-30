import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiAlertTriangle, FiZap, FiActivity, FiDatabase, FiTrendingUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../components/ui/Card/Card';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/Table/Table';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    return (
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
};

const AmdOptionsSignals = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>AMD Options Signals & Trading Guide | 64% Win Rate | OnlyOptions</title>
                <meta name="description" content="Trade AMD options with professional signals. 64.8% win rate, +118% average winner. Complete AMD options strategy guide for AI chip momentum, earnings plays, and NVDA correlation trades." />
                <link rel="canonical" href="https://onlyoptions.us/amd-options-signals" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8">
                    <span className="px-3 py-1 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Extreme Risk Profile ⚠️
                    </span>
                    <SectionHeader
                        label="Stock-Specific Guide"
                        title={<>Trading <span className="text-brand-500">AMD</span> with Options</>}
                        description="The High-Octane AI Chip Challenger"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Advanced Micro Devices (AMD) is NVIDIA's closest competitor in the AI chip space. While NVDA dominates with 80%+ market share, AMD's MI300X GPU series is gaining real traction with hyperscalers. AMD offers explosive profit potential — but with significantly higher risk than any other stock we cover.
                    </p>
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl inline-block">
                        <p className="text-red-400 text-xs font-black uppercase tracking-widest">
                            ⚠️ WARNING: AMD is for experienced traders only (12+ months experience, $15K+ account)
                        </p>
                    </div>
                </div>

                {/* Key Stats Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "64.8%" },
                        { label: "Avg Winner", value: "+118%" },
                        { label: "R/R Ratio", value: "3.0:1" },
                        { label: "Beta", value: "1.9" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* What Makes AMD Unique */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Data Center Dominance</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">The NVDA Challenger</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            AMD lives or dies by Data Center GPU revenue. The MI300X is AMD's answer to NVDA's H100/H200. When hyperscalers increase AMD GPU orders, the stock explodes.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Why AMD is Exciting & Dangerous:</h4>
                            <ul className="grid gap-3 list-none p-0">
                                {[
                                    "Moves 3-7% daily on normal days (extreme volatility)",
                                    "Earnings reactions of 10-18% are common",
                                    "Every NVDA move affects AMD (0.75+ correlation)",
                                    "AI chip narrative can reverse 20% in days",
                                    "Highest average winner (+118%) of all covered stocks",
                                    "Lowest win rate (64.8%) — requires iron discipline"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-start">
                                        <FiZap className={`${i < 4 ? 'text-red-500' : 'text-brand-500'} shrink-0 mt-0.5`} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Segment</TableHead>
                                        <TableHead>Revenue</TableHead>
                                        <TableHead>Profit</TableHead>
                                        <TableHead className="text-brand-500">Growth Rate</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "Data Center (MI300X GPUs)", r: "48%", p: "55%", g: "80-100%/yr 🔥", sc: "bg-brand-500/10" },
                                        { s: "Client (Ryzen CPUs)", r: "26%", p: "22%", g: "15-20%/yr" },
                                        { s: "Gaming (Consoles)", r: "14%", p: "8%", g: "Declining ❌" },
                                        { s: "Embedded (IoT)", r: "12%", p: "15%", g: "Recovering" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.sc || ""}>
                                            <TableCell label="Segment" className="text-white text-[11px] font-bold">{row.s}</TableCell>
                                            <TableCell label="Revenue" className="text-gray-400 text-[11px]">{row.r}</TableCell>
                                            <TableCell label="Profit" className="text-gray-400 text-[11px]">{row.p}</TableCell>
                                            <TableCell label="Growth Rate" className={`font-black text-[11px] italic ${row.g.includes('Declining') ? 'text-red-500' : 'text-brand-500'}`}>{row.g}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">AMD vs NVDA vs SPY:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead className="text-brand-500">AMD</TableHead>
                                        <TableHead>NVDA</TableHead>
                                        <TableHead>SPY</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Market Cap", a: "$230B", n: "$3.2T", s: "N/A" },
                                        { f: "Beta", a: "1.9", n: "2.0", s: "1.0" },
                                        { f: "Daily Move", a: "3-7% 🔥", n: "2-5%", s: "0.5-1.5%" },
                                        { f: "Earnings Move", a: "10-18% 🔥", n: "8-15%", s: "1-3%" },
                                        { f: "Implied Volatility", a: "55-90% ❌", n: "45-80%", s: "12-25%" },
                                        { f: "Profit Potential", a: "150-400% 🔥", n: "100-300%", s: "50-100%" },
                                        { f: "Risk Level", a: "EXTREME ❌", n: "Very High", s: "Moderate" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="AMD" className={`font-bold text-xs italic ${row.a.includes('EXTREME') || row.a.includes('❌') ? 'text-red-500' : 'text-white'}`}>{row.a}</TableCell>
                                            <TableCell label="NVDA" className="text-gray-400 text-xs">{row.n}</TableCell>
                                            <TableCell label="SPY" className="text-gray-400 text-xs">{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl mt-4">
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed text-center">
                                <span className="text-white">The Trade-Off:</span> AMD options are cheaper in dollar terms (stock at ~$130 vs NVDA at $900+) but carry MORE volatility risk. A bad AMD trade can hit -70% before your stop triggers.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Performance Tracker */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-4 mb-20">
                    <SectionHeader label="Track Record" title="Our AMD Signals Performance" align="center" className="mb-0" />
                    <p className="text-center text-red-400 font-bold text-sm italic uppercase tracking-widest">
                        Lowest Win Rate (64.8%) | Highest Avg Winner (+118%)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                    {[
                        { l: "Win Rate", v: "64.8%", d: "Requires emotional discipline" },
                        { l: "Avg Winner", v: "+118%", d: "Highest on our platform" },
                        { l: "Risk/Reward", v: "3.0:1", d: "Math compensates for win rate" },
                        { l: "Best Trade", v: "+341%", d: "MI300X Order Catalyst" },
                        { l: "Total Signals", v: "67", d: "Verified Trade Log" },
                        { l: "Avg Loser", v: "-39%", d: "Wider stops required" }
                    ].map((item, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 text-center">
                            <h5 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">{item.l}</h5>
                            <p className={`text-3xl font-black italic tracking-tighter mb-4 ${item.l === 'Win Rate' || item.l === 'Avg Loser' ? 'text-white' : 'text-brand-500'}`}>{item.v}</p>
                            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Catalysts */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Catalysts" title="What Moves AMD (Extremely)" align="left" className="mb-0" />
                        <div className="space-y-4">
                            {[
                                { t: "Quarterly Earnings (Data Center Focus)", v: "Earnings reactions are violent (10-18%). Data center growth is the only metric that matters.", i: <FiDatabase className="text-brand-500" />, badge: "Most Critical" },
                                { t: "NVDA Earnings Correlation", v: "AMD moves in sympathy with NVDA earnings. Massive NVDA beat = AMD up 5-10% same day.", i: <FiTrendingUp className="text-green-500" />, badge: "Secondary Pivot" },
                                { t: "MI300X Hyperscaler Orders", v: "Microsoft/Meta/Google choosing AMD over NVDA causes massive pops (6-12%).", i: <FiZap className="text-yellow-500" />, badge: "News Hook" },
                                { t: "China Export Restrictions", v: "AMD has high China exposure. New chip bans = instant 5-10% drop.", i: <FiAlertTriangle className="text-red-500" />, badge: "Regulatory Risk" }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-5 border-white/5 bg-gray-950/40 flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {item.i}
                                    </div>
                                    <div className="flex-1 space-y-0.5">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">{item.t}</h5>
                                            <span className={`text-[8px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${item.badge === 'Most Critical' || item.badge === 'Regulatory Risk' ? 'text-red-500 border-red-500/30' : 'text-brand-500 border-brand-500/30'}`}>{item.badge}</span>
                                        </div>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{item.v}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Earnings Reaction Matrix:</h4>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Scenario</TableHead>
                                            <TableHead className="text-white">Stock Move</TableHead>
                                            <TableHead className="text-brand-500">Options Impact</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { s: "Data Center beats + Raised Guide", m: "+12-18% 🚀", o: "Calls +200-400%" },
                                            { s: "Data Center beats + Flat Guide", m: "+6-10%", o: "Calls +100-160%" },
                                            { s: "Data Center misses (worst case)", m: "-12-18% 📉", o: "Puts +200-400%" },
                                            { s: "Gaming Miss but DC Beats", m: "+3-6%", o: "Calls +40-80%" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Scenario" className="text-gray-400 text-xs font-bold">{row.s}</TableCell>
                                                <TableCell label="Stock Move" className={`font-black text-xs ${row.m.includes('-') ? 'text-red-500' : 'text-white'}`}>{row.m}</TableCell>
                                                <TableCell label="Impact" className="text-brand-500 font-bold text-xs italic">{row.o}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Trading Strategies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="4 High-Octane AMD Strategies" align="center" className="mb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            t: "Strategy 1: DC Momentum",
                            badge: "Post-Earnings Setup",
                            d: "When Data Center beats by 10%+, institutions pile in. AMD spikes at open, then often reverses 4%. Wait 45-60 minutes post-open for stabilization. If holding gains & volume is >150%, buy weekly calls.",
                            e: "Q3 Earnings: DC beats estimate by 13%. Stock gaps +11.3%. Wait until 10:20 AM to enter $165 call at $7.40. Continued higher for 3 days. Exit $18.90 (+155%)."
                        },
                        {
                            t: "Strategy 2: NVDA Sympathy Trade",
                            badge: "Proxy Momentum",
                            d: "AMD moves 40-60% as much as NVDA on NVDA earnings. When NVDA reports a massive beat, AMD will gap up. Wait 30 mins after open for AMD to stabilize, then buy weekly calls.",
                            e: "NVDA Q2 beats, moves +8%. AMD gaps +6.4% in sympathy. Buy AMD $155 call at 10:00AM for $4.20. Hold 2 days as sector rallies. Exit $8.90 (+112%). Cheaper than NVDA premiums."
                        },
                        {
                            t: "Strategy 3: Hyperscaler Order Play",
                            badge: "News Catalyst",
                            d: "Monitor tech news for Microsoft/Google/Meta increasing MI300X orders over NVDA chips. The stock will pop 5-8%. Do not chase the initial pop. Buy on the 30-min pullback using 2-3 week expirations.",
                            e: "Target: +80-120%. Stop-Loss: -38%. This takes advantage of multi-week narrative shifts in the AI chip arms race."
                        },
                        {
                            t: "Strategy 4: AI Conference Catalyst",
                            badge: "Advanced Swing",
                            d: "Major conferences (NVIDIA GTC, CES) create violent swings. If AMD presents a new GPU, buy calls 5-7 days out. Sell within 24 hours of the announcement to avoid news-fade IV crush.",
                            e: "Pre-GTC: IV rises rapidly. Enter trade 4 days prior. Hold into announcement morning. Sell on the first spike. Target: +50-80%."
                        }
                    ].map((strategy, i) => (
                        <Card key={i} variant="glass" className="p-10 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-white font-black uppercase tracking-widest text-sm italic">{strategy.t}</h4>
                                    <span className="text-brand-500 text-[9px] font-black uppercase tracking-widest border border-brand-500/30 px-2 py-0.5 rounded-full shrink-0 ml-4 lg:w-max">{strategy.badge}</span>
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-wider font-bold">
                                    {strategy.d}
                                </p>
                            </div>
                            <div className="mt-10 p-4 bg-black/40 border border-white/5 rounded-xl">
                                <p className="text-brand-400 text-[10px] font-black italic">EXAMPLE RESULT:</p>
                                <p className="text-gray-300 text-[10px]">{strategy.e}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Extreme Risk Management */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 mb-2">
                            <FiAlertTriangle className="text-red-500 w-8 h-8 shrink-0" />
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">MANDATORY RULES</h2>
                        </div>
                        <div className="space-y-6">
                            <Card variant="glass" className="p-8 border-red-500/30 bg-red-500/5">
                                <h4 className="text-red-500 font-black uppercase tracking-widest text-xs mb-4 italic">Position Sizing: 1% MAXIMUM ❌</h4>
                                <p className="text-gray-300 text-xs leading-relaxed uppercase tracking-wider font-bold mb-4">
                                    AMD is the highest-risk stock we cover. <span className="text-white font-black">The 1% rule is non-negotiable.</span> It can move -15% in a single day. At 2%, a bad AMD trade creates an 8-12% account drawdown.
                                </p>
                                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$10,000 Account:</span> Barely viable ($100 max risk)
                                    </p>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$15,000 Account:</span> 1 contract ($150 risk)
                                    </p>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$20,000 Account:</span> 1 contract comfortably
                                    </p>
                                </div>
                            </Card>
                            <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Stop-Loss: 38-45% (Widest of All)</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    AMD regularly moves ±5% intraday. A 30% stop gets hit on normal noise even when you are right. Wide stops are mandatory, which is why position sizing must be strictly 1%.
                                </p>
                            </Card>
                            <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Max 1 Position</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    Due to its massive NVDA correlation, holding 2 AMD positions is essentially double the sector risk.
                                </p>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <SectionHeader label="Timing" title="Intraday Behavior" align="left" className="mb-0" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableBody>
                                    {[
                                        { t: "9:30-10:30 AM", b: "$5-10 wild swings", s: "AVOID COMPLETELY ❌", sc: "bg-red-500/10" },
                                        { t: "10:30 AM-12:00 PM", b: "Trends & Vol confirm", s: "Best Entry ✅", sc: "bg-brand-500/10" },
                                        { t: "1:30-3:00 PM", b: "Afternoon direction", s: "Good Continuation" },
                                        { t: "3:00-4:00 PM", b: "Violent closing swings", s: "Reduce/Exit ⚠️" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.sc || ""}>
                                            <TableCell label="Time" className="text-white text-xs font-black">{row.t}</TableCell>
                                            <TableCell label="Behavior" className="text-gray-500 text-[11px] uppercase font-bold">{row.b}</TableCell>
                                            <TableCell label="Strategy" className={`text-[10px] font-black uppercase tracking-widest italic ${row.s.includes('AVOID') ? 'text-red-500' : 'text-brand-500'}`}>{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>

                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                            <h5 className="text-white font-black uppercase tracking-widest text-xs italic">When NOT to Trade AMD:</h5>
                            <div className="space-y-2">
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-red-400">Mondays:</span> Weekend China ban/AI news creates gap risks.</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-red-400">NVDA Earnings Day:</span> Moves wildly in both directions.</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-red-400">Pre-Earnings Week:</span> Options are massively overpriced.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Mistakes & Profile */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-12">
                        <SectionHeader label="Pitfalls" title="Common AMD Fatal Errors" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "Using 2% Position Sizing", d: "Thinking you can handle it. Reality: AMD's extreme volatility means a single trade will cause massive account damage. Fix: 1% max. Ever." },
                                { t: "Trading in the First 30 Minutes", d: "AMD regularly spikes +4% at open, sucks buyers in, and reverses -6% by 10:15 AM. Strict Rule: NO entries before 10:30 AM." },
                                { t: "Holding Through China News", d: "Thinking export bans will reverse. Because of its massive China exposure, AMD can plummet -15% intraday. Cut your trades instantly." },
                                { t: "Ignoring NVDA's Impact", d: "AMD's individual narrative doesn't matter if NVDA issues bad guidance. Always confirm NVDA's price action before entering an AMD call." }
                            ].map((m, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-red-500/[0.02] border border-red-500/10">
                                    <FiAlertTriangle className="text-red-500 shrink-0 mt-1" />
                                    <div className="space-y-1">
                                        <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">{m.t}</h5>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed">{m.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <SectionHeader label="Ideal Trader Profile" title="Who Should Trade AMD" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-6">
                            <Card variant="glass" className="p-8 border-yellow-500/20 bg-yellow-500/[0.03]">
                                <h4 className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-6 italic">AMD is Right For You If:</h4>
                                <div className="space-y-3">
                                    {[
                                        "12+ months of options exact experience",
                                        "You have a $15,000+ account base",
                                        "You can emotionally handle hitting -40% stops",
                                        "You possess iron discipline (1% sizing rules)",
                                        "You want explosive +200-300% winners"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <FiCheck className="text-yellow-500 shrink-0" />
                                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/[0.03]">
                                <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-6 italic">AMD is NOT Right For You If:</h4>
                                <div className="space-y-3">
                                    {[
                                        "<12 months experience (You WILL lose money)",
                                        "Account under $12,000",
                                        "You panic sell when a trade hits -20%",
                                        "You used 2% sizing on TSLA and blew up"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <FiAlertTriangle className="text-red-500 shrink-0" />
                                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t border-red-500/20">
                                    <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        Learning Ladder: <br/>SPY → AAPL → MSFT → META → NVDA → <span className="text-red-500">AMD (Last)</span>
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto pb-24">
                    <SectionHeader label="Knowledge Base" title={<>AMD Options <span className="text-brand-500">FAQ</span></>} align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "Why is AMD's win rate lower if it is so volatile?", a: "Higher volatility creates false breakouts and whipsaws. AMD can trend perfectly, then gap down 8% instantly on a random China headline. Wide stops help, but 35% of trades still fail. The mathematics work out because the Average Winner (+118%) is incredibly massive." },
                            { q: "Should I trade AMD or NVDA?", a: "For accounts under $20K: Choose AMD due to cheaper options premiums. For accounts over $20K: Choose NVDA for superior liquidity. Both require exactly the same discipline: tight sizing, wide stops, no earnings risks." },
                            { q: "Can beginners trade AMD options?", a: "No. The speed of AMD's intraday price action will force beginners into emotional panic selling or revenge trading, resulting in account blowouts. Master SPY and AAPL beforehand." },
                            { q: "AMD dropped 15% today on no apparent news. What happened?", a: "Always check four things: 1) NVDA news causing sympathy drops, 2) Breaking China export bans, 3) AI competitor announcements, 4) Major hyperscaler capex cuts. AMD rarely drops 15% without a catalyst in the broader semiconductor sandbox." },
                            { q: "What's the safest way to trade AMD?", a: "The Post-Earnings Data Center momentum play. Wait for the earnings report, confirm the DC segment beat Wall Street, wait 45 full minutes after the morning bell, and buy ONE weekly contract (using 1% risk)." }
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links */}
                <div className="max-w-6xl mx-auto py-20 border-t border-white/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Trading Ecosystem</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "NVDA Signals", path: "/nvda-options-signals" },
                            { title: "TSLA Signals", path: "/tsla-options-signals" },
                            { title: "META Signals", path: "/meta-options-signals" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "Options Profit Calculator", path: "/options-profit-calculator" },
                            { title: "Managing Losing Trades", path: "/managing-losing-options-trades" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "Trading Psychology", path: "/trading-psychology" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "Get Access", path: "/membership" }
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
                    title="Trade AMD with Iron Discipline"
                    subtitle={<>Receive high-conviction AMD signals with:<br />✅ Strict 1% Sizing Rules ✅ Verified Exits ✅ Multi-day Momentum Detection</>}
                />
            </div>
        </div>
    );
};

export default AmdOptionsSignals;
