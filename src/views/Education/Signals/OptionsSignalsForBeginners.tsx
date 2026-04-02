import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiPlay, FiAlertTriangle, FiSmartphone } from 'react-icons/fi';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from "@/lib/react-router-dom-stub";
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../components/ui/Card/Card';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';

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
    { title: "Win rate calculator", path: "/win-rate-calculator" },
    { title: "How it works", path: "/how-it-works" },
    { title: "Get Access", path: "/membership" },
    { title: "Options 101", path: "/options-trading-101" },
    { title: "Risk management", path: "/options-signals-risk-management" },
    { title: "Best brokers", path: "/best-brokers-for-options-trading" },
    { title: "0DTE strategy", path: "/0dte-options-strategy-complete-guide" },
    { title: "Greeks explained", path: "/options-greeks-explained" },
    { title: "Profit calculator", path: "/options-profit-calculator" },
    { title: "Getting approval", path: "/how-to-get-approved-for-options-trading" },
    { title: "Performance", path: "/performance" },
    { title: "Risk disclaimer", path: "/risk-disclaimer" },
    { title: "Contact", path: "/contact" },
    { title: "Testimonials", path: "/testimonials" },
    { title: "FAQ", path: "/faq" }
];

const OptionsSignalsForBeginners = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Options Signals for Beginners: Complete Guide | OnlyOptions</title>
                <meta name="description" content="Learn how to follow options signals as a complete beginner. Step-by-step guide covering account setup, signal execution, risk management, and common mistakes to avoid." />
                <link rel="canonical" href="https://onlyoptions.us/options-signals-for-beginners" />
            </Helmet>

            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Education"
                    title={<>Options Signals for <span className="text-brand-500">Beginners</span></>}
                    description="Complete Beginner's Guide to Following Options Signals"
                    align="center"
                    className="mb-20"
                />

                <Card variant="glass" className="p-8 md:p-12 mb-20 border-white/5 bg-gray-950/40">
                    <h3 className="text-2xl font-black mb-6 tracking-tight text-white uppercase italic">Start Trading Options Signals — Even With Zero Experience</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        You do not need years of experience or a finance degree to follow options signals successfully. OnlyOptions provides everything you need: exact entry prices, profit targets, stop-losses, and position sizing recommendations.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        This guide walks you through every step, from opening your first broker account to executing your first profitable trade.
                    </p>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-xl font-black mb-8 tracking-[0.2em] flex items-center gap-3 uppercase text-white">
                            <FiCheck className="text-brand-500" />
                            Prerequisite Checklist
                        </h3>
                        <div className="space-y-4">
                             {[
                                "Age 18+ (or legal age in your country)",
                                "$2,000-$5,000 in risk capital (money you can afford to lose)",
                                "Broker account with options approval (Level 1 minimum)",
                                "Basic understanding of what options are (calls vs puts)",
                                "Ability to monitor phone during market hours (9:30 AM - 4 PM ET)",
                                "Emotional discipline to follow rules and cut losses"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-colors group">
                                    <div className="w-6 h-6 rounded border-2 border-brand-500/30 flex items-center justify-center text-brand-500 group-hover:bg-brand-500/10 transition-colors">
                                        <FiCheck className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Card variant="institutional" className="p-10 border-brand-500/20 bg-brand-500/[0.03]">
                        <FiAlertTriangle className="w-12 h-12 text-brand-500 mb-6" />
                        <h4 className="text-xl font-black mb-4 tracking-tight text-white uppercase italic">Wait... Are You Ready?</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            If you checked all 6 boxes, you are ready. If not, complete the missing requirements before trading real money. Risking capital without these foundations is high-risk gambling.
                        </p>
                        <a href="/membership" className="text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-brand-500 transition-all underline decoration-white/10 underline-offset-8">
                            Get Access Now <FiArrowRight className="inline ml-1" />
                        </a>
                    </Card>
                </div>
            </StandardSection>

            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div className="space-y-3">
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Navigation Guide</p>
                            {["Learn the Basics", "Broker Setup", "Paper Trading", "Subscribe", "Execute First Trade"].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 text-gray-400 group cursor-default transition-colors hover:text-white">
                                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-black group-hover:border-brand-500/50 group-hover:text-brand-500 transition-all">{i + 1}</span>
                                    <span className="font-black tracking-widest text-[10px] uppercase">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-32">
                        {/* Step 1 */}
                        <section className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Step 1: Learn the Basics</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Essential Knowledge (10 Minutes of Reading)</p>
                            </div>
                            <div className="space-y-8">
                                <p className="text-gray-400 leading-relaxed text-lg">Before following any signals, understand these core concepts:</p>
                                <Card variant="glass" className="p-8 bg-gray-950/40 border-white/5">
                                    <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic">What is an Option?</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8">A contract that gives you the right to buy (call) or sell (put) 100 shares of a stock at a specific price before a specific date. You pay a premium for this right.</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { t: "Call", d: "Bet on stock going UP" },
                                            { t: "Put", d: "Bet on stock going DOWN" },
                                            { t: "Strike Price", d: "Target Price" },
                                            { t: "Expiration", d: "Valid Until Date" },
                                            { t: "Premium", d: "Entry Cost" },
                                            { t: "Contract", d: "100 Shares Units" }
                                        ].map((item, i) => (
                                            <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                                                <div className="text-brand-400 text-[9px] font-black uppercase tracking-widest mb-1">{item.t}</div>
                                                <div className="text-white text-xs font-black uppercase">{item.d}</div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>

                                <Card variant="institutional" className="p-0 border-white/5 overflow-hidden bg-gray-950/60">
                                    <div className="bg-white/[0.03] px-8 py-4 border-b border-white/5">
                                        <h4 className="text-white font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 italic">
                                            <FiPlay className="text-brand-500 w-3 h-3" /> Signal Components Explained
                                        </h4>
                                    </div>
                                    <div className="p-8">
                                        <div className="bg-black/60 p-6 rounded-2xl font-mono text-brand-400 text-sm mb-8 border border-brand-500/20 shadow-inner">
                                            "Buy SPY $575 Call, Feb 28 expiration, entry $2.30-$2.50"
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { label: "SPY", value: "Ticker symbol" },
                                                { label: "$575", value: "Strike price" },
                                                { label: "Call", value: "Betting UP" },
                                                { label: "Feb 28", value: "Expiration date" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                                    <span className="text-white font-black text-xs uppercase tracking-widest">{item.label}</span>
                                                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{item.value}</span>
                                                </div>
                                            ))}
                                            <div className="flex justify-between items-center pt-4">
                                                <span className="text-brand-400 font-extrabold text-[10px] uppercase tracking-widest">Total Transaction Cost</span>
                                                <span className="text-brand-500 font-black text-sm">$2.40 × 100 = $240/contract</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <div className="pt-4">
                                    <a href="/options-trading-101" className="text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-brand-500 transition-all underline decoration-white/10 underline-offset-8">
                                        Read Our Options Trading 101 Guide <FiArrowRight className="inline ml-1" />
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Step 2 */}
                        <section className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Step 2: Broker Setup</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Open and Fund Your Account</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { name: "Robinhood", label: "Best for Beginners", desc: "$0 commissions, simplest interface, instant approval" },
                                    { name: "Webull", label: "Best Tools", desc: "$0 commissions, more features, beginner-friendly" },
                                    { name: "thinkorswim", label: "Best Education", desc: "$0.65/contract, best paper trading and professional tools" }
                                ].map((broker, i) => (
                                    <Card key={i} variant="glass" className="p-8 text-center group hover:border-brand-500/30 transition-all bg-gray-950/40 border-white/5">
                                        <div className="text-brand-500 text-[9px] font-black uppercase mb-4 tracking-[0.2em]">{broker.label}</div>
                                        <h4 className="text-white font-black text-lg mb-3 uppercase italic">{broker.name}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed font-medium">{broker.desc}</p>
                                    </Card>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <a href="/best-brokers-for-options-trading" className="text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-brand-500 transition-all underline decoration-white/10 underline-offset-8">
                                    View Full Broker Comparison <FiArrowRight className="inline ml-1" />
                                </a>
                            </div>

                            <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">Account Opening Process (15 Minutes)</h4>
                                <ol className="space-y-4">
                                    {[
                                        "Visit broker website and click \"Open Account\"",
                                        "Enter personal information (name, address, SSN, employment)",
                                        "Answer financial questions (income, net worth, investment experience)",
                                        "Apply for options approval (select Level 1 or Level 2)",
                                        "Fund your account via bank transfer ($2,000-$5,000 recommended)",
                                        "Wait for approval (instant for Robinhood, 1-3 days for others)"
                                    ].map((step, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="text-brand-500 font-black text-xs">{i + 1}.</span>
                                            <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </Card>
                        </section>

                        {/* Step 3 */}
                        <section className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Step 3: Paper Trading</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Highly Recommended Strategy</p>
                            </div>
                            <Card variant="institutional" className="p-10 bg-brand-500/[0.02] border-brand-500/10">
                                <div className="flex flex-col md:flex-row gap-12">
                                    <div className="md:w-1/2 space-y-6">
                                        <h4 className="text-white font-black text-xl mb-4 tracking-tight uppercase italic">What is Paper Trading?</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                                            Paper trading = fake money, real prices. You practice executing trades without risking actual capital. Practice for 1-2 weeks before using real money. Thinkorswim offers the best paper trading platform (free).
                                        </p>
                                        <div className="grid grid-cols-1 gap-3">
                                            {[
                                                "Execute 10-20 practice trades following OnlyOptions signals",
                                                "Practice setting stop-losses and profit targets",
                                                "Experience both winning and losing trades",
                                                "Learn your broker's platform interface",
                                                "Build execution confidence"
                                            ].map((check, i) => (
                                                <div key={i} className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest">
                                                    <FiCheck className="text-brand-500 shrink-0" /> {check}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 bg-gray-950/60 p-8 rounded-3xl border border-white/5 shadow-2xl relative">
                                        <div className="text-brand-400 font-extrabold text-[11px] uppercase tracking-widest mb-4 italic">"Your first real trade will trigger intense emotions. Paper trading makes execution feel routine."</div>
                                        <div className="text-gray-600 text-[9px] font-black uppercase tracking-[0.3em]">— Analyst Perspective</div>
                                        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-brand-500/5 blur-2xl rounded-full" />
                                    </div>
                                </div>
                            </Card>
                        </section>

                        {/* Step 4 */}
                        <section className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Step 4: Subscription</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Start Your Premium Membership</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                                    <h4 className="text-white font-black mb-8 flex items-center gap-2 uppercase text-[10px] tracking-[0.2em] italic"><FiPlay className="text-brand-400" /> Start Process</h4>
                                    <ol className="space-y-6">
                                        {[
                                            "Visit onlyoptions.us/signup",
                                            "Enter your email address",
                                            "Receive welcome email instantly",
                                            "Set password and log in"
                                        ].map((step, i) => (
                                            <li key={i} className="flex gap-4">
                                                <span className="text-brand-500 font-black text-xs">{i + 1}.</span>
                                                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </Card>
                                <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                                    <h4 className="text-white font-black mb-8 flex items-center gap-2 uppercase text-[10px] tracking-[0.2em] italic"><FiSmartphone className="text-brand-400" /> Set Up Alerts</h4>
                                    <div className="space-y-6">
                                        {[
                                            { t: "Email", d: "Arrives instantly to inbox" },
                                            { t: "Mobile Push Notifications", d: "Download our mobile app or enable browser notifications" },
                                            { t: "SMS (Pro plan only)", d: "Text messages for fastest delivery" }
                                        ].map((alert, i) => (
                                            <div key={i} className="flex items-center gap-4 group">
                                                <div className="w-2 h-2 rounded-full bg-brand-500 group-hover:scale-125 transition-transform" />
                                                <div>
                                                    <div className="text-white text-[10px] font-black uppercase tracking-widest">{alert.t}</div>
                                                    <div className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">{alert.d}</div>
                                                </div>
                                            </div>
                                        ))}
                                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest italic pt-4">Test alerts by sending yourself a test notification to confirm they work.</p>
                                    </div>
                                </Card>
                            </div>
                        </section>

                        {/* Step 5 */}
                        <section className="space-y-8 pb-10">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Step 5: First Signal</h2>
                                <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Execution Steps</p>
                            </div>
                            
                            <Card variant="institutional" className="p-0 overflow-hidden mb-12 border-brand-500/20 bg-gray-950/80">
                                <div className="bg-brand-500/10 px-8 py-5 border-b border-brand-500/20">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-brand-400 font-black text-[10px] uppercase tracking-[0.3em] italic">📊 Signal Anatomy Template</h4>
                                        <span className="bg-brand-500 text-black text-[9px] font-black px-3 py-1 rounded-full">ACTIVE ALERT</span>
                                    </div>
                                </div>
                                <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        {[
                                            { l: "Ticker", v: "SPY", c: "text-white" },
                                            { l: "Option", v: "CALL $575", c: "text-white" },
                                            { l: "Expiry", v: "Feb 28, 2026", c: "text-white" },
                                            { l: "Entry", v: "$2.30 - $2.50", c: "text-white" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{item.l}</span>
                                                <span className={`${item.c} text-xs font-black uppercase tracking-widest`}>{item.v}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { l: "Target", v: "$4.20 (+75%)", c: "text-brand-500" },
                                            { l: "Stop-Loss", v: "$1.65 (-31%)", c: "text-red-500" },
                                            { l: "Risk-Reward", v: "2.4:1", c: "text-white" },
                                            { l: "Position", v: "1-2 Units", c: "text-white" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{item.l}</span>
                                                <span className={`${item.c} text-xs font-black uppercase tracking-widest`}>{item.v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>

                            <div className="space-y-12">
                                <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                                    <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">Execution Steps (First Trade)</h4>
                                    <div className="space-y-8">
                                        <div>
                                            <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4">Step 1: Open Your Broker Platform</h5>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Log in to Robinhood, Webull, or Thinkorswim.</p>
                                        </div>
                                        <div>
                                            <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4">Step 2: Find the Option</h5>
                                            <ul className="space-y-2">
                                                {[
                                                    "Search for the ticker (SPY)",
                                                    "Navigate to \"Options\" or \"Options Chain\"",
                                                    "Select expiration date (Feb 28)",
                                                    "Find the strike price ($575) under CALL column"
                                                ].map((li, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest">
                                                        <span className="text-brand-500">{i + 12}.</span> {li}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4">Step 3: Place Your Order</h5>
                                            <ul className="space-y-2">
                                                {[
                                                    "Click \"Buy\" or \"Trade\"",
                                                    "Select \"Limit Order\" (NEVER use market orders)",
                                                    "Enter number of contracts: 1 (start with 1 only)",
                                                    "Enter limit price: $2.35 (start at lower end of $2.30-$2.50 range)",
                                                    "Select \"Day\" or \"GTC\" (Good Till Canceled)",
                                                    "Review: Ticker, strike, expiration, quantity, price",
                                                    "Click \"Submit Order\""
                                                ].map((li, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest">
                                                        <span className="text-brand-500">{i + 16}.</span> {li}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4">Step 4: Wait for Fill</h5>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">Your order will sit in the market. If it fills within 2-3 minutes, great. If not, cancel and resubmit at $2.40, then $2.45 if needed. Do not chase above $2.50.</p>
                                        </div>
                                        <div className="p-6 bg-brand-500/5 border border-brand-500/20 rounded-2xl">
                                            <h5 className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4">Step 5: Set Your Stop-Loss IMMEDIATELY</h5>
                                            <ul className="space-y-2 mb-4">
                                                {[
                                                    "Create a new SELL order for the same contracts you just bought",
                                                    "Order type: Limit Order",
                                                    "Limit price: $1.65 (the stop-loss from our signal)",
                                                    "Time: GTC (Good Till Canceled)",
                                                    "Submit the order"
                                                ].map((li, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest">
                                                        <span className="text-brand-500">{i + 23}.</span> {li}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest italic">This stop-loss sits in your account and auto-executes if the option falls to $1.65. You do not need to watch constantly.</p>
                                        </div>
                                    </div>
                                </Card>

                                <div className="space-y-8">
                                    <h4 className="text-white font-black text-xl tracking-tight uppercase italic text-center">Common First-Trade Questions</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { q: "What if I miss the entry range?", a: "Skip the trade. Do not chase. Wait for the next signal. Our win rate assumes entry within the specified range." },
                                            { q: "Should I buy 1 contract or 2?", a: "Start with 1 contract for your first 10 trades. Learn the process before scaling up." },
                                            { q: "What if my order does not fill?", a: "Wait 2-3 minutes. If no fill, cancel and increase price by $0.05. Repeat until filled or you hit the top of the entry range." },
                                            { q: "Do I need to watch the trade all day?", a: "No. Your stop-loss auto-executes if hit. You will receive an exit alert from us when we close the position. Check 2-3 times during the day if you want, but constant watching creates stress." }
                                        ].map((faq, i) => (
                                            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                                <p className="text-white text-[10px] font-black uppercase tracking-widest mb-2">Q: {faq.q}</p>
                                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 text-center pt-10">
                                <h4 className="text-white font-black text-xl tracking-tight uppercase italic mb-8">Ready to execute?</h4>
                                <div className="flex flex-wrap gap-6 justify-center">
                                    <a href="/how-to-get-approved-for-options-trading" className="text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-brand-500 transition-all underline decoration-white/10 underline-offset-8">
                                        Getting Broker Approval <FiArrowRight className="inline ml-1" />
                                    </a>
                                    <a href="/how-it-works" className="text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-brand-500 transition-all underline decoration-white/10 underline-offset-8">
                                        See Full Signal Format <FiArrowRight className="inline ml-1" />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </StandardSection>

            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Planning" title={<>Your First Month <span className="text-brand-500">Roadmap</span></>} align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { w: "Week 1", t: "Paper Trading", d: "Goal: Execute 5 paper trades following our signals. Learn the mechanics without risking money." },
                        { w: "Week 2", t: "First Real Trades", d: "Goal: Execute 3-5 real trades with 1 contract each. Focus on perfect execution (entry, stop-loss, exit). Profit is secondary." },
                        { w: "Week 3", t: "Build Discipline", d: "Goal: Follow the 2% rule strictly. Track every trade in a journal (entry, exit, P&L, lessons learned)." },
                        { w: "Week 4", t: "Scale Gradually", d: "Goal: If profitable after 10 trades, increase to 2 contracts per trade. Continue 2% rule." }
                    ].map((step, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 hover:border-brand-500/20 transition-all bg-gray-950/40">
                            <div className="text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4 text-center">{step.w}</div>
                            <h4 className="text-white font-black mb-4 tracking-tight uppercase text-sm italic text-center">{step.t}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed text-center">{step.d}</p>
                        </Card>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <Card variant="institutional" className="inline-block p-8 border-brand-500/20">
                        <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">After Month 1</h4>
                        <div className="space-y-4 text-left">
                            {[
                                { q: "Win rate > 50%?", a: "Good, keep going." },
                                { q: "Win rate < 50%?", a: "Review mistakes, return to paper trading." },
                                { q: "Following stop-losses?", a: "Great discipline." },
                                { q: "Ignoring stop-losses?", a: "Fix this immediately or quit." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest">{item.q}</span>
                                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{item.a}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </StandardSection>

            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Strategy" title={<>Beginner-Friendly <span className="text-brand-500">Signal Types</span></>} align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h4 className="text-brand-500 font-black text-xl tracking-tight uppercase italic text-center">Start With These</h4>
                        <div className="space-y-4">
                            {[
                                "Weekly options (7-14 days to expiration) — easier than 0DTE",
                                "SPY or QQQ signals only — most liquid, best execution",
                                "Signals with 2:1+ risk-reward — better margin for error",
                                "Daytime signals (10 AM - 2 PM) — avoid first/last hour volatility"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-green-500/[0.02] border border-green-500/10">
                                    <FiCheck className="text-green-500 w-4 h-4" />
                                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h4 className="text-red-500 font-black text-xl tracking-tight uppercase italic text-center">Avoid These (For Now)</h4>
                        <div className="space-y-4">
                            {[
                                "0DTE options (too fast, too risky)",
                                "Earnings plays (high volatility, unpredictable)",
                                "Individual stock options with low volume (wide spreads, poor fills)",
                                "Signals during first 30 minutes (9:30-10:00 AM) or last hour (3-4 PM)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-red-500/[0.02] border border-red-500/10">
                                    <FiAlertTriangle className="text-red-500 w-4 h-4" />
                                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StandardSection>

            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Psychology" title={<>Emotional Management <span className="text-brand-500">for Beginners</span></>} align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm italic text-center">Expect These Emotions</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {["Fear", "Greed", "FOMO", "Panic", "Euphoria"].map((emotion, i) => (
                                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                                    <span className="text-brand-500 text-[10px] font-black uppercase tracking-widest">{emotion}</span>
                                </div>
                            ))}
                            <div className="col-span-2 text-center text-gray-400 text-[9px] font-bold uppercase tracking-widest italic pt-4">"Success is managing your emotions, not predicting the market."</div>
                        </div>
                    </Card>
                    <div className="space-y-6">
                        <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic text-center">Combat Strategies</h4>
                        {[
                            { e: "Fear", d: "Remember: You risked 2% maximum. Even if this trade goes to zero, you still have 98% of your account. That is why position sizing matters." },
                            { e: "Greed", d: "Stick to 1-2 contracts per trade for first 3 months. Do not increase size after a big win. Variance always reverts." },
                            { e: "FOMO", d: "There are 2-4 signals every day, 10-20 per week. You will never \"miss out\" — another opportunity is always coming. Never chase." },
                            { e: "Panic", d: "Your stop-loss is there for a reason. Trust it. Do not override it based on emotion." },
                            { e: "Euphoria", d: "One big win does not make you an expert. Stick to the process. Most beginners blow up their accounts after their first 3-4 wins because overconfidence leads to overleveraging." }
                        ].map((strategy, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <span className="text-brand-500 font-black text-[10px] uppercase tracking-widest shrink-0">{strategy.e}:</span>
                                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest leading-relaxed">{strategy.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </StandardSection>

            <StandardSection variant="muted" divider="both" spacing="lg">
                <SectionHeader label="Risk Protocol" title={<>Beginner Mistakes to <span className="text-brand-500">Eliminate</span></>} align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { t: "Skipping Stop-Loss", m: "I will exit manually if it drops.", f: "ALWAYS set the stop-loss immediately after entry. It is non-negotiable." },
                        { t: "Overleveraging", m: "This signal looks good, risking 20%.", f: "Never risk more than 2% per trade. Preserve your capital always." },
                        { t: "Panic Selling", m: "Up 15%, sell before it reverses?", f: "Trust the target. If you exit early, take partial profits (sell 50%)." },
                        { t: "Holding Losers", m: "Maybe it will bounce back up.", f: "When stop hits, EXIT. No exceptions. Protect your long-term success." },
                        { t: "Overtrading", m: "I must take every single alert.", f: "Skip signals when busy. Quality over quantity is the professional way." }
                    ].map((mistake, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 hover:border-brand-500/20 transition-all bg-gray-950/40">
                            <FiAlertTriangle className="w-8 h-8 text-brand-500 mb-6" />
                            <h4 className="text-white font-black mb-4 tracking-tight uppercase text-sm italic">{mistake.t}</h4>
                            <div className="text-gray-500 text-[10px] font-extrabold uppercase tracking-widest italic mb-6">" {mistake.m} "</div>
                            <div className="text-brand-400 text-[10px] font-black uppercase leading-relaxed tracking-widest">{mistake.f}</div>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            <StandardSection divider="top" spacing="lg" containerSize="4xl">
                <div className="prose prose-invert prose-brand max-w-none space-y-16">
                    {/* FAQ */}
                    <section>
                        <SectionHeader label="Questions" title={<>Beginner <span className="text-brand-500">FAQ</span></>} align="center" className="mb-12" />
                        <div className="space-y-4">
                             {[
                                { q: "How much money do I really need to start?", a: "Minimum $2,000 if following our 2% rule. With $2,000, you risk $40 per trade, which allows 1 contract on most signals. Under $2,000, position sizing becomes very restrictive. Ideal starting amount: $5,000." },
                                { q: "Can I start with $500?", a: "Not recommended. With $500 and 2% rule, you can only risk $10 per trade. This limits you to very cheap options or fractional contracts (not possible). Save up to $2,000 minimum before starting." },
                                { q: "How long until I am profitable?", a: "Most beginners are breakeven or slightly profitable within 3-6 months if they follow rules strictly. Some take 12 months. A few never become profitable (usually due to ignoring stop-losses). Your timeline depends on discipline, not intelligence." },
                                { q: "Should I quit my job to trade full-time?", a: "No. Never quit your job to trade. OnlyOptions signals work perfectly for people with full-time jobs — you check your phone 2-3 times per day, execute trades during lunch breaks, and manage via mobile. Trading is a side income, not a career replacement." },
                                { q: "What if I do not understand a signal?", a: "Ask in our support email. We respond within 24 hours (1 hour for Pro members). Never trade a signal you do not understand. Skipping trades is smart risk management." },
                                { q: "Can I use a retirement account (IRA) to follow signals?", a: "Yes, if your IRA has options approval. Most brokers allow Level 1 options (buying calls/puts) in IRAs. Tax advantages: gains are tax-deferred. Downside: Cannot withdraw until retirement age without penalty. Checking 2-3 times per day is sufficient." }
                            ].map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </section>

                    {/* NEXT STEPS */}
                    <section className="border-t border-white/5 pt-16">
                        <SectionHeader label="Action Plan" title="Next Steps" align="center" className="mb-12" />
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 max-w-2xl mx-auto">
                            <ol className="space-y-6">
                                {[
                                    { t: "Read Options Trading 101 if you have not already", p: "/options-trading-101" },
                                    { t: "Open a broker account (Robinhood or Webull recommended for beginners)", p: "/best-brokers-for-options-trading" },
                                    { t: "Paper trade for 1-2 weeks using Thinkorswim", p: "" },
                                    { t: "Start your OnlyOptions Premium Membership", p: "/membership" },
                                    { t: "Execute your first 5 trades with 1 contract each", p: "" },
                                    { t: "Join our community and ask questions", p: "/contact" }
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="text-brand-500 font-black text-xs">{i + 28}.</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{step.t}</span>
                                            {step.p && (
                                                <a href={step.p} className="text-brand-500 text-[9px] font-black uppercase tracking-widest hover:underline">View Guide →</a>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </Card>
                    </section>

                    {/* INTERNAL LINKS GRID */}
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

export default OptionsSignalsForBeginners;
