import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const FreeTrialFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Why do you not require a credit card for the trial?",
            answer: "Because we do not need to. Services that require payment details upfront are relying on friction (people forgetting to cancel) to convert trials. We convert trials by delivering obvious value. If our signals are not worth $60/month to you after 7 days of full access, we do not deserve your money."
        },
        {
            question: "Will I be auto-charged after 7 days?",
            answer: "No. Your trial expires and access ends automatically. You must manually subscribe to continue. We email you on Day 6 with a subscribe link, but clicking it is optional. If you ignore it, nothing happens — no charges, no continued access."
        },
        {
            question: "Can I trial multiple plans?",
            answer: "No. The free trial gives you Basic plan access ($60/month tier). To try Pro features (SMS alerts, weekly live sessions), upgrade to Pro during the trial — the trial period extends to Pro as well. You cannot trial all three plans separately."
        },
        {
            question: "What if I want to subscribe before the 7 days end?",
            answer: "Great! Click the subscribe link in your welcome email or visit onlyoptions.us/pricing. Your trial access converts to paid immediately and billing starts. You do not lose any days — your first billing cycle starts from the day you subscribe."
        },
        {
            question: "Can I get a trial extension?",
            answer: "No. Seven days is sufficient to evaluate signal quality, verify our track record, and experience the community. Trial extensions create perverse incentives (endless free access). If 7 days is not enough, our service may not be right for you."
        },
        {
            question: "What happens to my Discord access after the trial?",
            answer: "If you do not subscribe, Discord access is revoked automatically when the trial expires. You lose access to #signals, #performance-log, and all member channels. You can re-join immediately by subscribing."
        },
        {
            question: "Can I use the free trial if I previously subscribed and cancelled?",
            answer: "No. Free trials are for new members only. If you were previously a paying subscriber, contact support@onlyoptions.us — we occasionally offer win-back promotions for returning members."
        },
        {
            question: "Do I get the 7-day money-back guarantee on top of the trial?",
            answer: "Yes. If you subscribe after your trial, you still get our standard 7-day money-back guarantee from the date of your first payment. This means up to 14 days of risk-free access total (7-day trial + 7-day refund window)."
        },
        {
            question: "Can I refer friends for another free trial?",
            answer: "Yes. Our affiliate program rewards members who refer paying subscribers. However, each person gets only one trial per email address. Attempts to game the system with fake emails are detected and blocked."
        }
    ];

    return (
        <div className="py-24 max-w-4xl mx-auto space-y-12">
            <SectionHeader
                title="Free Trial FAQ"
                description="Questions About the Free Trial"
                align="left"
            />

            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                                ? 'border-brand-500/30 bg-brand-500/5 shadow-[0_0_30px_rgba(139,92,246,0.1)]'
                                : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                            >
                                <span className={`font-bold pr-8 ${isOpen ? 'text-brand-400' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-400' : 'text-gray-500'}`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-2 text-gray-400 text-sm leading-relaxed border-t border-white/5 mx-6">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FreeTrialFaq;
