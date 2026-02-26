import React from 'react';
import Button from '../../ui/Button/Button';

interface CTASectionProps {
    title: string;
    subtitle: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
    title,
    subtitle,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink
}) => {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-brand-900/40 to-black p-12 md:p-16 border border-brand-800/30 text-center shadow-[0_0_50px_rgba(0,194,168,0.1)]">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                    {title}
                </h2>
                <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.location.href = primaryCtaLink}
                    >
                        {primaryCtaText}
                    </Button>
                    {secondaryCtaText && secondaryCtaLink && (
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => window.location.href = secondaryCtaLink}
                        >
                            {secondaryCtaText}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CTASection;
