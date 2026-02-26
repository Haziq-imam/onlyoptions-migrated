import { FiArrowRight } from 'react-icons/fi';
import { Card } from '../../ui/Card/Card';

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
    <section className="py-24 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[rgb(32,109,254)] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Social Proof</p>
                <h2 className="text-4xl md:text-5xl font-black text-white">Member <span className="text-[rgb(32,109,254)]">Testimonials</span></h2>
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mt-2">Verified Trading Community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <Card key={i} variant="glass" className="p-8 border-white/5 hover:border-[rgb(32,109,254)]/20 transition-all flex flex-col">
                        <div className="flex gap-1 mb-5">
                            {[...Array(5)].map((_, j) => (
                                <div key={j} className="w-2 h-2 rounded-full bg-[rgb(32,109,254)]/50" />
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                        <div className="pt-6 mt-6 border-t border-white/5">
                            <p className="font-black text-white text-sm">{t.name}, <span className="text-gray-500 font-medium text-xs">{t.location}</span></p>
                            <p className="text-gray-600 text-xs mt-1">{t.role}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-10">
                <a href="/testimonials" className="inline-flex items-center gap-2 text-[rgb(32,109,254)] text-xs font-black uppercase tracking-widest hover:gap-3 transition-all">
                    Read more member results <FiArrowRight className="w-3 h-3" />
                </a>
            </div>
        </div>
    </section>
);

export default TestimonialsHomeSection;
