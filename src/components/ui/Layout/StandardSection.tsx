import React from 'react';
import { cn } from '../Card/Card';

interface StandardSectionProps extends React.HTMLAttributes<HTMLElement> {
    containerSize?: '7xl' | '6xl' | '4xl';
    variant?: 'default' | 'muted' | 'institutional' | 'transparent' | 'dark';
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    dotGrid?: boolean;
    divider?: 'none' | 'top' | 'bottom' | 'both';
    children: React.ReactNode;
}

const StandardSection = React.forwardRef<HTMLElement, StandardSectionProps>(
    ({
        className,
        containerSize = '7xl',
        variant = 'default',
        spacing = 'md',
        dotGrid = false,
        divider = 'none',
        children,
        ...props
    }, ref) => {

        const containerStyles = {
            '7xl': "max-w-7xl",
            '6xl': "max-w-6xl",
            '4xl': "max-w-4xl"
        };

        const variantStyles = {
            default: "",
            muted: "bg-white/[0.02]",
            institutional: "bg-gray-950/40 relative overflow-hidden",
            transparent: "bg-transparent",
            dark: "bg-black"
        };

        const spacingStyles = {
            none: "py-0 px-6 md:px-12",
            sm: "py-12 px-6 md:py-16 md:px-12",
            md: "py-16 px-6 md:py-24 md:px-12",
            lg: "py-24 px-6 md:py-32 md:px-12",
            xl: "py-32 px-6 md:py-48 md:px-12"
        };

        const dividerStyles = {
            none: "",
            top: "section-divider-top",
            bottom: "section-divider-bottom",
            both: "section-divider-top section-divider-bottom"
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "relative",
                    spacingStyles[spacing],
                    variantStyles[variant],
                    dividerStyles[divider],
                    dotGrid && "dot-grid-bg",
                    className
                )}
                {...props}
            >
                {/* Variant Background Accents */}
                {variant === 'institutional' && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(32,109,254,0.05),transparent_50%)]" />
                    </div>
                )}

                <div className={cn("mx-auto relative z-10", containerStyles[containerSize])}>
                    {children}
                </div>
            </section>
        );
    }
);

StandardSection.displayName = "StandardSection";

export default StandardSection;
