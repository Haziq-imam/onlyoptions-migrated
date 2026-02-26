import { FiSmartphone, FiBell, FiList, FiClock, FiArrowRight } from 'react-icons/fi';
import { MdSignalCellularAlt } from 'react-icons/md';
import AppStoreButtons from '../../ui/AppStoreButtons/AppStoreButtons';
import dashboardImg from '../../../assets/pages images/home-dashboard.webp';

const appFeatures = [
    { icon: <FiBell className="w-4 h-4 text-[rgb(32,109,254)]" />, title: 'Instant Push Notifications', desc: 'Signals reach your phone the moment they are sent — no delays, no need to refresh.' },
    { icon: <MdSignalCellularAlt className="w-4 h-4 text-[rgb(32,109,254)]" />, title: 'Full Signal Detail View', desc: 'Tap any notification to see ticker, type, strike, expiry, entry, target, stop, and rationale.' },
    { icon: <FiList className="w-4 h-4 text-[rgb(32,109,254)]" />, title: 'Live Position Tracker', desc: 'See all currently open signals and their status in one place.' },
    { icon: <FiClock className="w-4 h-4 text-[rgb(32,109,254)]" />, title: 'Closed Trade History', desc: 'Browse every past signal result with outcome and percentage return.' },
    { icon: <FiArrowRight className="w-4 h-4 text-[rgb(32,109,254)]" />, title: 'Exit Alert Notifications', desc: 'Immediate push notification when we close any position.' },
    { icon: <FiSmartphone className="w-4 h-4 text-[rgb(32,109,254)]" />, title: 'Available on iOS & Android', desc: 'Works on iPhone, iPad, and all Android devices.' },
];

const AppSection = () => (
    <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-7">
                    <p className="text-[rgb(32,109,254)] text-[10px] font-black uppercase tracking-[0.3em]">Mobile App</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">The OnlyOptions <span className="text-[rgb(32,109,254)]">App</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed">Our iOS and Android app is the primary way members receive signals. Every feature of the service is accessible directly inside the app.</p>

                    <div className="space-y-4">
                        {appFeatures.map((f, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-[rgb(32,109,254)]/10 flex items-center justify-center shrink-0 mt-0.5">{f.icon}</div>
                                <div>
                                    <p className="text-white font-black text-sm">{f.title}</p>
                                    <p className="text-gray-500 text-sm">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <AppStoreButtons />
                </div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-[rgb(32,109,254)]/10 blur-[80px] rounded-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
                    <div className="relative rounded-3xl overflow-hidden border border-[rgb(32,109,254)]/15 shadow-[0_30px_80px_-20px_rgba(32,109,254,0.25)] transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:shadow-[0_40px_100px_-20px_rgba(32,109,254,0.4)]">
                        <img
                            src={dashboardImg}
                            alt="OnlyOptions app performance dashboard"
                            className="w-full object-cover object-top max-h-[480px] transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-[rgb(32,109,254)] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-1">
                        Live Dashboard
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AppSection;
