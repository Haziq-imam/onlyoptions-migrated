import { Helmet } from 'react-helmet-async';
import { FiStar, FiZap, FiLayout, FiBell, FiShield, FiSmartphone, FiCheckCircle } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../components/ui/Card/Card';
import Button from '../../../components/ui/Button/Button';
import AppStoreButtons from '../../../components/ui/AppStoreButtons/AppStoreButtons';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import QrSvg from '../../../assets/qr.svg';
import dashboardImg from '../../../assets/pages_images/home-dashboard.webp';

const Membership = () => {
    return (
        <div className="bg-black min-h-screen relative overflow-hidden text-white font-sans selection:bg-[rgb(32,109,254)]/30">
            <Helmet>
                <title>Join OnlyOptions Premium | Full Membership Access</title>
                <meta name="description" content="Access institutional-grade options signals via the OnlyOptions mobile app. Verified 70.3% win rate. Simple plans starting at $60/month." />
            </Helmet>

            {/* Membership Hero Section (Styled like PricingHeroSection) */}
            <StandardSection spacing="xl" divider="bottom" className="pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-[10px] font-black uppercase tracking-[0.2em]">
                            <FiStar className="w-3 h-3 fill-brand-400" /> Premium Access
                        </div>

                        <SectionHeader
                            title={<>Professional <br /> <span className="text-brand-500 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Options Membership</span></>}
                            description="OnlyOptions sends 2–4 expert signals every market day — delivered instantly to your iPhone or Android. We provide institutional quality research for the everyday options trader."
                            align="left"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-white/5 opacity-80">
                            {[
                                { icon: <FiShield className="w-5 h-5 text-brand-400" />, text: 'Verified Win Rate' },
                                { icon: <FiZap className="w-5 h-5 text-brand-400" />, text: 'Real-time Alerts' },
                                { icon: <FiSmartphone className="w-5 h-5 text-brand-400" />, text: 'iOS & Android App' },
                                { icon: <FiCheckCircle className="w-5 h-5 text-brand-400" />, text: '$60/month entry' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    {item.icon}
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group lg:ml-auto max-w-sm">
                        <Card variant="institutional" className="p-10 border-brand-500/20 bg-gray-900/60 shadow-[0_0_80px_rgba(32,109,254,0.15)] z-10 rotate-2 group-hover:rotate-0 transition-all duration-700 rounded-[2.5rem]">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <p className="text-white font-black text-4xl">$60<span className="text-gray-500 text-sm font-medium">/mo</span></p>
                                    <p className="text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-widest">Locked-In Access & Full Dashboard Access</p>
                                </div>
                                <div className="space-y-4 pt-6 border-t border-white/5">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-500" style={{ width: `${70 - i * 15}%` }} />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[9px] font-black text-brand-400 uppercase tracking-widest text-center mt-6">Institutional Grade Systems</p>
                            </div>
                        </Card>
                        <div className="absolute -inset-10 bg-brand-500/10 blur-[120px] rounded-full opacity-30 -z-10" />
                    </div>
                </div>
            </StandardSection>

            {/* Benefits Section (Styled like WhatYouGetSection) */}
            <StandardSection variant="muted" dotGrid spacing="lg" divider="bottom">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <SectionHeader 
                            label="Benefits"
                            title={<>What's Included <br /> In <span className="text-brand-500">Premium Access</span></>}
                            description="Every OnlyOptions membership is a full-platform access pass. No up-selling, no locked features."
                            align="center"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FiBell />, title: "Instant Mobile Alerts", desc: "Push & SMS notification delivery. Never miss a signal entry or exit." },
                            { icon: <FiLayout />, title: "Live Performance", desc: "Real-time performance tracking with 70.3% verified win rate history." },
                            { icon: <FiShield />, title: "Professional Support", desc: "Direct access to our analyst team for guidance on any trade." }
                        ].map((item, i) => (
                            <Card key={i} className="p-10 border-white/5 bg-gray-950/40 hover:border-brand-500/30 transition-all rounded-[2rem]">
                                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-8 text-brand-500 text-xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">{item.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed font-bold">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </StandardSection>

            {/* Membership App Intro (Styled like AppSection) */}
            <StandardSection variant="institutional" dotGrid spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group lg:order-2">
                        <div className="absolute -inset-20 bg-brand-500/5 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                        <img
                            src={dashboardImg.src || dashboardImg}
                            alt="OnlyOptions App"
                            className="relative w-full h-auto max-h-[500px] object-contain transition-all duration-1000 ease-out group-hover:scale-[1.02] drop-shadow-[0_0_50px_rgba(32,109,254,0.15)]"
                        />
                    </div>

                    <div className="lg:order-1 space-y-12">
                        <SectionHeader
                            label="App Focus"
                            title={<>Members Receive <br /> Alerts Via <span className="text-brand-500 text-3xl md:text-5xl">Our Mobile App</span></>}
                            description="OnlyOptions is a mobile-first premium signaling service. Once you pick a plan, scan the QR code to activate everything inside the app."
                            align="left"
                        />

                        <div className="space-y-8">
                            <div className="flex gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                <div className="bg-white p-4 rounded-2xl shrink-0 shadow-2xl border-4 border-brand-500/20">
                                    <img src={QrSvg.src || QrSvg} alt="QR Code" className="w-24 h-24 sm:w-32 sm:h-32" />
                                </div>
                                <div className="flex flex-col justify-center gap-3">
                                    <p className="text-xs font-black uppercase text-brand-400 tracking-widest">Scan to join app</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold leading-relaxed max-w-[200px]">Activates iOS & Android membership instantly upon scanning.</p>
                                </div>
                            </div>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <AppStoreButtons />
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Pricing Section (Internalized copy of PricingCardsSection style) */}
            <StandardSection variant="muted" spacing="lg" divider="top">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Membership Plans</h2>
                        <div className="w-24 h-1 bg-brand-500 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-12 max-w-5xl mx-auto">
                        {[
                            { name: "Basic", price: "60", period: "month", f: ["2-4 Daily Signals", "Mobile Push Delivery", "Full Education", "Email Support"] },
                            { name: "Annual", price: "600", period: "year", f: ["Full Premium Access", "Price Lock Guarantee", "Save Over $120", "Annual Exclusive Perks"], popular: true }
                        ].map((tier, i) => (
                            <Card key={i} className={`relative p-10 flex flex-col items-center text-center border-white/10 ${tier.popular ? "bg-gray-900 border-brand-500/40 shadow-2xl z-10" : "bg-gray-950/40 hover:border-brand-500/30"} transition-all rounded-[2.5rem] group`}>
                                {tier.popular && (
                                    <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-bl-[2rem] shadow-xl">
                                        Best Value
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-sm font-black text-brand-400 uppercase tracking-[0.3em] mb-4">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1 justify-center whitespace-nowrap overflow-hidden">
                                        <span className="text-5xl sm:text-6xl font-black text-white">${tier.price}</span>
                                        <span className="text-gray-500 font-bold text-sm">/{tier.period}</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-10 w-full text-center">
                                    {tier.f.map((item, j) => (
                                        <li key={j} className="flex items-center justify-center gap-3 text-xs text-gray-400 font-bold">
                                            <HiCheckCircle className="w-4 h-4 text-brand-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto w-full">
                                    <Button 
                                        onClick={() => window.dispatchEvent(new CustomEvent('open-app-modal'))}
                                        variant={tier.popular ? "primary" : "secondary"} 
                                        className="w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl"
                                    >
                                        Get Access
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </StandardSection>

            {/* Final CTA */}
            <StandardCTA />
        </div>
    );
};

export default Membership;
