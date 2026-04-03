import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Check, X } from 'lucide-react';
import coverMockup from '../../../../assets/pages_images/Modern Lotto and Stocks App-2.png';

const WhatWeCoverSection = () => {
    return (
        <StandardSection variant="institutional" dotGrid divider="top" spacing="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative group order-2 lg:order-1 max-w-md mx-auto">
                    <div className="absolute -inset-20 bg-brand-500/5 blur-[120px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img
                        src={(typeof coverMockup === 'string' ? coverMockup : (coverMockup as any).src)}
                        alt="Market Coverage"
                        className="relative w-full h-auto max-h-[500px] object-contain object-top opacity-95 group-hover:opacity-100 transition-all duration-1000 drop-shadow-[0_0_50px_rgba(32,109,254,0.15)]"
                    />
                </div>
                <div className="order-1 lg:order-2 space-y-10 text-left">
                    <SectionHeader
                        label="Focus"
                        title={<>What <span className="text-brand-500">We Cover</span></>}
                        description="OnlyOptions is an options-only service. We believe that focus produces better results than breadth. Our analytical process is built exclusively around standard equity options."
                        align="left"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40 hover:border-brand-500/20 transition-all">
                            <h4 className="text-brand-400 font-black uppercase tracking-widest text-[10px] mb-8 flex items-center gap-2">
                                <Check className="w-4 h-4" /> What We Signal
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "Call & Put options",
                                    "SPY, QQQ, NVDA, AAPL",
                                    "High-liquidity U.S.",
                                    "0DTE & Weekly"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-gray-200">
                                        <div className="w-1 h-1 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card variant="glass" className="p-8 border-white/5 bg-red-500/[0.02] hover:border-red-500/20 transition-all">
                            <h4 className="text-red-500 font-black uppercase tracking-widest text-[10px] mb-8 flex items-center gap-2">
                                <X className="w-4 h-4" /> What We Never Do
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "Stock buy/sell alerts",
                                    "Multi-leg spreads",
                                    "Penny stocks",
                                    "Futures or Crypto"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs text-gray-500 italic">
                                        <div className="w-1 h-1 rounded-full bg-red-500/30 mt-1.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </StandardSection>
    )
}
export default WhatWeCoverSection;
