import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiAlertTriangle, FiSearch, FiDatabase, FiVideo, FiActivity, FiZap } from 'react-icons/fi';
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

const GooglOptionsSignals = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>GOOGL Options Signals & Trading Guide | 71% Win Rate | OnlyOptions</title>
                <meta name="description" content="Trade GOOGL options with professional signals. 71.3% win rate, +76% average winner. Complete Google options strategy guide for earnings, AI plays, and cloud momentum trades." />
                <link rel="canonical" href="https://onlyoptions.us/googl-options-signals" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Stock-Specific Guide"
                    title={<>Trading <span className="text-brand-500">Google (GOOGL)</span> with Options</>}
                    description="The Search & Cloud Giant With AI at Its Core"
                    align="center"
                    className="mb-12"
                />

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Alphabet (GOOGL) is the world's dominant search company, controlling 90%+ of global search. With Google Cloud growing 28%+ annually and YouTube generating $35B+ in ad revenue, GOOGL is one of the most well-rounded mega-cap options plays available.
                    </p>
                </div>

                {/* Key Stats Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "71.3%" },
                        { label: "Avg Winner", value: "+76%" },
                        { label: "R/R Ratio", value: "2.5:1" },
                        { label: "Beta", value: "1.1" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* What Makes GOOGL Unique */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The Growth Engine</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Search Monopoly & Cloud Momentum</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Google Search is an unbreakable monopoly. However, Google Cloud is the growth engine. When Cloud beats expectations, the stock jumps 6-10%.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Why GOOGL Options Are Attractive:</h4>
                            <ul className="grid grid-cols-1 gap-3 list-none p-0">
                                {[
                                    "Lower volatility compared to META/NVDA",
                                    "Multiple growth drivers (Search, Cloud, YouTube, AI)",
                                    "Gemini AI integration adds exciting new upside catalysts",
                                    "Massive free cash flow drives stock buybacks"
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
                                        <TableHead>Segment</TableHead>
                                        <TableHead>Revenue</TableHead>
                                        <TableHead>Profit</TableHead>
                                        <TableHead className="text-brand-500">Growth Rate</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "Google Search", r: "57%", p: "62%", g: "8-12%/yr" },
                                        { s: "YouTube Ads", r: "10%", p: "9%", g: "10-15%/yr" },
                                        { s: "Google Cloud", r: "12%", p: "11%", g: "25-30%/yr 🔥" },
                                        { s: "Google Other", r: "10%", p: "8%", g: "5-8%/yr" },
                                        { s: "Other Bets", r: "1%", p: "-10%", g: "N/A" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Segment" className="text-white text-[11px] font-bold">{row.s}</TableCell>
                                            <TableCell label="Revenue" className="text-gray-400 text-[11px]">{row.r}</TableCell>
                                            <TableCell label="Profit" className="text-gray-400 text-[11px]">{row.p}</TableCell>
                                            <TableCell label="Growth Rate" className="text-brand-500 font-black text-[11px] italic">{row.g}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">GOOGL vs Competitors:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead className="text-brand-500">GOOGL</TableHead>
                                        <TableHead>META</TableHead>
                                        <TableHead>MSFT</TableHead>
                                        <TableHead>AAPL</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Market Cap", g: "$2.1T", m: "$1.4T", ms: "$3.2T", a: "$3.5T" },
                                        { f: "Beta", g: "1.1", m: "1.4", ms: "1.1", a: "1.2" },
                                        { f: "Earnings Move", g: "5-8%", m: "8-14%", ms: "3-6%", a: "3-6%" },
                                        { f: "Volatility (IV)", g: "22-35%", m: "30-55%", ms: "18-28%", a: "20-35%" },
                                        { f: "AI Exposure", g: "Very High", m: "Very High", ms: "Very High", a: "Moderate" },
                                        { f: "Risk Level", g: "Moderate ✅", m: "High ⚠️", ms: "Low-Mod ✅", a: "Low-Mod ✅" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="GOOGL" className="text-white font-bold text-xs italic">{row.g}</TableCell>
                                            <TableCell label="META" className="text-gray-400 text-xs">{row.m}</TableCell>
                                            <TableCell label="MSFT" className="text-gray-400 text-xs">{row.ms}</TableCell>
                                            <TableCell label="AAPL" className="text-gray-400 text-xs">{row.a}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="p-4 bg-brand-500/5 border border-brand-500/10 rounded-2xl mt-4">
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest leading-relaxed text-center">
                                At a 71.3% win rate, GOOGL is the second highest of all our strictly covered mega-cap stocks.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Performance Tracker */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-4 mb-20">
                    <SectionHeader label="Track Record" title="Our GOOGL Signals Performance" align="center" className="mb-0" />
                    <p className="text-center text-gray-400 text-sm italic uppercase tracking-widest">
                        Verified Data Period: January 2023 – February 2026
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                    {[
                        { l: "Win Rate", v: "71.3%", d: "vs. 45-55% Industry Avg" },
                        { l: "Avg Winner", v: "+76%", d: "vs. +35-50% Industry Avg" },
                        { l: "Risk/Reward", v: "2.5:1", d: "Excellent Entry Precision" },
                        { l: "Best Trade", v: "+192%", d: "Cloud Earnings Beat" },
                        { l: "Total Signals", v: "96", d: "High Sample Size" },
                        { l: "Avg Loser", v: "-31%", d: "Strict Stop-Loss Discipline" }
                    ].map((item, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 text-center">
                            <h5 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">{item.l}</h5>
                            <p className="text-brand-500 text-3xl font-black italic tracking-tighter mb-4">{item.v}</p>
                            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Catalysts */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Catalysts" title="What Moves GOOGL" align="left" className="mb-0" />
                        <div className="space-y-4">
                            {[
                                { t: "Quarterly Earnings (Cloud Growth)", v: "The market watches Cloud growth rate above everything else. >27% is strongly bullish.", i: <FiDatabase className="text-brand-500" />, badge: "Most Critical" },
                                { t: "Gemini AI Announcements", v: "Google I/O and Gemini updates. Stock swings 3-6% based on ChatGPT rivalry narrative.", i: <FiZap className="text-yellow-500" />, badge: "High Impact" },
                                { t: "DOJ Antitrust Cases", v: "Major risk factor (monopoly remedies). Each development creates significant volatility.", i: <FiAlertTriangle className="text-red-500" />, badge: "Ongoing Risk" },
                                { t: "YouTube Revenue Growth", v: "Ad revenue moving 10-15% annually. Each quarter moves the stock 1-3%.", i: <FiVideo className="text-red-400" />, badge: "Steady Driver" }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-5 border-white/5 bg-gray-950/40 flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {item.i}
                                    </div>
                                    <div className="flex-1 space-y-0.5">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">{item.t}</h5>
                                            <span className={`text-[8px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${item.badge === 'Most Critical' ? 'text-brand-500 border-brand-500/30' : item.badge === 'Ongoing Risk' ? 'text-red-500 border-red-500/30' : 'text-gray-400 border-gray-600'}`}>{item.badge}</span>
                                        </div>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{item.v}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Earnings Reaction Metrics:</h4>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Scenario</TableHead>
                                            <TableHead>Stock Move</TableHead>
                                            <TableHead className="text-brand-500">Options Impact</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { s: "Cloud beats + Search strong", m: "+7-10% 🚀", o: "Calls +100-180%" },
                                            { s: "Cloud beats + Search flat", m: "+4-6%", o: "Calls +60-90%" },
                                            { s: "Cloud misses (worst case)", m: "-6-9% 📉", o: "Puts +100-160%" },
                                            { s: "Mixed results", m: "+2-4%", o: "Calls +20-50%" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Scenario" className="text-gray-400 text-xs font-bold">{row.s}</TableCell>
                                                <TableCell label="Stock Move" className="text-white text-xs">{row.m}</TableCell>
                                                <TableCell label="Impact" className="text-brand-500 font-bold text-xs italic">{row.o}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Historical Earnings Schedule:</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { q: "Q1", d: "Late April" },
                                    { q: "Q2", d: "Late July" },
                                    { q: "Q3", d: "Late October" },
                                    { q: "Q4", d: "Late Jan/Early Feb" }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                                        <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest">{item.q}</p>
                                        <p className="text-white text-xs font-bold">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Trading Strategies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="4 Proven GOOGL Options Strategies" align="center" className="mb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            t: "Strategy 1: Cloud Earnings Momentum",
                            badge: "Best Strategy",
                            d: "When Google Cloud crushes expectations (>27% growth), institutional money drives a 3-5 day rally. Do not assume the move is over on Day 1. Wait 30 minutes post-open on the morning after earnings, then buy weekly calls.",
                            e: "Q2 2024: Cloud beats estimates at 29% growth. Stock gaps +7.8%. Buy $185 weekly call at $9.20. Hold for 2 days of momentum. Exit at $18.70 (+103%)."
                        },
                        {
                            t: "Strategy 2: Pre-Earnings IV Expansion",
                            badge: "Safer Alternative",
                            d: "Buy ATM calls or puts 7-10 trading days before the earnings date to capture the rising Implied Volatility (IV). ALWAYS sell 1-2 days before the actual earnings announcement to avoid IV crush.",
                            e: "Bought $175 call 9 days before Q4 Earnings for $5.80 (IV was 22%). IV rose to 38% over 8 days. Sold 1 day before earnings at $8.90 (+53%). No earnings risk taken."
                        },
                        {
                            t: "Strategy 3: AI Leadership Momentum",
                            badge: "News Catalyst",
                            d: "When GOOGL announces meaningful Gemini/AI developments (like Google I/O events) and the stock breaks above a recent high on strong volume, buy 2-week calls within the first 2 hours.",
                            e: "Target: +60-90% gains. Stop-Loss: 32%. Requires fast execution and buying strength on the actual headline rather than assuming it is 'priced in'."
                        },
                        {
                            t: "Strategy 4: DOJ Antitrust Dip Buyer",
                            badge: "Mean Reversion",
                            d: "The market historically overreacts to DOJ antitrust headlines. When a negative headline drops GOOGL -4% to -7%, wait 1-2 days for stabilization, then buy 3-4 week ATM calls for the inevitable recovery bounce.",
                            e: "Target: Recovery bounce + 3-5% continuation (+60-90% options gain). Historical context: Every major antitrust scare since 2020 has been a buying opportunity within 2-4 weeks."
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

            {/* Risk & Timing */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <div className="space-y-12">
                        <SectionHeader label="Safety" title="GOOGL Risk Management" align="left" className="mb-0" />
                        <div className="space-y-6">
                            <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                                <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-4 italic">Position Sizing: Standard 2%</h4>
                                <p className="text-gray-300 text-xs leading-relaxed uppercase tracking-wider font-bold mb-4">
                                    GOOGL's moderate 1.1 Beta means a full 2% position sizing is appropriate.
                                </p>
                                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$12,000 Account:</span> 1 contract (Minimum)
                                    </p>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$15,000 Account:</span> 1 contract (Comfortably)
                                    </p>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-white">$25,000 Account:</span> 1-2 contracts ($500 max risk)
                                    </p>
                                </div>
                            </Card>
                            <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Stop-Loss: 30-33%</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    Tighter stops work here (compared to META's 40%). Use 30% for standard setups and 33% buffer for post-earnings momentum.
                                </p>
                            </Card>
                            <Card variant="glass" className="p-6 border-red-500/20 bg-red-500/[0.03]">
                                <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-3 italic">NEVER Hold Through Earnings</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    IV crush hits GOOGL incredibly hard, dropping 45-55% immediately after the announcement. Exit 1 day prior.
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
                                        { t: "9:30-10:15 AM", b: "Opening volatility", s: "Avoid ❌" },
                                        { t: "10:15 AM-12:00 PM", b: "Trends establish", s: "Best Entry ✅", sc: "bg-brand-500/10" },
                                        { t: "12:00-1:30 PM", b: "Quiet consolidation", s: "Monitor" },
                                        { t: "1:30-3:30 PM", b: "Afternoon direction", s: "Good Entries ✅" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.sc || ""}>
                                            <TableCell label="Time" className="text-white text-xs font-black">{row.t}</TableCell>
                                            <TableCell label="Behavior" className="text-gray-500 text-[11px] uppercase font-bold">{row.b}</TableCell>
                                            <TableCell label="Strategy" className={`text-[10px] font-black uppercase tracking-widest italic ${row.s.includes('Avoid') ? 'text-red-500' : 'text-brand-500'}`}>{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>

                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                            <h5 className="text-brand-400 font-black uppercase tracking-widest text-[10px] italic">Seasonal Sweet Spots:</h5>
                            <div className="space-y-2">
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Jan-Feb:</span> Post-Q4 Earnings Momentum</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Mar-May:</span> Google I/O / AI Announcements</p>
                                <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Jun-Aug:</span> Summer slowdown (Reduce Activity)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Mistakes & Profile */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-12">
                        <SectionHeader label="Pitfalls" title="Common GOOGL Mistakes" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "Ignoring Google Cloud Numbers", d: "Thinking: 'Search is the business, I'll focus on that.' Reality: Cloud growth determines the earnings reaction. Know the Cloud estimate." },
                                { t: "Holding Through DOJ Rulings", d: "Thinking: 'It's just noise.' Reality: Major search monopoly rulings can crush the stock 8-12% in a day. Exit before known ruling dates." },
                                { t: "Underestimating AI Risks", d: "Thinking: 'AI can't hurt Search.' Reality: ChatGPT is an existential threat. A negative AI gap narrative means you must exit calls immediately." },
                                { t: "Trading the Summer Lull", d: "Thinking: 'Tech always moves.' Reality: GOOGL goes flat June-August and Theta kills options. Reduce trading heavily wait for Fall setups." }
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
                        <SectionHeader label="Ideal Trader Profile" title="Who Should Trade GOOGL" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-6">
                            <Card variant="glass" className="p-8 border-green-500/20 bg-green-500/[0.03]">
                                <h4 className="text-green-400 font-black uppercase tracking-widest text-xs mb-6 italic">GOOGL is Right For You If:</h4>
                                <div className="space-y-3">
                                    {[
                                        "You have 3-6+ months of options experience",
                                        "You have a $12,000+ account size",
                                        "You want moderate volatility with consistent returns",
                                        "You want more profit potential than AAPL with LESS risk than META"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <FiCheck className="text-green-500 shrink-0" />
                                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/[0.03]">
                                <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-6 italic">GOOGL is NOT Right For You If:</h4>
                                <div className="space-y-3">
                                    {[
                                        "Complete beginner (Use SPY/QQQ instead)",
                                        "Account under $10,000 (options are too expensive)",
                                        "Want very low-risk plays (Use AAPL)",
                                        "Expect massive +300% single-trade winners (moves are steadier)"
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
                    <SectionHeader label="Knowledge Base" title={<>GOOGL Options <span className="text-brand-500">FAQ</span></>} align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "What's the most important number in GOOGL earnings?", a: "Google Cloud revenue growth rate. The estimate is usually 26-30%. Beating it by 2%+ causes a strong bullish reaction. Missing it causes a significant drop." },
                            { q: "How does the DOJ antitrust case affect options?", a: "It creates periodic volatility. Major ruling dates are known in advance, so reduce exposure before them. Historically, post-ruling dips have presented excellent buying opportunities." },
                            { q: "Is Gemini AI a real threat to ChatGPT?", a: "Gemini is highly competitive, but ChatGPT still leads in mindshare. The more important question is whether AI chatbots hurt Google Search volume. You must monitor actual Search Revenue growth closely." },
                            { q: "How does GOOGL compare to MSFT for trading?", a: "GOOGL has slightly higher volatility and profit potential. MSFT has more consistent earnings reactions. Both are excellent for intermediate traders utilizing $12K+ accounts." },
                            { q: "Can I trade GOOGL with a $5,000 account?", a: "Not recommended. Weekly ATM options cost $800-$1,600. Taking one trade would heavily violate the 2% risk rule. Start with SPY or QQQ options until your account scales up." }
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
                            { title: "META Signals", path: "/meta-options-signals" },
                            { title: "MSFT Signals", path: "/msft-options-signals" },
                            { title: "AAPL Signals", path: "/aapl-options-signals" },
                            { title: "NVDA Signals", path: "/nvda-options-signals" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "Earnings Plays", path: "/options-earnings-plays-strategy" },
                            { title: "Understanding IV", path: "/understanding-implied-volatility-options" },
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "Get Access", path: "/free-trial" },
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
                    title="Trade GOOGL with OnlyOptions"
                    subtitle={<>Receive high-conviction GOOGL signals with:<br />✅ Strike Selection ✅ IV Verification ✅ Catalyst Analysis ✅ Pre-Calculated Exit Map</>}
                />
            </div>
        </div>
    );
};

export default GooglOptionsSignals;
