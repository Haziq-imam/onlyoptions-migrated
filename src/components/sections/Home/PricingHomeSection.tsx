import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Button from '../../ui/Button/Button';
import { Card } from '../../ui/Card/Card';

const basicFeatures = [
    '2–4 daily options signals',
    'iOS & Android app access',
    'Push notification delivery',
    'Performance dashboard',
    'Education library',
    'Email support (24hr response)',
    '7-day free trial (no credit card)',
];

const proFeatures = [
    'SMS text message delivery',
    'Priority support (1hr response)',
    'Weekly live Q&A sessions',
    'Advanced analyst notes',
    '7-day free trial (no credit card)',
];

const PricingHomeSection = () => (
    <section className="py-24 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[rgb(32,109,254)] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Pricing</p>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">Simple, <span className="text-[rgb(32,109,254)]">Transparent</span> Pricing</h2>
                <p className="text-gray-400 text-lg">Two plans. No hidden fees, no long-term contracts, no auto-charge after trial.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Basic */}
                <Card variant="glass" className="p-10 border-white/8 hover:border-[rgb(32,109,254)]/20 transition-all">
                    <h4 className="text-2xl font-black text-white mb-1">Basic</h4>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-6xl font-black text-white">$60</span>
                        <span className="text-gray-500 font-bold">/ MONTH</span>
                    </div>
                    <ul className="space-y-3 mb-10">
                        {basicFeatures.map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                <FiCheck className="w-4 h-4 text-[rgb(32,109,254)] shrink-0" /> {f}
                            </li>
                        ))}
                    </ul>
                    <Button href="/free-trial" variant="outline" className="w-full h-12 rounded-xl font-black uppercase tracking-widest border-[rgb(32,109,254)]/30 hover:border-[rgb(32,109,254)]">
                        Start Free Trial
                    </Button>
                </Card>

                {/* Pro */}
                <Card variant="institutional" className="p-10 ring-1 ring-[rgb(32,109,254)]/40 shadow-[0_0_60px_rgba(32,109,254,0.15)] relative">
                    <div className="absolute top-0 right-0 px-5 py-2 bg-[rgb(32,109,254)] text-white text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                        Most Popular
                    </div>
                    <h4 className="text-2xl font-black text-[rgb(32,109,254)] mb-1">Pro</h4>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-6xl font-black text-white">$99</span>
                        <span className="text-gray-500 font-bold">/ MONTH</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-6">Everything in Basic, plus:</p>
                    <ul className="space-y-3 mb-10">
                        {proFeatures.map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-200 text-sm font-bold">
                                <FiCheck className="w-4 h-4 text-[rgb(32,109,254)] shrink-0" /> {f}
                            </li>
                        ))}
                    </ul>
                    <Button href="/free-trial" className="w-full h-12 rounded-xl font-black uppercase tracking-widest shadow-[0_0_30px_rgba(32,109,254,0.3)]">
                        Start Pro Trial
                    </Button>
                </Card>
            </div>

            <div className="text-center mt-10 space-y-2">
                <p className="text-gray-500 text-sm">Annual plan: $600/year — save $120. Same Pro features, billed once per year.</p>
                <a href="/pricing" className="inline-flex items-center gap-2 text-[rgb(32,109,254)] text-xs font-black uppercase tracking-widest hover:gap-3 transition-all">
                    See full plan comparison <FiArrowRight className="w-3 h-3" />
                </a>
            </div>
        </div>
    </section>
);

export default PricingHomeSection;
