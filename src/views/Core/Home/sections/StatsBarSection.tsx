import StandardSection from '../../../../components/ui/Layout/StandardSection';

const stats = [
    { value: '70.3%', label: 'Verified Win Rate' },
    { value: '1,847', label: 'Signals Published' },
    { value: '$847K+', label: 'Member Profits Reported' },
    { value: '1,247+', label: 'Active Subscribers' },
];

const StatsBarSection = () => (
    <StandardSection variant="transparent" spacing="md" divider="both" className="bg-black/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/5 to-transparent skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-x divide-white/5">
            {stats.map((s, i) => (
                <div key={i} className="px-4 group">
                    <div className="text-4xl md:text-6xl font-black text-brand-500 mb-2 tracking-tighter drop-shadow-[0_0_20px_rgba(32,109,254,0.3)] group-hover:scale-105 transition-transform duration-500">{s.value}</div>
                    <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">{s.label}</div>
                </div>
            ))}
        </div>
        <div className="mt-16 text-center text-[10px] text-gray-600 max-w-4xl mx-auto leading-relaxed border-t border-white/[0.03] pt-10">
            Win rate based on 1,847 signals from January 2023 through February 2026. <br />
            <a href="/performance" className="text-brand-500/60 hover:text-brand-500 underline decoration-brand-500/20 underline-offset-4 font-bold">See Performance Dashboard for complete trade-by-trade history.</a>
        </div>
    </StandardSection>
);

export default StatsBarSection;
