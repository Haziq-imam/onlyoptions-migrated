import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Check, X } from 'lucide-react';
import transparencyMockup from '../../../../assets/pages_images/ProfitsScreen.png';

const TransparencySection = () => {
    return (
        <StandardSection variant="muted" divider="top" spacing="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative group lg:order-1 order-2 max-w-md mx-auto">
                    <div className="absolute inset-0 bg-brand-500/5 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
                    <img
                        src={(transparencyMockup.src || transparencyMockup) as string}
                        alt="Transparency Dashboard"
                        className="relative w-full h-auto max-h-[500px] object-contain object-top opacity-95 transition-all duration-1000 group-hover:scale-[1.02] drop-shadow-[0_0_50px_rgba(32,109,254,0.15)]"
                    />
                </div>

                <div className="lg:order-2 order-1 space-y-12 text-left">
                    <SectionHeader
                        label="Values"
                        title={<>Commitment to <br /> <span className="text-brand-500">Transparency</span></>}
                        description="Transparency is more important than the win rate number itself, because the win rate is only meaningful if you can verify it."
                        align="left"
                    />

                    <div className="space-y-6">
                        <Card variant="glass" className="p-10 border-white/5 bg-gray-950/40">
                            <h5 className="text-brand-400 font-black text-[10px] uppercase tracking-widest mb-8">Verification Protocol</h5>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Publish every signal",
                                    "Time-stamp transmission",
                                    "Full history public",
                                    "Include rationale",
                                    "Analyst personal staking"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs text-gray-300 font-bold">
                                        <Check className="w-4 h-4 text-brand-500 shrink-0" /> {text}
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card variant="glass" className="p-10 border-red-500/10 bg-red-500/[0.02]">
                            <h5 className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-8">Our Anti-Fraud Standards</h5>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "No deleted losses",
                                    "No artificial results",
                                    "No selective reporting",
                                    "No profit guarantees",
                                    "No vague signals"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[11px] text-gray-500 italic">
                                        <X className="w-4 h-4 text-red-500/50 shrink-0" /> {text}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </StandardSection>
    )
}

export default TransparencySection;
