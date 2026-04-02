import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const ContactChannelsTable = () => {
    return (
        <div className="space-y-12 mb-20">
            <SectionHeader
                title="Contact Channels & Response Times"
                description="Whether you have a question about a signal, your account, or the service in general — we respond to every message. Use the guide below to reach the right team for your question."
                align="left"
            />

            <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Contact Type</TableHead>
                            <TableHead>Email Address</TableHead>
                            <TableHead>Response Time</TableHead>
                            <TableHead>Available For</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell label="Contact Type" className="text-white font-bold">General Support (Basic)</TableCell>
                            <TableCell label="Email Address"><a href="mailto:support@onlyoptions.us" className="text-brand-400 hover:text-brand-300">support@onlyoptions.us</a></TableCell>
                            <TableCell label="Response Time" className="text-gray-400">Within 24 hours<br /><span className="text-xs">(business days)</span></TableCell>
                            <TableCell label="Available For" className="text-gray-400">Account access, billing, cancellations, technical app issues, general questions</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Contact Type" className="text-white font-bold">Priority Support (Annual)</TableCell>
                            <TableCell label="Email Address">
                                <a href="mailto:support@onlyoptions.us" className="text-purple-400 hover:text-purple-300">support@onlyoptions.us</a><br />
                                <span className="text-xs text-brand-500/50">(Annual)</span>
                            </TableCell>
                            <TableCell label="Response Time" className="text-gray-400">Within 1 hour<br /><span className="text-xs">(9 AM – 4:30 PM ET Mon–Fri)</span></TableCell>
                            <TableCell label="Available For" className="text-gray-400">All support issues — Annual plan subscribers receive priority queue</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Contact Type" className="text-white font-bold">Signal & Analyst Questions</TableCell>
                            <TableCell label="Email Address"><a href="mailto:analysts@onlyoptions.us" className="text-blue-400 hover:text-blue-300">analysts@onlyoptions.us</a></TableCell>
                            <TableCell label="Response Time" className="text-gray-400">Within 24 hours<br /><span className="text-xs">(business days)</span></TableCell>
                            <TableCell label="Available For" className="text-gray-400">Questions about signal rationale, methodology, specific trade setups</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Contact Type" className="text-white font-bold">Partnerships & Affiliates</TableCell>
                            <TableCell label="Email Address"><a href="mailto:partnerships@onlyoptions.us" className="text-gray-400 hover:text-white">partnerships@onlyoptions.us</a></TableCell>
                            <TableCell label="Response Time" className="text-gray-400">Within 48 hours</TableCell>
                            <TableCell label="Available For" className="text-gray-400">Affiliate applications, media inquiries, bulk or institutional arrangements</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Contact Type" className="text-white font-bold">Legal & Compliance</TableCell>
                            <TableCell label="Email Address"><a href="mailto:legal@onlyoptions.us" className="text-gray-400 hover:text-white">legal@onlyoptions.us</a></TableCell>
                            <TableCell label="Response Time" className="text-gray-400">Within 5 business days</TableCell>
                            <TableCell label="Available For" className="text-gray-400">Legal notices, regulatory inquiries, compliance matters</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>

            <p className="text-gray-500 text-sm mt-4 border-l-2 border-brand-500 pl-4 py-1 italic">
                Support hours: 9:00 AM – 4:30 PM ET, Monday through Friday (U.S. market days). Messages received outside these hours are answered on the next business day.
            </p>
        </div>
    );
};

export default ContactChannelsTable;
