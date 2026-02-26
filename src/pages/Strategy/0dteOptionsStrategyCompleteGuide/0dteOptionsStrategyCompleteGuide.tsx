import HeroSection from '../../../components/sections/Hero/HeroSection';
import CTASection from '../../../components/sections/CTA/CTASection';
import { Card } from '../../../components/ui/Card/Card';
import { BookOpen, Target, ShieldAlert, Zap, TrendingUp, Search } from 'lucide-react';

const Page0dteOptionsStrategyCompleteGuide = () => {
    return (
        <div className="pb-20">
            <HeroSection
                title="0DTE Options Strategy: The Complete 2026 Guide"
                subtitle="Master the most explosive instrument in the stock market. Learn how to trade Zero Days to Expiration with precision and institutional risk management."
                primaryCtaText="Join Our 0DTE Alerts"
                primaryCtaLink="/signup"
            />

            <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
                <div className="prose prose-invert prose-brand max-w-none">
                    <div className="flex items-center gap-3 text-brand-400 font-bold uppercase tracking-widest text-sm mb-6">
                        <BookOpen className="w-5 h-5" />
                        Educational Depth
                    </div>

                    <h2 className="text-4xl font-extrabold mb-8">What exactly is a 0DTE Option?</h2>
                    <p className="text-gray-400 text-xl leading-relaxed mb-10">
                        0DTE stands for <span className="text-white font-semibold">Zero Days to Expiration</span>. These are options contracts that expire on the very same day they are traded. Historically available only once a week, major ETFs like SPY and QQQ now offer 0DTE expirations every single trading day.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <Card className="bg-brand-900/10 border-brand-500/20 p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="w-6 h-6 text-brand-400" />
                                <h3 className="text-xl font-bold">The Power of 0DTE</h3>
                            </div>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li className="flex gap-2">
                                    <div className="mt-1 flex-shrink-0 text-brand-400">●</div>
                                    High leverage (small capital, large potential returns)
                                </li>
                                <li className="flex gap-2">
                                    <div className="mt-1 flex-shrink-0 text-brand-400">●</div>
                                    Rapid P&L realization (get out in minutes/hours)
                                </li>
                                <li className="flex gap-2">
                                    <div className="mt-1 flex-shrink-0 text-brand-400">●</div>
                                    No overnight gap risk
                                </li>
                            </ul>
                        </Card>

                        <Card className="bg-red-950/10 border-red-500/20 p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldAlert className="w-6 h-6 text-red-400" />
                                <h3 className="text-xl font-bold text-red-100">The Risks</h3>
                            </div>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li className="flex gap-2">
                                    <div className="mt-1 flex-shrink-0 text-red-500">●</div>
                                    Extreme Time Decay (Theta)
                                </li>
                                <li className="flex gap-2">
                                    <div className="mt-1 flex-shrink-0 text-red-500">●</div>
                                    100% loss potential if strike isn't met
                                </li>
                                <li className="flex gap-2">
                                    <div className="mt-1 flex-shrink-0 text-red-500">●</div>
                                    High volatility and emotional stress
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">Our 3-Pillar 0DTE Strategy</h2>
                    <div className="space-y-12 mb-20">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                                <Search className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-3">1. Technical Level Identification</h4>
                                <p className="text-gray-400">We don't guess. We use institutional order flow and volume profile analysis to identify "Key Pivot Levels" where SPY is likely to experience high volatility or rejection. We only enter when price interacts with these zones.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                                <Target className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-3">2. Delta Selection (Risk vs Reward)</h4>
                                <p className="text-gray-400">We typically target 15-30 Delta options. This provides the best "bang for your buck" balance—enough gamma to explode on a move, but not so deep OTM that the probability of success is near zero.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold mb-3">3. Precise Exit Management</h4>
                                <p className="text-gray-400">0DTE profits can vanish in seconds. We scale out of positions at +20%, +50%, and +100% while moving stops to break-even to protect capital. We NEVER hold a 0DTE to the closing bell unless it's a "lotto" position.</p>
                            </div>
                        </div>
                    </div>

                    <Card className="p-10 border-white/5 bg-gray-950 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <BookOpen className="w-32 h-32" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">Summary for Beginners</h4>
                        <p className="text-gray-400 leading-relaxed">
                            Trading 0DTE requires extreme discipline. If you are new, start with 1 contract and focus on the technical setup rather than the dollar amount. The goal is to catch the momentum of a move and exit quickly.
                        </p>
                        <div className="mt-6 p-4 bg-brand-500/10 rounded-xl border border-brand-500/20 text-brand-300 font-medium text-sm">
                            💡 Pro Tip: Never risk more than 1-2% of your total account on a single 0DTE trade.
                        </div>
                    </Card>
                </div>
            </section>

            <CTASection
                title="Stop Guessing, Start Executing"
                subtitle="Our analysts identify THESE exact 0DTE setups every single morning in Discord."
                primaryCtaText="Access 0DTE Alerts"
                primaryCtaLink="/signup"
            />
        </div>
    );
};

export default Page0dteOptionsStrategyCompleteGuide;
