import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const FreeTrialFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do I start my membership evaluation?",
            answer: "Getting started is simple. We provide immediate access via our institutional evaluation model. We believe our service delivers obvious value from day one, allowing you to experience our signals with complete confidence. If our signals are not adding professional value to your trading after 7 days of full access, we prioritize your satisfaction."
        },
        {
            question: "How is billing handled?",
            answer: "We prioritize transparency. No automatic charges occur without your explicit selection of a subscription plan. You have full control over when to activate your long-term membership status. We provide reminders towards the end of your evaluation period, but any next steps are entirely at your discretion."
        },
        {
            question: "What access do I receive initially?",
            answer: "You receive full Basic Plan access ($60/month tier) during your initial membership evaluation period. This includes all signals, dashboard tools, and educational resources. To experience Pro features like SMS alerts and live sessions, you can select that tier at any time."
        },
        {
            question: "What if I want to select a plan before 7 days?",
            answer: "Great! You can activate your full membership status at any time through your account dashboard or by visiting onlyoptions.us/pricing. Your chosen plan will activate immediately, and your first billing cycle will begin from that date."
        },
        {
            question: "Is the evaluation period sufficient?",
            answer: "Yes. Seven days provides ample time to evaluate our signal quality, verify our track record, and experience the performance of the service. We believe this period is ideal for new members to align our signaling with their trading workflow."
        },
        {
            question: "What happens to my access if I do not select a plan?",
            answer: "If you do not choose to extend your membership, your access will expire automatically at the end of the evaluation period with no further obligation. You can re-activate your status at any time by selecting a plan."
        },
        {
            question: "Is this available if I have held a membership before?",
            answer: "Initial evaluation periods are reserved for new members to experience the platform for the first time. If you are a returning member, please contact support@onlyoptions.us to discuss your membership options."
        },
        {
            question: "Do I get a money-back guarantee?",
            answer: "Yes. All new memberships include our standard 7-day Satisfaction Guarantee from the date of your first subscription payment. This ensures you have complete confidence as you transition to a full membership."
        },
        {
            question: "Can I refer others to the platform?",
            answer: "Absolutely. We encourage members to share their experience. Our membership systems are designed to detect authentic interest and maintain the integrity of our community."
        }
    ];

    return (
        <div className="py-24 max-w-4xl mx-auto space-y-12">
            <SectionHeader
                title="Access Period FAQ"
                description="Questions About the Access Period"
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
