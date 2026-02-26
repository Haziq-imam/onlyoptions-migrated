import React from 'react';
import Button from '../../ui/Button/Button';

interface HeroSectionProps {
    title: React.ReactNode;
    subtitle: string;
    badgeText?: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    badgeText,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink
}) => {
    return (
        <section className="px-6 md:px-12 py-20 flex flex-col items-center justify-center text-center">
            {badgeText && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                    </span>
                    {badgeText}
                </div>
            )}

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
                {title}
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
                {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
        </section>
    );
};

export default HeroSection;
