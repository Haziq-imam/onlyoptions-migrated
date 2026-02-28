import HeroSection from '../../../components/ui/Hero/HeroSection';
import { Card } from '../../../components/ui/Card/Card';
import { BookOpen, Target, ShieldAlert, Zap, TrendingUp, Search } from 'lucide-react';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import mockupImg from '../../../assets/pages images/signal-looklike.png';

const Page0dteOptionsStrategyCompleteGuide = () => {
    return (
        <div className="bg-black">
            <HeroSection
                title={<>0DTE Options Strategy: <br /><span className="text-brand-500">The Complete 2026 Guide</span></>}
                subtitle="Master the most explosive instrument in the stock market. Learn how to trade Zero Days to Expiration with precision and institutional risk management."
                primaryCtaText="Join Our 0DTE Alerts"
                primaryCtaLink="/signup"
                image={mockupImg}
                badgeText="Strategy Depth"
            />

            <StandardSection variant="institutional" dotGrid spacing="lg" divider="bottom">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        title="What exactly is a 0DTE Option?"
                        description="Zero Days to Expiration (0DTE) contracts expire on the same day they are traded. They offer extreme leverage but require precise execution."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <Card variant="glass" className="p-8 border-brand-500/10 bg-brand-500/5">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">The Power</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "High leverage (small capital, large potential returns)",
                                    "Rapid P&L realization (minutes to hours)",
                                    "No overnight gap risk or exposure"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card variant="glass" className="p-8 border-red-500/10 bg-red-500/5">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-red-500/10 text-red-400">
                                    <ShieldAlert className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight">The Risks</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Extreme Time Decay (Theta) acceleration",
                                    "100% loss potential if strike isn't met",
                                    "High volatility and emotional stress"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </StandardSection>

            <StandardSection spacing="lg" divider="bottom">
                <div className="max-w-5xl mx-auto">
                    <SectionHeader
                        title="The 3-Pillar 0DTE Framework"
                        description="Our proprietary system for navigating high-velocity price action with institutional discipline."
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                icon: <Search className="w-6 h-6" />,
                                title: "Pivot Analysis",
                                desc: "We use institutional order flow and volume profiles to identify precise rejection and breakout zones.",
                                color: "brand"
                            },
                            {
                                icon: <Target className="w-6 h-6" />,
                                title: "Delta Selection",
                                desc: "Standardizing on 15-30 Delta contracts to balance gamma explosiveness with probability.",
                                color: "teal"
                            },
                            {
                                icon: <TrendingUp className="w-6 h-6" />,
                                title: "Exit Protocols",
                                desc: "Automated scaling at +20%, +50%, and +100% while neutralizing risk at break-even.",
                                color: "blue"
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="space-y-6">
                                <div className={`w-14 h-14 rounded-2xl bg-${pillar.color}-500/10 flex items-center justify-center text-${pillar.color}-400 border border-${pillar.color}-500/20`}>
                                    {pillar.icon}
                                </div>
                                <h4 className="text-lg font-black text-white uppercase tracking-tight">{pillar.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </StandardSection>

            <StandardSection variant="muted" spacing="lg" divider="bottom">
                <div className="max-w-4xl mx-auto">
                    <Card variant="glass" className="p-12 border-white/5 bg-white/[0.01] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <BookOpen className="w-40 h-40 text-brand-500" />
                        </div>
                        <div className="relative z-10 max-w-2xl">
                            <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Summary for Scalpers</h4>
                            <p className="text-gray-400 leading-relaxed mb-8 italic">
                                "Trading 0DTE requires extreme discipline. If you are new, start with 1 contract and focus on the technical setup rather than the dollar amount. The goal is to catch the momentum of a move and exit quickly."
                            </p>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-500/5 border border-brand-500/10 text-brand-400 text-xs font-black uppercase tracking-widest">
                                <Zap className="w-4 h-4" />
                                Pro Tip: Never risk more than 1% of equity on a single 0DTE position.
                            </div>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            <StandardCTA
                title="Stop Guessing, Start Executing"
                subtitle="Join our Discord and trade these exact setups live with our analysts every morning."
            />
        </div>
    );
};

export default Page0dteOptionsStrategyCompleteGuide;
