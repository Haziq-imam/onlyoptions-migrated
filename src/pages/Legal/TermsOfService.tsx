import React, { useState, useEffect } from 'react';
import StandardSection from '../../components/ui/Layout/StandardSection';
import SectionHeader from '../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../components/ui/CTA/StandardCTA';
import { FiShield, FiClock, FiFileText, FiChevronRight, FiAlertTriangle } from 'react-icons/fi';

const sections = [
    { id: 'introduction', title: 'Introduction', num: '00' },
    { id: 'acceptance', title: 'Acceptance of Terms', num: '01' },
    { id: 'description', title: 'Description of Service', num: '02' },
    { id: 'account', title: 'Account Registration', num: '03' },
    { id: 'subscription', title: 'Subscription & Payment', num: '04' },
    { id: 'cancellation', title: 'Cancellation & Refunds', num: '05' },
    { id: 'conduct', title: 'User Conduct', num: '06' },
    { id: 'ip', title: 'Intellectual Property', num: '07' },
    { id: 'disclaimers', title: 'Disclaimers & Risks', num: '08' },
    { id: 'liability', title: 'Limitation of Liability', num: '09' },
    { id: 'indemnification', title: 'Indemnification', num: '10' },
    { id: 'privacy', title: 'Data & Privacy', num: '11' },
    { id: 'dmca', title: 'Copyright (DMCA)', num: '12' },
    { id: 'termination', title: 'Termination', num: '13' },
    { id: 'third-party', title: 'Third-Party Services', num: '14' },
    { id: 'law', title: 'Governing Law', num: '15' },
    { id: 'dispute', title: 'Dispute Resolution', num: '16' },
    { id: 'miscellaneous', title: 'Miscellaneous', num: '17' },
    { id: 'contact', title: 'Contact Information', num: '18' },
];

