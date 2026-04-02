import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiAlertTriangle, FiZap, FiActivity, FiLayers, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
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
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-4 pt-6 whitespace-pre-line">
                {answer}
            </div>
        </details>
    );
};

const IwmOptionsSignals = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>IWM, QQQ, COIN & PLTR Options Signals | Growth & Momentum Guide | OnlyOptions</title>
                <meta name="description" content="Trade IWM, QQQ, Coinbase, and Palantir options with professional signals. Complete options guide covering small cap momentum, tech ETF plays, crypto proxy trades, and AI data analytics catalysts." />
                <link rel="canonical" href="https://onlyoptions.us/iwm-qqq-coin-pltr-options-signals" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                        <FiLayers className="text-brand-500" /> Multi-Asset Tactics
                    </span>
                    <SectionHeader
                        label="Growth & Momentum Guides"
                        title={<>Trading <span className="text-brand-500">IWM, QQQ, COIN & PLTR</span></>}
                        description="High-Beta Plays & Deep Dive Ecosystems"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        These four instruments represent some of the most dynamic options trading opportunities available — from broad market ETFs to highly volatile individual stocks. Each offers a unique edge: IWM captures small-cap momentum, QQQ provides leveraged tech exposure, COIN is the purest crypto proxy in the stock market, and PLTR is the AI data analytics disruptor.
                    </p>
                </div>

                {/* Unified Comparison Matrix */}
                <div className="max-w-6xl mx-auto mb-16">
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead className="text-white">IWM</TableHead>
                                        <TableHead className="text-brand-500">QQQ Deep Dive</TableHead>
                                        <TableHead className="text-yellow-500">COIN</TableHead>
                                        <TableHead className="text-blue-500">PLTR</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Type", i: "ETF (2000 small caps)", q: "ETF (100 Nasdaq)", c: "Individual stock", p: "Individual stock" },
                                        { f: "Price", i: "~$210", q: "~$480", c: "~$185", p: "~$85" },
                                        { f: "Beta", i: "1.25", q: "1.20", c: "3.50 🔥", p: "2.10" },
                                        { f: "Daily Move", i: "0.8-2%", q: "0.7-1.8%", c: "4-12% 🔥", p: "2-6%" },
                                        { f: "IV Range", i: "18-30%", q: "16-25%", c: "80-150% ❌", p: "55-90%" },
                                        { f: "Options Cost", i: "Low ✅", q: "Moderate", c: "Moderate", p: "Low-Mod ✅" },
                                        { f: "Win Rate", i: "68.9%", q: "71.2%", c: "58.4%", p: "62.7%" },
                                        { f: "Avg Winner", i: "+72%", q: "+68%", c: "+134% 🔥", p: "+108% 🔥" },
                                        { f: "Risk Level", i: "Moderate", q: "Low-Mod ✅", c: "EXTREME ❌", p: "Very High" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="IWM" className="text-white text-xs">{row.i}</TableCell>
                                            <TableCell label="QQQ" className="text-gray-300 text-xs">{row.q}</TableCell>
                                            <TableCell label="COIN" className={`font-black text-xs italic ${row.c.includes('EXTREME') || row.c.includes('❌') ? 'text-red-500' : 'text-white'}`}>{row.c}</TableCell>
                                            <TableCell label="PLTR" className="text-gray-300 text-xs">{row.p}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* SECTIONS: IWM */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">IWM — Small Cap Momentum</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Rate-Sensitive Beta</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            IWM tracks the Russell 2000 index (2,000 small and mid-cap U.S. companies). Small caps behave very differently from large caps: they are purely domestic and highly sensitive to interest rates due to larger floating-rate debt burdens. 
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead className="text-brand-500">IWM (Small Cap)</TableHead>
                                        <TableHead>SPY (Large Cap)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Rate Sensitivity", i: "Very High", s: "Moderate" },
                                        { f: "Economic Sensitivity", i: "Very High", s: "High" },
                                        { f: "International Rev", i: "~20%", s: "~40%" },
                                        { f: "Best In", i: "Rate cut cycles ✅", s: "All markets" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="IWM" className="text-white text-xs font-bold">{row.i}</TableCell>
                                            <TableCell label="SPY" className="text-gray-400 text-xs">{row.s}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        
                        <div className="space-y-4 pt-6 border-t border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">IWM Catalysts & Strategies</h4>
                            <div className="space-y-4">
                                <div className="p-5 border border-white/10 rounded-xl bg-white/[0.02]">
                                    <div className="flex justify-between items-center mb-2">
                                        <h5 className="font-bold text-xs uppercase tracking-widest text-brand-500">Fed Rate Cut Cycle Play</h5>
                                        <span className="text-[9px] bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full uppercase tracking-widest">Most Powerful</span>
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-3">When Fed begins cutting rates, buy IWM calls (1-2 month exp). Hold through the first 2-3 cuts. Target: +80-150%.</p>
                                </div>
                                <div className="p-5 border border-white/10 rounded-xl bg-white/[0.02]">
                                    <div className="flex justify-between items-center mb-2">
                                        <h5 className="font-bold text-xs uppercase tracking-widest text-white">January Effect Trade</h5>
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed">Buy IWM calls last week of December when tax-loss selling peaks. Hold through mid-January. Target +40-70%.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">IWM Premium & Risk</h4>
                        <div className="grid grid-cols-3 gap-2 text-center mb-6">
                            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1">Win Rate</p>
                                <p className="text-white text-lg font-black italic">68.9%</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1">Avg Winner</p>
                                <p className="text-brand-500 text-lg font-black italic">+72%</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1">Max Sizing</p>
                                <p className="text-white text-lg font-black italic">2%</p>
                            </div>
                        </div>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Option Type</TableHead>
                                        <TableHead>Total Cost</TableHead>
                                        <TableHead className="text-brand-500">Account min</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { t: "0DTE ATM", c: "$150-$300", a: "$7K+ ✅" },
                                        { t: "Weekly ATM", c: "$350-$600", a: "$8K+ ✅" },
                                        { t: "Monthly ATM", c: "$800-$1,400", a: "$10K+ ✅" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Option Type" className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">{row.t}</TableCell>
                                            <TableCell label="Total Cost" className="text-white text-xs">{row.c}</TableCell>
                                            <TableCell label="Account" className="text-brand-500 text-xs font-bold">{row.a}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* SECTIONS: QQQ DEEP DIVE */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 lg:order-2">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">QQQ Deep Dive</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Advanced Tech Tactics</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Half of QQQ is concentrated in just 7 stocks. NVDA alone can move QQQ by 0.5-0.8% on a big day. When NVDA has a +10% day, QQQ moves +1.5-2% purely from NVDA's weight.
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Company</TableHead>
                                        <TableHead className="text-brand-500">% of QQQ</TableHead>
                                        <TableHead>Impact</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { c: "AAPL", p: "9.1%", i: "Largest single holding" },
                                        { c: "MSFT", p: "8.8%", i: "AI + cloud driver" },
                                        { c: "NVDA", p: "8.2%", i: "AI chip — most volatile" },
                                        { c: "AMZN", p: "5.3%", i: "AWS + retail" },
                                        { c: "Top 7 Total", p: "~45%", i: "Massive Concentration", sc: "bg-brand-500/10" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx} className={row.sc || ""}>
                                            <TableCell label="Company" className="text-white text-[11px] font-bold uppercase tracking-widest">{row.c}</TableCell>
                                            <TableCell label="%" className="text-brand-500 text-xs font-bold">{row.p}</TableCell>
                                            <TableCell label="Impact" className="text-gray-400 text-xs">{row.i}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="space-y-8 lg:order-1">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Advanced QQQ Strategies</h4>
                        <div className="space-y-4">
                            <div className="p-5 border border-white/10 rounded-xl bg-white/[0.02]">
                                <h5 className="font-bold text-xs uppercase tracking-widest text-white mb-2">NVDA Earnings QQQ Leverage</h5>
                                <p className="text-gray-400 text-xs leading-relaxed mb-3">Instead of buying $3,000 NVDA options, buy QQQ weekly calls for $700 before NVDA hits. If NVDA beats massively, QQQ follows +1.5%. Same direction, 70% lower cost.</p>
                            </div>
                            <div className="p-5 border border-white/10 rounded-xl bg-white/[0.02]">
                                <h5 className="font-bold text-xs uppercase tracking-widest text-white mb-2">Big Tech Earnings Week Sweep</h5>
                                <p className="text-gray-400 text-xs leading-relaxed mb-3">When AAPL, MSFT, GOOGL, META report the same week, buy QQQ calls Monday. Exit Friday. Target: +60-100%.</p>
                            </div>
                            <div className="p-5 border border-brand-500/20 rounded-xl bg-brand-500/5">
                                <h5 className="font-bold text-xs uppercase tracking-widest text-brand-500 mb-2 flex items-center gap-2"><FiZap /> 0DTE Around Fed Rate Moves</h5>
                                <p className="text-gray-300 text-xs leading-relaxed">Wait exactly for 2:00 PM ET Fed announcements. Dovish surprise = buy calls at 2:01 PM. Hawkish = buy puts. Hold 60-90 minutes max. Target: +30-50%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* SECTIONS: COIN */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">COIN — The Pure Crypto Proxy</h2>
                            <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><FiAlertTriangle /> Extreme Volatility Warning</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Coinbase is the largest U.S. cryptocurrency exchange. Its revenue swings 300-400% between crypto bull and bear cycles. <span className="text-red-400 font-bold">A stock with 300% revenue swings generates option moves of 500-1000%.</span>
                        </p>
                        
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <p className="text-red-400 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                                EXTREME WARNING: COIN is the highest-volatility individual stock on our platform. 1% MAX POSITION SIZING.
                            </p>
                        </div>

                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Bitcoin Move</TableHead>
                                        <TableHead>COIN Move</TableHead>
                                        <TableHead className="text-brand-500">Options Impact</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { b: "BTC +5%", c: "COIN +8-12%", o: "Calls +80-150%" },
                                        { b: "BTC +10%", c: "COIN +18-25% 🔥", o: "Calls +200-400%" },
                                        { b: "BTC -15%", c: "COIN -25-35%", o: "Puts +300-500%" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Bitcoin" className="text-yellow-500 text-xs font-bold">{row.b}</TableCell>
                                            <TableCell label="COIN" className="text-white text-xs font-bold">{row.c}</TableCell>
                                            <TableCell label="Impact" className="text-brand-500 text-xs italic font-black">{row.o}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1">Win Rate</p>
                                <p className="text-white text-2xl font-black italic">58.4%</p>
                            </div>
                            <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20 text-center">
                                <p className="text-yellow-500/70 text-[9px] font-black uppercase tracking-widest mb-1">Avg Winner</p>
                                <p className="text-yellow-500 text-2xl font-black italic">+134%</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">COIN Catalysts & Tactics</h4>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-xs text-gray-400 leading-relaxed items-start">
                                    <FiCheck className="text-yellow-500 mt-1 shrink-0" />
                                    <div><span className="text-white font-bold">Rule #1:</span> Before ANY COIN trade, check Bitcoin direction. If BTC is falling, NEVER buy COIN calls.</div>
                                </li>
                                <li className="flex gap-3 text-xs text-gray-400 leading-relaxed items-start">
                                    <FiCheck className="text-yellow-500 mt-1 shrink-0" />
                                    <div><span className="text-white font-bold">Regulatory Shocks:</span> SEC enforcement actions crash COIN 15-25% instantly. Favorable rulings scale it 20%.</div>
                                </li>
                                <li className="flex gap-3 text-xs text-gray-400 leading-relaxed items-start">
                                    <FiCheck className="text-yellow-500 mt-1 shrink-0" />
                                    <div><span className="text-white font-bold">The Bull Market Ride:</span> When Bitcoin breaks all-time highs on massive volume, buy COIN monthly calls. It leverages BTC moves 2-3x for +150-300% structural runs.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </StandardSection>            

            {/* SECTIONS: PLTR */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 lg:order-2">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">PLTR — The AI Pure Play</h2>
                            <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest">AIP Commercial Hypergrowth</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Unlike NVDA (hardware), PLTR is a pure-play AI analytics firm. Its U.S. Commercial segment (AIP) is growing 55-70% annually. It recently hit the S&P 500 and is valued entirely on its AIP growth.
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Earnings Scenario</TableHead>
                                        <TableHead className="text-white">Stock Move</TableHead>
                                        <TableHead className="text-blue-500">Options</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { s: "AIP commercial beats 60%+", m: "+12-20% 🚀", o: "Calls +200-400%" },
                                        { s: "Commercial beats, Gov flat", m: "+6-10%", o: "Calls +100-180%" },
                                        { s: "Commercial misses (<40%)", m: "-10-15% 📉", o: "Puts +180-300%" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Scenario" className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{row.s}</TableCell>
                                            <TableCell label="Stock" className={`font-black text-xs ${row.m.includes('-') ? 'text-red-500' : 'text-white'}`}>{row.m}</TableCell>
                                            <TableCell label="Options" className="text-blue-500 text-xs font-bold italic">{row.o}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="space-y-8 lg:order-1">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1">Win Rate</p>
                                <p className="text-white text-2xl font-black italic">62.7%</p>
                            </div>
                            <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20 text-center">
                                <p className="text-blue-500/70 text-[9px] font-black uppercase tracking-widest mb-1">Avg Winner</p>
                                <p className="text-blue-500 text-2xl font-black italic">+108%</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">PLTR Catalysts</h4>
                            <div className="p-5 border border-white/10 rounded-xl bg-white/[0.02]">
                                <h5 className="font-bold text-xs uppercase tracking-widest text-white mb-2">Post-Earnings AIP Momentum Play</h5>
                                <p className="text-gray-400 text-xs leading-relaxed mb-3">When U.S. Commercial AIP beats 55%+ growth, wait 30 minutes post-open and enter calls for 3-5 day momentum blocks. E.g. Q3 2024: AIP hit 54%, stock gapped 14.8%. $72 calls ran +181% across 4 days.</p>
                            </div>
                            <div className="p-5 border border-white/10 rounded-xl bg-white/[0.02]">
                                <h5 className="font-bold text-xs uppercase tracking-widest text-white mb-2">Government Contracts</h5>
                                <p className="text-gray-400 text-xs leading-relaxed mb-3">DoD contract drops spike it 5-10% intraday. Keep watch on defense budget headlines for AI integration.</p>
                            </div>
                        </div>
                        <p className="text-red-500 text-xs uppercase tracking-widest font-black flex gap-2">
                            <FiAlertTriangle/> Valued at 60-80x revenue. High sentiment sensitivity = severe correction if growth stalls.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* Combined Strategy Map */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Portfolio Framework" title="Combined Capital Allocation" align="center" className="mb-12" />
                <div className="max-w-4xl mx-auto">
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Market Condition</TableHead>
                                    <TableHead>IWM</TableHead>
                                    <TableHead>QQQ</TableHead>
                                    <TableHead>COIN</TableHead>
                                    <TableHead>PLTR</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { m: "Rate cut cycle", i: "30% ✅", q: "30%", c: "20%", p: "20%" },
                                    { m: "AI bull market", i: "15%", q: "25%", c: "15%", p: "45% ✅", sc: "bg-blue-500/5"},
                                    { m: "Crypto bull market", i: "15%", q: "20%", c: "50% ✅", p: "15%", sc: "bg-yellow-500/5" },
                                    { m: "Risk-off/uncertainty", i: "50% ✅", q: "50%", c: "0% ❌", p: "0% ❌" },
                                    { m: "Normal market", i: "25%", q: "35%", c: "20%", p: "20%" }
                                ].map((row, idx) => (
                                    <TableRow key={idx} className={row.sc || ""}>
                                        <TableCell label="Condition" className="text-gray-400 text-xs font-bold uppercase tracking-widest">{row.m}</TableCell>
                                        <TableCell label="IWM" className={`text-xs font-bold ${row.i.includes('✅') ? 'text-green-500' : 'text-gray-400'}`}>{row.i}</TableCell>
                                        <TableCell label="QQQ" className="text-white text-xs font-bold">{row.q}</TableCell>
                                        <TableCell label="COIN" className={`text-xs font-bold ${row.c.includes('✅') ? 'text-yellow-500' : row.c.includes('❌') ? 'text-red-500' : 'text-gray-400'}`}>{row.c}</TableCell>
                                        <TableCell label="PLTR" className={`text-xs font-bold ${row.p.includes('✅') ? 'text-blue-500' : row.p.includes('❌') ? 'text-red-500' : 'text-gray-400'}`}>{row.p}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mt-4">
                        * Percentages represent option budget weighting across these 4 specific identifiers
                    </p>
                </div>
            </StandardSection>

            {/* Risk Master */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Safety Rules" title="Hard Risk Limits" align="center" className="mb-12" />
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card variant="glass" className="p-6 border-white/10 bg-white/[0.02]">
                        <h4 className="font-black text-white uppercase tracking-widest text-xs mb-1">IWM</h4>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black mb-4">Max Sizing: Full 2% | Stop: 27-30%</p>
                        <p className="text-gray-400 text-xs leading-relaxed"><span className="text-brand-500 font-bold">Key Rule:</span> Check the IWM/SPY relative ratio map first before deploying.</p>
                    </Card>
                    <Card variant="glass" className="p-6 border-white/10 bg-white/[0.02]">
                        <h4 className="font-black text-white uppercase tracking-widest text-xs mb-1">QQQ</h4>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black mb-4">Max Sizing: Full 2% | Stop: 25-28%</p>
                        <p className="text-gray-400 text-xs leading-relaxed"><span className="text-brand-500 font-bold">Key Rule:</span> Respect the NVDA anchor. It dictates broader intra-day moves.</p>
                    </Card>
                    <Card variant="glass" className="p-6 border-red-500/20 bg-red-500/5">
                        <h4 className="font-black text-yellow-500 uppercase tracking-widest text-xs mb-1">COIN</h4>
                        <p className="text-red-500 text-[10px] uppercase tracking-widest font-black mb-4">Max Sizing: 1% MAX ❌ | Stop: 40-45%</p>
                        <p className="text-gray-400 text-xs leading-relaxed"><span className="text-red-400 font-bold">Key Rule:</span> Check BTC price movement before issuing any options trade.</p>
                    </Card>
                    <Card variant="glass" className="p-6 border-blue-500/20 bg-blue-500/5">
                        <h4 className="font-black text-blue-500 uppercase tracking-widest text-xs mb-1">PLTR</h4>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black mb-4">Max Sizing: 1.5% | Stop: 35-40%</p>
                        <p className="text-gray-400 text-xs leading-relaxed"><span className="text-blue-400 font-bold">Key Rule:</span> Commercial AIP Growth rate dictates the survival of options swings.</p>
                    </Card>
                </div>
            </StandardSection>

            {/* FAQ */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto pb-10">
                    <SectionHeader label="Knowledge Base" title={<>Growth Tracker <span className="text-brand-500">FAQ</span></>} align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "Why does IWM underperform SPY during rate hike cycles?", a: "Small companies typically have more floating-rate debt. When interest rates rise, their debt service costs increase instantly, compressing margins compared to large-caps locked into cheap debt." },
                            { q: "Should I trade COIN over an actual Bitcoin ETF?", a: "COIN heavily amplifies standard BTC moves (acting as a 2-3x leveraged vehicle), creating explosive options premiums. Stick to an ETF (IBIT) if you want non-leveraged pure exposure rather than extreme options volatility." },
                            { q: "What makes PLTR different from MSFT AI?", a: "MSFT builds existing mass-market AI tools (Copilots). PLTR builds complex, deeply integrated organizational analytics logic directly linking raw data backends into defense/industrial workflows." },
                            { q: "When is the best time of year to hit IWM?", a: "Late December (January effect tax-loss reversals), onset periods of Fed rate cuts, and post-election resolutions (reduced domestic anxiety)." },
                            { q: "Can beginners trade COIN or PLTR?", a: "NO. Both demand 12+ months of direct experience. COIN's 150% implied volatility metrics will trigger account panic during standard fluctuations. Start with broad QQQ sweeps or AAPL." }
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links */}
                <div className="max-w-6xl mx-auto mt-20 pt-20 border-t border-white/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Trading Ecosystem</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "NVDA Options", path: "/nvda-options-signals" },
                            { title: "SPY Options", path: "/spy-options-signals" },
                            { title: "Risk Management Guide", path: "/options-signals-risk-management" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
                            { title: "Trading Psychology", path: "/trading-psychology" },
                            { title: "Options Profit Calculator", path: "/options-profit-calculator" },
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
                    title="Trade the Growth Portfolio"
                    subtitle={<>Stop guessing on tech rotation and momentum.<br />✅ Precise IWM Cycles ✅ Optimized QQQ Flow ✅ Volatile AI/Crypto Exits</>}
                />
            </div>
        </div>
    );
};

export default IwmOptionsSignals;
