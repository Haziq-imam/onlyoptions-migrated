import React from 'react';
import Button from '../../ui/Button/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/Card/Card';
import { Check } from 'lucide-react';

interface PricingTier {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    ctaUrl: string;
    isPopular?: boolean;
}

interface PricingSectionProps {
    heading: string;
    subheading: string;
    tiers: PricingTier[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ heading, subheading, tiers }) => {
    return (
        <section className="py-24 px-6 md:px-12 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">{heading}</h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        {subheading}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <Card
                            key={index}
                            className={`relative h-full flex flex-col p-8 transition-all ${tier.isPopular
                                ? 'border-brand-500 shadow-[0_0_30px_rgba(126,34,206,0.3)] lg:scale-105 z-10 bg-gray-900'
                                : 'border-white/10 hover:border-white/20'
                                }`}
                        >
                            {tier.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <CardHeader className="text-center pb-6 border-b border-white/10">
                                <CardTitle className="text-xl text-brand-300 font-medium mb-2">{tier.name}</CardTitle>
                                <div className="flex justify-center items-baseline gap-1">
                                    <span className="text-5xl font-extrabold">{tier.price}</span>
                                    <span className="text-gray-400 font-medium">/{tier.period}</span>
                                </div>
                                <p className="text-sm text-gray-400 mt-4">{tier.description}</p>
                            </CardHeader>

                            <CardContent className="flex-1 py-8">
                                <ul className="space-y-4">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex gap-3 text-gray-300 items-start">
                                            <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <div className="mt-auto pt-6">
                                <a href={tier.ctaUrl} className="block w-full">
                                    <Button
                                        variant={tier.isPopular ? 'primary' : 'secondary'}
                                        size="lg"
                                        className="w-full h-auto min-h-[3.5rem] py-4 rounded-xl font-black text-base"
                                    >
                                        Select Plan
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
