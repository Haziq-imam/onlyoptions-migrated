import { MdDownload, MdNotificationsActive, MdSignalCellularAlt, MdPlayArrow, MdNotifications } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';

const steps = [
    { icon: <MdDownload className="w-6 h-6 text-brand-500" />, num: '01', title: 'Create your account', desc: 'Choose a plan and complete signup in under 60 seconds. Satisfaction Guarantee with our Premium Membership.' },
    { icon: <MdDownload className="w-6 h-6 text-brand-500" />, num: '02', title: 'Download the OnlyOptions app', desc: 'Available on the Apple App Store (iOS) and Google Play Store (Android). You will receive a link in your confirmation email.' },
    { icon: <MdNotificationsActive className="w-6 h-6 text-brand-500" />, num: '03', title: 'Enable push notifications', desc: 'Turn on notifications for the app so signals reach you the instant they are sent. Pro plan members can also opt in to SMS delivery.' },
    { icon: <MdSignalCellularAlt className="w-6 h-6 text-brand-500" />, num: '04', title: 'Receive the signal', desc: 'Each alert shows ticker, option type, strike price, expiry, entry range, profit target, stop-loss, and the full analyst rationale. Everything you need is in the notification.' },
    { icon: <MdPlayArrow className="w-6 h-6 text-brand-500" />, num: '05', title: 'Execute in your broker', desc: 'Place a limit order within the entry range specified. Works with any options-approved brokerage at Level 2 or higher.' },
    { icon: <MdNotifications className="w-6 h-6 text-brand-500" />, num: '06', title: 'Receive the exit alert', desc: 'We notify you when we close each position — whether it hits target, stop-loss, or we exit early. You always know when and why.' },
];

const HowItWorksSection = () => (
    <StandardSection variant="default" divider="top" spacing="lg">
        <div className="text-center">
            <SectionHeader
                label="Setup Process"
                title={<>How It <span className="text-brand-500">Works</span></>}
                description="Getting your first signal takes less than five minutes. Here is exactly what happens from the moment you sign up."
                align="center"
                className="mb-20"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {steps.map((step, i) => (
                    <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40 hover:border-brand-500/30 transition-all group relative overflow-hidden shadow-xl">
                        <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.03] group-hover:text-brand-500/[0.07] transition-colors">{step.num}</div>
                        <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors">
                            {step.icon}
                        </div>
                        <h4 className="text-lg font-black text-white mb-3 tracking-tight">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </Card>
                ))}
            </div>

            <div className="mt-20">
                <a href="/how-it-works" className="inline-flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all">
                    See the full signal format and execution guide <FiArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    </StandardSection>
);

export default HowItWorksSection;
