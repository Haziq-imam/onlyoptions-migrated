import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const TestimonialsFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Are the OnlyOptions testimonials from real members?",
            answer: "Yes. Every testimonial on this page is from a verified OnlyOptions subscriber. Names, locations, plan types, and member-since dates are taken from subscriber records. We do not pay for reviews or offer discounts in exchange for testimonials. Members submit reviews voluntarily through the app or by email."
        },
        {
            question: "Do real member win rates match the published 70.3%?",
            answer: "Based on self-reported tracking data from eight long-term members who have shared their records with us, personal win rates range from 68.0% to 71.6% — a tight band centered around our published 70.3% all-time figure. The small variance reflects differences in execution timing and signal selection. Members who take most signals and use limit orders within the entry range tend to track closest to the published number."
        },
        {
            question: "Why do some members report results slightly below the published rate?",
            answer: "Three main reasons: execution timing (entering at the top of the entry range rather than the midpoint), selective signal-taking (skipping certain tickers or expiry types that perform differently), and occasional missed exits (not receiving or acting on the exit alert immediately). Our published performance uses mid-prices at signal send time. Individual fill prices vary. The member Sandra R. reported 68.0% over 14 months — 2.3% below our published figure — which she attributes to occasionally chasing signals slightly past the entry range."
        }
    ];

    return (
        <div className="py-24 max-w-3xl mx-auto space-y-12">
            <SectionHeader
                title="Testimonials — Frequently Asked Questions"
                description="Understand how we collect and verify our track record and member feedback."
                align="center"
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
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
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
                                        <div className="px-6 pb-6 pt-2 text-gray-400 text-sm leading-relaxed border-t border-white/5 mx-6">
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

export default TestimonialsFAQ;
