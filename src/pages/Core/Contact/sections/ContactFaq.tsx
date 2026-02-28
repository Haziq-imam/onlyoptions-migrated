import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const ContactFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How quickly does OnlyOptions respond to support emails?",
            answer: "Basic plan subscribers receive responses within 24 hours on business days (Monday through Friday). Pro and Annual subscribers receive priority support with a 1-hour response window during market hours (9:00 AM to 4:30 PM ET, Monday through Friday). Messages sent outside of business hours are answered on the next business day."
        },
        {
            question: "How do I cancel my OnlyOptions subscription?",
            answer: "Log into your account at onlyoptions.us, go to Account Settings → Subscription → Cancel. Cancellation takes effect at the end of your current billing period — you retain access until then. Alternatively, email support@onlyoptions.us with your account email and the subject line 'Cancellation Request' — we process cancellations within 24 hours."
        },
        {
            question: "How do I get a refund from OnlyOptions?",
            answer: "New subscribers are covered by a 7-day money-back guarantee on their first payment. Email support@onlyoptions.us with your account email and subject line 'Refund Request' within 7 days of your first charge. We process refund requests within 2 business days. Refunds are returned to the original payment method and typically appear within 5–10 business days depending on your bank or card issuer."
        },
        {
            question: "I am a Pro member — how do I get priority support?",
            answer: "Send your email to support@onlyoptions.us with 'PRO:' at the beginning of your subject line (example: 'PRO: Question about Feb 21 NVDA signal'). This routes your message to the priority queue automatically. Pro support is available from 9:00 AM to 4:30 PM ET on market days with a 1-hour response target."
        }
    ];

    return (
        <div className="py-24 max-w-4xl mx-auto space-y-12">
            <SectionHeader
                title="Contact FAQs"
                description="Quick answers to common account management questions."
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

export default ContactFaq;
