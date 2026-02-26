import { Zap, Bell, Clock, Cpu, ShieldCheck } from 'lucide-react';

const homeFeatures = [
    {
        title: "Proprietary Alpha Signals",
        details: "2–4 signals every market day covering liquid ETFs and Mega-Caps. Every alert is backed by quantitative technical research.",
        icon: <Zap className="w-5 h-5 text-brand-400" />
    },
    {
        title: "Enterprise Notification Engine",
        details: "Instant push notifications via iOS and Android. Zero latency ensures you see the setup the moment our analysts execute.",
        icon: <Bell className="w-5 h-5 text-brand-400" />
    },
    {
        title: "Audit-Grade Transparency",
        details: "Every signal we have ever published is logged. Wins and losses are both audited for the performance dashboard.",
        icon: <Cpu className="w-5 h-5 text-brand-400" />
    },
    {
        title: "Zero Ambiguity Structure",
        details: "Exact ticker, strike, expiry, and entry range. We provide a full trading plan, not just a suggestion.",
        icon: <ShieldCheck className="w-5 h-5 text-brand-400" />
    },
    {
        title: "Dynamic Exit Vigilance",
        details: "We notify you the instant we close a position. You are never left wondering when to take profit or cut loss.",
        icon: <Clock className="w-5 h-5 text-brand-400" />
    }
];

const ValueTable = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Service <span className="text-brand-500">Standards</span></h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Institutional quality execution for the retail options trader. We set the standard for transparency and precision.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        {homeFeatures.map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-gray-950/50 border border-white/5 hover:border-brand-500/30 transition-all institutional-shimmer overflow-hidden">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-black text-white tracking-tight">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.details}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative lg:pt-0 pt-12">
                        <div className="sticky top-40 bg-gray-950 border border-brand-500/20 rounded-[2.5rem] p-12 overflow-hidden noise-bg">
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-500/10 blur-3xl rounded-full"></div>
                            <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">The OnlyOptions <br /> <span className="text-brand-500">Commitment</span></h3>
                            <ul className="space-y-6">
                                {[
                                    { t: "No Automation", d: "Every signal is hand-picked by human analysts." },
                                    { t: "100% Verified", d: "Results are not backtested; they are realized." },
                                    { t: "No Upselling", d: "Single tier access for all institutional research." },
                                    { t: "Real-Time Support", d: "Direct access to our trade desk for active members." }
                                ].map((step, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 border border-brand-500/30 mt-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div>
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-sm uppercase tracking-widest">{step.t}</p>
                                            <p className="text-gray-500 text-xs font-medium mt-1 uppercase tracking-tighter">{step.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12 pt-8 border-t border-white/5">
                                <p className="text-xs text-brand-400 font-black uppercase tracking-[0.2em] italic">Established MMXXIII</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueTable;
