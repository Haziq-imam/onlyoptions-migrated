import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiAlertTriangle, FiZap, FiShield, FiActivity, FiTrendingDown } from 'react-icons/fi';
import { Link } from "@/lib/react-router-dom-stub";
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

const AaplOptionsSignals = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>AAPL Options Signals: Complete Trading Guide | OnlyOptions</title>
                <meta name="description" content="Learn how to trade AAPL options with professional signals. Understand Apple's predictable patterns, earnings plays, product launches, and why AAPL is ideal for conservative options traders." />
                <link rel="canonical" href="https://onlyoptions.us/aapl-options-signals" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Stock-Specific Guide"
                    title={<>Trading <span className="text-brand-500">Apple (AAPL)</span> with Options</>}
                    description="The Blue-Chip Options Play — Steady, Predictable, Profitable"
                    align="center"
                    className="mb-12"
                />

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Apple (AAPL) is the opposite of TSLA. Stable, predictable, and loved by institutions. AAPL moves 1-4% on earnings (vs TSLA 10-20%), making it perfect for conservative options traders who want steady returns without extreme risk.
                    </p>
                </div>

                {/* Key Stats Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "74.0%" },
                        { label: "Avg Winner", value: "+72%" },
                        { label: "R/R Ratio", value: "2.6:1" },
                        { label: "Beta", value: "1.2" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* What Makes AAPL Different */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The Mega-Cap Stability</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">World's Most Valuable Company</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            AAPL is the world's most valuable company at $3.5+ trillion market cap. This size creates exceptional stability — ideal for traders who want consistent returns without extreme volatility.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Key Characteristics:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                                {[
                                    "Price: $170-$250 per share",
                                    "Daily Volume: 50-80M shares",
                                    "Options Volume: 600K-1M daily",
                                    "Beta: 1.2 (20% more volatile than S&P)",
                                    "Dividend: 0.5% yield (stable income)",
                                    "Predictability: High"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-center">
                                        <FiCheck className="text-brand-500 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">AAPL vs NVDA vs TSLA vs SPY:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead className="text-brand-500">AAPL</TableHead>
                                        <TableHead>NVDA</TableHead>
                                        <TableHead>TSLA</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Daily Move", a: "0.5-2%", n: "2-5%", t: "3-8%" },
                                        { f: "Earnings Move", a: "3-6%", n: "8-15%", t: "10-20%" },
                                        { f: "Implied Vol", a: "20-35%", n: "45-80%", t: "50-100%" },
                                        { f: "Predictability", a: "High", n: "Moderate", t: "Very Low" },
                                        { f: "Options Premium", a: "Moderate", n: "High", t: "Very High" },
                                        { f: "Risk Level", a: "Low-Moderate", n: "Very High", t: "Extreme" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="AAPL" className="text-white font-bold text-xs italic">{row.a}</TableCell>
                                            <TableCell label="NVDA" className="text-gray-400 text-xs">{row.n}</TableCell>
                                            <TableCell label="TSLA" className="text-gray-400 text-xs">{row.t}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="p-4 bg-brand-500/5 border border-brand-500/10 rounded-2xl">
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest leading-relaxed text-center">
                                AAPL is the "safest" individual stock for options trading. Lower profits than NVDA/TSLA, but far lower risk.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Performance Tracker */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-4 mb-20">
                    <SectionHeader label="Track Record" title="Our AAPL Signals Performance" align="center" className="mb-0" />
                    <p className="text-center text-gray-400 text-sm italic uppercase tracking-widest">
                        74% win rate — second only to SPY. Consistent, reliable, predictable income.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                    {[
                        { l: "Win Rate", v: "74.0%", d: "Second highest of all tickers" },
                        { l: "Avg Winner", v: "+72%", d: "Steady gains, not lottery tickets" },
                        { l: "Risk/Reward", v: "2.6:1", d: "Consistent, reliable setups" },
                        { l: "Best Trade", v: "+168%", d: "iPhone launch momentum play" },
                        { l: "Total Signals", v: "73", d: "4% of all signals sent" },
                        { l: "Avg Loser", v: "-28%", d: "Lower drawdowns vs NVDA/TSLA" }
                    ].map((item, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 text-center">
                            <h5 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">{item.l}</h5>
                            <p className="text-brand-500 text-3xl font-black italic tracking-tighter mb-4">{item.v}</p>
                            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Costs & Premium */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-12">
                        <SectionHeader label="Economics" title="Affordable Premium Costs" align="left" className="mb-0" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Option Type</TableHead>
                                        <TableHead>Typical Premium</TableHead>
                                        <TableHead>Total Cost (1 Contract)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { t: "0DTE ATM", p: "$1.50-$3.00", c: "$150-$300" },
                                        { t: "Weekly ATM", p: "$3.50-$7.00", c: "$350-$700" },
                                        { t: "Monthly ATM", p: "$8.00-$15.00", c: "$800-$1,500" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Type" className="text-white text-xs font-bold">{row.t}</TableCell>
                                            <TableCell label="Premium" className="text-gray-400 text-xs">{row.p}</TableCell>
                                            <TableCell label="Cost" className="text-brand-500 font-black italic text-xs">{row.c}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <p className="text-xs text-gray-500 italic uppercase tracking-widest leading-relaxed">
                            Accessible for smaller accounts ($5,000+). Significantly less capital required than NVDA or TSLA options.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <SectionHeader label="Catalysts" title="What Moves AAPL" align="left" className="mb-0" />
                        <div className="space-y-4">
                            {[
                                { t: "Quarterly Earnings", v: "3-6% moves (Jan, Apr, Jul, Oct)", i: <FiZap className="text-yellow-500" />, badge: "Primary" },
                                { t: "September iPhone Event", v: "3-5% move if well-received", i: <FiActivity className="text-brand-500" />, badge: "Primary" },
                                { t: "June WWDC", v: "2-3% move on software updates", i: <FiShield className="text-brand-400" />, badge: "Primary" },
                                { t: "China iPhone Sales", v: "1-3% monthly data reactions", i: <FiTrendingDown className="text-red-500" />, badge: "Secondary" },
                                { t: "Services Growth Data", v: "App Store, iCloud revenue beats", i: <FiActivity className="text-brand-400" />, badge: "Secondary" }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-5 border-white/5 bg-gray-950/40 flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {item.i}
                                    </div>
                                    <div className="flex-1 space-y-0.5">
                                        <div className="flex items-center gap-3">
                                            <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">{item.t}</h5>
                                            <span className={`text-[8px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${item.badge === 'Primary' ? 'text-brand-500 border-brand-500/30' : 'text-gray-500 border-white/10'}`}>{item.badge}</span>
                                        </div>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{item.v}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Trading Strategies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="4 Proven AAPL Strategies" align="center" className="mb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            t: "Strategy 1: Pre-Earnings IV Expansion",
                            badge: "No Earnings Risk",
                            d: "Buy calls 7-10 days before earnings. Sell 1 day before earnings to capture the 40-60% IV spike without holding through the binary event.",
                            e: "Jan 15: Buy $220 call for $6.50 → Jan 24: IV spikes to 42%, call worth $9.80 (+51%). Exit before earnings."
                        },
                        {
                            t: "Strategy 2: Post-Earnings Momentum",
                            badge: "Trend Following",
                            d: "After a clean earnings gap (+4%), wait 30 minutes for confirmation, then buy calls. AAPL typically trends 2-3 days post-earnings.",
                            e: "AAPL earnings gap +4.1% → Buy $230 call for $5.20 → 5 days later: AAPL $236, exit at $9.40 (+81%)."
                        },
                        {
                            t: "Strategy 3: iPhone Launch Momentum",
                            badge: "Seasonal Play",
                            d: "September iPhone launch event (always 2nd Tuesday) creates 3-5% move if well-received. Buy calls 2-3 days before, exit 1-2 days after.",
                            e: "Buy $230 call for $4.80 before Sept 12 event → iPhone well-received, exit at $9.20 (+92%)."
                        },
                        {
                            t: "Strategy 4: China Sales Dip Buy",
                            badge: "Mean Reversion",
                            d: "Monthly China iPhone data misses cause -3% to -4% AAPL drops. Market overreacts. Buy 2-week calls for recovery trade.",
                            e: "China data weak: AAPL -3.5% to $222 → Buy $224 call for $3.80 → One week later: AAPL $227, exit at $6.40 (+68%)."
                        }
                    ].map((strategy, i) => (
                        <Card key={i} variant="glass" className="p-10 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-white font-black uppercase tracking-widest text-sm italic">{strategy.t}</h4>
                                    <span className="text-brand-500 text-[9px] font-black uppercase tracking-widest border border-brand-500/30 px-2 py-0.5 rounded-full shrink-0 ml-4">{strategy.badge}</span>
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

            {/* Seasonal Patterns & Timing */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <div className="space-y-12">
                        <SectionHeader label="Seasonality" title="AAPL Seasonal Patterns" align="left" className="mb-0" />
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-green-500/[0.03] border border-green-500/10">
                                <h5 className="text-green-400 font-black uppercase tracking-widest text-xs mb-4 italic">Strong Months</h5>
                                <div className="space-y-3">
                                    {[
                                        { m: "September-November", r: "iPhone launch season" },
                                        { m: "December-January", r: "Holiday sales + earnings anticipation" },
                                        { m: "April", r: "Services growth focus" }
                                    ].map((s, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <FiCheck className="text-green-500 shrink-0 w-3 h-3" />
                                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">{s.m}:</span> {s.r}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-red-500/[0.03] border border-red-500/10">
                                <h5 className="text-red-400 font-black uppercase tracking-widest text-xs mb-4 italic">Weak Months</h5>
                                <div className="space-y-3">
                                    {[
                                        { m: "May-August", r: "Summer lull, no major catalysts" },
                                        { m: "February-March", r: "Post-holiday slowdown" }
                                    ].map((s, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <FiAlertTriangle className="text-red-500 shrink-0 w-3 h-3" />
                                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">{s.m}:</span> {s.r}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 bg-brand-500/5 border border-brand-500/10 rounded-2xl text-center">
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                                    Trade AAPL more aggressively Sep-Jan. Reduce size 50% during May-Aug.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <SectionHeader label="Timing" title="Intraday Behavior" align="left" className="mb-0" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableBody>
                                    {[
                                        { t: "9:30-10:00 AM", b: "Moderate volatility", s: "Wait 30 Min" },
                                        { t: "10:00 AM-12:00 PM", b: "Stable trends", s: "Best Entry Window", sc: "bg-brand-500/10" },
                                        { t: "12:00-2:00 PM", b: "Lunch consolidation", s: "Hold Positions" },
                                        { t: "2:00-4:00 PM", b: "Afternoon drift", s: "Good for Entries" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.sc || ""}>
                                            <TableCell label="Time" className="text-white text-xs font-black">{row.t}</TableCell>
                                            <TableCell label="Behavior" className="text-gray-500 text-[11px] uppercase font-bold">{row.b}</TableCell>
                                            <TableCell label="Strategy" className="text-brand-500 text-[10px] font-black uppercase tracking-widest italic">{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="space-y-3">
                            <h5 className="text-white font-black uppercase tracking-widest text-xs italic">Best Trading Days:</h5>
                            {[
                                "Earnings days (quarterly — Jan, Apr, Jul, Oct)",
                                "September iPhone launch event",
                                "June WWDC (software announcement)",
                                "First Friday of month (jobs report → tech reaction)"
                            ].map((d, i) => (
                                <div key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-center">
                                    <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                                    {d}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Risk Management & Mistakes */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-12">
                        <SectionHeader label="Safety" title="AAPL Risk Management" align="left" className="mb-0" />
                        <div className="space-y-6">
                            <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                                <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-4 italic">Standard 2% Rule:</h4>
                                <p className="text-gray-300 text-xs leading-relaxed uppercase tracking-wider font-bold mb-4">
                                    AAPL's lower volatility allows <span className="text-white">standard 2% risk per trade</span>. Affordable premiums make proper sizing achievable even for smaller accounts ($5,000+).
                                </p>
                                <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        Example: $10,000 account → 2% = $200 max risk. AAPL $220 call for $6.50, stop at $4.55 (-30%). Risk per contract: $195. Trade 1 contract.
                                    </p>
                                </div>
                            </Card>
                            <Card variant="glass" className="p-6 border-green-500/20 bg-green-500/[0.03]">
                                <h4 className="text-green-400 font-black uppercase tracking-widest text-xs mb-3 italic">Multiple Positions OK</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    Unlike TSLA, you can hold 2-3 AAPL positions simultaneously. Lower correlation risk and manageable volatility makes this viable.
                                </p>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <SectionHeader label="Pitfalls" title="Common AAPL Mistakes" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "Expecting Big Moves Like TSLA", d: "AAPL moves 3-5% on earnings. Setting a 10%+ target leads to holding too long, giving back gains." },
                                { t: "Ignoring Guidance Over Results", d: "AAPL can beat EPS but guide lower. Stock drops -4%. Always watch guidance — it matters more than the actual results." },
                                { t: "Trading During Summer Lull", d: "May-August: AAPL is flat and directionless. Options decay fast. No catalysts. Avoid or dramatically reduce size." },
                                { t: "Over-Leveraging on 'Safety'", d: "AAPL feels safe but can still drop -15% in bad quarters. The 2% rule still applies — no exceptions." }
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
                </div>

                {/* Who Should Trade AAPL */}
                <div className="max-w-4xl mx-auto mb-32">
                    <SectionHeader label="Ideal Trader Profile" title="Who Should Trade AAPL" align="center" className="mb-16" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card variant="glass" className="p-8 border-green-500/20 bg-green-500/[0.03]">
                            <h4 className="text-green-400 font-black uppercase tracking-widest text-xs mb-6 italic">AAPL is Perfect For:</h4>
                            <div className="space-y-3">
                                {[
                                    "Beginners (after mastering SPY/QQQ)",
                                    "Conservative, lower-stress traders",
                                    "Smaller accounts ($5,000-$10,000)",
                                    "Traders who want predictable patterns",
                                    "Anyone tired of TSLA/NVDA whipsaws"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <FiCheck className="text-green-500 shrink-0" />
                                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-6 italic">AAPL Works Best When:</h4>
                            <div className="space-y-3">
                                {[
                                    "September-January (strong seasonal period)",
                                    "Earnings season (predictable IV pattern)",
                                    "Product launches (iPhone, WWDC)",
                                    "Tech sector rotating into mega-cap",
                                    "China iPhone data beats expectations"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto pb-24">
                    <SectionHeader label="Knowledge Base" title={<>AAPL Trading <span className="text-brand-500">FAQ</span></>} align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "Is AAPL good for beginners?", a: "Yes, after you master SPY/QQQ. AAPL is predictable, lower volatility, and has affordable premiums. Great \"first individual stock\" for options — much better than NVDA/TSLA for learning." },
                            { q: "Why is the AAPL win rate high but average winner lower?", a: "Consistency. AAPL moves 3-6% on earnings (vs NVDA 8-15%), so fewer +100%+ home runs. But you win 74% of the time with steady +60-80% gains. Reliable income vs lottery tickets." },
                            { q: "Can I trade AAPL year-round?", a: "Technically yes, but best results Sep-Jan (iPhone season, holidays, earnings). Summer (May-Aug) is slow. If trading year-round, reduce position size 50% during weak months." },
                            { q: "Does AAPL follow tech sector or trade independently?", a: "Follows QQQ moderately (both big-cap tech) but less volatile. QQQ down -2%, AAPL down -1.5%. More stable than pure tech stocks. Seen as a \"safe haven\" within tech." },
                            { q: "How much capital do I need for AAPL options?", a: "$5,000 minimum. Weekly ATM options cost $350-$700. With 2% rule ($100 risk on $5K), you can trade 1 contract comfortably. Ideal: $10,000+ for full flexibility." },
                            { q: "Should I avoid AAPL during earnings?", a: "No need to avoid entirely. Two safe approaches: (1) Pre-earnings IV expansion — buy early, exit before. (2) Post-earnings momentum — enter after the gap confirms. Avoid holding single-leg calls/puts through the actual announcement." }
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
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "QQQ Signals", path: "/qqq-options-signals" },
                            { title: "NVDA Signals", path: "/nvda-options-signals" },
                            { title: "TSLA Signals", path: "/tsla-options-signals" },
                            { title: "Earnings Plays", path: "/options-earnings-plays-strategy" },
                            { title: "Understanding IV", path: "/understanding-implied-volatility-options" },
                            { title: "Beginners Guide", path: "/options-signals-for-beginners" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
                            { title: "Options 101", path: "/options-trading-101" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "Get Access", path: "/membership" },
                            { title: "FAQ", path: "/faq" }
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
                    title="Trade AAPL Like a Pro with OnlyOptions"
                    subtitle={<>Receive real-time AAPL signals with:<br />✅ Strike Selection ✅ IV Verification ✅ Catalyst Analysis ✅ Pre-Calculated Exit Map</>}
                />
            </div>
        </div>
    );
};

export default AaplOptionsSignals;
