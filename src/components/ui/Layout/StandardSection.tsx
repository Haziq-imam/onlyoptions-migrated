import React from 'react';
import { cn } from '../Card/Card';

interface StandardSectionProps extends React.HTMLAttributes<HTMLElement> {
    containerSize?: '7xl' | '6xl' | '4xl';
    children: React.ReactNode;
}

const StandardSection = React.forwardRef<HTMLElement, StandardSectionProps>(
    ({ className, containerSize = '7xl', children, ...props }, ref) => {

        const containerStyles = {
            '7xl': "max-w-7xl",
            '6xl': "max-w-6xl",
            '4xl': "max-w-4xl"
        };

        return (
            <section
                ref={ref}
                className={cn("py-16 px-6 md:py-24 md:px-12", className)}
                {...props}
            >
                <div className={cn("mx-auto relative z-10", containerStyles[containerSize])}>
                    {children}
                </div>
            </section>
        );
    }
);

StandardSection.displayName = "StandardSection";

export default StandardSection;
