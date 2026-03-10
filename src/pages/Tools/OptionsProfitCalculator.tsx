import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import StandardSection from "../../components/ui/Layout/StandardSection";
import SectionHeader from "../../components/ui/Layout/SectionHeader";
import { Card } from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../../components/ui/Table/Table";
import { FiAlertCircle, FiTrendingUp, FiCheckCircle, FiDollarSign, FiInfo } from "react-icons/fi";

const faqData = [
    { q: "Do I include the cost of buying the option in the profit calculation?", a: "No. The calculator shows profit/loss from the price movement only. Your total return is automatically calculated as percentage of your entry cost. Example: Buy at $2.00, sell at $3.00 = $100 profit per contract, which is a 50% return on your $200 investment." },
    { q: "What if the option expires worthless?", a: "Enter $0.00 as the exit price. The calculator will show a 100% loss equal to your entire premium paid plus commissions. Example: Bought 2 contracts at $1.50, expired at $0 = -$300 - commissions." },
    { q: "How do I calculate profit for spreads?", a: "For spreads, calculate based on the net premium collected or paid. Example: Sold credit spread for $0.50 credit, bought back at $0.20 = $0.30 profit × 100 = $30 per spread. This calculator works for single-leg options only." },
    { q: "Should I include SEC fees and regulatory fees?", a: "You can, but they are typically small (pennies per trade). Most traders ignore them in quick calculations. For precise accounting, add them to the commission field. Example: $0.65 commission + $0.03 fees = enter $0.68." },
    { q: "Why does my actual broker P&L differ slightly from this calculator?", a: "Differences occur due to: (1) bid-ask spread (you may have filled at bid or ask instead of mid-price), (2) additional regulatory fees not included, (3) rounding in broker systems. Differences are usually under 1-2%." },
    { q: "Can I use this for long-term options (LEAPS)?", a: "Yes. The math is identical. Enter your entry price, current or projected exit price, and number of contracts. LEAPS just means longer time horizon — the P&L calculation is the same." },
    { q: "What is a good percentage return for options?", a: "This depends on time frame and strategy. 0DTE scalps: 30-60% in hours. Weekly swings: 50-100% in days. Monthly: 50-150% in weeks. Our average winning trade is +87%. Anything above 50% is considered strong." },
    { q: "How do I account for early assignment risk?", a: "This calculator assumes you close the position normally. If assigned early on a short option, you are now trading stock instead of options, and P&L calculations change. Early assignment is rare on out-of-the-money options." }
];

const scenariosData = [
    { title: "Scenario 1: SPY 0DTE Call — Quick Scalp", details: "Entry: $1.85, Exit: $2.65, Contracts: 5, Commission: $0.65", result: "Gross +$400, Net +$393.50, Return +42.4%", time: "2 hours" },
    { title: "Scenario 2: NVDA Weekly Call — Swing Trade", details: "Entry: $12.40, Exit: $21.80, Contracts: 2, Commission: $0.65", result: "Gross +$1,880, Net +$1,877.40, Return +75.7%", time: "4 days" },
    { title: "Scenario 3: QQQ Put — Down Market", details: "Entry: $3.20, Exit: $5.85, Contracts: 3, Commission: $0", result: "Gross +$795, Net +$795, Return +82.8%", time: "1 day (0DTE)" },
    { title: "Scenario 4: Stop-Loss Hit — Losing Trade", details: "Entry: $4.50, Exit (Stop): $3.15, Contracts: 1, Commission: $0.65", result: "Gross -$135, Net -$136.30, Return -30.3%", time: "Acceptable loss within 2% rule" },
    { title: "Scenario 5: Partial Profit — Risk Management", details: "Entry: $2.00, Exit 50% at $3.50, Exit 50% at $4.75, Contracts: 4", result: "First exit: +$300, Second: +$550. Total: +$850 net", time: "Blended return +106%" }
];

