import React, { useState, useEffect } from 'react';
import StandardSection from '../../components/ui/Layout/StandardSection';
import SectionHeader from '../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../components/ui/CTA/StandardCTA';
import { cn } from '../../components/ui/Card/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/Table/Table';
import {
    FiChevronRight,
    FiZap,
    FiCheckCircle,
    FiXCircle,
    FiDollarSign,
    FiLink,
    FiShield,
    FiClock,
    FiFileText,
    FiUsers,
    FiAlertTriangle,
    FiInfo
} from 'react-icons/fi';

const sections = [
    { id: 'introduction', title: 'Introduction', num: '00' },
    { id: 'overview', title: 'Program Overview', num: '01' },
    { id: 'enrollment', title: 'Enrollment & Eligibility', num: '02' },
    { id: 'responsibilities', title: 'Promo Guidelines', num: '03' },
    { id: 'tracking', title: 'Tracking & Payments', num: '04' },
    { id: 'prohibited', title: 'Prohibited Practices', num: '05' },
    { id: 'refunds', title: 'Refunds & Clawbacks', num: '06' },
    { id: 'termination', title: 'Term & Termination', num: '07' },
    { id: 'relationship', title: 'Relationship of Parties', num: '08' },
    { id: 'tax', title: 'Tax & Compliance', num: '09' },
    { id: 'liability', title: 'Disclaimers & Liability', num: '10' },
    { id: 'modifications', title: 'Modifications', num: '11' },
    { id: 'confidentiality', title: 'Confidentiality', num: '12' },
    { id: 'governing-law', title: 'Governing Law', num: '13' },
    { id: 'contact', title: 'Contact', num: '14' },
];

