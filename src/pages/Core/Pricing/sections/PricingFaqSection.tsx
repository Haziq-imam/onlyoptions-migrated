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
            a: "OnlyOptions has three plans. The Basic plan costs $60 per month and includes 2–4 daily options signals, iOS and Android app access, push notification delivery, the performance dashboard, and the education library. The Pro plan costs $99 per month and adds SMS text message signal delivery, priority email support with a 1-hour response during market hours, and weekly live Q&A sessions. The Annual plan costs $600 per year (equivalent to $50 per month) and includes all Pro features billed once annually. Every plan starts with a 7-day free trial with no credit card required."
        },
        {
            q: "Is there a free trial for OnlyOptions?",
            a: "Yes. Every new subscriber receives a 7-day free trial with no credit card required. You get full access to your chosen plan during the trial live signals, app access, performance dashboard, and education library. At the end of 7 days, nothing happens automatically. You choose whether to subscribe by entering your payment details. If you do nothing, your trial ends with no charge."
        },
        {
            q: "Can I cancel my OnlyOptions subscription anytime?",
            a: "Yes. You can cancel at any time from your account dashboard or by emailing support@onlyoptions.us. There are no cancellation fees. When you cancel, your access continuesuntil the end of your current billing period you are not cut off immediately. For example, if you are on a monthly plan and cancel on the 15th, you retain access through the end of that month."
        },
        {
            q: "Is there a money-back guarantee?",
            a: "Yes. New subscribers receive a 7-day money-back guarantee on their first payment. If you subscribe and are not satisfied within 7 days of your first charge, contact support@onlyoptions.us for a full refund no conditions, no questions asked. This applies to your first payment only. Renewal payments (month 2 onward for monthly plans, or year 2 for annual) are not eligible for refunds. Note that the 7-day free trial already gives you full access before any payment is required."
        },
        {
            q: "What is the difference between Basic and Pro?",
            a: "The Basic plan ($60/month) and Pro plan ($99/month) both receive the same live options signals 2–4 per day through the iOS and Android app. The difference is in delivery and support. Pro adds SMS text message delivery of every signal, a 1-hour priority email support response during market hours (versus 24 hours on Basic), and access to weekly live Q&A sessions with the analyst team. If push notifications through the app are sufficient for your workflow and you do not need SMS or live Q&A access, Basic is a strong choice."
        },
        {
            q: "Is the Annual plan worth it?",
            a: "The Annual plan costs $600 per year, which is equivalent to $50 per month a saving of $49 per month compared to Pro monthly ($99), or $120 per year in total. It includes all Pro features. The Annual plan makes sense if you have completed the free trial and are confident you want to use the service long-term. It also locks in your current price for 12 months regardless of any future price changes. We recommend starting with the monthly trial first, then switching to Annual once you are satisfied with the signal quality."
        },
        {
            q: "Are there any hidden fees?",
            a: "No. The price you see is the price you pay. There are no setup fees, no signal fees beyond the subscription, no per-trade charges, and no fees for accessing the app, performance dashboard, or education library. The only additional cost outside the subscription is any brokerage commissions your broker charges when you execute trades those are separate from OnlyOptions and vary by broker."
        },
        {
            q: "What payment methods does OnlyOptions accept?",
            a: "We accept all major credit and debit cards including Visa, Mastercard, American Express, and Discover. Payments are processed securely through Stripe, a PCI-DSS Level 1 certified payment processor. We do not store card details on our servers. We do not currently accept PayPal, cryptocurrency, or bank transfers."
        },
        {
            q: "Can I upgrade or downgrade my plan after subscribing?",
            a: "Yes. You can upgrade from Basic to Pro or Annual at any time from your account dashboard. Billing adjusts pro-rata you pay only for the difference for the remainder of your current billing period. To downgrade, changes take effect at your next renewal date. You retain your current plan's features until then."
        },
        {
            q: "Do you offer discounts for students or groups?",
            a: "We do not currently offer student or academic discounts. The Annual plan at $600/year ($50/month) is our best-value option for all subscribers. We do not offer group or team pricing at this time."
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
