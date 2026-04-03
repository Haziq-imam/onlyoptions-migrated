import { FiArrowRight } from 'react-icons/fi';
import signalLooklikeImg from '../../../../assets/pages_images/signal-looklike.png';
import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const SignalShowcaseSection = () => (
    <StandardSection variant="default" divider="top" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10 text-left">
                <SectionHeader
                    label="Signal Format"
                    title={<>What a Signal <br /> <span className="text-brand-500">Looks Like</span></>}
                    description="Every signal we send follows the same complete format. Here is an example of what arrives on your phone."
                    align="left"
                />

                <div className="pt-4">
                    <a href="/how-it-works" className="inline-flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all group/link">
                        Learn how to read and execute every field
                        <FiArrowRight className="w-4 h-3 transition-transform group-hover/link:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative group lg:ml-auto">
                <div className="absolute -inset-20 bg-brand-500/5 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                    src={(signalLooklikeImg.src || signalLooklikeImg) as string}
                    alt="OnlyOptions signal format example"
                    className="relative w-full h-auto max-h-[500px] object-contain transition-all duration-1000 ease-out group-hover:scale-[1.02] drop-shadow-[0_0_50px_rgba(32,109,254,0.15)]"
                />
            </div>
        </div>
    </StandardSection>
);

export default SignalShowcaseSection;
