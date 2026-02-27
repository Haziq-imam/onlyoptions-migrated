import React from 'react';
import Button from '../Button/Button';
import AppStoreButtons from '../AppStoreButtons/AppStoreButtons';
import { cn } from '../Card/Card';

interface StandardCTAProps {
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    buttonText?: string;
    showTrustSignals?: boolean;
    className?: string;
}

const StandardCTA: React.FC<StandardCTAProps> = ({
    title = <>See the Track Record <br /> <span className="text-brand-500">for Yourself</span></>,
    subtitle = "7-day free trial. No credit card. Full access to live signals from day one.",
    buttonText = "Start Free Trial — No Credit Card Required",
    showTrustSignals = true,
    className
}) => {
    return (
        <section className={cn("py-16 md:py-32 px-6 md:px-12 relative overflow-hidden", className)}>
            <div className="max-w-6xl mx-auto border border-white/10 ring-1 ring-white/5 rounded-3xl p-6 md:p-20 relative overflow-hidden bg-gray-950/40 backdrop-blur-3xl group transition-all duration-700 hover:border-brand-500/20">
                {/* Premium Background Layers */}
                <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-16 relative z-10">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 tracking-[-0.04em] leading-[1.1]">
                            {title}
                        </h2>
                        <p className="text-white/60 text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            {subtitle}
                        </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-8 shrink-0 w-full lg:w-auto">
                        <div className="relative group/btn w-full lg:w-auto text-center">
                            <div className="absolute -inset-4 bg-brand-500/20 blur-2xl rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                            <Button
                                href="/free-trial"
                                variant="primary"
                                className="relative w-full lg:w-auto px-8 md:px-12 h-auto min-h-[4rem] py-4 rounded-lg font-black text-base md:text-lg shadow-[0_20px_50px_rgba(32,109,254,0.15)] hover:shadow-brand-500/30 hover:scale-[1.02] transition-all whitespace-normal md:whitespace-nowrap border border-white/10"
                            >
                                {buttonText}
                            </Button>
                        </div>
                        <AppStoreButtons variant="glass" />
                    </div>
                </div>

                {showTrustSignals && (
                    <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border-t border-white/5 pt-10 md:pt-12 relative z-10">
                        {[
                            "1,247+ Active Members",
                            "70.3% Win Rate",
                            "$60/Month",
                            "Cancel Anytime"
                        ].map((text, i) => (
                            <div key={i} className="px-3 md:px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md flex items-center gap-2 md:gap-3 hover:bg-white/[0.05] hover:border-white/10 transition-colors">
                                <div className="w-1 h-1 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(32,109,254,0.8)]" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default StandardCTA;
