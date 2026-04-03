import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import storyImg from '../../../../assets/pages_images/Mobile Trading Signals App-14.png';

const AboutHeroSection = () => {
    return (
        <StandardSection spacing="xl" dotGrid className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 text-left">
                    <SectionHeader
                        label="Our Mission"
                        title={<>Institutional Grade Signals for <br /> <span className="text-brand-500">Every Trader</span></>}
                        description="OnlyOptions was founded with a single goal: to bridge the gap between institutional-level market analysis and the individual retail trader. We don't just send alerts; we provide the conviction and rationale behind every move."
                        align="left"
                    />
                    <div className="flex flex-wrap gap-6 pt-10 border-t border-white/5">
                        {[
                            { label: 'Active Members', value: '1,247+' },
                            { label: 'Win Rate', value: '70.3%' },
                            { label: 'Signals/Day', value: '2–4' }
                        ].map((stat, i) => (
                            <div key={i} className="group">
                                <p className="text-2xl font-black text-brand-500 group-hover:scale-105 transition-transform">{stat.value}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-20 bg-brand-500/10 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img
                        src={(typeof storyImg === 'string' ? storyImg : (storyImg as any).src)}
                        alt="OnlyOptions trading analytics"
                        className="relative w-full h-auto max-h-[500px] object-cover object-top rounded-3xl opacity-90 group-hover:opacity-100 transition-all duration-1000 drop-shadow-[0_0_50px_rgba(32,109,254,0.15)]"
                    />
                </div>
            </div>
        </StandardSection>
    )
}
export default AboutHeroSection;
