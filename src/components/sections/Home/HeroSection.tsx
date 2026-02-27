import { FiShield, FiZap, FiSmartphone } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';
import Button from '../../ui/Button/Button';
import AppStoreButtons from '../../ui/AppStoreButtons/AppStoreButtons';
import heroImg from '../../../assets/pages images/home-hero.webp';
import StandardSection from '../../ui/Layout/StandardSection';
import SectionHeader from '../../ui/Layout/SectionHeader';

const HeroSection = () => (
    <StandardSection className="relative min-h-[92vh] flex items-center pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="space-y-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[10px] font-black uppercase tracking-widest">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                    </span>
                    Live Signals Active Now
                </div>

                <SectionHeader
                    title={<>Real-Time Options <br className="hidden md:block" /> Trading Signals — <br className="hidden md:block" /> <span className="text-brand-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">70.3% Verified</span> <br className="hidden md:block" /> Win Rate</>}
                    description="OnlyOptions sends 2–4 expert options signals every market day — delivered instantly to your iPhone or Android. Every alert includes the exact ticker, strike, expiry, entry range, targets, stop-loss, and analyst rationale."
                    className="mb-8"
                />

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400 mb-8">
                    {[
                        { icon: <HiCheckCircle className="w-4 h-4 text-brand-500" />, text: '70.3% Win Rate — 1,847 signals' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-brand-500" />, text: '2–4 Signals Daily' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-brand-500" />, text: 'iOS & Android App' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-brand-500" />, text: '$60/month' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5">{item.icon}<span>{item.text}</span></div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 pt-2 mb-8">
                    <Button href="/free-trial" size="lg" className="w-full sm:w-auto px-8 h-auto min-h-[3.5rem] py-4 rounded-2xl font-black text-base shadow-[0_0_40px_rgba(32,109,254,0.3)] whitespace-normal sm:whitespace-nowrap">
                        Start Free 7-Day Trial — No Credit Card
                    </Button>
                </div>
                <AppStoreButtons variant="glass" />

                <div className="flex flex-wrap gap-6 pt-2 border-t border-white/5 mt-8">
                    {[
                        { icon: <FiShield className="w-4 h-4 text-brand-400" />, text: 'Verified 70.3% Win Rate' },
                        { icon: <FiZap className="w-4 h-4 text-brand-400" />, text: 'Instant Push Alerts' },
                        { icon: <FiSmartphone className="w-4 h-4 text-brand-400" />, text: 'iOS & Android' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 opacity-60">
                            {item.icon}
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{item.text}</span>
                        </div>
                    ))}
                </div>
                <p className="text-gray-400 text-xs">Trusted by 1,247+ active options traders. Cancel anytime.</p>
            </div>

            {/* Right: Image */}
            <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-x-0 inset-y-0 bg-brand-500/5 blur-[80px] rounded-3xl opacity-40 pointer-events-none" />
                <div className="relative max-w-lg">
                    <img src={heroImg} alt="OnlyOptions — options trading signals dashboard" className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl" />
                </div>
                {/* Floating signal card */}
                <div className="absolute -bottom-8 -left-6 hidden lg:block">
                    <div className="bg-black/90 backdrop-blur-xl border border-brand-500/20 rounded-2xl p-4 shadow-2xl w-52">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-green-400">Signal Live</p>
                        </div>
                        <p className="text-white font-black text-lg leading-none">SPY $582C</p>
                        <p className="text-gray-500 text-[10px] font-bold mt-1">Feb 21 · Entry $2.20–$2.50</p>
                        <div className="mt-3 pt-2 border-t border-white/5 flex justify-between">
                            <span className="text-green-400 font-black text-xs">+73%</span>
                            <span className="text-[10px] text-gray-500 font-bold uppercase">Verified</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StandardSection>
);

export default HeroSection;
