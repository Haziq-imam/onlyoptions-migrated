import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';

const PricingHeroSection = () => {
    return (
        <StandardSection spacing="xl" divider="bottom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10 text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                        </span>
                        Simple Plans · Professional Results
                    </div>

                    <SectionHeader
                        title={<>OnlyOptions Pricing <br /> <span className="text-brand-500">Simple Plans, No Hidden Fees</span></>}
                        description="Three plans. One signal service. No long-term contracts, no automatic charges, and no hidden fees. Every plan includes the same live options signals delivered to your phone."
                        align="left"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { text: '7-Day Access', sub: 'No credit card' },
                            { text: 'Cancel Anytime', sub: 'No hidden fees' },
                            { text: '1,247+ Active Members', sub: '70.3% win rate' },
                            { text: 'Verified Trades', sub: 'Full history logs' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                <div>
                                    <p className="text-white font-black text-xs uppercase tracking-tight leading-none mb-1">{item.text}</p>
                                    <p className="text-gray-500 text-[9px] font-medium leading-none">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative group lg:ml-auto max-w-sm">
                    <Card variant="glass" className="p-8 border-white/10 bg-gray-950/60 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center pb-6 border-b border-white/5">
                                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Selected Tier</span>
                                <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-black uppercase tracking-tight">Institutional</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-white font-black text-3xl">$60<span className="text-gray-500 text-sm font-medium">/mo</span></p>
                                <p className="text-gray-400 text-xs">Standard equity options focus</p>
                            </div>
                            <div className="pt-4 space-y-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-500/40 rounded-full" style={{ width: `${60 + i * 10}%` }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                    <div className="absolute -inset-10 bg-brand-500/10 blur-[120px] rounded-full opacity-30 -z-10" />
                </div>
            </div>
        </StandardSection>
    )
}
export default PricingHeroSection;
