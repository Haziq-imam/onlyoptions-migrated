import { FiSmartphone, FiBell, FiList, FiClock, FiArrowRight } from 'react-icons/fi';
import { MdSignalCellularAlt } from 'react-icons/md';
import AppStoreButtons from '../../ui/AppStoreButtons/AppStoreButtons';
import StandardSection from '../../ui/Layout/StandardSection';
import SectionHeader from '../../ui/Layout/SectionHeader';
import dashboardImg from '../../../assets/pages images/home-dashboard.webp';

const appFeatures = [
    { icon: <FiBell className="w-4 h-4 text-brand-500" />, title: 'Instant Push Notifications', desc: 'Signals reach your phone the moment they are sent — no delays, no need to refresh.' },
    { icon: <MdSignalCellularAlt className="w-4 h-4 text-brand-400" />, title: 'Full Signal Detail View', desc: 'Tap any notification to see ticker, type, strike, expiry, entry, target, stop, and rationale.' },
    { icon: <FiList className="w-4 h-4 text-brand-400" />, title: 'Live Position Tracker', desc: 'See all currently open signals and their status in one place.' },
    { icon: <FiClock className="w-4 h-4 text-brand-400" />, title: 'Closed Trade History', desc: 'Browse every past signal result with outcome and percentage return.' },
    { icon: <FiArrowRight className="w-4 h-4 text-brand-400" />, title: 'Exit Alert Notifications', desc: 'Immediate push notification when we close any position.' },
    { icon: <FiSmartphone className="w-4 h-4 text-brand-400" />, title: 'Available on iOS & Android', desc: 'Works on iPhone, iPad, and all Android devices.' },
];

const AppSection = () => (
    <StandardSection className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            <div className="space-y-7">
                <SectionHeader
                    label="Mobile App"
                    title={<>The OnlyOptions <span className="text-brand-500">App</span></>}
                    description="Our iOS and Android app is the primary way members receive signals. Every feature of the service is accessible directly inside the app."
                />

                <div className="space-y-4">
                    {appFeatures.map((f, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 mt-0.5">{f.icon}</div>
                            <div>
                                <p className="text-white font-black text-sm">{f.title}</p>
                                <p className="text-gray-500 text-sm">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-4">
                    <AppStoreButtons />
                </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-x-0 inset-y-0 bg-brand-500/5 blur-[80px] rounded-3xl opacity-40 pointer-events-none" />
                <div className="relative max-w-sm group">
                    <img
                        src={dashboardImg}
                        alt="OnlyOptions app performance dashboard"
                        className="w-full h-auto max-h-[480px] object-contain transition-transform duration-1000 ease-out group-hover:scale-105 drop-shadow-2xl"
                    />
                </div>
                <div className="absolute -top-3 -right-3 bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-1">
                    Live Dashboard
                </div>
            </div>
        </div>
    </StandardSection>
);

export default AppSection;
