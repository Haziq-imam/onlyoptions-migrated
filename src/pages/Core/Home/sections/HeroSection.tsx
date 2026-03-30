import { FiShield, FiZap, FiSmartphone } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';
import Button from '../../../../components/ui/Button/Button';
import AppStoreButtons from '../../../../components/ui/AppStoreButtons/AppStoreButtons';
import heroImg from '../../../../assets/pages images/home-hero.webp';
import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const HeroSection = () => (
    <StandardSection spacing="xl" className="min-h-[92vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[10px] font-black uppercase tracking-widest">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                    </span>
                    Live Signals Active Now
                </div>

                <SectionHeader
                    title={<>Real-Time Options <br /> Trading Signals — <br /> <span className="text-brand-500 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">70.3% Verified</span> <br /> Win Rate</>}
                    description="OnlyOptions sends 2–4 expert options signals every market day — delivered instantly to your iPhone or Android. Every alert includes the exact ticker, strike, expiry, entry range, targets, stop-loss, and analyst rationale."
                    align="left"
                    className="mb-8"
                />

                <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-400 mb-10">
                    {[
                        { icon: <HiCheckCircle className="w-4 h-4 text-brand-500" />, text: '70.3% Win Rate' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-brand-500" />, text: '2–4 Signals Daily' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-brand-500" />, text: 'iOS & Android App' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-brand-500" />, text: '$60/month' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">{item.icon}<span>{item.text}</span></div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
                    <Button 
                        onClick={() => window.dispatchEvent(new CustomEvent('open-app-modal'))}
                        size="lg" 
                        className="w-full sm:w-auto px-10 h-16 rounded-2xl font-black text-lg shadow-[0_0_50px_rgba(32,109,254,0.25)] hover:shadow-[0_0_60px_rgba(32,109,254,0.4)] transition-all"
                    >
                        Get Access Now
                    </Button>
                    <AppStoreButtons variant="glass" />
                </div>

                <div className="flex flex-wrap gap-8 pt-10 border-t border-white/5">
                    {[
                        { icon: <FiShield className="w-5 h-5 text-brand-400" />, text: 'Verified 70.3% Win Rate' },
                        { icon: <FiZap className="w-5 h-5 text-brand-400" />, text: 'Instant Push Alerts' },
                        { icon: <FiSmartphone className="w-5 h-5 text-brand-400" />, text: 'iOS & Android' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                            {item.icon}
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">{item.text}</span>
                        </div>
                    ))}
                </div>
                <p className="text-gray-500 text-[10px] font-medium">Trusted by 1,247+ active options traders. Flexible Membership. Satisfaction Guaranteed.</p>
            </div>

            {/* Right Image */}
            <div className="relative group lg:ml-auto">
                <div className="absolute -inset-20 bg-brand-500/10 blur-[120px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative">
                    <img
                        src={heroImg}
                        alt="OnlyOptions — options trading signals dashboard"
                        className="relative w-full h-auto max-h-[580px] object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_60px_rgba(32,109,254,0.2)]"
                    />

                    {/* Floating signal card */}
                    <div className="absolute -bottom-10 -left-40 hidden xl:block">
                        <div className="bg-black/90 backdrop-blur-2xl border border-brand-500/20 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-64 text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <p className="text-[10px] font-black uppercase tracking-widest text-green-400">Signal Live</p>
                            </div>
                            <p className="text-white font-black text-2xl leading-none">SPY $582C</p>
                            <p className="text-gray-500 text-[10px] font-bold mt-2">Feb 21 · Entry $2.20–$2.50</p>
                            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                                <span className="text-green-400 font-extrabold text-lg">+73%</span>
                                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md">Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StandardSection>
);

export default HeroSection;
