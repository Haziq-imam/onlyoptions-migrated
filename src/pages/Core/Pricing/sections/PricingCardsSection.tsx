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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                    {/* Basic Plan */}
                    <Card variant="default" className="relative p-10 flex flex-col items-center text-center border-white/10 bg-gray-950/40 hover:border-brand-500/30 transition-all duration-700 group">
                        <div className="mb-8">
                            <h3 className="text-sm font-black text-brand-400 uppercase tracking-[0.3em] mb-4">Basic</h3>
                            <div className="flex items-baseline gap-1 justify-center whitespace-nowrap overflow-hidden">
                                <span className="text-5xl sm:text-6xl font-black text-white">$60</span>
                                <span className="text-gray-500 font-bold text-sm">/ month</span>
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
                            <Button
                                href="/membership"
                                variant="secondary"
                                className="w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest group-hover:bg-brand-500 group-hover:text-white transition-all"
                            >
                                Get Access
                            </Button>
                        </div>
                    </Card>

                    {/* Annual Plan */}
                    <Card variant="institutional" className="relative p-10 flex flex-col items-center text-center border-brand-500/40 bg-gray-900/60 shadow-[0_0_80px_rgba(32,109,254,0.15)] z-10 group rounded-[2.5rem]">
                        <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-bl-[2rem] shadow-xl">
                            Best Value
                        </div>

                        <div className="mb-8">
                            <h3 className="text-sm font-black text-brand-400 uppercase tracking-[0.3em] mb-4">Annual</h3>
                            <div className="flex items-baseline gap-1 justify-center whitespace-nowrap overflow-hidden">
                                <span className="text-5xl sm:text-6xl font-black text-white">$499.99</span>
                                <span className="text-gray-500 font-bold text-sm">/ year</span>
                            </div>
                            <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mt-2">save over $220 vs monthly</p>
                        </div>

                        <ul className="space-y-4 mb-10 w-full">
                            {[
                                "Billed once annually",
                                "SMS text delivery",
                                "1hr priority email focus",
                                "Weekly live Q&A access",
                                "Lock in current price",
                                "Premium Membership"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center justify-center gap-3 text-xs text-white font-bold">
                                    <Check className="w-4 h-4 text-brand-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto w-full">
                            <Button
                                href="/membership"
                                variant="primary"
                                className="w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_rgba(32,109,254,0.3)]"
                            >
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
