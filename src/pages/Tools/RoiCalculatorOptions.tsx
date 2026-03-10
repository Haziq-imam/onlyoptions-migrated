import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import StandardSection from "../../components/ui/Layout/StandardSection";
import SectionHeader from "../../components/ui/Layout/SectionHeader";
import { Card } from "../../components/ui/Card/Card";
import Button from "../../components/ui/Button/Button";
import { FiAlertCircle, FiTrendingUp, FiCheckCircle, FiPieChart, FiInfo, FiTrendingDown, FiTarget } from "react-icons/fi";

const faqData = [
    { q: "What is a realistic monthly ROI target for options?", a: "For most traders, 5-8% monthly ROI is excellent and sustainable long-term. This annualizes to 60-96% per year, far exceeding S&P 500. Beginners should target 3-5% monthly. Advanced traders may achieve 10%+." },
    { q: "Should I include deposits and withdrawals in ROI?", a: "Yes. If you add $1,000 mid-month and end with $11,000 (from $10,000 start), your true profit is $0, not $1,000. Always adjust for deposits/withdrawals to get accurate ROI." },
    { q: "My ROI is 30% this month but -15% next month. Is this normal?", a: "High volatility is common with options but not ideal. Aim for consistent 5-8% monthly over erratic swings. Volatility indicates inconsistent execution or poor position sizing." },
    { q: "How do subscription fees affect ROI?", a: "Subtract subscription costs from profit. Example: $600 profit - $60 OnlyOptions subscription = $540 net profit. ROI = $540 ÷ $10,000 = 5.4%." },
    { q: "Can I compound my way to $1 million starting with $10,000?", a: "Yes, mathematically. At 8% monthly ROI, $10,000 becomes $1 million in ~60 months (5 years). However, maintaining 8% monthly for 5 years is extremely difficult. Most traders experience variance." }
];

const scenariosData = [
    { title: "Scenario 1: New Trader — First Month", details: "Start: $5,000, End: $5,120, Profit: +$120", result: "ROI: 2.4% (annualized: ~29%)", analysis: "Analysis: Modest but profitable start. Learning the system. Good foundation." },
    { title: "Scenario 2: Experienced Trader — Strong Month", details: "Start: $25,000, End: $27,500, Profit: +$2,500", result: "ROI: 10% (annualized: ~120%)", analysis: "Analysis: Excellent month. Matches top-tier professional performance." },
    { title: "Scenario 3: Compounding Trader — 6 Months", details: "Start: $10,000, End: $15,900, Profit: +$5,900", result: "ROI: 59% over 6 months = 9.8% monthly average", analysis: "Analysis: Exceptional. On pace for 118% annual return." },
    { title: "Scenario 4: Losing Month — Drawdown", details: "Start: $15,000, End: $13,800, Loss: -$1,200", result: "ROI: -8%", analysis: "Analysis: Significant loss. Review trades. Ensure 2% rule followed. One bad month is normal; two in a row requires action." }
];

