import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import type { FAQCategory, FAQItem } from '../data/faqData';

const FaqItemRow = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card variant="glass" className={`overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-500/30 bg-brand-500/5' : 'border-white/5 bg-white/[0.02] hover:border-white/10'}`}>
            <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-bold flex items-start gap-4 ${isOpen ? 'text-brand-400' : 'text-white'}`}>
                    <span className="text-brand-500/50 text-xs font-black tracking-tighter pt-0.5 whitespace-nowrap">Q.</span>
                    <span className="leading-tight">{question}</span>
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
                <div className="ml-8 border-l border-white/5 pl-6 whitespace-pre-line">
                    {answer}
                </div>
            </div>
        </Card>
    );
};

const FaqSection = ({ data }: { data: FAQCategory[] }) => {
    return (
        <div className="max-w-4xl mx-auto space-y-24">
            {data.map((categoryData, idx) => (
                <div key={idx} className="space-y-8" id={`section-${idx + 1}`}>
                    <SectionHeader
                        title={categoryData.category}
                        align="left"
                    />
                    <div className="grid grid-cols-1 gap-3">
                        {categoryData.items.map((faq: FAQItem, i: number) => (
                            <FaqItemRow key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqSection;
