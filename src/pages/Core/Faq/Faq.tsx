import { useState } from 'react';
import HeroSection from '../../../components/sections/Hero/HeroSection';
import CTASection from '../../../components/sections/CTA/CTASection';
import { ChevronDown, ChevronUp, MessageCircleQuestion } from 'lucide-react';

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How much capital do I need?",
        a: "You can start trading options with as little as $500 to $1,000, especially utilizing our 0DTE and weekly plays. However, we recommend a starting balance of $2,500 to propertly practice risk management and position sizing (never risking more than 5-10% of your account per trade)."
      },
      {
        q: "Which broker should I use?",
        a: "For US citizens, we highly recommend ThinkOrSwim (Charles Schwab), Tastytrade, or Webull. For international traders, Interactive Brokers is generally the best choice. Robinhood can be used for beginners, but lacks the advanced execution speed needed for 0DTE scalps."
      },
      {
        q: "I am a complete beginner. Can I join?",
        a: "Absolutely. We provide an extensive education library and beginner-friendly guides. Our community is focused on teaching you HOW to trade, not just blindly following signals."
      }
    ]
  },
  {
    category: "The Signals",
    questions: [
      {
        q: "How many signals do you provide daily?",
        a: "Quality over quantity. We typically provide 2-4 high-probability setups per day. We do not force trades in choppy or unpredictable markets."
      },
      {
        q: "Do you trade 0DTE (0 Days to Expiration)?",
        a: "Yes. Our Head Strategist specializes in SPY and QQQ 0DTE momentum scalps. These are fast-moving trades requiring immediate execution. We also provide weekly and monthly swings for those who cannot watch the screen all day."
      },
      {
        q: "How fast do I need to enter the trades?",
        a: "For 0DTE trades, you should enter within 15-30 seconds of the alert. For swing trades, you have a larger window (several minutes to an hour) to get a good fill."
      }
    ]
  },
  {
    category: "Billing & Support",
    questions: [
      {
        q: "What's your refund policy?",
        a: "We offer a 7-day money-back guarantee for all new members. If you join and decide the service isn't for you within the first 7 days, simply open a support ticket and we will refund your initial payment, no questions asked."
      },
      {
        q: "Can I cancel at any time?",
        a: "Yes. There are no lock-in contracts. You can manage your subscription directly from your member dashboard and cancel at any time to avoid future billing."
      },
      {
        q: "Do you offer 1-on-1 mentorship?",
        a: "Our Pro and Annual plans include priority support and regular portfolio reviews. While we do not offer daily 1-on-1 mentorship, our analysts are highly active in the Discord and regularly answer individual questions."
      }
    ]
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-800/20 rounded-xl bg-gray-900/30 overflow-hidden transition-all duration-300">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-white pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      <div
        className={`px-6 text-gray-400 leading-relaxed transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        {answer}
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="pb-20">
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about OnlyOptions, our trading strategy, and billing."
        primaryCtaText="Join the Discord"
        primaryCtaLink="/signup"
      />

      <section className="px-6 md:px-12 -mt-10 mb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqData.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8">
                <MessageCircleQuestion className="w-6 h-6 text-brand-400" />
                <h3 className="text-2xl font-black">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.questions.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center p-8 border border-brand-500/20 rounded-2xl bg-brand-900/10">
            <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
            <p className="text-gray-400 mb-6">Our support team is ready to help. Plus, find 20+ more detailed answers in our private Discord.</p>
            <a href="/contact" className="text-brand-400 font-bold hover:text-brand-300 transition-colors uppercase tracking-widest text-sm">
              Contact Support →
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Stop Guessing. Start Executing."
        subtitle="Join the elite options trading community today."
        primaryCtaText="Start 7-Day Free Trial"
        primaryCtaLink="/signup"
      />
    </div>
  );
};

export default Faq;
