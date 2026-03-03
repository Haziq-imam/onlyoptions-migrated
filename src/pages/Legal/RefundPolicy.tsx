import React, { useState, useEffect } from 'react';
import StandardSection from '../../components/ui/Layout/StandardSection';
import SectionHeader from '../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../components/ui/CTA/StandardCTA';
import {
    FiShield,
    FiClock,
    FiFileText,
    FiChevronRight,
    FiCheckCircle,
    FiXCircle,
    FiMail,
    FiZap,
    FiInfo,
    FiRotateCcw
} from 'react-icons/fi';
import { cn } from '../../components/ui/Card/Card';

const sections = [
    { id: 'introduction', title: 'Introduction', num: '00' },
    { id: 'guarantee', title: '7-Day Guarantee', num: '01' },
    { id: 'how-to-request', title: 'How to Request', num: '02' },
    { id: 'non-refundable', title: 'What is NOT Refundable', num: '03' },
    { id: 'special-circumstances', title: 'Special Circumstances', num: '04' },
    { id: 'comparison', title: 'Cancellation vs. Refund', num: '05' },
    { id: 'chargebacks', title: 'Chargebacks & Disputes', num: '06' },
    { id: 'annual-plans', title: 'Annual Plan Refunds', num: '07' },
    { id: 'changes', title: 'Changes to Policy', num: '08' },
    { id: 'contact', title: 'Contact Us', num: '09' },
    { id: 'quick-reference', title: 'Quick Reference', num: '10' },
];

