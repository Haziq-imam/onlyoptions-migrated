import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import StandardSection from "../../components/ui/Layout/StandardSection";
import SectionHeader from "../../components/ui/Layout/SectionHeader";
import { Card } from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiTrendingUp, FiShield, FiDollarSign } from "react-icons/fi";

const faqData = [
    { q: "What if the calculator gives me a fraction like 2.3 contracts?", a: "Always round DOWN to the nearest whole number. Trade 2 contracts, not 3. Rounding up violates the 2% rule and exposes you to excessive risk." },
    { q: "Can I risk more than 2% if I am very confident?", a: "No. The 2% rule exists precisely because overconfidence kills accounts. The best trade setups can still lose. Stick to 2% maximum on every single trade, no exceptions." },
    { q: "What if my account is too small to follow the 2% rule?", a: "If your account is under $2,000, you will be limited to 1 contract per trade on most signals. This is a feature, not a bug — it protects you from overleveraging. Focus on building capital through consistent small wins rather than gambling for big scores." },
    { q: "Should I adjust position size after a big win?", a: "Yes, but only based on your new account balance, not your emotions. If you start with $10,000 and grow to $12,000, your 2% risk is now $240 instead of $200. Recalculate on every trade using your current balance." },
    { q: "Do I use the premium I paid or the intrinsic value for position sizing?", a: "Use the entry price (premium paid) minus the stop-loss price. For example, if you buy a call at $2.40 and your stop is $1.65, your risk per contract is ($2.40 - $1.65) × 100 = $75." },
    { q: "What if the option gaps past my stop-loss?", a: "Gap risk is real and unavoidable in options. This is one more reason to never exceed 2% per trade. Even if an option gaps to zero (100% loss), you only lose 2% of your account, which is recoverable. If you risked 20% and it gaps to zero, you are done." },
    { q: "Can I use 3% or 5% risk if I am experienced?", a: "Professionals rarely exceed 2%. Some experienced traders use 1% per trade (even more conservative). Increasing to 3-5% risk is gambling, not trading. Your experience does not eliminate variance — it only makes you better at discipline." },
    { q: "How do I calculate position size for spreads?", a: "For spreads, your risk is the maximum loss on the spread, not the premium paid. Example: A credit spread collected $0.50 premium with max loss of $2.00. Risk per contract = $200. With $10,000 account at 2% ($200 risk), trade 1 contract." }
];

const mistakesData = [
    { title: "Mistake #1: Ignoring the Stop-Loss", desc: "Some traders calculate position size based only on account size, ignoring where their stop-loss is. This is wrong. Example: You have a $10,000 account and buy 10 contracts at $2.00 ($2,000 total cost). But your stop-loss is at $1.00. If hit, you lose $1,000 (10% of your account) — way over the 2% rule. Always factor in your stop-loss distance when calculating contracts." },
    { title: "Mistake #2: Rounding Up", desc: "If the calculator tells you 2.7 contracts, trade 2, not 3. Rounding up violates the 2% rule. Always round down." },
    { title: "Mistake #3: Compounding Without Adjusting", desc: "As your account grows, your position sizes should grow proportionally. Recalculate position size on every trade based on your current account balance, not your starting balance. Example: Start with $10,000 → 2% = $200 risk. After 3 months at $15,000 → 2% = $300 risk. Adjust up." },
    { title: "Mistake #4: Increasing Risk % After Wins", desc: "Never increase your risk percentage after a winning streak. Variance always reverts. Stick to 2% forever. If you feel invincible after 10 wins in a row, you are about to blow up." }
];

