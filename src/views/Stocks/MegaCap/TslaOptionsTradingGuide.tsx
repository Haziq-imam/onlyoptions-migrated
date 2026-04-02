import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiAlertTriangle, FiZap, FiShield, FiActivity, FiTrendingDown, FiAlertCircle } from 'react-icons/fi';
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

const TslaOptionsTradingGuide = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>TSLA Options Signals: Complete Trading Guide | OnlyOptions</title>
                <meta name="description" content="Learn how to trade TSLA options with professional signals. Understand TSLA volatility, Elon Musk catalysts, best strategies, and why TSLA offers explosive but risky opportunities." />
                <link rel="canonical" href="https://onlyoptions.us/tsla-options-signals" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Stock-Specific Guide"
                    title={<>Trading <span className="text-brand-500">Tesla (TSLA)</span> with Options</>}
                    description="⚠️ Highest Risk, Highest Reward — Advanced Traders Only"
                    align="center"
                    className="mb-12"
                />

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Tesla (TSLA) is not for the faint of heart. It moves 5-20% on earnings, Elon tweets, delivery numbers, and sentiment shifts. TSLA options can return +200-500% overnight — or lose 80% just as fast. This is advanced-level options trading.
                    </p>
                </div>

                {/* Key Stats Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "62.9%" },
                        { label: "Avg Winner", value: "+128%" },
                        { label: "R/R Ratio", value: "3.0:1" },
                        { label: "Beta", value: "2.1" },
                        { label: "Risk Level", value: "EXTREME" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className={`font-black mb-1 text-2xl tracking-tight ${stat.label === 'Risk Level' ? 'text-red-500' : 'text-brand-500'}`}>{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* What Makes TSLA Unique */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The Elon Effect</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Cult Stock, Not Normal Stock</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            TSLA is not a normal stock. It is a cult stock driven by Elon Musk, sentiment, and momentum. Fundamentals matter less than narrative. This creates both explosive opportunity and extreme danger.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Key Characteristics:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                                {[
                                    "Price: $150-$400 per share",
                                    "Daily Volume: 100-200M shares",
                                    "Options Volume: 800K-1.5M daily",
                                    "Beta: 2.1 (110% more volatile than S&P)",
                                    "Short Interest: 15-25% (squeeze risk)",
                                    "Predictability: Very Low"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-center">
                                        <FiCheck className="text-brand-500 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">TSLA vs NVDA vs SPY:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead className="text-red-500">TSLA</TableHead>
                                        <TableHead>NVDA</TableHead>
                                        <TableHead>SPY</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Daily Move", t: "3-8%", n: "2-5%", s: "0.5-1.5%" },
                                        { f: "Earnings Move", t: "10-20%", n: "8-15%", s: "1-3%" },
                                        { f: "Implied Vol", t: "50-100%", n: "45-80%", s: "12-25%" },
                                        { f: "Predictability", t: "Very Low", n: "Moderate", s: "High" },
                                        { f: "Profit Potential", t: "200-500%", n: "100-300%", s: "50-100%" },
                                        { f: "Risk Level", t: "EXTREME", n: "Very High", s: "Moderate" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="TSLA" className="text-white font-bold text-xs italic">{row.t}</TableCell>
                                            <TableCell label="NVDA" className="text-gray-400 text-xs">{row.n}</TableCell>
                                            <TableCell label="SPY" className="text-gray-400 text-xs">{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl">
                            <p className="text-red-400 text-[10px] font-black uppercase tracking-widest leading-relaxed text-center">
                                ⚠️ TSLA is the most volatile major stock. Higher profits possible, but losses just as extreme.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Performance Tracker */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-4 mb-20">
                    <SectionHeader label="Track Record" title="Our TSLA Signals Performance" align="center" className="mb-0" />
                    <p className="text-center text-gray-400 text-sm italic uppercase tracking-widest">
                        Lowest win rate among major tickers — but highest average winner. Feast or famine trading.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                    {[
                        { l: "Win Rate", v: "62.9%", d: "Lowest — extreme unpredictability" },
                        { l: "Avg Winner", v: "+128%", d: "Highest of all tickers" },
                        { l: "Risk/Reward", v: "3.0:1", d: "High conviction setups only" },
                        { l: "Best Trade", v: "+423%", d: "Delivery beat momentum play" },
                        { l: "Total Signals", v: "89", d: "4.8% of all signals (selective)" },
                        { l: "Avg Loser", v: "-42%", d: "Wide stops required for volatility" }
                    ].map((item, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 text-center">
                            <h5 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">{item.l}</h5>
                            <p className="text-brand-500 text-3xl font-black italic tracking-tighter mb-4">{item.v}</p>
                            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Catalysts — The Big Movers */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Catalysts" title="What Moves TSLA (10-20%)" align="left" className="mb-0" />
                        <div className="space-y-4">
                            {[
                                { t: "Quarterly Earnings & Deliveries", v: "Miss by 5%? Stock -12%. Beat by 5%? +15%.", i: <FiZap className="text-yellow-500" />, badge: "Primary" },
                                { t: "Elon Musk Tweets / Statements", v: "3-8% instant moves. Product news, FSD, politics.", i: <FiAlertCircle className="text-red-500" />, badge: "Unpredictable" },
                                { t: "Product Unveilings", v: "Cybertruck, Roadster, Model 2, Robotaxi events.", i: <FiActivity className="text-brand-500" />, badge: "Primary" },
                                { t: "Short Squeeze Events", v: "15-25% short interest. Rallies can hit +20-40%.", i: <FiZap className="text-brand-400" />, badge: "Explosive" }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-5 border-white/5 bg-gray-950/40 flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {item.i}
                                    </div>
                                    <div className="flex-1 space-y-0.5">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">{item.t}</h5>
                                            <span className={`text-[8px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${item.badge === 'Unpredictable' ? 'text-red-500 border-red-500/30' : item.badge === 'Explosive' ? 'text-yellow-500 border-yellow-500/30' : 'text-brand-500 border-brand-500/30'}`}>{item.badge}</span>
                                        </div>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{item.v}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <SectionHeader label="Secondary" title="Smaller Catalysts (3-8%)" align="left" className="mb-0" />
                        <div className="space-y-3">
                            {[
                                "Analyst upgrades/downgrades (bearish PT cuts hit hardest)",
                                "Factory production data (Shanghai, Texas Gigafactory)",
                                "Competition news (BYD, Rivian stealing market share)",
                                "EV tax credit policy changes",
                                "Autonomous driving regulatory news"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>
                        <Card variant="glass" className="p-6 border-yellow-500/20 bg-yellow-500/[0.03]">
                            <h5 className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-3 italic">The Short Squeeze Factor</h5>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                TSLA 15-25% short interest is very high. When shorts get squeezed, TSLA can rally 20-40% in weeks. July 2023: TSLA $250 → January 2024: $380 (+52%) on short squeeze + delivery beat.
                            </p>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Trading Strategies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="4 TSLA Strategies for Experienced Traders" align="center" className="mb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            t: "Strategy 1: Earnings Straddle",
                            badge: "High Risk",
                            badgeColor: "text-red-500 border-red-500/30",
                            d: "Buy ATM call + ATM put the day before earnings. Exit within 1 hour of announcement. Requires 12%+ move to overcome IV crush. Target +100-200%.",
                            e: "TSLA at $300. Buy $300 call ($22) + $300 put ($20) = $42 cost. Requires 15%+ move ($345+) for meaningful profit. Very risky — only for large accounts."
                        },
                        {
                            t: "Strategy 2: Post-Earnings Momentum",
                            badge: "Safer",
                            badgeColor: "text-brand-500 border-brand-500/30",
                            d: "Wait for earnings gap (+8%+). If holding gains after 1-2 hours, buy calls for 3-5 day momentum continuation. TSLA trends hard post-earnings.",
                            e: "Earnings: TSLA $300 → $330 (+10%). Next morning at $328 → Buy $330 call for $12 → 5 days later: TSLA $355, exit at $27 (+125%)."
                        },
                        {
                            t: "Strategy 3: Delivery Number Pop",
                            badge: "Catalyst",
                            badgeColor: "text-brand-500 border-brand-500/30",
                            d: "First week of quarter TSLA announces deliveries (7:00 AM ET). If beat by 3%+, buy calls at open. Hold 1-3 days for continuation.",
                            e: "Jan 2: Deliveries beat by 4.5%. TSLA opens $280 → $295 (+5.4%). Buy $300 call for $8 → Jan 5: TSLA $310, exit at $15 (+88%)."
                        },
                        {
                            t: "Strategy 4: Mean Reversion After Panic",
                            badge: "Contrarian",
                            badgeColor: "text-yellow-500 border-yellow-500/30",
                            d: "TSLA drops -12%+ in a single day on sentiment (not fundamental change). Buy 2-week calls for recovery. Market consistently overreacts on TSLA.",
                            e: "Analyst downgrade: TSLA $320 → $280 (-12.5%) in one day. Buy $285 call for $9 → One week later: TSLA $305, exit at $22 (+144%)."
                        }
                    ].map((strategy, i) => (
                        <Card key={i} variant="glass" className="p-10 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-white font-black uppercase tracking-widest text-sm italic">{strategy.t}</h4>
                                    <span className={`text-[9px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full shrink-0 ml-4 ${strategy.badgeColor}`}>{strategy.badge}</span>
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

            {/* Risk Management — Critical */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="⚠️ Critical" title="TSLA Risk Management" align="center" className="mb-6" />
                <p className="text-center text-red-400 text-sm font-bold uppercase tracking-widest mb-20">
                    TSLA requires stricter risk management than any other stock
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/[0.03]">
                        <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-4 italic">The 1% Rule (Not 2%)</h4>
                        <p className="text-gray-300 text-xs leading-relaxed uppercase tracking-wider font-bold mb-6">
                            Use <span className="text-white">1% max risk</span> on TSLA (not standard 2%). Extreme volatility and wide stops require smaller position sizes.
                        </p>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                $10,000 account → 1% = $100 max loss
                            </p>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                TSLA $300 call for $12, stop at $7 (-42%) = $500 risk per contract
                            </p>
                            <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                Cannot even trade 1 contract at 1% rule with $10K. Need OTM options or $20K+ account.
                            </p>
                        </div>
                    </Card>

                    <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/[0.03]">
                        <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-4 italic">Stop-Loss: 40-45% (Very Wide)</h4>
                        <p className="text-gray-300 text-xs leading-relaxed uppercase tracking-wider font-bold mb-6">
                            TSLA whipsaws violently. Standard 30% stops get hit constantly on normal noise. <span className="text-white">40-45% stops are required</span> to survive intraday swings.
                        </p>
                        <div className="space-y-3">
                            <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Example: Entry $12 → Stop $6.60 (-45%)</p>
                            </div>
                        </div>
                    </Card>

                    <Card variant="glass" className="p-6 border-yellow-500/20 bg-yellow-500/[0.03]">
                        <h4 className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-3 italic">Maximum 1 Position at a Time</h4>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                            Do NOT hold 2-3 TSLA positions simultaneously. Too much correlated risk. One TSLA position maximum — always.
                        </p>
                    </Card>

                    <Card variant="glass" className="p-6 border-yellow-500/20 bg-yellow-500/[0.03]">
                        <h4 className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-3 italic">Never Hold Through Weekend</h4>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                            Elon tweets on weekends. Stock gaps Monday morning. Close ALL TSLA positions by Friday 3:30 PM. No exceptions.
                        </p>
                    </Card>
                </div>
            </StandardSection>

            {/* Timing & Common Mistakes */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-12">
                        <SectionHeader label="Timing" title="Intraday Behavior" align="left" className="mb-0" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableBody>
                                    {[
                                        { t: "9:30-11:00 AM", b: "Extreme volatility ($30-50 swings)", s: "AVOID", sc: "bg-red-500/5" },
                                        { t: "11:00 AM-1:00 PM", b: "Somewhat stabilizes", s: "Cautious Entry" },
                                        { t: "1:00-3:00 PM", b: "Afternoon trends develop", s: "Best Window", sc: "bg-brand-500/10" },
                                        { t: "3:00-4:00 PM", b: "Wild swings again", s: "Close Positions", sc: "bg-red-500/5" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.sc || ""}>
                                            <TableCell label="Time" className="text-white text-xs font-black">{row.t}</TableCell>
                                            <TableCell label="Behavior" className="text-gray-500 text-[11px] uppercase font-bold">{row.b}</TableCell>
                                            <TableCell label="Strategy" className={`text-[10px] font-black uppercase tracking-widest italic ${row.s === 'AVOID' || row.s === 'Close Positions' ? 'text-red-400' : 'text-brand-500'}`}>{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="space-y-4">
                            <h5 className="text-white font-black uppercase tracking-widest text-xs italic">Days to AVOID:</h5>
                            {[
                                "Mondays (Elon weekend tweet risk)",
                                "Days before long weekends (gap risk)",
                                "Low-volume days (wider spreads, poor fills)"
                            ].map((d, i) => (
                                <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-red-500/[0.02] border border-red-500/10">
                                    <FiAlertTriangle className="text-red-500 shrink-0 w-3 h-3" />
                                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{d}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <SectionHeader label="Pitfalls" title="Common TSLA Mistakes" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "Using 2% Risk on TSLA", d: "Applying SPY-level risk to TSLA. One bad trade = -$400 instead of -$100. Always use 1%." },
                                { t: "Holding Through Elon Events", d: "Elon testifies in court, gives interview, etc. TSLA moves 5-10% on his words. Exit before these events." },
                                { t: "Buying Weeklies >7 Days Out", d: "TSLA theta too fast, sentiment changes daily. Stick to 3-7 day expiration maximum." },
                                { t: "Fighting the Trend", d: "TSLA in downtrend, but you keep buying calls because 'it is cheap.' Trend continues down -30%. Never fight TSLA momentum." },
                                { t: "Assuming Fundamentals Matter", d: "P/E ratio says overvalued? Does not matter. TSLA trades on narrative, not fundamentals. Sentiment is king." }
                            ].map((m, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-red-500/[0.02] border border-red-500/10">
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

                {/* Who Should Trade TSLA */}
                <div className="max-w-4xl mx-auto mb-32">
                    <SectionHeader label="Trader Profile" title="Who Should (And Should NOT) Trade TSLA" align="center" className="mb-16" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card variant="glass" className="p-8 border-green-500/20 bg-green-500/[0.03]">
                            <h4 className="text-green-400 font-black uppercase tracking-widest text-xs mb-6 italic">You SHOULD Trade TSLA If:</h4>
                            <div className="space-y-3">
                                {[
                                    "6+ months profitable options experience",
                                    "$15,000+ account size",
                                    "Can handle extreme volatility without panic",
                                    "Understand this is speculation, not investing",
                                    "Follow Elon / Tesla news daily"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <FiCheck className="text-green-500 shrink-0" />
                                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/[0.03]">
                            <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-6 italic">You Should NOT Trade TSLA If:</h4>
                            <div className="space-y-3">
                                {[
                                    "Beginner (<6 months experience)",
                                    "Small account (<$10,000)",
                                    "Cannot handle -50% losses psychologically",
                                    "Looking for \"safe\" or predictable trades",
                                    "Do not actively follow Tesla news"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <FiAlertTriangle className="text-red-500 shrink-0" />
                                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                    <div className="mt-8 p-6 bg-brand-500/5 border border-brand-500/10 rounded-2xl text-center">
                        <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                            OnlyOptions Approach: We send TSLA signals only on high-conviction setups (earnings, deliveries, major catalysts). This keeps TSLA at 5% of total signals. Quality over quantity.
                        </p>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto pb-24">
                    <SectionHeader label="Knowledge Base" title={<>TSLA Trading <span className="text-brand-500">FAQ</span></>} align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "Why is TSLA win rate so low (62.9%)?", a: "TSLA is unpredictable. Elon tweets, sentiment shifts, short squeezes create random moves unrelated to technicals. Our 70% win rate on SPY drops to 63% on TSLA despite the same analysis quality. It is the nature of the stock." },
                            { q: "Can beginners trade TSLA options?", a: "No. Start with SPY. Then QQQ. Then AAPL or NVDA. After 6-12 months of consistent profitability, try TSLA. TSLA will destroy beginner accounts in weeks." },
                            { q: "Why does TSLA move so much on non-news?", a: "Retail traders love TSLA. High short interest. Cult following. Low float relative to market cap. Options market makers hedging creates gamma squeezes. All combine for irrational moves." },
                            { q: "Should I hold TSLA options through earnings?", a: "Only if using straddles and you can afford 100% loss. Single-leg calls/puts through TSLA earnings is gambling. IV crush from 90% → 45% destroys value even if directionally correct." },
                            { q: "Is TSLA correlated with tech stocks or independent?", a: "Loosely correlated with QQQ but exaggerates moves 2-3x. QQQ down -1%, TSLA down -3%. But Elon-specific news moves TSLA independently of the entire market." },
                            { q: "What is the biggest risk with TSLA options?", a: "Gap risk. TSLA can gap 8-12% overnight on an Elon tweet, analyst note, or delivery miss. Your stop-loss never triggers. You wake up down -60%. This is why 1% position sizing is critical." }
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
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "QQQ Signals", path: "/qqq-options-signals" },
                            { title: "Earnings Plays", path: "/options-earnings-plays-strategy" },
                            { title: "Managing Losses", path: "/managing-losing-options-trades" },
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
                            { title: "Common Mistakes", path: "/common-options-trading-mistakes" },
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
                    title="Trade TSLA with Confidence — OnlyOptions"
                    subtitle={<>Receive high-conviction TSLA signals with:<br />✅ Strike Selection ✅ IV Verification ✅ Catalyst Analysis ✅ Pre-Calculated Exit Map</>}
                />
            </div>
        </div>
    );
};

export default TslaOptionsTradingGuide;
