"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png';
import Button from '../ui/Button/Button';
import { Menu, X } from 'lucide-react';
import DownloadAppModal from '../ui/AppRedirect/DownloadAppModal';

const triggerAppStoreAction = (openModal: () => void) => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const iosUrl = "https://apps.apple.com/us/app/onlyoptions-options-signals/id6760183640";
    const androidUrl = "https://play.google.com/store/apps/details?id=us.onlyoptions.android&pcampaignid=web_share";

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        window.location.href = iosUrl;
    } else if (/android/i.test(userAgent)) {
        window.location.href = androidUrl;
    } else {
        openModal();
    }
};

const Layout = ({ children }: { children?: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Provide a global way to open the modal (optional but handy)
    useEffect(() => {
        const handleEvent = () => triggerAppStoreAction(openModal);
        window.addEventListener('open-app-modal', handleEvent);
        return () => window.removeEventListener('open-app-modal', handleEvent);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Close menu on resize if above mobile breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Performance', path: '/performance' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Reviews', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500/30 bg-gray-950">
            {/* Unique Floating Header */}
            <div className="fixed top-3 md:top-6 inset-x-0 z-50 px-3 md:px-12">
                <header className="max-w-7xl mx-auto fintech-glass rounded-2xl py-2.5 md:py-3 px-4 md:px-6 flex items-center justify-between shadow-2xl relative z-50 border border-white/5">
                    <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity shrink-0">
                        <Image 
                            src={Logo} 
                            alt="OnlyOptions" 
                            className="h-10 md:h-12 w-auto object-contain shrink-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.35)] brightness-110" 
                            priority 
                        />
                    </Link>

                    <nav className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        {navLinks.map((link) => (
                            <Link key={link.path} href={link.path} className="hover:text-brand-400 transition-colors">{link.name}</Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 md:gap-4 shrink-0">
                        <Button
                            onClick={() => triggerAppStoreAction(openModal)}
                            size="sm"
                            className="px-4 md:px-6 py-2 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-wider relative overflow-hidden group border-0 bg-brand-500 animate-glow whitespace-nowrap"
                        >
                            <span className="relative z-10">Get Access</span>
                        </Button>
                        <button
                            className="lg:hidden p-1.5 md:p-2 text-gray-400 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </header>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed inset-x-3 top-[76px] md:top-[84px] z-40 transition-all duration-300 transform ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="fintech-glass rounded-2xl p-6 shadow-2xl border border-white/10 max-h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden custom-scrollbar">
                        <nav className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">
                            {navLinks.map((link) => (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    className="hover:text-brand-400 transition-colors py-2 border-b border-white/5"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            <main className="flex-1">
                {children}
            </main>

            <footer className="border-t border-white/5 py-12 px-6 md:px-12 bg-gray-950/80 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-20" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-12">
                        {/* Brand & Mission */}
                        <div className="lg:col-span-4 space-y-8">
                            <Link href="/" className="flex items-center gap-3 hover:opacity-100 transition-opacity">
                                <Image 
                                    src={Logo} 
                                    alt="OnlyOptions" 
                                    className="h-12 w-auto opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                                />
                            </Link>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                Empowering retail traders with institutional-grade options analysis and real-time signals. Your edge in the derivatives market starts here.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-400 hover:border-brand-500/30 transition-all">
                                    <span className="sr-only">Discord</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-400 hover:border-brand-500/30 transition-all">
                                    <span className="sr-only">X (Twitter)</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Fast Links */}
                        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-12">
                            <div className="space-y-6">
                                <h5 className="font-black text-white uppercase tracking-[0.2em] text-[10px]">Education</h5>
                                <ul className="space-y-4 text-xs font-bold text-gray-500">
                                    <li><a href="/options-trading-101" className="hover:text-brand-400 transition-colors">Options 101</a></li>
                                    <li><a href="/0dte-options-strategy-complete-guide" className="hover:text-brand-400 transition-colors">0DTE Guide</a></li>
                                    <li><a href="/options-signals-for-beginners" className="hover:text-brand-400 transition-colors">Trading Signals</a></li>
                                    <li><a href="/best-brokers-for-options-trading" className="hover:text-brand-400 transition-colors">Brokers</a></li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h5 className="font-black text-white uppercase tracking-[0.2em] text-[10px]">Platform</h5>
                                <ul className="space-y-4 text-xs font-bold text-gray-500">
                                    <li><a href="/membership" className="hover:text-brand-400 transition-colors">Join Premium</a></li>
                                    <li><a href="/performance" className="hover:text-brand-400 transition-colors">Track Performance</a></li>
                                    <li><a href="/pricing" className="hover:text-brand-400 transition-colors">Pricing Plans</a></li>
                                    <li><a href="/how-it-works" className="hover:text-brand-400 transition-colors">How It Works</a></li>
                                    <li><a href="/testimonials" className="hover:text-brand-400 transition-colors">Success Stories</a></li>
                                    <li><a href="/affiliate-program" className="hover:text-brand-400 transition-colors">Affiliate Program</a></li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h5 className="font-black text-white uppercase tracking-[0.2em] text-[10px]">Resources</h5>
                                <ul className="space-y-4 text-xs font-bold text-gray-500">
                                    <li><a href="/blog" className="hover:text-brand-400 transition-colors">Market Blog</a></li>
                                    <li><a href="/faq" className="hover:text-brand-400 transition-colors">Help Center</a></li>
                                    <li><a href="/about" className="hover:text-brand-400 transition-colors">About Us</a></li>
                                    <li><a href="/contact" className="hover:text-brand-400 transition-colors">Support</a></li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h5 className="font-black text-white uppercase tracking-[0.2em] text-[10px]">Legal</h5>
                                <ul className="space-y-4 text-xs font-bold text-gray-500">
                                    <li><a href="/terms-of-service" className="hover:text-brand-400 transition-colors">Terms</a></li>
                                    <li><a href="/privacy" className="hover:text-brand-400 transition-colors">Privacy</a></li>
                                    <li><a href="/risk-disclaimer" className="hover:text-brand-400 transition-colors">Risks</a></li>
                                    <li><a href="/refund-policy" className="hover:text-brand-400 transition-colors">Refunds</a></li>
                                    <li><a href="/sitemap" className="hover:text-white transition-colors underline decoration-brand-500/50 underline-offset-4">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                            <span>© 2026 OnlyOptions.us</span>
                            <span className="hidden md:inline w-1 h-1 rounded-full bg-gray-800" />
                            <span className="text-gray-700 hidden md:inline">Registered Institutional Entity</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[
                                    { color: 'bg-brand-500', initial: 'JD' },
                                    { color: 'bg-indigo-500', initial: 'MS' },
                                    { color: 'bg-emerald-500', initial: 'RK' },
                                    { color: 'bg-orange-500', initial: 'AL' }
                                ].map((user, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-gray-950 ${user.color} flex items-center justify-center text-[8px] font-black text-white`}>
                                        {user.initial}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                                Joined by <span className="text-white">12,400+</span> Traders
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-[9px] font-bold text-gray-700 uppercase tracking-[0.3em] max-w-2xl mx-auto leading-loose">
                            Disclaimer: High risk. Past performance does not guarantee future results. Only trade with capital you can afford to lose. We are an educational research provider.
                        </p>
                    </div>
                </div>
            </footer>

            <DownloadAppModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Layout;
