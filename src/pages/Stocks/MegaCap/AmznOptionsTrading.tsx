import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiAlertTriangle, FiZap, FiActivity, FiDatabase, FiShoppingCart } from 'react-icons/fi';
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

const AmznOptionsTrading = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>AMZN Options Signals: Complete Trading Guide | OnlyOptions</title>
                <meta name="description" content="Learn how to trade AMZN options with professional signals. Understand Amazon's AWS dominance, Prime Day catalysts, earnings volatility, and strategies for consistent profits." />
                <link rel="canonical" href="https://onlyoptions.us/amzn-options-signals" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Stock-Specific Guide"
                    title={<>Trading <span className="text-brand-500">Amazon (AMZN)</span> with Options</>}
                    description="The AWS Cloud Story with an E-commerce Bonus"
                    align="center"
                    className="mb-12"
                />

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Amazon (AMZN) trades on two narratives: AWS (cloud computing dominance) and e-commerce (retail). AMZN moves 5-10% on earnings, making it volatile enough for substantial profits but stable enough to manage risk. It is a premier options play for intermediate traders.
                    </p>
                </div>

                {/* Key Stats Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "67.2%" },
                        { label: "Avg Winner", value: "+95%" },
                        { label: "R/R Ratio", value: "2.8:1" },
                        { label: "Beta", value: "1.3" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* What Makes AMZN Unique */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The AWS-Driven Powerhouse</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Misunderstood Growth</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            AMZN is widely misunderstood. It is not "just" e-commerce — it is a cloud computing giant disguised as a retailer.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Key Characteristics:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                                {[
                                    "Market Cap: $2.1+ Trillion",
                                    "Price: $150-$220 per share",
                                    "Volume: 35-60M shares daily",
                                    "Options Vol: 500K-900K daily",
                                    "Beta: 1.3 (30% > S&P 500)",
                                    "Dividend: None (reinvests profits)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-start">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Revenue vs Profit Breakdown:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Segment</TableHead>
                                        <TableHead>Revenue %</TableHead>
                                        <TableHead className="text-brand-500">Operating Profit %</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "E-commerce (Retail)", r: "81%", p: "25%" },
                                        { s: "AWS (Cloud)", r: "16%", p: "62%" },
                                        { s: "Advertising", r: "3%", p: "13%" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Segment" className="text-white text-xs font-bold">{row.s}</TableCell>
                                            <TableCell label="Revenue" className="text-gray-400 text-xs">{row.r}</TableCell>
                                            <TableCell label="Profit" className="text-brand-500 font-bold text-xs italic">{row.p}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="p-4 bg-brand-500/5 border border-brand-500/10 rounded-2xl">
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest leading-relaxed text-center">
                                AWS generates <span className="text-white">62% of profit</span> from only 16% of revenue. The stock moves on AWS growth, not retail.
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Performance Tracker */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-4 mb-20">
                    <SectionHeader label="Track Record" title="Our AMZN Signals Performance" align="center" className="mb-0" />
                    <p className="text-center text-gray-400 text-sm italic uppercase tracking-widest">
                        Solid win rate with very high average winners. Higher volatility than AAPL/MSFT but manageable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                    {[
                        { l: "Win Rate", v: "67.2%", d: "Consistent intermediate play" },
                        { l: "Avg Winner", v: "+95%", d: "Higher than MSFT (+79%)" },
                        { l: "Risk/Reward", v: "2.8:1", d: "Excellent risk/reward profile" },
                        { l: "Best Trade", v: "+241%", d: "AWS earnings smash" },
                        { l: "Total Signals", v: "61", d: "3.3% of total signals" },
                        { l: "Avg Loser", v: "-34%", d: "Standard option stop-loss" }
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
                        <SectionHeader label="Catalysts" title="What Moves AMZN (5-10%)" align="left" className="mb-0" />
                        <div className="space-y-4">
                            {[
                                { t: "AWS Growth Rate", v: ">30% = Bullish | <20% = Bearish", i: <FiDatabase className="text-brand-400" />, badge: "Most Critical" },
                                { t: "Quarterly Earnings", v: "Jan, Apr, Jul, Oct. Volatile reactions.", i: <FiZap className="text-yellow-500" />, badge: "Primary" },
                                { t: "Prime Day Results", v: "Mid-July sales event (+3-5% impact)", i: <FiShoppingCart className="text-brand-500" />, badge: "Seasonal" }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-5 border-white/5 bg-gray-950/40 flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {item.i}
                                    </div>
                                    <div className="flex-1 space-y-0.5">
                                        <div className="flex items-center gap-3">
                                            <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">{item.t}</h5>
                                            <span className={`text-[8px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full ${item.badge === 'Most Critical' ? 'text-red-500 border-red-500/30' : 'text-brand-500 border-brand-500/30'}`}>{item.badge}</span>
                                        </div>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{item.v}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <SectionHeader label="Secondary" title="Smaller Catalysts (2-5%)" align="left" className="mb-0" />
                        <div className="space-y-3">
                            {[
                                "Holiday shopping quarter guidance (Oct earnings)",
                                "Advertising revenue growth (fastest growing segment)",
                                "International expansion news",
                                "Rivian stake performance (AMZN owns 18%)",
                                "Regulatory news (antitrust, labor issues)"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                        
                        <Card variant="glass" className="p-6 border-brand-500/20 bg-brand-500/5 mt-8">
                            <h5 className="text-brand-400 font-black uppercase tracking-widest text-[10px] mb-3 italic">Seasonal Patterns</h5>
                            <div className="space-y-2">
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Oct-Dec:</span> Holiday shopping anticipation</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Jan-Feb:</span> Holiday results + AWS guidance</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">July:</span> Prime Day momentum</p>
                                <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Mar-May:</span> Weakest period (post-holiday lull)</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Trading Strategies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="4 Reliable AMZN Strategies" align="center" className="mb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            t: "Strategy 1: AWS Earnings Momentum",
                            badge: "Post-Earnings Follow-Through",
                            d: "Trade AMZN earnings based strictly on AWS growth. If AWS growth beats expectations (e.g., 28%), the stock will gap up. Buy calls the next morning for a 3-5 day continuation.",
                            e: "Earnings: AWS hits 31%. AMZN gaps +8.3% to $195. Next morning buy $195 call for $7.20 → 5 days later: AMZN $206, exit at $14.80 (+106%)."
                        },
                        {
                            t: "Strategy 2: Pre-Earnings IV Expansion",
                            badge: "No Earnings Risk",
                            d: "AMZN IV consistently spikes 40-60% before earnings due to its history of large moves. Buy calls 7-10 days before and sell 1 day before the announcement.",
                            e: "Buy $185 call for $9.50 when IV=28% → 9 days later IV hits 46%, call worth $14.20 (+49%). Sell to close."
                        },
                        {
                            t: "Strategy 3: Prime Day Pop",
                            badge: "Event Catalyst",
                            d: "Mid-July Prime Day sales data creates short-term momentum. Wait for the event to end and initial positive sales data to be released (2-3 days later), then buy calls for a 5-7 day hold.",
                            e: "Prime Day ends. Strong sales reported → AMZN rallies +4% to $182. Buy $185 call for $5.40 → 1 week later exit at $9.60 (+78%)."
                        },
                        {
                            t: "Strategy 4: Holiday Quarter Setup",
                            badge: "Swing Trade",
                            d: "October earnings include critical holiday quarter guidance. If guidance is strong, buy calls for a 2-8 week Nov-Dec hold to ride the holiday retail anticipation.",
                            e: "Oct 25: Strong holiday guidance, stock $180. Buy $185 call expiring Dec 20 for $8.50 → Dec 15: AMZN hits $202, exit at $19.40 (+128%)."
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
                        <SectionHeader label="Safety" title="AMZN Risk Management" align="left" className="mb-0" />
                        <div className="space-y-6">
                            <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                                <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-4 italic">The 1.5-2% Rule:</h4>
                                <p className="text-gray-300 text-xs leading-relaxed uppercase tracking-wider font-bold mb-4">
                                    AMZN is more volatile than AAPL/MSFT. Use <span className="text-white">1.5% to 2% max risk</span> depending on your account size.
                                </p>
                                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        $10K Account: 1.5% risk = $150 max loss.
                                    </p>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        AMZN $185 call for $9, stop at $6 = $300 risk/contract.
                                    </p>
                                    <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                        Solution: $12K+ account recommended for ATM contracts, or use tight OTM strikes.
                                    </p>
                                </div>
                            </Card>
                            <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Stop-Loss: 33-35%</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    Wider than AAPL (30%) due to AWS guidance sensitivity and its higher 1.3 beta.
                                </p>
                            </Card>
                            <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Max 2 Positions</h4>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                                    AMZN has high correlation with QQQ. Limit to 2 concurrent options positions to avoid tech-heavy drawdowns.
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
                                        { t: "9:30-10:00 AM", b: "Opening volatility", s: "Wait 30 Min" },
                                        { t: "10:00 AM-12:00 PM", b: "Stable trends", s: "Best Entry", sc: "bg-brand-500/10" },
                                        { t: "2:00-3:30 PM", b: "Afternoon momentum", s: "Good for Entries" }
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
                    </div>
                </div>
            </StandardSection>

            {/* Mistakes & Profile */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-12">
                        <SectionHeader label="Pitfalls" title="Common AMZN Mistakes" align="left" className="mb-0" />
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "Focusing on Retail Instead of AWS", d: "Trading AMZN on holiday sales data. AWS growth determines stock direction, not retail. Always check AWS metrics first." },
                                { t: "Expecting Predictable Earnings", d: "Treating AMZN like AAPL. AMZN swings -8% to +12% on earnings. It has higher volatility than its mega-cap peers." },
                                { t: "Ignoring Margin Pressure", d: "E-commerce has thin margins (3-5%). AWS has fat margins (30%+). Margin compression in retail is bearish even if revenue beats estimates." },
                                { t: "Over-Trading Prime Day", d: "Prime Day is a 2-day event. The immediate impact is small (2-3% typical). Not worth aggressive positioning. Better for small swing trades." }
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
                        <SectionHeader label="Ideal Trader Profile" title="Who Should Trade AMZN" align="left" className="mb-0" />
                        <Card variant="glass" className="p-8 border-green-500/20 bg-green-500/[0.03]">
                            <h4 className="text-green-400 font-black uppercase tracking-widest text-xs mb-6 italic">AMZN is Best For:</h4>
                            <div className="space-y-3">
                                {[
                                    "Intermediate traders (6+ months experience)",
                                    "$12,000+ accounts",
                                    "Traders who understand the cloud computing sector",
                                    "Those who can handle 5-10% earnings swings",
                                    "Traders wanting higher returns than AAPL/MSFT"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <FiCheck className="text-green-500 shrink-0" />
                                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-6 italic">AMZN vs MSFT - Key Differences</h4>
                            <div className="space-y-4">
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Trade MSFT if:</span> Want Azure + enterprise stability with lower volatility.</p>
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"><span className="text-white">Trade AMZN if:</span> Want AWS + e-commerce diversification, slightly higher volatility.</p>
                                <p className="text-brand-400 text-[10px] font-bold uppercase tracking-widest pt-4 border-t border-brand-500/10">Both excellent. AMZN offers 15-20% higher returns with 20-30% more volatility.</p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto pb-24">
                    <SectionHeader label="Knowledge Base" title={<>AMZN Trading <span className="text-brand-500">FAQ</span></>} align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "Is AMZN more volatile than AAPL?", a: "Yes. Beta 1.3 vs AAPL 1.2. Earnings moves 5-10% vs AAPL 3-6%. AWS growth creates bigger swings. It requires wider stops (35% vs 30%) and slightly smaller position sizes." },
                            { q: "Why does AMZN trade on AWS instead of retail?", a: "AWS generates 62% of operating profit despite being only 16% of revenue. Retail profit margins are 3-5%, while AWS margins are 30%+. The stock is a cloud computing play disguised as e-commerce. The market values AWS at $1T+, and retail at $500B." },
                            { q: "Should I trade AMZN during Prime Day?", a: "Yes, but conservatively. Prime Day creates 2-4% moves, not 10%+ moves. It is good for small swing trades (1-2 contracts) but not aggressive positioning. Wait for the sales data release, and trade the confirmation." },
                            { q: "Can beginners trade AMZN?", a: "Not recommended. Start with AAPL or MSFT first. AMZN earnings volatility (5-10%) punishes mistakes. After 6+ months of being profitable on stable stocks, then add AMZN. Its 1.3 beta requires experience managing whipsaws." },
                            { q: "How much capital is needed for AMZN options?", a: "$12,000 minimum. Weekly ATM options cost $700-$1,200. With the 2% rule ($240 risk on $12K), you can trade 1 contract. If you have a smaller account, use OTM strikes ($400-$600) or skip AMZN until your account grows." },
                            { q: "Does AMZN follow QQQ?", a: "Closely. If QQQ is down -2%, AMZN is typically down -2.5%. Both are tech with similar beta. However, AWS-specific news moves AMZN independently. Strong AWS results mean AMZN will be up while QQQ is flat." }
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
                            { title: "MSFT Signals", path: "/msft-options-strategy" },
                            { title: "AAPL Signals", path: "/aapl-options-signals" },
                            { title: "NVDA Signals", path: "/nvda-options-signals" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "QQQ Signals", path: "/qqq-options-signals" },
                            { title: "Earnings Plays", path: "/options-earnings-plays-strategy" },
                            { title: "Understanding IV", path: "/understanding-implied-volatility-options" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
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
                    title="Ride AWS Growth with OnlyOptions"
                    subtitle={<>Receive high-conviction AMZN signals with:<br />✅ Strike Selection ✅ IV Verification ✅ Catalyst Analysis ✅ Pre-Calculated Exit Map</>}
                />
            </div>
        </div>
    );
};

export default AmznOptionsTrading;
