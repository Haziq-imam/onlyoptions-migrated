import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Target, TrendingUp, Zap, XOctagon, RefreshCw, XCircle } from 'lucide-react';

const Step4ManageTrade = () => {
    return (
        <div className="space-y-12">
            <SectionHeader
                title="Step 4: Manage & Exit the Trade"
                description="Entries get you in. Exits make you money. Once in a position, follow our exit alerts, respect your stop-loss, and resist the urge to override either."
                align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Types of Exit Alerts We Send</h4>

                    <div className="space-y-4">
                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><Target className="w-5 h-5 text-green-400" /></div>
                                <div>
                                    <h5 className="text-green-400 font-bold mb-1 tracking-widest uppercase text-xs">✅ Full Target Hit</h5>
                                    <p className="text-gray-400 text-sm"><strong className="text-white">When:</strong> Option reaches profit target.<br /><strong className="text-white">What To Do:</strong> Sell all contracts. Log your win.</p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><TrendingUp className="w-5 h-5 text-blue-400" /></div>
                                <div>
                                    <h5 className="text-blue-400 font-bold mb-1 tracking-widest uppercase text-xs">📈 Take Partial</h5>
                                    <p className="text-gray-400 text-sm"><strong className="text-white">When:</strong> Up 50%+ and momentum slowing.<br /><strong className="text-white">What To Do:</strong> Sell half. Move stop to breakeven on rest.</p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><Zap className="w-5 h-5 text-yellow-400" /></div>
                                <div>
                                    <h5 className="text-yellow-400 font-bold mb-1 tracking-widest uppercase text-xs">⚡ Early Exit</h5>
                                    <p className="text-gray-400 text-sm"><strong className="text-white">When:</strong> Trade working but risk changed.<br /><strong className="text-white">What To Do:</strong> Exit now at market. Analysts see new risk.</p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><XOctagon className="w-5 h-5 text-red-500" /></div>
                                <div>
                                    <h5 className="text-red-500 font-bold mb-1 tracking-widest uppercase text-xs">🛑 Stop-Loss</h5>
                                    <p className="text-gray-400 text-sm"><strong className="text-white">When:</strong> Price near stop-loss level.<br /><strong className="text-white">What To Do:</strong> Exit immediately. No waiting for recovery.</p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><RefreshCw className="w-5 h-5 text-brand-400" /></div>
                                <div>
                                    <h5 className="text-brand-400 font-bold mb-1 tracking-widest uppercase text-xs">🔄 Adjustment</h5>
                                    <p className="text-gray-400 text-sm"><strong className="text-white">When:</strong> Trade open, update levels required.<br /><strong className="text-white">What To Do:</strong> Replace GTC orders with new stop or target.</p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><XCircle className="w-5 h-5 text-gray-500" /></div>
                                <div>
                                    <h5 className="text-gray-400 font-bold mb-1 tracking-widest uppercase text-xs">❌ Cancel Signal</h5>
                                    <p className="text-gray-500 text-sm"><strong className="text-gray-400">When:</strong> Before your entry window hits.<br /><strong className="text-gray-400">What To Do:</strong> Do not enter. Setup has been invalidated.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="space-y-8">
                    <Card variant="glass" className="p-10 border-brand-500/20 bg-brand-500/5 relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full" />
                        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight relative z-10">
                            The Post-Trade Debrief
                        </h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            After every closed trade, our analysts post a detailed debrief in the <span className="text-white font-bold">#performance-log</span> channel within one hour: what worked, what failed, and what to watch next.
                        </p>
                        <p className="text-gray-400 leading-relaxed mt-4 relative z-10">
                            This post-trade analysis is widely considered one of the most educational parts of the entire membership. You learn exactly <span className="text-brand-400 font-bold italic">why</span> an outcome happened, rather than just blindly following.
                        </p>
                        <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                            <a href="/performance" className="text-white font-bold hover:text-brand-400 transition-colors uppercase tracking-widest text-xs">View Full Trade History →</a>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step4ManageTrade;
