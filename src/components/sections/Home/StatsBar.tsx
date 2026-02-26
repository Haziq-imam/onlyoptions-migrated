const StatsBar = () => {
    const stats = [
        { label: "Verified Win Rate", value: "70.3%" },
        { label: "Signals Published", value: "1,847" },
        { label: "Member Profits", value: "$847K+" },
        { label: "Active Members", value: "1,247+" }
    ];

    return (
        <section className="py-16 px-6 md:px-12 bg-white/[0.01] border-y border-white/5 noise-bg relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                <div className="space-y-1 max-w-xs">
                    <p className="text-white font-black text-xl tracking-tight">Real-Time Performance</p>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-relaxed">Live updates from January 2023 through February 2026.</p>
                </div>

                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full lg:w-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-1">
                            <p className="text-3xl md:text-4xl font-black text-brand-500 tracking-tighter">{stat.value}</p>
                            <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
