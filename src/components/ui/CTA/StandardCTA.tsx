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
    title = "Start Your Free Trial Today",
    subtitle = "No credit card. No auto-charge. Full access to live signals from day one.",
    buttonText = "Start Free Trial — No Credit Card",
    showTrustSignals = true,
    className
}) => {
    return (
        <StandardSection className={cn("py-32 bg-brand-500", className)}>
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-black text-black leading-tight">
                        {title}
                    </h2>
                    <p className="text-white text-lg md:text-xl font-bold max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <Button
                        href="/free-trial"
                        variant="secondary"
                        className="px-12 h-20 rounded-2xl font-black text-base uppercase tracking-widest shadow-2xl bg-black text-white hover:bg-black/90 border-none"
                    >
                        {buttonText}
                    </Button>

                    <AppStoreButtons variant="solid" />

                    {showTrustSignals && (
                        <div className="flex flex-wrap justify-center gap-8 pt-4 opacity-70">
                            {[
                                "1,247+ active members",
                                "70.3% win rate",
                                "Cancel anytime",
                                "7-day money-back guarantee"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-black/100 font-black text-[12px] uppercase tracking-widest">
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
