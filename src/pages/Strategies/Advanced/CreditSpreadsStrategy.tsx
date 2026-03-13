import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap, FiShield, FiTrendingDown, FiClock, FiDollarSign, FiPercent } from 'react-icons/fi';
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

const CreditSpreadsStrategy = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Credit Spreads Strategy Guide | Consistent Options Income</title>
                <meta name="description" content="Master Credit Spreads: Bull Put and Bear Call strategies. Learn how to generate consistent income with defined risk and high probability of profit." />
                <link rel="canonical" href="https://onlyoptions.us/credit-spreads-strategy" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Master Strategy Guide"
                    title={<>Credit Spreads <span className="text-brand-500">Strategy</span> Guide</>}
                    description="The Strategy That Changed Everything for Retail Traders 💰"
                    align="center"
                    className="mb-12"
                />

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-20 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Win Rate", value: "65-75%" },
                        { label: "Monthly Target", value: "3-5%" },
                        { label: "Risk Profile", value: "Defined" },
                        { label: "Best Conditions", value: "IV Rank 30%+" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-brand-500 font-black mb-1 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Credit spreads are the single most important strategy for transitioning from a losing options buyer to a consistent, profitable trader. This guide covers everything — bull put spreads, bear call spreads, setup rules, management, and the exact signals we send our members.
                    </p>
                </div>

                {/* What is a Credit Spread */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What Is a Credit Spread?</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Definition & Dynamics</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                             <p>
                                A credit spread involves selling one option and buying another at a different strike, in the same expiration. You collect a net credit upfront — that credit is your maximum profit.
                             </p>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                 <div className="p-6 bg-brand-500/10 border border-brand-500/20 rounded-xl">
                                     <h4 className="text-brand-500 font-black uppercase tracking-widest text-[10px] mb-2 flex items-center gap-2">
                                         <FiTrendingUp className="w-4 h-4" /> Bull Put Spread
                                     </h4>
                                     <p className="text-gray-300 text-xs leading-relaxed">Bullish/neutral bet: Sell a put, buy a lower put.</p>
                                 </div>
                                 <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                                     <h4 className="text-red-500 font-black uppercase tracking-widest text-[10px] mb-2 flex items-center gap-2">
                                         <FiTrendingDown className="w-4 h-4" /> Bear Call Spread
                                     </h4>
                                     <p className="text-gray-300 text-xs leading-relaxed">Bearish/neutral bet: Sell a call, buy a higher call.</p>
                                 </div>
                             </div>
                             <p className="mt-6 italic text-sm text-brand-400">
                                Why "credit"? Because money flows INTO your account the moment you place the trade. You get paid first, then manage the trade.
                             </p>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Credit Spreads vs. Naked Buying:</h4>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Factor</TableHead>
                                        <TableHead>Buying Options</TableHead>
                                        <TableHead className="text-brand-500">Credit Spreads</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Win Rate", b: "35-45% typical", c: "65-75% typical" },
                                        { f: "Time Decay", b: "Works AGAINST you", c: "Works FOR you" },
                                        { f: "Direction", b: "Must be precise", c: "Can be slightly wrong" },
                                        { f: "Max Loss", b: "100% of premium", c: "Defined, pre-set" },
                                        { f: "Profit Cond.", b: "Stock must MOVE", c: "Stock can stay still" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Factor" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="Buying" className="text-gray-400 text-xs">{row.b}</TableCell>
                                            <TableCell label="Spreads" className={`text-xs ${row.f === "Win Rate" ? "text-brand-500 font-bold" : "text-white"}`}>{row.c}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Part 1: Bull Put Spread */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Part 1: Bull Put Spread</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Most Common OnlyOptions Signal</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Sell a put at a higher strike, buy a put at a lower strike. You collect a credit. You profit if the stock stays ABOVE your short put strike at expiration.
                        </p>
                        
                        <div className="space-y-4">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs italic">Entry Criteria:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                                {[
                                    "Stock in uptrend (above 20/50 MA)",
                                    "Strong support level below price",
                                    "IV Rank 30%+ (premium value)",
                                    "No earnings within 21 days",
                                    "Structure spread BELOW support"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-center">
                                        <FiCheck className="text-brand-500 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                         <h4 className="text-center text-white font-black uppercase tracking-[0.2em] text-[10px] italic">P/L Diagram: Bull Put Spread</h4>
                         <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 font-mono text-[10px] text-gray-500 leading-none">
                            <div className="space-y-1">
                                <p className="text-brand-500 font-bold">Max Profit (credit collected)</p>
                                <p>————————————————</p>
                                <p className="pl-32">\</p>
                                <p className="pl-36">\</p>
                                <p>————————————————————  ← Short Put Strike</p>
                                <p className="pl-44">\</p>
                                <p className="pl-48">\</p>
                                <p className="pl-52">————  Max Loss Zone</p>
                            </div>
                         </Card>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                        <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-6 italic text-center">Setup Rules</h4>
                        <div className="space-y-4">
                             {[
                                 { l: "Delta Target", v: "30 Delta (~70% Win)" },
                                 { l: "Expiration", v: "30-45 DTE (Theta Sweet Spot)" },
                                 { l: "Credit Target", v: "Min 30% of Width" },
                                 { l: "Spread Width", v: "$5 - $10 (Standard)" }
                             ].map((item, i) => (
                                 <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                     <span className="text-gray-500 text-[10px] font-bold uppercase">{item.l}</span>
                                     <span className="text-white font-black text-xs italic">{item.v}</span>
                                 </div>
                             ))}
                        </div>
                    </Card>

                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 italic text-center">Position Sizing</h4>
                        <div className="space-y-4 text-center">
                            <p className="text-brand-500 font-black text-2xl tracking-tighter">MAX 2%</p>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                Never risk more than 2% of your account on a single spread. 
                                <br/><span className="text-white">Example: $10K account = $200 max risk.</span>
                            </p>
                        </div>
                    </Card>

                    <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                        <h4 className="text-brand-500 font-black uppercase tracking-widest text-xs mb-6 italic text-center">Real Case: AAPL</h4>
                        <div className="space-y-4">
                             <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                 <p className="text-gray-500 text-[9px] uppercase font-bold mb-1">Trade:</p>
                                 <p className="text-white text-[11px]">$168P / $163P Bull Put</p>
                             </div>
                             <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                                 <p className="text-gray-500 text-[9px] uppercase font-bold mb-1">Credit:</p>
                                 <p className="text-brand-500 text-[11px] font-bold">+$1.65 ($165 collected)</p>
                             </div>
                             <div className="p-3 bg-brand-500/10 rounded-lg border border-brand-500/30">
                                 <p className="text-brand-500 text-[9px] uppercase font-bold mb-1">Outcome:</p>
                                 <p className="text-white text-[11px] font-black italic">+$83 Profit (18 Days) ✅</p>
                             </div>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Management Scenarios */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Management" title="Managing the Credit Spread" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { t: "Scenario 1: Winning", d: "Close at 50% profit or 21 DTE regardless of level. Never chase the last few cents.", i: <FiCheck className="text-green-500" /> },
                        { t: "Scenario 2: Threatened", d: "Stock hits short strike? Assess support. If brokwn, CLOSE immediately. Don't 'hope'.", i: <FiActivity className="text-brand-500" /> },
                        { t: "Scenario 3: Rolling", d: "Roll if 21+ DTE remains for a net credit. Roll out/away to give trade more room.", i: <FiShield className="text-brand-400" /> },
                        { t: "Scenario 4: Stop loss", d: "Stop loss at 2x credit received. If it hits, the thesis is dead. Exit and reset.", i: <FiAlertTriangle className="text-red-500" /> }
                    ].map((item, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                {item.i}
                            </div>
                            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4 italic">{item.t}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase leading-relaxed tracking-wider">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Part 2: Bear Call Spread */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 lg:order-2">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Part 2: Bear Call Spread</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Profiting from Weakness</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Sell a call at a lower strike, buy a call at a higher strike. Collect a credit. Profit if stock stays BELOW your short call strike.
                        </p>
                        <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl">
                             <h4 className="text-red-500 font-black uppercase tracking-widest text-xs mb-4 italic">When We Signal Bear Calls:</h4>
                             <ul className="space-y-3 m-0">
                                 {["Stock in downtrend / rejection at resistance", "Clear resistance (3+ touches)", "IV Rank 30%+ elevated", "No incoming catalysts (earnings/FDA)"].map((item, i) => (
                                     <li key={i} className="flex gap-3 text-xs text-gray-300 font-bold uppercase tracking-wider">
                                         <FiTrendingDown className="text-red-500 shrink-0 mt-0.5" /> {item}
                                     </li>
                                 ))}
                             </ul>
                        </div>
                    </div>
                    
                    <div className="space-y-8 lg:order-1">
                         <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                             <h4 className="text-brand-500 font-black mb-8 uppercase tracking-widest text-xs italic text-center">Case Study: NVDA Resistance</h4>
                             <div className="space-y-6">
                                 <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                     <div>
                                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Trade Structure</p>
                                         <p className="text-white text-sm">$500C / $510C Bear Call</p>
                                     </div>
                                     <div className="text-right">
                                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Net Credit</p>
                                         <p className="text-brand-500 font-black text-sm">+$3.20 ($320)</p>
                                     </div>
                                 </div>
                                 <p className="text-xs text-gray-400 leading-relaxed italic">
                                     "NVDA was overextended at $467. Resistance at $500 was strong. IV Rank was 58%. The stock pulled back to $430 over 3 weeks."
                                 </p>
                                 <div className="p-4 bg-brand-500/10 rounded-xl border border-brand-500/30 text-center">
                                     <p className="text-white text-xs font-black italic tracking-widest">RESULT: +$160 Profit in 14 Days ✅</p>
                                 </div>
                             </div>
                         </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Income System */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="System" title="The Credit Spread Income System" align="center" className="mb-20" />
                
                <div className="max-w-4xl mx-auto space-y-16">
                     <div className="text-center space-y-4">
                         <p className="text-gray-400 text-lg leading-relaxed">
                            Run credit spreads systematically every month like a business collecting rent.
                         </p>
                         <div className="flex flex-wrap justify-center gap-4 py-8">
                             {["Week 1: Entry", "Weeks 2-3: Theta Decay", "Week 4: Exit & Reset"].map((step, i) => (
                                 <div key={i} className="flex items-center gap-3">
                                     <span className="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 text-xs font-black">{i+1}</span>
                                     <span className="text-white font-bold text-xs uppercase tracking-widest">{step}</span>
                                     {i < 2 && <FiArrowRight className="text-gray-700 mx-2" />}
                                 </div>
                             ))}
                         </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { l: "Level 1 — $5K Account", t: "Target: $200-$350/mo", d: "2 index spreads, $5-wide", c: "border-white/5" },
                            { l: "Level 2 — $15K Account", t: "Target: $600-$900/mo", d: "5-6 spreads, Index + Stocks", c: "border-brand-500/20 bg-brand-500/5" },
                            { l: "Level 3 — $50K Account", t: "Target: $2.5K-$4K/mo", d: "12-15 spreads, Diversified", c: "border-brand-500/40", co: "text-brand-500" }
                        ].map((level, i) => (
                            <Card key={i} variant="glass" className={`p-8 ${level.c} text-center flex flex-col justify-between`}>
                                <div className="space-y-4">
                                     <h5 className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{level.l}</h5>
                                     <p className={`text-sm font-black italic ${level.co || 'text-white'}`}>{level.t}</p>
                                </div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-6">{level.d}</p>
                            </Card>
                        ))}
                     </div>
                </div>
            </StandardSection>

            {/* Deep Dive & Greeks */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-12">
                         <SectionHeader label="Strategy" title="Strike Selection Deep Dive" align="left" className="mb-0" />
                         <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Target Delta</TableHead>
                                        <TableHead>Prob. of Profit</TableHead>
                                        <TableHead>Credit Target</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { d: "16 Delta", p: "~84%", c: "15-20% of width", r: "Conservative" },
                                        { d: "30 Delta", p: "~70%", c: "25-35% of width", r: "Balanced", co: "text-brand-500 font-black italic" },
                                        { d: "45 Delta", p: "~55%", c: "40-50% of width", r: "Aggressive" }
                                    ].map((row, i) => (
                                        <TableRow key={i} className={row.r === "Balanced" ? "bg-brand-500/5" : ""}>
                                            <TableCell label="Delta" className="text-white text-xs font-bold">{row.d}</TableCell>
                                            <TableCell label="Prob." className="text-gray-400 text-xs">{row.p}</TableCell>
                                            <TableCell label="Credit" className={`text-xs ${row.co || 'text-gray-300'}`}>{row.c}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                         </Card>
                         <div className="p-8 bg-gray-950/60 border border-white/5 rounded-2xl">
                             <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-4 italic">Support/Resistance Method:</h4>
                             <p className="text-gray-400 text-xs leading-relaxed italic">
                                "Place Bull Puts just BELOW major support. Place Bear Calls just ABOVE major resistance. Combining technical levels with the 30-delta rule creates the strongest possible option setup."
                             </p>
                         </div>
                    </div>

                    <div className="space-y-12">
                         <SectionHeader label="Science" title="The Greeks in Credit Spreads" align="left" className="mb-0" />
                         <div className="grid grid-cols-1 gap-4">
                            {[
                                { g: "Delta", d: "Your directional exposure. Bull Puts are (+) delta, Bear Calls are (-). Keep it small.", i: <FiTarget className="text-brand-500" /> },
                                { g: "Theta", d: "Your daily profit engine. Accelerates as expiration approaches — 30-45 DTE is the heart.", i: <FiClock className="text-brand-500" /> },
                                { g: "Vega", d: "Volatility risk. Spreads have (-) vega, hurt by VIX spikes. Enter during high IV Rank.", i: <FiActivity className="text-brand-500" /> },
                                { g: "Gamma", d: "Your enemy near expiration. Rapid swings near expiry is why we close at 21 DTE.", i: <FiAlertTriangle className="text-red-500" />, co: "text-red-500 italic font-black" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 items-center">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {item.i}
                                    </div>
                                    <div className="space-y-1">
                                         <h5 className={`uppercase tracking-widest text-[10px] ${item.co || 'text-white'}`}>{item.g}</h5>
                                         <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            </StandardSection>

            {/* Reading Signals & Mistakes */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="System" title="Reading OnlyOptions Credit Spread Signals" align="center" className="mb-12" />
                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 max-w-5xl mx-auto mb-24">
                    <Table>
                        <TableBody>
                            {[
                                { f: "Type", e: "Bull Put Spread (Neutral/Bullish)", a: "text-white" },
                                { f: "Short Strike", e: "$380P (Sell this option)", a: "text-brand-500 font-black italic" },
                                { f: "Long Strike", e: "$375P (Buy this protection)", a: "text-white" },
                                { f: "Credit Target", e: "$1.65 - $1.85 net collection", a: "text-brand-400" },
                                { f: "Max Loss", e: "Width - Credit ($325/spread in this case)", a: "text-red-400" },
                                { f: "Support Level", e: "$382 (Technical reason for strike)", a: "text-gray-400 font-bold" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                    <TableCell label="Instruction" className={`text-sm ${row.a}`}>{row.e}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>

                <SectionHeader label="Pitfalls" title="Common Credit Spread Mistakes" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {[
                        { t: "Collecting Too Little Premium", d: "If it pays < 30% of width, risk/reward is broken. Don't trade for pennies." },
                        { t: "Wrong Expiration (Weeklies)", d: "Weekly spreads are gambling. Theta needs 30-45 DTE to decay properly." },
                        { t: "No Stop Loss Plan", d: "Pre-define your exit. 'Holding and hoping' turns small losses into account burners." },
                        { t: "Ignoring Earnings", d: "A single earnings gap can blow both strikes in seconds. Check the calendar." },
                        { t: "Over-Concentration", d: "3 tech spreads = 1 big correlated bet. Diversify across sectors to reduce risk." },
                        { t: "Chasing High Delta", d: "45-delta spreads pay more but win less often. High credits ignore probability rules." }
                    ].map((mistake, i) => (
                        <Card key={i} variant="glass" className="p-6 border-red-500/10 bg-gray-950/40 hover:border-brand-500/30 transition-all">
                             <h4 className="text-white font-black mb-3 uppercase tracking-widest text-[10px] italic flex items-center min-h-[35px]">
                                 <FiAlertTriangle className="text-red-500 mr-2 shrink-0" /> {mistake.t}
                             </h4>
                             <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                                 {mistake.d}
                             </p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Testimonials */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Success" title="Member Results" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                     {[
                        { q: "Credit spreads on SPY every month. 14 consecutive wins. $1,200/month consistent income on my $30K account. Game changer.", a: "Tom W., Arizona" },
                        { q: "Switched from buying calls to bull put spreads. My win rate went from 38% to 71%. I actually sleep at night now.", a: "Amanda R., Georgia" },
                        { q: "The MSFT bear call spread signal in August — collected $2.85, stock never got close to my strike. Easiest trade of my life.", a: "Kevin L., Washington" }
                     ].map((t, i) => (
                        <Card key={i} variant="institutional" className="p-8 border-white/5 bg-gray-950/40">
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{t.q}"</p>
                            <span className="text-brand-500 font-black uppercase tracking-widest text-[10px]">— {t.a}</span>
                        </Card>
                     ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Summary" title="Quick Reference Cheat Sheet" align="center" className="mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <Card variant="glass" className="p-10 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-8 uppercase tracking-widest text-sm italic">Bull Put Checklist</h4>
                            <ul className="space-y-4">
                                {[
                                    "Stock above both 20 and 50-day MA",
                                    "Strong support below current price",
                                    "IV Rank above 30%",
                                    "No earnings within 21 days",
                                    "Collect minimum 30% of spread width",
                                    "Size to risk max 2% of account"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-10 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-brand-500 font-black mb-8 uppercase tracking-widest text-sm italic">Management Rules</h4>
                            <ul className="space-y-4">
                                {[
                                    "Close at 50% profit — ALWAYS ✅",
                                    "Close at 21 DTE — ALWAYS ✅",
                                    "Stop loss at 2x credit received — ALWAYS ✅",
                                    "Roll only once if threatened ✅",
                                    "Never hold through earnings ✅"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300">
                                        <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    {/* FAQ */}
                    <div className="max-w-4xl mx-auto py-24">
                        <SectionHeader label="Knowledge Base" title="Credit Spreads FAQ" align="center" className="mb-20" />
                        <div className="space-y-4">
                            {[
                                { q: "What is the best spread width for beginners?", a: "$5.00 wide spreads on SPY or major stocks like MSFT/AAPL. It provides enough premium to make the trade worthwhile while keeping the total risk manageable." },
                                { q: "Can I do credit spreads with a $2,000 account?", a: "Yes. Using $5.00 wide spreads, a single contract requires $500 collateral. You should not trade more than 1-2 contracts at a time." },
                                { q: "Why close at 50% instead of waiting for 100%?", a: "The 'law of diminishing returns.' It takes 80% of the time to collect the last 20% of the premium. Closing early drastically increases your win rate and capital turnover." },
                                { q: "What happens if I get assigned?", a: "With vertical spreads, your long option covers the assignment. Usually, you just close the spread for its maximum loss or the current market value. It's not a disaster if managed." }
                            ].map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>

                    {/* Internal Links Grid */}
                    <div className="max-w-6xl mx-auto py-20 border-t border-white/5 text-center">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Strategy Ecosystem</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                { title: "Iron Condors", path: "/strategies/iron-condor" },
                                { title: "Butterfly Spreads", path: "/strategies/butterfly-spreads" },
                                { title: "Calendar Spreads", path: "/strategies/calendar-spreads" },
                                { title: "Covered Calls", path: "/strategies/covered-calls" },
                                { title: "Protective Puts", path: "/strategies/protective-puts" },
                                { title: "Options Greeks", path: "/options-greeks-explained" },
                                { title: "Implied Volatility", path: "/understanding-implied-volatility" },
                                { title: "Performance", path: "/performance" }
                            ].map((link, i) => (
                                <Link key={i} to={link.path} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all uppercase tracking-widest">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="pt-20 border-t border-white/5 text-center text-[10px] text-gray-600 space-y-4">
                        <p className="font-black uppercase tracking-[0.3em]">DISCLAIMER</p>
                        <p className="max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                            Options trading involves substantial risk. Credit spreads carry risk of maximum loss equal to the spread width minus credit received. OnlyOptions signals are for educational purposes. Always trade with capital you can afford to lose.
                        </p>
                    </div>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA 
                   title="Ready to Collect Your First Credit?"
                   subtitle={<>Join OnlyOptions to receive credit spread signals with:<br/>✅ Strike Selection ✅ Support/Resistance Analysis ✅ IV Rank Verification ✅ Pre-Calculated Exit Plan</>}
                />
            </div>
        </div>
    );
};

export default CreditSpreadsStrategy;
