import StandardSection from '../../../../components/ui/Layout/StandardSection';
import { Card } from '../../../../components/ui/Card/Card';
import Button from '../../../../components/ui/Button/Button';
import { Check } from 'lucide-react';

const PricingCardsSection = () => {
    return (
        <StandardSection variant="muted" spacing="lg">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Choose Your Plan</h2>
                    <div className="w-24 h-1 bg-brand-500 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Basic Plan */}
                    <Card variant="default" className="relative p-10 flex flex-col items-center text-center border-white/10 bg-gray-950/40 hover:border-brand-500/30 transition-all duration-700 group">
                        <div className="mb-8">
                            <h3 className="text-sm font-black text-brand-400 uppercase tracking-[0.3em] mb-4">Basic</h3>
                            <div className="flex items-baseline gap-1 justify-center">
                                <span className="text-6xl font-black text-white">$60</span>
                                <span className="text-gray-500 font-bold">/ month</span>
                            </div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">Billed monthly</p>
                        </div>

                        <ul className="space-y-4 mb-10 w-full">
                            {[
                                "2–4 daily options signals",
                                "iOS & Android app",
                                "Push notification delivery",
                                "Performance dashboard",
                                "Education library",
                                "Email support (24hr)",
                                "Premium Membership"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center justify-center gap-3 text-xs text-gray-300">
                                    <Check className="w-4 h-4 text-brand-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto w-full">
                            <Button href="/membership" variant="secondary" className="w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest group-hover:bg-brand-500 group-hover:text-white transition-all">
                                Get Access
                            </Button>
                        </div>
                    </Card>

                    {/* Pro Plan */}
                    <Card variant="institutional" className="relative p-10 flex flex-col items-center text-center border-brand-500/40 bg-gray-900/60 shadow-[0_0_80px_rgba(32,109,254,0.15)] z-10 scale-105 group">
                        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-2xl">
                            Most Popular
                        </div>

                        <div className="mb-8">
                            <h3 className="text-sm font-black text-brand-400 uppercase tracking-[0.3em] mb-4">Pro</h3>
                            <div className="flex items-baseline gap-1 justify-center">
                                <span className="text-6xl font-black text-white">$99</span>
                                <span className="text-gray-500 font-bold">/ month</span>
                            </div>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">Billed monthly</p>
                        </div>

                        <div className="w-full mb-6 py-3 border-y border-white/5 text-[10px] font-black uppercase tracking-widest text-white">
                            Everything in Basic, plus:
                        </div>

                        <ul className="space-y-4 mb-10 w-full">
                            {[
                                "SMS text message delivery",
                                "Priority support (1hr)",
                                "Weekly live Q&A sessions",
                                "Advanced analyst notes",
                                "Premium Membership"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center justify-center gap-3 text-xs text-white font-bold">
                                    <Check className="w-4 h-4 text-brand-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto w-full">
                            <Button href="/membership" variant="primary" className="w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_rgba(32,109,254,0.3)]">
                                Get Pro Access
                            </Button>
                        </div>
                    </Card>

                    {/* Annual Plan */}
                    <Card variant="default" className="relative p-10 flex flex-col items-center text-center border-white/10 bg-gray-950/40 hover:border-brand-500/30 transition-all duration-700 group">
                        <div className="mb-8">
                            <h3 className="text-sm font-black text-brand-400 uppercase tracking-[0.3em] mb-4">Annual</h3>
                            <div className="flex items-baseline gap-1 justify-center">
                                <span className="text-6xl font-black text-white">$600</span>
                                <span className="text-gray-500 font-bold">/ year</span>
                            </div>
                            <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mt-2">save $120 vs monthly Pro</p>
                        </div>

                        <div className="w-full mb-6 py-3 border-y border-white/5 text-[10px] font-black uppercase tracking-widest text-white">
                            Everything in Pro, plus:
                        </div>

                        <ul className="space-y-4 mb-10 w-full">
                            {[
                                "Save $120 per year",
                                "Billed once annually",
                                "Lock in current price",
                                "Best value for committed traders",
                                "Premium Membership"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center justify-center gap-3 text-xs text-gray-300">
                                    <Check className="w-4 h-4 text-brand-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto w-full">
                            <Button href="/membership" variant="secondary" className="w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest group-hover:bg-brand-500 group-hover:text-white transition-all">
                                Get Annual Plan
                            </Button>
                        </div>
                    </Card>
                </div>

                <p className="text-center text-gray-500 text-[11px] leading-relaxed max-w-2xl mx-auto mt-16 italic">
                    All plans include full Premium Membership with flexible membership options. We prioritize value and transparency in our billing as part of our service promise. 7-day satisfaction guarantee on initial term.
                </p>
            </div>
        </StandardSection>
    )
}

export default PricingCardsSection;
