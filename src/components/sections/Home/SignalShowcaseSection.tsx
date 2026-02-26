import { FiArrowRight } from 'react-icons/fi';
import signalLooklikeImg from '../../../assets/pages images/signal-looklike.png';

const SignalShowcaseSection = () => (
    <section className="py-24 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <p className="text-[rgb(32,109,254)] text-[10px] font-black uppercase tracking-[0.3em]">Signal Format</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">What a Signal <span className="text-[rgb(32,109,254)]">Looks Like</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed">Every signal we send follows the same complete format. Here is an example of what arrives on your phone.</p>
                    <a href="/how-it-works" className="inline-flex items-center gap-2 text-[rgb(32,109,254)] text-sm font-black uppercase tracking-widest hover:gap-3 transition-all">
                        Learn how to read and execute every field <FiArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-[rgb(32,109,254)]/10 blur-[80px] rounded-3xl opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative rounded-3xl overflow-hidden border border-[rgb(32,109,254)]/20 shadow-[0_0_60px_rgba(32,109,254,0.12)] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_80px_rgba(32,109,254,0.25)]">
                        <img
                            src={signalLooklikeImg}
                            alt="OnlyOptions signal format example"
                            className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SignalShowcaseSection;
