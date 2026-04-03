import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Zap } from 'lucide-react';
import logicMockup from '../../../../assets/pages_images/Mobile Trading Signals App-15.png';

const MethodologySection = () => {
    return (
        <StandardSection variant="default" divider="top" spacing="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10 text-left">
                    <SectionHeader
                        label="The Logic"
                        title={<>Signal <br /> <span className="text-brand-500">Methodology</span></>}
                        description="Every signal we send follows a rigorous analytical protocol. We do not send signals based on social media trends, unverified patterns, or gut instinct."
                        align="left"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Regime Analysis", desc: "Assessing market conditions: SPY/QQQ trend, VIX, and breadth indicators." },
                            { title: "Volatility Assessment", desc: "Analyzing implied volatility relative to historical levels for favorable pricing." },
                            { title: "Trigger Strategy", desc: "Breakout levels, support/resistance, and momentum with 2:1 R/R requirement." },
                            { title: "Option Parameter", desc: "Selecting contracts based on delta, premium, liquidity, and time value." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20">
                                    <Zap className="w-4 h-4 text-brand-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-xs mb-1 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-gray-500 text-[10px] leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-6">
                        <a href="/how-it-works" className="text-brand-500 font-black uppercase text-[10px] tracking-widest hover:text-brand-400 flex items-center gap-2 group">
                            Full step-by-step signal guide <Zap className="w-3 h-3 transition-transform group-hover:scale-125" />
                        </a>
                    </div>
                </div>

                <div className="relative group lg:ml-auto max-w-sm">
                    <div className="absolute -inset-20 bg-brand-500/5 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
                    <img
                        src={logicMockup.src || logicMockup}
                        alt="Signal Protocol Illustration"
                        className="relative w-full h-auto max-h-[500px] object-contain object-top rounded-2xl opacity-90 transition-all duration-1000 group-hover:scale-[1.02] drop-shadow-[0_0_50px_rgba(32,109,254,0.15)]"
                    />
                    <Card variant="glass" className="absolute -bottom-6 -right-6 p-6 border-white/5 bg-black/80 shadow-2xl max-w-[220px]">
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-400 mb-2">Protocol Verified</p>
                        <p className="text-white text-[10px] leading-relaxed">Systematic analysis ensuring every entry has a mathematical edge.</p>
                    </Card>
                </div>
            </div>
        </StandardSection>
    )
}
export default MethodologySection;
