import { useState } from 'react';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HowItWorksFaq = () => {
    const faqs = [
        {
            question: "How quickly do I need to act on an options signal?",
            answer: "Speed depends on signal type. For 0DTE (same-day expiration) alerts, execute within 2–5 minutes—momentum can move an option 20–30% in minutes. For weekly swing signals you have 15–30 minutes. For monthly plays you may have hours. We mark time sensitivity on every alert and specify an entry range. If the option has already moved well above the upper entry price, skip the trade. Never chase."
        },
        {
            question: "Do I need to watch the market all day?",
            answer: "No. Weekly and monthly signals can be entered in the morning with GTC stop-loss and profit-target orders already set, so you only check once or twice daily. Many members have full-time jobs and trade exclusively the weekly and monthly signals during lunch. Our 0DTE scalps (2:00–4:00 PM ET) do require active monitoring in that window. Annual plan members receive SMS alerts so no signal is ever missed away from the screen."
        },
        {
            question: "What options experience do I need?",
            answer: "None—but basic familiarity helps. You need to know how to open and close an options position in your broker: search a ticker, select call or put, choose strike and expiry, place a limit order. Our education library includes step-by-step broker tutorial videos. If you have never bought a call or put, spend 1–2 hours in our free education section first. Many beginners use Thinkorswim paper trading for two weeks before using real capital."
        },
        {
            question: "Can I use Robinhood for your signals?",
            answer: "Yes, with limitations. Robinhood works for basic call and put buying. Main drawbacks: it does not support GTC limit orders for options (manually reset stops each day), 0DTE execution can lag during volatile conditions, and spread strategies are unavailable for newer accounts. For serious options trading we recommend Thinkorswim or Tastyworks. For absolute beginners with small accounts, Robinhood's zero-commission structure is a reasonable starting point."
        },
        {
            question: "How many contracts should I trade per signal?",
            answer: "Use the 2% rule: risk no more than 2% of your account per trade. Formula: account size x 2% = max dollar risk. Then divide by per-contract risk (entry minus stop-loss, times 100). Example: $10,000 x 2% = $200. Entry $2.40, stop $1.65 — risk per contract = $75. Max contracts = $200 / $75 = 2 contracts."
        },
        {
            question: "What if I miss an exit alert?",
            answer: "Set your stop-loss and profit-target as GTC working orders immediately after entering. In Thinkorswim use a bracket order to set both simultaneously. This way your trade manages itself even if you miss our Discord alert. If both orders are still open and expiry is approaching, close the position at market price. All exit alerts are archived in #signals on Discord for review."
        },
        {
            question: "Do you guarantee profits?",
            answer: "No. Options trading carries substantial risk and no service can honestly guarantee profits. Our historical win rate is 70.3% across 1,847 verified signals, but individual results vary based on execution timing, position sizing, risk management, and market conditions. Past performance does not guarantee future results. Never trade with money you cannot afford to lose."
        },
        {
            question: "Do your signals work with a small account?",
            answer: "Yes. Many members start with $2,000–$5,000. With a $2,000 account and the 2% rule, you risk $40 per trade—typically one contract on lower-priced options. SPY and QQQ options often trade $1.00–$3.00, making one contract ($100–$300) accessible. We recommend focusing on weekly signals with small accounts—wider entry windows and bigger percentage gains. Avoid spreads until your account reaches $5,000."
        },
        {
            question: "What happens on market holidays?",
            answer: "We send no signals on weekends, US market holidays, or early-close days. The market observes all NYSE holidays. On half-days we may send one or two morning signals only. The #trade-discussion channel stays active for market prep and education on lighter days."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-12">
            <SectionHeader
                title="How It Works: Frequently Asked Questions"
                description="Everything you need to know about execution, timing, and system requirements."
                align="center"
            />

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <Card
                        key={index}
                        variant="glass"
                        className={`overflow-hidden transition-all duration-300 border-white/5 cursor-pointer hover:bg-white/[0.04] ${openIndex === index ? 'border-brand-500/30 bg-white/[0.02]' : ''}`}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <div className="p-6 flex items-center justify-between gap-4">
                            <h3 className="text-white font-bold flex items-center gap-3">
                                <MessageCircleQuestion className={`w-5 h-5 shrink-0 transition-colors ${openIndex === index ? 'text-brand-400' : 'text-gray-500'}`} />
                                {faq.question}
                            </h3>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-400' : ''}`}
                            />
                        </div>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed text-sm">
                                        <div className="pt-4 border-t border-white/5 mt-2">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HowItWorksFaq;
