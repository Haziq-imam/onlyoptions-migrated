import { Card } from '../../../../components/ui/Card/Card';
import { ArrowRight, ShieldCheck, MessageSquare, BookOpen, UserCheck, Trophy } from 'lucide-react';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const Step1Subscribe = () => {
    return (
        <div className="space-y-12">
            <SectionHeader
                title="Step 1: Join & Access Our Infrastructure"
                description="Upon starting your membership, an automated welcome email arrives with your private Discord access link. Connect your account to enter our professional environment immediately. The whole process takes under five minutes."
                align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Your Discord Channels */}
                <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                    <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-brand-400" />
                        Your Discord Channels
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <ArrowRight className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                            <div>
                                <span className="text-white font-bold block">#signals</span>
                                <span className="text-gray-400 text-sm">All options alerts in real time (your primary channel).</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <ArrowRight className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                            <div>
                                <span className="text-white font-bold block">#performance-log</span>
                                <span className="text-gray-400 text-sm">Every trade result archived with broker screenshots.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <ArrowRight className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                            <div>
                                <span className="text-white font-bold block">#trade-discussion</span>
                                <span className="text-gray-400 text-sm">Live analyst commentary during market hours.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <BookOpen className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                            <div>
                                <span className="text-white font-bold block">#education</span>
                                <span className="text-gray-400 text-sm">Greeks tutorials, strategy explainers, broker guides.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <UserCheck className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                            <div>
                                <span className="text-white font-bold block">#analyst-qa</span>
                                <span className="text-gray-400 text-sm">Direct Q&A with Michael, Sarah, and David.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Trophy className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                            <div>
                                <span className="text-white font-bold block">#member-wins</span>
                                <span className="text-gray-400 text-sm">Community P&L screenshots and success stories.</span>
                            </div>
                        </li>
                    </ul>
                </Card>

                {/* Setup for Zero Missed Signals */}
                <div className="space-y-6">
                    <Card variant="glass" className="p-8 border-white/5 h-full flex flex-col justify-center">
                        <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-brand-400" />
                            Setup for Zero Missed Signals
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                Enable push notifications for #signals on your mobile
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                Notification schedule: 9:15 AM – 4:15 PM ET Monday through Friday
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                Add Discord to your phone home screen for one-tap access
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                Turn on @everyone pings so urgent exit alerts reach you instantly
                            </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                            <a href="/membership" className="text-brand-400 font-bold hover:text-brand-300 transition-colors flex items-center gap-2">
                                Get access now <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="/blog" className="text-gray-400 font-bold hover:text-white transition-colors flex items-center gap-2">
                                Best brokers guide <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step1Subscribe;
