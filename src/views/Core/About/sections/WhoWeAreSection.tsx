import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import teamMockup from '../../../../assets/pages_images/Modern Lotto and Stocks App-1.png';

const WhoWeAreSection = () => {
    return (
        <StandardSection variant="default" divider="top" spacing="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12 text-left">
                    <SectionHeader
                        label="Professional Standards"
                        title={<>Expertise Behind <br /> <span className="text-brand-500">Every Alert</span></>}
                        description="OnlyOptions is run by a small, focused team of professional options traders. Our analysts bring years of experience from institutional trading floors and quantitative finance."
                        align="left"
                    />

                    <Card variant="institutional" className="p-8 border-white/5 bg-gray-950/40">
                        <h3 className="text-lg font-black text-white mb-6 border-b border-white/5 pb-6 uppercase tracking-tight">Team Profile</h3>
                        <div className="space-y-4">
                            {[
                                { label: "Experience", value: "30+ years institutional & independent" },
                                { label: "Background", value: "Ex-institutional equity derivatives" },
                                { label: "Independent", value: "Documented personal track records" },
                                { label: "Review", value: "Multi-analyst peer review" },
                                { label: "Skin in game", value: "Analysts trade personal capital" }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center gap-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-400 shrink-0">{row.label}</span>
                                    <span className="text-gray-300 text-xs font-medium">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card variant="glass" className="p-6 border-white/5 bg-gray-950/40">
                            <h4 className="text-white font-bold text-xs mb-2">Institutional Rooted</h4>
                            <p className="text-gray-500 text-[11px] leading-relaxed">Combining hedge fund precision with retail execution speed for high-probability setups.</p>
                        </Card>
                        <Card variant="glass" className="p-6 border-white/5 bg-gray-950/40">
                            <h4 className="text-white font-bold text-xs mb-2">Independent Mentality</h4>
                            <p className="text-gray-500 text-[11px] leading-relaxed">Analysts who have successfully traded their own capital for years before launching OnlyOptions.</p>
                        </Card>
                    </div>
                </div>

                <div className="relative group lg:ml-auto max-w-sm">
                    <div className="absolute -inset-20 bg-brand-500/10 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img
                        src={teamMockup.src || teamMockup}
                        alt="Trading Interface"
                        className="relative w-full h-auto max-h-[500px] object-contain object-top opacity-95 group-hover:opacity-100 transition-all duration-1000 drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                    />
                </div>
            </div>
        </StandardSection>
    )
}
export default WhoWeAreSection;
