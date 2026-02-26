import { Apple, Play } from 'lucide-react';

interface AppStoreButtonsProps {
    variant?: 'glass' | 'solid';
    className?: string;
}

const AppStoreButtons = ({ variant = 'solid', className = "" }: AppStoreButtonsProps) => {
    const baseStyle = "flex items-center gap-3 px-6 py-3 rounded-2xl transition-all border";
    const solidStyle = "bg-white text-gray-950 border-white hover:bg-gray-200";
    const glassStyle = "bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-sm";

    const style = variant === 'solid' ? solidStyle : glassStyle;

    return (
        <div className={`flex flex-wrap gap-4 ${className}`}>
            <a href="#" className={`${baseStyle} ${style}`}>
                <Apple className="w-6 h-6 shrink-0" />
                <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none opacity-60">Download on</p>
                    <p className="text-base font-black leading-tight">App Store</p>
                </div>
            </a>
            <a href="#" className={`${baseStyle} ${style}`}>
                <Play className="w-6 h-6 shrink-0" />
                <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none opacity-60">Get it on</p>
                    <p className="text-base font-black leading-tight">Google Play</p>
                </div>
            </a>
        </div>
    );
};

export default AppStoreButtons;
