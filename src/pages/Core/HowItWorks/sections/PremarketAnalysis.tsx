import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const PremarketAnalysis = () => {
    const analysisSteps = [
        {
            time: "6:00 AM",
            title: "Overnight Review",
            description: "Sarah scans global markets, reads overnight news, and flags macro risks. Any signal relying on stable conditions is held if something material changed overnight."
        },
        {
            time: "7:00 AM",
            title: "Institutional Options Flow",
            description: "We scan unusual options activity from the prior session. Large institutional positioning ahead of price moves raises or lowers our confidence rating on candidate setups."
        },
        {
            time: "8:00 AM",
            title: "Volatility Surface Scan",
            description: "Sarah runs our IV-rank algorithm across all watched tickers. We look for IV rank below 30% (cheap options, ideal for buying calls and puts)."
        },
        {
            time: "8:30 AM",
            title: "Technical Chart Review",
            description: "Michael reviews daily, 4-hour, and 15-minute charts for every candidate. We require at least three confirming signals: price at a key level, volume confirmation, and a momentum indicator crossover."
        },
        {
            time: "9:00 AM",
            title: "Pre-Market Signal Approval",
            description: "The team reviews all candidates in 15 minutes. Each must pass volatility, technical, and minimum 2:1 risk-reward filters. Failing any filter means the signal is dropped."
        },
        {
            time: "9:30 AM – 4:00 PM",
            title: "Live Monitoring",
            description: "David monitors all open signals and sends exit alerts, adjustment alerts, and new 0DTE signals throughout the day. During Fed announcements and major data releases, the full team is at their screens."
        }
    ];

    return (
        <div className="space-y-12">
            <SectionHeader
                title="Our Pre-Market Analysis Process (E-E-A-T)"
                description="What our analysts do every morning before sending a single signal. We spend two to four hours before market open running a systematic pre-market checklist before any alert gets sent."
                align="center"
            />

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5" />

                <div className="space-y-12">
                    {analysisSteps.map((step, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Timeline Node */}
                            <div className="absolute left-[39px] md:left-1/2 w-4 h-4 rounded-full bg-brand-500 transform -translate-x-1/2 mt-6 md:mt-8 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10" />

                            {/* Empty space for opposite side */}
                            <div className="hidden md:block w-1/2" />

                            {/* Content Card */}
                            <div className="w-full md:w-1/2 pl-24 md:pl-0">
                                <Card variant="glass" className={`p-8 border-white/5 hover:border-brand-500/30 transition-colors ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                    <span className="text-brand-400 font-black tracking-widest uppercase text-[10px] mb-2 block">{step.time}</span>
                                    <h4 className="text-white font-black text-xl mb-3 tracking-tight">{step.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center pt-8">
                <a href="/about" className="inline-block text-brand-400 font-bold hover:text-brand-300 transition-colors text-sm items-center gap-2 uppercase tracking-widest">
                    Meet the Full Analyst Team →
                </a>
            </div>
        </div>
    );
};

export default PremarketAnalysis;
