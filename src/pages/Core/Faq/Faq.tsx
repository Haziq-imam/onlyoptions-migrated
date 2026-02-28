import { useState } from 'react';
import HeroSection from '../../../components/ui/Hero/HeroSection';
import { ChevronDown, ChevronUp } from 'lucide-react';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Card } from '../../../components/ui/Card/Card';
import mockupImg from '../../../assets/pages images/Modern Lotto and Stocks App-5.png';

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

const Faq = () => {
  return (
    <div className="bg-black">
      <HeroSection
        title={<>Guidance & <br /><span className="text-brand-500">Support</span></>}
        subtitle="Everything you need to know about OnlyOptions, our trading strategy, and billing process."
        primaryCtaText="Join Discord"
        primaryCtaLink="/signup"
        image={mockupImg}
        badgeText="Help Center"
      />

      <StandardSection spacing="lg" divider="bottom">
        <div className="max-w-4xl mx-auto space-y-20">
          {faqData.map((category, idx) => (
            <div key={idx} className="space-y-10">
              <SectionHeader
                title={category.category}
                align="left"
              />
              <div className="grid grid-cols-1 gap-4">
                {category.questions.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}

          <Card variant="glass" className="p-10 border-brand-500/20 bg-brand-500/5 text-center space-y-6">
            <SectionHeader
              title="Still have questions?"
              description="Our support team is ready to help. Plus, find 20+ more detailed answers in our private Discord community."
            />
            <div className="pt-4">
              <a href="/contact" className="text-brand-400 font-black uppercase tracking-widest text-[10px] hover:text-brand-300 transition-colors">
                Open a Support Ticket →
              </a>
            </div>
          </Card>
        </div>
      </StandardSection>

      <StandardCTA
        title="Stop Guessing. Start Executing."
        subtitle="Join the elite options trading community today."
      />
    </div>
  );
};

export default Faq;
