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

export const faqData = [
    {
        q: "Who runs OnlyOptions.us?",
        a: "OnlyOptions.us is operated by a team of professional options traders with over 30 years of combined experience across institutional finance and independent trading. Our analysts have backgrounds in equity derivatives trading at major financial institutions, quantitative analysis, and documented personal options trading. We do not publicly list individual team member names — the service is evaluated on the performance record and methodology, both of which are fully public on our Performance Dashboard and How It Works page."
    },
    {
        q: "When was OnlyOptions founded?",
        a: "OnlyOptions.us was founded in January 2023. We launched with a beta group of 50 traders and have been operating continuously since. Our full signal history is published from our first month of operation. As of February 2026, we have published results from 1,847 closed signals across 38 months of operation."
    },
    {
        q: "How is the OnlyOptions win rate calculated and verified?",
        a: "Our 70.3% win rate is calculated from 1,847 closed signals published between January 2023 and February 2026. A signal is counted as a win when it is closed at or above the entry price — whether at the profit target or via an early exit above breakeven. A signal is counted as a loss when it is closed at the stop-loss level or below. We use mid-prices (midpoint of bid and ask) at signal entry and exit times. Every result is published on the Performance Dashboard with dates, tickers, strike prices, entry prices, exit prices, and percentage returns. We do not remove or reclassify results."
    },
    {
        q: "Do the OnlyOptions analysts trade their own signals?",
        a: "Yes. Our analysts trade their own personal capital using the same signals they send to subscribers. All signals are transmitted simultaneously — analysts do not receive signals in advance of subscribers. This is a voluntary practice we adopted because we believe signal providers should have personal financial stake in the quality of their recommendations. We disclose this practice publicly as part of our commitment to transparency."
    },
    {
        q: "Why does OnlyOptions only cover options and not stocks?",
        a: "We cover options exclusively because that is where our team's expertise is deepest and most verifiable. Options are a precise enough instrument that signal quality — the specific strike, expiration date, entry range, stop-loss, and exit timing — meaningfully affects outcomes in ways that a vague directional call cannot. Expanding into stocks, ETF long positions, or other asset classes would require different expertise and would dilute the quality of what we do well. We built OnlyOptions to be the best options signal service, not the broadest signal service."
    },
    {
        q: "Is OnlyOptions a registered investment adviser?",
        a: "No. OnlyOptions LLC is not registered as an investment adviser under the Investment Advisers Act of 1940 with the SEC or any state securities regulator. Our service is educational in nature. Signals represent the professional analytical opinions of our team and are not personalized investment advice tailored to your individual circumstances. We do not manage client funds, hold client assets, or execute trades on your behalf. All trading decisions are made independently by each subscriber. See our full Risk Disclaimer for complete disclosures."
    },
    {
        q: "How can I verify OnlyOptions performance claims?",
        a: "Every closed signal we have ever sent is published on the Performance Dashboard. You can view the complete trade history — dates, tickers, option types, strike prices, expiration dates, entry prices, exit prices, and percentage returns — before subscribing. The data is available to the public. We also publish monthly and annual performance summaries with totals. Our Performance Dashboard is not locked behind a paywall — visit onlyoptions.us/performance to review our complete record."
    },
    {
        q: "What makes OnlyOptions different from other signal services?",
        a: "Three things separate us from most signal services. First, complete performance transparency — we publish every signal result including losses, with time-stamps and full trade details. Most services either do not publish results or publish only winning trades. Second, complete signal format — every signal includes 10 fields: ticker, type, strike, expiry, entry range, target, stop-loss, risk/reward ratio, confidence rating, and written rationale. You never receive a vague alert without the information to execute it. Third, exit alerts — we notify you when every position should be closed, which most signal services do not do."
    },
    {
        q: "How do I contact OnlyOptions?",
        a: "For account and billing questions, email support@onlyoptions.us. For questions about signals or market analysis, email analysts@onlyoptions.us. Our support team responds within 24 hours on business days. Pro plan subscribers receive priority support with a 1-hour response window during market hours (9:00 AM to 4:30 PM ET, Monday through Friday)."
    },
    {
        q: "What happens if I am not satisfied with the service?",
        a: "New subscribers receive a 7-day money-back guarantee on their first payment. If you subscribe and are not satisfied within 7 days of your first charge, contact support@onlyoptions.us for a full refund — no questions asked. The 7-day free trial (no credit card required) also gives you complete access to the service before any payment is made, so you can evaluate the signal quality and format before committing to a subscription."
    }
];

const AboutFaqSection = () => {
    return (
        <StandardSection className="py-32" containerSize="4xl">
            <SectionHeader
                label="Support"
                title="About Us FAQ"
                description="Common questions about our background and standards."
                align="center"
            />
            <div className="space-y-4">
                {faqData.map((item, i) => (
                    <FaqItem key={i} question={item.q} answer={item.a} />
                ))}
            </div>
        </StandardSection>
    )
}
export default AboutFaqSection;
