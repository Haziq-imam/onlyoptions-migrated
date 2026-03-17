import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiX, FiAlertTriangle, FiTarget, FiTrendingUp, FiActivity, FiShield, FiPercent, FiArrowRight, FiClock } from 'react-icons/fi';
import { LuCalculator } from 'react-icons/lu';
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
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-4 pt-6 whitespace-pre-line">
                {answer}
            </div>
        </details>
    );
};

const OptionsSignalsPositionSizing = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Position Sizing Guide for Options: 2% Rule Explained 2026</title>
                <meta name="description" content="Learn proper position sizing for options trading. Master the 2% rule, calculate max contracts, adjust for account growth, and avoid the #1 mistake that destroys accounts." />
                <link rel="canonical" href="https://onlyoptions.us/position-sizing-guide-options" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8 text-center">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                        <FiShield className="text-brand-500" /> Capital Protection
                    </span>
                    <SectionHeader
                        label="Risk Discipline"
                        title={<>Position Sizing Guide <span className="text-brand-500">for Options</span></>}
                        description="Master the 2% Rule and Protect Your Capital"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Position Sizing is THE difference between success and failure. You can have a 70% win rate and still blow up your account with poor position sizing. You can have a 50% win rate and become wealthy with perfect position sizing. It is that important.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        This guide teaches you the 2% rule, how to calculate exact position sizes, and how to adjust as your account grows.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Golden Rule", value: "2% Risk" },
                        { label: "Max Heat", value: "8% Total" },
                        { label: "0DTE Risk", value: "1% Risk" },
                        { label: "Min Account", value: "$5,000" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className="text-white font-black mb-1 text-2xl tracking-tight uppercase italic">{stat.value}</h4>
                            <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* The 2% Rule Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">The 2% Rule</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Foundation of Position Sizing</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Never risk more than 2% of your total account value on any single trade. This is measured as the maximum dollar amount you will lose if your stop-loss is hit.
                        </p>
                        <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">Example:</h4>
                            <ul className="space-y-3">
                                <li className="text-gray-400 text-sm flex justify-between gap-4"><span className="font-bold">Account size:</span> <span className="text-white">$10,000</span></li>
                                <li className="text-gray-400 text-sm flex justify-between gap-4"><span className="text-brand-400 font-bold italic">2% Risk Limit:</span> <span className="text-brand-500 font-black">$200 Max Loss</span></li>
                            </ul>
                            <p className="text-gray-500 text-[11px] mt-6 italic leading-relaxed">
                                If stop-loss is hit, you lose $200 (not more, not less).
                            </p>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h4 className="text-xl font-black italic uppercase text-white italic">Why 2%?</h4>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Survive Any Losing Streak</p>
                        </div>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Risk Per Trade</TableHead>
                                        <TableHead>10 Losses</TableHead>
                                        <TableHead>20 Losses</TableHead>
                                        <TableHead className="text-brand-500">Account Left</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { r: "2%", l10: "Down 18%", l20: "Down 33%", final: "$6,700 ✓" },
                                        { r: "5%", l10: "Down 40%", l20: "Down 64%", final: "$3,600" },
                                        { r: "10%", l10: "Down 65%", l20: "Down 88%", final: "$1,200 ✗" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Risk" className="text-white font-black">{row.r}</TableCell>
                                            <TableCell label="10 Losses" className="text-gray-400 text-xs">{row.l10}</TableCell>
                                            <TableCell label="20 Losses" className="text-gray-400 text-xs">{row.l20}</TableCell>
                                            <TableCell label="Surviving" className={`font-black text-xs ${row.final.includes('✓') ? 'text-green-500' : 'text-red-500'}`}>{row.final}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <p className="text-gray-400 text-xs leading-relaxed border-l-2 border-brand-500 pl-4 mt-6">
                            With 2% risk, even 20 straight losses (virtually impossible with OnlyOptions) only costs 33% of your account. You can recover. With 10% risk, you are destroyed.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* Calculating Position Size Section */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="The Formula" title="Step-by-Step Calculation" align="center" className="mb-16" />
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        {[
                            { step: "Step 1", t: "Max Dollar Risk", formula: "Max Risk = Account Size × 2%", ex: "$10,000 × 0.02 = $200" },
                            { step: "Step 2", t: "Risk Per Contract", formula: "(Entry - Stop) × 100", ex: "($2.40 - $1.65) × 100 = $75" },
                            { step: "Step 3", t: "Max Contracts", formula: "Max Risk ÷ Risk Per Contract", ex: "$200 ÷ $75 = 2.67 → 2 Contracts" }
                        ].map((s, i) => (
                            <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <span className="text-brand-500 font-black uppercase tracking-widest text-[10px] w-12 shrink-0 pt-1">{s.step}</span>
                                <div className="space-y-1">
                                    <h5 className="text-white font-black uppercase tracking-widest text-xs">{s.t}</h5>
                                    <p className="text-brand-400 text-[10px] font-bold uppercase tracking-widest">{s.formula}</p>
                                    <p className="text-gray-500 text-[10px] italic">{s.ex}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Card variant="institutional" className="p-8 border-brand-500/20 bg-brand-500/5 flex flex-col justify-between">
                        <div>
                            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2 italic">
                                <LuCalculator size={18} className="text-brand-500" /> Walkthrough Example
                            </h4>
                            <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500">Account Value</span>
                                    <span className="text-white font-black">$10,000</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500">Entry / Stop</span>
                                    <span className="text-white font-black">$2.40 / $1.65</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2 text-brand-500">
                                    <span className="font-black">Max 2% Risk</span>
                                    <span className="font-black">$200.00</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500">Risk/Contract</span>
                                    <span className="text-white font-black">$75.00</span>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <span className="text-white font-black italic">Max Contracts</span>
                                    <span className="text-brand-500 font-black text-2xl">2</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 p-4 bg-black/40 border border-red-500/20 rounded-xl">
                            <p className="text-red-400 text-[9px] font-black uppercase tracking-[0.2em] mb-1 italic">Rounding Rule:</p>
                            <p className="text-gray-400 text-[10px] leading-relaxed italic">
                                3 contracts would risk $225, exceeding your $200 limit. <span className="text-white font-bold underline">Always round down.</span>
                            </p>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Account Tiers Table Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Strategic Levels" title="Sizing by Account Tier" align="center" className="mb-12" />
                <div className="max-w-5xl mx-auto">
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Account Size</TableHead>
                                    <TableHead>2% Risk</TableHead>
                                    <TableHead>Typical Risk</TableHead>
                                    <TableHead className="text-brand-500">Contracts</TableHead>
                                    <TableHead>Profile</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { a: "$1,000", r: "$20", s: "$75", c: "0", n: "Too Small" },
                                    { a: "$2,000", r: "$40", s: "$75", c: "0", n: "Small Cap" },
                                    { a: "$5,000", r: "$100", s: "$75", c: "1", n: "Beginner" },
                                    { a: "$10,000", r: "$200", s: "$75", c: "2", n: "Ideal Base" },
                                    { a: "$25,000", r: "$500", s: "$75", c: "6", n: "Comfort" },
                                    { a: "$50,000", r: "$1,000", s: "$75", c: "13", n: "Professional" }
                                ].map((row, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell label="Account" className="text-white font-black">{row.a}</TableCell>
                                        <TableCell label="2% Risk" className="text-brand-400 font-bold">{row.r}</TableCell>
                                        <TableCell label="Signal Risk" className="text-gray-400 text-xs italic">{row.s}</TableCell>
                                        <TableCell label="Contracts" className="text-white font-black">{row.c}</TableCell>
                                        <TableCell label="Profile" className="text-gray-500 text-[10px] uppercase font-bold tracking-widest italic">{row.n}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <div className="mt-8 p-6 bg-white/[0.02] border border-white/5 rounded-2xl max-w-3xl mx-auto text-center">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            <span className="text-brand-500 font-black italic uppercase tracking-widest text-xs mr-2">Pro Insight:</span> 
                            Accounts below $5,000 often cannot take signals legally while following the 2% rule. Focus on saving capital or trading low-delta/low-cost 0DTE plays initially.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* Adjusting Position Size Section */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Compounding" title="Growth Adjustments" align="left" className="mb-0" />
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-bold italic">
                            Wealth is built through the power of compounding. As your account grows, your position size increases relative to your balance, keeping risk identical at 2%.
                        </p>
                        <div className="space-y-4">
                            {[
                                { m: "Initial Phase", a: "$10,000", c: "2 Contracts" },
                                { m: "Phase 2 (+20%)", a: "$12,000", c: "3 Contracts" },
                                { m: "Phase 3 (+50%)", a: "$15,000", c: "4 Contracts" },
                                { m: "Scale Phase (+100%)", a: "$20,000", c: "5 Contracts" }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all">
                                    <span className="text-gray-500 font-black uppercase tracking-widest text-[9px]">{row.m}</span>
                                    <span className="text-white font-bold text-xs">{row.a}</span>
                                    <span className="text-brand-500 font-black text-xs uppercase italic">{row.c}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card variant="glass" className="p-8 border-brand-500/10 bg-gray-950/40 mt-12 lg:mt-24">
                         <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
                             <FiTrendingUp className="text-brand-500" /> Recalculation Rule
                         </h4>
                         <p className="text-gray-400 text-[11px] leading-relaxed mb-6 font-bold uppercase tracking-wider">
                            Update your constants after every 10% account growth.
                         </p>
                         <ul className="space-y-4 text-xs">
                            <li className="flex gap-3 text-gray-500 items-start italic">• $10,000 → $11,000: New Risk $220</li>
                            <li className="flex gap-3 text-gray-500 items-start italic">• $11,000 → $12,100: New Risk $242</li>
                            <li className="flex gap-3 text-gray-500 items-start italic">• Scale naturally to protect the base.</li>
                         </ul>
                    </Card>
                </div>
            </StandardSection>

            {/* Signal Categories Risk Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Adaptive Risk" title="Sizing by Strategy Type" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { t: "0DTE Scalps", r: "1% Risk", d: "High volatility and speed requires smaller sizing to survive swings.", icon: <FiClock className="text-red-500" /> },
                        { t: "Weeklies/Swings", r: "2% Risk", d: "Standard industry sizing. Time allows for higher precision holds.", icon: <FiActivity className="text-brand-500" /> },
                        { t: "High Confidence", r: "MAX 2%", d: "Never exceed 2% regardless of confidence levels. Protect the account.", icon: <FiTarget className="text-green-500" /> }
                    ].map((item, i) => (
                        <Card key={i} variant="institutional" className="p-8 border-white/5 bg-gray-950/60 text-center flex flex-col items-center">
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl shrink-0">{item.icon}</div>
                            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2 italic">{item.t}</h4>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4">{item.r}</p>
                            <p className="text-gray-400 text-[11px] leading-relaxed">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Conviction & Heat Section */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Systemic Risk" title="Portfolio Heat" align="left" className="mb-0" />
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Total risk exposure across all open trades. Never exceed <span className="text-white font-bold italic uppercase underline">8% total heat</span>.
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/10 bg-gray-950/40">
                             <Table>
                                <TableBody>
                                    {[
                                        { h: "0-4% Heat", a: "Aggressive Allocation OK" },
                                        { h: "4-6% Heat", a: "Standard Target Range" },
                                        { h: "6-8% Heat", a: "Maximum Danger Zone" },
                                        { h: "8%+ Heat", a: "IMMEDIATE POSITION FREEZE" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Level" className="text-brand-500 font-black uppercase text-[10px] italic">{row.h}</TableCell>
                                            <TableCell label="Action" className="text-gray-400 text-xs font-bold tracking-widest uppercase">{row.a}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                             </Table>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <SectionHeader label="Precision" title="Conviction-Based Scaling" align="left" className="mb-0" />
                        <div className="space-y-3 pt-4">
                            {[
                                { t: "3-Star Setup", r: "2.0% Risk", d: "Highest Probability" },
                                { t: "2-Star Setup", r: "1.0-1.5% Risk", d: "Standard Play" },
                                { t: "1-Star Setup", r: "0.5-1.0% Risk", d: "Speculative Scalp" }
                            ].map((row, i) => (
                                <div key={i} className="p-6 border border-white/5 bg-white/[0.02] rounded-3xl flex justify-between items-center hover:border-brand-500/10 transition-colors group">
                                    <div>
                                        <h5 className="text-white font-black uppercase tracking-widest text-[11px] mb-1 italic group-hover:text-brand-500 transition-colors">{row.t}</h5>
                                        <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{row.d}</p>
                                    </div>
                                    <span className="text-brand-500 font-black text-sm italic">{row.r}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Mistakes Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Red Flags" title="Position Sizing Failures" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        { t: "Rounding Up to 'Even Out'", d: "Trading 3 contracts when math says 2.67 violates the 2% rule. Always round down to protect the floor." },
                        { t: "The Sunk Cost Scale-In", d: "Adding to a losing position to 'lower the average' without recalculating total risk heat. Account suicide." },
                        { t: "Ignoring Beta Weighting", d: "Risking 2% on SPY and 2% on TSLA simultaneously when they move together. This is actually 4% heat on one direction." },
                        { t: "Winner's Hubris", d: "Scaling up to 5% risk because you have a 'hot hand' after a win streak. Variance always corrects." }
                    ].map((m, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-red-500/[0.02] border border-red-500/10 flex gap-6">
                            <FiX className="text-red-500 shrink-0 mt-1" size={20} />
                            <div className="space-y-2">
                                <h5 className="text-white font-black uppercase tracking-widest text-[11px] italic underline decoration-red-500/30">{m.t}</h5>
                                <p className="text-gray-400 text-xs leading-relaxed italic">{m.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* FAQ Section */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto pb-10">
                    <SectionHeader label="Advisory" title={<>Sizing <span className="text-brand-500">FAQ</span></>} align="center" className="mb-16" />
                    <div className="space-y-4">
                        {[
                            { q: "What if I cannot afford 1 contract at 2% risk?", a: "Do not take the trade. Forcing a trade with insufficient capital is the #1 cause of account failure. Wait for a cheaper signal or save more capital." },
                            { q: "Can I use 5% risk if I'm very certain?", a: "Strictly forbidden. Even 90% signals fail 10% of the time. The 2% rule exists to ensure those 10% of failures don't ruin your life." },
                            { q: "Should I reduce size after a drawdown?", a: "Your size automatically reduces because 2% of a $9k account is less than 2% of a $10k account. Stick to the math, it's already built-in." },
                            { q: "What if my calculation is 1.9 contracts?", a: "One contract only. Rounding up to 2 would put you at ~2.1% risk, which violates the ceiling." }
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links Navigation */}
                <div className="max-w-6xl mx-auto mt-20 pt-20 border-t border-white/5 text-center px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Discipline Resources</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "Risk Calculator", path: "/position-size-calculator" },
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "Options 101", path: "/options-trading-101" },
                            { title: "Performance", path: "/performance" },
                            { title: "Greeks Guide", path: "/options-greeks-explained" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "QQQ Signals", path: "/qqq-options-signals" },
                            { title: "FAQ", path: "/faq" },
                            { title: "Contact", path: "/contact" }
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
                    title="Stop Gambling, Start Sizing"
                    subtitle="Mirror institutional risk discipline. Join 1,200+ traders executing signals with professional precision."
                    className="bg-transparent"
                />
            </div>
        </div>
    );
};

export default OptionsSignalsPositionSizing;
