import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiAlertTriangle, FiShield, FiTrendingUp, FiActivity, FiTarget } from 'react-icons/fi';
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

const linksData = [
    { title: "Position size calculator", path: "/position-size-calculator" },
    { title: "Risk-reward calculator", path: "/risk-reward-calculator" },
    { title: "Options 101", path: "/options-trading-101" },
    { title: "How it works", path: "/how-it-works" },
    { title: "Get Access", path: "/membership" },
    { title: "Greeks explained", path: "/options-greeks-explained" },
    { title: "0DTE strategy", path: "/0dte-options-strategy-complete-guide" },
    { title: "Beginners guide", path: "/options-signals-for-beginners" },
    { title: "Performance", path: "/performance" },
    { title: "Risk disclaimer", path: "/risk-disclaimer" },
    { title: "Best brokers", path: "/best-brokers-for-options-trading" },
    { title: "FAQ", path: "/faq" }
];

const OptionsSignalsRiskManagement = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Options Trading Risk Management Guide | OnlyOptions Signals</title>
                <meta name="description" content="Learn professional risk management for options trading. Master the 2% rule, position sizing, stop-losses, portfolio heat, and drawdown management. Protect your capital." />
                <link rel="canonical" href="https://onlyoptions.us/options-signals-risk-management" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Education"
                    title={<>Options Signals Risk Management <span className="text-brand-500">Guide</span></>}
                    description="Professional Risk Management Strategies for Options Trading"
                    align="center"
                    className="mb-20"
                />

                <Card variant="glass" className="p-8 md:p-12 mb-20 border-white/5 bg-gray-950/40">
                    <h3 className="text-2xl font-black mb-6 tracking-tight text-white uppercase italic">RISK MANAGEMENT IS MORE IMPORTANT THAN FINDING GOOD TRADES</h3>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            The difference between profitable traders and those who blow up accounts is not signal quality — it is risk management. You can have a 70% win rate and still lose everything if you do not manage risk properly.
                        </p>
                        <p>
                            This guide teaches you the professional risk management framework used by successful options traders.
                        </p>
                    </div>
                </Card>

                {/* Golden Rules Summary */}
                <SectionHeader label="Framework" title="The Golden Rules" align="center" className="mb-12" />
                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-20">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Rule</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Why It Matters</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { r: "2% Rule", d: "Never risk more than 2% of your account on a single trade", w: "Allows you to survive 20+ consecutive losses without destroying your account" },
                                { r: "Stop-Loss", d: "Set and follow stop-losses on every trade, no exceptions", w: "Prevents small losses from becoming catastrophic losses" },
                                { r: "Portfolio Heat", d: "Total risk across all open positions should not exceed 8%", w: "Prevents correlated positions from wiping out your account simultaneously" },
                                { r: "No Averaging Down", d: "Never add to losing positions hoping for recovery", w: "Options expire — they do not recover like stocks" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Rule" className="font-black text-brand-500 uppercase italic tracking-wider">{row.r}</TableCell>
                                    <TableCell label="Description" className="text-white">{row.d}</TableCell>
                                    <TableCell label="Why It Matters" className="text-gray-500 italic">{row.w}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </StandardSection>

            {/* Rule 1: 2% Rule */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Rule #1: The 2% Rule</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Surviving the Variance</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                            <h4 className="text-white uppercase italic">What Is the 2% Rule?</h4>
                            <p>
                                Never risk more than 2% of your total account value on any single trade. This is calculated as the maximum dollar amount you are willing to lose if your stop-loss is hit.
                            </p>
                        </div>
                        <Card variant="institutional" className="p-8 border-brand-500/20 bg-brand-500/[0.03]">
                            <h4 className="text-sm font-black mb-6 text-brand-400 uppercase tracking-widest italic flex items-center gap-2">
                                <FiActivity className="w-4 h-4" /> Calculation Example
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { l: "Account size", v: "$10,000" },
                                    { l: "2% risk", v: "$200 maximum per trade" },
                                    { l: "Entry / Stop-loss", v: "$2.40 / $1.65" },
                                    { l: "Risk per contract", v: "($2.40 - $1.65) × 100 = $75" },
                                    { l: "Maximum contracts", v: "$200 ÷ $75 = 2.67 → Trade 2 contracts", c: "text-brand-500" }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{item.l}</span>
                                        <span className={`text-xs font-black uppercase tracking-widest ${item.c || 'text-white'}`}>{item.v}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic text-center">Why 2% Protects You</h4>
                        <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/60">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Risk Per Trade</TableHead>
                                        <TableHead>20 Consecutive Losses</TableHead>
                                        <TableHead>Account Remaining</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { r: "2%", l: "Down 33%", rem: "$6,700", status: "✓" },
                                        { r: "5%", l: "Down 64%", rem: "$3,600", status: "" },
                                        { r: "10%", l: "Down 88%", rem: "$1,200", status: "✗" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Risk" className="font-black text-white">{row.r}</TableCell>
                                            <TableCell label="20 Losses" className="text-red-400">{row.l}</TableCell>
                                            <TableCell label="Remaining" className="text-white">
                                                <div className="flex items-center justify-between gap-4">
                                                    <span>{row.rem}</span>
                                                    <span className={row.status === '✓' ? "text-brand-500" : "text-red-500"}>{row.status}</span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <p className="text-gray-500 text-xs italic leading-relaxed text-center">
                            With 2% risk, even 20 straight losses (virtually impossible with a 70% win rate system) only costs you 33% of your capital. You can recover. With 10% risk, 20 losses destroys your account.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* Rule 2: Stop-Losses */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Rule #2: Stop-Losses are Non-Negotiable</h2>
                        <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest text-center">Automatic Capital Protection</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="prose prose-invert prose-brand max-w-none">
                                <h4 className="text-white uppercase italic">How to Set Stop-Losses</h4>
                                <p className="text-gray-400">
                                    Every signal from OnlyOptions includes a recommended stop-loss. Set this as a GTC (Good Till Canceled) limit order immediately after entry.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Stop-Loss Placement Rules:</p>
                                {[
                                    "Technical: Place below recent support (calls) or above resistance (puts)",
                                    "Percentage: Typically -30% to -50% from entry for most trades",
                                    "Dollar amount: Must fit within your 2% account risk"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Card variant="institutional" className="p-8 border-red-500/20 bg-red-500/[0.02]">
                            <h4 className="text-sm font-black mb-6 text-red-500 uppercase tracking-widest italic flex items-center gap-2">
                                <FiAlertTriangle /> Common Stop-Loss Mistakes
                            </h4>
                            <div className="space-y-6">
                                {[
                                    { t: "Not Setting a Stop", d: "You think \"I will just watch it and exit manually.\" You will not. Emotions take over. Always set the stop order." },
                                    { t: "Moving the Stop Further Away", d: "Your stop is about to hit. You move it lower hoping for recovery. This turns -30% losses into -80% losses. Never move stops against your position." },
                                    { t: "Removing the Stop After Entry", d: "You set a stop, then delete it later because \"the trade looks good.\" If it looks good, there is no reason to remove protection." },
                                    { t: "Waiting for \"One More Candle\"", d: "Stop is hit. You think \"maybe the next 5-minute candle reverses.\" Exit immediately when stop is triggered. No exceptions." }
                                ].map((m, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="text-white text-[10px] font-black uppercase tracking-widest">Mistake #{i + 1}: {m.t}</div>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed italic">{m.d}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <Card variant="glass" className="p-8 border-brand-500/20 bg-gray-950/80">
                        <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">When to Adjust Stop-Losses (The Only Time)</h4>
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2 space-y-4">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    You can move stop-losses in your favor (tighter) but never against you (wider).
                                </p>
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-2">Example Strategy:</div>
                                    <p className="text-white text-xs font-black uppercase tracking-wider leading-relaxed">
                                        Entry: $2.40, Original stop: $1.65<br/>
                                        Trade moves to $3.20. You can move stop to $2.40 (breakeven) or $2.70.
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/2 text-center p-6 border-l md:border-white/5 space-y-4">
                                <p className="text-gray-400 text-xs font-black uppercase tracking-widest italic">You cannot move stop from $1.65 to $1.30.</p>
                                <span className="text-red-500 font-black text-xs uppercase tracking-widest italic block mb-2">DO NOT DO THIS:</span>
                                <span className="text-white text-lg font-black uppercase tracking-tighter line-through opacity-50">$1.65 → $1.30</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Rule 3: Portfolio Heat */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Rule #3: Portfolio Heat Management</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Controlling Correlation Risk</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400 leading-relaxed">
                            <h4 className="text-white uppercase italic">What Is Portfolio Heat?</h4>
                            <p>
                                Portfolio heat is the total dollar amount at risk across all your open positions simultaneously. It is calculated as the sum of maximum loss (distance to stop-loss) for every open trade.
                            </p>
                            <h4 className="text-white uppercase italic text-sm mt-8">Maximum Portfolio Heat: 6-8%</h4>
                            <p>
                                Professional traders limit total portfolio heat to 6-8% of account value. This prevents a single bad day from destroying months of progress.
                            </p>
                            <p className="border-l-2 border-brand-500/30 pl-4 italic">
                                If your portfolio heat exceeds 8%, do not open new trades until existing positions close (either hitting target or stop).
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Portfolio Heat</TableHead>
                                        <TableHead>Recommendation</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { h: "0-4%", r: "Conservative. Room for more positions.", c: "text-gray-400" },
                                        { h: "4-6%", r: "Balanced. Ideal range for most traders.", c: "text-brand-500" },
                                        { h: "6-8%", r: "Aggressive. Maximum recommended.", c: "text-orange-500" },
                                        { h: "8%+", r: "Dangerous. Do not open new positions.", c: "text-red-500" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Heat" className={`font-black uppercase italic ${row.c}`}>{row.h}</TableCell>
                                            <TableCell label="Action" className="text-white text-[10px] uppercase font-bold tracking-widest">{row.r}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="p-6 bg-brand-500/5 border border-brand-500/10 rounded-2xl">
                             <h4 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2 italic">
                                <FiActivity className="w-4 h-4" /> Heat Calculation Example
                            </h4>
                            <div className="space-y-3 font-mono text-[10px] text-gray-400">
                                <div>Trade 1: Risk $200 (entry $2.40, stop $1.65, 2 contracts)</div>
                                <div>Trade 2: Risk $150 (entry $3.00, stop $2.25, 1 contract)</div>
                                <div>Trade 3: Risk $180 (entry $4.50, stop $2.70, 1 contract)</div>
                                <div className="pt-3 border-t border-white/5 text-white flex justify-between">
                                    <span>Total Heat:</span>
                                    <span className="text-brand-500 font-black">$530 (5.3% of $10K account)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Rule 4: Never Average Down */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Rule #4: Never Average Down</h2>
                        <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest text-center">Avoid the "Hope" Trap</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         <div className="space-y-8">
                            <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                                <h4 className="text-white uppercase italic">What Is Averaging Down?</h4>
                                <p>
                                    Averaging down means buying more contracts of a losing position to "lower your average cost." This is extremely dangerous with options.
                                </p>
                            </div>
                            <Card variant="institutional" className="p-8 border-red-500/20 bg-red-500/[0.02]">
                                <h4 className="text-sm font-black mb-6 text-red-500 uppercase tracking-widest italic">Bad Example:</h4>
                                <div className="space-y-4 text-xs">
                                    <p className="text-gray-400">Buy 2 contracts of SPY $575 call at $2.40.</p>
                                    <p className="text-gray-400">SPY drops. Option now $1.50. You buy 2 more contracts.</p>
                                    <div className="p-4 bg-black/40 rounded-xl space-y-2">
                                        <div className="flex justify-between"><span>Average cost:</span><span className="text-white">$1.95</span></div>
                                        <div className="flex justify-between"><span>Total contracts:</span><span className="text-white">4</span></div>
                                        <div className="flex justify-between border-t border-white/5 pt-2 text-red-500 font-black italic">
                                            <span>If stop hits at $1.20, you lose:</span>
                                            <span>4 × ($1.95 - $1.20) × 100 = $300</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest italic pt-2">Original plan was $200 max loss. Now $300. You violated the 2% rule.</p>
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Why Averaging Down Fails in Options</h4>
                            <div className="space-y-4">
                                {[
                                    "Options expire — they do not recover like stocks",
                                    "Time decay (Theta) accelerates losses on larger positions",
                                    "Violates position sizing discipline",
                                    "Turns controlled losses into account-destroying losses"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-black text-xs">!</div>
                                        <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6">
                                <Card variant="glass" className="p-6 border-brand-500/20 bg-brand-500/5">
                                    <h4 className="text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3 italic">The Right Approach:</h4>
                                    <p className="text-white text-xs font-black uppercase tracking-widest leading-relaxed">
                                        If you want to add to a position, only add to <span className="text-brand-400 underline decoration-brand-500/30 underline-offset-4">WINNING</span> positions (scaling in). Never add to losers.
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Advanced Techniques */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Growth" title={<>Advanced Risk <span className="text-brand-500">Techniques</span></>} align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Scaling Out */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all flex flex-col h-full">
                        <FiTrendingUp className="w-8 h-8 text-brand-500 mb-6" />
                        <h4 className="text-white font-black mb-4 tracking-tight uppercase text-sm italic">Scaling Out — Take Partial Profits</h4>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6">
                            Do not feel obligated to exit 100% of your position at once. Scale out as the trade moves in your favor.
                        </p>
                        <div className="mt-auto space-y-4 prose prose-invert prose-brand max-w-none text-[10px]">
                             <p className="text-brand-400 font-black uppercase tracking-widest mb-2 italic">Example Strategy:</p>
                             <p className="text-gray-400 leading-relaxed">
                                Enter with 4 contracts at $2.40.<br/>
                                <strong>First target ($3.60):</strong> Sell 2 contracts, lock in +$240 profit. Move stop on remaining 2 to breakeven ($2.40).<br/>
                                <strong>Second target ($4.20):</strong> Sell final 2 contracts, lock in +$360 more.<br/>
                                <span className="text-white font-black">Total profit: $600 vs $480 if you sold everything at first target.</span>
                             </p>
                        </div>
                    </Card>

                    {/* Trailing Stops */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all flex flex-col h-full">
                        <FiTarget className="w-8 h-8 text-brand-500 mb-6" />
                        <h4 className="text-white font-black mb-4 tracking-tight uppercase text-sm italic">Trailing Stops for Runners</h4>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6">
                            For trades that move strongly in your favor, use a trailing stop to lock in gains while giving the trade room to run.
                        </p>
                        <div className="mt-auto space-y-4 prose prose-invert prose-brand max-w-none text-[10px]">
                             <p className="text-brand-400 font-black uppercase tracking-widest mb-2 italic">Example Strategy:</p>
                             <p className="text-gray-400 leading-relaxed">
                                Entry: $2.40, Stop: $1.65<br/>
                                <strong>Price hits $3.60:</strong> Move stop to $2.70 (lock in +$30 per contract minimum)<br/>
                                <strong>Price hits $4.50:</strong> Move stop to $3.60 (lock in +$120 per contract minimum)<br/>
                                <span className="text-white font-black">If price reverses and hits $3.60 stop, you still profit +50%.</span>
                             </p>
                        </div>
                    </Card>

                    {/* Conviction Sizing */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all flex flex-col h-full">
                        <FiShield className="w-8 h-8 text-brand-500 mb-6" />
                        <h4 className="text-white font-black mb-4 tracking-tight uppercase text-sm italic">Position Sizing by Conviction</h4>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-8">
                            Not all signals are created equal. Size positions based on confidence level.
                        </p>
                        <div className="mt-auto space-y-4">
                            {[
                                { s: "3-Star (High)", r: "2% risk" },
                                { s: "2-Star (Med)", r: "1-1.5% risk" },
                                { s: "1-Star (Low)", r: "0.5-1% risk" }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center bg-black/40 p-2 rounded-lg border border-white/5">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-white">{row.s}</span>
                                    <span className="text-brand-500 text-[9px] font-black uppercase tracking-widest">{row.r}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Drawdown Management */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Recovery" title={<>Drawdown <span className="text-brand-500">Management</span></>} align="center" className="mb-20" />
                <div className="max-w-4xl mx-auto space-y-12">
                    <Card variant="glass" className="p-8 md:p-12 border-white/5 bg-gray-950/40">
                         <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm italic">Maximum Drawdown Rules</h4>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Drawdown Level</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Action Required</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { d: "0-10%", s: "Normal variance", a: "Continue trading normally", c: "text-gray-400" },
                                    { d: "10-15%", s: "Warning", a: "Review recent trades for mistakes", c: "text-yellow-500" },
                                    { d: "15-20%", s: "Serious", a: "Reduce position size to 1% per trade", c: "text-orange-500" },
                                    { d: "20%+", s: "Critical", a: "Stop trading. Review system entirely.", c: "text-red-500" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Level" className="font-black italic text-white">{row.d}</TableCell>
                                        <TableCell label="Status" className={`text-[10px] font-black uppercase tracking-widest ${row.c}`}>{row.s}</TableCell>
                                        <TableCell label="Action" className="text-gray-400 text-[10px] font-bold uppercase tracking-widest italic">{row.a}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </Card>
                    <div className="prose prose-invert prose-brand max-w-none text-center">
                        <p className="text-gray-500 uppercase italic text-sm">
                            If you hit a 20% drawdown, stop trading immediately. Take 1-2 weeks to review your trades, identify mistakes, and paper trade to rebuild confidence before risking real capital again.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* Checklist Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                 <SectionHeader label="Protocol" title={<>Practical Risk <span className="text-brand-500">Management Checklist</span></>} align="center" className="mb-20" />
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Before */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs italic border-b border-brand-500/20 pb-4">Before Every Trade</h4>
                        <div className="space-y-4">
                            {[
                                "Is this trade within my 2% account risk limit?",
                                "Where is my stop-loss and is it set in my broker platform?",
                                "What is my total portfolio heat including this new position?",
                                "Do I have a clear profit target and exit plan?",
                                "Am I trading with risk capital I can afford to lose?"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <FiCheck className="text-brand-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-4 bg-red-500/5 border border-red-500/10 rounded-xl text-center">
                            <span className="text-red-500 text-[9px] font-black uppercase tracking-widest italic leading-relaxed">If you cannot confidently answer "yes" to all 5 questions, do not take the trade.</span>
                        </div>
                    </Card>

                    {/* During */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs italic border-b border-brand-500/20 pb-4">During the Trade</h4>
                        <div className="space-y-4">
                            {[
                                "Monitor position but do not obsess (check 2-3 times per day max)",
                                "Trust your stop-loss — let it do its job",
                                "If approaching target, consider scaling out partial profits",
                                "Never move stop-loss away from entry (only toward entry or tighter)"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <FiActivity className="text-brand-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* After */}
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs italic border-b border-brand-500/20 pb-4">After the Trade Closes</h4>
                        <div className="space-y-4">
                            {[
                                "Log the trade in your journal: entry, exit, P&L, lessons learned",
                                "If it was a loss, identify what went wrong (execution, signal, stop?)",
                                "If it was a win, identify what went right and replicate",
                                "Update your account balance for accurate 2% calculation"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <FiTrendingUp className="text-brand-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                 </div>
            </StandardSection>

            {/* FAQ Section */}
            <StandardSection divider="top" spacing="lg" containerSize="4xl">
                <div className="prose prose-invert prose-brand max-w-none space-y-16">
                    <section>
                        <SectionHeader label="Questions" title={<>Risk Management <span className="text-brand-500">FAQ</span></>} align="center" className="mb-12" />
                        <div className="space-y-4">
                             {[
                                { q: "Can I ever risk more than 2% if I am very confident?", a: "No. The 2% rule exists precisely for \"very confident\" trades that turn into losses. Overconfidence kills accounts. Stick to 2% on every trade, no exceptions." },
                                { q: "What if my stop is too tight and gets hit constantly?", a: "This is a signal quality or timing issue, not a stop-loss problem. Widen stops to reasonable technical levels, but then reduce position size so you still stay within 2% risk. Never violate 2% to accommodate wider stops." },
                                { q: "Should I use mental stops or hard stops in my broker?", a: "Always hard stops (actual orders in your broker). Mental stops rely on discipline and monitoring. You will get distracted, forget, or rationalize. Hard stops execute automatically." },
                                { q: "What if multiple positions hit stop-loss the same day?", a: "This is why portfolio heat management matters. With 6% total heat across 3 positions, losing all 3 costs 6% of your account — painful but survivable. If you had 15% portfolio heat, you would lose 15% in one day. Stick to 8% max heat." },
                                { q: "How do I calculate portfolio heat if I have different contract sizes?", a: "For each position: (Entry - Stop) × 100 × Contracts = Risk per position. Sum all positions = Total portfolio heat. Divide by account size = Portfolio heat %." }
                            ].map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </section>

                    {/* Global Disclaimer Placeholder or Text */}
                    <div className="text-center pt-8 border-t border-white/5">
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Risk Management Guide — protect your capital, grow your account.</p>
                    </div>

                    {/* Resources Grid */}
                    <section className="border-t border-white/5 pt-16">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8 text-center">Resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {linksData.map((link, i) => (
                                <Link key={i} to={link.path} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all uppercase tracking-widest">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA />
            </div>
        </div>
    );
};

export default OptionsSignalsRiskManagement;
