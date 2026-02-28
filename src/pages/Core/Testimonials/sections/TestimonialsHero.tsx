import { Users, Target, CalendarDays, DollarSign } from 'lucide-react';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';

const TestimonialsHero = () => {
    return (
        <div className="space-y-12 pb-16 border-b border-white/5">
            <SectionHeader
                title="Member Testimonials — Real Traders, Real Results"
                description="Below are testimonials from OnlyOptions members across all experience levels — from beginners following their first signals to experienced traders with multi-year track records. Names and locations are real. Member since dates and plan types are verified from subscriber records."
                align="center"
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
                <Card variant="glass" className="p-6 text-center border-white/5 bg-white/[0.02]">
                    <Users className="w-8 h-8 mx-auto mb-4 text-brand-400" />
                    <div className="font-black text-3xl text-white mb-1">1,247+</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Active Subscribers</div>
                </Card>
                <Card variant="glass" className="p-6 text-center border-white/5 bg-white/[0.02]">
                    <Target className="w-8 h-8 mx-auto mb-4 text-green-400" />
                    <div className="font-black text-3xl text-white mb-1">70.3%</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Published Win Rate</div>
                </Card>
                <Card variant="glass" className="p-6 text-center border-white/5 bg-white/[0.02]">
                    <CalendarDays className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                    <div className="font-black text-3xl text-white mb-1">38 <span className="text-xl">mos</span></div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Continuous Operation</div>
                </Card>
                <Card variant="glass" className="p-6 text-center border-white/5 bg-white/[0.02]">
                    <DollarSign className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                    <div className="font-black text-3xl text-white mb-1">$847K+</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Member Profits Reported</div>
                </Card>
            </div>
        </div>
    );
};

export default TestimonialsHero;