const linksData = [
    { title: "Position size calculator", path: "/position-size-calculator" },
    { title: "Risk-reward calculator", path: "/risk-reward-calculator" },
    { title: "Win rate calculator", path: "/win-rate-calculator" },
    { title: "How it works", path: "/how-it-works" },
    { title: "Free trial", path: "/free-trial" },
    { title: "Options 101", path: "/options-trading-101" },
    { title: "Risk management", path: "/options-signals-risk-management" },
    { title: "Best brokers", path: "/best-brokers-for-options-trading" },
    { title: "0DTE strategy", path: "/0dte-options-strategy-complete-guide" },
    { title: "FAQ", path: "/faq" }
];

const AutoScaler = ({ children, align = 'right', className = '' }: { children: React.ReactNode, align?: 'left' | 'center' | 'right', className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resize = () => {
            if (containerRef.current && textRef.current) {
                textRef.current.style.transform = 'scale(1)';
                const containerWidth = containerRef.current.clientWidth;
                const textWidth = textRef.current.scrollWidth;

                if (textWidth > containerWidth && containerWidth > 0) {
                    const scale = containerWidth / textWidth;
                    textRef.current.style.transform = `scale(${scale})`;
                }
            }
        };

        resize();
        window.addEventListener('resize', resize);
        const observer = window.ResizeObserver ? new ResizeObserver(resize) : null;
        if (observer && containerRef.current) observer.observe(containerRef.current);

        return () => {
            window.removeEventListener('resize', resize);
            if (observer) observer.disconnect();
        };
    }, [children]);

    const alignClass = align === 'center' ? 'justify-center' : align === 'left' ? 'justify-start' : 'justify-end';
    const originClass = align === 'center' ? 'center center' : align === 'left' ? 'left center' : 'right center';

    return (
        <div ref={containerRef} className={`w-full overflow-hidden flex ${alignClass} ${className}`}>
            <div ref={textRef} style={{ transformOrigin: originClass, whiteSpace: 'nowrap', transition: 'transform 0.1s' }} className="max-w-max">
                {children}
            </div>
        </div>
    );
};

