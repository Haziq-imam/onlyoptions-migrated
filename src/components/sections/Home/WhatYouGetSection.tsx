import { FiTrendingUp, FiDatabase, FiFileText, FiLogOut, FiBook, FiSmartphone } from 'react-icons/fi';
import mockupImg from '../../../assets/pages images/Modern Lotto and Stocks App-3.png';
import StandardSection from '../../ui/Layout/StandardSection';
import SectionHeader from '../../ui/Layout/SectionHeader';

const features = [
    { icon: <FiTrendingUp className="w-4 h-4 text-brand-400" />, title: '2–4 Options Signals Per Day', desc: 'Live alerts covering SPY, QQQ, NVDA, AAPL, and more high-liquidity tickers.' },
    { icon: <FiSmartphone className="w-4 h-4 text-brand-400" />, title: 'iOS & Android App Access', desc: 'Real-time push notifications the moment each signal is sent.' },
    { icon: <FiDatabase className="w-4 h-4 text-brand-400" />, title: 'Performance Dashboard', desc: 'Every closed signal logged with transparency — wins and losses both published.' },
    { icon: <FiFileText className="w-4 h-4 text-brand-400" />, title: 'Complete Signal Format', desc: 'Includes: ticker, strike, expiry, entry range, target, stop-loss, and rationale.' },
    { icon: <FiLogOut className="w-4 h-4 text-brand-400" />, title: 'Exit Alerts', desc: 'Instructional alerts for every position exit, ensuring you never miss a close.' },
    { icon: <FiBook className="w-4 h-4 text-brand-400" />, title: 'Education Library', desc: 'Guides covering fundamentals, risk management, and strategy breakdowns.' },
];

const WhatYouGetSection = () => (
    <StandardSection className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
                <SectionHeader
                    label="The Package"
                    title={<>What You Get With <span className="text-brand-500">OnlyOptions</span></>}
                    description="Every plan includes the institutional-grade tools and real-time information you need to trade options signals with a professional edge."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 transition-all group">
                            <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                                {f.icon}
                            </div>
                            <div>
                                <h4 className="font-black text-white text-xs mb-1.5 uppercase tracking-tight">{f.title}</h4>
                                <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-0 bg-brand-500/5 blur-[80px] rounded-3xl opacity-30" />
                <div className="relative max-w-sm group">
                    <img
                        src={mockupImg}
                        alt="OnlyOptions Mobile Experience"
                        className="w-full      h-auto max-h-[550px] object-contain opacity-90 transition-all duration-700 group-hover:scale-105 drop-shadow-2xl"
                    />
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3">

                </div>
            </div>
        </div>
    </StandardSection>
);

export default WhatYouGetSection;
