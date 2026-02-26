import { Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Button from '../ui/Button/Button';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500/30">
            {/* Unique Floating Header */}
            <div className="fixed top-6 inset-x-0 z-50 px-6 md:px-12 pointer-events-none">
                <header className="max-w-7xl mx-auto fintech-glass rounded-2xl py-3 px-6 flex items-center justify-between pointer-events-auto shadow-2xl">
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="OnlyOptions" className="h-8 w-auto" />
                        <span className="text-xl font-black tracking-tight text-white hidden sm:block">OnlyOptions</span>
                    </div>

                    <nav className="hidden lg:flex gap-8 text-xs font-black uppercase tracking-widest text-gray-400">
                        <a href="/" className="hover:text-brand-400 transition-colors">Home</a>
                        <a href="/pricing" className="hover:text-brand-400 transition-colors">Pricing</a>
                        <a href="/performance" className="hover:text-brand-400 transition-colors">Performance</a>
                        <a href="/testimonials" className="hover:text-brand-400 transition-colors">Results</a>
                        <a href="/how-it-works" className="hover:text-brand-400 transition-colors">Guide</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="/signup" className="text-xs font-black uppercase tracking-widest text-white hover:text-brand-400 transition-colors hidden md:block">Log In</a>
                        <Button href="/signup" size="sm" className="px-6 rounded-xl font-black text-[10px] uppercase tracking-wider">
                            Join Discord
                        </Button>
                    </div>
                </header>
            </div>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="border-t border-white/5 py-20 px-6 md:px-12 bg-gray-950/50 noise-bg">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="space-y-6 max-w-sm">
                        <div className="flex items-center gap-3">
                            <img src={Logo} alt="OnlyOptions" className="h-8 w-auto opacity-80" />
                            <span className="text-xl font-black tracking-tight text-white">OnlyOptions</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Premium options trading signals delivered instantly to your device. Institutional quality research for the retail trader.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
                        <div className="space-y-4">
                            <h5 className="font-bold text-white uppercase tracking-widest text-xs">Platform</h5>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li><a href="/performance" className="hover:text-white transition-colors">Performance</a></li>
                                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="/testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-bold text-white uppercase tracking-widest text-xs">Resources</h5>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                                <li><a href="/blog" className="hover:text-white transition-colors">Market Intelligence</a></li>
                                <li><a href="/about" className="hover:text-white transition-colors">Our Approach</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-bold text-white uppercase tracking-widest text-xs">Legal</h5>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms</a></li>
                                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a></li>
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
