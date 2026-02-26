import Button from '../../ui/Button/Button';
import AppStoreButtons from '../../ui/AppStoreButtons/AppStoreButtons';

const FinalCTASection = () => (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[rgb(32,109,254)]/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,109,254,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,109,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,109,254,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                Start Trading With a <br />
                <span className="text-[rgb(32,109,254)]">70.3% Win Rate</span> Edge
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                7-day free trial. No credit card. Full access from day one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Button href="/free-trial" size="lg" className="w-full sm:w-auto px-10 h-16 rounded-2xl font-black text-lg shadow-[0_0_40px_rgba(32,109,254,0.35)] shrink-0">
                    Start Free Trial — No Credit Card Required
                </Button>
            </div>

            <div className="flex justify-center pt-2">
                <AppStoreButtons variant="glass" />
            </div>

            <div className="flex items-center justify-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest pt-6 border-t border-[rgb(32,109,254)]/20">
                <span>1,247+ Active Members</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[rgb(32,109,254)]" />
                <span>70.3% Win Rate</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[rgb(32,109,254)]" />
                <span>$60/Month</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[rgb(32,109,254)]" />
                <span>Cancel Anytime</span>
            </div>
        </div>
    </section>
);

export default FinalCTASection;
