import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Button from '../../../../components/ui/Button/Button';
import { Card } from '../../../../components/ui/Card/Card';
import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const basicFeatures = [
    '2–4 daily options signals',
    'iOS & Android app access',
    'Push notification delivery',
    'Performance dashboard',
    'Education library',
    'Email support (24hr response)',
    'Full Premium Membership Access',
];

const proFeatures = [
    'SMS text message delivery',
    'Priority support (1hr response)',
    'Weekly live Q&A sessions',
    'Advanced analyst notes',
    'Full Premium Membership Access',
];

const PricingHomeSection = () => (
    <StandardSection variant="default" divider="top" spacing="lg">
        <SectionHeader
            label="Pricing"
            title={<>Simple, <span className="text-brand-500">Transparent</span> Pricing</>}
            description="Clear pricing models. No hidden fees, no long-term contracts, and flexible membership management."
            align="center"
            className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Basic */}
            <Card variant="glass" className="p-10 border-white/5 hover:border-brand-500/20 transition-all group">
                <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Basic Plan</h4>
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-6xl font-black text-white">$60</span>
                    <span className="text-gray-500 font-black text-[10px] uppercase tracking-widest">/ Month</span>
                </div>
                <ul className="space-y-4 mb-12">
                    {basicFeatures.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                            <FiCheck className="w-4 h-4 text-brand-500 shrink-0" /> {f}
                        </li>
                    ))}
                </ul>
                <Button href="/membership" variant="outline" className="w-full h-auto min-h-[3.5rem] py-4 rounded-2xl font-black uppercase tracking-widest border-brand-500/30 hover:bg-brand-500/10 text-xs">
                    Get Access
                </Button>
            </Card>

            {/* Pro */}
            <Card variant="institutional" className="p-10 border-brand-500/30 shadow-[0_0_60px_rgba(32,109,254,0.1)] relative group">
                <div className="absolute top-0 right-0 px-6 py-2.5 bg-brand-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-bl-2xl">
                    Most Popular
                </div>
                <h4 className="text-xl font-black text-brand-500 mb-2 uppercase tracking-tight">Pro Plan</h4>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-6xl font-black text-white">$99</span>
                    <span className="text-gray-500 font-black text-[10px] uppercase tracking-widest">/ Month</span>
                </div>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Institutional Features Included:</p>
                <ul className="space-y-4 mb-12">
                    {proFeatures.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-100 text-sm font-bold">
                            <FiCheck className="w-4 h-4 text-brand-500 shrink-0" /> {f}
                        </li>
                    ))}
                </ul>
                <Button href="/membership" variant="primary" className="w-full h-auto min-h-[3.5rem] py-4 rounded-2xl font-black uppercase tracking-widest shadow-[0_0_40px_rgba(32,109,254,0.4)] text-xs">
                    Get Pro Access
                </Button>
            </Card>
        </div>

        <div className="text-center mt-16 space-y-4">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Annual plan: $600/year — save $120. Same Pro features, billed once per year.</p>
            <a href="/pricing" className="inline-flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all group/link">
                See full plan comparison <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </a>
        </div>
    </StandardSection>
);

export default PricingHomeSection;
