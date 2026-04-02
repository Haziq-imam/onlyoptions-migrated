import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiX, FiAlertTriangle, FiBookOpen, FiTrendingUp, FiTrendingDown, FiClock, FiShield, FiArrowRight, FiActivity } from 'react-icons/fi';
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
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-4 pt-6 whitespace-pre-line">
                {answer}
            </div>
        </details>
    );
};

const OptionsTrading101 = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Options Trading 101: Complete Beginner's Guide | OnlyOptions</title>
                <meta name="description" content="Learn options trading from scratch. Understand calls, puts, strikes, expiration, how options work, and how to start trading. Comprehensive guide for beginners." />
                <link rel="canonical" href="https://onlyoptions.us/options-trading-101" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                        <FiBookOpen className="text-brand-500" /> Educational Series
                    </span>
                    <SectionHeader
                        label="Foundation"
                        title={<>Options Trading <span className="text-brand-500">101</span></>}
                        description="The Complete Beginner's Guide to Options Trading"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Welcome to Options Trading. Options give you the right (but not the obligation) to buy or sell a stock at a specific price before a specific date. They are powerful tools that can generate significant profits with less capital than buying stocks outright — but they also carry substantial risk.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        This guide teaches you everything you need to know to start trading options, from basic definitions to your first trade.
                    </p>
                </div>
            </StandardSection>

            {/* CHAPTER 1 & 2 */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Chapter 1: What Are Options?</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">The Simple Definition</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            An option is a contract that gives you the right to buy or sell 100 shares of a stock at a predetermined price (the "strike price") before a specific date (the "expiration date").
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <Card variant="glass" className="p-5 border-green-500/20 bg-green-500/5">
                                <h4 className="font-black text-green-500 uppercase tracking-widest text-xs mb-2">Call Options</h4>
                                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">Give you the right to <span className="text-white">BUY</span> shares.</p>
                            </Card>
                            <Card variant="glass" className="p-5 border-red-500/20 bg-red-500/5">
                                <h4 className="font-black text-red-500 uppercase tracking-widest text-xs mb-2">Put Options</h4>
                                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">Give you the right to <span className="text-white">SELL</span> shares.</p>
                            </Card>
                        </div>
                        <div className="p-6 border-l-2 border-brand-500 bg-white/[0.02] space-y-4">
                            <h5 className="font-black text-white uppercase tracking-widest text-xs italic">Real-World Analogy</h5>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Think of an option like a coupon. A coupon gives you the right to buy something at a specific price before it expires. You are not required to use it, but you have the option.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                <span className="text-brand-400 font-bold">Example:</span> Imagine SPY stock is trading at $575. You buy a call option with a strike price of $580 expiring in 7 days for $2.40 per share ($240 total). If SPY rises to $590, you can exercise your right to buy at $580, making $10 per share profit ($1,000 total). But if SPY stays below $580, your option expires worthless and you lose the $240 you paid.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">Chapter 2: Calls vs. Puts</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Choosing Direction</p>
                        </div>
                        
                        <div className="space-y-6">
                            <Card variant="institutional" className="p-0 overflow-hidden border-green-500/20">
                                <div className="bg-green-500/10 p-4 border-b border-green-500/20 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                    <h4 className="font-black text-green-500 uppercase tracking-widest text-sm flex items-center gap-2">
                                        <FiTrendingUp /> Call Options
                                    </h4>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Betting on Price Going UP</span>
                                </div>
                                <div className="p-5 space-y-3">
                                    <p className="text-gray-400 text-xs flex justify-between"><span className="font-bold uppercase tracking-widest">Direction:</span> <span className="text-white">Bullish</span></p>
                                    <p className="text-gray-400 text-xs flex justify-between"><span className="font-bold uppercase tracking-widest">Profit When:</span> <span className="text-white">Stock &gt; Strike + Premium</span></p>
                                    <p className="text-gray-400 text-xs flex justify-between"><span className="font-bold uppercase tracking-widest">Max Gain:</span> <span className="text-green-500 font-bold">Unlimited</span></p>
                                    <p className="text-gray-400 text-xs flex justify-between"><span className="font-bold uppercase tracking-widest">Max Loss:</span> <span className="text-red-500 font-bold">Premium Paid</span></p>
                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <p className="text-gray-500 text-[11px] leading-relaxed italic">
                                            <span className="text-white font-bold not-italic">Example:</span> Buy SPY $575 call for $2.40. If SPY hits $585, profit ~$750 per contract.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card variant="institutional" className="p-0 overflow-hidden border-red-500/20">
                                <div className="bg-red-500/10 p-4 border-b border-red-500/20 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                    <h4 className="font-black text-red-500 uppercase tracking-widest text-sm flex items-center gap-2">
                                        <FiTrendingDown /> Put Options
                                    </h4>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-red-400">Betting on Price Going DOWN</span>
                                </div>
                                <div className="p-5 space-y-3">
                                    <p className="text-gray-400 text-xs flex justify-between"><span className="font-bold uppercase tracking-widest">Direction:</span> <span className="text-white">Bearish</span></p>
                                    <p className="text-gray-400 text-xs flex justify-between"><span className="font-bold uppercase tracking-widest">Profit When:</span> <span className="text-white">Stock &lt; Strike - Premium</span></p>
                                    <p className="text-gray-400 text-xs flex justify-between"><span className="font-bold uppercase tracking-widest">Max Gain:</span> <span className="text-green-500 font-bold">Strike - Premium</span></p>
                                    <p className="text-gray-400 text-xs flex justify-between"><span className="font-bold uppercase tracking-widest">Max Loss:</span> <span className="text-red-500 font-bold">Premium Paid</span></p>
                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <p className="text-gray-500 text-[11px] leading-relaxed italic">
                                            <span className="text-white font-bold not-italic">Example:</span> Buy SPY $570 put for $3.20. If SPY falls to $560, profit ~$680 per contract.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* CHAPTER 3: KEY TERMS */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Vocabulary" title="Chapter 3: Key Terms You Must Know" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { t: "Strike Price", d: "The price at which you can buy (call) or sell (put) the stock. A SPY $580 call gives you the right to buy SPY at $580." },
                        { t: "Expiration Date", d: "The last day the option is valid. After this date, it expires worthless if not exercised. Ranges from 0DTE (same day) to weeklies (Friday) to monthlies (3rd Friday)." },
                        { t: "Premium", d: "The price you pay to buy the option. Quoted per share but you pay for 100 shares. Premium of $2.40 = $240 total cost for one contract." },
                        { t: "Contract", d: "One options contract controls 100 shares of the underlying stock. If you buy 2 contracts at $2.40 premium, you pay 2 × $2.40 × 100 = $480." },
                        { t: "In-the-Money (ITM)", d: "The option has intrinsic value. Call: Stock > Strike. Put: Stock < Strike. E.g., SPY is at $590, the $580 call is ITM." },
                        { t: "Out-of-the-Money (OTM)", d: "The option has no intrinsic value. It requires the stock to move to become profitable. Call: Stock < Strike. Put: Stock > Strike." },
                        { t: "At-the-Money (ATM)", d: "The strike price perfectly equals the current stock price. If SPY is at $575, the $575 call and put are both ATM." }
                    ].map((term, i) => (
                        <Card key={i} variant="glass" className="p-6 border-white/5 bg-gray-950/40">
                            <h4 className="font-black text-brand-500 uppercase tracking-widest text-xs mb-3">{term.t}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{term.d}</p>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* CHAPTER 4 & 5 */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Mechanics" title="Chapter 4: How Options Make Money" align="left" className="mb-6" />
                        <div className="space-y-6">
                            <Card variant="glass" className="p-6 border-brand-500/20 bg-brand-500/5">
                                <h4 className="font-black text-white uppercase tracking-widest text-xs mb-2">Method 1: Sell the Option (Most Common)</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    You buy a SPY $575 call for $2.40 ($240 total). SPY rises to $580. The option premium increases to $4.80 ($480 total). You sell the option back to the market for a $240 profit.
                                </p>
                                <p className="text-brand-400 text-[10px] uppercase font-black tracking-widest border border-brand-500/30 w-max px-2 py-1 rounded-md">
                                    95%+ of traders do this
                                </p>
                            </Card>
                            <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                                <h4 className="font-black text-white uppercase tracking-widest text-xs mb-2">Method 2: Exercise the Option</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    You buy a SPY $575 call for $2.40. SPY goes to $585. You exercise your right to buy 100 shares at $575 (spending $57,500), then immediately sell them at the market price of $585 ($58,500). Gross profit $1,000 - $240 premium = $760 net profit.
                                </p>
                                <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest">
                                    Requires massive capital. Rarely done.
                                </p>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <SectionHeader label="Leverage" title="Chapter 5: Why Trade Options?" align="left" className="mb-6" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Feature</TableHead>
                                        <TableHead>Buying Stock</TableHead>
                                        <TableHead className="text-brand-500">Buying Options</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Capital Required", s: "$57,500 (100 shares)", o: "$240 (one $575 call)" },
                                        { f: "Profit if Stock +$10", s: "$1,000 (1.7% return)", o: "~$750 (312% return) 🚀" },
                                        { f: "Loss if Stock -$10", s: "-$1,000", o: "-$240 max (total premium)" },
                                        { f: "Time Limit", s: "None (hold forever)", o: "Yes (expires)" },
                                        { f: "Leverage", s: "None", o: "High ⚠️" }
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Feature" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{row.f}</TableCell>
                                            <TableCell label="Stock" className="text-gray-400 text-xs">{row.s}</TableCell>
                                            <TableCell label="Options" className={`font-bold text-xs ${row.o.includes('🚀') ? 'text-green-500' : row.o.includes('⚠️') ? 'text-brand-500' : 'text-white'}`}>{row.o}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-brand-500 pl-4 mt-6">
                            Options provide extreme leverage — you control the exact same 100 shares of upside with significantly less capital. This magnifies both percentage gains and losses.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* CHAPTER 6: RISKS */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Warning" title="Chapter 6: The Risks of Options Trading" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        { t: "Risk #1: Total Loss of Premium", i: <FiAlertTriangle className="text-red-500 text-xl" />, d: "Unlike stocks which can usually recover over time, options expire worthless if the stock does not move favorably before expiration. You can confidently lose 100% of your investment." },
                        { t: "Risk #2: Time Decay (Theta)", i: <FiClock className="text-yellow-500 text-xl" />, d: "Options lose value every single day as expiration approaches, even if the stock doesn't move. Short-dated options (0DTE, weeklies) decay aggressively fast." },
                        { t: "Risk #3: Volatility Changes (Vega)", i: <FiActivity className="text-purple-500 text-xl" />, d: "Option prices are directly tied to expected volatility. After known events (earnings, Fed days) pass, volatility drops. This 'IV Crush' causes option prices to plummet even if the stock moved your way." },
                        { t: "Risk #4: Extreme Complexity", i: <FiShield className="text-blue-500 text-xl" />, d: "Options have more dimensions than stocks. You must be right about Direction, Magnitude, AND Timing. Being right on direction but wrong on timing still results in a 100% total loss." }
                    ].map((risk, i) => (
                        <Card key={i} variant="glass" className="p-6 border-red-500/10 bg-red-500/[0.02] flex gap-5 items-start">
                            <div className="shrink-0 mt-1">{risk.i}</div>
                            <div>
                                <h4 className="font-black text-white uppercase tracking-widest text-xs mb-3 italic">{risk.t}</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">{risk.d}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* CHAPTER 7 & 8 */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <SectionHeader label="Action Plan" title="Chapter 7: Your First Trade" align="left" className="mb-6" />
                        <div className="space-y-6">
                            {[
                                { step: "Step 1", t: "Choose Your Broker", d: "Recommended: Thinkorswim (best tools), Webull (zero commission), or Robinhood (simplest interface)." },
                                { step: "Step 2", t: "Get Options Approval", d: "Apply for 'Level 1' or 'Level 2' approval through your broker settings. Most beginners easily qualify for Level 1 (basic buying of calls/puts)." },
                                { step: "Step 3", t: "Paper Trade First ⚠️", d: "HIGHLY RECOMMENDED. Practice with fake money and real time prices on Thinkorswim for at least 1-2 weeks before risking real capital." },
                                { step: "Step 4", t: "Start Small", d: "1 contract exclusively. Weekly or Monthly expiration (NO 0DTE). ATM or slightly ITM strikes. Use liquid mega-caps like SPY or AAPL. Risk max $200-$300." },
                                { step: "Step 5", t: "Set a Stop-Loss", d: "Decide your maximum acceptable loss beforehand (usually -30% to -40%). If the option hits it, exit manually or automatically. Never hold and pray." }
                            ].map((s, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div className="shrink-0 text-[10px] font-black uppercase tracking-widest text-brand-500 w-12 pt-0.5">{s.step}</div>
                                    <div className="space-y-1">
                                        <h5 className="font-bold text-white uppercase tracking-widest text-[11px]">{s.t}</h5>
                                        <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <SectionHeader label="Pitfalls" title="Chapter 8: Common Mistakes" align="left" className="mb-6" />
                        <div className="space-y-4">
                            {[
                                { t: "Mistake #1: Buying Far OTM Options", d: "Beginners buy cheap $0.20 options hoping for lottery 1,000% gains. These have a near 0% probability of profit. Always start ATM." },
                                { t: "Mistake #2: Holding Until Expiration", d: "Most options should be closed out with 1-3 days remaining. Time decay accelerates aggressively at the end. Pros exit early." },
                                { t: "Mistake #3: Ignoring Stop-Losses", d: "The #1 destroyer of accounts. Beginners hold losing options hoping they recover. Options don't recover like stocks; they die." },
                                { t: "Mistake #4: Trading 0DTE Too Soon", d: "0DTE (same day) contracts are the riskiest assets on Earth. They require intense monitoring. Wait 6+ months before touching them." },
                                { t: "Mistake #5: Over-Sizing Positions", d: "Trading 10 contracts on a $5,000 account is pure gambling. Never risk more than 2% of your account on a single options trade." }
                            ].map((m, i) => (
                                <div key={i} className="p-5 border border-red-500/10 bg-red-500/[0.02] rounded-xl flex gap-4 items-start">
                                    <FiX className="text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h5 className="font-bold text-white uppercase tracking-widest text-xs mb-1 italic">{m.t}</h5>
                                        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider leading-relaxed">{m.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* CHAPTER 9: NEXT STEPS */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Progression" title="Chapter 9: Next Steps" align="center" className="mb-12" />
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="font-black text-white uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                            <FiBookOpen className="text-brand-500" /> Continue Learning
                        </h4>
                        <ul className="space-y-4">
                            {["Read about the Greeks (Delta, Theta, Gamma, Vega)", "Study absolute risk management and sizing maths", "Learn multi-leg strategies over time (Spreads)", "Follow professional signal flow to verify structure"].map((item, i) => (
                                <li key={i} className="flex gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider items-start">
                                    <FiArrowRight className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/10">
                        <h4 className="font-black text-white uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                            <FiTrendingUp className="text-brand-400" /> Join OnlyOptions.us
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Get 2-4 professional options signals daily with exact entry, target, and stop-loss metrics. Our verified 70.3% win rate provides a proven foundational edge while you learn.
                        </p>
                        <Link to="/membership" className="px-6 py-3 bg-brand-500 text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-brand-400 transition-colors inline-block text-center border border-brand-400/50">
                            Start Learning Now
                        </Link>
                    </Card>
                </div>
            </StandardSection>

            {/* FAQ */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto pb-10">
                    <SectionHeader label="Knowledge Base" title={<>Beginner <span className="text-brand-500">FAQ</span></>} align="center" className="mb-16" />
                    <div className="space-y-4">
                        {[
                            { q: "How much money do I need to start trading options?", a: "Minimum $500, but $2,000-$5,000 is highly recommended. With less than $2,000, you are strictly limited to 1 contract per trade on most ticker signals, which restricts scaling. Start extremely small to grow the baseline." },
                            { q: "Are options inherently riskier than stocks?", a: "Yes. Options can expire entirely worthless resulting in a 100% loss, whereas stocks can be held indefinitely. However, with true risk management adhering to the 2% rule and hard stop-losses, the absolute risk is cleanly defined and controlled." },
                            { q: "Can I lose more money than I invest in an option?", a: "No, when buying calls and puts (Level 1). Your absolute maximum loss is capped strictly at the premium you initially paid. Advanced short-selling strategies can result in limitless losses, which is why beginners shouldn't touch them." },
                            { q: "What is the best time of day to trade?", a: "The first 30 minutes (9:30-10:00 AM ET) are extremely volatile with wide unstable spreads; avoid them. Mid-morning to afternoon (10:00 AM-3:00 PM) is the cleanest period. The final hour is aggressively fast." },
                            { q: "Should I only focus on calls because 'stocks go up'?", a: "No. Trade calls when bullish, puts when bearish. Beginners get wiped out completely in bear markets because they refuse to buy Puts. Puts are some of the most profitable instruments during corrections." },
                            { q: "How long do I actually hold these positions?", a: "Usually 0DTEs are held for minutes to hours. Weeklies span 1-3 days average. Monthlies span 1-2 weeks. You almost never hold directly until expiration day because decay shreds the premium." }
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
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "Position Size Calculator", path: "/position-size-calculator" },
                            { title: "Greeks Explained", path: "/options-greeks-explained" },
                            { title: "SPY Signals", path: "/spy-options-signals" },
                            { title: "Get Access", path: "/membership" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "Best Brokers", path: "/best-brokers-for-options-trading" },
                            { title: "Options Approval", path: "/how-to-get-approved-for-options-trading" },
                            { title: "Beginner Guide", path: "/options-signals-for-beginners" },
                            { title: "0DTE Strategy", path: "/0dte-options-strategy-complete-guide" },
                            { title: "Breakeven Calc", path: "/breakeven-calculator" }
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
                    title="Stop Guessing, Start Learning"
                    subtitle={<>Join our platform to see exactly how professionals size, structure, and exit options trades in real-time.<br />Build your 101 discipline the right way.</>}
                />
            </div>
        </div>
    );
};

export default OptionsTrading101;
