const stats = [
    { value: '70.3%', label: 'Verified Win Rate' },
    { value: '1,847', label: 'Signals Published' },
    { value: '$847K+', label: 'Member Profits Reported' },
    { value: '1,247+', label: 'Active Subscribers' },
];

const StatsBarSection = () => (
    <section className="py-16 px-6 md:px-12 border-y border-white/5 bg-black/50 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(32,109,254)]/5 to-transparent skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x divide-white/10 [&>div:nth-child(even)]:border-none md:[&>div]:border-r">
                {stats.map((s, i) => (
                    <div key={i} className="px-4">
                        <div className="text-4xl md:text-5xl font-black text-[rgb(32,109,254)] mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(32,109,254,0.3)]">{s.value}</div>
                        <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">{s.label}</div>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center text-[10px] text-gray-500 max-w-4xl mx-auto leading-relaxed">
                Win rate based on 1,847 closed signals from January 2023 through February 2026. Results calculated using mid-prices at signal and exit times. Individual member results will vary. <a href="/performance" className="text-gray-400 hover:text-[rgb(32,109,254)] underline decoration-white/20 underline-offset-4">See Performance Dashboard for complete trade-by-trade history.</a>
            </div>
        </div>
    </section>
);

export default StatsBarSection;
