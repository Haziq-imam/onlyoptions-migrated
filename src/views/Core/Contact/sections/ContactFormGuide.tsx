import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const ContactFormGuide = () => {
    return (
        <div className="space-y-8 mt-16 mb-24">
            <SectionHeader
                title="What to Include in Your Message"
                description="To get the fastest response, include the following in your email or support ticket:"
                align="left"
            />

            <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Include This</TableHead>
                            <TableHead>Why It Helps</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell label="Include This" className="text-white font-bold">Your account email address</TableCell>
                            <TableCell label="Why It Helps" className="text-gray-400">So we can pull up your subscription record immediately.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Include This" className="text-white font-bold">Your plan type</TableCell>
                            <TableCell label="Why It Helps" className="text-gray-400">Helps route your message to the right support queue (Basic, Pro, Annual).</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Include This" className="text-white font-bold">Subject of your question</TableCell>
                            <TableCell label="Why It Helps" className="text-gray-400">A clear subject line (e.g., 'Billing question' or 'Q about Feb 14 SPY signal') gets you to the right person faster.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Include This" className="text-white font-bold">Specific signal date and ticker</TableCell>
                            <TableCell label="Why It Helps" className="text-gray-400">Allows us to pull up the exact signal record for context (for signal questions).</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Include This" className="text-white font-bold">Your broker</TableCell>
                            <TableCell label="Why It Helps" className="text-gray-400">Execution issues are often broker-specific.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default ContactFormGuide;
