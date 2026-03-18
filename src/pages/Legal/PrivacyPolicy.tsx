import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiShield, FiLock, FiEye, FiUserCheck, FiGlobe, FiClock, FiFileText, FiServer, FiCreditCard, FiMail, FiInfo } from 'react-icons/fi';
import StandardSection from '../../components/ui/Layout/StandardSection';
import SectionHeader from '../../components/ui/Layout/SectionHeader';
import { Card } from '../../components/ui/Card/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table/Table';

const PolicySection = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) => (
    <div className="space-y-6">
        <div className="flex items-center gap-4 text-brand-500">
            {icon && <div className="p-2 bg-brand-500/10 rounded-lg">{icon}</div>}
            <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tight text-white">{title}</h2>
        </div>
        <div className="text-gray-400 text-sm leading-relaxed space-y-4">
            {children}
        </div>
    </div>
);

const PrivacyPolicy = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Privacy Policy | OnlyOptions</title>
                <meta name="description" content="OnlyOptions Privacy Policy. GDPR & CCPA Compliant. Learn how we protect your personal information, what data we collect, and how we use it to provide our services." />
            </Helmet>

            {/* ── HERO ── */}
            <StandardSection variant="default" spacing="lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-8 text-center">
                    <span className="px-3 py-1 bg-brand-500/10 text-brand-500 border border-brand-500/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2 italic">
                        <FiShield className="text-brand-500" /> GDPR & CCPA Compliant
                    </span>
                    <SectionHeader
                        label="Legal"
                        title={<>Privacy <span className="text-brand-500 italic">Policy</span></>}
                        description="Clear Language • Updated February 2026"
                        align="center"
                        className="mb-0"
                    />
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02] flex flex-col items-center text-center space-y-2">
                        <FiClock className="text-brand-500 mb-2" size={24} />
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Effective Date</p>
                        <h4 className="text-sm font-black italic uppercase tracking-tight text-white">Feb 17, 2026</h4>
                    </Card>
                    <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02] flex flex-col items-center text-center space-y-2">
                        <FiFileText className="text-brand-500 mb-2" size={24} />
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Version</p>
                        <h4 className="text-sm font-black italic uppercase tracking-tight text-white">1.0</h4>
                    </Card>
                    <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02] flex flex-col items-center text-center space-y-2">
                        <FiLock className="text-brand-500 mb-2" size={24} />
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Status</p>
                        <h4 className="text-sm font-black italic uppercase tracking-tight text-green-400">Published</h4>
                    </Card>
                </div>
            </StandardSection>

            {/* ── POLICY CONTENT ── */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="max-w-4xl mx-auto space-y-20 pb-20">
                    
                    <PolicySection title="Introduction" icon={<FiFileText />}>
                        <p>
                            OnlyOptions LLC ("we," "us," "our," or "OnlyOptions") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website at onlyoptions.us (the "Website"), our Discord server, and all related services (collectively, the "Service").
                        </p>
                        <p>
                            By using the Service, you consent to the data practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Service.
                        </p>
                        <div className="bg-brand-500/5 border border-brand-500/20 p-6 rounded-2xl">
                            <h4 className="text-white font-black uppercase text-xs tracking-widest italic mb-4">Your Privacy Rights:</h4>
                            <p className="text-gray-400 text-xs italic">
                                If you are a resident of California, you have specific rights under the California Consumer Privacy Act (CCPA). If you are located in the European Economic Area (EEA) or United Kingdom, you have rights under the General Data Protection Regulation (GDPR). See Section 10 for details.
                            </p>
                        </div>
                    </PolicySection>

                    <PolicySection title="1. Information We Collect" icon={<FiEye />}>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-white font-bold mb-3 italic">1.1 Information You Provide to Us</h4>
                                <p className="mb-4">We collect information that you voluntarily provide when you:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-brand-500">
                                    <li>Create an account (email address, username, password)</li>
                                    <li>Subscribe to our Service (billing information processed by Stripe)</li>
                                    <li>Join our Discord server (Discord username, profile picture)</li>
                                    <li>Contact customer support (email correspondence, support tickets)</li>
                                    <li>Participate in surveys or promotions (survey responses, feedback)</li>
                                    <li>Submit testimonials or reviews (name, testimonial text, optional photo)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-3 italic">1.2 Information Collected Automatically</h4>
                                <p className="mb-4">When you access the Service, we automatically collect certain information, including:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-brand-500">
                                    <li>Device Information: IP address, browser type and version, operating system, device type</li>
                                    <li>Usage Data: Pages visited, time spent on pages, links clicked, navigation paths</li>
                                    <li>Cookies and Tracking Technologies: See Section 6 for details</li>
                                    <li>Location Data: Approximate geographic location based on IP address (country/state level)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-3 italic">1.3 Information from Third Parties</h4>
                                <p className="mb-4">We may receive information about you from third-party services:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-brand-500">
                                    <li>Stripe: Payment processing data, transaction records, billing address</li>
                                    <li>Discord: Username, user ID, server activity (messages, reactions, presence)</li>
                                    <li>Analytics Providers: Google Analytics data (anonymized usage patterns)</li>
                                </ul>
                            </div>
                        </div>
                    </PolicySection>

                    <PolicySection title="2. How We Use Your Information" icon={<FiUserCheck />}>
                        <div className="space-y-6">
                            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                <h4 className="text-white font-black uppercase text-xs tracking-widest italic mb-4">2.1 To Provide and Maintain the Service</h4>
                                <ul className="space-y-2 text-xs italic">
                                    <li>• Process your account registration and manage your subscription</li>
                                    <li>• Deliver options signals and alerts via Discord and/or SMS</li>
                                    <li>• Provide access to our performance dashboard and education library</li>
                                    <li>• Process payments and billing through our payment processor (Stripe)</li>
                                    <li>• Respond to customer support inquiries and technical issues</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                <h4 className="text-white font-black uppercase text-xs tracking-widest italic mb-4">2.2 To Improve and Optimize the Service</h4>
                                <ul className="space-y-2 text-xs italic">
                                    <li>• Analyze usage patterns to improve features and user experience</li>
                                    <li>• Monitor and analyze signal performance and user engagement</li>
                                    <li>• Conduct research and testing to develop new features</li>
                                    <li>• Debug and fix technical errors and security vulnerabilities</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                <h4 className="text-white font-black uppercase text-xs tracking-widest italic mb-4">2.3 To Communicate With You</h4>
                                <ul className="space-y-2 text-xs italic">
                                    <li>• Send transactional emails (account notifications, billing receipts, password resets)</li>
                                    <li>• Deliver service-related communications (signals, alerts, performance updates)</li>
                                    <li>• Send marketing emails about new features or promotions (you may opt out)</li>
                                    <li>• Respond to your questions, feedback, and support requests</li>
                                </ul>
                            </div>
                        </div>
                    </PolicySection>

                    <PolicySection title="3. How We Share Your Information" icon={<FiGlobe />}>
                        <p>We do not sell your personal information to third parties. We may share your information in the following circumstances:</p>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold italic underline decoration-brand-500/20 underline-offset-4">3.1 Service Providers</h4>
                            <p>We share information with trusted third-party service providers who perform services on our behalf: Stripe (Payments), Discord (Community), AWS (Hosting), Google Analytics (Analytics), SendGrid (Email), and Twilio (SMS Relay).</p>
                        </div>
                    </PolicySection>

                    <PolicySection title="4. Data Retention" icon={<FiClock />}>
                        <p>We retain your personal information for as long as necessary to provide the Service and fulfill the purposes outlined in this Privacy Policy.</p>
                        <ul className="list-disc pl-5 space-y-4 marker:text-brand-500">
                            <li><strong>Active Accounts:</strong> We retain all core identifiers and usage logs.</li>
                            <li><strong>Cancelled Accounts:</strong> For tax purposes, billing and transaction records are kept for 7 years. Core account credentials are deleted within 30 days of closure.</li>
                            <li><strong>Legal Holds:</strong> We may retain information longer if required by law or to investigate terms violations.</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="5. Data Security" icon={<FiLock />}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-brand-500/5 border border-brand-500/10 rounded-2xl space-y-4">
                                <h4 className="text-white font-black uppercase text-xs tracking-widest italic flex items-center gap-2">
                                    <FiServer className="text-brand-500" /> Technical Safeguards
                                </h4>
                                <p className="text-gray-400 text-xs italic leading-relaxed">
                                    SSL/TLS encryption for all data-in-transit, encrypted storage at rest, and secure password hashing using bcrypt with salt.
                                </p>
                            </div>
                            <div className="p-6 bg-brand-500/5 border border-brand-500/10 rounded-2xl space-y-4">
                                <h4 className="text-white font-black uppercase text-xs tracking-widest italic flex items-center gap-2">
                                    <FiCreditCard className="text-brand-500" /> Payment Security
                                </h4>
                                <p className="text-gray-400 text-xs italic leading-relaxed">
                                    We do not store full credit card data. All payments are handled by Stripe, a PCI-DSS Level 1 certified processor.
                                </p>
                            </div>
                        </div>
                    </PolicySection>

                    <PolicySection title="6. Cookies" icon={<FiInfo />}>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Purpose</TableHead>
                                        <TableHead>Duration</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { t: "Essential", p: "Login & auth", d: "Session" },
                                        { t: "Functional", p: "Remember themes", d: "1 Year" },
                                        { t: "Analytics", p: "Google Analytics", d: "2 Years" },
                                        { t: "Marketing", p: "Ad effectiveness", d: "90 Days" },
                                    ].map((row, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell label="Type" className="text-white font-black text-xs italic">{row.t}</TableCell>
                                            <TableCell label="Purpose" className="text-gray-400 text-xs">{row.p}</TableCell>
                                            <TableCell label="Duration" className="text-brand-500 font-bold text-xs">{row.d}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </PolicySection>

                    <PolicySection title="10. Your Privacy Rights" icon={<FiUserCheck />}>
                        <div className="space-y-6">
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                                <h4 className="text-white md:text-xl font-black italic uppercase tracking-widest mb-4">CCPA (California Residents)</h4>
                                <p className="text-xs mb-4">Request detailed info, deletion, or non-discrimination regarding your data.</p>
                                <p className="text-gray-500 text-xs italic leading-relaxed">To exercise these rights, email privacy@onlyoptions.us with "CCPA Request" in the subject line.</p>
                            </div>
                            <div className="bg-brand-500/[0.03] p-8 rounded-3xl border border-brand-500/10">
                                <h4 className="text-white md:text-xl font-black italic uppercase tracking-widest mb-4">GDPR (European Users)</h4>
                                <p className="text-xs mb-4">Right to access, rectification, erasure (the "right to be forgotten"), and data portability.</p>
                                <p className="text-gray-500 text-xs italic leading-relaxed">To exercise these rights, email privacy@onlyoptions.us with "GDPR Request" in the subject line. We respond within 30 days.</p>
                            </div>
                        </div>
                    </PolicySection>

                    <PolicySection title="14. Contact Us" icon={<FiMail />}>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                            <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-brand-500 uppercase tracking-widest">Privacy Requests</p>
                                    <p className="text-white font-bold italic">privacy@onlyoptions.us</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-brand-500 uppercase tracking-widest">Customer Support</p>
                                    <p className="text-white font-bold italic">support@onlyoptions.us</p>
                                </div>
                            </div>
                            <p className="text-[10px] text-gray-600 italic border-t border-white/5 pt-6">
                                OnlyOptions LLC • Data Protection Officer • Last Updated: February 17, 2026
                            </p>
                        </div>
                    </PolicySection>

                </div>
            </StandardSection>
        </div>
    );
};

export default PrivacyPolicy;
