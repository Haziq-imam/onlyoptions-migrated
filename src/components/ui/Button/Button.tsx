import React from 'react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Utility for Tailwind class merging */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-brand-gradient text-white hover:opacity-90 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_35px_rgba(0,102,255,0.5)] active:scale-95",
            secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/5",
            outline: "border border-brand-500/50 text-brand-300 hover:bg-brand-500/10",
            ghost: "text-gray-300 hover:text-white hover:bg-white/5"
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg font-bold"
        };

        const classes = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            const isInternal = href.startsWith('/') || href.startsWith('#');
            if (isInternal) {
                return (
                    <Link
                        to={href}
                        className={classes}
                        {...(props as any)}
                    >
                        {props.children}
                    </Link>
                );
            }
            return (
                <a
                    href={href}
                    className={classes}
                    {...(props as any)}
                >
                    {props.children}
                </a>
            );
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                {...(props as any)}
            />
        );
    }
);

Button.displayName = "Button";

export default Button;
