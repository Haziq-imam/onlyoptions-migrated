import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../../../../components/ui/Card/Card';
import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card variant="glass" className="overflow-hidden border-white/5 transition-all duration-300">
            <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-black text-white flex items-center gap-3">
                    <span className="text-brand-500/50 text-[10px] tracking-tighter">Q.</span>
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-400 flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
            </button>
            <div
                className={`px-8 text-gray-400 text-sm leading-relaxed transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <div className="ml-7 border-l border-white/5 pl-6 whitespace-pre-line">
                    {answer}
                </div>
            </div>
        </Card>
    );
};

const PricingFaqSection = () => {
    const faqData = [
        {
            q: "How much does OnlyOptions cost?",
            a: "OnlyOptions has two plans. The Basic plan costs $60 per month and includes 2–4 daily options signals, iOS and Android app access, push notification delivery, the performance dashboard, and the education library. The Annual plan costs $499.99 per year (equivalent to ~$41 per month) and includes all professional features (SMS alerts, priority support, live Q&A) billed once annually. Both plans provide full Premium Membership access with flexible options."
        },
        {
            q: "Is there a Satisfaction Guarantee for OnlyOptions?",
            a: "Yes. Every new membership includes a 100% Satisfaction Guarantee. You get full access to your chosen plan immediately — including live signals, app access, performance dashboard, and our professional education library. If you are not completely satisfied within your first 7 days, we offer a full, no-questions-asked refund. This ensures you can evaluate our performance with total peace of mind."
        },
        {
            q: "Is the membership flexible?",
            a: "Yes. You can manage your membership status at any time from your account dashboard or by emailing support@onlyoptions.us. There are no hidden fees or exit penalties. Your access continues until the end of your current term. For example, if you change your status on the 15th of a monthly term, you retain access until the end of that billing period."
        },
        {
            q: "How does the 7-day guarantee work?",
            a: "New members receive a 7-day Satisfaction Guarantee on their initial payment. If you are not satisfied within 7 days of your first charge, simply contact support@onlyoptions.us for a full refund. This applies to your initial term to ensure you are confident in our signaling quality. Renewal payments are governed by our standard billing policy, and we prioritize transparency in all our member communications."
        },
        {
            q: "What is the difference between Basic and Annual?",
            a: "The Basic plan ($60/month) and Annual plan ($499.99/year) both receive the same live options signals through the iOS and Android app. The difference is in delivery and support. The Annual plan adds SMS text message delivery of every signal, a 1-hour priority email support response during market hours (versus 24 hours on Basic), and access to weekly live Q&A sessions with the analyst team. If push notifications through the app are sufficient for your workflow and you do not need SMS or live Q&A access, Basic is a strong choice. For the full professional experience, the Annual plan is the best value."
        },
        {
            q: "Is the Annual plan worth it?",
            a: "The Annual plan costs $499.99 per year, which is equivalent to ~$41 per month — a saving of over $220 per year compared to the Basic monthly plan ($60). It includes all premium features including SMS delivery and priority support. The Annual plan is ideal for members who are confident in the service long-term. It also locks in your current price for 12 months regardless of any future price changes. We recommend starting with the monthly plan first, then switching to Annual once you have experienced the value of our signals."
        },
        {
            q: "Are there any hidden fees?",
            a: "No. The price you see is the price you pay. There are no setup fees, no signal fees beyond the subscription, no per-trade charges, and no fees for accessing the app, performance dashboard, or education library. The only additional cost outside the subscription is any brokerage commissions your broker charges when you execute trades — those are separate from OnlyOptions and vary by broker."
        },
        {
            q: "What payment methods does OnlyOptions accept?",
            a: "We accept all major credit and debit cards including Visa, Mastercard, American Express, and Discover. Payments are processed securely through Stripe, a PCI-DSS Level 1 certified payment processor. We do not store card details on our servers. We do not currently accept PayPal, cryptocurrency, or bank transfers."
        },
        {
            q: "Can I regularize my membership status after joining?",
            a: "Yes. You can upgrade from Basic to the Annual plan at any time from your account dashboard. Billing adjusts pro-rata — you pay only for the difference for the remainder of your current billing period. To change to a lower tier, the change takes effect at your next renewal date. You retain your current plan's features until then."
        },
        {
            q: "Do you offer discounts for students or groups?",
            a: "We do not currently offer student or academic discounts. The Annual plan at $499.99/year (~$41/month) is our best-value option for all members. We do not offer group or team pricing at this time."
        }
    ];

    return (
        <StandardSection variant="muted" divider="top" spacing="lg">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    label="FAQ"
                    title="Pricing Frequently Asked Questions"
                    description="These FAQs are written to rank in People Also Ask, AI search engines, and voice search."
                    align="center"
                    className="mb-20"
                />

                <div className="space-y-4">
                    {faqData.map((item, i) => (
                        <FaqItem key={i} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </StandardSection>
    )
}
export default PricingFaqSection;
