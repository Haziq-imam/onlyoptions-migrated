import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const SelfServiceLinks = () => {
    return (
        <div className="space-y-12 mb-20">
            <SectionHeader
                title="Common Questions — Self-Service First"
                description="Before emailing, check these resources — most common questions are answered instantly:"
                align="left"
            />

            <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Your Question</TableHead>
                            <TableHead>Best Resource</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">How do signals work?</TableCell>
                            <TableCell label="Best Resource"><a href="/how-it-works" className="text-brand-400 hover:text-brand-300">How It Works page</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">What is the win rate and how is it calculated?</TableCell>
                            <TableCell label="Best Resource"><a href="/performance" className="text-brand-400 hover:text-brand-300">Performance Dashboard</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">How much does it cost? What do plans include?</TableCell>
                            <TableCell label="Best Resource"><a href="/pricing" className="text-brand-400 hover:text-brand-300">Pricing page</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">How do I cancel my subscription?</TableCell>
                            <TableCell label="Best Resource" className="text-gray-400">Account dashboard → Subscription → Cancel</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">How do I upgrade from Basic to Pro?</TableCell>
                            <TableCell label="Best Resource" className="text-gray-400">Account dashboard → Subscription → Upgrade Plan</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">Why did I get charged? When does billing occur?</TableCell>
                            <TableCell label="Best Resource" className="text-gray-400">Account dashboard → Billing History</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">How do I change my payment method?</TableCell>
                            <TableCell label="Best Resource" className="text-gray-400">Account dashboard → Billing → Update Payment</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">How do I get a refund?</TableCell>
                            <TableCell label="Best Resource"><a href="mailto:support@onlyoptions.us" className="text-brand-400 hover:text-brand-300">Email support@onlyoptions.us</a> <span className="text-gray-500 text-xs ml-1">(7-day money-back guarantee on first payment)</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">What broker should I use?</TableCell>
                            <TableCell label="Best Resource"><a href="/how-it-works" className="text-brand-400 hover:text-brand-300">How It Works page</a> <span className="text-gray-500 text-xs ml-1">— Broker Recommendations section</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">How do I calculate position size?</TableCell>
                            <TableCell label="Best Resource" className="text-brand-400">Position Size Calculator <span className="text-gray-500 text-xs ml-1">(Coming Soon)</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Your Question" className="text-white font-bold">I have a question about the FAQ</TableCell>
                            <TableCell label="Best Resource"><a href="/faq" className="text-brand-400 hover:text-brand-300">FAQ page</a> <span className="text-gray-500 text-xs ml-1">(60 questions answered)</span></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default SelfServiceLinks;
