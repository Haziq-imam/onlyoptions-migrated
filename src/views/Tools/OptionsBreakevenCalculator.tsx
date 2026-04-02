import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@/lib/react-router-dom-stub";
import StandardSection from "../../components/ui/Layout/StandardSection";
import SectionHeader from "../../components/ui/Layout/SectionHeader";
import { Card } from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../../components/ui/Table/Table";
import { FiAlertCircle, FiTrendingUp, FiCheckCircle, FiPieChart, FiInfo, FiTrendingDown, FiTarget, FiZap } from "react-icons/fi";

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white uppercase tracking-wider text-sm transition-colors hover:bg-white/[0.02]">
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

const faqData = [
    { q: "Does breakeven change as the option price changes?", a: "No. Breakeven is set when you enter the trade. It equals your strike plus the premium you paid (for calls) or strike minus premium (for puts). It does not change even if the option price rises or falls." },
    { q: "Do I include commissions in the breakeven calculation?", a: "The calculator shows pure breakeven (strike + premium). To account for commissions, add them to premium. Example: $2.40 premium + $1.30 round-trip commission = $2.53 effective premium. Real breakeven: $575 + $2.53 = $577.53." },
    { q: "What if I sell before expiration?", a: "Breakeven at expiration is different from breakeven if you sell early. This calculator shows expiration breakeven. If you sell early, you profit whenever the option is worth more than you paid, regardless of the strike." },
    { q: "Is it better to buy options with lower breakeven?", a: "Not necessarily. Lower breakeven often means higher premium (more expensive). You trade capital efficiency for probability. At-the-money options have easier breakeven but cost more. Out-of-the-money options have harder breakeven but cost less." },
    { q: "Can breakeven be below the current stock price for calls?", a: "Yes, if you buy in-the-money (ITM) calls. Example: SPY at $575, you buy $570 call for $6.50. Breakeven = $576.50. The option is already profitable if SPY stays above $576.50." }
];

const scenariosData = [
    { title: "Scenario 1: 0DTE SPY Call — Close to the Money", details: "SPY trading at $575, Buy $575 call for $2.40", result: "Breakeven: $577.40 (0.4% move needed)", analysis: "Recommendation: High probability if SPY has upward momentum. Very achievable in one day." },
    { title: "Scenario 2: Weekly NVDA Call — Out of the Money", details: "NVDA trading at $850, Buy $870 call for $8.50", result: "Breakeven: $878.50 (3.4% move needed)", analysis: "Recommendation: Requires strong bullish catalyst. High risk, high reward." },
    { title: "Scenario 3: Monthly QQQ Put — Hedge Position", details: "QQQ trading at $480, Buy $470 put for $6.00", result: "Breakeven: $464 (3.3% drop needed)", analysis: "Recommendation: Insurance against market crash. Profitable only if significant drop occurs." },
    { title: "Scenario 4: Deep ITM Call — Conservative", details: "SPY at $575, Buy $560 call for $17.00", result: "Breakeven: $577 (0.3% move needed)", analysis: "Recommendation: High probability, but expensive. Behaves like stock with capped downside." }
];

