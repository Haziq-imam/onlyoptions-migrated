import React from 'react';
import Button from '../../ui/Button/Button';
import StandardSection from '../../ui/Layout/StandardSection';
import SectionHeader from '../../ui/Layout/SectionHeader';

interface HeroSectionProps {
    title: React.ReactNode;
    subtitle: string;
    badgeText?: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    image?: string;
    imageAlt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    badgeText,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    image,
    imageAlt
}) => {
    return (
        <StandardSection spacing="xl" divider="bottom" className="min-h-[60vh] flex items-center">
            <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2' : ''} gap-16 items-center`}>
                <div className="space-y-8 text-left">
                    {badgeText && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-[10px] font-black uppercase tracking-widest mb-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                            {badgeText}
                        </div>
                    )}

                    <SectionHeader
                        title={title}
                        description={subtitle}
                        align="left"
                    />

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            variant="primary"
                            size="lg"
                            href={primaryCtaLink}
                            className="px-10 h-16 rounded-2xl font-black text-lg shadow-[0_0_50px_rgba(32,109,254,0.25)]"
                        >
                            {primaryCtaText}
                        </Button>

                        {secondaryCtaText && secondaryCtaLink && (
                            <Button
                                variant="outline"
                                size="lg"
                                href={secondaryCtaLink}
                                className="px-10 h-16 rounded-2xl font-black text-lg border-white/10 hover:bg-white/5"
                            >
                                {secondaryCtaText}
                            </Button>
                        )}
                    </div>
                </div>

                {image && (
                    <div className="relative group lg:ml-auto">
                        <div className="absolute -inset-20 bg-brand-500/10 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
                        <img
                            src={image}
                            alt={imageAlt || "OnlyOptions"}
                            className="relative w-full h-auto max-h-[500px] object-contain object-top drop-shadow-[0_0_40px_rgba(32,109,254,0.15)]"
                        />
                    </div>
                )}
            </div>
        </StandardSection>
    );
};

export default HeroSection;
