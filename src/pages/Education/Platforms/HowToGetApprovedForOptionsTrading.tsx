import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiX, FiAlertTriangle, FiBookOpen, FiClock, FiSettings, FiBriefcase, FiDollarSign, FiSearch, FiTarget } from 'react-icons/fi';
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

const HowToGetApprovedForOptionsTrading = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>How to Get Approved for Options Trading | Approval Guide 2026</title>
                <meta name="description" content="Learn how to get approved for options trading at any broker. Understand approval levels, application process, requirements, tips to get approved fast, and what to do if denied." />
                <link rel="canonical" href="https://onlyoptions.us/how-to-get-approved-for-options-trading" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                        <FiCheck className="text-brand-500" /> Getting Started Guide
                    </span>
                    <SectionHeader
                        label="Account Setup"
                        title={<>How to Get <span className="text-brand-500">Approved</span> for Options Trading</>}
                        description="The Complete Guide to Options Approval at Every Broker"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Getting options approval is easier than you think. Before you can trade options, your broker must approve your account. This process involves answering questions about your financial situation, investment experience, and understanding of risk.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Most brokers approve Level 1 options (buying calls and puts) within minutes to 24 hours. This guide shows you exactly how to apply, what to say, and how to get approved quickly.
                    </p>
                </div>
            </StandardSection>

            {/* Approval Levels Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader
                            label="Classification"
                            title="The 5 Approval Levels"
                            description="Brokers categorize options approval into levels based on risk."
                            align="left"
                            className="mb-0"
                        />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Level</TableHead>
                                        <TableHead>What You Can Do</TableHead>
                                        <TableHead>Risk</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { l: "Level 1", d: "Buy calls & puts (covered calls)", r: "Low" },
                                        { l: "Level 2", d: "Spreads (Verticals, Condors)", r: "Moderate" },
                                        { l: "Level 3", d: "Sell naked puts (cash-secured)", r: "Moderate" },
                                        { l: "Level 4", d: "Sell naked calls", r: "High" },
                                        { l: "Level 5", d: "Index / Futures options", r: "Very High" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Level" className="text-brand-500 text-xs font-black uppercase">{row.l}</TableCell>
                                            <TableCell label="Capability" className="text-white text-xs">{row.d}</TableCell>
                                            <TableCell label="Risk" className={`text-[10px] font-black uppercase tracking-widest ${row.r.includes('Low') ? 'text-green-400' : row.r.includes('High') ? 'text-red-500' : 'text-yellow-500'}`}>{row.r}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 border border-brand-500/20 bg-brand-500/5 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <FiTarget size={120} className="text-brand-500" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-xl font-black italic uppercase text-white mb-4">For OnlyOptions Signals:</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    You only need <span className="text-brand-400 font-bold uppercase tracking-widest text-xs">Level 1</span> approval. All our signals are buying calls or puts — the safest category. Never apply for higher levels unless you truly understand the advanced risks.
                                </p>
                                <div className="flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <FiCheck /> Recommended for 90% of Traders
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Application Process Section */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Walkthrough" title="Application Process — Step by Step" align="center" className="mb-16" />
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-12">
                        {/* Step 1 & 2 */}
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <span className="w-10 h-10 rounded-full bg-brand-500 text-black flex items-center justify-center font-black shrink-0 border-4 border-black shadow-[0_0_20px_rgba(0,102,255,0.3)]">1</span>
                                <div>
                                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Log Into Your Broker account</h4>
                                    <p className="text-gray-400 text-xs">Open your existing brokerage account or create a new one.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <span className="w-10 h-10 rounded-full bg-brand-500 text-black flex items-center justify-center font-black shrink-0 border-4 border-black shadow-[0_0_20px_rgba(0,102,255,0.3)]">2</span>
                                <div className="space-y-4">
                                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Find the Options Application</h4>
                                    <ul className="grid gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 list-none p-0">
                                        <li>• Robinhood: <span className="text-gray-300">Account → Settings → Investing</span></li>
                                        <li>• Webull: <span className="text-gray-300">Account → More → Options App</span></li>
                                        <li>• Thinkorswim: <span className="text-gray-300">My Account → Elections → Routing</span></li>
                                        <li>• Fidelity: <span className="text-gray-300">Accounts & Trade → Update Features</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Financials */}
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 space-y-6">
                            <div className="flex items-center gap-3 text-brand-500 mb-2">
                                <FiDollarSign size={20} />
                                <h4 className="text-white font-black uppercase tracking-widest text-sm">Step 3: Personal Information</h4>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-brand-500 text-[9px] font-black uppercase tracking-widest mb-1">Annual Income</p>
                                    <p className="text-xs text-gray-400">Typical ranges: $50-100K+. <span className="text-white font-bold italic">Tip:</span> Higher income helps approval odds, but be truthful.</p>
                                </div>
                                <div>
                                    <p className="text-brand-500 text-[9px] font-black uppercase tracking-widest mb-1">Liquid Net Worth</p>
                                    <p className="text-xs text-gray-400">Cash and stocks (excluding real estate). Example: $20K savings + $10K stocks = $30K liquid.</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-12">
                        {/* Step 4: Experience */}
                        <Card variant="institutional" className="p-8 border-brand-500/20 bg-brand-500/5 space-y-6">
                            <div className="flex items-center gap-3 text-brand-500 mb-2">
                                <FiBriefcase size={20} />
                                <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Step 4: Investment Experience</h4>
                            </div>
                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest border-b border-white/5 pb-2">Strategic Answers for Approval:</p>
                            <div className="space-y-4 text-[11px]">
                                <div className="flex justify-between gap-4">
                                    <span className="text-gray-400 font-bold uppercase">Time Investing:</span>
                                    <span className="text-white font-black">1–3 Years</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-gray-400 font-bold uppercase">Trades Per Year:</span>
                                    <span className="text-white font-black">10–50 Trades</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-gray-400 font-bold uppercase">Options Knowledge:</span>
                                    <span className="text-brand-400 font-black">Limited Knowledge</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-gray-400 font-bold uppercase">Investment Objective:</span>
                                    <span className="text-white font-black">Speculation / Growth</span>
                                </div>
                            </div>
                            <p className="text-[9px] text-gray-500 italic leading-relaxed pt-2 border-t border-white/5">
                                * Do not select "No Experience" or "Capital Preservation" as these often trigger automatic denial for options.
                            </p>
                        </Card>

                        {/* Steps 5-8 */}
                        <div className="space-y-6">
                            {[
                                { s: "5", t: "Knowledge Check", d: "Answer basic questions. Max loss for buy call? Premium Paid. Are options risky? YES." },
                                { s: "6", t: "Select Level 1", d: "Avoid Levels 2-5 for now. Select 'Buy Calls/Puts' and 'Covered Calls'." },
                                { s: "7", t: "Submit & Wait", d: "Robinhood is instant. Webull and others take 1–3 business days." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div className="shrink-0 text-[10px] font-black uppercase tracking-widest text-brand-500 w-6">{step.s}</div>
                                    <div>
                                        <h5 className="font-bold text-white uppercase tracking-widest text-[10px] mb-1">{step.t}</h5>
                                        <p className="text-gray-400 text-[10px] leading-relaxed italic">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Faster Approval Tips */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Strategy" title="Tips to Get Approved Faster" align="left" className="mb-6" />
                        <div className="grid gap-4">
                            {[
                                { t: "Answer Consistently", d: "Do not contradict yourself. If you say 2 years experience, say 10+ trades minimum." },
                                { t: "Show Some Experience", d: "Select 'Limited knowledge' instead of 'None.' Show you have done the basic research." },
                                { t: "Adequate Liquid Net Worth", d: "$10,000+ liquid net worth helps Level 1 odds. Otherwise, emphasize stable income." },
                                { t: "Apply for Level 1 Only", d: "Don't get greedy. Get Level 1 approved first, trade for 6 months, then upgrade." }
                            ].map((tip, i) => (
                                <Card key={i} variant="glass" className="p-6 border-white/5 bg-gray-950/40 flex gap-4">
                                    <FiCheck className="text-brand-500 shrink-0 mt-1" />
                                    <div>
                                        <h5 className="text-white font-black uppercase tracking-widest text-[11px] mb-1 italic">{tip.t}</h5>
                                        <p className="text-gray-400 text-xs leading-relaxed">{tip.d}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <SectionHeader label="Troubleshooting" title="What if You Get Denied?" align="left" className="mb-6" />
                        <Card variant="glass" className="p-8 border-red-500/10 bg-red-500/[0.02] space-y-6">
                            <div className="flex items-center gap-3 text-red-500">
                                <FiX size={20} />
                                <h4 className="text-white font-black uppercase tracking-widest text-sm">Common Reasons for Denial</h4>
                            </div>
                            <ul className="grid gap-2 text-xs text-gray-400 list-none p-0">
                                <li>• Income/Net Worth below minimum thresholds</li>
                                <li>• Selecting "No Experience" or "0 trades"</li>
                                <li>• Application inconsistencies manually flagged</li>
                                <li>• Applying for Level 3 or 4 immediately</li>
                            </ul>
                            <div className="pt-6 border-t border-white/5 space-y-4">
                                <h5 className="text-[10px] font-black uppercase tracking-widest text-white italic">The Recovery Plan:</h5>
                                <p className="text-[11px] text-gray-400 leading-relaxed">
                                    <span className="text-brand-400 font-bold uppercase tracking-widest text-[9px]">Reapply:</span> Wait 30–90 days and update your experience levels legitimately. <br/><br/>
                                    <span className="text-brand-400 font-bold uppercase tracking-widest text-[9px]">Switch Brokers:</span> Robinhood is the most lenient for Level 1. Webull is a close second.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            {/* Broker Specific Section */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Directory" title="Broker-Specific Approval Timeline" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { b: "Robinhood", t: "Instant (under 60s)", d: "Easiest. Nearly everyone gets Level 1 approved immediately." },
                        { b: "Webull", t: "1-2 Business Days", d: "Easy. Low requirements. Answer '10-50 trades' for fast track." },
                        { b: "Thinkorswim", t: "1-3 Business Days", d: "Moderate. May require phone call for Level 2 or 3." },
                        { b: "E*TRADE", t: "1-2 Business Days", d: "Moderate. Conservative but approves most Level 1 apps." },
                        { b: "Fidelity", t: "1-3 Business Days", d: "Harder. May deny applicants with zero trading history." },
                        { b: "Charles Schwab", t: "1-3 Business Days", d: "Moderate. Approves most legitimate Level 1 applications." }
                    ].map((item, i) => (
                        <Card key={i} variant="glass" className="p-6 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all">
                            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1 italic">{item.b}</h4>
                            <p className="text-brand-500 text-[9px] font-black uppercase tracking-widest mb-3">{item.t}</p>
                            <p className="text-gray-400 text-xs leading-relaxed">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* FAQ Section */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto pb-10">
                    <SectionHeader label="Knowledge Base" title={<>Options Approval <span className="text-brand-500">FAQ</span></>} align="center" className="mb-16" />
                    <div className="space-y-4">
                        {[
                            { q: "Do I need a certain amount of money in my account?", a: "No minimum deposit for approval at most brokers. However, accounts with $2,000+ improve your approval odds significantly." },
                            { q: "Can I get approved with zero experience?", a: "Difficult but possible. Select 'Limited knowledge' and emphasize your research. Robinhood is your best bet for zero-experience approval." },
                            { q: "Will my employer know I applied?", a: "No. Brokers do not contact your employer. Only FINRA-regulated professionals have reporting requirements." },
                            { q: "Can I trade options in my IRA?", a: "Yes, Level 1 approval is widely available for IRAs. Apply for 'IRA Options Approval' separately within your account." },
                            { q: "How long does Level 1 approval last?", a: "Indefinitely. Once approved, you stay approved unless you violate broker terms or hit PDT restrictions." },
                            { q: "What happens if I lie on my application?", a: "If caught, your account can be frozen. Slight 'fudging' of experience is common, but don't fabricate income or identities." }
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links Navigation */}
                <div className="max-w-6xl mx-auto mt-20 pt-20 border-t border-white/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Ecosystem Knowledge</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "Options 101", path: "/options-trading-101" },
                            { title: "Best Brokers", path: "/best-brokers-for-options-trading" },
                            { title: "Beginner Guide", path: "/options-signals-for-beginners" },
                            { title: "How it works", path: "/how-it-works" },
                            { title: "Free trial", path: "/free-trial" },
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "QQQ Signals", path: "/qqq-options-signals" },
                            { title: "Performance", path: "/performance" },
                            { title: "Position Sizing", path: "/position-size-calculator" },
                            { title: "FAQ", path: "/faq" },
                            { title: "Contact", path: "/contact" }
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
                    title="Get Approved, Get Access"
                    subtitle={<>Join our platform once you're approved. We'll handle the analysis, while you execute with confidence using our expert metrics.</>}
                />
            </div>
        </div>
    );
};

export default HowToGetApprovedForOptionsTrading;
