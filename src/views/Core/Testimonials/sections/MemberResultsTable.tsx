import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const MemberResultsTable = () => {
    return (
        <div className="py-24 max-w-5xl mx-auto space-y-12">
            <SectionHeader
                title="Member-Reported Results Summary"
                description="Several long-term members have shared their personal tracking data with us. The table below summarizes self-reported results from members who have tracked their own trades for 6 or more months."
                align="center"
            />

            <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Member</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>Months</TableHead>
                            <TableHead>Trades Tracked</TableHead>
                            <TableHead>Personal Win Rate</TableHead>
                            <TableHead>vs Published</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell label="Member" className="text-white font-bold">Tom B. — OR</TableCell>
                            <TableCell label="Plan" className="text-brand-400 font-bold">Annual</TableCell>
                            <TableCell label="Months" className="text-gray-400">35</TableCell>
                            <TableCell label="Trades Tracked" className="text-gray-400">489</TableCell>
                            <TableCell label="Personal Win Rate" className="text-white font-bold">70.9%</TableCell>
                            <TableCell label="vs Published" className="text-green-400 font-bold">+0.6%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Member" className="text-white font-bold">Natasha P. — IL</TableCell>
                            <TableCell label="Plan"><span className="px-3 py-1 bg-purple-gradient text-white text-[10px] font-black uppercase tracking-tighter rounded-full shadow-lg shadow-purple-500/20">Pro</span></TableCell>
                            <TableCell label="Months" className="text-gray-400">22</TableCell>
                            <TableCell label="Trades Tracked" className="text-gray-400">312</TableCell>
                            <TableCell label="Personal Win Rate" className="text-white font-bold">71.1%</TableCell>
                            <TableCell label="vs Published" className="text-green-400 font-bold">+0.8%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Member" className="text-white font-bold">Linda C. — CO</TableCell>
                            <TableCell label="Plan"><span className="px-3 py-1 bg-purple-gradient text-white text-[10px] font-black uppercase tracking-tighter rounded-full shadow-lg shadow-purple-500/20">Pro</span></TableCell>
                            <TableCell label="Months" className="text-gray-400">21</TableCell>
                            <TableCell label="Trades Tracked" className="text-gray-400">271</TableCell>
                            <TableCell label="Personal Win Rate" className="text-white font-bold">69.8%</TableCell>
                            <TableCell label="vs Published" className="text-red-400 font-bold">-0.5%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Member" className="text-white font-bold">Marcus W. — NY</TableCell>
                            <TableCell label="Plan" className="text-brand-400 font-bold">Annual</TableCell>
                            <TableCell label="Months" className="text-gray-400">20</TableCell>
                            <TableCell label="Trades Tracked" className="text-gray-400">248</TableCell>
                            <TableCell label="Personal Win Rate" className="text-white font-bold">71.3%</TableCell>
                            <TableCell label="vs Published" className="text-green-400 font-bold">+1.0%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Member" className="text-white font-bold">Aaron H. — MN</TableCell>
                            <TableCell label="Plan" className="text-brand-400 font-bold">Annual</TableCell>
                            <TableCell label="Months" className="text-gray-400">16</TableCell>
                            <TableCell label="Trades Tracked" className="text-gray-400">204</TableCell>
                            <TableCell label="Personal Win Rate" className="text-white font-bold">70.7%</TableCell>
                            <TableCell label="vs Published" className="text-green-400 font-bold">+0.4%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Member" className="text-white font-bold">Sandra R. — TX</TableCell>
                            <TableCell label="Plan" className="text-brand-400 font-bold">Annual</TableCell>
                            <TableCell label="Months" className="text-gray-400">14</TableCell>
                            <TableCell label="Trades Tracked" className="text-gray-400">187</TableCell>
                            <TableCell label="Personal Win Rate" className="text-white font-bold">68.0%</TableCell>
                            <TableCell label="vs Published" className="text-red-400 font-bold">-2.3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Member" className="text-white font-bold">Priya N. — CA</TableCell>
                            <TableCell label="Plan"><span className="px-3 py-1 bg-purple-gradient text-white text-[10px] font-black uppercase tracking-tighter rounded-full shadow-lg shadow-purple-500/20">Pro</span></TableCell>
                            <TableCell label="Months" className="text-gray-400">15</TableCell>
                            <TableCell label="Trades Tracked" className="text-gray-400">183</TableCell>
                            <TableCell label="Personal Win Rate" className="text-white font-bold">71.6%</TableCell>
                            <TableCell label="vs Published" className="text-green-400 font-bold">+1.3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell label="Member" className="text-white font-bold">Rachel T. — TX</TableCell>
                            <TableCell label="Plan" className="text-gray-400 font-bold">Basic</TableCell>
                            <TableCell label="Months" className="text-gray-400">14</TableCell>
                            <TableCell label="Trades Tracked" className="text-gray-400">168</TableCell>
                            <TableCell label="Personal Win Rate" className="text-white font-bold">70.2%</TableCell>
                            <TableCell label="vs Published" className="text-red-400 font-bold">-0.1%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>

            <p className="text-center text-gray-500 text-xs mt-4">Note: Self-reported results. Individual results vary based on execution timing, signal selection, position sizing, and broker. This data is not audited.</p>
        </div>
    );
};

export default MemberResultsTable;
