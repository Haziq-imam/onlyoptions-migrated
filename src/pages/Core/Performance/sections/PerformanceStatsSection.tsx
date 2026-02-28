import { Card } from '../../../../components/ui/Card/Card';
import StandardSection from '../../../../components/ui/Layout/StandardSection';
import { ArrowUpRight, BarChart3, TrendingUp, History } from 'lucide-react';

const PerformanceStatsSection = () => {
    const stats = [
        { label: "Overall Win Rate", value: "74.8%", icon: <TrendingUp className="w-5 h-5" />, color: "text-green-400" },
        { label: "Avg. Return / Trade", value: "+32.4%", icon: <ArrowUpRight className="w-5 h-5" />, color: "text-brand-400" },
        { label: "Total Trades (Prev 30d)", value: "114", icon: <History className="w-5 h-5" />, color: "text-blue-400" },
        { label: "Monthly Profit", value: "$4,120", icon: <BarChart3 className="w-5 h-5" />, color: "text-teal-400" }
    ];

    return (
        <StandardSection variant="institutional" dotGrid spacing="md" className="-mt-16 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} variant="glass" className="flex items-center gap-5 p-6 border-white/5">
                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                            <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </StandardSection>
    );
};

export default PerformanceStatsSection;
