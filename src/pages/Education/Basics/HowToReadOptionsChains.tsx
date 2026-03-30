import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiLayout, FiSearch, FiMonitor, FiSmartphone, FiCheck, FiX, FiInfo, FiZap, FiTarget, FiActivity, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
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

const HowToReadOptionsChains = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>How to Read Options Chain: Complete Guide for Beginners</title>
                <meta name="description" content="Learn how to read options chains: understand bid/ask, strike prices, volume, open interest, Greeks, and how to select the right option. Step-by-step guide with examples." />
                <link rel="canonical" href="https://onlyoptions.us/how-to-read-options-chain" />
            </Helmet>

            {/* ── HERO ── */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8 text-center">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                        <FiLayout className="text-brand-500" /> Trading Dashboard
                    </span>
                    <SectionHeader
                        label="Options Basics"
                        title={<>How to Read an <span className="text-brand-500">Options Chain</span></>}
                        description="Complete Beginner's Guide to Options Chain Data"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        An options chain is the table that displays all available options for a stock. It shows strikes, premiums, volume, Greeks, and more. Understanding how to read this data is essential for making informed options trades.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        This guide breaks down every column, shows you what matters most, and teaches you how to quickly find the right option for your trade.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Left Side", value: "CALLS" },
                        { label: "Right Side", value: "PUTS" },
                        { label: "Center", value: "STRIKES" },
                        { label: "Metrics", value: "GREEKS" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-white font-black mb-1 text-2xl tracking-tight uppercase italic">{stat.value}</h4>
                            <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* ── WHAT IS AN OPTIONS CHAIN ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Definition</p>
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The Matrix Explained</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            An options chain (also called options table or options matrix) lists all available call and put options for a stock, organized by expiration date and strike price.
                        </p>

                        <div className="space-y-4">
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.2em]">Where to Find It</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Robinhood: Search stock → Tap 'Trade' → Select 'Options'",
                                    "Webull: Search stock → 'Option Chain' tab",
                                    "Thinkorswim: 'Trade' tab → Options chain auto-appears",
                                    "E*TRADE: Quotes → Options Chain",
                                    "Fidelity: Research → Options → Chains"
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                        <FiSearch className="text-brand-500 shrink-0" size={14} />
                                        <p className="text-gray-400 text-[10px] font-bold">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Card variant="institutional" className="p-8 border-brand-500/20 bg-brand-500/5 space-y-6">
                        <h3 className="text-xl font-black italic uppercase text-white tracking-tight text-center">Basic Structure</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="space-y-2 p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20">
                                <p className="text-white font-black uppercase italic tracking-tighter">CALLS</p>
                                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest leading-relaxed">LEFT SIDE (BULLISH)</p>
                            </div>
                            <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center">
                                <p className="text-brand-500 font-black uppercase italic tracking-tighter">STRIKES</p>
                                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest leading-relaxed">CENTER VERTICAL</p>
                            </div>
                            <div className="space-y-2 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                                <p className="text-white font-black uppercase italic tracking-tighter">PUTS</p>
                                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest leading-relaxed">RIGHT SIDE (BEARISH)</p>
                            </div>
                        </div>
                        <p className="text-center text-gray-500 text-[10px] italic leading-relaxed">
                            This layout remains consistent across almost all trading platforms.
                        </p>
                    </Card>
                </div>
            </StandardSection>

            {/* ── SAMPLE CHAIN ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Visual Example" title={<>Sample Chain — <span className="text-brand-500">SPY @ $575</span></>} align="center" className="mb-12" />
                <div className="max-w-5xl mx-auto space-y-4">
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="bg-brand-500/10 py-3 px-8 border-b border-brand-500/20 text-center">
                            <p className="text-brand-500 font-black uppercase tracking-[0.2em] text-[10px]">Expiration: March 7, 2026 (7 Days Out)</p>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead colSpan={4} className="text-center text-brand-500 border-r border-white/5">CALLS</TableHead>
                                    <TableHead className="text-center bg-white/5">STRIKE</TableHead>
                                    <TableHead colSpan={4} className="text-center text-red-400 border-l border-white/5">PUTS</TableHead>
                                </TableRow>
                                <TableRow>
                                    <TableHead>Bid</TableHead>
                                    <TableHead>Ask</TableHead>
                                    <TableHead>Last</TableHead>
                                    <TableHead className="border-r border-white/5">Vol</TableHead>
                                    <TableHead className="text-center bg-white/5">Price</TableHead>
                                    <TableHead className="border-l border-white/5 pl-4">Last</TableHead>
                                    <TableHead>Bid</TableHead>
                                    <TableHead>Ask</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { cBid: "9.10", cAsk: "9.30", cL: "9.20", cV: "8.4k", s: "570", pL: "0.42", pBid: "0.40", pAsk: "0.44", isATM: false },
                                    { cBid: "4.15", cAsk: "4.25", cL: "4.20", cV: "12.8k", s: "575", pL: "4.15", pBid: "4.10", pAsk: "4.20", isATM: true },
                                    { cBid: "1.75", cAsk: "1.85", cL: "1.80", cV: "5.6k", s: "580", pL: "9.15", pBid: "9.10", pAsk: "9.25", isATM: false },
                                    { cBid: "0.60", cAsk: "0.70", cL: "0.65", cV: "1.2k", s: "585", pL: "14.20", pBid: "14.10", pAsk: "14.30", isATM: false },
                                ].map((row, idx) => (
                                    <TableRow key={idx} className={row.isATM ? 'bg-brand-500/5' : ''}>
                                        <TableCell label="C-Bid" className="text-white font-bold text-xs">{row.cBid}</TableCell>
                                        <TableCell label="C-Ask" className="text-white font-bold text-xs">{row.cAsk}</TableCell>
                                        <TableCell label="C-Last" className="text-gray-400 text-xs italic">{row.cL}</TableCell>
                                        <TableCell label="C-Vol" className="text-brand-500 font-bold text-xs border-r border-white/5">{row.cV}</TableCell>
                                        <TableCell label="STRIKE" className={`text-center font-black ${row.isATM ? 'text-brand-500 bg-brand-500/10' : 'text-gray-300 bg-white/5 underline decoration-white/10 underline-offset-4'}`}>{row.s}</TableCell>
                                        <TableCell label="P-Last" className="text-gray-400 text-xs italic border-l border-white/5 pl-4">{row.pL}</TableCell>
                                        <TableCell label="P-Bid" className="text-white font-bold text-xs">{row.pBid}</TableCell>
                                        <TableCell label="P-Ask" className="text-white font-bold text-xs">{row.pAsk}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <p className="text-center text-gray-600 text-[10px] italic">ATM (At-The-Money) strike is usually highlighted at the center of the list.</p>
                </div>
            </StandardSection>

            {/* ── UNDERSTANDING COLUMNS ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Terminology" title="Understanding Each Column" align="center" className="mb-16" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            t: "Strike Price",
                            d: "The price at which you can buy (call) or sell (put) the stock. In center, organized vertically.",
                            icon: <FiTarget className="text-brand-500" />
                        },
                        {
                            t: "Bid Price",
                            d: "Highest price a buyer is willing to pay. This is what you receive if you SELL the option.",
                            icon: <FiTrendingUp className="text-green-500" />
                        },
                        {
                            t: "Ask Price",
                            d: "Lowest price a seller accepts. This is what you pay if you BUY the option.",
                            icon: <FiTrendingDown className="text-red-400" />
                        },
                        {
                            t: "Last Price",
                            d: "The stale price of the most recent trade. Often misleading — use mid-point of bid/ask instead.",
                            icon: <FiActivity className="text-gray-500" />
                        },
                        {
                            t: "Volume",
                            d: "Contracts traded TODAY. High volume (>1,000) means better liquidity and tighter spreads.",
                            icon: <FiZap className="text-brand-500" />
                        },
                        {
                            t: "Open Interest",
                            d: "Total open positions. Cumulative outstanding contracts that haven't been closed.",
                            icon: <FiInfo className="text-blue-400" />
                        }
                    ].map((col, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-white/[0.02] flex flex-col items-center text-center space-y-4">
                            <div className="p-4 bg-white/5 rounded-2xl shrink-0">{col.icon}</div>
                            <h4 className="text-white font-black italic uppercase tracking-widest text-sm">{col.t}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed italic">{col.d}</p>
                        </Card>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto mt-16 space-y-8">
                    <h3 className="text-xl font-black italic uppercase text-white tracking-tight border-b border-brand-500/20 pb-4">The Bid-Ask Spread</h3>
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Spread Range</TableHead>
                                    <TableHead className="text-brand-500">Quality</TableHead>
                                    <TableHead>Example</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { r: "$0.01 – $0.05", q: "Excellent (SPY, QQQ)", e: "$4.15 / $4.20", c: "text-green-500" },
                                    { r: "$0.10 – $0.20", q: "Good", e: "$8.10 / $8.30", c: "text-green-400" },
                                    { r: "$0.30 – $0.50", q: "Acceptable", e: "$12.00 / $12.50", c: "text-yellow-400" },
                                    { r: "$1.00+", q: "Poor (Avoid)", e: "$5.00 / $6.00", c: "text-red-400" },
                                ].map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell label="Spread" className="text-white font-bold text-xs">{row.r}</TableCell>
                                        <TableCell label="Quality" className={`font-black text-xs uppercase italic ${row.c}`}>{row.q}</TableCell>
                                        <TableCell label="Example" className="text-gray-500 text-xs font-bold">{row.e}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* ── GREEKS ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 text-center lg:text-left">
                        <div>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Predictive Metrics</p>
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Greeks in the Chain</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mx-auto lg:mx-0 max-w-lg">
                            Most brokers show Greeks (Delta, Theta, Vega) for each strike. These columns predict how the option premium will move relative to time and volatility.
                        </p>
                        <Link to="/options-greeks-explained" className="inline-block px-6 py-3 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-500 hover:bg-brand-500/5 transition-all italic">
                            Read Full Greeks Guide
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { g: "Delta (Δ)", d: "Price sensitivity per $1 move. Call Delta increases as stock rises.", c: "text-brand-500" },
                            { g: "Theta (Θ)", d: "Time decay per day. Negative value showing daily premium loss.", c: "text-orange-400" },
                            { g: "Vega (ν)", d: "Volatility sensitivity per 1% IV change. Higher at longer dates.", c: "text-blue-400" },
                            { g: "Gamma (Γ)", d: "Rate of Change of Delta. Measures acceleration of risk.", c: "text-red-400" }
                        ].map((item, i) => (
                            <Card key={i} variant="glass" className="p-6 border-white/5 bg-white/[0.02] space-y-2">
                                <h4 className={`font-black italic uppercase tracking-widest text-[11px] ${item.c}`}>{item.g}</h4>
                                <p className="text-gray-500 text-[10px] leading-relaxed italic">{item.d}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </StandardSection>

            {/* ── STEP BY STEP SELECTION ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Execution" title={<>How to Select the <span className="text-brand-500">Right Option</span></>} align="center" className="mb-16" />
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { num: "01", t: "Choose Expiration", d: "0DTE for advanced day trades, Weekly (7d) for swings, Monthly (30d) for trends." },
                            { num: "02", t: "Choose Strike", d: "ITM for probability, ATM for balance, OTM for high-risk leverage." },
                            { num: "03", t: "Check Liquidity", d: "Verify volume >500 and bid-ask spread <$0.20 for optimal fills." }
                        ].map((step, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-brand-500/20 transition-all">
                                <span className="absolute -top-4 -right-2 text-6xl font-black text-brand-500/5 group-hover:text-brand-500/10 transition-colors uppercase italic">{step.num}</span>
                                <h4 className="text-white font-black uppercase tracking-widest text-xs italic mb-4">{step.t}</h4>
                                <p className="text-gray-400 text-xs leading-relaxed italic">{step.d}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/10 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="space-y-2">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Step 04: Final Verification</h4>
                            <p className="text-gray-400 text-xs italic max-w-xl">Review Greeks (Delta/Theta) and calculate position size using the 2% rule before entering any trade ticket.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link to="/position-sizing-guide-options" className="px-5 py-2.5 rounded-xl bg-brand-500 text-white font-black text-[10px] uppercase tracking-widest hover:bg-brand-600 transition-all shadow-[0_0_20px_rgba(32,109,254,0.3)]">
                                Size Guide
                            </Link>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* ── COMMON MISTAKES ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Avoid These" title="Common Chain Reading Mistakes" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        {
                            t: "Using 'Last' Price Instead of Mid-Point",
                            d: "Last price may be minutes old. Always use (Bid + Ask) ÷ 2 for current price estimate."
                        },
                        {
                            t: "Ignoring Bid-Ask Spread",
                            d: "Wide spread ($1.00+) means bad fills. You lose 10–20% immediately on entry/exit."
                        },
                        {
                            t: "Trading Low-Volume Options",
                            d: "Volume <100 = stuck holding, can't exit. Always check volume before buying."
                        },
                        {
                            t: "Not Comparing Multiple Strikes",
                            d: "Look at 3–5 strikes. Compare Delta, Theta, and premium to find optimal risk/reward."
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

            {/* ── MOBILE VS DESKTOP ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader label="Workflow" title="Mobile vs Desktop Chains" align="center" className="mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card variant="glass" className="p-8 border-white/5 bg-white/[0.02] space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-xl"><FiSmartphone className="text-brand-500" size={18} /></div>
                                <h3 className="text-white font-black uppercase tracking-widest text-sm italic">Mobile Limitations</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Condensed view (often just Last, Bid, Ask)",
                                    "Greeks typically hidden behind tabs",
                                    "Difficult to compare strikes side-by-side",
                                    "Best for: Quick execution on known targets"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 text-xs font-bold items-start italic">
                                        <FiX className="text-red-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-8 border-brand-500/10 bg-brand-500/[0.02] space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-brand-500/10 rounded-xl"><FiMonitor className="text-brand-500" size={18} /></div>
                                <h3 className="text-white font-black uppercase tracking-widest text-sm italic">Desktop Advantages</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Complete view of all Greeks at once",
                                    "Compare multiple expirations side-by-side",
                                    "Advanced custom column layouts",
                                    "Best for: Deep analysis and research"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 text-xs font-bold items-start italic">
                                        <FiCheck className="text-green-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* ── FAQ ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto pb-10">
                    <SectionHeader label="Troubleshooting" title={<>Options Chain <span className="text-brand-500">FAQ</span></>} align="center" className="mb-16" />
                    <div className="space-y-4">
                        {[
                            {
                                q: "Why do some strikes have no volume?",
                                a: "Far out-of-the-money options rarely trade. Market makers create them but nobody buys. Avoid these strikes — they are illiquid and hard to exit."
                            },
                            {
                                q: "What if bid is $0 and ask is $0.05?",
                                a: "The option is nearly worthless. Bid of $0 means no buyers exist at all. Avoid unless you are selling (and even then, $5 profit per contract is rarely worth the margin risk)."
                            },
                            {
                                q: "Should I use limit or market orders?",
                                a: "ALWAYS use limit orders on options. Market orders receive terrible fills due to wide bid-ask spreads. Set your limit at the mid-point for the best possible execution."
                            },
                            {
                                q: "Do options chains update in real-time?",
                                a: "Yes, during US market hours (9:30 AM – 4:00 PM ET). Outside hours, the chain shows last closing prices. Greeks and premiums are frozen until the next market open."
                            },
                            {
                                q: "Why does my broker's chain look different?",
                                a: "All brokers provide the same underlying data, just with different UI designs. Learn your broker's specific layout — the core columns like Strike, Bid, Ask, and Volume are always present."
                            },
                            {
                                q: "Can I trade options on the chain directly?",
                                a: "Yes. In most modern platforms, clicking or tapping any bid/ask price on the chain automatically opens an order ticket for that specific option."
                            },
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links */}
                <div className="max-w-6xl mx-auto mt-20 pt-20 border-t border-white/5 text-center px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Master the Basics</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "Options 101", path: "/options-trading-101" },
                            { title: "Greeks Explained", path: "/options-greeks-explained" },
                            { title: "Premium Pricing", path: "/understanding-options-premium-pricing" },
                            { title: "Best Brokers", path: "/best-brokers-for-options-trading" },
                            { title: "Beginners Guide", path: "/options-signals-for-beginners" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
                            { title: "Trading Mistakes", path: "/common-options-trading-mistakes" },
                            { title: "Membership", path: "/membership" },
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
                    title="Master the Chain"
                    subtitle="Understanding options data is the first step toward profitable trading. Use our signals to see which strikes we are targeting in real-time."
                    className="bg-transparent"
                />
            </div>
        </div>
    );
};

export default HowToReadOptionsChains;
