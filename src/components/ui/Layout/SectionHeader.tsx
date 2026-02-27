import React from 'react';
import { cn } from '../Card/Card';

interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    label?: string;
    title: string | React.ReactNode;
    description?: string;
    align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    label,
    title,
    description,
    align = 'left',
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                "mb-16 space-y-4",
                align === 'center' ? "text-center mx-auto" : "text-left",
                className
            )}
            {...props}
        >
            {label && (
                <p className="text-brand-500 text-[10px] font-black uppercase tracking-[0.3em]">
                    {label}
                </p>
            )}
            <h2 className={cn(
                "text-3xl md:text-5xl font-black tracking-tight text-white",
                align === 'center' && "mx-auto"
            )}>
                {title}
            </h2>
            {description && (
                <p className={cn(
                    "text-gray-400 text-lg leading-relaxed",
                    align === 'center' ? "max-w-2xl mx-auto" : "max-w-xl"
                )}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
