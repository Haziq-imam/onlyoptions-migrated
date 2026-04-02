import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const OnboardingPlan = () => {
    return (
        <div className="space-y-12">
            <SectionHeader
                title="30-Day Beginner Onboarding Plan"
                description="New to Options? Follow this 30-day path to consistent execution without risking a single dollar until you are ready."
                align="center"
            />

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card variant="glass" className="p-8 border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-500/10 rounded-bl-[100px] flex items-center justify-center">
                        <span className="text-brand-400 font-black text-xl translate-x-1 -translate-y-1">#1</span>
                    </div>
                    <div className="pr-8">
                        <h4 className="text-white font-black text-lg mb-4 tracking-tight">Week 1: Paper Trading</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Paper trade only. Use Thinkorswim's free paper account. Execute every signal virtually. Learn the format and exit management without financial risk.</p>
                    </div>
                </Card>

                <Card variant="glass" className="p-8 border-white/5 relative overflow-hidden group mt-0 lg:mt-8">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-500/10 rounded-bl-[100px] flex items-center justify-center">
                        <span className="text-brand-400 font-black text-xl translate-x-1 -translate-y-1">#2</span>
                    </div>
                    <div className="pr-8">
                        <h4 className="text-white font-black text-lg mb-4 tracking-tight">Week 2: Education</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Study the education library. Understand calls vs puts and learn the Greeks. Read every signal rationale in Discord.</p>
                    </div>
                </Card>

                <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 relative overflow-hidden group mt-0 lg:mt-16">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-500/20 rounded-bl-[100px] flex items-center justify-center">
                        <span className="text-brand-400 font-black text-xl translate-x-1 -translate-y-1">#3</span>
                    </div>
                    <div className="pr-8">
                        <h4 className="text-white font-black text-lg mb-4 tracking-tight">Week 3: Live Trading</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Trade real money with 1 contract only per signal, maximum $200 per trade. Focus on discipline: limit orders, stops set immediately, no chasing.</p>
                    </div>
                </Card>

                <Card variant="glass" className="p-8 border-white/5 relative overflow-hidden group mt-0 lg:mt-24">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-500/10 rounded-bl-[100px] flex items-center justify-center">
                        <span className="text-brand-400 font-black text-xl translate-x-1 -translate-y-1">#4</span>
                    </div>
                    <div className="pr-8">
                        <h4 className="text-white font-black text-lg mb-4 tracking-tight">Week 4: Self-Audit</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Self-audit your trades. Were you entering within the range? Setting stop-losses? Following exit alerts? Fix execution gaps before scaling up.</p>
                    </div>
                </Card>
            </div>

            <div className="text-center pt-8">
                <a href="/blog" className="inline-block text-brand-400 font-bold hover:text-brand-300 transition-colors text-sm items-center gap-2 uppercase tracking-widest">
                    Browse Beginner Education Guides →
                </a>
            </div>
        </div>
    );
};

export default OnboardingPlan;