const AffiliateProgram: React.FC = () => {
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
            window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-black min-h-screen relative overflow-visible text-white font-sans selection:bg-brand-500/30">
            {/* Background Glow Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-20 z-10" />
            <div className="absolute top-0 left-1/3 w-1/3 h-[500px] bg-brand-500/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />

            <StandardSection variant="transparent" dotGrid spacing="lg" className="pt-40 !overflow-visible relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-[10px] font-black uppercase tracking-widest mb-6">
                            <FiDollarSign className="w-3 h-3" />
                            Earn 30% Recurring · Lifetime Referrals · Transparent Tracking
                        </div>
                        <SectionHeader
                            title={<>Affiliate <span className="text-brand-500">Agreement</span></>}
                            description="Updated February 17, 2026"
                            align="left"
                        />

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: <FiClock />, label: 'Effective Date', val: 'Feb 17, 2026' },
                                { icon: <FiDollarSign />, label: 'Commission Rate', val: '30% Recurring' },
                                { icon: <FiFileText />, label: 'Version', val: '1.0 (Current)' },
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">{item.icon}</div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{item.label}</p>
                                        <p className="text-sm font-bold text-white">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Commission Structure Table */}
                        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-brand-500/20 bg-brand-500/5">
                            <div className="px-10 py-6 border-b border-brand-500/10">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500">Commission Structure</p>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-white/[0.02]">
                                        <TableHead>Plan</TableHead>
                                        <TableHead>Your Commission</TableHead>
                                        <TableHead>Payment Type</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { plan: 'Basic ($60/month)', commission: '$18/month', type: 'Recurring monthly', highlight: false },
                                        { plan: 'Pro ($99/month)', commission: '$30/month', type: 'Recurring monthly', highlight: true },
                                        { plan: 'Annual ($600/year)', commission: '$180 upfront', type: 'One-time payment', highlight: false },
                                    ].map((row, i) => (
                                        <TableRow key={i} className={cn(
                                            "hover:bg-white/[0.02]",
                                            row.highlight ? "bg-brand-500/5" : ""
                                        )}>
                                            <TableCell label="Plan" className="text-white">{row.plan}</TableCell>
                                            <TableCell label="Your Commission" className="text-lg font-black text-brand-500">{row.commission}</TableCell>
                                            <TableCell label="Payment Type" className="text-gray-500">{row.type}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sticky TOC */}
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
                                                <span className={cn("text-[9px] font-black opacity-40", activeSection === section.id ? 'text-brand-500' : '')}>
                                                    {section.num === '00' ? '' : section.num}
                                                </span>
                                                {section.title}
                                            </span>
                                            <FiChevronRight className={cn("w-3 h-3 transition-transform", activeSection === section.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0')} />
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="lg:col-span-9 space-y-24 pb-40">
                            {/* INTRODUCTION */}
                            <section id="introduction" className="space-y-6 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">Introduction</h2>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                    This Affiliate Agreement ("Agreement") is a binding contract between you ("Affiliate," "you," or "your") and OnlyOptions LLC ("OnlyOptions," "we," "us," or "our"). By enrolling in the OnlyOptions.us Affiliate Program (the "Program"), you agree to be bound by this Agreement.
                                </p>
                            </section>

                            {/* 1. PROGRAM OVERVIEW */}
                            <section id="overview" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">1. Affiliate Program Overview</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">1.1 Program Purpose</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">The OnlyOptions.us Affiliate Program allows you to earn commissions by referring new paying subscribers to our options trading signals service. You promote OnlyOptions.us using your unique affiliate tracking link, and we pay you a commission for each successful referral.</p>
                                    </div>

                                    <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/20 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">1.2 Commission Structure</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">Affiliates earn a <span className="text-white font-black">30% recurring commission</span> on all subscription revenue generated by their referred customers:</p>
                                        <div className="space-y-3 mt-4">
                                            {[
                                                { plan: 'Basic Plan ($60/month)', earn: 'You earn $18/month for as long as the customer remains subscribed' },
                                                { plan: 'Pro Plan ($99/month)', earn: 'You earn $30/month for as long as the customer remains subscribed' },
                                                { plan: 'Annual Plan ($600/year)', earn: 'You earn $180 as a one-time upfront payment' },
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-black/40 border border-white/5">
                                                    <FiDollarSign className="text-brand-500 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-xs font-black text-white">{item.plan}</p>
                                                        <p className="text-[10px] text-gray-500">{item.earn}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-500 italic pt-2">Commissions are recurring for monthly plans — no cap, no time limit.</p>
                                    </div>

                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">1.3 Lifetime Cookie</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">We use a <span className="text-white font-black">lifetime cookie tracking system</span>. Once someone clicks your affiliate link, they are tracked as your referral permanently — even if they don't subscribe immediately. If they return weeks or months later and subscribe, you still receive credit and commission.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 2. ENROLLMENT */}
                            <section id="enrollment" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">2. Enrollment & Eligibility</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">2.1 How to Enroll</p>
                                        <div className="space-y-3">
                                            {['Visit onlyoptions.us/affiliate', 'Complete the affiliate application form', 'Await approval (2–3 business days)', 'Access dashboard & retrieve your unique link'].map((step, i) => (
                                                <div key={i} className="flex items-center gap-3 text-xs text-gray-400 font-bold">
                                                    <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500 text-[9px] font-black flex-shrink-0">{i + 1}</div>
                                                    {step}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">2.2 Eligibility Requirements</p>
                                        <div className="space-y-3">
                                            {['Be at least 18 years old', 'Valid email address and PayPal account', 'No prohibited marketing practices', 'Comply with all applicable laws'].map((req, i) => (
                                                <div key={i} className="flex items-center gap-3 text-xs text-gray-400 font-bold">
                                                    <FiCheckCircle className="text-brand-500 flex-shrink-0" />
                                                    {req}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                    <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">2.3 Application Approval</p>
                                    <p className="text-xs text-gray-400 leading-relaxed">We reserve the right to approve or reject any application at our sole discretion. Rejection reasons include incomplete information, history of fraud/spam, inappropriate content, or prior violations. Rejected applicants may reapply after 90 days.</p>
                                </div>
                            </section>

                            {/* 3. RESPONSIBILITIES */}
                            <section id="responsibilities" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">3. Affiliate Responsibilities & Promo Guidelines</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">3.1 Promotional Materials</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {['Your unique affiliate tracking link', 'Pre-approved banners & graphics from dashboard', 'Original content (blog, video, social media)', 'Email marketing to opted-in subscribers (CAN-SPAM)'].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-[10px] text-gray-400 font-bold">
                                                    <FiCheckCircle className="text-brand-500 flex-shrink-0" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/20 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">3.2 FTC Required Disclosure</p>
                                        <div className="p-6 rounded-2xl bg-black/40 border border-white/10 font-mono text-[10px] text-gray-400 italic leading-loose">
                                            "This is an affiliate link. I may earn a commission if you subscribe, at no additional cost to you."
                                        </div>
                                        <p className="text-[10px] text-gray-500">This disclosure is required by FTC Endorsement Guidelines and must be included in all promotional content.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">3.3 Brand Usage</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[9px] font-black text-white uppercase mb-2">Permitted</p>
                                                {['Use official logo files from dashboard', 'Refer to us as "OnlyOptions" or "OnlyOptions.us"'].map((t, i) => (
                                                    <div key={i} className="flex gap-2 text-[10px] text-gray-400 font-bold py-1"><FiCheckCircle className="text-brand-500 flex-shrink-0 mt-0.5" />{t}</div>
                                                ))}
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-red-500 uppercase mb-2">Not Permitted</p>
                                                {['Alter or modify our branding', 'Suggest endorsement of your own products'].map((t, i) => (
                                                    <div key={i} className="flex gap-2 text-[10px] text-gray-400 font-bold py-1"><FiXCircle className="text-red-500/50 flex-shrink-0 mt-0.5" />{t}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 4. TRACKING & PAYMENTS */}
                            <section id="tracking" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">4. Tracking, Reporting & Payments</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">4.1 Affiliate Dashboard</p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {['Total link clicks', 'Sign-ups & conversions', 'Active subscriptions', 'Commissions earned', 'Payment history', 'Pending payouts'].map((item, i) => (
                                                <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 text-[9px] font-black text-gray-500 uppercase tracking-widest text-center">{item}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-10 rounded-[2.5rem] bg-brand-500/[0.03] border border-brand-500/10 space-y-6">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">4.3 Payment Schedule</p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[
                                                { label: 'Minimum Payout', val: '$50' },
                                                { label: 'Payment Date', val: '15th of month' },
                                                { label: 'Methods', val: 'PayPal / Direct Deposit' },
                                            ].map((item, i) => (
                                                <div key={i} className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center">
                                                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2">{item.label}</p>
                                                    <p className="text-lg font-black text-white">{item.val}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 rounded-xl bg-black/40 border border-white/5 border-l-2 border-l-brand-500">
                                            <p className="text-[10px] font-black text-white uppercase mb-1 italic">Payment Timeline Example:</p>
                                            <p className="text-[10px] text-gray-500">Commissions earned in January → pending through February → approved March 1st → paid March 15th (if balance ≥ $50).</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 5. PROHIBITED PRACTICES */}
                            <section id="prohibited" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">5. Prohibited Marketing Practices</h2>
                                </div>
                                <div className="p-10 rounded-[2.5rem] bg-red-500/5 border border-red-500/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 text-red-500"><FiAlertTriangle className="w-32 h-32" /></div>
                                    <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-6">Any of the following results in immediate termination:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                                        {[
                                            { cat: '5.1 Fraudulent Activity', items: ['Self-referrals using your own link', 'Cookie stuffing / fake traffic', 'Credit card fraud for fake subscriptions'] },
                                            { cat: '5.2 Spam', items: ['Unsolicited emails promoting the Service', 'Spam comments on forums or social media', 'Purchased or scraped email lists'] },
                                            { cat: '5.3 Paid Ads (Brand)', items: ['Bidding on "OnlyOptions" in PPC ads', 'Using our brand name in ad copy without permission', 'Trademark-infringing domain names'] },
                                            { cat: '5.4 False Claims', items: ['Claiming to be an official representative', 'Guaranteeing specific returns or win rates', 'Posting fake reviews or testimonials'] },
                                        ].map((group, gi) => (
                                            <div key={gi} className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                                                <p className="text-[9px] font-black text-red-500/70 uppercase tracking-widest">{group.cat}</p>
                                                {group.items.map((item, i) => (
                                                    <div key={i} className="flex gap-2 text-[10px] text-gray-500 font-bold">
                                                        <FiXCircle className="text-red-500/40 flex-shrink-0 mt-0.5" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* 6. REFUNDS & CLAWBACKS */}
                            <section id="refunds" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">6. Refunds, Chargebacks & Clawbacks</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { t: '6.1 Refunds', badge: 'red', d: 'If a customer uses the 7-day money-back guarantee, the commission on that referral is reversed. If already paid, it is deducted from your next payout.' },
                                        { t: '6.2 Chargebacks', badge: 'red', d: 'All commissions related to a disputed and upheld chargeback are reversed. Affiliates with chargeback rates above 5% may be terminated.' },
                                        { t: '6.3 Cancellations', badge: 'brand', d: 'If a customer cancels, commissions stop the next cycle. Previously approved commissions are NOT clawed back. If they resubscribe, commissions resume via lifetime cookie.' },
                                    ].map((item, i) => (
                                        <div key={i} className={cn("p-8 rounded-3xl border space-y-4", item.badge === 'red' ? 'bg-red-500/5 border-red-500/20' : 'bg-brand-500/5 border-brand-500/20')}>
                                            <p className={cn("text-xs font-black uppercase tracking-[0.2em]", item.badge === 'red' ? 'text-red-500' : 'text-brand-500')}>{item.t}</p>
                                            <p className="text-[10px] text-gray-400 leading-relaxed font-bold">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 7. TERMINATION */}
                            <section id="termination" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">7. Term & Termination</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">7.2 Termination by Affiliate</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">You may exit at any time via your affiliate dashboard or by emailing <span className="text-white font-black">partnerships@onlyoptions.us</span>. Pending (unapproved) commissions are forfeited; approved commissions are paid on the next scheduled payment date if balance ≥ $50.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 space-y-4">
                                        <p className="text-red-500 font-black text-xs uppercase tracking-[0.2em]">7.3 Termination by OnlyOptions</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">We may terminate immediately for Agreement violations, fraud, excessive chargebacks, brand damage, or 12+ months of inactivity. Upon termination for cause, all commissions may be forfeited and reapplication may be blocked.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 8. RELATIONSHIP */}
                            <section id="relationship" className="space-y-6 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">8. Relationship of the Parties</h2>
                                </div>
                                <div className="p-10 rounded-[3rem] fintech-glass border border-white/10 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-500"><FiUsers className="w-6 h-6" /></div>
                                        <p className="text-lg font-black text-white uppercase tracking-tight">You and OnlyOptions are independent contractors.</p>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">This Agreement does not create an employment, partnership, joint venture, or agency relationship. You are solely responsible for your own taxes, compliance with applicable laws, and any liabilities arising from your promotional activities.</p>
                                </div>
                            </section>

                            {/* 9. TAX */}
                            <section id="tax" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">9. Tax Reporting & Compliance</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">9.1 U.S. Affiliates</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">Affiliates earning $600+ per calendar year will receive a Form 1099-MISC. A completed W-9 is required for direct deposit.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">9.2 International Affiliates</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">International affiliates are responsible for their own tax reporting. We do not withhold taxes on international payments. PayPal is the only payment method available.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 10. LIABILITY */}
                            <section id="liability" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">10. Disclaimers & Limitation of Liability</h2>
                                </div>
                                <div className="p-10 rounded-[3rem] fintech-glass border border-white/10 space-y-6 text-center">
                                    <p className="text-xs font-black text-brand-500 uppercase tracking-[0.3em]">Mandatory Notice</p>
                                    <p className="text-sm font-black text-white uppercase tracking-widest leading-loose">
                                        ONLYOPTIONS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR PARTICIPATION IN THE AFFILIATE PROGRAM, INCLUDING LOST PROFITS OR TECHNICAL FAILURES.
                                    </p>
                                    <p className="text-xs text-gray-500 italic">Total liability is capped at total commissions paid to you in the 12 months preceding the claim.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-brand-500/5 border border-brand-500/20">
                                    <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-4">10.2 Program Changes</p>
                                    <p className="text-xs text-gray-400 leading-relaxed">We may modify pricing, commission rates for new referrals, or program features. Existing referrals remain at original commission rates. The Affiliate Program may be discontinued with <span className="text-white font-black">30 days' notice</span>.</p>
                                </div>
                            </section>

                            {/* 11 & 12. MODIFICATIONS & CONFIDENTIALITY */}
                            <section id="modifications" className="space-y-8 scroll-mt-32">
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">11 & 12. Modifications & Confidentiality</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">11. Modifications</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">We may update this Agreement by posting a new version with a "Last Updated" date. Material changes will be communicated via email. Continued participation constitutes acceptance.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
                                        <p className="text-brand-500 font-black text-xs uppercase tracking-[0.2em]">12. Confidentiality</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">Conversion rates, commission structures, and tracking technology visible in your dashboard are confidential. Do not disclose, publish, or share with third parties. This obligation survives termination.</p>
                                    </div>
                                </div>
                            </section>

                            {/* 13. GOVERNING LAW */}
                            <section id="governing-law" className="space-y-6 scroll-mt-32 text-center">
                                <div className="flex items-center gap-4 justify-center">
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">13. Governing Law & Disputes</h2>
                                    <span className="w-12 h-px bg-brand-500/30"></span>
                                </div>
                                <p className="text-sm text-gray-400 italic leading-loose max-w-2xl mx-auto">
                                    This Agreement is governed by the laws of the State of Delaware, United States. Disputes shall be resolved through binding arbitration under American Arbitration Association rules. Class action participation is waived.
                                </p>
                            </section>

                            {/* 14. CONTACT */}
                            <section id="contact" className="pt-24 border-t border-white/5 scroll-mt-32">
                                <h2 className="text-2xl font-black text-white mb-8 uppercase">14. Contact Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Affiliate Program Manager</p>
                                            <a href="mailto:partnerships@onlyoptions.us" className="text-xl font-black text-white hover:text-brand-500 transition-colors">partnerships@onlyoptions.us</a>
                                        </div>
                                        <div className="space-y-4 pt-6 border-t border-white/5">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">General Support</p>
                                            <a href="mailto:support@onlyoptions.us" className="text-lg font-black text-white hover:text-brand-400 transition-colors">support@onlyoptions.us</a>
                                        </div>
                                    </div>
                                    <div className="p-10 rounded-3xl bg-brand-500/5 border border-brand-500/20 space-y-4 flex flex-col justify-center">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">Affiliate Dashboard</p>
                                        <p className="text-2xl font-black text-white">onlyoptions.us/affiliate</p>
                                        <div className="pt-4 border-t border-brand-500/10">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500 mb-2">Legal Entity</p>
                                            <p className="text-white font-black">OnlyOptions LLC</p>
                                            <p className="text-xs text-gray-500">Registered in Delaware, USA</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 p-10 rounded-[3rem] bg-brand-500/5 border border-brand-500/20 text-center space-y-4">
                                    <p className="text-brand-500 font-black text-xs uppercase tracking-[0.3em]">15. Acceptance of Agreement</p>
                                    <p className="text-sm font-black text-white uppercase tracking-widest leading-loose">
                                        BY CLICKING "I AGREE" DURING ENROLLMENT OR PARTICIPATING IN THE PROGRAM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS AFFILIATE AGREEMENT.
                                    </p>
                                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.5em] pt-4">End of Affiliate Agreement · Last Updated: February 17, 2026</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </StandardSection>

            <StandardCTA
                title="Start Earning 30% Today"
                subtitle="Join the OnlyOptions affiliate program and earn recurring commissions on every referral — forever."
                className="mt-0"
            />
        </div>
    );
};

export default AffiliateProgram;
