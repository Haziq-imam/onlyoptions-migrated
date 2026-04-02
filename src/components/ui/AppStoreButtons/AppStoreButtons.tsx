import AppleIcon from '../../../assets/Apple_logo_black.svg';
import PlayIcon from '../../../assets/google-play-store-icon.svg';

interface AppStoreButtonsProps {
    variant?: 'glass' | 'solid';
    className?: string;
}

const AppStoreButtons = ({ variant = 'solid', className = "" }: AppStoreButtonsProps) => {
    const baseStyle = "flex items-center gap-3 px-6 py-3 rounded-2xl transition-all border whitespace-nowrap";
    const solidStyle = "bg-white text-gray-950 border-white hover:bg-gray-200";
    const glassStyle = "bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-sm";

    const style = variant === 'solid' ? solidStyle : glassStyle;

    // For glass variant (dark mode), we might want to invert the icons if they are black.
    const iconClass = variant === 'glass' ? "w-6 h-6 shrink-0 invert brightness-0" : "w-6 h-6 shrink-0";

    return (
        <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
            <a href="https://apps.apple.com/us/app/onlyoptions-options-signals/id6760183640" target="_blank" rel="noopener noreferrer" className={`${baseStyle} ${style}`}>
                <img src={AppleIcon} alt="Apple App Store" className={iconClass} />
                <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none opacity-60">Download on</p>
                    <p className="text-base font-black leading-tight">App Store</p>
                </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=us.onlyoptions.android&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className={`${baseStyle} ${style}`}>
                <img src={PlayIcon} alt="Google Play Store" className={iconClass} />
                <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none opacity-60">Get it on</p>
                    <p className="text-base font-black leading-tight">Google Play</p>
                </div>
            </a>
        </div>
    );
};

export default AppStoreButtons;
