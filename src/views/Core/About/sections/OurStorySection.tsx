import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import storyImg from '../../../../assets/pages images/Mobile Trading Signals App-1.png';

const OurStorySection = () => {
    return (
        <StandardSection variant="muted" divider="top" spacing="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative group order-2 lg:order-1">
                    <div className="absolute -inset-20 bg-brand-500/5 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img
                        src={storyImg}
                        alt="Market Analysis"
                        className="relative w-full h-auto max-h-[500px] object-cover object-top rounded-3xl opacity-90 transition-all duration-1000 drop-shadow-[0_0_50px_rgba(32,109,254,0.1)]"
                    />
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <SectionHeader
                        label="The Story"
                        title={<>Founded on <span className="text-brand-500">Transparency</span></>}
                        description="Most signal services operate in the shadows. We chose a different path. From day one, we committed to publishing every single trade result — the wins, the losses, and the breakevens — so our members always know where they stand."
                        align="left"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: 'Verified History', desc: '1,847+ trades logged since 2023 with full timestamps and entry/exit details.' },
                            { title: 'Direct Access', desc: 'Real-time push notifications delivered via our dedicated iOS and Android app.' }
                        ].map((item, i) => (
                            <Card key={i} variant="glass" className="p-6 border-white/5 hover:border-brand-500/20 transition-all group text-left">
                                <h4 className="text-white font-black text-xs uppercase tracking-tight mb-2 group-hover:text-brand-500 transition-colors">{item.title}</h4>
                                <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </StandardSection>
    )
}
export default OurStorySection;
