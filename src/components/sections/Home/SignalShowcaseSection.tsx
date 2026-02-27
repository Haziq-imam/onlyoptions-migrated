import { FiArrowRight } from 'react-icons/fi';
import signalLooklikeImg from '../../../assets/pages images/signal-looklike.png';
import StandardSection from '../../ui/Layout/StandardSection';
import SectionHeader from '../../ui/Layout/SectionHeader';

const SignalShowcaseSection = () => (
    <StandardSection className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-8">
                <SectionHeader
                    label="Signal Format"
                    title={<>What a Signal <span className="text-brand-500">Looks Like</span></>}
                    description="Every signal we send follows the same complete format. Here is an example of what arrives on your phone."
                />
                <div className="pt-4">
                    <a href="/how-it-works" className="inline-flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all group/link">
                        Learn how to read and execute every field
                        <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-0 bg-brand-500/5 blur-[80px] rounded-3xl opacity-30" />
                <div className="relative max-w-lg group">
                    <img
                        src={signalLooklikeImg}
                        alt="OnlyOptions signal format example"
                        className="w-full h-auto max-h-[500px] object-contain transition-transform duration-1000 ease-out group-hover:scale-105 drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    </StandardSection>
);

export default SignalShowcaseSection;
