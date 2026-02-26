import React from 'react';
import { Card, CardTitle, CardContent } from '../../ui/Card/Card';

interface Feature {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface FeatureGridProps {
    heading: string;
    subheading: string;
    features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ heading, subheading, features }) => {
    return (
        <section className="py-20 px-6 md:px-12 bg-black/40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subheading}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="hover:bg-white/5 transition-colors group">
                            {feature.icon && (
                                <div className="text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                            )}
                            <CardTitle className="mb-3 text-xl">{feature.title}</CardTitle>
                            <CardContent className="leading-relaxed">
                                {feature.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
