import StandardSection from '../../../../components/ui/Layout/StandardSection';
import { Card } from '../../../../components/ui/Card/Card';
import { ShieldCheck, Target } from 'lucide-react';

const DisclosuresSection = () => {
    return (
        <StandardSection className="py-32">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40 space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-brand-500" /> Disclosures
                        </h4>
                        <div className="space-y-4 text-[13px] text-gray-500 leading-relaxed italic">
                            <p>OnlyOptions LLC is an educational options signal service. We are not registered investment advisers, broker-dealers, or financial planners.</p>
                            <p>Signals represent the analytical opinions of our team. They are not personalized investment advice tailored to your individual objectives.</p>
                            <p>Options trading involves substantial risk. Never trade with money you cannot afford to lose.</p>
                            <a href="/risk-disclaimer" className="text-brand-500 font-bold hover:underline inline-block not-italic">Read full Risk Disclaimer →</a>
                        </div>
                    </Card>
                    <div className="space-y-8 pl-4">
                        <h4 className="text-white font-black uppercase text-xs tracking-widest flex items-center gap-2">
                            <Target className="w-4 h-4 text-brand-500" /> Accountability
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">We hold ourselves to internal standards beyond what is legally required. Our commitment:</p>
                        <div className="space-y-4">
                            {[
                                { trigger: "90-day win rate drops <60%", commit: "We will notify all subscribers and pause signals for internal review." },
                                { trigger: "Service goes offline >24 hours", commit: "Automatic account extensions for all affected members." },
                                { trigger: "Signal data error", commit: "Immediate app correction alert and documentation in Dashboard notes." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border-l-2 border-brand-500/20">
                                    <div className="text-white font-bold text-xs mb-2 uppercase tracking-tight">{item.trigger}</div>
                                    <p className="text-gray-500 text-xs leading-relaxed">{item.commit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </StandardSection>
    )
}
export default DisclosuresSection;
