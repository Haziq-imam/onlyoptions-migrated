import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const AfterTrialTable = () => {
    return (
        <div className="space-y-12">
            <SectionHeader
                title="Zero Pressure — You Decide What Happens Next"
                align="left"
            />

            <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Your Choice</TableHead>
                            <TableHead>What Happens</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell label="Your Choice" className="text-white font-bold">Subscribe</TableCell>
                            <TableCell label="What Happens" className="text-gray-400">
                                Choose Basic ($60/month), Pro ($99/month), or Annual ($600/year). You will receive an email on Day 6 with a subscribe link. Click it and enter payment details. Billing starts immediately. Full access continues uninterrupted.
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Choice" className="text-white font-bold">Do Nothing</TableCell>
                            <TableCell label="What Happens" className="text-gray-400">
                                Your trial expires after 7 days. Access to Discord and signals stops automatically. No charges. No follow-up emails. No hard feelings. You can re-subscribe anytime at onlyoptions.us/pricing.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>

            <div className="bg-brand-500/5 border-l-4 border-brand-500 p-6 rounded-r-xl">
                <p className="text-white text-sm leading-relaxed">
                    We do <span className="text-brand-400 font-black italic">NOT</span> auto-charge you after the trial. This is not one of those "free trial but we secretly bill you" scams. If you do nothing, you pay nothing. Period.
                </p>
            </div>

            <div className="pt-12 space-y-8">
                <SectionHeader
                    title="What You Can and Cannot Do During Your Trial"
                    align="left"
                    className="mb-8"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card variant="glass" className="p-8 border-green-500/10 bg-green-500/5">
                        <h4 className="text-green-400 font-black mb-4 uppercase tracking-wider text-xs">✅ What You CAN Do</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 shrink-0">•</span>
                                Receive and execute every signal we send (2–4 per day)
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 shrink-0">•</span>
                                Access the complete performance dashboard going back to 2023
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 shrink-0">•</span>
                                Join Discord, ask questions, and participate in the community
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 shrink-0">•</span>
                                Browse the entire education library and watch all tutorials
                            </li>
                        </ul>
                    </Card>

                    <Card variant="glass" className="p-8 border-red-500/10 bg-red-500/5">
                        <h4 className="text-red-400 font-black mb-4 uppercase tracking-wider text-xs">❌ What You CANNOT Do</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 shrink-0">•</span>
                                Run multiple free trials using different email addresses
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 shrink-0">•</span>
                                Share your Discord invite link publicly or with non-members
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 shrink-0">•</span>
                                Access Pro-tier features (SMS alerts, weekly live sessions, advanced tutorials)
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 shrink-0">•</span>
                                Request refunds for the trial period (it is already free)
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AfterTrialTable;
