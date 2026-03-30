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
                            <TableCell label="Your Choice" className="text-white font-bold">Select a Plan</TableCell>
                            <TableCell label="What Happens" className="text-gray-400">
                                Choose Basic ($60/month), Pro ($99/month), or Annual ($600/year). You can activate your full membership at any time through your dashboard. Your chosen features will remain active without interruption as you transition to a full subscription.
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Choice" className="text-white font-bold">Inactivity</TableCell>
                            <TableCell label="What Happens" className="text-gray-400">
                                Your initial access period concludes after 7 days. If you haven't selected a plan, your access will end automatically with zero further obligation. No hidden charges or memberships. You are welcome to join at any time in the future.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>

            <div className="bg-brand-500/5 border-l-4 border-brand-500 p-6 rounded-r-xl">
                <p className="text-white text-sm leading-relaxed">
                    We prioritize <span className="text-brand-400 font-black italic">TOTAL</span> transparency. No automatic charges occur at the end of your initial access. You are in complete control of your membership status at all times.
                </p>
            </div>

            <div className="pt-12 space-y-8">
                <SectionHeader
                    title="Your Membership Access Privileges"
                    align="left"
                    className="mb-8"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card variant="glass" className="p-8 border-green-500/10 bg-green-500/5">
                        <h4 className="text-green-400 font-black mb-4 uppercase tracking-wider text-xs">✅ What Is Included</h4>
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
                                Ask questions and experience our professional signaling infrastructure
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 shrink-0">•</span>
                                Browse the entire education library and watch all tutorials
                            </li>
                        </ul>
                    </Card>

                    <Card variant="glass" className="p-8 border-red-500/10 bg-red-500/5">
                        <h4 className="text-red-400 font-black mb-4 uppercase tracking-wider text-xs">❌ Limitations</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 shrink-0">•</span>
                                Running multiple evaluation periods using different email addresses
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 shrink-0">•</span>
                                Sharing your access or credentials with non-members
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 shrink-0">•</span>
                                Accessing Pro-tier features (SMS alerts, weekly live sessions, advanced tutorials)
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 shrink-0">•</span>
                                Requesting refunds for the initial activation period
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AfterTrialTable;