const InteractiveCalculator = () => {
    const [entryPrice, setEntryPrice] = useState<string>('2.40');
    const [exitPrice, setExitPrice] = useState<string>('3.60');
    const [contracts, setContracts] = useState<number>(1);
    const [commission, setCommission] = useState<string>('0.65');
    const [useCommission, setUseCommission] = useState<boolean>(true);

    useEffect(() => {
        const savedEntry = localStorage.getItem('profit_entry');
        const savedExit = localStorage.getItem('profit_exit');
        const savedContracts = localStorage.getItem('profit_contracts');
        const savedComm = localStorage.getItem('profit_comm');
        const savedUseComm = localStorage.getItem('profit_useComm');

        if (savedEntry) setEntryPrice(savedEntry);
        if (savedExit) setExitPrice(savedExit);
        if (savedContracts) setContracts(parseInt(savedContracts));
        if (savedComm) setCommission(savedComm);
        if (savedUseComm) setUseCommission(savedUseComm === 'true');
    }, []);

    const saveToLocal = (key: string, val: string) => localStorage.setItem(`profit_${key}`, val);

    const handleEntryChange = (val: string) => { setEntryPrice(val); saveToLocal('entry', val); };
    const handleExitChange = (val: string) => { setExitPrice(val); saveToLocal('exit', val); };
    const handleContractsChange = (val: number) => { setContracts(val); saveToLocal('contracts', val.toString()); };
    const handleCommissionChange = (val: string) => { setCommission(val); saveToLocal('comm', val); };
    const handleUseCommissionChange = (val: boolean) => { setUseCommission(val); saveToLocal('useComm', val.toString()); };

    const parsedEntry = parseFloat(entryPrice);
    const parsedExit = parseFloat(exitPrice);
    const parsedComm = parseFloat(commission);

    let grossPnL = 0;
    let totalComms = 0;
    let netPnL = 0;
    let totalCost = 0;
    let pctReturn = 0;
    let isProfit = true;
    let valid = false;

    if (parsedEntry > 0 && parsedExit >= 0 && contracts > 0) {
        valid = true;
        const priceChange = (parsedExit - parsedEntry) * 100;
        grossPnL = priceChange * contracts;
        totalComms = useCommission && parsedComm >= 0 ? contracts * 2 * parsedComm : 0;
        netPnL = grossPnL - totalComms;
        totalCost = parsedEntry * 100 * contracts;
        pctReturn = (netPnL / totalCost) * 100;
        isProfit = netPnL >= 0;
    }

    const applyPreset = (tgtPct: number) => {
        if (parsedEntry > 0) {
            const newExit = parsedEntry * (1 + tgtPct);
            handleExitChange(newExit.toFixed(2));
        }
    };

    const clearAll = () => {
        handleEntryChange('');
        handleExitChange('');
        handleContractsChange(1);
        handleCommissionChange('0.65');
    };

    return (
        <Card variant="institutional" hover={false} className="max-w-4xl mx-auto p-4 md:p-10 mb-20 relative z-10 print:shadow-none print:border-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8 print:hidden">
                    <div>
                        <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 text-sm">1</span>
                            Trade Details
                        </h3>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Entry Price ($)</label>
                                    <input type="number" min="0.01" step="0.01" value={entryPrice} onChange={(e) => handleEntryChange(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Exit Price ($)</label>
                                    <input type="number" min="0" step="0.01" value={exitPrice} onChange={(e) => handleExitChange(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Contracts (x100 Shares)</label>
                                <input type="number" min="1" step="1" value={contracts} onChange={(e) => handleContractsChange(parseInt(e.target.value) || 1)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                            </div>

                            <div className="pt-2 flex flex-wrap gap-2 pb-2">
                                <button onClick={() => applyPreset(0.5)} className="select-none text-[10px] bg-white/5 hover:bg-brand-500/20 text-brand-400 px-3 py-1.5 rounded-lg border border-white/5 font-bold whitespace-nowrap overflow-hidden text-ellipsis">0DTE Target (+50%)</button>
                                <button onClick={() => applyPreset(0.75)} className="select-none text-[10px] bg-white/5 hover:bg-brand-500/20 text-brand-400 px-3 py-1.5 rounded-lg border border-white/5 font-bold whitespace-nowrap overflow-hidden text-ellipsis">Weekly Target (+75%)</button>
                                <button onClick={() => applyPreset(-0.3)} className="select-none text-[10px] bg-white/5 hover:bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg border border-white/5 font-bold whitespace-nowrap overflow-hidden text-ellipsis">Stop-Loss (-30%)</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 text-sm">2</span>
                            Broker Fees Matrix
                        </h3>
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" checked={useCommission} onChange={(e) => handleUseCommissionChange(e.target.checked)} className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-brand-500 focus:ring-brand-500" />
                                <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Include Commissions</span>
                            </label>
                            {useCommission && (
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Commission Per Contract ($)</label>
                                    <input type="number" min="0" step="0.01" value={commission} onChange={(e) => handleCommissionChange(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={clearAll} className="select-none text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
                            Clear <FiAlertCircle />
                        </button>
                    </div>
                </div>

                <div className={`bg-gray-900/50 border ${valid ? (isProfit ? 'border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]' : 'border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]') : 'border-white/5'} rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden transition-all duration-500`}>
                    {valid && (
                        <div className={`absolute top-0 right-0 w-64 h-64 ${isProfit ? 'bg-green-500/10' : 'bg-red-500/10'} blur-[100px] rounded-full pointer-events-none transition-colors duration-500`} />
                    )}

                    <h3 className="text-xl font-black text-white mb-8 uppercase tracking-[0.2em] text-center relative z-10">Results</h3>

                    {valid ? (
                        <div className="space-y-6 relative z-10 w-full overflow-hidden">
                            <div className="flex justify-between items-center pb-4 border-b border-white/5 gap-4">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest shrink-0">Gross Profit/Loss</span>
                                <AutoScaler align="right">
                                    <span className={`text-xl md:text-2xl font-black select-all ${grossPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>{grossPnL >= 0 ? '+' : ''}${grossPnL.toFixed(2)}</span>
                                </AutoScaler>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-white/5 gap-4">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest shrink-0">Total Commissions</span>
                                <AutoScaler align="right">
                                    <span className="text-xl md:text-2xl font-black text-red-400/80 select-all">-${totalComms.toFixed(2)}</span>
                                </AutoScaler>
                            </div>
                            <div className={`bg-gray-950/50 border ${isProfit ? 'border-green-500/30' : 'border-red-500/30'} rounded-2xl p-4 md:p-6 text-center mt-6 overflow-hidden`}>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Net P&L & Return</p>
                                <AutoScaler align="center" className="pb-2">
                                    <p className={`text-4xl md:text-5xl lg:text-6xl font-black ${isProfit ? 'text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]'} select-all`}>
                                        {isProfit ? '+' : ''}${netPnL.toFixed(2)}
                                    </p>
                                </AutoScaler>
                                <AutoScaler align="center" className="pb-2 mt-2">
                                    <p className={`text-xl md:text-2xl font-black select-all ${isProfit ? 'text-green-500/80' : 'text-red-500/80'}`}>
                                        {isProfit ? '+' : ''}{pctReturn.toFixed(1)}%
                                    </p>
                                </AutoScaler>
                            </div>
                            <AutoScaler align="center" className="mt-4">
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold select-all">Total Cost (Investment): ${totalCost.toFixed(2)}</p>
                            </AutoScaler>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 font-bold text-sm uppercase tracking-widest relative z-10 my-auto">
                            <FiInfo className="w-8 h-8 mx-auto mb-3 opacity-20" />
                            Enter valid trade details<br />to calculate P&L
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default function OptionsProfitCalculator() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Options Profit Calculator",
        "applicationCategory": "FinanceApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Calculate profit and loss for options trades including dollar P&L and percentage return."
    };

    return (
        <div className="bg-black min-h-screen relative overflow-hidden text-white font-sans selection:bg-[rgb(32,109,254)]/30 pt-24 pb-12">
            <Helmet>
                <title>Free Options Profit Calculator | Calculate P&L | OnlyOptions</title>
                <meta name="description" content="Calculate exact profit and loss for any options trade before you execute. Enter strike, entry price, exit price, and contracts. See dollar P&L and percentage return instantly." />
                <link rel="canonical" href="https://onlyoptions.us/options-profit-calculator" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <StandardSection spacing="md" containerSize="4xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[10px] font-black uppercase tracking-widest mb-6">
                        <FiDollarSign className="w-3 h-3" /> Options Profit Calculator
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                        Calculate Exact Options <br className="hidden md:block" /> <span className="text-brand-500">P&L and Return</span> Instantly
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Know exactly how much money you will make (or lose) on any options trade before you execute it. Our free Options Profit Calculator shows you the dollar P&L and percentage return based on your entry price, exit price, and number of contracts.
                        <br /><br />
                        Perfect for planning trades, setting profit targets, and understanding risk-reward before committing capital.
                    </p>
                </div>

                <InteractiveCalculator />

                <div className="prose prose-invert prose-brand max-w-none space-y-16">

                    {/* HOW IT WORKS */}
                    <section>
                        <SectionHeader title="How the Calculator Works" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><FiTrendingUp className="text-brand-500" /> The Formula</h3>
                                <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-300 font-medium">
                                    <li><strong className="text-brand-400">Calculate price change per contract:</strong> (Exit Price - Entry Price) × 100</li>
                                    <li><strong className="text-brand-400">Multiply by number of contracts:</strong> Price Change × Contracts</li>
                                    <li><strong className="text-brand-400">Subtract commissions:</strong> Gross Profit - (Contracts × 2 × Commission)</li>
                                    <li><strong className="text-brand-400">Calculate percentage return:</strong> (Net Profit ÷ Total Cost) × 100</li>
                                </ol>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-sm uppercase tracking-widest text-green-400 font-black mb-4">Winning Trade Example</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-gray-400">Entry / Exit</span><span className="font-bold text-white">$2.40 / $4.20 (3 Contracts)</span></div>
                                        <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-gray-400">Gross Profit</span><span className="font-bold text-white">$540 ($180 × 3)</span></div>
                                        <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-gray-400">Commissions</span><span className="font-bold text-white">$3.90 (2 sides × $0.65 × 3)</span></div>
                                        <div className="flex justify-between pt-1"><span className="text-green-400 font-bold">Net Profit</span><span className="text-green-400 font-black">$536.10 (+74.5%)</span></div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-sm uppercase tracking-widest text-red-400 font-black mb-4">Losing Trade Example</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-gray-400">Entry / Exit</span><span className="font-bold text-white">$2.40 / $1.65 (2 Contracts)</span></div>
                                        <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-gray-400">Gross Loss</span><span className="font-bold text-white">-$150 (-$75 × 2)</span></div>
                                        <div className="flex justify-between pt-1"><span className="text-red-400 font-bold">Net Loss</span><span className="text-red-400 font-black">-$152.60 (-31.8%)</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <SectionHeader title="Broker Commissions Impact" align="left" className="mb-8" />
                        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                            Commissions reduce your profit and increase your loss. For active traders making 50+ trades per month, commission costs add up significantly. Zero-commission brokers (Robinhood, Webull) save money on frequent small trades.
                        </p>
                        <Card variant="glass" className="p-0 border border-white/10 overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Broker Type</TableHead>
                                        <TableHead className="text-brand-400">Per Contract</TableHead>
                                        <TableHead>Round-Trip Cost (10 contracts)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { broker: "Zero-Commission", cost: "$0", rt: "$0" },
                                        { broker: "Low-Cost", cost: "$0.50-$0.65", rt: "$10-$13" },
                                        { broker: "Traditional", cost: "$1.00-$1.50", rt: "$20-$30" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Broker" className="font-bold text-white">{row.broker}</TableCell>
                                            <TableCell label="Cost/Contract" className="font-semibold text-brand-400">{row.cost}</TableCell>
                                            <TableCell label="Round-Trip" className="text-gray-400 font-semibold">{row.rt}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </section>

                    {/* REAL WORLD SCENARIOS */}
                    <section>
                        <SectionHeader title="Real-World P&L Scenarios" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {scenariosData.map((s, i) => (
                                <Card key={i} variant="glass" className="p-6 bg-white/5 border border-white/10">
                                    <h4 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
                                        <FiCheckCircle className="text-brand-500" />
                                        {s.title}
                                    </h4>
                                    <div className="text-xs text-gray-400 space-y-2 mb-4">
                                        <p>{s.details}</p>
                                        <p className="text-brand-400 font-bold">{s.result}</p>
                                    </div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 border-t border-white/10 pt-3">
                                        {s.time}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <SectionHeader title="Profit Calculator — FAQ" align="left" className="mb-8" />
                        <div className="space-y-4">
                            {faqData.map((faq, i) => (
                                <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white uppercase tracking-wider text-sm">
                                        {faq.q}
                                        <span className="text-brand-500 transition-transform group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* INTERNAL LINKS GRID */}
                    <section className="border-t border-white/5 pt-16">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8 text-center">Resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {linksData.map((link, i) => (
                                <Link key={i} to={link.path} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* FINAL CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">Options Profit Calculator — know your numbers before you trade</p>
                        <Button href="/free-trial" size="lg" className="px-10 h-14 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(32,109,254,0.2)]">
                            Get Real Options Signals
                        </Button>
                    </div>
                </div>
            </StandardSection>
        </div>
    );
}
