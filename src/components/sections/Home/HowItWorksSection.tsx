import { MdDownload, MdNotificationsActive, MdSignalCellularAlt, MdPlayArrow, MdNotifications } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';

const steps = [
    { icon: <MdDownload className="w-6 h-6 text-[rgb(32,109,254)]" />, num: '01', title: 'Create your account', desc: 'Choose a plan and complete signup in under 60 seconds. No credit card required for the free trial.' },
    { icon: <MdDownload className="w-6 h-6 text-[rgb(32,109,254)]" />, num: '02', title: 'Download the OnlyOptions app', desc: 'Available on the Apple App Store (iOS) and Google Play Store (Android). You will receive a link in your confirmation email.' },
    { icon: <MdNotificationsActive className="w-6 h-6 text-[rgb(32,109,254)]" />, num: '03', title: 'Enable push notifications', desc: 'Turn on notifications for the app so signals reach you the instant they are sent. Pro plan members can also opt in to SMS delivery.' },
    { icon: <MdSignalCellularAlt className="w-6 h-6 text-[rgb(32,109,254)]" />, num: '04', title: 'Receive the signal', desc: 'Each alert shows ticker, option type, strike price, expiry, entry range, profit target, stop-loss, and the full analyst rationale. Everything you need is in the notification.' },
    { icon: <MdPlayArrow className="w-6 h-6 text-[rgb(32,109,254)]" />, num: '05', title: 'Execute in your broker', desc: 'Place a limit order within the entry range specified. Works with any options-approved brokerage at Level 2 or higher.' },
    { icon: <MdNotifications className="w-6 h-6 text-[rgb(32,109,254)]" />, num: '06', title: 'Receive the exit alert', desc: 'We notify you when we close each position — whether it hits target, stop-loss, or we exit early. You always know when and why.' },
];

const HowItWorksSection = () => (
    <section className="py-24 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16">
                <p className="text-[rgb(32,109,254)] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Setup Process</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">How It <span className="text-[rgb(32,109,254)]">Works</span></h2>
                <p className="text-gray-400 text-lg max-w-2xl">Getting your first signal takes less than five minutes. Here is exactly what happens from the moment you sign up.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-black border border-white/6 hover:border-[rgb(32,109,254)]/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-4 right-6 text-6xl font-black text-white/4 group-hover:text-[rgb(32,109,254)]/8 transition-colors">{step.num}</div>
                        <div className="w-12 h-12 rounded-2xl bg-[rgb(32,109,254)]/10 flex items-center justify-center mb-5 group-hover:bg-[rgb(32,109,254)]/20 transition-colors">
                            {step.icon}
                        </div>
                        <h4 className="text-lg font-black text-white mb-3 tracking-tight">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="/how-it-works" className="inline-flex items-center gap-2 text-[rgb(32,109,254)] text-sm font-black uppercase tracking-widest hover:gap-3 transition-all">
                    See the full signal format and execution guide <FiArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    </section>
);

export default HowItWorksSection;
