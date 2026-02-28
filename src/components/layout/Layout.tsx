import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Button from '../ui/Button/Button';
import { Menu, X } from 'lucide-react';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

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

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Performance', path: '/performance' },
        { name: 'Guide', path: '/how-it-works' },
        { name: 'Reviews', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500/30">
            {/* Unique Floating Header */}
            <div className="fixed top-6 inset-x-0 z-50 px-6 md:px-12">
                <header className="max-w-7xl mx-auto fintech-glass rounded-2xl py-3 px-6 flex items-center justify-between shadow-2xl relative z-50">
                    <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img src={Logo} alt="OnlyOptions" className="h-10 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                    </a>

                    <nav className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                        {navLinks.map((link) => (
                            <a key={link.path} href={link.path} className="hover:text-brand-400 transition-colors">{link.name}</a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="/signup" className="text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-brand-400 transition-colors hidden md:block border border-white/10 px-4 py-2 rounded-xl">Sign Up</a>
                        <a href="/login" className="text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-brand-400 transition-colors hidden md:block">Log In</a>
                        <Button href="/free-trial" size="sm" className="px-6 rounded-xl font-black text-[10px] uppercase tracking-wider relative overflow-hidden group">
                            <span className="relative z-10">Free Trial</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-300 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Button>
                        <button
                            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </header>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed inset-x-6 top-[100px] z-40 transition-all duration-300 transform ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="fintech-glass rounded-2xl p-6 shadow-2xl border border-white/10">
                        <nav className="flex flex-col gap-6 text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">
                            {navLinks.map((link) => (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    className="hover:text-brand-400 transition-colors py-1 border-b border-white/5"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/signup"
                                className="text-white hover:text-brand-400 transition-colors md:hidden py-1 border-b border-white/5"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign Up
                            </a>
                            <a
                                href="/login"
                                className="text-white hover:text-brand-400 transition-colors md:hidden py-1 border-b border-white/5"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Log In
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="border-t border-white/5 py-20 px-6 md:px-12 bg-gray-950/50 noise-bg">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="space-y-6 max-w-sm">
                        <a href="/" className="flex items-center gap-3 hover:opacity-100 transition-opacity">
                            <img src={Logo} alt="OnlyOptions" className="h-10 w-auto opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                        </a>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Premium options trading signals delivered instantly to your device. Institutional quality research for the retail trader.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
                        <div className="space-y-4">
                            <h5 className="font-bold text-white uppercase tracking-widest text-xs">Platform</h5>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li><a href="/performance" className="hover:text-white transition-colors">Performance Dashboard</a></li>
                                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
                                <li><a href="/testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
                                <li><a href="/free-trial" className="hover:text-brand-400 font-bold transition-colors">Start Free Trial</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-bold text-white uppercase tracking-widest text-xs">Resources</h5>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                                <li><a href="/blog" className="hover:text-white transition-colors">Trading Blog</a></li>
                                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-bold text-white uppercase tracking-widest text-xs">Support</h5>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                                <li><a href="/login" className="hover:text-white transition-colors">Log In</a></li>
                                <li><a href="/signup" className="hover:text-white transition-colors">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-bold uppercase tracking-widest">
                    <p>© 2026 OnlyOptions.us. All rights reserved.</p>
                    <p>Trading options involves significant risk of loss.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
