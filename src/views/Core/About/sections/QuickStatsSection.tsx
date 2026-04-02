import { ShieldCheck, Target, BarChart3, Zap } from 'lucide-react';

const QuickStatsSection = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left text-white/80">
                    <div className="flex flex-col lg:flex-row items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">70.3% Win Rate</span>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-3">
                        <Target className="w-5 h-5 text-brand-400 shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Options Only</span>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-brand-400 shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Full Transparency</span>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-3">
                        <Zap className="w-5 h-5 text-brand-400 shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">$60/Month</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default QuickStatsSection;
