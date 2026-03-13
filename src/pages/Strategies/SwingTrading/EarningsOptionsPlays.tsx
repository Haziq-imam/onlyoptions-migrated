import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap, FiShield, FiTrendingDown, FiClock, FiDollarSign, FiPercent, FiCalendar, FiSearch, FiLayers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../components/ui/Card/Card';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/Table/Table';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white uppercase tracking-wider text-sm">
                {question}
                <span className="text-brand-500 transition-transform group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
            </summary>
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                {answer}
            </div>
        </details>
    );
};

const EarningsOptionsPlays = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Earnings Trading Options Strategy Guide | Complete 2026 Guide | OnlyOptions</title>
                <meta name="description" content="Master earnings season options trading. Pre-earnings IV plays, post-earnings momentum, straddles, and IV crush avoidance. Real examples with 68% win rate on earnings trades." />
                <link rel="canonical" href="https://onlyoptions.us/strategies/earnings-trading" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Master Strategy Guide"
                    title={<>Earnings Trading <span className="text-brand-500">Strategy</span> Guide</>}
                    description="The Most Powerful Recurring Catalyst in Options"
                    align="center"
                    className="mb-12"
                />

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Every public company reports earnings 4 times per year — creating 4 guaranteed volatility events where stocks move 3-20% in a single day. For options traders, earnings season is the most opportunity-rich period of the year. Master earnings trading and you have 4 explosive profit windows every quarter.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
                    <div className="space-y-8">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Earnings Season Calendar:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Season</TableHead>
                                        <TableHead>Months</TableHead>
                                        <TableHead>Key Reporters</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "Q1 Earnings", m: "Mid-April – Mid-May", k: "Banks first (JPM, GS), then Tech" },
                                        { s: "Q2 Earnings", m: "Mid-July – Mid-August", k: "Same order" },
                                        { s: "Q3 Earnings", m: "Mid-October – Mid-Nov", k: "Most volatile season", sc: "bg-brand-500/10" },
                                        { s: "Q4 Earnings", m: "Mid-January – Mid-Feb", k: "Year-end guidance focus" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.sc || ""}>
                                            <TableCell label="Season" className="text-white text-xs font-bold">{row.s}</TableCell>
                                            <TableCell label="Months" className="text-brand-500 text-xs font-bold italic">{row.m}</TableCell>
                                            <TableCell label="Key" className="text-gray-400 text-xs">{row.k}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest italic text-center">
                            Q3 earnings (October) is historically the most volatile and profitable season for options traders.
                         </p>
                    </div>
                    <div className="flex flex-col justify-center h-full">
                         <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 hover:border-brand-500/40 transition-all">
                             <div className="flex gap-6 items-start">
                                 <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0 border border-brand-500/20">
                                     <FiPercent className="text-brand-500 w-6 h-6" />
                                 </div>
                                 <div className="space-y-4">
                                     <h3 className="text-white font-black italic uppercase tracking-widest text-sm">Performance Stats</h3>
                                     <div className="grid grid-cols-2 gap-6">
                                         <div>
                                             <p className="text-brand-500 text-2xl font-black italic tracking-tighter">68%</p>
                                             <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest mt-1">Win Rate</p>
                                         </div>
                                         <div>
                                             <p className="text-white text-2xl font-black italic tracking-tighter">15-30%</p>
                                             <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest mt-1">Avg IV Expansion</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </Card>
                    </div>
                </div>
            </StandardSection>

            {/* IV Crush Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader 
                    label="The Golden Rule" 
                    title={<>The #1 Rule of Earnings Trading: <span className="text-red-500">Understanding IV Crush</span></>} 
                    align="center" 
                    className="mb-12" 
                />
                
                <div className="max-w-4xl mx-auto space-y-12 mb-24">
                     <p className="text-center text-gray-400 text-lg leading-relaxed">
                        Before any earnings strategy, you MUST understand IV crush — the single biggest trap for new earnings traders.
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <Card variant="glass" className="p-8 border-white/5 bg-gray-900/40">
                             <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4 italic">Before Earnings:</h4>
                             <p className="text-gray-500 text-sm leading-relaxed">
                                Market is uncertain about the outcome. Implied Volatility (IV) rises as traders buy options to speculate or hedge. This inflates option premiums.
                             </p>
                         </Card>
                         <Card variant="glass" className="p-8 border-red-500/20 bg-red-500/5">
                             <h4 className="text-red-500 font-black uppercase tracking-widest text-xs mb-4 italic">After Earnings:</h4>
                             <p className="text-gray-500 text-sm leading-relaxed">
                                Uncertainty is resolved. IV collapses immediately — typically 40-60% in minutes. This deflates option premiums dramatically.
                             </p>
                         </Card>
                     </div>
                </div>

                {/* IV Crush Example Table */}
                <div className="max-w-5xl mx-auto mb-24">
                    <h4 className="text-center text-white font-black uppercase tracking-[0.2em] text-[10px] italic mb-8">IV Crush Example Case</h4>
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Metric</TableHead>
                                    <TableHead>Before Earnings</TableHead>
                                    <TableHead>After Earnings</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { m: "Stock Price", b: "$850", a: "$920 (+8.1%)" },
                                    { m: "Implied Volatility", b: "82%", a: "38%", ac: "text-red-500" },
                                    { m: "ATM Call Price", b: "$42.00", a: "$31.80", ac: "text-red-400" },
                                    { m: "Your P&L Result", b: "—", a: "-$10.20 (-24%) ❌", ac: "text-red-500 font-black italic" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Metric" className="text-gray-500 text-[10px] font-bold uppercase">{row.m}</TableCell>
                                        <TableCell label="Before" className="text-white text-xs font-bold">{row.b}</TableCell>
                                        <TableCell label="After" className={`text-xs ${row.ac || 'text-gray-400 font-bold'}`}>{row.a}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <p className="text-center text-red-500/60 mt-6 text-xs italic uppercase tracking-widest">
                        The brutal reality: Stock moved +8.1% in your favor — and you still LOST 24% because of the 44-point IV drop.
                    </p>
                </div>

                {/* IV Drop Table */}
                <div className="max-w-4xl mx-auto pb-12">
                     <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 italic text-center">Typical Post-Earnings IV Drop by Stock:</h4>
                     <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-black/60">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Stock</TableHead>
                                    <TableHead>Pre-Earnings IV</TableHead>
                                    <TableHead>Post-Earnings IV</TableHead>
                                    <TableHead>Approx. Drop</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { s: "NVDA", pre: "75-85%", post: "35-42%", d: "-50-55%" },
                                    { s: "META", pre: "50-65%", post: "22-30%", d: "-48-55%" },
                                    { s: "TSLA", pre: "85-100%", post: "40-50%", d: "-50-55%" },
                                    { s: "AAPL", pre: "35-45%", post: "18-24%", d: "-45-50%" },
                                    { s: "GOOGL", pre: "42-55%", post: "20-28%", d: "-48-52%" },
                                    { s: "JPM", pre: "22-30%", post: "14-18%", d: "-38-42%" },
                                    { s: "WMT", pre: "18-24%", post: "12-16%", d: "-32-38%" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Stock" className="text-brand-500 font-black italic uppercase tracking-wider">{row.s}</TableCell>
                                        <TableCell label="Pre IV" className="text-gray-400 text-xs">{row.pre}</TableCell>
                                        <TableCell label="Post IV" className="text-gray-400 text-xs">{row.post}</TableCell>
                                        <TableCell label="Drop" className="text-red-500 font-bold text-xs">{row.d}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                     </Card>
                     <p className="text-center text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-6">
                        Lower IV stocks (WMT, JPM) have less crush — safer for earnings plays.
                     </p>
                </div>
            </StandardSection>

            {/* Strategies Section */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="5 Earnings Trading Strategies" align="center" className="mb-20" />
                
                <div className="space-y-32">
                    {/* Strategy 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 font-black text-xs italic">S1</span>
                                <h3 className="text-2xl font-black italic uppercase text-white">Pre-Earnings IV Expansion</h3>
                            </div>
                            <div className="p-4 bg-brand-500/10 border border-brand-500/20 rounded-xl inline-block">
                                <span className="text-brand-500 font-black uppercase tracking-widest text-[9px] italic">SAFEST — Recommended for Most Traders</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                <span className="text-brand-500 font-bold block mb-2 uppercase tracking-widest text-xs italic">The Logic:</span>
                                Buy options 7-10 days before earnings. IV rises as the event approaches. Sell the options 1-2 days BEFORE earnings — capturing the IV expansion profit without taking binary risk.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { l: "Target", v: "+35-60%" },
                                    { l: "Stop", v: "-25%" },
                                    { l: "Entry", v: "7-10 Days Before" },
                                    { l: "Exit", v: "1-2 Days Before" }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{item.l}</p>
                                        <p className="text-brand-500 font-black italic">{item.v}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                                <div className="p-6 bg-white/5 border-b border-white/5">
                                    <h4 className="text-white font-black uppercase tracking-widest text-xs italic text-center">IV Expansion Timeline (AAPL Example)</h4>
                                </div>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Days Pre-Earnings</TableHead>
                                            <TableHead>IV %</TableHead>
                                            <TableHead>ATM Call Price</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { d: "10 days", i: "22%", p: "$4.20" },
                                            { d: "7 days", i: "26%", p: "$5.10" },
                                            { d: "5 days", i: "30%", p: "$6.40" },
                                            { d: "3 days", i: "34%", p: "$7.80" },
                                            { d: "1 day", i: "38%", p: "$8.90", sc: "bg-brand-500/20 text-brand-500 font-black italic", sf: "(SELL HERE)" },
                                            { d: "Day After", i: "20%", p: "$4.10", sc: "text-red-500", sf: "(IV CRUSH)" }
                                        ].map((row, i) => (
                                            <TableRow key={i} className={row.sc || ""}>
                                                <TableCell label="Timeline" className="text-xs font-bold">{row.d} <span className="opacity-50 text-[9px] ml-1">{row.sf || ""}</span></TableCell>
                                                <TableCell label="IV" className="text-xs">{row.i}</TableCell>
                                                <TableCell label="Price" className="text-xs">{row.p}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                            <p className="text-[10px] text-center text-gray-500 uppercase font-bold tracking-widest">
                                Best Stocks: NVDA, META, TSLA (highest expansion), AAPL, MSFT, GOOGL (moderate/reliable).
                            </p>
                        </div>
                    </div>

                    {/* Strategy 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8 lg:order-2">
                             <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 font-black text-xs italic">S2</span>
                                <h3 className="text-2xl font-black italic uppercase text-white">Post-Earnings Momentum</h3>
                            </div>
                             <div className="p-4 bg-brand-400/10 border border-brand-400/20 rounded-xl inline-block">
                                <span className="text-brand-400 font-black uppercase tracking-widest text-[9px] italic">HIGH WIN RATE — Requires Patience</span>
                            </div>
                             <p className="text-gray-400 leading-relaxed">
                                <span className="text-brand-500 font-bold block mb-2 uppercase tracking-widest text-xs italic">The Logic:</span>
                                Wait for the announcement. If the company beats AND stock makes a large move, momentum often sustains for 2-4 days as analysts upgrade and institutions pile in.
                             </p>
                             <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                                 <h4 className="text-brand-500 font-black uppercase tracking-widest text-[10px] mb-6 italic">Why Waiting Beats Guessing:</h4>
                                 <ul className="space-y-4 m-0 p-0 list-none">
                                     {[
                                         "Avoid IV crush entirely (already happened)",
                                         "See the actual result before risking capital",
                                         "Trends are more directional and sustained",
                                         "Win rate 65-72% vs 48% for holding through"
                                     ].map((item, i) => (
                                         <li key={i} className="flex gap-4 text-xs text-gray-300 font-black uppercase tracking-widest">
                                             <FiCheck className="text-brand-500 shrink-0" /> {item}
                                         </li>
                                     ))}
                                 </ul>
                             </Card>
                        </div>
                        <div className="space-y-8 lg:order-1">
                             <h4 className="text-white font-black uppercase tracking-widest text-[10px] italic text-center">Key Metrics to Check by Stock:</h4>
                             <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                                 <Table>
                                     <TableHeader>
                                         <TableRow>
                                             <TableHead>Stock</TableHead>
                                             <TableHead>Primary Metric</TableHead>
                                             <TableHead>Secondary</TableHead>
                                         </TableRow>
                                     </TableHeader>
                                     <TableBody>
                                         {[
                                             { s: "NVDA", p: "Data Center Rev", k: "Gross Margin" },
                                             { s: "META", p: "Ad Revenue", k: "MAU Growth" },
                                             { s: "AAPL", p: "iPhone Revenue", k: "Services Growth" },
                                             { s: "GOOGL", p: "Cloud Growth", k: "Search Rev" },
                                             { s: "AMZN", p: "AWS Growth", k: "Op Income" },
                                             { s: "TSLA", p: "Deliveries", k: "Gross Margin %" }
                                         ].map((row, i) => (
                                             <TableRow key={i}>
                                                 <TableCell label="Stock" className="text-brand-500 font-black italic uppercase tracking-wider">{row.s}</TableCell>
                                                 <TableCell label="Primary" className="text-white text-xs whitespace-nowrap">{row.p}</TableCell>
                                                 <TableCell label="Secondary" className="text-gray-500 text-xs">{row.k}</TableCell>
                                             </TableRow>
                                         ))}
                                     </TableBody>
                                 </Table>
                             </Card>
                             <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                                 <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest items-center flex gap-2">
                                     <FiAlertTriangle className="shrink-0" /> Wait 30-45 mins after open for stabilization.
                                 </p>
                             </div>
                        </div>
                    </div>

                    {/* Strategy 3/4/5 in a Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Strategy 3 */}
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-[10px] italic">S3</span>
                                    <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Earnings Straddle</h4>
                                </div>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                    Buy both call + put. Profit if stock moves SIGNIFICANTLY EITHER way. Move must beat IV crush on BOTH sides.
                                </p>
                                <div className="p-4 bg-black/40 rounded-xl space-y-3">
                                    <p className="text-red-500 text-[9px] font-black uppercase tracking-widest shrink-0">Warning: High Barrier</p>
                                    <p className="text-gray-400 text-[10px] italic">NVDA often needs 11-14% move just to breakeven on a straddle. Win rate: 48%.</p>
                                </div>
                            </div>
                            <Link to="/options-profit-calculator" className="text-brand-500 font-black uppercase tracking-[0.2em] text-[10px] mt-8 flex items-center gap-2 group">
                                Straddle Math <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Card>

                        {/* Strategy 4 */}
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 flex flex-col justify-between">
                             <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-black text-[10px] italic">S4</span>
                                    <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Directional Bet</h4>
                                </div>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                    Strong conviction play. Buy calls (beat) or puts (miss) and hold THROUGH announcement. Highest risk profile.
                                </p>
                                <div className="space-y-2">
                                     <p className="text-brand-500 text-[9px] font-black uppercase tracking-widest">Only Recommended When:</p>
                                     <ul className="text-[10px] text-gray-500 p-0 m-0 list-none space-y-1">
                                         <li>• IV Rank below 25 (cheap premiums)</li>
                                         <li>• Data strongly confirms thesis</li>
                                         <li>• Max 1% position sizing</li>
                                     </ul>
                                </div>
                            </div>
                        </Card>

                        {/* Strategy 5 */}
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 flex flex-col justify-between">
                             <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 font-black text-[10px] italic">S5</span>
                                    <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs italic">Broken Wing Butterfly</h4>
                                </div>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                    EXPERT structure. Profit from a specific price range with defined max risk. Complex 4-leg trade.
                                </p>
                                <div className="p-4 bg-brand-500/10 rounded-xl space-y-2">
                                     <p className="text-brand-500 text-[9px] font-black italic">AAPL Example:</p>
                                     <p className="text-gray-300 text-[9px] leading-relaxed">Max Loss: $120. Max Profit: $380 if stock lands pinned in your target zone.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Resources Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <div className="space-y-12">
                         <SectionHeader label="Toolkit" title="Earnings Resources & Data" align="left" className="mb-0" />
                         <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                             <div className="p-6 bg-white/5 border-b border-white/5">
                                 <h4 className="text-white font-black uppercase tracking-widest text-[10px] italic">Free Official Resources:</h4>
                             </div>
                             <Table>
                                 <TableBody>
                                     {[
                                         { r: "EarningsWhispers.com", w: "Whisper numbers + Calendar", b: "Daily earnings tracking" },
                                         { r: "Yahoo Finance", w: "Earnings calendar tab", b: "Quick ticker lookup" },
                                         { r: "Seeking Alpha", w: "Analyst estimates + History", b: "Deep fundamental research" },
                                         { r: "Physical Good Data", w: "Freightos, Sensor Tower", b: "Pre-earnings edge" }
                                     ].map((row, i) => (
                                         <TableRow key={i}>
                                             <TableCell label="Site" className="text-brand-500 font-black italic text-xs uppercase">{row.r}</TableCell>
                                             <TableCell label="Utility" className="text-gray-400 text-[11px] font-bold uppercase">{row.w}</TableCell>
                                             <TableCell label="Best For" className="text-gray-500 text-[10px] italic">{row.b}</TableCell>
                                         </TableRow>
                                     ))}
                                 </TableBody>
                             </Table>
                         </Card>
                    </div>

                    <div className="space-y-12">
                         <SectionHeader label="Process" title="Key Info to Record" align="left" className="mb-0" />
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { t: "Time of Announcement", d: "Before Open vs After Close" },
                                { t: "IV Rank", d: "Current IV vs 52-week range" },
                                { t: "Historical Moves", d: "Last 8 quarters of volatility" },
                                { t: "Whisper Number", d: "Unstated market expectation" },
                                { t: "Key Primary Metric", d: "Cloud, Subscriber growth, etc" },
                                { t: "Exit Roadmap", d: "Planned exit before or after" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center gap-2">
                                     <h5 className="text-brand-500 uppercase tracking-widest text-[10px] font-black italic">{item.t}</h5>
                                     <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>

                {/* Experience Tiers */}
                <div className="max-w-5xl mx-auto py-12">
                     <SectionHeader label="Roadmap" title="Earnings Trading by Experience Level" align="center" className="mb-20" />
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {[
                             { l: "Beginner", t: "0-6 Months", d: "ONLY Strategy 1 (Pre-IV Expansion). Exit 1-2 days before. Stick to MSFT, AAPL, JPM.", c: "border-white/5" },
                             { l: "Intermediate", t: "6-18 Months", d: "Add Strategy 2 (Momentum). Expand to NVDA, META. Paper trade straddles.", c: "border-brand-500/20 bg-brand-500/5", badge: "Most Common" },
                             { l: "Advanced", t: "18+ Months", d: "All strategies. Directional bets (1% sizing). Butterflies and complex straddles.", c: "border-brand-500/50" }
                         ].map((tier, i) => (
                             <Card key={i} variant="glass" className={`p-8 ${tier.c} text-center relative`}>
                                 {tier.badge && <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{tier.badge}</div>}
                                 <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2 italic">{tier.l}</h4>
                                 <p className="text-brand-500 text-[10px] uppercase font-black mb-6 italic tracking-widest">{tier.t}</p>
                                 <p className="text-gray-500 text-[10px] font-bold uppercase leading-loose tracking-wider">{tier.d}</p>
                             </Card>
                         ))}
                     </div>
                </div>
            </StandardSection>

            {/* Risk Management Section */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Safety" title="Earnings Trading Risk Management" align="center" className="mb-20" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto mb-32">
                    <div className="space-y-12">
                         <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Position Sizing by Strategy:</h4>
                         <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Strategy</TableHead>
                                        <TableHead>Max Position Size</TableHead>
                                        <TableHead>Risk Level</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "Pre-Earnings IV Play", m: "2%", r: "Low" },
                                        { s: "Post-Earnings Momentum", m: "1.5-2%", r: "Medium" },
                                        { s: "Straddle", m: "1%", r: "High" },
                                        { s: "Directional Hold", m: "1% MAXIMUM", r: "Highest", sc: "text-red-500 font-bold" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Target" className="text-white text-xs font-bold">{row.s}</TableCell>
                                            <TableCell label="Max" className="text-brand-500 text-xs font-black italic">{row.m}</TableCell>
                                            <TableCell label="Risk" className={`text-xs uppercase font-black ${row.sc || 'text-gray-500'}`}>{row.r}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                         </Card>
                    </div>
                    <div className="space-y-10">
                         <h4 className="text-red-500 font-black uppercase tracking-widest text-sm italic">The Hard Rules:</h4>
                         <div className="space-y-4">
                            {[
                                "NEVER hold pre-earnings options through announcement unless explicitly S3/S4 setup.",
                                "ALWAYS know your earnings date and time BEFORE entry.",
                                "EXIT PRE-EARNINGS plays 1-2 days before the event — no exceptions.",
                                "POST-EARNINGS entries only after 30-minute stabilization at open.",
                                "Check GUIDANCE metrics (the future outlook) more than the headline beat/miss."
                            ].map((rule, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-xl bg-red-500/[0.02] border border-red-500/10">
                                    <FiAlertTriangle className="text-red-500 shrink-0 mt-1" />
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider leading-relaxed">{rule}</p>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>

                {/* FAQs */}
                <div className="max-w-4xl mx-auto pb-24">
                     <SectionHeader label="Knowledge Base" title="Earnings Trading FAQs" align="center" className="mb-20" />
                     <div className="space-y-4">
                        {[
                            { q: "What is the 'whisper number' and why does it matter?", a: "The whisper number is the unofficial estimate Wall Street actually expects. A company can 'beat' analyst estimates but miss the whisper number, causing the stock to drop." },
                            { q: "How do I find historical earnings moves for a stock?", a: "Seeking Alpha's 'Earnings' section shows the past 8-12 quarters of reactions. This shows you the typical range of moves and whether the stock tends to over-react." },
                            { q: "Should I always avoid holding options through earnings?", a: "For most: yes. The combination of IV crush + binary risk means odds are against you. Strategy 1 and 2 capture 80% of earnings profit with much lower risk." },
                            { q: "Can I trade earnings with a small account ($5,000)?", a: "Yes — use Strategy 1 on more affordable stocks like WMT, JPM, or AAPL. Avoid straddles on high-priced stocks until the account is larger." }
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                     </div>
                </div>

                {/* Internal Links Grid */}
                <div className="max-w-6xl mx-auto py-20 border-t border-white/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Related Resources</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                         {[
                             { title: "Performance Dashboard", path: "/performance" },
                             { title: "Understanding IV", path: "/implied-volatility-explained" },
                             { title: "Options Calculator", path: "/options-profit-calculator" },
                             { title: "NVDA Earnings Play", path: "/nvda-earnings-guide" },
                             { title: "META Earnings Guide", path: "/meta-earnings-guide" },
                             { title: "AAPL Strategy", path: "/aapl-earnings-guide" },
                             { title: "Swing Trading Guide", path: "/weekly-options-swing-trading" },
                             { title: "Risk Disclaimer", path: "/risk-disclaimer" }
                         ].map((link, i) => (
                             <Link key={i} to={link.path} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all uppercase tracking-widest">
                                 {link.title}
                             </Link>
                         ))}
                    </div>
                </div>

                <div className="pt-20 text-center text-[10px] text-gray-600 space-y-4">
                    <p className="font-black uppercase tracking-[0.3em]">DISCLAIMER</p>
                    <p className="max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                        Earnings trading involves substantial binary risk. Holding options through earnings announcements can result in total loss of premium due to IV crush even when stock moves in your favor. Past performance does not guarantee future results. Never trade with money you cannot afford to lose.
                    </p>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA 
                   title="Master the Next Earnings Cycle"
                   subtitle={<>Join OnlyOptions for real-time earnings signals:<br/>✅ IV Expansion Targets ✅ Post-Earnings Momentum Picks ✅ Whisper Number Data ✅ IV Crush Guardrails</>}
                />
            </div>
        </div>
    );
};

export default EarningsOptionsPlays;
