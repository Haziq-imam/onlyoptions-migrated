import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';
import { Star } from 'lucide-react';

const ProofAndStats = () => {
    const stats = [
        { metric: "Trial-to-Paid Conversion", result: "68% — more than 2 out of 3 trial members subscribe within 7 days" },
        { metric: "Average Subscription Day", result: "Day 4.2 — most members subscribe before the trial ends" },
        { metric: "Reason for Subscribing", result: "#1: Verified track record (89%). #2: Community quality (71%). #3: Signal accuracy (68%)." },
        { metric: "Trial Members Who Execute Trades", result: "82% execute at least one signal during trial. 34% execute all signals." },
        { metric: "First-Year Retention Rate", result: "87% (industry avg: 40–50%)" },
    ];

    const testimonials = [
        {
            rating: 5,
            text: "I was extremely skeptical about options signals services after being burned before. The free trial let me verify every claim they made. I watched them send a SPY call that went up 84% in 3 hours. Subscribed on Day 3 of my trial.",
            author: "Marcus J.",
            role: "Software Engineer",
            date: "Subscribed February 2025"
        },
        {
            rating: 5,
            text: "The transparency is what sold me. I spent 4 days scrolling through their entire Discord history back to 2023. Every loss is right there, documented with screenshots. When a service is this open about failures and successes, you know they are legit.",
            author: "Jennifer W.",
            role: "Marketing Manager",
            date: "Subscribed June 2024"
        },
        {
            rating: 5,
            text: "I joined the free trial not planning to subscribe. I just wanted to see what professional options signals looked like. By Day 2 I realized the education library alone was worth the subscription price. The signals are the cherry on top.",
            author: "Raj P.",
            role: "IT Manager",
            date: "Subscribed March 2024"
        }
    ];

    return (
        <div className="space-y-24">
            {/* Why We Offer Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <SectionHeader
                        title="Why We Offer a No-Credit-Card Free Trial"
                        description="Because We Have Nothing to Hide"
                        align="left"
                    />
                    <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                        <p>Most options signals services hide behind paywalls, fake testimonials, and cherry-picked results. We are different. We want you to verify our track record, watch our signals in real time, and experience our community before paying.</p>
                        <p><span className="text-white font-black uppercase tracking-widest text-[10px]">Our bet:</span> If you spend 7 days seeing our 70.3% win rate in action, reading our signal rationale, and interacting with 1,200+ real members in Discord, you will subscribe. If we are wrong — if our service is not a good fit — you walk away having learned something valuable for free.</p>
                        <p><span className="text-white font-black uppercase tracking-widest text-[10px]">Industry reality:</span> Services that require credit cards upfront are betting you will forget to cancel. We do not play that game. Our conversion rate from trial to paid (68%) proves our value speaks for itself.</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <SectionHeader
                        title="Free Trial Success Statistics"
                        align="left"
                        className="mb-8"
                    />
                    <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Metric</TableHead>
                                    <TableHead>Result</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {stats.map((stat, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell label="Metric" className="text-white font-bold">{stat.metric}</TableCell>
                                        <TableCell label="Result" className="text-gray-400">{stat.result}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest italic font-bold">*Statistics based on 2,847 trial signups from Jan 2023 to Jan 2026.</p>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="space-y-12">
                <SectionHeader
                    title="What Free Trial Members Say"
                    description="Real Feedback From Skeptics Who Became Subscribers"
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <Card key={idx} variant="glass" className="p-8 border-white/5 flex flex-col h-full bg-white/[0.01]">
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-brand-500 fill-brand-500" />
                                ))}
                            </div>
                            <p className="text-white/80 text-sm leading-relaxed mb-8 italic flex-1">"{testimonial.text}"</p>
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <div className="text-white font-black text-sm uppercase tracking-tight">{testimonial.author}</div>
                                <div className="text-brand-500 font-bold text-[10px] uppercase tracking-widest mb-1">{testimonial.role}</div>
                                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.1em]">{testimonial.date}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProofAndStats;
