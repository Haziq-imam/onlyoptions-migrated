import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "What is OnlyOptions.us?",
        answer: "OnlyOptions.us is an options trading signal service. Professional analysts send 2–4 live options trading alerts every market day through the OnlyOptions iOS and Android app. Each signal includes the exact ticker, option type (call or put), strike price, expiration date, entry price range, profit target, stop-loss level, and analyst rationale. The service covers standard equity options on major U.S.-listed stocks and ETFs. Members execute the trades independently in their own brokerage accounts."
    },
    {
        question: "How accurate is the OnlyOptions win rate?",
        answer: "The 70.3% win rate is calculated from 1,847 closed signals published between January 2023 and February 2026. A signal is recorded as a win when it is closed at or above the entry price. A signal is recorded as a loss when it is closed at or below the stop-loss level. Results use mid-prices (midpoint of bid and ask spread) at signal and exit times. Every result — wins and losses — is published on the Performance Dashboard with dates, tickers, prices, and percentage returns. No results are removed or reclassified."
    },
    {
        question: "Do I need a credit card for the free trial?",
        answer: "No. The 7-day free trial for OnlyOptions requires no credit card and no payment information. You receive full access to all features during the trial — live signals via the app, performance dashboard access, and the education library. At the end of 7 days you can choose to subscribe. If you do nothing, your trial simply ends. We do not auto-charge you."
    },
    {
        question: "How do I receive the options signals?",
        answer: "Signals are delivered through the OnlyOptions mobile app as push notifications. The app is available on the Apple App Store (iOS) and Google Play Store (Android). Each notification contains the full signal details. Pro plan subscribers also receive every signal by SMS text message. There is no other delivery method — signals are sent exclusively through the app and, for Pro members, by text."
    },
    {
        question: "What options trading experience do I need to use this service?",
        answer: "You need basic options knowledge before using the service. You should understand what calls and puts are, how strike prices and expiration dates work, and how to place an options order in your brokerage account. Complete beginners should spend 2–4 weeks studying options fundamentals and paper trading before risking real capital. Our Education Library inside the app covers these basics. We also strongly recommend beginning with weekly or monthly expiration signals rather than 0DTE (same-day expiry) signals, which move faster and carry higher risk."
    },
    {
        question: "How much money do I need to follow the signals?",
        answer: "There is no required minimum account size, but we recommend at least $2,000 to follow signals comfortably. A $5,000 to $10,000 account allows you to follow most signals while applying proper position sizing — specifically the 2% rule, which limits your risk on any single trade to 2% of your account. Options contracts represent 100 shares, and our signal entry prices typically range from $0.50 to $15.00, meaning individual contracts cost $50 to $1,500. Our Position Size Calculator on the website helps you determine how many contracts to trade."
    },
    {
        question: "Which brokers work with OnlyOptions signals?",
        answer: "Our signals work with any brokerage that supports options trading at Level 2 approval or higher. We recommend Thinkorswim (TD Ameritrade/Schwab), Tastytrade, Webull, or Interactive Brokers for their options platforms, competitive pricing, and order execution quality. You will need Level 2 options approval at your broker to buy calls and puts — the approval process varies by broker and typically involves a short application about your trading experience."
    },
    {
        question: "What is the difference between the Basic and Pro plans?",
        answer: "The Basic plan ($60/month) includes 2–4 daily options signals, iOS and Android app access, push notification delivery, the performance dashboard, and the education library. The Pro plan ($99/month) includes everything in Basic plus SMS text message delivery of every signal, priority email support with a 1-hour response during market hours, and access to weekly live Q&A sessions with the analyst team. Both plans include the 7-day free trial with no credit card required."
    },
    {
        question: "Can I cancel my OnlyOptions subscription anytime?",
        answer: "Yes. You can cancel at any time directly from your account dashboard or by emailing support@onlyoptions.us. When you cancel, your access continues until the end of your current billing period — we do not cut off access immediately. There are no cancellation fees. New subscribers receive a 7-day money-back guarantee on their first payment. If you subscribe and are not satisfied within 7 days of your first charge, contact us for a full refund."
    },
    {
        question: "Is OnlyOptions a registered investment adviser?",
        answer: "No. OnlyOptions LLC is not registered as an investment adviser under the Investment Advisers Act of 1940. Our signal service is educational in nature. Signals represent the professional analytical opinions of our team and are not personalized investment advice tailored to your individual financial situation, tax status, or investment objectives. We do not manage client funds or execute trades on your behalf. All trading decisions are made independently by each subscriber. Options trading involves substantial risk of loss. Please read our full Risk Disclaimer before subscribing."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-black/20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Everything you need to know about the OnlyOptions signal service.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all ${openIndex === index ? 'bg-white/5 border-brand-500/30' : 'border-white/5 bg-transparent hover:bg-white/[0.02]'}`}
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-lg pr-8">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="w-5 h-5 text-brand-400" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
                            >
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
