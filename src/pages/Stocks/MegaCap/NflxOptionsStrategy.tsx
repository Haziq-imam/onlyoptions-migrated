import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiAlertTriangle, FiZap, FiActivity, FiUsers, FiVideo, FiTrendingUp } from 'react-icons/fi';
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

const NflxOptionsStrategy = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>NFLX Options Signals & Trading Guide | 68% Win Rate | OnlyOptions</title>
                <meta name="description" content="Trade NFLX options with professional signals. 68.4% win rate, +89% average winner. Complete Netflix options strategy guide for earnings plays, subscriber growth trades, and content catalyst strategies." />
                <link rel="canonical" href="https://onlyoptions.us/nflx-options-signals" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        Earnings-Driven Explosions
                    </span>
                    <SectionHeader
                        label="Stock-Specific Guide"
                        title={<>Trading <span className="text-red-500">Netflix (NFLX)</span> with Options</>}
                        description="The King of Streaming and Subscriber Volatility"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Netflix is the world's largest streaming service with 300M+ paid subscribers globally. What makes NFLX exceptional for options trading is its extremely predictable earnings catalyst — subscriber numbers. Every quarter, one metric determines whether NFLX moves +12% or -12%. Once you understand what drives it, it becomes one of the most tradeable earnings stocks in the market.
                    </p>
                </div>

                {/* Key Stats Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "68.4%" },
                        { label: "Avg Winner", value: "+89%" },
                        { label: "R/R Ratio", value: "2.7:1" },
                        { label: "Beta", value: "1.3" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* What Makes NFLX Unique */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The Subscriber Edge</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">A Highly Predictable Catalyst</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Subscriber numbers are reported monthly by third-party trackers (like Antenna and YipitData). Experienced traders can actually estimate the beat/miss BEFORE earnings with more accuracy than most other stocks.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Why NFLX is Exceptional:</h4>
                            <ul className="grid gap-3 list-none p-0">
                                {[
                                    "Highly predictable primary catalyst (net subscriber additions)",
                                    "Strong post-earnings momentum that sustains reliably for 3-5 days",
                                    "Ad-supported tier is creating a massive new revenue growth story",
                                    "Password sharing crackdowns proved to be explosive growth tailwinds"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-start">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Revenue Segment</TableHead>
                                        <TableHead>Revenue %</TableHead>
                                        <TableHead className="text-brand-500">Growth Rate</TableHead>
                                        <TableHead>Trend</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "Streaming Subscriptions", r: "85%", g: "12-15%/yr", t: "Stable ✅" },
                                        { s: "Advertising (Ad-Tier)", r: "12%", g: "80-100%/yr 🔥", t: "Explosive growth", sc: "bg-brand-500/10" },
                                        { s: "Games & Other", r: "3%", g: "Growing", t: "Early stage" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.sc || ""}>
                                            <TableCell label="Segment" className="text-white text-[11px] font-bold">{row.s}</TableCell>
                                            <TableCell label="Revenue %" className="text-gray-400 text-[11px]">{row.r}</TableCell>
                                            <TableCell label="Growth Rate" className={`font-black text-[11px] italic ${row.g.includes('🔥') ? 'text-brand-500' : 'text-gray-400'}`}>{row.g}</TableCell>
                                            <TableCell label="Trend" className={`text-[10px] font-bold uppercase tracking-widest ${row.t.includes('✅') ? 'text-green-500' : 'text-brand-500'}`}>{row.t}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">NFLX vs Competitors:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead className="text-brand-500">NFLX</TableHead>
                                        <TableHead>META</TableHead>
                                        <TableHead>GOOGL</TableHead>
                                        <TableHead>AAPL</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Market Cap", n: "$380B", m: "$1.4T", g: "$2.1T", a: "$3.5T" },
                                        { f: "Beta", n: "1.3", m: "1.4", g: "1.1", a: "1.2" },
                                        { f: "Earnings Move", n: "10-16% 🔥", m: "8-14%", g: "5-8%", a: "3-6%" },
                                        { f: "Volatility (IV)", n: "35-65%", m: "30-55%", g: "22-35%", a: "20-35%" },
                                        { f: "Profit Potential", n: "80-180% 🔥", m: "100-200%", g: "60-90%", a: "50-100%" },
                                        { f: "Predictability", n: "High ✅", m: "Moderate", g: "Moderate", a: "High" },
                                        { f: "Risk Level", n: "High ⚠️", m: "High ⚠️", g: "Moderate", a: "Low-Mod" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="NFLX" className={`font-bold text-xs italic ${row.n.includes('⚠️') ? 'text-red-500' : 'text-white'}`}>{row.n}</TableCell>
                                            <TableCell label="META" className="text-gray-400 text-xs">{row.m}</TableCell>
                                            <TableCell label="GOOGL" className="text-gray-400 text-xs">{row.g}</TableCell>
                                            <TableCell label="AAPL" className="text-gray-400 text-xs">{row.a}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="p-4 border-l-2 border-brand-500 bg-white/[0.02]">
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                <span className="text-white">Note:</span> NFLX trades at roughly $600-$750 per share, making its options contacts relatively expensive compared to stocks like AAPL or GOOGL. You must respect account minimums to trade it.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Performance Tracker */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-4 mb-20">
                    <SectionHeader label="Track Record" title="Our NFLX Signals Performance" align="center" className="mb-0" />
                    <p className="text-center text-gray-500 font-bold text-sm italic uppercase tracking-widest">
                        Data Period: Jan 2023 – Feb 2026 | Verified via Performance Dashboard
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                    {[
                        { l: "Win Rate", v: "68.4%", d: "vs. 45-55% Industry Avg" },
                        { l: "Avg Winner", v: "+89%", d: "vs. +35-50% Industry Avg" },
                        { l: "Risk/Reward", v: "2.7:1", d: "Excellent Entry Precision" },
                        { l: "Best Trade", v: "+224%", d: "Subscriber Beat Catalyst" },
                        { l: "Total Signals", v: "78", d: "High Sample Size" },
                        { l: "Avg Loser", v: "-33%", d: "Strict Stop-Loss Discipline" }
                    ].map((item, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 text-center">
                            <h5 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">{item.l}</h5>
                            <p className="text-3xl font-black italic tracking-tighter mb-4 text-brand-500">{item.v}</p>
                            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Catalysts */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Catalysts" title="What Moves NFLX" align="left" className="mb-0" />
                        <div className="space-y-4">
                            {[
                                { t: "Quarterly Earnings (Subscriber Adds)", v: "The single most important number is net subscriber additions. Everything orbits this.", i: <FiUsers className="text-brand-500" />, badge: "Most Critical" },
                                { t: "Advertising Revenue Growth", v: "Ad-supported tier is growing 80-100% YoY. Upfront ad deals (May-Jun) act as catalysts.", i: <FiTrendingUp className="text-green-500" />, badge: "New Growth Driver" },
                                { t: "Major Content Releases & Events", v: "Highly anticipated sequels (Squid Game, Wednesday) or live sports (WWE, NFL, Boxing).", i: <FiVideo className="text-yellow-500" />, badge: "Spike Catalyst" },
                                { t: "Password Sharing Updates", v: "Market learned that crackdowns create forced conversions to paid tiers over time.", i: <FiAlertTriangle className="text-red-400" />, badge: "Volatility Hook" }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-5 border-white/5 bg-gray-950/40 flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {item.i}
                                    </div>
                                    <div className="flex-1 space-y-0.5">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">{item.t}</h5>
                                            <span className={`text-[8px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${item.badge === 'Most Critical' ? 'text-red-500 border-red-500/30' : 'text-brand-500 border-brand-500/30'}`}>{item.badge}</span>
                                        </div>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{item.v}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Subscriber Earnings Matrix:</h4>
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
                                            { s: "Subs beat by 3M+ AND revenue beat", m: "+12-16% 🚀", o: "Calls +200-350%" },
                                            { s: "Subs beat by 1-3M", m: "+6-10%", o: "Calls +80-150%" },
                                            { s: "Subs exactly meet estimate", m: "+2-4%", o: "Calls +20-50%" },
                                            { s: "Subs miss by 1-2M", m: "-6-10% 📉", o: "Puts +80-150%" },
                                            { s: "Subs miss badly AND guidance cut", m: "-12-16% 📉", o: "Puts +200-350%" }
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
                            <p className="text-red-500 text-[10px] font-black uppercase tracking-widest text-center">
                                ⚠️ RULE: NEVER hold NFLX options through earnings (unless straddling). IV drops 50-60% immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Trading Strategies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="4 Proven NFLX Strategies" align="center" className="mb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            t: "Strategy 1: Post-Earnings Momentum",
                            badge: "Best Strategy",
                            d: "When NFLX beats subscriber estimates by 2M+, the move sustains for 3-5 days as institutional buyers pile in. Wait 45 minutes after the opening bell for stabilization, then enter calls.",
                            e: "Q1 2024: 9.3M subs reported vs 4.8M estimate. Stock gaps +13.6%. Entry: $620 weekly call at $18.40 (10:15 AM). Continued higher for 4 days. Exit: $41.20 (+124%)."
                        },
                        {
                            t: "Strategy 2: Pre-Earnings IV Expansion",
                            badge: "Lower Risk Setup",
                            d: "NFLX Implied Volatility (IV) expands significantly 7-10 days prior to earnings. Buy ATM options 9 days early, let the IV expand, and SELL fully 1-2 days BEFORE the announcement.",
                            e: "Q3 2024: IV was 32%. Bought $680 call 9 days prior. IV rose to 58%, stock pushed up $18. Sold 1 day before earnings. Result: +75%. Zero earnings risk taken."
                        },
                        {
                            t: "Strategy 3: Content Catalyst Play",
                            badge: "News Speculation",
                            d: "Major NFLX content releases structure short-term subscriber speculation. Buy 2-3 week calls 3-5 days prior to a globally anticipated drop (like Squid Game/Stranger Things) or a massive Live Sports deal.",
                            e: "Look for strong app-download surges or viral social media heat as secondary confirmation. Exit within 5 days of the release regardless."
                        },
                        {
                            t: "Strategy 4: Ad-Tier 'Upfront' Season",
                            badge: "May-June Annual",
                            d: "May and June mark the TV advertising 'upfront' season where Netflix announces its secured massive ad deals. Buying calls 3-5 days before major announced presentations yields steady gains.",
                            e: "Target: +40-70% gains as Wall Street upgrades revenue-per-user estimates based purely on the ad-tier growth."
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

            {/* Risk Management */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <div className="space-y-12">
                        <SectionHeader label="Safety" title="NFLX Risk Strictures" align="left" className="mb-0" />
                        <div className="space-y-6">
                            <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                                <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-4 italic">Position Sizing: 1.5% MAXIMUM</h4>
                                <p className="text-gray-300 text-xs leading-relaxed uppercase tracking-wider font-bold mb-4">
                                    NFLX's massive 10-16% earnings swings make it slightly higher risk than MSFT/AAPL. Max 1.5% per trade.
                                </p>
                                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$15,000 Account:</span> 1 contract ($225 risk)
                                    </p>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$20,000 Account:</span> 1 contract comfortably
                                    </p>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$30,000 Account:</span> 1-2 contracts ($450 risk)
                                    </p>
                                </div>
                            </Card>
                            <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Stop-Loss: 33-38%</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    Use 33% for standard content catalyst setups and expand to 38% for high-IV earnings or sudden breakout plays where standard oscillation runs wider.
                                </p>
                            </Card>
                            <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Expiration Dates</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    At $600-$750 per share, weekly premiums are brutal. Prefer extending to 2-week or Monthly options to insulate the trade from catastrophic Theta (time decay).
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
                                        { t: "9:30-10:30 AM", b: "Wide opening swings", s: "AVOID ❌" },
                                        { t: "10:30 AM-12:00 PM", b: "Direction established", s: "Best Entry ✅", sc: "bg-brand-500/10" },
                                        { t: "12:00-2:00 PM", b: "Quiet consolidation", s: "Monitor" },
                                        { t: "2:00-3:30 PM", b: "Afternoon continuation", s: "Good Entries ✅" }
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
                            <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">Seasonal Playbook:</h5>
                            <div className="space-y-2">
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">May-Jun:</span> Ad Upfront Season (+Catalyst)</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Sep-Oct:</span> Content Season Begins</p>
                                <p className="text-brand-400 text-[10px] font-black uppercase tracking-widest"><span className="text-white">Best Quarter:</span> Q4 (Oct or Jan print) — driven by Holiday slates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Mistakes & Profile */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-12">
                        <SectionHeader label="Pitfalls" title="Common NFLX Mistakes" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "Buying Weeklies Pre-Earnings", d: "Thinking you'll hit a home run. Reality: Weekly options cost $1,500+. IV crush wipes 55% out immediately. Either do the pre-earnings IV expansion play or the post-earnings momentum play. " },
                                { t: "Trading With Too Little Capital", d: "Thinking '$8 is just $800.' Reality: $800 on a $10K account is an massive 8% risk. You need a minimum $15K baseline to size NFLX efficiently at 1.5%." },
                                { t: "Ignoring The Subscriber Metric", d: "Thinking revenue looked great so you expect a pop. Reality: Revenue doesn't command NFLX's movement anywhere near as forcefully as Net Sub Additions. Learn the estimate beforehand." },
                                { t: "Selling Content Pops Too Early", d: "Taking profits immediately. Reality: Post-earnings subscriber validation usually sparks a cascade of analyst upgrades pushing momentum over 3 to 5 full days." }
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
                        <SectionHeader label="Ideal Trader Profile" title="Who Should Trade NFLX" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-6">
                            <Card variant="glass" className="p-8 border-green-500/20 bg-green-500/[0.03]">
                                <h4 className="text-green-400 font-black uppercase tracking-widest text-xs mb-6 italic">NFLX is Right For You If:</h4>
                                <div className="space-y-3">
                                    {[
                                        "You have 6+ months of options exact experience",
                                        "You have a $15,000+ account base",
                                        "You are patient enough to wait for the specific earnings/content setups",
                                        "You want an earnings-driven stock with highly explosive characteristics"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <FiCheck className="text-green-500 shrink-0" />
                                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/[0.03]">
                                <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-6 italic">NFLX is NOT Right For You If:</h4>
                                <div className="space-y-3">
                                    {[
                                        "Beginner (options are far too expensive)",
                                        "Account under $12,000",
                                        "You want to trade daily (NFLX is heavily macro/earnings driven)",
                                        "You want affordable options (Use SPY or AAPL instead)"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <FiAlertTriangle className="text-red-500 shrink-0" />
                                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto pb-24">
                    <SectionHeader label="Knowledge Base" title={<>NFLX Options <span className="text-brand-500">FAQ</span></>} align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "How often does NFLX report earnings?", a: "Four times per year — generally mid-to-late January, April, July, and October. The Q4 report in January and Q3 report in October tend to bring the largest volatility swings because the Holiday and Fall slates drive the greatest volume of subscriber additions." },
                            { q: "What specific subscriber number do I watch?", a: "Net paid subscriber additions. The Wall Street estimate is published prior to earnings across networks like Yahoo Finance. Beating it by 2M+ causes aggressive bullish cascades." },
                            { q: "Why are NFLX options so radically expensive?", a: "Options track proportional percentage pricing to the underlying stock. A $700 stock will naturally carry options that are significantly more expensive than a $150 stock even at identical Implied Volatility levels. This restricts its viability below that $15K account threshold." },
                            { q: "What happens when password sharing halts again?", a: "Historically, when NFLX aggressively cracked down in 2023, the market initially panicked, fearing uninstalls. However, those users converted into paid accounts, launching Netflix from $280 to over $700+ within 18 months. Overreactions down on sharing crackdowns frequently translate into deep value buying moments." },
                            { q: "Is NFLX a solid stock for a beginner?", a: "No. The combination of highly expensive premiums (violating risk rules automatically for smaller portfolios) and massive 10-16% earnings volatility makes it entirely unsuitable. Learn your foundations in SPY and AAPL instead." }
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
                            { title: "Earnings Plays", path: "/options-earnings-plays-strategy" },
                            { title: "META Signals", path: "/meta-options-signals" },
                            { title: "Understanding IV", path: "/understanding-implied-volatility-options" },
                            { title: "When To Take Profits", path: "/when-to-take-profits-options" },
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "Options Cost Calculator", path: "/options-profit-calculator" },
                            { title: "AAPL Signals (Lower Cost)", path: "/aapl-options-signals" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "Get Access", path: "/free-trial" }
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
                    title="Trade NFLX Earnings Like a Pro"
                    subtitle={<>Stop guessing on earnings. Track the data and execute optimally with our:<br />✅ Subscriber Models ✅ Post-Earnings Breakouts ✅ Pre-Calculated IV Expansion Plans</>}
                />
            </div>
        </div>
    );
};

export default NflxOptionsStrategy;
