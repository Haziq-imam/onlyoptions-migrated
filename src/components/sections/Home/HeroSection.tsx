import { FiShield, FiZap, FiSmartphone } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';
import Button from '../../ui/Button/Button';
import AppStoreButtons from '../../ui/AppStoreButtons/AppStoreButtons';
import heroImg from '../../../assets/pages images/home-hero.webp';

const HeroSection = () => (
    <section className="relative min-h-[92vh] flex items-center px-6 md:px-12 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(32,109,254,0.18),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left */}
            <div className="space-y-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgb(32,109,254)]/10 border border-[rgb(32,109,254)]/25 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(32,109,254)]" />
                    </span>
                    Live Signals Active Now
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.93] text-white">
                    Real-Time Options <br />
                    Trading Signals — <br />
                    <span className="text-[rgb(32,109,254)]">70.3% Verified</span> <br />
                    Win Rate
                </h1>

                <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
                    OnlyOptions sends 2–4 expert options signals every market day — delivered instantly to your iPhone or Android. Every alert includes the exact ticker, strike, expiry, entry range, targets, stop-loss, and analyst rationale.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400">
                    {[
                        { icon: <HiCheckCircle className="w-4 h-4 text-[rgb(32,109,254)]" />, text: '70.3% Win Rate — 1,847 signals' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-[rgb(32,109,254)]" />, text: '2–4 Signals Daily' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-[rgb(32,109,254)]" />, text: 'iOS & Android App' },
                        { icon: <HiCheckCircle className="w-4 h-4 text-[rgb(32,109,254)]" />, text: '$60/month' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5">{item.icon}<span>{item.text}</span></div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                    <Button href="/free-trial" size="lg" className="w-full sm:w-auto px-8 h-14 rounded-2xl font-black text-base shadow-[0_0_40px_rgba(32,109,254,0.3)]">
                        Start Free 7-Day Trial — No Credit Card
                    </Button>
                </div>
                <AppStoreButtons variant="glass" />

                <div className="flex flex-wrap gap-6 pt-2 border-t border-white/5">
                    {[
                        { icon: <FiShield className="w-4 h-4 text-blue-400" />, text: 'Verified 70.3% Win Rate' },
                        { icon: <FiZap className="w-4 h-4 text-blue-400" />, text: 'Instant Push Alerts' },
                        { icon: <FiSmartphone className="w-4 h-4 text-blue-400" />, text: 'iOS & Android' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 opacity-60">
                            {item.icon}
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{item.text}</span>
                        </div>
                    ))}
                </div>
                <p className="text-gray-600 text-xs">Trusted by 1,247+ active options traders. Cancel anytime.</p>
            </div>

            {/* Right: Image */}
            <div className="relative">
                <div className="absolute inset-0 bg-[rgb(32,109,254)]/5 blur-[80px] rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-[0_40px_100px_-20px_rgba(32,109,254,0.3)]">
                    <img src={heroImg} alt="OnlyOptions — options trading signals dashboard" className="w-full h-auto object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
                </div>
                {/* Floating signal card */}
                <div className="absolute -bottom-8 -left-6 hidden lg:block">
                    <div className="bg-black/90 backdrop-blur-xl border border-[rgb(32,109,254)]/20 rounded-2xl p-4 shadow-2xl w-52">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-green-400">Signal Live</p>
                        </div>
                        <p className="text-white font-black text-lg leading-none">SPY $582C</p>
                        <p className="text-gray-500 text-[10px] font-bold mt-1">Feb 21 · Entry $2.20–$2.50</p>
                        <div className="mt-3 pt-2 border-t border-white/5 flex justify-between">
                            <span className="text-green-400 font-black text-xs">+73%</span>
                            <span className="text-[10px] text-gray-600 font-bold uppercase">Verified</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
