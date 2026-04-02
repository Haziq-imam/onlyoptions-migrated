import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap, FiShield, FiTrendingDown, FiClock, FiDollarSign, FiPercent, FiLayers } from 'react-icons/fi';
import { Link } from "@/lib/react-router-dom-stub";
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

const NvdaOptionsSignals = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>NVDA Options Signals: Complete Trading Guide | OnlyOptions</title>
                <meta name="description" content="Learn how to trade NVDA options with professional signals. Understand NVDA volatility, earnings plays, AI catalysts, best strategies, and why NVDA offers explosive profit potential." />
                <link rel="canonical" href="https://onlyoptions.us/nvda-options-signals" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Stock-Specific Guide"
                    title={<>Trading <span className="text-brand-500">NVIDIA (NVDA)</span> with Options</>}
                    description="The King of Volatility and Opportunity"
                    align="center"
                    className="mb-12"
                />

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        NVIDIA (NVDA) has become the most exciting stock for options traders. As the leader in AI chips, NVDA regularly moves 5-15% in single days on earnings, news, or tech sector momentum. This volatility creates +100-300% options profits — but also requires careful risk management.
                    </p>
                </div>

                {/* Key Stats Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "66.1%" },
                        { label: "Avg Winner", value: "+112%" },
                        { label: "R/R Ratio", value: "2.9:1" },
                        { label: "Beta", value: "1.8" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* What Makes NVDA Special */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The AI Powerhouse</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Market Dominance</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            NVIDIA dominates the AI chip market with 80%+ share. Every major AI company (OpenAI, Google, Meta, Microsoft, Tesla) uses NVDA GPUs. As AI grows, NVDA grows.
                        </p>
                        
                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Key Stats (2026):</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                                {[
                                    "Market Cap: $3+ Trillion",
                                    "Daily Volume: 300-500M shares",
                                    "Options Volume: 1-2M contracts",
                                    "Volatility: 80% higher than S&P"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-center">
                                        <FiCheck className="text-brand-500 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">NVDA vs SPY/QQQ Comparison:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead className="text-brand-500">NVDA</TableHead>
                                        <TableHead>SPY/QQQ</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Avg Daily Move", n: "2-5%", s: "0.5-1.5%" },
                                        { f: "Earnings Move", n: "8-15%", s: "1-3%" },
                                        { f: "Implied Vol", n: "45-80%", s: "12-25%" },
                                        { f: "Premium", n: "High (Expensive)", s: "Moderate" },
                                        { f: "Potential", n: "100-300%", s: "50-100%" },
                                        { f: "Risk Level", n: "Very High", s: "Moderate" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="NVDA" className="text-white font-bold text-xs italic">{row.n}</TableCell>
                                            <TableCell label="Indices" className="text-gray-400 text-xs">{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Performance Tracker */}
            <StandardSection variant="default" divider="top" spacing="lg">
                 <div className="max-w-4xl mx-auto space-y-12 mb-20">
                    <SectionHeader label="Track Record" title="Our NVDA Signals Performance" align="center" className="mb-0" />
                    <p className="text-center text-gray-400 text-sm italic uppercase tracking-widest">
                        NVDA moves 3-5x faster than SPY/QQQ. Higher profits, higher risk.
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                      {[
                          { l: "Win Rate", v: "66.1%", d: "Lower than SPY due to whipsaws" },
                          { l: "Avg Winner", v: "+112%", d: "Nearly double the index average" },
                          { l: "Risk/Reward", v: "2.9:1", d: "High conviction setups" },
                          { l: "Best Trade", v: "+287%", d: "AI cycle peak momentum" },
                          { l: "Total Signals", v: "127", d: "Third most traded ticker" },
                          { l: "Avg Loser", v: "-38%", d: "Strict stop loss protocols" }
                      ].map((item, i) => (
                          <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 text-center">
                              <h5 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">{item.l}</h5>
                              <p className="text-brand-500 text-3xl font-black italic tracking-tighter mb-4">{item.v}</p>
                              <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed">{item.d}</p>
                          </Card>
                      ))}
                 </div>
            </StandardSection>

            {/* Costs & Volatility */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-12">
                         <SectionHeader label="Economics" title="Premium Costs & Capital" align="left" className="mb-0" />
                         <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Option Type</TableHead>
                                        <TableHead>Typical Premium</TableHead>
                                        <TableHead>Cost (1 Contract)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { t: "0DTE ATM", p: "$8-$15", c: "$800-$1,500" },
                                        { t: "Weekly ATM", p: "$20-$40", c: "$2,000-$4,000" },
                                        { t: "Monthly ATM", p: "$50-$80", c: "$5,000-$8,000" }
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
                            Requires larger account ($10,000+ recommended) or trade OTM options ($1,000-$2,000 cost) to manage risk effectively.
                         </p>
                    </div>

                    <div className="space-y-8">
                         <SectionHeader label="Dynamics" title="Volatility Patterns" align="left" className="mb-0" />
                         <div className="space-y-4">
                            {[
                                { t: "Pre-Earnings", v: "IV spikes 60-80% (Expensive)", i: <FiZap className="text-yellow-500" /> },
                                { t: "Post-Earnings", v: "IV crashes to 40-50% (Crush)", i: <FiAlertTriangle className="text-red-500" /> },
                                { t: "AI News Days", v: "IV jumps 10-20% suddenly", i: <FiActivity className="text-brand-500" /> },
                                { t: "Normal Days", v: "IV settles at 45-55% range", i: <FiShield className="text-brand-400" /> }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-6 border-white/5 bg-gray-950/40 flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {item.i}
                                    </div>
                                    <div className="space-y-1">
                                        <h5 className="text-white font-black uppercase tracking-widest text-[10px] italic">{item.t}</h5>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{item.v}</p>
                                    </div>
                                </Card>
                            ))}
                         </div>
                         <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-2xl text-center">
                             <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                                Trading Implication: Buy when IV &lt;50 (good value). Avoid buying when IV &gt;70 (overpriced).
                             </p>
                         </div>
                    </div>
                </div>
            </StandardSection>

            {/* Trading Strategies */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="4 Powerful NVDA Strategies" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { 
                            t: "Earnings Momentum Play", 
                            d: "Buy ATM/ITM calls 7-10 days before earnings. Exit 1 day before to capture IV expansion and avoid binary risk.",
                            e: "Entry: $38 premium → Exit: $58 (+53% profit).",
                            i: "High Winning Chance" 
                        },
                        { 
                            t: "Post-Earnings Gap Trade", 
                            d: "Wait for earnings gap (+8%+). If holding gains after 60 mins, buy calls for 2-3 day momentum continuation.",
                            e: "Target additional +30-60% move.",
                            i: "Trend Following"
                        },
                        { 
                            t: "AI News Catalyst Trade", 
                            d: "Major announcements (OpenAI, Chip regs) move NVDA independently. Buy calls within 1 hour of news flash.",
                            e: "Target +60-100% in 1-3 days.",
                            i: "Catalyst Driven"
                        },
                        { 
                            t: "Mean Reversion (Advanced)", 
                            d: "Buy the dip when NVDA drops -5%+ on sector weakness (not company specific). RSI <30 is the trigger.",
                            e: "Target recovery to breakeven point.",
                            i: "Expert Only"
                        }
                    ].map((strategy, i) => (
                        <Card key={i} variant="glass" className="p-10 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-white font-black uppercase tracking-widest text-sm italic">{strategy.t}</h4>
                                    <span className="text-brand-500 text-[9px] font-black uppercase tracking-widest border border-brand-500/30 px-2 py-0.5 rounded-full">{strategy.i}</span>
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

            {/* Catalysts & Timing */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                     <div className="space-y-12">
                         <SectionHeader label="Catalysts" title="Key Events to Watch" align="left" className="mb-0" />
                         <div className="grid grid-cols-1 gap-4">
                             {[
                                 { t: "Quarterly Earnings", d: "Jan, May, Aug, Nov. Extreme volatility windows." },
                                 { t: "AI Sector News", d: "OpenAI, Google, Meta AI spending & model releases." },
                                 { t: "Chip Restrictions", d: "Government regulations on exports to China." },
                                 { t: "Competitor Updates", d: "AMD or Intel high-performance chip releases." },
                                 { t: "Data Center Demand", d: "Capex guidance from AWS, Azure, and GCP." }
                             ].map((c, i) => (
                                 <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                     <div className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                                     <div className="space-y-1">
                                         <h5 className="text-white font-black uppercase tracking-widest text-[11px] italic">{c.t}</h5>
                                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{c.d}</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>

                     <div className="space-y-12">
                         <SectionHeader label="Timing" title="Intraday Behavior" align="left" className="mb-0" />
                         <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                             <Table>
                                 <TableBody>
                                     {[
                                         { t: "9:30-10:30 AM", b: "Wild Volatility ($20-40 swings)", s: "Avoid (Wait for Direction)" },
                                         { t: "10:30-12:00 PM", b: "Trends establish clearly", s: "Momentum Plays", sc: "bg-brand-500/10" },
                                         { t: "12:00-2:00 PM", b: "Consolidation phase", s: "Wait" },
                                         { t: "2:00-3:30 PM", b: "Afternoon moves develop", s: "Continuation Trades" },
                                         { t: "3:30-4:00 PM", b: "Extreme Volatility", s: "Close 0DTE Positions" }
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

            {/* Risk Management & Mistakes */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-12">
                         <SectionHeader label="Safety" title="NVDA Risk Management" align="left" className="mb-0" />
                         <div className="space-y-8">
                             <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                                 <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-4 italic">The 1.5% Rule:</h4>
                                 <p className="text-gray-300 text-xs leading-relaxed uppercase tracking-wider font-bold">
                                     Use <span className="text-white">1.5% max risk</span> (instead of 2%) on NVDA due to higher beta and whipsaw potential. Wider stop-losses (35-40%) are required to survive normal intraday volatility.
                                 </p>
                             </Card>
                             <div className="p-6 bg-black/60 border border-white/5 rounded-2xl">
                                 <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                     Example: Entry $40, Stop $24 (-40%). A $10,000 account risking $150 means trading refined strikes or OTM positions.
                                 </p>
                             </div>
                         </div>
                    </div>

                    <div className="space-y-12">
                         <SectionHeader label="Pitfalls" title="Common NVDA Mistakes" align="left" className="mb-0" />
                         <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "Buying During Extreme IV (>70)", d: "Stock moves +5% but IV crashes. You lose money despite being right." },
                                { t: "Holding Through Earnings", d: "IV crush from 75% → 40% destroys contract value instantly." },
                                { t: "Over-Sizing Position", d: "Treating NVDA like SPY leads to account-destroying whipsaws." },
                                { t: "Chasing Vertical Rallies", d: "Entering at local peaks after +7% moves leads to immediate pullbacks." }
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

                {/* FAQ */}
                <div className="max-w-4xl mx-auto pb-24">
                     <SectionHeader label="Knowledge Base" title="NVDA Trading FAQs" align="center" className="mb-20" />
                     <div className="space-y-4">
                        {[
                            { q: "Is NVDA too volatile for beginners?", a: "Yes. Start with SPY/QQQ for 3-6 months. Once consistently profitable there, add NVDA. It punishes mistakes 2-3x harder than indices." },
                            { q: "Why is the win rate lower than SPY?", a: "Higher volatility creates more false breakouts and whipsaws. Lower win rate is offset by much higher average winners (+112% vs +84%)." },
                            { q: "Can I trade NVDA with a $5,000 account?", a: "Difficult. Weekly premiums of $2,000+ per contract make 2% risk sizing impossible. Options: Use 0DTE or OTM strikes ($800-$1,500) carefully." },
                            { q: "What makes NVDA different from other big tech?", a: "NVDA is pure-play AI exposure. AAPL/MSFT are diversified. When AI hype cycle peaks, NVDA moves 10-15% while peers move 2-3%." }
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
                             { title: "Earnings Strategies", path: "/options-earnings-plays-strategy" },
                             { title: "Understanding IV", path: "/understanding-implied-volatility-options" },
                             { title: "Risk Management", path: "/options-signals-risk-management" },
                             { title: "Position Sizing", path: "/position-sizing-guide-options" },
                             { title: "Options Greeks", path: "/options-greeks-explained" },
                             { title: "Performance", path: "/performance" }
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
                   title="Ride the AI Wave with OnlyOptions"
                   subtitle={<>Receive real-time NVDA signals with:<br/>✅ Strike Selection ✅ IV Verification ✅ Catalyst Analysis ✅ Pre-Calculated Exit Map</>}
                />
            </div>
        </div>
    );
};

export default NvdaOptionsSignals;