const linksData = [
    { title: "Position size calculator", path: "/position-size-calculator" },
    { title: "Profit calculator", path: "/options-profit-calculator" },
    { title: "Risk-reward calculator", path: "/risk-reward-calculator" },
    { title: "How it works", path: "/how-it-works" },
    { title: "Get Access", path: "/membership" },
    { title: "Options 101", path: "/options-trading-101" },
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
    const [optionType, setOptionType] = useState<'CALL' | 'PUT'>('CALL');
    const [strikePrice, setStrikePrice] = useState<string>('575');
    const [premiumPaid, setPremiumPaid] = useState<string>('2.40');
    const [currentPrice, setCurrentPrice] = useState<string>('');

    const parsedStrike = parseFloat(strikePrice);
    const parsedPremium = parseFloat(premiumPaid);
    const parsedCurrent = parseFloat(currentPrice);

    let breakevenPrice = 0;
    let profitCondition = "";
    let moveNeeded: string | null = null;
    let valid = false;
    let warning = false;

    if (parsedStrike > 0 && parsedPremium > 0) {
        valid = true;
        if (optionType === 'CALL') {
            breakevenPrice = parsedStrike + parsedPremium;
            profitCondition = `Stock must be above $${breakevenPrice.toFixed(2)} to profit`;
            if (parsedCurrent > 0) {
                const move = ((breakevenPrice / parsedCurrent) - 1) * 100;
                moveNeeded = `${move > 0 ? '+' : ''}${move.toFixed(2)}% move needed`;
            }
        } else {
            breakevenPrice = parsedStrike - parsedPremium;
            profitCondition = `Stock must be below $${breakevenPrice.toFixed(2)} to profit`;
            if (parsedCurrent > 0) {
                const move = ((breakevenPrice / parsedCurrent) - 1) * 100;
                moveNeeded = `${move > 0 ? '+' : ''}${move.toFixed(2)}% move needed`;
            }
            if (breakevenPrice < 0) {
                warning = true;
            }
        }
    }

    const clearAll = () => {
        setStrikePrice('');
        setPremiumPaid('');
        setCurrentPrice('');
    };

    return (
        <Card variant="institutional" hover={false} className="max-w-4xl mx-auto p-4 md:p-10 mb-20 relative z-10 print:shadow-none print:border-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8 print:hidden">
                    <div>
                        <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 text-sm">1</span>
                            Option Details
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Option Type</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button 
                                        onClick={() => setOptionType('CALL')}
                                        className={`py-3 px-4 rounded-xl font-black text-xs transition-all border ${optionType === 'CALL' ? 'bg-brand-500 border-brand-500 text-white shadow-[0_0_20px_rgba(32,109,254,0.3)]' : 'bg-gray-900 border-white/5 text-gray-400 hover:border-white/20'}`}
                                    >
                                        CALL
                                    </button>
                                    <button 
                                        onClick={() => setOptionType('PUT')}
                                        className={`py-3 px-4 rounded-xl font-black text-xs transition-all border ${optionType === 'PUT' ? 'bg-brand-500 border-brand-500 text-white shadow-[0_0_20px_rgba(32,109,254,0.3)]' : 'bg-gray-900 border-white/5 text-gray-400 hover:border-white/20'}`}
                                    >
                                        PUT
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Strike Price ($)</label>
                                    <input 
                                        type="number" 
                                        min="0.01" 
                                        step="0.50" 
                                        value={strikePrice} 
                                        onChange={(e) => setStrikePrice(e.target.value)} 
                                        placeholder="e.g. 575"
                                        className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Premium Paid ($)</label>
                                    <input 
                                        type="number" 
                                        min="0.01" 
                                        step="0.01" 
                                        value={premiumPaid} 
                                        onChange={(e) => setPremiumPaid(e.target.value)} 
                                        placeholder="e.g. 2.40"
                                        className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Current Stock Price ($) <span className="text-gray-600">(Optional)</span></label>
                                <input 
                                    type="number" 
                                    min="0.01" 
                                    step="0.01" 
                                    value={currentPrice} 
                                    onChange={(e) => setCurrentPrice(e.target.value)} 
                                    placeholder="e.g. 574.50"
                                    className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={clearAll} className="select-none text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
                            Clear <FiAlertCircle />
                        </button>
                    </div>
                </div>

                <div className={`bg-gray-900/50 border ${valid ? (warning ? 'border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)]' : 'border-brand-500/20 shadow-[0_0_30px_rgba(32,109,254,0.1)]') : 'border-white/5'} rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden transition-all duration-500`}>
                    {valid && !warning && (
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-500" />
                    )}

                    <h3 className="text-xl font-black text-white mb-8 uppercase tracking-[0.2em] text-center relative z-10">Results</h3>

                    {valid ? (
                        <div className="space-y-8 relative z-10 w-full overflow-hidden text-center">
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Breakeven Stock Price</p>
                                <AutoScaler align="center">
                                    <span className="text-4xl md:text-6xl font-black text-white select-all">
                                        ${breakevenPrice.toFixed(2)}
                                    </span>
                                </AutoScaler>
                                {moveNeeded && (
                                    <p className="mt-2 text-xs font-bold text-brand-400 uppercase tracking-widest">
                                        {moveNeeded}
                                    </p>
                                )}
                            </div>

                            <div className={`bg-gray-950/50 border ${warning ? 'border-yellow-500/30' : 'border-brand-500/30'} rounded-2xl p-6 text-center overflow-hidden`}>
                                <p className={`text-sm md:text-lg font-bold ${warning ? 'text-yellow-400' : 'text-brand-400'}`}>
                                    {profitCondition}
                                </p>
                                {warning && (
                                    <p className="mt-2 text-[10px] text-yellow-500/70 font-bold uppercase tracking-widest">
                                        Warning: Breakeven cannot be negative
                                    </p>
                                )}
                            </div>

                            <div className="space-y-3 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 justify-center">
                                    <FiZap className="text-brand-500" /> Calculated for expiration
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 font-bold text-sm uppercase tracking-widest relative z-10 my-auto">
                            <FiInfo className="w-8 h-8 mx-auto mb-3 opacity-20" />
                            Enter strike and premium<br />to see breakeven
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default function OptionsBreakevenCalculator() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Options Breakeven Calculator",
        "applicationCategory": "FinanceApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Calculate the exact breakeven price for any options trade. Works for calls and puts with strike price and premium inputs."
    };

    return (
        <div className="bg-black min-h-screen relative overflow-hidden text-white font-sans selection:bg-[rgb(32,109,254)]/30 pt-24 pb-12">
            <Helmet>
                <title>Free Options Breakeven Calculator | Calls & Puts | OnlyOptions</title>
                <meta name="description" content="Calculate the exact breakeven price for any options trade. Enter strike price and premium paid to see the stock price needed to profit. Works for calls and puts." />
                <link rel="canonical" href="https://onlyoptions.us/breakeven-calculator" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <StandardSection spacing="md" containerSize="4xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[10px] font-black uppercase tracking-widest mb-6">
                        <FiTarget className="w-3 h-3" /> Options Breakeven Calculator
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase">
                        Calculate Your Breakeven <br className="hidden md:block" /> <span className="text-brand-500">Price Instantly</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        The breakeven price is the stock price at which your option trade neither makes nor loses money. For call options, it is strike + premium. For put options, it is strike - premium. Our free calculator does the math for both.
                    </p>
                </div>

                <InteractiveCalculator />

                <div className="prose prose-invert prose-brand max-w-none space-y-16">

                    {/* HOW IT WORKS */}
                    <section>
                        <SectionHeader title="How the Calculator Works" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><FiZap className="text-brand-500" /> Formulas</h3>
                                <p className="text-gray-400 text-sm mb-6">Breakeven calculation differs for calls vs puts:</p>
                                <ul className="space-y-6 text-sm text-gray-300 font-medium">
                                    <li className="flex flex-col gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <span className="text-brand-400 font-black uppercase tracking-widest text-[10px]">For CALL Options:</span>
                                        <span className="text-lg font-bold text-white">Breakeven = Strike Price + Premium Paid</span>
                                    </li>
                                    <li className="flex flex-col gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                                        <span className="text-brand-400 font-black uppercase tracking-widest text-[10px]">For PUT Options:</span>
                                        <span className="text-lg font-bold text-white">Breakeven = Strike Price - Premium Paid</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-sm uppercase tracking-widest text-brand-400 font-black mb-4">Example: Call Option Breakeven</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-bold tracking-widest text-center">
                                            <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Option Type</p><p className="text-white">CALL</p></div>
                                            <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Strike Price</p><p className="text-white">$575</p></div>
                                            <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Premium Paid</p><p className="text-white">$2.40</p></div>
                                        </div>
                                        <div className="pt-2 border-t border-white/10">
                                            <div className="flex justify-between items-center"><span className="text-xs text-gray-400">Calculation</span><span className="text-xs text-white">$575 + $2.40</span></div>
                                            <div className="flex justify-between items-center mt-2"><span className="text-xs font-bold text-brand-400">Breakeven Price</span><span className="text-lg font-black text-brand-400">$577.40</span></div>
                                            <div className="flex justify-between items-center mt-1"><span className="text-[10px] text-gray-500 uppercase font-black">Profit Above</span><span className="text-[10px] text-gray-500 uppercase font-black">$577.40</span></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 italic px-2">
                                    If SPY closes at $580, you make profit. At $577.40 exactly, you break even. Below $577.40, you lose money.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="order-2 md:order-1 space-y-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-sm uppercase tracking-widest text-brand-400 font-black mb-4">Example: Put Option Breakeven</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-bold tracking-widest text-center">
                                            <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Option Type</p><p className="text-white">PUT</p></div>
                                            <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Strike Price</p><p className="text-white">$570</p></div>
                                            <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Premium Paid</p><p className="text-white">$3.20</p></div>
                                        </div>
                                        <div className="pt-2 border-t border-white/10">
                                            <div className="flex justify-between items-center"><span className="text-xs text-gray-400">Calculation</span><span className="text-xs text-white">$570 - $3.20</span></div>
                                            <div className="flex justify-between items-center mt-2"><span className="text-xs font-bold text-brand-400">Breakeven Price</span><span className="text-lg font-black text-brand-400">$566.80</span></div>
                                            <div className="flex justify-between items-center mt-1"><span className="text-[10px] text-gray-500 uppercase font-black">Profit Below</span><span className="text-[10px] text-gray-500 uppercase font-black">$566.80</span></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 italic px-2">
                                    If SPY falls to $560, you make profit. At $566.80 exactly, you break even. Above $566.80, you lose money.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 bg-brand-500/5 border border-brand-500/10 rounded-2xl p-8 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-white mb-4">Visualizing Breakeven</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Think of breakeven as your "finish line" at expiration. If the stock crosses this line in the right direction, you're in the green. If it stays behind the line, you're in the red. The distance between the current price and breakeven represents the required move to stop losing money.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* WHY BREAKEVEN MATTERS */}
                    <section>
                        <SectionHeader title="Why Breakeven Matters" align="left" className="mb-10" />
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center">
                                    <FiTarget className="text-brand-500 text-xl" />
                                </div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-sm">Setting Realistic Profit Targets</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Your profit target should be significantly above breakeven to justify the trade. Example: Breakeven at $577.40. Setting target at $578 (only $0.60 above breakeven) risks commissions eating all profit. Better target: $582+ ($5 above breakeven).
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center">
                                    <FiCheckCircle className="text-brand-500 text-xl" />
                                </div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-sm">Evaluating Trade Quality</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Before buying an option, ask: "How far does the stock need to move for me to profit?" SPY at $575, buying $575 call for $2.40 = needs +0.4% move. Buying $580 call for $0.50 = needs +1% move. The $575 call is easier but costs more.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center">
                                    <FiZap className="text-brand-500 text-xl" />
                                </div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-sm">Time Decay Awareness</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    As expiration approaches, the stock must reach breakeven faster. With 5 days to expiration, SPY needs to move 0.4% to breakeven. With 1 day (0DTE), time is running out. This pressure is the "Theta" working against you.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* BREAKEVEN VS PROFITABILITY */}
                    <section>
                        <SectionHeader title="Breakeven vs. Profitability" align="left" className="mb-8" />
                        <Card variant="glass" className="p-0 border border-white/10 overflow-hidden">
                            <div className="p-8">
                                <p className="text-gray-300 text-sm mb-6">Reaching breakeven is not the goal — significant profit is. Consider this scenario for a $575 call with $2.40 premium:</p>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Scenario</TableHead>
                                            <TableHead>Stock Price</TableHead>
                                            <TableHead className="text-brand-400">Your P&L</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { s: "Below Breakeven", p: "$576", pl: "-$140 loss", color: "text-red-400" },
                                            { s: "At Breakeven", p: "$577.40", pl: "$0 (no gain, no loss)", color: "text-white" },
                                            { s: "Slightly Above", p: "$579", pl: "+$160 profit", color: "text-green-400" },
                                            { s: "Well Above", p: "$582", pl: "+$460 profit", color: "text-brand-400" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Scenario" className="font-bold text-white">{row.s}</TableCell>
                                                <TableCell label="Stock Price" className="text-gray-400 font-bold">{row.p}</TableCell>
                                                <TableCell label="Your P&L" className={`font-black ${row.color}`}>{row.pl}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <p className="mt-8 text-[10px] text-gray-500 text-center font-bold uppercase tracking-widest bg-white/5 py-3 rounded-lg border border-white/5">
                                    *Based on $575 call, $2.40 premium, 1 contract ($240 total cost)
                                </p>
                            </div>
                        </Card>
                        <p className="mt-6 text-gray-400 text-sm italic text-center">
                            Aim for the "well above" scenario. The edge in options comes from large wins, not barely crossing breakeven.
                        </p>
                    </section>

                    {/* COMMON SCENARIOS */}
                    <section>
                        <SectionHeader title="Common Breakeven Scenarios" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 gap-6">
                            {scenariosData.map((s, i) => (
                                <Card key={i} variant="glass" className="p-8 bg-white/5 border border-white/10 group hover:border-brand-500/50 transition-all">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500">
                                            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-wider">{s.title}</h4>
                                    </div>
                                    <div className="space-y-3 mb-6">
                                        <p className="text-xs text-gray-500">{s.details}</p>
                                        <p className="text-lg font-black text-brand-400 uppercase tracking-tight">{s.result}</p>
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-[11px] text-gray-400 leading-relaxed italic">
                                            {s.analysis}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* TRADE PLANNING */}
                    <section>
                        <SectionHeader title="How to Use Breakeven in Trade Planning" align="left" className="mb-10" />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { t: "Step 1", h: "Calculate Before Entry", d: "Never buy an option without knowing breakeven. Run this calculator first." },
                                { t: "Step 2", h: "Compare to Technicals", d: "Is breakeven above or below key resistance/support? Check if there's a clear path." },
                                { t: "Step 3", h: "Set Target Well Above", d: "Minimum: 2× the distance from entry to breakeven. Aim for meaningful gains." },
                                { t: "Step 4", h: "Monitor as Time Passes", d: "For 0DTE, you are racing the clock — exit or adjust if below breakeven late in day." }
                            ].map((step, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative h-full">
                                    <span className="absolute -top-3 left-6 px-3 py-1 bg-brand-500 text-white text-[10px] font-black rounded-lg uppercase tracking-widest leading-none">
                                        {step.t}
                                    </span>
                                    <h4 className="text-white font-bold text-sm mb-3 pt-2">{step.h}</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {step.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-brand-500/5 border border-white/10 rounded-2xl">
                            <p className="text-xs text-gray-300 font-bold uppercase tracking-widest mb-4">Example Step 3 Detail:</p>
                            <p className="text-sm text-gray-400 italic">
                                Entry at $575, breakeven $577.40 (distance: $2.40). Profit target should be at least $575 + ($2.40 × 2) = $579.80+
                            </p>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <SectionHeader label="Knowledge Base" title={<>Breakeven Calculator <span className="text-brand-500">FAQ</span></>} align="center" className="mb-20" />
                        <div className="space-y-4">
                            {faqData.map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </section>

                    {/* INTERNAL LINKS GRID */}
                    <section className="border-t border-white/5 pt-16">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8 text-center">Essential Tools & Guides</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {linksData.map((link, i) => (
                                <Link key={i} to={link.path} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all uppercase tracking-widest">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* FINAL CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6 px-4">Breakeven Calculator — know your numbers before you trade</p>
                        <Button href="/membership" size="lg" className="px-10 h-14 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(32,109,254,0.2)]">
                            Start Profit Trading
                        </Button>
                    </div>
                </div>
            </StandardSection>
        </div>
    );
}

const FiArrowUpRight = ({ className }: { className?: string }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);
