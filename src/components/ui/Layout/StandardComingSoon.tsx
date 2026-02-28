import React from 'react';
import StandardSection from './StandardSection';
import HeroSection from '../Hero/HeroSection';
import StandardCTA from '../CTA/StandardCTA';
import { Card } from '../Card/Card';
import SectionHeader from './SectionHeader';
import mockupImg from '../../../assets/pages images/signal-looklike.png';

interface StandardComingSoonProps {
    title: string;
    subtitle: string;
    category: string;
    badgeText?: string;
}

const StandardComingSoon: React.FC<StandardComingSoonProps> = ({
    title,
    subtitle,
    category,
    badgeText = "Course Material"
}) => {
    return (
        <div className="bg-black">
            <HeroSection
                title={<>{title.split(' ').slice(0, -1).join(' ')} <br /><span className="text-brand-500">{title.split(' ').slice(-1)}</span></>}
                subtitle={subtitle}
                primaryCtaText="Join Waitlist"
                primaryCtaLink="/signup"
                image={mockupImg}
                badgeText={badgeText}
            />

            <StandardSection variant="institutional" dotGrid spacing="lg" divider="bottom">
                <div className="max-w-4xl mx-auto">
                    <Card variant="glass" className="p-16 border-white/5 bg-white/[0.01] text-center space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <span className="text-9xl font-black text-brand-500">?</span>
                        </div>

                        <SectionHeader
                            title="Preparation in Progress"
                            description={`Our analysts are currently finalizing the ${category.toLowerCase()} curriculum. This deep-dive module will include institutional strategies, live execution examples, and precise risk management protocols.`}
                        />

                        <div className="pt-8">
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-brand-500/10 border border-brand-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                </span>
                                <span className="text-[10px] font-black text-brand-500 uppercase tracking-widest">Available Q2 2026</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            <StandardCTA
                title="Don't Trade in the Dark"
                subtitle="Join our Discord today and start receiving live signals while we finalize the curriculum."
            />
        </div>
    );
};

export default StandardComingSoon;
