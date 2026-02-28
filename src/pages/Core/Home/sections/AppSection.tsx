import { FiSmartphone, FiBell, FiList, FiClock, FiArrowRight } from 'react-icons/fi';
import { MdSignalCellularAlt } from 'react-icons/md';
import AppStoreButtons from '../../../../components/ui/AppStoreButtons/AppStoreButtons';
import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import dashboardImg from '../../../../assets/pages images/home-dashboard.webp';

const appFeatures = [
    { icon: <FiBell className="w-4 h-4 text-brand-500" />, title: 'Instant Push Notifications', desc: 'Signals reach your phone the moment they are sent — no delays, no need to refresh.' },
    { icon: <MdSignalCellularAlt className="w-4 h-4 text-brand-400" />, title: 'Full Signal Detail View', desc: 'Tap any notification to see ticker, type, strike, expiry, entry, target, stop, and rationale.' },
    { icon: <FiList className="w-4 h-4 text-brand-400" />, title: 'Live Position Tracker', desc: 'See all currently open signals and their status in one place.' },
    { icon: <FiClock className="w-4 h-4 text-brand-400" />, title: 'Closed Trade History', desc: 'Browse every past signal result with outcome and percentage return.' },
    { icon: <FiArrowRight className="w-4 h-4 text-brand-400" />, title: 'Exit Alert Notifications', desc: 'Immediate push notification when we close any position.' },
    { icon: <FiSmartphone className="w-4 h-4 text-brand-400" />, title: 'Available on iOS & Android', desc: 'Works on iPhone, iPad, and all Android devices.' },
];

const AppSection = () => (
    <StandardSection variant="institutional" dotGrid spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image */}
            <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-20 bg-brand-500/5 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                    src={dashboardImg}
                    alt="OnlyOptions app performance dashboard"
                    className="relative w-full h-auto max-h-[500px] object-contain transition-all duration-1000 ease-out group-hover:scale-[1.02] drop-shadow-[0_0_50px_rgba(32,109,254,0.15)]"
                />
                <div className="absolute -top-6 -right-6 bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3">
                    Live Dashboard
                </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-12">
                <SectionHeader
                    label="Mobile App"
                    title={<>The OnlyOptions <br /> <span className="text-brand-500">App</span></>}
                    description="Our iOS and Android app is the primary way members receive signals. Every feature of the service is accessible directly inside the app."
                    align="left"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    {appFeatures.map((f, i) => (
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

                <div className="pt-6">
                    <AppStoreButtons />
                </div>
            </div>
        </div>
    </StandardSection>
);

export default AppSection;