const linksData = [
    { title: "Risk management guide", path: "/options-signals-risk-management" },
    { title: "Position sizing guide", path: "/options-signals-position-sizing" },
    { title: "How it works", path: "/how-it-works" },
    { title: "Free trial", path: "/free-trial" },
    { title: "Options 101", path: "/options-trading-101" },
    { title: "Risk disclaimer", path: "/risk-disclaimer" },
    { title: "0DTE strategy", path: "/0dte-options-strategy-complete-guide" },
    { title: "SPY signals", path: "/spy-options-signals" },
    { title: "Best brokers", path: "/best-brokers-for-options-trading" },
    { title: "Profit calculator", path: "/options-profit-calculator" },
    { title: "Win rate calculator", path: "/win-rate-calculator" },
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
    const [accountSize, setAccountSize] = useState<number>(10000);
    const [riskPercentage, setRiskPercentage] = useState<number>(2);
    const [entryPrice, setEntryPrice] = useState<string>('');
    const [stopPrice, setStopPrice] = useState<string>('');

    useEffect(() => {
        const savedAccount = localStorage.getItem('calc_accountSize');
        const savedRisk = localStorage.getItem('calc_riskPercentage');
        if (savedAccount) setAccountSize(parseFloat(savedAccount));
        if (savedRisk) setRiskPercentage(parseFloat(savedRisk));
    }, []);

    const handleAccountChange = (val: number) => {
        setAccountSize(val);
        localStorage.setItem('calc_accountSize', val.toString());
    };

    const handleRiskChange = (val: number) => {
        setRiskPercentage(val);
        localStorage.setItem('calc_riskPercentage', val.toString());
    };

    const parsedEntry = parseFloat(entryPrice);
    const parsedStop = parseFloat(stopPrice);

    let maxRisk = 0;
    let riskPerContract = 0;
    let maxContracts = 0;
    let error = '';

    if (accountSize <= 0) error = "Account size must be positive.";
    else if (parsedEntry > 0 && parsedStop >= 0) {
        if (parsedStop >= parsedEntry) {
            error = "Stop-loss must be less than entry price.";
        } else {
            maxRisk = accountSize * (riskPercentage / 100);
            riskPerContract = (parsedEntry - parsedStop) * 100;
            maxContracts = Math.floor(maxRisk / riskPerContract);
        }
    }

    const clearAll = () => {
        setAccountSize(10000);
        setRiskPercentage(2);
        setEntryPrice('');
        setStopPrice('');
        localStorage.removeItem('calc_accountSize');
        localStorage.removeItem('calc_riskPercentage');
    };

    return (
        <Card variant="institutional" hover={false} className="max-w-4xl mx-auto p-4 md:p-10 mb-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 text-sm">1</span>
                            Your Account Details
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Account Size ($)</label>
                                <input
                                    type="number"
                                    min="500" step="100"
                                    value={accountSize}
                                    onChange={(e) => handleAccountChange(parseFloat(e.target.value) || 0)}
                                    className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 transition-colors"
                                    placeholder="e.g., 10000"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[5000, 10000, 25000].map(val => (
                                    <button key={val} onClick={() => handleAccountChange(val)} className="select-none text-[10px] bg-white/5 hover:bg-white/10 text-gray-400 px-3 py-1.5 rounded-lg transition-colors border border-white/5 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                                        ${val / 1000}K
                                    </button>
                                ))}
                            </div>

                            <div className="pt-2">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex justify-between">
                                    Risk Percentage (%) <span className="text-brand-400">Default: 2%</span>
                                </label>
                                <input
                                    type="number"
                                    min="0.5" max="5" step="0.1"
                                    value={riskPercentage}
                                    onChange={(e) => handleRiskChange(parseFloat(e.target.value) || 0)}
                                    className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 text-sm">2</span>
                            Option Details
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Entry Price ($)</label>
                                <input
                                    type="number"
                                    min="0.01" step="0.01"
                                    value={entryPrice}
                                    onChange={(e) => setEntryPrice(e.target.value)}
                                    className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 transition-colors"
                                    placeholder="Planned buy price"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Stop-Loss Price ($)</label>
                                <input
                                    type="number"
                                    min="0" step="0.01"
                                    value={stopPrice}
                                    onChange={(e) => setStopPrice(e.target.value)}
                                    className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 transition-colors"
                                    placeholder="Exit if wrong"
                                />
                            </div>
                        </div>
                    </div>

                    <button onClick={clearAll} className="select-none text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
                        Recalculate <FiAlertCircle />
                    </button>
                </div>

                <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h3 className="text-xl font-black text-white mb-8 uppercase tracking-[0.2em] text-center relative z-10">Results</h3>

                    {error ? (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center text-red-400 font-bold max-w-sm mx-auto relative z-10">
                            <FiAlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            {error}
                        </div>
                    ) : (parsedEntry > 0 && parsedStop >= 0) ? (
                        <div className="space-y-6 relative z-10 w-full overflow-hidden">
                            <div className="flex justify-between items-center pb-4 border-b border-white/5 gap-4">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest shrink-0">Max Risk Per Trade</span>
                                <AutoScaler align="right">
                                    <span className="text-xl md:text-2xl font-black text-white select-all">${maxRisk.toFixed(2)}</span>
                                </AutoScaler>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-white/5 gap-4">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest shrink-0">Risk Per Contract</span>
                                <AutoScaler align="right">
                                    <span className="text-xl md:text-2xl font-black text-white select-all">${riskPerContract.toFixed(2)}</span>
                                </AutoScaler>
                            </div>
                            <div className="bg-brand-500/10 border border-brand-500/20 rounded-2xl p-4 md:p-6 text-center mt-6 overflow-hidden">
                                <p className="text-xs font-bold text-brand-400 uppercase tracking-[0.2em] mb-2">Max Contracts to Trade</p>
                                <AutoScaler align="center" className="pb-2">
                                    <p className="text-5xl md:text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(32,109,254,0.3)] select-all">{maxContracts}</p>
                                </AutoScaler>
                                {maxContracts === 0 && <p className="text-xs text-gray-500 mt-2">Risk is too high or account too small.</p>}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 font-bold text-sm uppercase tracking-widest relative z-10 my-auto">
                            <FiInfo className="w-8 h-8 mx-auto mb-3 opacity-20" />
                            Enter Entry and Stop-Loss<br />prices to see results
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default function PositionSizeCalculator() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Options Position Size Calculator",
        "applicationCategory": "FinanceApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Calculate how many options contracts to trade based on account size and risk tolerance using the 2% rule."
    };

    return (
        <div className="bg-black min-h-screen relative overflow-hidden text-white font-sans selection:bg-[rgb(32,109,254)]/30 pt-24 pb-12">
            <Helmet>
                <title>Free Options Position Size Calculator | 2% Rule | OnlyOptions</title>
                <meta name="description" content="Calculate exactly how many options contracts to trade based on your account size and risk tolerance. Free position sizing calculator using the 2% rule. Protect your capital." />
                <link rel="canonical" href="https://onlyoptions.us/position-size-calculator" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <StandardSection spacing="md" containerSize="4xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[10px] font-black uppercase tracking-widest mb-6">
                        <FiShield className="w-3 h-3" /> Position Size Calculator
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                        Calculate Your Perfect Options <br className="hidden md:block" /> <span className="text-brand-500">Position Size</span> in Seconds
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        The #1 mistake options traders make is risking too much on a single trade. Our free Position Size Calculator helps you determine exactly how many contracts to trade based on your account size, risk tolerance, and the specific option's risk parameters.
                        <br /><br />
                        Follow the professional 2% rule: never risk more than 2% of your account on any single trade. This calculator does the math for you.
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
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">Position sizing for options follows this simple 3-step formula:</p>
                                <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-300 font-medium">
                                    <li><strong className="text-brand-400">Calculate your maximum dollar risk:</strong> Account Size × Risk Percentage</li>
                                    <li><strong className="text-brand-400">Calculate risk per contract:</strong> (Entry Price - Stop-Loss Price) × 100</li>
                                    <li><strong className="text-brand-400">Divide to find max contracts:</strong> Maximum Dollar Risk ÷ Risk Per Contract</li>
                                </ol>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Example Calculation</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Account Size</span><span className="font-bold text-white">$10,000 (2% Risk)</span></div>
                                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Entry / Stop</span><span className="font-bold text-white">$2.40 / $1.65</span></div>
                                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Max Dollar Risk</span><span className="font-bold text-white">$200</span></div>
                                    <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-400">Risk Per Contract</span><span className="font-bold text-white">$75</span></div>
                                    <div className="flex justify-between pt-2"><span className="text-brand-400 font-bold">Max Contracts</span><span className="text-brand-400 font-black">2.67 → 2 contracts</span></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4">In this example, trading 3 contracts would risk $225 (3 × $75), which exceeds your 2% limit of $200.</p>
                            </div>
                        </div>
                    </section>

                    {/* WHY THE 2% RULE */}
                    <section>
                        <SectionHeader title="Why the 2% Rule is Critical" align="left" className="mb-8" />
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Even with a 70% win rate, you will experience losing streaks. The 2% rule ensures you can survive 10, 20, or even 30 consecutive losses without destroying your account.
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-8">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-white/5 text-xs uppercase tracking-widest text-gray-400">
                                        <th className="p-5 font-black">Consecutive Losses</th>
                                        <th className="p-5 font-black text-brand-400">2% Risk Per Trade</th>
                                        <th className="p-5 font-black text-red-400">10% Risk Per Trade</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm border-t border-white/10">
                                    {[
                                        { loss: "5 losses", risk2: "Down 9.6%", risk10: "Down 41%" },
                                        { loss: "10 losses", risk2: "Down 18%", risk10: "Down 65%" },
                                        { loss: "20 losses", risk2: "Down 33%", risk10: "Down 88%" },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]">
                                            <td className="p-5 font-bold text-white">{row.loss}</td>
                                            <td className="p-5 text-gray-300 font-semibold">{row.risk2}</td>
                                            <td className="p-5 text-gray-300 font-semibold">{row.risk10}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed p-6 bg-brand-500/5 rounded-2xl border border-brand-500/10">
                            <strong className="text-brand-400 block mb-2">Compounding Works Both Ways</strong>
                            Small position sizing protects you on the downside while still allowing meaningful compounding on the upside. A 70% win rate with proper sizing builds wealth slowly and safely. Oversized positions create lottery-ticket volatility.
                        </p>
                    </section>

                    {/* COMMON MISTAKES */}
                    <section>
                        <SectionHeader title="Common Position Sizing Mistakes" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 gap-6">
                            {mistakesData.map((m, i) => (
                                <Card key={i} variant="glass" className="p-6 bg-white/5 border border-white/10">
                                    <h4 className="text-white font-bold mb-3 flex items-start gap-2">
                                        <FiAlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        {m.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* SIZING FOR DIFFERENT ACCOUNTS */}
                    <section>
                        <SectionHeader title="Position Sizing by Account Size" align="left" className="mb-8" />
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="bg-white/5 text-xs uppercase tracking-widest text-gray-400">
                                        <th className="p-5 font-black">Account Size</th>
                                        <th className="p-5 font-black">2% Risk</th>
                                        <th className="p-5 font-black text-brand-400">Typical Contracts</th>
                                        <th className="p-5 font-black">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm border-t border-white/10">
                                    {[
                                        { acc: "$1,000", risk: "$20", cont: "0-1", notes: "Very limited. Focus on cheap options under $0.50." },
                                        { acc: "$2,000", risk: "$40", cont: "1", notes: "Viable for weekly/monthly signals. Avoid expensive 0DTE." },
                                        { acc: "$5,000", risk: "$100", cont: "1-2", notes: "Comfortable trading most signals. Room for 2-3 positions." },
                                        { acc: "$10,000", risk: "$200", cont: "2-3", notes: "Sweet spot for following OnlyOptions signals actively." },
                                        { acc: "$25,000", risk: "$500", cont: "5-8", notes: "Can trade multiple concurrent signals comfortably." },
                                        { acc: "$50,000+", risk: "$1,000+", cont: "10+", notes: "Professional-level capital. Consider spread strategies." }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]">
                                            <td className="p-5 font-bold text-white flex items-center gap-2"><FiDollarSign className="w-4 h-4 text-brand-500" />{row.acc}</td>
                                            <td className="p-5 font-semibold text-gray-300">{row.risk}</td>
                                            <td className="p-5 font-black text-brand-400">{row.cont}</td>
                                            <td className="p-5 text-gray-400 text-xs">{row.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ADVANCED SIZING */}
                    <section>
                        <SectionHeader title="Advanced Position Sizing Tips" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h4 className="text-white font-bold mb-3">Adjusting for Conviction</h4>
                                <ul className="text-sm text-gray-400 space-y-3 font-medium">
                                    <li>• High conviction: <strong className="text-white">2% risk</strong></li>
                                    <li>• Medium conviction: <strong className="text-white">1-1.5% risk</strong></li>
                                    <li>• First time strategy: <strong className="text-white">0.5-1% risk</strong></li>
                                </ul>
                                <p className="text-xs text-brand-400 mt-4 font-bold uppercase tracking-widest">Never size up beyond 2%</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h4 className="text-white font-bold mb-3">Portfolio Heat</h4>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    Total risk across all open positions. Recommended max: <strong className="text-white">6-8% of account</strong>.
                                </p>
                                <p className="text-xs text-gray-500">
                                    Example: 3 open trades at 2% each = 6% total portfolio heat. High heat exposes you to catastrophic drawdowns.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h4 className="text-white font-bold mb-3">Scaling In</h4>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    For longer-dated positions, split entry: Enter 50% immediately, add 50% if trade moves in favor.
                                </p>
                                <p className="text-xs text-gray-500">
                                    Reduces risk if entered early while maintaining upside.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <SectionHeader title="Position Size Calculator — FAQ" align="left" className="mb-8" />
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
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">Position Size Calculator - protect your capital, trade professionally</p>
                        <Button href="/free-trial" size="lg" className="px-10 h-14 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(32,109,254,0.2)]">
                            Get Professional Options Signals
                        </Button>
                    </div>
                </div>
            </StandardSection>
        </div>
    );
}
