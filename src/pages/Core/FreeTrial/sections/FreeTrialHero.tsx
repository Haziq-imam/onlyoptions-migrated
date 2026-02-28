import { CheckCircle2, Users, ShieldCheck, Zap } from 'lucide-react';
import Button from '../../../../components/ui/Button/Button';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const FreeTrialHero = () => {
    const badges = [
        { icon: <ShieldCheck className="w-5 h-5 text-brand-400" />, text: "No Credit Card" },
        { icon: <Zap className="w-5 h-5 text-brand-400" />, text: "Cancel Anytime" },
        { icon: <CheckCircle2 className="w-5 h-5 text-brand-400" />, text: "Full Access" },
        { icon: <Users className="w-5 h-5 text-brand-400" />, text: "1,247 Active Members" },
    ];

    return (
        <div className="relative pt-20 pb-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-500/10 blur-[120px] -z-10 rounded-full opacity-50" />

            <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                    Join the 70.3% Win Rate
                </div>

                <SectionHeader
                    title={<>Start Your 7-Day Free Trial — <span className="text-brand-500">No Credit Card Required</span></>}
                    description="Get full access to our professional options signals, performance dashboard, Discord community, and education library. See our 70.3% win rate in action before paying a dollar."
                    align="center"
                    className="max-w-3xl mx-auto"
                />

                <div className="flex flex-wrap justify-center gap-6 py-4">
                    {badges.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white font-bold text-sm bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
                            {badge.icon}
                            {badge.text}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6 pt-6">
                    <Button
                        variant="primary"
                        size="lg"
                        href="/signup"
                        className="px-16 h-20 rounded-2xl font-black text-xl shadow-[0_0_60px_rgba(32,109,254,0.3)] min-w-[300px]"
                    >
                        START YOUR FREE TRIAL
                    </Button>
                    <div className="flex items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest leading-none">
                        <span>No credit card</span>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <span>No commitment</span>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <span>No risk</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTrialHero;
