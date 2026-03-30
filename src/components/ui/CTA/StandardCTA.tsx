import React from 'react';
import { Check } from 'lucide-react';
import Button from '../Button/Button';
import AppStoreButtons from '../AppStoreButtons/AppStoreButtons';
import StandardSection from '../Layout/StandardSection';
import { cn } from '../Card/Card';

interface StandardCTAProps {
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    buttonText?: string;
    showTrustSignals?: boolean;
    className?: string;
}

const StandardCTA: React.FC<StandardCTAProps> = ({
    title = "Join OnlyOptions Today",
    subtitle = "Experience the most innovative options signaling platform. Full premium membership features included immediately.",
    buttonText = "Join OnlyOptions Premium",
    showTrustSignals = true,
    className
}) => {
    return (
        <StandardSection className={cn("py-16 md:py-32 bg-brand-500", className)}>
            <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
                <div className="space-y-4 md:space-y-6">
                    <h2 className="text-3xl md:text-6xl font-black text-black leading-tight">
                        {title}
                    </h2>
                    <p className="text-white text-base md:text-xl font-bold max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 md:gap-8">
                    <Button
                        href="/membership"
                        variant="secondary"
                        className="w-full max-w-md px-4 md:px-12 h-auto min-h-[4rem] md:h-20 py-3 md:py-0 rounded-2xl font-black text-xs sm:text-sm md:text-base uppercase tracking-wider sm:tracking-widest shadow-2xl bg-black text-white hover:bg-black/90 border-none whitespace-normal text-center flex-col sm:flex-row leading-snug"
                    >
                        {buttonText}
                    </Button>

                    <AppStoreButtons variant="solid" />

                    {showTrustSignals && (
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 opacity-70">
                            {[
                                "1,247+ active members",
                                "70.3% win rate",
                                "Flexible Membership",
                                "Satisfaction Guarantee"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-black/100 font-black text-[11px] md:text-[12px] uppercase tracking-widest">
                                    <Check className="w-3 h-3" /> {text}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </StandardSection>
    );
};

export default StandardCTA;