const RefundPolicy: React.FC = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-black min-h-screen relative overflow-visible text-white font-sans selection:bg-brand-500/30">
            {/* Background Glow Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-20 z-10" />
            <div className="absolute top-0 left-1/3 w-1/3 h-[500px] bg-brand-500/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />

            <StandardSection variant="transparent" dotGrid spacing="lg" className="pt-40 !overflow-visible relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-[10px] font-black uppercase tracking-widest mb-6">
                            <FiShield className="w-3 h-3" />
                            7-Day Money-Back Guarantee · Clear Terms
                        </div>
                        <SectionHeader
                            title={<>Refund <span className="text-brand-500">Policy</span></>}
                            description="Updated February 17, 2026"
                            align="left"
                        />

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                    <FiClock />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Effective Date</p>
                                    <p className="text-sm font-bold text-white">Feb 17, 2026</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                    <FiRotateCcw />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Refund Window</p>
                                    <p className="text-sm font-bold text-white">7 Calendar Days</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                    <FiFileText />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Policy Version</p>
                                    <p className="text-sm font-bold text-white">1.0 (Current)</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Summary Banner */}
                        <div className="mt-12 p-8 rounded-[2.5rem] bg-brand-500 border border-white/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-10">
                                <FiZap className="w-32 h-32 text-black" />
                            </div>
                            <div className="relative z-10 max-w-2xl">
                                <p className="text-xs font-black text-black uppercase tracking-widest mb-2">Quick Summary</p>
                                <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-4">7-Day Money-Back Guarantee</h3>
                                <p className="text-lg font-bold text-white leading-tight">
                                    Request a full refund within 7 days of your first payment for any reason.
                                    <span className="block mt-1 opacity-80 underline decoration-black/30 underline-offset-4">No questions asked. No conditions. No hassle.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sticky Sidebar Navigation */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <div className="sticky top-32 space-y-2">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-6">Table of Contents</p>
                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={cn(
                                                "w-full text-left px-4 py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-between group",
                                                activeSection === section.id
                                                    ? 'bg-brand-500/10 text-brand-500 border border-brand-500/20'
                                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                            )}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={cn(
                                                    "text-[9px] font-black opacity-40",
                                                    activeSection === section.id ? 'text-brand-500' : ''
                                                )}>
                                                    {section.num === '00' ? '' : section.num}
                                                </span>
                                                {section.title}
                                            </span>
                                            <FiChevronRight className={cn(
                                                "w-3 h-3 transition-transform",
                                                activeSection === section.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                                            )} />
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="lg:col-span-9 space-y-24 pb-40">
                            {/* INTRODUCTION */}
                            <section id="introduction" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">Introduction</h2>
                                </div>
                                <div className="prose prose-invert prose-brand max-w-none text-gray-400 space-y-6 leading-relaxed font-medium">
                                    <p>
                                        OnlyOptions LLC ("we," "us," "our," or "OnlyOptions") stands behind the quality of our Service. This Refund Policy explains when and how you can request a refund of your subscription fees.
                                    </p>
                                    <p>
                                        By subscribing to OnlyOptions.us, you agree to the terms of this Refund Policy. This policy should be read in conjunction with our <a href="/terms-of-service" className="text-brand-500 underline underline-offset-4 font-black">Terms of Service</a>.
                                    </p>
                                </div>
                            </section>

                            {/* 1. 7-DAY MONEY-BACK GUARANTEE */}
                            <section id="guarantee" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">1. 7-Day Money-Back Guarantee</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">1.1 Eligibility</p>
                                        <p className="text-sm font-bold text-white mb-6 leading-relaxed">We offer a no-questions-asked 7-day money-back guarantee on all subscription plans (Basic, Pro, and Annual).</p>
                                        <div className="space-y-4">
                                            {[
                                                'You are a NEW subscriber making your FIRST payment to OnlyOptions.us',
                                                'You request a refund within 7 calendar days of your initial subscription date',
                                                'Your account has not been suspended or terminated for violations of our Terms of Service'
                                            ].map((text, i) => (
                                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                                                    <FiCheckCircle className="text-brand-500 mt-1 flex-shrink-0" />
                                                    <p className="text-xs text-gray-400 font-bold">{text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                            <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">1.2 What "7 Days" Means</p>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                The 7-day refund window begins at the exact time your first payment is processed and ends exactly 168 hours (7 days × 24 hours) later.
                                            </p>
                                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 border-l-brand-500 border-l-2">
                                                <p className="text-[10px] font-black text-white uppercase mb-2 italic">Example:</p>
                                                <p className="text-[10px] text-gray-500">Subscribe: Monday, 3:00 PM EST. Window closes next Monday at 3:00 PM EST exactly.</p>
                                            </div>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                            <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">1.3 No Questions Asked</p>
                                            <p className="text-xs text-gray-400 leading-relaxed font-bold uppercase tracking-widest">YOU DO NOT NEED TO JUSTIFY YOUR DECISION.</p>
                                            <p className="text-[10px] text-gray-500 italic">
                                                Whether it didn't meet expectations, you changed your mind, or found another service — we process without friction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 2. HOW TO REQUEST A REFUND */}
                            <section id="how-to-request" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">2. How to Request a Refund</h2>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 space-y-10">
                                    <div className="space-y-6">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">2.1 Refund Request Process</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                                                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-xs font-black">1</div>
                                                    <p className="text-xs font-bold text-white">Email support@onlyoptions.us</p>
                                                </div>
                                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                                                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-xs font-black">2</div>
                                                    <p className="text-xs font-bold text-white">Subject: "Refund Request"</p>
                                                </div>
                                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                                                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-xs font-black">3</div>
                                                    <p className="text-xs font-bold text-white">Include registered email address</p>
                                                </div>
                                            </div>
                                            <div className="p-6 rounded-3xl bg-black border border-white/10 font-mono text-[10px] text-gray-500 leading-relaxed relative group overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 text-brand-500">
                                                    <FiMail className="w-8 h-8" />
                                                </div>
                                                <p className="text-brand-500 mb-2 font-black uppercase tracking-widest text-[9px]">Example Email Content:</p>
                                                <p className="text-white mb-2 underline decoration-white/10 uppercase tracking-tighter">To: support@onlyoptions.us</p>
                                                <p className="text-white mb-4 uppercase tracking-tighter">Subject: Refund Request</p>
                                                <p className="text-gray-400 italic">
                                                    "Please process a refund for my subscription. My registered email is john.doe@example.com. Thank you."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <p className="text-xs font-black text-white uppercase tracking-widest">2.2 Processing Time</p>
                                            <p className="text-xs text-gray-500 font-medium">Refunds are initiated within 24–48 hours. Funds typically appear in 3–5 business days for cards, or 1–2 days for PayPal.</p>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-xs font-black text-white uppercase tracking-widest">2.3 Access Revocation</p>
                                            <p className="text-xs text-gray-500 font-medium">Digital access (Discord, Dashboard) is revoked within 24 hours of refund processing. No further charges will occur.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 3. WHAT IS NOT REFUNDABLE */}
                            <section id="non-refundable" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">3. What is NOT Refundable</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-10 rounded-[2.5rem] bg-red-500/5 border border-red-500/20 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-12 opacity-5 text-red-500">
                                            <FiXCircle className="w-32 h-32" />
                                        </div>
                                        <div className="relative z-10 space-y-6">
                                            <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em]">Strict Warning</p>
                                            <h3 className="text-2xl font-black text-white leading-tight uppercase">NO REFUNDS AFTER THE 7-DAY WINDOW.</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                                {[
                                                    'Forgot to cancel on time',
                                                    'Did not use the Service',
                                                    'Trading losses incurred',
                                                    'Too busy to evaluate',
                                                    'Changed mind after Day 8',
                                                    'Renewal payments'
                                                ].map((text, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                                                        <FiXCircle className="text-red-500/50 flex-shrink-0" />
                                                        {text}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                            <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">3.2 Renewal Payments</p>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                Refunds are available ONLY for your first initial subscription payment. Renewals are final.
                                            </p>
                                            <div className="p-4 rounded-xl bg-black border border-white/5 space-y-2">
                                                <p className="text-[9px] font-black text-white flex justify-between"><span>Day 1 (Subscribed):</span> <span className="text-brand-500">REFUNDABLE</span></p>
                                                <p className="text-[9px] font-black text-white flex justify-between"><span>Day 31 (Renewal):</span> <span className="text-red-500">STRICT NO REFUND</span></p>
                                            </div>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                            <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">3.3 Trading Losses</p>
                                            <p className="text-xs text-red-400 font-black uppercase tracking-widest">NO REFUNDS FOR TRADING LOSSES.</p>
                                            <p className="text-[10px] text-gray-500 italic leading-relaxed">
                                                Underperformance, losing streaks, or individual signal failures are inherent risks of trading. Subscription fees are for service access, not performance insurance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 4. REFUNDS IN SPECIAL CIRCUMSTANCES */}
                            <section id="special-circumstances" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">4. Special Circumstances</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-xs font-black text-brand-500 uppercase tracking-widest">4.1 Duplicate Charges</p>
                                        <p className="text-[10px] text-gray-400 leading-relaxed">Technical errors result in automatic refunds upon report. Window does not apply.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-xs font-black text-brand-500 uppercase tracking-widest">4.2 Service Outages</p>
                                        <p className="text-[10px] text-gray-400 leading-relaxed">Extended downtime preventing access may result in pro-rated credits or discretionary refunds.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 space-y-4">
                                        <p className="text-xs font-black text-red-500 uppercase tracking-widest">4.3 Violation Bans</p>
                                        <p className="text-[10px] text-gray-400 leading-relaxed font-bold italic">Account termination for fraud or ToS violation forfeits all eligibility for refunds.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 5. CANCELLATION VS. REFUND */}
                            <section id="comparison" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">5. Cancellation vs. Refund</h2>
                                </div>
                                <div className="overflow-hidden rounded-[2.5rem] border border-white/5 fintech-glass">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-brand-500/20 border-b border-white/10">
                                                <th className="px-8 py-6 text-xs font-black text-brand-500 uppercase tracking-widest">Action</th>
                                                <th className="px-8 py-6 text-xs font-black text-brand-500 uppercase tracking-widest">When to Use</th>
                                                <th className="px-8 py-6 text-xs font-black text-brand-500 uppercase tracking-widest">What Happens</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-xs">
                                            <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                <td className="px-8 py-6 font-black text-white uppercase">Cancellation</td>
                                                <td className="px-8 py-6 text-gray-400 font-medium">Any time (including after 7 days)</td>
                                                <td className="px-8 py-6 text-gray-400 font-medium">Billing stops. No refund. Access until end of period.</td>
                                            </tr>
                                            <tr className="hover:bg-white/[0.02] transition-colors">
                                                <td className="px-8 py-6 font-black text-brand-500 uppercase italic">Refund Request</td>
                                                <td className="px-8 py-6 text-gray-400 font-medium font-black italic">Within 7 days of first payment only</td>
                                                <td className="px-8 py-6 text-gray-400 font-medium font-black italic">Full refund. Billing stops. Access revoked immediately.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* 6. CHARGEBACKS AND PAYMENT DISPUTES */}
                            <section id="chargebacks" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">6. Chargebacks & Disputes</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/20">
                                        <h4 className="text-white font-black text-sm uppercase mb-4 tracking-widest">6.1 Contact Us First</h4>
                                        <p className="text-xs text-gray-400 font-bold leading-relaxed mb-6">
                                            Please email support BEFORE filing a chargeback. Most billing issues can be resolved quickly and amicably. Filing a dispute without contact may result in permanent exclusion from the Service.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                            <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">6.2 Valid Reasons</p>
                                            <ul className="space-y-3">
                                                {['Fraudulent unauthorized charges', 'Unresolved technical duplicates', 'Billing after proven cancellation'].map((text, i) => (
                                                    <li key={i} className="text-[10px] font-bold text-gray-500 flex gap-2">
                                                        <span className="text-brand-500">•</span> {text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 space-y-4">
                                            <p className="text-red-500 font-black text-xs uppercase tracking-[0.2em]">6.3 Invalid Reasons</p>
                                            <ul className="space-y-3">
                                                {['Forgot to cancel', 'Trading losses', 'Denied late refund', 'Simply changed mind'].map((text, i) => (
                                                    <li key={i} className="text-[10px] font-bold text-gray-500 flex gap-2">
                                                        <span className="text-red-500">•</span> {text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 7. ANNUAL PLAN REFUNDS */}
                            <section id="annual-plans" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">7. Annual Plan Refunds</h2>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-brand-500/[0.03] border border-brand-500/10 space-y-6 leading-relaxed">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-2xl bg-brand-500 text-white">
                                            <FiInfo className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-white uppercase mb-2">Window applies to Annual ($600)</h4>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest italic decoration-brand-500 decoration-2 underline underline-offset-4">
                                                NO PRO-RATED REFUNDS FOR ANNUAL PLANS AFTER 7 DAYS.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        If you cancel 3 months into an annual subscription, you do NOT receive a partial refund for the remaining 9 months. You retain access until the end of the 12-month period.
                                    </p>
                                </div>
                            </section>

                            {/* 8. CHANGES TO THIS REFUND POLICY */}
                            <section id="changes" className="space-y-8 scroll-mt-32 text-center">
                                <div className="flex items-center gap-4 mb-4 justify-center">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">8. Changes to Policy</h2>
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                </div>
                                <p className="text-sm text-gray-400 italic leading-loose max-w-2xl mx-auto">
                                    Refunds are governed by the Policy in effect at the time of your initial subscription. We reserve the right to modify these terms, effective upon posting to the website.
                                </p>
                            </section>

                            {/* 9. CONTACT US */}
                            <section id="contact" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">9. Contact Us</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Refund Team Email</p>
                                            <a href="mailto:support@onlyoptions.us" className="text-xl font-black text-white hover:text-brand-500 transition-colors">support@onlyoptions.us</a>
                                        </div>
                                        <div className="space-y-4 pt-6 border-t border-white/5">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Standard Desk</p>
                                            <p className="text-lg font-black text-gray-500">24-Hour Response Time</p>
                                        </div>
                                    </div>
                                    <div className="p-10 rounded-3xl bg-brand-500/5 border border-brand-500/20 space-y-4 flex flex-col justify-center">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Official Entity</p>
                                        <p className="text-2xl font-black text-white uppercase tracking-tighter">OnlyOptions LLC</p>
                                        <p className="text-sm font-bold text-gray-500 italic uppercase tracking-[0.3em]">No questions asked.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 10. QUICK REFERENCE TABLE */}
                            <section id="quick-reference" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">10. Quick Reference</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { s: 'Window', val: '7 Days', ok: true },
                                        { s: 'Reason required', val: 'No', ok: true },
                                        { s: 'Initial payment', val: 'Eligible', ok: true },
                                        { s: 'Renewals', val: 'Ineligible', ok: false },
                                        { s: 'Trading losses', val: 'Ineligible', ok: false },
                                        { s: '8+ days elapsed', val: 'Ineligible', ok: false },
                                        { s: 'Duplicate charges', val: 'Eligible', ok: true },
                                        { s: 'Free Trial use', val: 'Eligible (w/ 7d)', ok: true },
                                        { s: 'Account violations', val: 'Ineligible', ok: false },
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col gap-3">
                                            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{item.s}</p>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[11px] font-black text-white uppercase">{item.val}</p>
                                                {item.ok ? <FiCheckCircle className="text-brand-500" /> : <FiXCircle className="text-red-500 opacity-50" />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 text-center">
                                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em]">End of Refund Policy</p>
                                    <p className="text-[9px] text-gray-700 mt-2">Latest Revision: February 17, 2026</p>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </StandardSection>

            <StandardCTA
                title="Risk-Free Trading Starts Here"
                subtitle="Join with absolute peace of mind. Our 7-day promise covers your first payment 100%."
                className="mt-0"
            />
        </div>
    );
};

export default RefundPolicy;