const linksData = [
    { title: "Position size calculator", path: "/position-size-calculator" },
    { title: "Profit calculator", path: "/options-profit-calculator" },
    { title: "Win rate calculator", path: "/win-rate-calculator" },
    { title: "Performance dashboard", path: "/performance" },
    { title: "How it works", path: "/how-it-works" },
    { title: "Free trial", path: "/free-trial" },
    { title: "Risk management", path: "/options-signals-risk-management" },
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
    const [startingBalance, setStartingBalance] = useState<string>('10000');
    const [endingBalance, setEndingBalance] = useState<string>('14200');
    const [timePeriod, setTimePeriod] = useState<string>('3');
    const [deposits, setDeposits] = useState<string>('1000');
    const [withdrawals, setWithdrawals] = useState<string>('0');

    const parsedStart = parseFloat(startingBalance);
    const parsedEnd = parseFloat(endingBalance);
    const parsedTime = parseFloat(timePeriod);
    const parsedDeposits = parseFloat(deposits) || 0;
    const parsedWithdrawals = parseFloat(withdrawals) || 0;

    let adjustedEnding = 0;
    let netProfit = 0;
    let roiPct = 0;
    let monthlyRoi = 0;
    let annualizedReturn = 0;
    let valid = false;
    let isProfit = true;

    if (parsedStart > 0 && parsedTime > 0) {
        valid = true;
        adjustedEnding = parsedEnd - parsedDeposits + parsedWithdrawals;
        netProfit = adjustedEnding - parsedStart;
        roiPct = (netProfit / parsedStart) * 100;
        monthlyRoi = roiPct / parsedTime;
        annualizedReturn = monthlyRoi * 12;
        isProfit = netProfit >= 0;
    }

    const clearAll = () => {
        setStartingBalance('');
        setEndingBalance('');
        setTimePeriod('1');
        setDeposits('0');
        setWithdrawals('0');
    };

    // Compounding Calculation
    const calculateCompounding = (months: number) => {
        if (!valid || monthlyRoi === 0) return parsedStart;
        // P * (1 + r)^n
        const rate = monthlyRoi / 100;
        return parsedStart * Math.pow(1 + rate, months);
    };

    const benchmarkDiff = monthlyRoi - 5; // Compared to 5% benchmark

    return (
        <Card variant="institutional" hover={false} className="max-w-4xl mx-auto p-4 md:p-10 mb-20 relative z-10 print:shadow-none print:border-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8 print:hidden">
                    <div>
                        <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 text-sm">1</span>
                            Your Trading Account
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Starting Balance ($)</label>
                                <input type="number" min="1" step="100" value={startingBalance} onChange={(e) => setStartingBalance(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Ending Balance ($)</label>
                                <input type="number" min="0" step="100" value={endingBalance} onChange={(e) => setEndingBalance(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Time Period (Months)</label>
                                <input type="number" min="0.25" max="60" step="0.25" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Deposits ($)</label>
                                    <input type="number" min="0" step="100" value={deposits} onChange={(e) => setDeposits(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Withdrawals ($)</label>
                                    <input type="number" min="0" step="100" value={withdrawals} onChange={(e) => setWithdrawals(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50" />
                                </div>
                            </div>
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
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest shrink-0">Total Profit/Loss</span>
                                <AutoScaler align="right">
                                    <span className={`text-xl md:text-2xl font-black select-all ${netProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>{netProfit >= 0 ? '+' : ''}${netProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </AutoScaler>
                            </div>

                            <div className={`bg-gray-950/50 border ${isProfit ? 'border-green-500/30' : 'border-red-500/30'} rounded-2xl p-4 md:p-6 text-center mt-2 overflow-hidden`}>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total ROI</p>
                                        <AutoScaler align="center">
                                            <p className={`text-2xl md:text-3xl font-black ${isProfit ? 'text-green-400' : 'text-red-400'}`}>
                                                {roiPct.toFixed(1)}%
                                            </p>
                                        </AutoScaler>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Monthly ROI</p>
                                        <AutoScaler align="center">
                                            <p className={`text-2xl md:text-3xl font-black ${monthlyRoi >= 5 ? 'text-brand-400' : (monthlyRoi >= 0 ? 'text-green-400' : 'text-red-400')}`}>
                                                {monthlyRoi.toFixed(1)}%
                                            </p>
                                        </AutoScaler>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Annualized Return</p>
                                    <AutoScaler align="center">
                                        <p className={`text-3xl md:text-4xl font-black ${isProfit ? 'text-green-400' : 'text-red-400'}`}>
                                            {annualizedReturn.toFixed(1)}%
                                        </p>
                                    </AutoScaler>
                                </div>
                            </div>

                            <div className="space-y-3 mt-4">
                                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                                    {benchmarkDiff >= 0 ? (
                                        <><FiTrendingUp className="text-brand-500" /> <span className="text-brand-400">+{benchmarkDiff.toFixed(1)}% Over 5% Benchmark</span></>
                                    ) : (
                                        <><FiTrendingDown className="text-red-500" /> <span className="text-red-400">{benchmarkDiff.toFixed(1)}% vs 5% Benchmark</span></>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                        <p className="text-[9px] text-gray-500 uppercase font-black mb-1">6-Month Proj.</p>
                                        <p className="text-sm font-bold text-white">${calculateCompounding(6).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                        <p className="text-[9px] text-gray-500 uppercase font-black mb-1">12-Month Proj.</p>
                                        <p className="text-sm font-bold text-brand-400">${calculateCompounding(12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 font-bold text-sm uppercase tracking-widest relative z-10 my-auto">
                            <FiInfo className="w-8 h-8 mx-auto mb-3 opacity-20" />
                            Enter balance details<br />to calculate ROI
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default function RoiCalculatorOptions() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Options Trading ROI Calculator",
        "applicationCategory": "FinanceApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "description": "Calculate your return on investment (ROI) for options trading. Track monthly performance, annualized returns, and compare to benchmarks."
    };

    return (
        <div className="bg-black min-h-screen relative overflow-hidden text-white font-sans selection:bg-[rgb(32,109,254)]/30 pt-24 pb-12">
            <Helmet>
                <title>Free Options Trading ROI Calculator | Monthly Returns | OnlyOptions</title>
                <meta name="description" content="Calculate your return on investment (ROI) for options trading. Enter starting capital and ending balance to see monthly ROI, annualized return, and compare to benchmarks." />
                <link rel="canonical" href="https://onlyoptions.us/roi-calculator" />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <StandardSection spacing="md" containerSize="4xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[10px] font-black uppercase tracking-widest mb-6">
                        <FiPieChart className="w-3 h-3" /> ROI Calculator
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                        Calculate Your Options <br className="hidden md:block" /> <span className="text-brand-500">Trading ROI</span> Instantly
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        ROI measures how much profit you made relative to your capital invested. It is the single most important metric for evaluating trading performance over time. Our calculator shows monthly ROI, annualized return, and helps you track progress toward your goals.
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
                                <p className="text-gray-400 text-sm mb-6">ROI calculation accounts for deposits and withdrawals to give you an accurate picture of performance:</p>
                                <ul className="space-y-4 text-sm text-gray-300 font-medium">
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-500 font-black mt-0.5">1.</span>
                                        <span><strong className="text-brand-400">Adjusted Ending:</strong> Ending Balance - Deposits + Withdrawals</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-500 font-black mt-0.5">2.</span>
                                        <span><strong className="text-brand-400">Net Profit:</strong> Adjusted Ending - Starting Balance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-500 font-black mt-0.5">3.</span>
                                        <span><strong className="text-brand-400">ROI %:</strong> (Net Profit ÷ Starting Balance) × 100</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-500 font-black mt-0.5">4.</span>
                                        <span><strong className="text-brand-400">Monthly ROI:</strong> ROI % ÷ Number of Months</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand-500 font-black mt-0.5">5.</span>
                                        <span><strong className="text-brand-400">Annualized Return:</strong> Monthly ROI × 12</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-sm uppercase tracking-widest text-brand-400 font-black mb-4">Example: 3-Month Period</h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Starting Balance</p><p className="font-bold text-white">$10,000</p></div>
                                        <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Ending Balance</p><p className="font-bold text-white">$14,200</p></div>
                                        <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Deposits</p><p className="font-bold text-white">$1,000</p></div>
                                        <div className="bg-black/20 p-3 rounded-lg"><p className="text-gray-500 mb-1">Time Period</p><p className="font-bold text-white">3 Months</p></div>
                                    </div>
                                    <div className="space-y-2 text-sm pt-2">
                                        <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-gray-400">Adjusted Ending</span><span className="font-bold text-white">$13,200</span></div>
                                        <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-gray-400">Net Profit</span><span className="font-bold text-white">$3,200</span></div>
                                        <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-gray-400">Total ROI</span><span className="font-bold text-green-400">32%</span></div>
                                        <div className="flex justify-between pt-1"><span className="text-brand-400 font-bold">Monthly ROI</span><span className="text-brand-400 font-black">10.7% per month</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHAT IS A GOOD ROI */}
                    <section>
                        <SectionHeader title="What is a Good ROI for Options?" align="left" className="mb-8" />
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-white/5 text-xs uppercase tracking-widest text-gray-400">
                                        <th className="p-5 font-black">Monthly ROI</th>
                                        <th className="p-5 font-black text-brand-400">Quality</th>
                                        <th className="p-5 font-black">Notes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm border-t border-white/10">
                                    {[
                                        { roi: "15%+ per month", quality: "Exceptional", notes: "Top 1% of traders. Very difficult to sustain long-term.", color: "text-brand-400" },
                                        { roi: "8-15% per month", quality: "Excellent", notes: "Professional-level performance. Compound to life-changing wealth.", color: "text-green-400" },
                                        { roi: "5-8% per month", quality: "Very Good", notes: "Solid consistent profits. Most successful traders target this range.", color: "text-green-500" },
                                        { roi: "2-5% per month", quality: "Good", notes: "Profitable but modest. Better than S&P 500 (avg 10%/year).", color: "text-white" },
                                        { roi: "0-2% per month", quality: "Marginal", notes: "Barely profitable. May not beat buy-and-hold index funds.", color: "text-gray-400" },
                                        { roi: "Negative", quality: "Losing", notes: "Unprofitable. Review strategy and risk management immediately.", color: "text-red-400" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]">
                                            <td className={`p-5 font-bold ${row.roi === 'Negative' ? 'text-red-400' : 'text-white'}`}>{row.roi}</td>
                                            <td className={`p-5 font-bold ${row.color}`}>{row.quality}</td>
                                            <td className="p-5 text-gray-400">{row.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* BENCHMARKS */}
                    <section>
                        <SectionHeader title="ROI Benchmarks and Comparisons" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="overflow-x-auto rounded-2xl border border-white/10">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-white/5 text-xs uppercase tracking-widest text-gray-400">
                                            <th className="p-5 font-black">Investment Type</th>
                                            <th className="p-5 font-black text-brand-400">Annual Return</th>
                                            <th className="p-5 font-black">Monthly Eq.</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm border-t border-white/10">
                                        {[
                                            { type: "S&P 500 Index", annual: "~10%", monthly: "0.8%" },
                                            { type: "Savings Account", annual: "~1%", monthly: "0.08%" },
                                            { type: "Conservative Options", annual: "20-30%", monthly: "1.7-2.5%" },
                                            { type: "Aggressive Options", annual: "50-100%", monthly: "4-8%" },
                                            { type: "OnlyOptions Members*", annual: "~72% (avg)", monthly: "~6% (avg)", highlighted: true }
                                        ].map((row, i) => (
                                            <tr key={i} className={`border-t border-white/5 ${row.highlighted ? 'bg-brand-500/5' : 'hover:bg-white/[0.02]'}`}>
                                                <td className={`p-5 font-bold ${row.highlighted ? 'text-brand-400' : 'text-white'}`}>{row.type}</td>
                                                <td className="p-5 font-semibold text-gray-300">{row.annual}</td>
                                                <td className="p-5 text-gray-400 font-semibold">{row.monthly}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center">
                                <p className="text-xs text-gray-500 italic mb-6">*Based on self-reported survey of 312 active members (Nov 2025). Results vary significantly by account size, discipline, and experience.</p>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0">
                                        <FiInfo className="text-brand-500" />
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Options trading can produce exceptional returns but also exceptional losses. The key is consistent positive ROI over many months, not huge single-month gains.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* POWER OF COMPOUNDING */}
                    <section>
                        <SectionHeader title="The Power of Compounding" align="left" className="mb-4" />
                        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                            Unlike annual returns, monthly returns compound 12 times per year. Small monthly gains become massive annual gains:
                        </p>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-white/5 text-xs uppercase tracking-widest text-gray-400">
                                        <th className="p-5 font-black">Monthly ROI</th>
                                        <th className="p-5 font-black">After 6 Months</th>
                                        <th className="p-5 font-black text-brand-400">After 12 Months</th>
                                        <th className="p-5 font-black">After 24 Months</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm border-t border-white/10">
                                    {[
                                        { roi: "3% per month", m6: "+19%", m12: "+43%", m24: "+104%" },
                                        { roi: "5% per month", m6: "+34%", m12: "+80%", m24: "+224%" },
                                        { roi: "8% per month", m6: "+59%", m12: "+151%", m24: "+530%" },
                                        { roi: "10% per month", m6: "+77%", m12: "+214%", m24: "+891%" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]">
                                            <td className="p-5 font-black text-white">{row.roi}</td>
                                            <td className="p-5 font-semibold text-gray-400">{row.m6}</td>
                                            <td className="p-5 font-bold text-brand-400">{row.m12}</td>
                                            <td className="p-5 font-semibold text-gray-400">{row.m24}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-xs text-gray-500 text-center font-bold uppercase tracking-widest">
                            *Starting with $10,000. Example: $10,000 at 8% monthly ROI becomes $25,100 in 12 months and $63,000 in 24 months.
                        </p>
                    </section>

                    {/* HOW TO IMPROVE */}
                    <section>
                        <SectionHeader title="How to Improve Your ROI" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { t: "1. Increase Win Rate", d: "Going from 60% to 70% win rate (same risk-reward) significantly boosts ROI. Focus on higher-quality setups." },
                                { t: "2. Improve Risk-Reward", d: "Targeting 3:1 instead of 2:1 on every trade increases average winner size, improving ROI even with same win rate." },
                                { t: "3. Reduce Drawdowns", d: "The biggest ROI killer is large losing months. Follow the 2% position sizing rule religiously to avoid -20% months." },
                                { t: "4. Trade More Consistently", d: "Skipping good setups leaves money on the table. If your system shows 2-4 signals daily, take them all." },
                                { t: "5. Compound Gains", d: "As your account grows, increase position sizes proportionally. If $10K → $15K, your 2% risk is now $300 instead of $200." },
                                { t: "6. Master Psychology", d: "Avoiding revenge trading and FOMO protects your capital and ensures your ROI reflects your strategy, not your emotions." }
                            ].map((item, i) => (
                                <Card key={i} variant="glass" className="p-6 bg-white/5 border border-white/10">
                                    <h4 className="text-brand-400 font-bold mb-3 text-sm flex items-center gap-2">
                                        <FiTarget className="text-brand-500" />
                                        {item.t}
                                    </h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {item.d}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* TRACKING ROI */}
                    <section>
                        <SectionHeader title="Tracking ROI Over Time" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="overflow-x-auto rounded-2xl border border-white/10">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-white/5 text-xs uppercase tracking-widest text-gray-400">
                                            <th className="p-4 font-black">Month</th>
                                            <th className="p-4 font-black">Profit</th>
                                            <th className="p-4 font-black text-brand-400">ROI %</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm border-t border-white/10">
                                        {[
                                            { m: "Jan 2026", p: "+$650", r: "6.5%" },
                                            { m: "Feb 2026", p: "+$750", r: "7.0%" },
                                            { m: "Mar 2026", p: "+$900", r: "7.9%" },
                                            { m: "Q1 Total", p: "+$2,300", r: "23%", total: true }
                                        ].map((row, i) => (
                                            <tr key={i} className={`border-t border-white/5 ${row.total ? 'bg-brand-500/10' : 'hover:bg-white/[0.02]'}`}>
                                                <td className={`p-4 font-bold ${row.total ? 'text-brand-400' : 'text-white'}`}>{row.m}</td>
                                                <td className="p-4 font-semibold text-green-400">{row.p}</td>
                                                <td className={`p-4 font-black ${row.total ? 'text-brand-400' : 'text-white'}`}>{row.r}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">What to Look For:</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-xs text-gray-300">
                                        <FiCheckCircle className="text-green-500 shrink-0" />
                                        <span><strong className="text-white">Positive ROI every month:</strong> Good consistency</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-xs text-gray-300">
                                        <FiCheckCircle className="text-brand-500 shrink-0" />
                                        <span><strong className="text-white">ROI improving over time:</strong> Learning and improving</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-xs text-gray-300">
                                        <FiAlertCircle className="text-red-500 shrink-0" />
                                        <span><strong className="text-white">Large negative months:</strong> Review risk management</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-xs text-gray-300">
                                        <FiAlertCircle className="text-yellow-500 shrink-0" />
                                        <span><strong className="text-white">Erratic swings (±20%):</strong> Position sizing problem</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* REAL WORLD SCENARIOS */}
                    <section>
                        <SectionHeader title="Common Trading Scenarios" align="left" className="mb-8" />
                        <div className="grid md:grid-cols-2 gap-6">
                            {scenariosData.map((s, i) => (
                                <Card key={i} variant="glass" className="p-6 bg-white/5 border border-white/10">
                                    <h4 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
                                        <FiCheckCircle className="text-brand-500" />
                                        {s.title}
                                    </h4>
                                    <div className="text-xs text-gray-400 space-y-2 mb-4">
                                        <p>{s.details}</p>
                                        <p className="text-brand-400 font-bold">{s.result}</p>
                                        <p className="italic text-gray-500 mt-2">{s.analysis}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <SectionHeader title="ROI Calculator — FAQ" align="left" className="mb-8" />
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
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">ROI Calculator — measure your success, track your growth</p>
                        <Button href="/free-trial" size="lg" className="px-10 h-14 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(32,109,254,0.2)]">
                            Get Real Options Signals
                        </Button>
                    </div>
                </div>
            </StandardSection>
        </div>
    );
}
