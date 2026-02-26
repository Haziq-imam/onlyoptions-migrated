import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'institutional' | 'edged' | 'accent';
    hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', hover = true, ...props }, ref) => {

        const baseStyles = "rounded-2xl border transition-all duration-500 overflow-hidden";

        const variants = {
            default: "bg-gray-900/40 border-white/5 backdrop-blur-sm shadow-xl",
            glass: "fintech-glass border-none",
            institutional: "bg-gray-950 border-brand-500/20 institutional-shimmer",
            edged: "edged-cut bg-gray-900/60 border-white/10 backdrop-blur-xl",
            accent: "bg-gray-900/80 border-white/5 accent-corner"
        };

        const hoverStyles = hover ? "hover:scale-[1.01] hover:bg-white/[0.04] hover:border-brand-500/30 shadow-2xl" : "";

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], hoverStyles, className)}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 pb-2", className)} {...props} />
    )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3 ref={ref} className={cn("text-2xl font-bold leading-none tracking-tight text-white", className)} {...props} />
    )
);
CardTitle.displayName = "CardTitle";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("p-6 pt-0 text-gray-400", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";
