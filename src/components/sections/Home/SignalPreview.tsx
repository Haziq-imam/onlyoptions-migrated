import { Card } from '../../ui/Card/Card';
import { Target, AlertTriangle } from 'lucide-react';

const SignalPreview = () => {
    return (
        <Card variant="glass" className="max-w-xl mx-auto relative overflow-visible group">
            <div className="absolute -top-4 -right-4 px-4 py-1.5 bg-brand-500 text-gray-950 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl z-20">
                Verified Signal
            </div>

            <div className="p-6 md:p-10">
                <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-500 flex items-center justify-center font-black text-gray-950 text-xl md:text-2xl shadow-[0_0_30px_rgba(0,194,168,0.3)]">
                        OO
                    </div>
                    <div>
                        <h4 className="text-lg md:text-xl font-black tracking-tight text-white mb-1">Signal #1847</h4>
                        <p className="text-gray-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-none">Released: Feb 21, 2026 • 10:14 AM ET</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-y-6 md:gap-y-8 gap-x-6 md:gap-x-12 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-white/5">
                    <div>
                        <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2">Security</p>
                        <p className="text-2xl md:text-3xl font-black text-white">SPY</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2">Direction</p>
                        <p className="text-2xl md:text-3xl font-black text-brand-400">CALL</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2">Strike</p>
                        <p className="text-xl md:text-2xl font-black text-white">$585</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2">Expiry</p>
                        <p className="text-xl md:text-2xl font-black text-white">Feb 21</p>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 accent-corner">
                        <div>
                            <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-1.5">Entry Range</p>
                            <p className="text-base md:text-lg font-black text-white">$2.20 – $2.50</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-1.5">Stop-Loss</p>
                            <p className="text-base md:text-lg font-black text-red-500">$1.40</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                        <Target className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Analyst Rationale</p>
                            <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                SPY testing major support at $582. IV compression suggests an imminent expansion. Bullish divergence on RSI-14. Executing on confirmation of volume breakout.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white/[0.02] p-5 flex items-center gap-3 border-t border-white/5 institutional-shimmer">
                <AlertTriangle className="w-4 h-4 text-gray-500" />
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">
                    Institutional research purposes only. Options involve risk.
                </p>
            </div>
        </Card>
    );
};

export default SignalPreview;
