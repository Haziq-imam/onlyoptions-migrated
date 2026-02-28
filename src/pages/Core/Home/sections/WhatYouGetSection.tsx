import { FiTrendingUp, FiDatabase, FiFileText, FiLogOut, FiBook, FiSmartphone } from 'react-icons/fi';
import mockupImg from '../../../../assets/pages images/Modern Lotto and Stocks App-3.png';

import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';


const features = [
    { icon: <FiTrendingUp className="w-4 h-4 text-brand-400" />, title: '2–4 Options Signals Per Day', desc: 'Live alerts covering SPY, QQQ, NVDA, AAPL, and more high-liquidity tickers.' },
    { icon: <FiSmartphone className="w-4 h-4 text-brand-400" />, title: 'iOS & Android App Access', desc: 'Real-time push notifications the moment each signal is sent.' },
    { icon: <FiDatabase className="w-4 h-4 text-brand-400" />, title: 'Performance Dashboard', desc: 'Every closed signal logged with transparency — wins and losses both published.' },
    { icon: <FiFileText className="w-4 h-4 text-brand-400" />, title: 'Complete Signal Format', desc: 'Includes: ticker, strike, expiry, entry range, target, stop-loss, and rationale.' },
    { icon: <FiLogOut className="w-4 h-4 text-brand-400" />, title: 'Exit Alerts', desc: 'Instructional alerts for every position exit, ensuring you never miss a close.' },
    { icon: <FiBook className="w-4 h-4 text-brand-400" />, title: 'Education Library', desc: 'Guides covering fundamentals, risk management, and strategy breakdowns.' },
];

const WhatYouGetSection = () => (
    <StandardSection variant="institutional" dotGrid divider="bottom" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image */}
            <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-20 bg-brand-500/5 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                    src={mockupImg}
                    alt="OnlyOptions Mobile Experience"
                    className="relative w-full h-auto max-h-[550px] object-contain opacity-95 transition-all duration-1000 group-hover:scale-[1.02] drop-shadow-[0_0_50px_rgba(32,109,254,0.15)]"
                />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-12">
                <SectionHeader
                    label="The Package"
                    title={<>What You Get With <br /> <span className="text-brand-500">OnlyOptions</span></>}
                    description="Every plan includes the institutional-grade tools and real-time information you need to trade options signals with a professional edge."
                    align="left"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    {features.map((f, i) => (
                        <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all group">
                            <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                                {f.icon}
                            </div>
                            <div>
                                <h4 className="font-black text-white text-xs mb-2 uppercase tracking-tight">{f.title}</h4>
                                <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </StandardSection>
);

export default WhatYouGetSection;
