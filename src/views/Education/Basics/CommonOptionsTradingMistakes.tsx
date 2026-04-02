import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiX, FiCheck, FiAlertTriangle, FiShield, FiZap, FiClock, FiTrendingDown, FiActivity } from 'react-icons/fi';
import { Link } from "@/lib/react-router-dom-stub";
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../components/ui/Card/Card';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
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

interface MistakeCardProps {
    number: number;
    title: string;
    mistakeLabel: string;
    mistake: string;
    whyKills: string;
    correct: string;
    correctPoints?: string[];
}

const MistakeCard = ({ number, title, mistakeLabel, mistake, whyKills, correct, correctPoints }: MistakeCardProps) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Mistake side */}
        <Card variant="glass" className="p-8 border-red-500/10 bg-red-500/[0.02] space-y-5 h-full">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <span className="text-red-400 font-black text-xs">#{number}</span>
                </div>
                <div>
                    <p className="text-red-400 text-[9px] font-black uppercase tracking-[0.25em] mb-1">The Mistake</p>
                    <h3 className="text-white font-black text-lg italic uppercase tracking-tight leading-tight">{title}</h3>
                </div>
            </div>
            <div className="flex gap-3 items-start p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <FiX className="text-red-500 shrink-0 mt-0.5" size={14} />
                <p className="text-red-300 text-[10px] font-black uppercase tracking-widest italic">{mistakeLabel}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{mistake}</p>
            <div className="pt-4 border-t border-red-500/10">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-400 mb-2">Why This Kills Accounts:</p>
                <p className="text-gray-500 text-xs leading-relaxed italic">{whyKills}</p>
            </div>
        </Card>

        {/* Correct side */}
        <Card variant="glass" className="p-8 border-green-500/10 bg-green-500/[0.02] space-y-5 h-full">
            <div className="flex gap-3 items-start p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                <FiCheck className="text-green-500 shrink-0 mt-0.5" size={14} />
                <p className="text-green-400 text-[10px] font-black uppercase tracking-widest italic">Correct Approach</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{correct}</p>
            {correctPoints && correctPoints.length > 0 && (
                <ul className="space-y-3 pt-2">
                    {correctPoints.map((point, i) => (
                        <li key={i} className="flex gap-3 text-gray-400 text-xs font-bold items-start">
                            <FiCheck className="text-green-500 shrink-0 mt-0.5" size={12} /> {point}
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    </div>
);

const CommonOptionsTradingMistakes = () => {
    const mistakes: MistakeCardProps[] = [
        {
            number: 1,
            title: "Not Using Stop-Losses",
            mistakeLabel: '"I Will Just Watch It and Exit Manually"',
            mistake: 'You buy a call at $2.40. It drops to $2.00. You think "it will bounce." It drops to $1.50. You think "surely now." It drops to $0.75. You finally panic sell at $0.60. Loss: -75% (-$180 per contract).',
            whyKills: "Emotions override logic. Hope replaces strategy. One -75% loss requires +300% gain to recover. After 3-4 of these, your account is destroyed.",
            correct: "Set stop-loss immediately after entry. Place actual GTC limit order in your broker. Example: Entry $2.40, stop $1.65. If hit, you lose -31% (-$75), not -75% (-$180). Preserve capital, live to trade another day.",
        },
        {
            number: 2,
            title: "Position Sizing Too Large",
            mistakeLabel: "Risking 10–20% Per Trade",
            mistake: "You have $10,000. You risk $2,000 on one 'sure thing' trade. It loses. Now you have $8,000. You risk $1,600 to 'recover.' It loses. Now $6,400. Three losses = -36% of account.",
            whyKills: "Math of drawdowns: -20% + -20% + -20% = -48.8% (not -60%). Recovery requires +95% gain. Impossible.",
            correct: "2% rule, always. $10,000 account = $200 max risk per trade. Twenty straight losses = down 33%, still recoverable. You can sleep at night.",
        },
        {
            number: 3,
            title: "Buying Far Out-of-the-Money Options",
            mistakeLabel: '"These $0.15 Calls Are Cheap — Huge Upside!"',
            mistake: "SPY at $575. You buy $590 calls for $0.15 because 'if SPY hits $595, these will be worth $5.00!' Reality: SPY needs +2.6% move. Happens ~5% of the time. 95% of the time, expires worthless.",
            whyKills: "Cheap options are cheap for a reason: low probability. Buying 10 lottery tickets at $0.15 = $150 wasted. Even one winner (+$400) does not offset 9 losers.",
            correct: "Buy at-the-money (ATM) or 1–2 strikes out-of-the-money maximum. SPY $575 — buy $575 or $577 calls, not $590. Higher cost but 60–70% probability vs 5%.",
        },
        {
            number: 4,
            title: "Holding Options Until Expiration",
            mistakeLabel: '"I Will Hold Until Friday to Maximize Profit"',
            mistake: "Monday: Buy $575 call for $2.40, up to $3.50 (+46%) by Wednesday. You hold for 'more gains.' Thursday: $3.20. Friday 3 PM: $2.80. Final result: +13% instead of +46%.",
            whyKills: "Time decay accelerates in final 3 days. Gamma risk explodes in final hours. Holding for extra 10% often costs you 30% when theta burns value.",
            correct: "Exit 2–3 days before expiration. For 0DTE, exit by 3:30 PM. Take profits at 50–75% gain — do not wait for 100%. Greed kills.",
        },
        {
            number: 5,
            title: "Ignoring Implied Volatility",
            mistakeLabel: "Buying Options Without Checking IV",
            mistake: "Stock looks bullish. You buy calls. Stock rises 3%. Your calls… lose money? Why: IV was 80% (extremely high). After you bought, IV dropped to 50% (IV crush). Vega loss exceeded Delta gain.",
            whyKills: "Overpaying by 30–50% due to high IV. Even correct directional trades lose money. Repeated overpaying = slow account death.",
            correct: "Check IV Rank before every trade. <25 = good time to buy. >75 = wait or skip. Never buy options when IV Rank >80 unless you have a specific edge.",
        },
        {
            number: 6,
            title: "Trading Without a Plan",
            mistakeLabel: '"I Will Figure It Out After I Buy"',
            mistake: "You see SPY moving up, FOMO kicks in, you buy a call. No target, no stop, no thesis. It moves against you. You panic sell at -40%.",
            whyKills: "No plan = reactive trading = emotional decisions = losses. Every trade without a plan is a gamble, not a strategy.",
            correct: "Before clicking buy, answer all five questions below. If you cannot answer any of them, do not take the trade.",
            correctPoints: [
                "Why am I entering? (Technical setup, catalyst, signal)",
                "Where is my stop-loss? (Exact price)",
                "Where is my profit target? (Exact price)",
                "How long will I hold? (Hours, days, weeks)",
                "What is my risk-reward ratio? (Minimum 2:1)"
            ]
        },
        {
            number: 7,
            title: "Averaging Down on Losing Positions",
            mistakeLabel: '"Buy More to Lower My Average"',
            mistake: "Buy 2 contracts at $2.40. Price drops to $1.50. You buy 2 more to 'average down' to $1.95. Stop-loss at $1.20 now loses 4 × ($1.95 − $1.20) × 100 = $300 instead of planned $200.",
            whyKills: "Turns controlled losses into catastrophic losses. Options expire — they do not recover like stocks. Doubling down on losers violates every principle of risk management.",
            correct: "Never add to losing positions. If wrong, take the loss and move on. Only add to winners (scaling in). Protect capital above all else.",
        },
        {
            number: 8,
            title: "Trading 0DTE Too Soon",
            mistakeLabel: "Starting With Same-Day Expiration",
            mistake: "First week trading options, you try 0DTE because 'huge profits in hours!' You lose 7 out of 10 trades due to extreme theta decay, whipsaws, and lack of experience. Account down -40% in one week.",
            whyKills: "0DTE requires experience with Greeks, technical analysis, and emotional control. Beginners do not have these. Starting with 0DTE = starting golf at PGA Tour level.",
            correct: "No 0DTE for first 6 months. Start with monthly options (30 days), then weekly (7 days), then 0DTE after 20+ profitable trades. Build skills before chasing speed.",
        },
        {
            number: 9,
            title: "Over-Trading",
            mistakeLabel: '"I Must Take Every Signal to Make Money"',
            mistake: "You take 8 trades per day. Half violate your risk rules. You cannot track them all. You miss stop-losses. Three losers happen simultaneously = -15% day.",
            whyKills: "Quality > quantity. Over-trading leads to mistakes, rule violations, and correlation risk (all positions move against you at once). Death by a thousand cuts.",
            correct: "Maximum 2–3 positions open at once. Total portfolio heat <8%. Skip trades that do not meet all criteria. One great trade beats five average trades.",
        },
        {
            number: 10,
            title: "Revenge Trading After Losses",
            mistakeLabel: '"I Need to Make It Back Right Now"',
            mistake: "You lose -$500 on a bad trade. Angry, you immediately enter another trade with $1,000 risk to 'recover faster.' It also loses. Now down -$1,500. You chase again. Spiral continues.",
            whyKills: "Emotions control decisions. Revenge trading = gambling. You violate position sizing, ignore stop-losses, trade bad setups. Fastest way to blow up an account.",
            correct: "After any loss (especially >$200), take a mandatory 30-minute break. Walk away, reset emotions. Only enter next trade when calm and it meets all your criteria. Never chase losses.",
        },
    ];

    const bonusMistakes = [
        { n: "#11", t: "Using Market Orders on Options", d: "Wide bid-ask spreads destroy you. Always use limit orders." },
        { n: "#12", t: "Not Understanding Greeks", d: "Trading without knowing Delta, Theta, Vega = flying blind. Read our Greeks guide." },
        { n: "#13", t: "Trading During First 30 Minutes", d: "9:30–10:00 AM = chaos, wide spreads, fake moves. Wait until 10:00 AM." },
        { n: "#14", t: "Forgetting to Roll Stops to Breakeven", d: "Up +40%? Move stop to breakeven. Protect your gains." },
        { n: "#15", t: "Trading Illiquid Options", d: "Volume <500 contracts/day = wide spreads, poor fills. Stick to SPY/QQQ." },
    ];

    const signalBenefits = [
        { t: "Stop-Losses Included", d: "Every signal has exact stop-loss price. No guessing." },
        { t: "Position Sizing Calculated", d: "We tell you how many contracts based on 2% rule." },
        { t: "Only High-Probability Setups", d: "No far OTM lottery tickets. ATM or 1–2 strikes out only." },
        { t: "Exit Alerts Sent", d: "We tell you when to exit. No holding until expiration." },
        { t: "IV Checked Pre-Signal", d: "We screen out expensive options (IV Rank >75)." },
        { t: "Clear Plan Provided", d: "Entry, target, stop, rationale — all included. No guessing." },
    ];

    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>10 Common Options Trading Mistakes to Avoid | OnlyOptions</title>
                <meta name="description" content="Learn the 10 most common options trading mistakes that destroy accounts. Understand why traders fail, how to avoid costly errors, and what to do instead for success." />
                <link rel="canonical" href="https://onlyoptions.us/common-options-trading-mistakes" />
            </Helmet>

            {/* ── HERO ── */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8 text-center">
                    <span className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                        <FiAlertTriangle className="text-red-400" /> Avoid These Errors
                    </span>
                    <SectionHeader
                        label="Critical Education"
                        title={<>10 Common Options Trading <span className="text-brand-500">Mistakes</span></>}
                        description="And How to Avoid Account-Destroying Errors"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        95% of options traders lose money. Not because they pick bad stocks. Not because they lack intelligence. They lose because they repeat the same 10 mistakes over and over.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        This guide identifies the most common options trading mistakes, explains why they destroy accounts, and shows you exactly what to do instead.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-24 py-8 border-y border-white/5 bg-white/[0.02]">
                    {[
                        { label: "Fail Rate", value: "95%" },
                        { label: "Top Mistakes", value: "10 Listed" },
                        { label: "Root Cause", value: "Emotions" },
                        { label: "Fix Rate", value: "100%" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className={`font-black mb-1 text-2xl tracking-tight uppercase italic ${i === 0 ? 'text-red-400' : i === 3 ? 'text-green-400' : 'text-white'}`}>{stat.value}</h4>
                            <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* ── TOP 10 MISTAKES ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="The Full List" title={<>The 10 Mistakes That <span className="text-red-400">Destroy Accounts</span></>} align="center" className="mb-16" />
                <div className="max-w-6xl mx-auto space-y-12">
                    {mistakes.map((m, i) => (
                        <div key={i}>
                            <MistakeCard {...m} />
                            {i < mistakes.length - 1 && <div className="h-px bg-white/5 mt-12" />}
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* ── BONUS MISTAKES ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Quick Reference" title="Bonus Mistakes to Avoid" align="center" className="mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {bonusMistakes.map((b, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/15 transition-colors flex gap-5">
                            <span className="text-red-500 font-black text-[10px] uppercase tracking-widest shrink-0 pt-1">{b.n}</span>
                            <div className="space-y-1">
                                <h5 className="text-white font-black uppercase tracking-widest text-[11px] italic">{b.t}</h5>
                                <p className="text-gray-400 text-xs leading-relaxed">{b.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </StandardSection>

            {/* ── THE ONE RULE ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div>
                        <p className="text-brand-500 text-[9px] font-black uppercase tracking-[0.3em] mb-4">The Root Cause</p>
                        <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tight mb-4">
                            The One Rule That Prevents <span className="text-brand-500">All Mistakes</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                            Every mistake above comes from breaking one fundamental rule:
                        </p>
                    </div>

                    <Card variant="institutional" className="p-10 border-brand-500/20 bg-brand-500/5 text-center">
                        <p className="text-brand-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">The Golden Rule</p>
                        <p className="text-white font-black text-2xl md:text-3xl italic tracking-tight">
                            Follow Your System, Ignore Your Emotions
                        </p>
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xl mx-auto">
                            You know stop-losses work. You know 2% risk protects you. You know cheap OTM options fail. Yet you violate these rules when emotions take over.
                        </p>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {[
                            { icon: <FiShield className="text-brand-500" />, t: "Write Down Your Rules", d: "Record your full trading plan in writing. Rules only work if they are documented." },
                            { icon: <FiCheck className="text-green-500" />, t: "Pre-Trade Checklist", d: "Before every trade, ask: 'Am I following my rules?' If no — do not trade." },
                            { icon: <FiActivity className="text-yellow-500" />, t: "Review After Every Loss", d: "Save the checklist. Review after every loss. Awareness + action = improvement." },
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                                <div className="p-3 bg-white/5 rounded-xl w-fit">{item.icon}</div>
                                <h5 className="text-white font-black uppercase tracking-widest text-xs italic">{item.t}</h5>
                                <p className="text-gray-400 text-xs leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </StandardSection>

            {/* ── HOW SIGNALS HELP ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader label="The Solution" title={<>How OnlyOptions Signals <span className="text-brand-500">Prevent Errors</span></>} align="center" className="mb-4" />
                    <p className="text-gray-400 text-center text-sm leading-relaxed mb-12 max-w-2xl mx-auto">
                        Following our signals eliminates 8 of the 10 mistakes above. The other 2 (revenge trading, over-trading) require your personal discipline.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {signalBenefits.map((b, i) => (
                            <div key={i} className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all flex gap-5">
                                <div className="p-2.5 bg-brand-500/10 rounded-xl h-fit shrink-0">
                                    <FiCheck className="text-brand-500" size={14} />
                                </div>
                                <div className="space-y-1">
                                    <h5 className="text-white font-black uppercase tracking-widest text-[11px] italic">{b.t}</h5>
                                    <p className="text-gray-400 text-xs leading-relaxed">{b.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </StandardSection>

            {/* ── FAQ ── */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto pb-10">
                    <SectionHeader label="Questions" title={<>Mistakes <span className="text-brand-500">FAQ</span></>} align="center" className="mb-16" />
                    <div className="space-y-4">
                        {[
                            {
                                q: "I made all these mistakes. Can I still succeed?",
                                a: "Yes. Most profitable traders lost money in their first 6–12 months. The key is learning from mistakes, not repeating them. If you recognize these mistakes now, you are ahead of 90% of traders."
                            },
                            {
                                q: "What is the #1 mistake that kills most accounts?",
                                a: "Not using stop-losses. This single mistake destroys more accounts than anything else. One -80% loss can erase months of +20% wins. Always use stops."
                            },
                            {
                                q: "How do I stop revenge trading?",
                                a: "Set a rule: After any loss, 30-minute mandatory break. No exceptions. Walk away, drink water, reset emotions. Only trade again when calm. Install a timer if needed."
                            },
                            {
                                q: "Can I break the 2% rule if I am very confident?",
                                a: "No. Confidence is irrelevant. Even 90% probability trades lose 10% of the time. The 2% rule exists for exactly that 10%. Stick to it always."
                            },
                            {
                                q: "Is it okay to average down on winners?",
                                a: "Adding to winners (scaling in) is fine IF total position still respects 2% rule. Example: Buy 1 contract, up +30%, add 1 more = 2 total — still <2% risk. Never exceed 2% total."
                            },
                            {
                                q: "How long until I stop making these mistakes?",
                                a: "Depends on discipline. Some traders fix mistakes in 3 months. Others never do. Key: Keep a trade journal, review mistakes weekly, adjust rules, repeat. Improvement comes from awareness + action."
                            },
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links */}
                <div className="max-w-6xl mx-auto mt-20 pt-20 border-t border-white/5 text-center px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Related Guides</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { title: "Risk Management", path: "/options-signals-risk-management" },
                            { title: "Position Sizing", path: "/position-sizing-guide-options" },
                            { title: "Options 101", path: "/options-trading-101" },
                            { title: "Greeks Explained", path: "/options-greeks-explained" },
                            { title: "Implied Volatility", path: "/understanding-implied-volatility-options" },
                            { title: "0DTE Strategy", path: "/0dte-options-strategy-complete-guide" },
                            { title: "Beginners Guide", path: "/options-signals-for-beginners" },
                            { title: "Weekly vs Monthly", path: "/weekly-vs-monthly-options-guide" },
                            { title: "How It Works", path: "/how-it-works" },
                            { title: "Performance", path: "/performance" },
                            { title: "FAQ", path: "/faq" },
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
                    title="Stop Making the Same Mistakes"
                    subtitle="Our signals include stop-losses, position sizing, and exit alerts — eliminating 8 of 10 account-destroying errors automatically."
                    className="bg-transparent"
                />
            </div>
        </div>
    );
};

export default CommonOptionsTradingMistakes;
