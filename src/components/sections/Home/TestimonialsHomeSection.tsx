import { FiArrowRight } from 'react-icons/fi';
import { Card } from '../../ui/Card/Card';
import StandardSection from '../../ui/Layout/StandardSection';
import SectionHeader from '../../ui/Layout/SectionHeader';

const testimonials = [
    {
        quote: 'I had tried other signal services before and always found the same problem — vague alerts and no transparency on results. OnlyOptions publishes every trade result, wins and losses both. That told me the track record was real. The signal format is precise, the exit alerts mean I am never left holding wondering what to do, and the win rate I have personally achieved following the signals closely is right around what they advertise.',
        name: 'James K.', location: 'Chicago IL', role: 'Full-time trader — Pro Member since March 2023'
    },
    {
        quote: 'I work full time and cannot monitor charts during the day. The push notifications on the app are perfectly timed — I see the signal, execute in my broker in about two minutes, and then the exit alert tells me when to close. The signal format includes everything I need. I do not have to do my own analysis. After a year of following the signals, my results speak for themselves.',
        name: 'Rachel T.', location: 'Austin TX', role: 'Part-time trader — Basic Member since January 2024'
    },
    {
        quote: 'What sets this service apart from what I have seen elsewhere is the quality of the written rationale on every signal. It is not generic — it references specific technical levels, volatility conditions, and the reasoning behind the strike and expiry selection. For someone with a finance background, that level of detail is what I need to trust an alert service with real capital.',
        name: 'Marcus W.', location: 'New York NY', role: 'Retired finance professional — Annual Member since June 2023'
    },
];

const TestimonialsHomeSection = () => (
    <StandardSection className="py-32">
        <SectionHeader
            label="Social Proof"
            title={<>Member <span className="text-brand-500">Testimonials</span></>}
            description="Verified Trading Community"
            align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <Card key={i} variant="glass" className="p-6 md:p-8 border-white/5 hover:border-brand-500/20 transition-all flex flex-col group">
                    <div className="flex gap-1.5 mb-6">
                        {[...Array(5)].map((_, j) => (
                            <div key={j} className="w-1.5 h-1.5 rounded-full bg-brand-500/40 group-hover:bg-brand-500 transition-colors" />
                        ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed flex-1 italic font-medium">"{t.quote}"</p>
                    <div className="pt-6 mt-8 border-t border-white/5">
                        <p className="font-black text-white text-sm">{t.name}, <span className="text-gray-500 font-medium text-xs font-sans">{t.location}</span></p>
                        <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mt-2">{t.role}</p>
                    </div>
                </Card>
            ))}
        </div>

        <div className="text-center mt-12">
            <a href="/testimonials" className="inline-flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all">
                Read more member results <FiArrowRight className="w-4 h-4" />
            </a>
        </div>
    </StandardSection>
);

export default TestimonialsHomeSection;
