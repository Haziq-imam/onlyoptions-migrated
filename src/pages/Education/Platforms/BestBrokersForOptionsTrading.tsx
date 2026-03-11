import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiSmartphone, FiMonitor, FiActivity, FiShield, FiTrendingUp } from 'react-icons/fi';
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
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {answer}
            </div>
        </details>
    );
};

const linksData = [
    { title: "Options 101", path: "/options-trading-101" },
    { title: "Getting options approval", path: "/how-to-get-approved-for-options-trading" },
    { title: "How it works", path: "/how-it-works" },
    { title: "Free trial", path: "/free-trial" },
    { title: "Risk management", path: "/options-signals-risk-management" },
    { title: "Position sizing", path: "/position-size-calculator" },
    { title: "Beginners guide", path: "/options-signals-for-beginners" },
    { title: "Greeks", path: "/options-greeks-explained" },
    { title: "0DTE strategy", path: "/0dte-options-strategy-complete-guide" },
    { title: "Performance", path: "/performance" },
    { title: "FAQ", path: "/faq" },
    { title: "Contact", path: "/contact" }
];

const BestBrokersForOptionsTrading = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-16 md:pt-20">
            <Helmet>
                <title>Best Brokers for Options Trading 2026 | Detailed Comparison</title>
                <meta name="description" content="Compare the best options trading brokers: Robinhood, Webull, Thinkorswim, E*TRADE, Fidelity, Schwab. Commissions, platforms, approval speed, and more. Updated 2026." />
                <link rel="canonical" href="https://onlyoptions.us/best-brokers-for-options-trading" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Platforms"
                    title={<>Best Brokers for <span className="text-brand-500">Options Trading</span></>}
                    description="2026 Complete Comparison Guide"
                    align="center"
                    className="mb-10 md:mb-20"
                />

                <Card variant="glass" className="p-6 md:p-12 mb-10 md:mb-20 border-white/5 bg-gray-950/40">
                    <h3 className="text-2xl font-black mb-6 tracking-tight text-white uppercase italic">Choosing the Right Broker for Options Trading</h3>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Your broker is one of the most important decisions you will make as an options trader. The right platform can save you thousands in commissions, provide better execution, and make trading easier. The wrong one creates frustration, hidden fees, and poor fills.
                        </p>
                        <p>
                            This guide compares the 6 best brokers for options trading in 2026, covering commissions, platforms, approval process, and which broker fits your experience level.
                        </p>
                    </div>
                </Card>

                {/* Quick Comparison Table */}
                <SectionHeader label="Summary" title="Quick Comparison Table" align="center" className="mb-8 md:mb-12" />
                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-20">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Broker</TableHead>
                                <TableHead>Commission</TableHead>
                                <TableHead>Best For</TableHead>
                                <TableHead>Platform</TableHead>
                                <TableHead>Min Account</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { b: "Robinhood", c: "$0", f: "Beginners", p: "Mobile", m: "$0" },
                                { b: "Webull", c: "$0", f: "Active traders", p: "Mobile + Desktop", m: "$0" },
                                { b: "Thinkorswim", c: "$0.65", f: "Advanced", p: "Desktop", m: "$0" },
                                { b: "E*TRADE", c: "$0.50-$0.65", f: "All levels", p: "Both", m: "$0" },
                                { b: "Fidelity", c: "$0.65", f: "Investors", p: "Both", m: "$0" },
                                { b: "Schwab", c: "$0.65", f: "All levels", p: "Both", m: "$0" }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Broker" className="font-black text-brand-500 uppercase italic tracking-wider">{row.b}</TableCell>
                                    <TableCell label="Commission" className="text-white font-bold">{row.c}</TableCell>
                                    <TableCell label="Best For" className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{row.f}</TableCell>
                                    <TableCell label="Platform" className="text-white text-xs">{row.p}</TableCell>
                                    <TableCell label="Min Account" className="text-gray-500 font-mono">{row.m}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </StandardSection>

            {/* Detailed Reviews */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Analysis" title="Detailed Broker Reviews" align="center" className="mb-10 md:mb-20" />
                <div className="space-y-12 md:space-y-24">
                    
                    {/* 1. Robinhood */}
                    <div id="robinhood" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">1. ROBINHOOD — Best for Absolute Beginners</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Entry Level Trading</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Pros:</p>
                                    {[
                                        "$0 commissions on options trades (no per-contract fees)",
                                        "Dead-simple mobile interface — easiest to learn",
                                        "Instant account approval for options (Level 1)",
                                        "No minimum account balance required",
                                        "Fractional shares and crypto trading available",
                                        "Best for small accounts ($500-$5,000)"
                                    ].map((pro, i) => (
                                        <div key={i} className="flex gap-3">
                                            <FiCheck className="text-brand-500 shrink-0 mt-1" />
                                            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider leading-relaxed">{pro}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Cons:</p>
                                    {[
                                        "Limited charting tools (very basic)",
                                        "No desktop platform (mobile-only)",
                                        "Customer service is slow (email only, 1-3 day response)",
                                        "Execution quality concerns on high-volatility days",
                                        "No advanced order types (no conditional orders)"
                                    ].map((con, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-red-500 shrink-0 font-black mt-0.5">•</span>
                                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider leading-relaxed">{con}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic">Who Should Use Robinhood:</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    Complete beginners with small accounts who want the simplest possible interface. If you have never traded options and want zero fees with instant approval, Robinhood is perfect for your first 50-100 trades.
                                </p>
                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Options Approval Process:</div>
                                        <p className="text-white text-sm font-bold">Instant for Level 1 (buying calls and puts). Answer 3-4 questions about income and experience. Approved in under 60 seconds.</p>
                                    </div>
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Commission Structure:</div>
                                        <p className="text-white text-sm font-bold">$0 per trade, $0 per contract. Truly zero commissions. Makes money from payment for order flow.</p>
                                    </div>
                                </div>
                                <div className="mt-8 bg-brand-500/5 p-4 rounded-xl border border-brand-500/10">
                                    <p className="text-[10px] font-black text-center uppercase tracking-widest">Bottom Line: <span className="text-white">Best for: Brand new traders with &lt;$5K accounts who want simplicity.</span></p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* 2. Webull */}
                    <div id="webull" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">2. WEBULL — Best for Active Traders (Zero Commissions)</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Advanced Zero-Fee Trading</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Pros:</p>
                                    {[
                                        "$0 commissions on options (no per-contract fees)",
                                        "Excellent mobile app with advanced charting",
                                        "Desktop platform available (better than Robinhood)",
                                        "Extended hours trading (7 AM - 8 PM ET)",
                                        "Good research tools and technical indicators",
                                        "Paper trading available for practice"
                                    ].map((pro, i) => (
                                        <div key={i} className="flex gap-3">
                                            <FiCheck className="text-brand-500 shrink-0 mt-1" />
                                            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider leading-relaxed">{pro}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Cons:</p>
                                    {[
                                        "Customer support is email-only (slow responses)",
                                        "Options approval takes 1-2 business days",
                                        "Platform can be overwhelming for complete beginners",
                                        "No fractional shares"
                                    ].map((con, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-red-500 shrink-0 font-black mt-0.5">•</span>
                                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider leading-relaxed">{con}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic">Who Should Use Webull:</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    Traders with some experience who want zero commissions plus better tools than Robinhood. Ideal for active traders making 20+ trades per month who want to save on fees.
                                </p>
                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Options Approval:</div>
                                        <p className="text-white text-sm font-bold">Apply online, answer income/experience questions. Approval typically within 1-2 business days for Level 1 and 2.</p>
                                    </div>
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Commission Structure:</div>
                                        <p className="text-white text-sm font-bold">$0 per trade, $0 per contract. No hidden fees.</p>
                                    </div>
                                </div>
                                <div className="mt-8 bg-brand-500/5 p-4 rounded-xl border border-brand-500/10">
                                    <p className="text-[10px] font-black text-center uppercase tracking-widest">Bottom Line: <span className="text-white">Best for: Active traders with $2K-$25K accounts who want free trades with good tools.</span></p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* 3. Thinkorswim */}
                    <div id="thinkorswim" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">3. THINKORSWIM (TD Ameritrade) — Best for Advanced Traders</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Professional Grade Analytics</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Pros:</p>
                                    {[
                                        "Industry-leading desktop platform (best charting, analytics, scanning)",
                                        "Robust paper trading with realistic simulations",
                                        "Extensive education resources and tutorials",
                                        "Advanced order types (conditional orders, OCO, brackets)",
                                        "Excellent customer support (phone + chat)",
                                        "Professional-grade tools for serious traders"
                                    ].map((pro, i) => (
                                        <div key={i} className="flex gap-3">
                                            <FiCheck className="text-brand-500 shrink-0 mt-1" />
                                            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider leading-relaxed">{pro}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Cons:</p>
                                    {[
                                        "$0.65 per contract commission",
                                        "Steep learning curve (not beginner-friendly)",
                                        "Desktop platform required for best features",
                                        "Can be overwhelming with too many features"
                                    ].map((con, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-red-500 shrink-0 font-black mt-0.5">•</span>
                                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider leading-relaxed">{con}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic">Who Should Use Thinkorswim:</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    Experienced traders who need professional tools and are willing to pay $0.65/contract for superior execution and features. Ideal for accounts $10K+.
                                </p>
                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Options Approval:</div>
                                        <p className="text-white text-sm font-bold">Apply online. Approval within 1-3 business days. Higher levels (Level 3, 4) may require phone call.</p>
                                    </div>
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Commission Structure:</div>
                                        <p className="text-white text-sm font-bold">$0.65 per contract. No base trade fee. Example: 5 contracts = $6.50 round-trip ($3.25 buy + $3.25 sell).</p>
                                    </div>
                                </div>
                                <div className="mt-8 bg-brand-500/5 p-4 rounded-xl border border-brand-500/10">
                                    <p className="text-[10px] font-black text-center uppercase tracking-widest">Bottom Line: <span className="text-white">Best for: Serious traders with $10K+ who want the absolute best platform and tools.</span></p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* 4. E*TRADE */}
                    <div id="etrade" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">4. E*TRADE — Best All-Around Broker</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Reliable Versatility</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Pros:</p>
                                    {[
                                        "Two platforms: E*TRADE Web (simple) and Power E*TRADE (advanced)",
                                        "Good mobile app for both beginners and pros",
                                        "Decent research and education resources",
                                        "Reliable execution quality",
                                        "Good customer service (phone + chat)",
                                        "Owned by Morgan Stanley (financial stability)"
                                    ].map((pro, i) => (
                                        <div key={i} className="flex gap-3">
                                            <FiCheck className="text-brand-500 shrink-0 mt-1" />
                                            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider leading-relaxed">{pro}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Cons:</p>
                                    {[
                                        "$0.50-$0.65 per contract depending on volume",
                                        "Platform is less advanced than Thinkorswim",
                                        "Research tools are good but not exceptional"
                                    ].map((con, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-red-500 shrink-0 font-black mt-0.5">•</span>
                                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider leading-relaxed">{con}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic">Who Should Use E*TRADE:</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    Traders who want a reliable, well-rounded broker without committing to the complexity of Thinkorswim. Good for intermediate traders.
                                </p>
                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Options Approval:</div>
                                        <p className="text-white text-sm font-bold">Online application, 1-2 business days for approval.</p>
                                    </div>
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Commission Structure:</div>
                                        <p className="text-white text-sm font-bold">$0.50 per contract if trading 30+ times/quarter, otherwise $0.65. Base fee: $0.</p>
                                    </div>
                                </div>
                                <div className="mt-8 bg-brand-500/5 p-4 rounded-xl border border-brand-500/10">
                                    <p className="text-[10px] font-black text-center uppercase tracking-widest">Bottom Line: <span className="text-white">Best for: Intermediate traders with $5K-$50K who want balance of features and cost.</span></p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* 5. Fidelity */}
                    <div id="fidelity" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">5. FIDELITY — Best for Long-Term Investors</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Institutional Stability</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Pros:</p>
                                    {[
                                        "Trusted name with excellent financial stability",
                                        "Outstanding research and analysis tools",
                                        "Great for IRAs and retirement accounts",
                                        "Fantastic customer service (best in industry)",
                                        "Active Trader Pro desktop platform (free)",
                                        "Good integration with other Fidelity accounts"
                                    ].map((pro, i) => (
                                        <div key={i} className="flex gap-3">
                                            <FiCheck className="text-brand-500 shrink-0 mt-1" />
                                            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider leading-relaxed">{pro}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Cons:</p>
                                    {[
                                        "$0.65 per contract",
                                        "Platform feels dated compared to competitors",
                                        "Not designed primarily for active options trading"
                                    ].map((con, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-red-500 shrink-0 font-black mt-0.5">•</span>
                                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider leading-relaxed">{con}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic">Who Should Use Fidelity:</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    Investors who also trade options occasionally and value research, customer service, and financial stability over cutting-edge platforms.
                                </p>
                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Options Approval:</div>
                                        <p className="text-white text-sm font-bold">Apply online or by phone. 1-3 business days.</p>
                                    </div>
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Commission Structure:</div>
                                        <p className="text-white text-sm font-bold">$0.65 per contract, $0 base fee.</p>
                                    </div>
                                </div>
                                <div className="mt-8 bg-brand-500/5 p-4 rounded-xl border border-brand-500/10">
                                    <p className="text-[10px] font-black text-center uppercase tracking-widest">Bottom Line: <span className="text-white">Best for: Long-term investors with $25K+ who occasionally trade options in IRAs.</span></p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* 6. Schwab */}
                    <div id="schwab" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">6. CHARLES SCHWAB — Best for High-Net-Worth Traders</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Full Service Wealth Trading</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Pros:</p>
                                    {[
                                        "Excellent customer service and branch access",
                                        "Strong research and education",
                                        "StreetSmart Edge desktop platform (solid)",
                                        "Good for diversified portfolios (stocks + options + bonds)",
                                        "Integration with Schwab banking services"
                                    ].map((pro, i) => (
                                        <div key={i} className="flex gap-3">
                                            <FiCheck className="text-brand-500 shrink-0 mt-1" />
                                            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider leading-relaxed">{pro}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Cons:</p>
                                    {[
                                        "$0.65 per contract",
                                        "Platform is decent but not cutting-edge",
                                        "Better for investors than pure traders"
                                    ].map((con, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-red-500 shrink-0 font-black mt-0.5">•</span>
                                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider leading-relaxed">{con}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic">Who Should Use Schwab:</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    High-net-worth individuals ($100K+) who want a full-service broker with options trading capabilities alongside wealth management.
                                </p>
                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Options Approval:</div>
                                        <p className="text-white text-sm font-bold">Online application or in-branch. 1-3 business days.</p>
                                    </div>
                                    <div>
                                        <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-1">Commission Structure:</div>
                                        <p className="text-white text-sm font-bold">$0.65 per contract, $0 base fee.</p>
                                    </div>
                                </div>
                                <div className="mt-8 bg-brand-500/5 p-4 rounded-xl border border-brand-500/10">
                                    <p className="text-[10px] font-black text-center uppercase tracking-widest">Bottom Line: <span className="text-white">Best for: Wealthy investors with $100K+ who want comprehensive financial services.</span></p>
                                </div>
                            </Card>
                        </div>
                    </div>

                </div>
            </StandardSection>

            {/* How to Choose */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Strategy" title="How to Choose Your Broker" align="center" className="mb-10 md:mb-20" />
                <div className="max-w-4xl mx-auto">
                    <Card variant="institutional" className="p-6 md:p-12 border-white/5 bg-gray-950/60">
                        <h4 className="text-white font-black mb-12 uppercase tracking-[0.2em] text-center italic">Decision Tree</h4>
                        <div className="space-y-8">
                            {[
                                { q: "If you are a complete beginner with <$5K:", a: "Choose Robinhood or Webull (zero commissions, simple)" },
                                { q: "If you have $5K-$25K and trade actively (10+ trades/month):", a: "Choose Webull (free trades, good tools) or E*TRADE (reliable)" },
                                { q: "If you have $10K+ and are serious about trading:", a: "Choose Thinkorswim (best platform, worth the $0.65 fee)" },
                                { q: "If you are an investor who trades options occasionally:", a: "Choose Fidelity or Schwab (great service, research)" },
                                { q: "If commissions are your #1 priority:", a: "Choose Robinhood or Webull (literally $0)" }
                            ].map((row, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-4 md:items-center pb-8 border-b border-white/5 last:border-0 last:pb-0">
                                    <div className="md:w-1/2 text-gray-500 text-[10px] font-black uppercase tracking-widest italic">{row.q}</div>
                                    <div className="md:w-1/2 flex items-center gap-3">
                                        <FiArrowRight className="text-brand-500 shrink-0" />
                                        <span className="text-white text-xs font-black uppercase tracking-widest">{row.a}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Commission Calculator */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Cost Analysis" title="Commission Calculator" align="center" className="mb-10 md:mb-20" />
                <div className="max-w-4xl mx-auto space-y-12">
                    <Card variant="glass" className="p-6 md:p-12 border-white/5 bg-gray-950/40">
                         <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm italic text-center">Example: 50 Trades Per Month</h4>
                         <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] text-center mb-8">Average trade: 2 contracts per trade = 100 contracts/month</p>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Broker</TableHead>
                                    <TableHead>Cost Per Month</TableHead>
                                    <TableHead>Annual Cost</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { b: "Robinhood/Webull", m: "$0", a: "$0", c: "text-brand-500" },
                                    { b: "E*TRADE", m: "$100", a: "$1,200", c: "text-white" },
                                    { b: "Thinkorswim", m: "$130", a: "$1,560", c: "text-white" },
                                    { b: "Fidelity/Schwab", m: "$130", a: "$1,560", c: "text-white" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Broker" className="font-black italic text-white uppercase">{row.b}</TableCell>
                                        <TableCell label="Monthly" className={`font-black uppercase tracking-widest ${row.c}`}>{row.m}</TableCell>
                                        <TableCell label="Annual" className="text-white font-mono">{row.a}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </Card>
                    <div className="prose prose-invert prose-brand max-w-none text-center">
                        <p className="text-gray-500 uppercase italic text-sm">
                            For active traders, zero-commission brokers save $1,200-$1,560 per year. For occasional traders (5-10 trades/month), commissions are negligible ($30-$60/month).
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* FAQ Section */}
            <StandardSection divider="top" spacing="lg" containerSize="4xl">
                <div className="prose prose-invert prose-brand max-w-none space-y-16">
                    <section>
                        <SectionHeader label="Questions" title={<>Broker Comparison <span className="text-brand-500">FAQ</span></>} align="center" className="mb-12" />
                        <div className="space-y-4">
                             {[
                                { q: "Can I have accounts at multiple brokers?", a: "Yes. Many traders use Robinhood or Webull for quick 0DTE trades (to save on commissions) and Thinkorswim for serious analysis and swing trades. There is no rule against multiple accounts." },
                                { q: "Which broker has the fastest options approval?", a: "Robinhood approves Level 1 options instantly (under 60 seconds). Webull and E*TRADE typically approve within 1 business day. Thinkorswim, Fidelity, and Schwab take 1-3 business days." },
                                { q: "Do commissions matter if I am a beginner?", a: "Not really. If you are trading 5-10 times per month, commissions are $30-$60/month. Execution quality and platform usability matter more. However, if trading 50+ times/month, zero commissions save $100-$150/month." },
                                { q: "Which broker has the best mobile app?", a: "Webull has the best mobile app for active traders (advanced charting, indicators, paper trading). Robinhood has the simplest mobile app for beginners. Thinkorswim mobile is powerful but complex." },
                                { q: "Can I trade options in an IRA?", a: "Yes, at all six brokers. You need to apply for options approval separately for your IRA. Most brokers allow Level 1 (buying calls/puts) in IRAs. Level 2+ may be restricted." },
                                { q: "Which broker works best with OnlyOptions signals?", a: "All six work perfectly. OnlyOptions signals include ticker, strike, expiration, entry range — compatible with any broker. For beginners, Robinhood or Webull. For serious traders, Thinkorswim." }
                            ].map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </section>

                    {/* Resources Grid */}
                    <section className="border-t border-white/5 pt-16">
                         <div className="text-center mb-12">
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Best Brokers for Options — choose wisely, trade profitably.</p>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8 text-center">Resources</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {linksData.map((link, i) => (
                                <Link key={i} to={link.path} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all">
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

export default BestBrokersForOptionsTrading;