const TermsOfService: React.FC = () => {
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
            <div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-brand-500/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />

            <StandardSection variant="transparent" dotGrid spacing="lg" className="pt-40 !overflow-visible relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-[10px] font-black uppercase tracking-widest mb-6">
                            <FiShield className="w-3 h-3" />
                            Legally Compliant · Clear Language
                        </div>
                        <SectionHeader
                            title={<>Terms of <span className="text-brand-500">Service</span></>}
                            description="Updated February 2026"
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
                                    <FiClock />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Last Updated</p>
                                    <p className="text-sm font-bold text-white">Feb 17, 2026</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                    <FiFileText />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Version</p>
                                    <p className="text-sm font-bold text-white">1.0</p>
                                </div>
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
                                            className={`w-full text-left px-4 py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-between group ${activeSection === section.id
                                                ? 'bg-brand-500/10 text-brand-500 border border-brand-500/20'
                                                : 'text-gray-500 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={`text-[9px] font-black opacity-40 ${activeSection === section.id ? 'text-brand-500' : ''}`}>
                                                    {section.num === '00' ? '' : section.num}
                                                </span>
                                                {section.title}
                                            </span>
                                            <FiChevronRight className={`w-3 h-3 transition-transform ${activeSection === section.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
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
                                <div className="prose prose-invert prose-brand max-w-none text-gray-400 space-y-6 leading-relaxed">
                                    <p>
                                        Welcome to OnlyOptions.us ("we," "us," "our," or "OnlyOptions"). These Terms of Service ("Terms") govern your access to and use of our website at onlyoptions.us (the "Website"), our Discord server, mobile applications (if any), and all related services, content, and materials (collectively, the "Service").
                                    </p>
                                    <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/10 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10">
                                            <FiShield className="w-12 h-12 text-brand-500" />
                                        </div>
                                        <p className="text-sm font-bold text-gray-300 leading-relaxed mb-6 relative z-10">
                                            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                                        </p>
                                        <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 relative z-10">
                                            <FiAlertTriangle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                                            <p className="text-[11px] font-black text-orange-200 uppercase tracking-widest leading-normal">
                                                IMPORTANT: THESE TERMS CONTAIN A BINDING ARBITRATION CLAUSE AND CLASS ACTION WAIVER IN SECTION 16, WHICH AFFECT YOUR LEGAL RIGHTS. PLEASE READ THEM CAREFULLY.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 1. ACCEPTANCE OF TERMS */}
                            <section id="acceptance" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">1. ACCEPTANCE OF TERMS</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-brand-500/20 transition-all group">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">1.1 Agreement to Terms</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            By creating an account, subscribing to our Service, or otherwise accessing any part of the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, incorporated herein by reference.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-brand-500/20 transition-all group">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">1.2 Age Requirement</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you are at least 18 years of age. If you are under 18, you may not use the Service.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">1.3 Modifications</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on the Website and updating the "Last Updated" date above. Your continued use of the Service after such changes constitutes your acceptance of the modified Terms.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* 2. DESCRIPTION OF SERVICE */}
                            <section id="description" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">2. DESCRIPTION OF SERVICE</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-6">2.1 Service Overview</p>
                                        <p className="text-sm text-gray-400 mb-6">OnlyOptions provides educational information and analysis related to options trading, including:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                            {[
                                                'Daily options trading signals and alerts delivered via Discord and/or SMS',
                                                'Access to a private Discord community for members',
                                                'Educational content including tutorials, guides, and strategy documentation',
                                                'Performance tracking dashboard showing historical signal results',
                                                'Email support and customer service'
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-[11px] font-bold text-gray-300">
                                                    <FiChevronRight className="text-brand-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/20 flex gap-4 items-start">
                                        <FiAlertTriangle className="text-brand-500 w-6 h-6 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-black text-sm mb-4">2.2 Not Investment Advice</p>
                                            <p className="text-xs font-medium text-gray-400 leading-relaxed">
                                                OnlyOptions is an educational and informational service only. We do not provide personalized investment advice, financial planning, or portfolio management services. All content and signals are for informational and educational purposes and should not be construed as recommendations to buy or sell any security.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">2.3 Educational Purpose</p>
                                        <p className="text-sm text-gray-400 leading-relaxed font-bold italic">
                                            The Service is designed to educate users about options trading strategies and market analysis. All decisions to enter or exit trades based on information from the Service are made solely by you at your own discretion and risk.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* 3. ACCOUNT REGISTRATION AND SECURITY */}
                            <section id="account" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">3. ACCOUNT REGISTRATION AND SECURITY</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">3.1 Account Creation</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            To access certain features of the Service, you must create an account by providing accurate, current, and complete information, including a valid email address.
                                        </p>
                                    </div>
                                    <div className="p-10 rounded-[2.5rem] fintech-glass border border-white/10 space-y-8">
                                        <h4 className="text-lg font-black text-white uppercase tracking-wider">3.2 Account Security</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                'Keep your password secure and confidential',
                                                'Notify us immediately of any unauthorized use of your account',
                                                'Not share your Discord invite link or account access with third parties',
                                                'Not create multiple accounts to circumvent limitations or obtain multiple access periods'
                                            ].map((rule, i) => (
                                                <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-300">
                                                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                                                    {rule}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">3.3 Account Termination</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            We reserve the right to suspend or terminate your account at any time, with or without notice, for violations of these Terms, fraudulent activity, abusive behavior, or any other reason at our sole discretion.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* 4. SUBSCRIPTION PLANS AND PAYMENT TERMS */}
                            <section id="subscription" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">4. SUBSCRIPTION PLANS AND PAYMENT TERMS</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                            <p className="text-xs font-black text-brand-500 uppercase tracking-widest mb-4">4.1 Subscription Plans</p>
                                            <p className="text-xs font-medium text-gray-400 leading-relaxed">We offer multiple subscription tiers (Basic, Pro, Annual) as described on our pricing page. Each plan includes specific features and pricing.</p>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                            <p className="text-xs font-black text-brand-500 uppercase tracking-widest mb-4">4.2 Access Period</p>
                                            <p className="text-xs font-medium text-gray-400 leading-relaxed">New users may be eligible for a 7-day access period with no credit card required. Access periods are limited to one per person and may not be combined with other offers.</p>
                                        </div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/10">
                                        <p className="text-white font-black text-sm mb-6 uppercase tracking-wider">4.3 Billing</p>
                                        <div className="space-y-4">
                                            {[
                                                'Subscriptions are billed in advance on a monthly or annual basis depending on your selected plan',
                                                'Payment is due immediately upon subscription and on each renewal date thereafter',
                                                'We use third-party payment processors (Stripe) to process payments securely',
                                                'You authorize us to charge your payment method for all subscription fees'
                                            ].map((text, i) => (
                                                <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                                                    <FiChevronRight className="text-brand-500 flex-shrink-0" />
                                                    {text}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                                            <p className="text-[10px] font-black uppercase text-brand-500 mb-3">4.4 Automatic Renewal</p>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                                Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You will be charged the then-current subscription rate.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                                            <p className="text-[10px] font-black uppercase text-brand-500 mb-3">4.5 Price Changes</p>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                                We reserve the right to change subscription prices at any time. Price changes for existing subscribers will take effect at the next renewal cycle after at least 30 days’ notice. Existing subscribers are grandfathered at their current rate as long as their subscription remains continuously active.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                                            <p className="text-[10px] font-black uppercase text-brand-500 mb-3">4.6 Taxes</p>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                                All fees are exclusive of applicable taxes (including sales, use, and value-added taxes). You are responsible for paying all such taxes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 5. CANCELLATION AND REFUND POLICY */}
                            <section id="cancellation" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">5. CANCELLATION AND REFUND POLICY</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">5.1 Cancellation</p>
                                        <p className="text-sm text-gray-400 leading-relaxed mb-6">You may cancel your subscription at any time by:</p>
                                        <div className="flex flex-wrap gap-4">
                                            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300">
                                                Account Dashboard &gt; "Cancel Subscription"
                                            </div>
                                            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-brand-500">
                                                Emailing support@onlyoptions.us
                                            </div>
                                        </div>
                                        <p className="mt-6 text-xs text-gray-500 font-medium">
                                            Cancellations take effect at the end of your current billing period. You will retain access to the Service until that date. No partial refunds are provided for unused time in the billing period.
                                        </p>
                                    </div>

                                    <div className="p-10 rounded-[2.5rem] bg-gray-900/50 border border-white/5 space-y-10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-12 opacity-5">
                                            <FiShield className="w-32 h-32 text-brand-500" />
                                        </div>
                                        <div className="space-y-6 relative z-10">
                                            <h4 className="text-xl font-black text-white uppercase tracking-tight">5.2 Refund Policy Matrix</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <p className="text-[10px] font-black uppercase text-green-500 tracking-[0.2em]">7-Day Guarantee</p>
                                                    <p className="text-sm text-white font-bold italic leading-relaxed">
                                                        We offer a 7-day money-back guarantee from your initial subscription date. Email support@onlyoptions.us within 7 days. Include "Refund Request" and your registered email.
                                                    </p>
                                                </div>
                                                <div className="space-y-4">
                                                    <p className="text-[10px] font-black uppercase text-red-500 tracking-[0.2em]">Strict Non-Refundable</p>
                                                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                                        After 7 days, all fees are non-refundable. Forgetfulness, non-use, or trading losses do not qualify for refunds.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex gap-4 items-center relative z-10">
                                            <FiAlertTriangle className="text-red-500 w-5 h-5 flex-shrink-0" />
                                            <div>
                                                <p className="text-[10px] font-black text-white uppercase tracking-widest mb-2">5.3 No Refunds for Trading Losses</p>
                                                <p className="text-[10px] font-black text-red-100 uppercase tracking-widest leading-loose">
                                                    UNDER NO CIRCUMSTANCES WILL WE PROVIDE REFUNDS, CREDITS, OR COMPENSATION BASED ON TRADING PERFORMANCE, LOSSES INCURRED FOLLOWING OUR SIGNALS, OR MARKET CONDITIONS. YOU ACKNOWLEDGE THAT OPTIONS TRADING INVOLVES SUBSTANTIAL RISK OF LOSS.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 6. USER CONDUCT AND PROHIBITED ACTIVITIES */}
                            <section id="conduct" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">6. USER CONDUCT AND PROHIBITED ACTIVITIES</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">6.1 Acceptable Use</p>
                                        <p className="text-sm text-gray-400 leading-relaxed mb-6">You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                'Share, redistribute, or resell any content or signals',
                                                'Engage in fraudulent or illegal activity',
                                                'Harass, abuse, or threaten users or staff',
                                                'Post spam or advertising in Discord',
                                                'Attempt unauthorized access to systems',
                                                'Use automated bots, scrapers, or scripts',
                                                'Reverse engineer or extract source code',
                                                'Impersonate OnlyOptions staff or moderators'
                                            ].map((rule, i) => (
                                                <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-300">
                                                    <FiChevronRight className="text-brand-500" />
                                                    {rule}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                            <p className="text-[10px] font-black uppercase text-brand-500 mb-3">6.2 Discord Community Rules</p>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                                Our Discord server has additional community guidelines posted in the #rules channel. Violations may result in warnings, temporary mutes, or permanent bans at moderator discretion.
                                            </p>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20">
                                            <p className="text-[10px] font-black uppercase text-red-500 mb-3">6.3 Consequences of Violations</p>
                                            <p className="text-[10px] text-gray-400 font-bold leading-relaxed">
                                                Violations of this section may result in immediate account suspension or termination without refund, removal from Discord, and potential legal action.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 7. INTELLECTUAL PROPERTY RIGHTS */}
                            <section id="ip" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">7. INTELLECTUAL PROPERTY RIGHTS</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">7.1 Our Ownership</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            The Service and all content, including but not limited to text, graphics, logos, signals, analysis, educational materials, software, and data (collectively, "Our Content"), are owned by OnlyOptions LLC or our licensors and are protected by United States and international copyright, trademark, and other intellectual property laws.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">7.2 Limited License</p>
                                        <p className="text-sm text-gray-400 leading-relaxed font-bold italic">
                                            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service solely for your personal, non-commercial use.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                                            <p className="text-[10px] font-black uppercase text-brand-500 mb-3">7.3 Trademarks</p>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                                "OnlyOptions," our logo, and other marks used on the Service are trademarks owned by OnlyOptions LLC. You may not use these marks without our prior written permission.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                                            <p className="text-[10px] font-black uppercase text-brand-500 mb-3">7.4 User Submissions</p>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                                If you submit feedback, suggestions, testimonials, or other content to us, you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, and display such content for any purpose.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 8. DISCLAIMERS AND RISK WARNINGS */}
                            <section id="disclaimers" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">8. DISCLAIMERS AND RISK WARNINGS</h2>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-orange-500/5 border border-orange-500/10 text-left space-y-8">
                                    <div className="space-y-4">
                                        <p className="text-brand-500 font-extrabold text-xs uppercase tracking-widest">8.1 No Guarantees</p>
                                        <h3 className="text-2xl font-black text-white">WE DO NOT GUARANTEE ANY SPECIFIC RESULTS, PROFITS, OR TRADING PERFORMANCE.</h3>
                                        <p className="text-sm text-orange-200/70 leading-loose font-bold uppercase tracking-widest">
                                            OPTIONS TRADING INVOLVES SUBSTANTIAL RISK OF LOSS. YOU MAY LOSE SOME OR ALL OF YOUR INVESTED CAPITAL.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/5">
                                        <div className="space-y-3">
                                            <p className="text-[10px] font-black uppercase text-brand-500">8.2 Not investment Advice</p>
                                            <p className="text-[10px] text-gray-400 leading-relaxed italic">The Service provides general educational information about options trading and is not personalized investment advice tailored to your financial situation. We are not registered investment advisers.</p>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-[10px] font-black uppercase text-brand-500">8.3 Past Performance</p>
                                            <p className="text-[10px] text-gray-400 leading-relaxed italic">Historical performance data, win rates, and signal results presented on the Service do not guarantee future results. Market conditions change.</p>
                                        </div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-black/40 border border-white/5 space-y-4">
                                        <p className="text-white font-black text-sm uppercase tracking-wide">8.6 "AS IS" Service</p>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-loose">
                                            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED ACCESS.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* 9. LIMITATION OF LIABILITY */}
                            <section id="liability" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase italic">9. LIMITATION OF LIABILITY</h2>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/10 space-y-8 uppercase">
                                    <div className="space-y-4">
                                        <p className="text-brand-500 font-black text-xs tracking-widest">9.1 No Liability for Trading Losses</p>
                                        <p className="text-sm text-white font-black leading-relaxed">
                                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ONLYOPTIONS, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY TRADING LOSSES, INVESTMENT LOSSES, OR FINANCIAL DAMAGES OF ANY KIND ARISING FROM YOUR USE OF THE SERVICE OR RELIANCE ON ANY SIGNALS, CONTENT, OR INFORMATION PROVIDED.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-gray-950/50 border border-white/5">
                                        <p className="text-xs text-gray-500 font-bold tracking-widest leading-loose">
                                            9.3 Maximum Liability: OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE TOTAL AMOUNT YOU PAID TO US IN SUBSCRIPTION FEES DURING THE 12 MONTHS PRECEDING THE CLAIM.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* 10. INDEMNIFICATION */}
                            <section id="indemnification" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">10. INDEMNIFICATION</h2>
                                <p className="text-sm text-gray-400 leading-relaxed mb-6">You agree to indemnify, defend, and hold harmless OnlyOptions, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys’ fees) arising from:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Your use of the Service',
                                        'Your violation of these Terms',
                                        'Your violation of any rights of another person',
                                        'Your trading activities and any losses incurred',
                                        'Any fraudulent, illegal, or unauthorized use of your account'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-brand-500" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 11. DATA COLLECTION AND PRIVACY */}
                            <section id="privacy" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">11. DATA COLLECTION AND PRIVACY</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-xs font-black text-brand-500 uppercase tracking-widest mb-4">11.1 Privacy Policy</p>
                                        <p className="text-sm text-gray-400 leading-relaxed font-bold italic">Our collection, use, and protection of your personal information is governed by our Privacy Policy. By using the Service, you consent to our data practices.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                        <p className="text-xs font-black text-brand-500 uppercase tracking-widest mb-4">11.3 Communications</p>
                                        <p className="text-xs text-gray-500 leading-relaxed">By subscribing, you consent to receive transactional emails and service-related communications. You may opt out of marketing emails but not transactional communications.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 12. COPYRIGHT AND DMCA POLICY */}
                            <section id="dmca" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">12. COPYRIGHT AND DMCA POLICY</h2>
                                <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                                    <p className="text-sm text-gray-400 leading-relaxed italic mb-8">If you believe that any content on the Service infringes your copyright, please notify us at privacy@onlyoptions.us with the required legal statements and documentation.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-center">Description of Work</div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-center">Location on Service</div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-center">Legal Signature</div>
                                    </div>
                                </div>
                            </section>

                            {/* 13. TERMINATION */}
                            <section id="termination" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">13. TERMINATION</h2>
                                <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 space-y-6">
                                    <p className="text-sm text-gray-400 leading-relaxed">We may suspend or terminate your access to the Service immediately, without prior notice or liability, for breach of terms, fraudulent activity, or non-payment.</p>
                                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Sections that should survive termination: 7, 8, 9, 10, 16</p>
                                </div>
                            </section>

                            {/* 14. THIRD-PARTY SERVICES */}
                            <section id="third-party" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">14. THIRD-PARTY SERVICES</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#635BFF]/10 rounded-xl flex items-center justify-center font-black text-[#635BFF] text-xl">S</div>
                                        <p className="text-xs font-bold text-gray-300">SECURE BILLING BY STRIPE</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#5865F2]/10 rounded-xl flex items-center justify-center font-black text-[#5865F2] text-xl">D</div>
                                        <p className="text-xs font-bold text-gray-300">COMMUNITY BY DISCORD</p>
                                    </div>
                                </div>
                            </section>

                            {/* 15. GOVERNING LAW AND JURISDICTION */}
                            <section id="law" className="pt-24 border-t border-white/5 scroll-mt-32 text-center max-w-2xl mx-auto">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">15. GOVERNING LAW AND JURISDICTION</h2>
                                <p className="text-sm text-gray-400 leading-loose italic">
                                    These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any legal proceed shall be brought exclusively in Delaware courts.
                                </p>
                            </section>

                            {/* 16. DISPUTE RESOLUTION AND ARBITRATION */}
                            <section id="dispute" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">16. DISPUTE RESOLUTION AND ARBITRATION</h2>
                                <div className="p-10 rounded-[3rem] fintech-glass border border-brand-500/20 space-y-10">
                                    <p className="text-xs font-black text-brand-500 uppercase tracking-[0.3em] text-center">PLEASE READ THIS SECTION CAREFULLY</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-black text-white">16.2 Binding Arbitration</h4>
                                            <p className="text-xs text-gray-400 leading-relaxed font-medium">Any claim arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association (AAA).</p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-black text-red-500">16.4 Class Action Waiver</h4>
                                            <p className="text-xs text-red-100/60 leading-relaxed font-black uppercase tracking-widest">YOU AGREE THAT PROCEEDINGS SHALL BE LIMITED TO DISPUTES INDIVIDUALLY. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</p>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <p className="text-[10px] font-medium text-gray-500 italic">Opt-out: Within 30 days of first accepting Terms via legal@onlyoptions.us</p>
                                    </div>
                                </div>
                            </section>

                            {/* 17. MISCELLANEOUS PROVISIONS */}
                            <section id="miscellaneous" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-4 uppercase">17. MISCELLANEOUS PROVISIONS</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { t: 'Entire Agreement', d: 'These Terms and our Privacy Policy constitute the entire agreement regarding the Service.' },
                                        { t: 'Severability', d: 'If any provision is found invalid, remaining provisions shall remain in full force and effect.' },
                                        { t: 'Assignment', d: 'You may not transfer these Terms without prior written consent. We may assign to affiliates.' },
                                        { t: 'Force Majeure', d: 'No liability for failure due to causes beyond our control (natural disasters, war, strike, etc).' }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                                            <p className="text-[10px] font-black uppercase text-brand-500 mb-2">{item.t}</p>
                                            <p className="text-[10px] text-gray-500 leading-relaxed">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 18. CONTACT INFORMATION */}
                            <section id="contact" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">18. CONTACT INFORMATION</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Legal Inquiries</p>
                                            <a href="mailto:legal@onlyoptions.us" className="text-xl font-black text-white hover:text-brand-500 transition-colors">legal@onlyoptions.us</a>
                                        </div>
                                        <div className="space-y-4 pt-6 border-t border-white/5">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Support Desk</p>
                                            <a href="mailto:support@onlyoptions.us" className="text-xl font-black text-white hover:text-brand-400 transition-colors">support@onlyoptions.us</a>
                                        </div>
                                    </div>
                                    <div className="p-10 rounded-3xl bg-brand-500/5 border border-brand-500/20 space-y-4 flex flex-col justify-center">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Official Entity</p>
                                        <p className="text-2xl font-black text-white">OnlyOptions LLC</p>
                                        <p className="text-sm font-bold text-gray-500">Registerd in Delaware, USA</p>
                                        <p className="text-xs text-gray-600 font-medium">https://onlyoptions.us</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </StandardSection>

            <StandardCTA 
                title="Dominate the Markets Together"
                subtitle="Join 1,247+ professional traders receiving live alerts every market day."
                className="mt-0"
            />
        </div>
    );
};

export default TermsOfService;
