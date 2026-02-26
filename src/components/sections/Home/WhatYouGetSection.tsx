import { FiTrendingUp, FiDatabase, FiFileText, FiLogOut, FiBook, FiMessageSquare, FiHeadphones } from 'react-icons/fi';

const features = [
    { icon: <FiTrendingUp className="w-5 h-5 text-[rgb(32,109,254)]" />, title: '2–4 Options Signals Per Day', desc: 'Live alerts covering SPY, QQQ, NVDA, AAPL, TSLA, MSFT, AMZN, GOOGL, META, and other high-liquidity tickers. Every signal is a fully specified options trade.' },
    { icon: <FiSmartphone className="w-5 h-5 text-[rgb(32,109,254)]" />, title: 'iOS & Android App Access', desc: 'Real-time push notifications the moment each signal is sent. View open positions, closed trade history, and analyst notes directly inside the app.' },
    { icon: <FiDatabase className="w-5 h-5 text-[rgb(32,109,254)]" />, title: 'Performance Dashboard Access', desc: 'Every closed signal is logged with the date, ticker, entry, exit, and percentage return. Wins and losses both published — full transparency, no selective reporting.' },
    { icon: <FiFileText className="w-5 h-5 text-[rgb(32,109,254)]" />, title: 'Complete Signal Format', desc: 'Each signal includes: ticker, call or put, strike price, expiration date, entry price range, profit target, stop-loss level, and written rationale.' },
    { icon: <FiLogOut className="w-5 h-5 text-[rgb(32,109,254)]" />, title: 'Exit Alerts', desc: 'We send a notification every time we close a position. You always know when and why a trade is being exited — whether at target, stop-loss, or early.' },
    { icon: <FiBook className="w-5 h-5 text-[rgb(32,109,254)]" />, title: 'Education Library', desc: 'Guides covering options fundamentals, risk management, position sizing, how to read signals, and strategy breakdowns. Inside the app and on the website.' },
    { icon: <FiMessageSquare className="w-5 h-5 text-[rgb(32,109,254)]" />, title: 'SMS Signals (Pro Plan)', desc: 'Pro subscribers receive every signal by text message in addition to push notification. Ideal for traders who cannot always check the app during market hours.' },
    { icon: <FiHeadphones className="w-5 h-5 text-[rgb(32,109,254)]" />, title: 'Priority Support (Pro Plan)', desc: 'Pro plan members receive email support responses within 1 hour during market hours (9 AM – 4:30 PM ET, Monday–Friday).' },
];

import { FiSmartphone } from 'react-icons/fi';

const WhatYouGetSection = () => (
    <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16">
                <p className="text-[rgb(32,109,254)] text-[10px] font-black uppercase tracking-[0.3em] mb-4">What's Included</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">What You Get With <span className="text-[rgb(32,109,254)]">OnlyOptions</span></h2>
                <p className="text-gray-400 text-lg max-w-2xl">Every plan includes the tools and information you need to trade options signals confidently.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-5 p-7 rounded-2xl bg-white/[0.02] border border-white/6 hover:border-[rgb(32,109,254)]/25 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-[rgb(32,109,254)]/10 flex items-center justify-center shrink-0 group-hover:bg-[rgb(32,109,254)]/20 transition-colors">
                            {f.icon}
                        </div>
                        <div>
                            <h4 className="font-black text-white text-sm mb-1.5">{f.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WhatYouGetSection;
