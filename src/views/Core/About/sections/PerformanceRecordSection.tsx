import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const PerformanceRecordSection = () => {
    return (
        <StandardSection variant="default" divider="top" spacing="lg">
            <div className="max-w-4xl mx-auto text-center">
                <SectionHeader
                    label="Transparency"
                    title="Verified Performance Record"
                    description="All performance data is calculated from our live signal history, published in full on the Performance Dashboard."
                    align="center"
                />
                <Card variant="institutional" className="mt-16 border-white/5 bg-gray-950/40 p-0 overflow-hidden shadow-2xl text-left">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-white/5">
                                <TableHead>Period</TableHead>
                                <TableHead>Signals</TableHead>
                                <TableHead>Win Rate</TableHead>
                                <TableHead>Avg Winner</TableHead>
                                <TableHead>Avg Loser</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { p: "2023 (Full Year)", s: "612", w: "68.1%", win: "+79%", loss: "-32%" },
                                { p: "2024 (Full Year)", s: "731", w: "71.4%", win: "+89%", loss: "-31%" },
                                { p: "2025 (Full Year)", s: "392", w: "70.9%", win: "+91%", loss: "-29%" },
                                { p: "2026 (Jan–Feb)", s: "112", w: "72.3%", win: "+94%", loss: "-28%" },
                            ].map((row, i) => (
                                <TableRow key={i} className="hover:bg-white/[0.02]">
                                    <TableCell label="Period" className="text-white font-bold">{row.p}</TableCell>
                                    <TableCell label="Signals" className="text-gray-400">{row.s}</TableCell>
                                    <TableCell label="Win Rate" className="text-brand-400 font-black">{row.w}</TableCell>
                                    <TableCell label="Avg Winner" className="text-green-400 font-bold">{row.win}</TableCell>
                                    <TableCell label="Avg Loser" className="text-red-500 font-bold">{row.loss}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow className="bg-brand-500/5 font-black border-none">
                                <TableCell label="Period" className="text-white uppercase tracking-widest text-[10px]">All-Time Total</TableCell>
                                <TableCell label="Signals" className="text-white">1,847</TableCell>
                                <TableCell label="Win Rate" className="text-brand-500 text-sm">70.3%</TableCell>
                                <TableCell label="Avg Winner" className="text-green-400">+87%</TableCell>
                                <TableCell label="Avg Loser" className="text-red-500">-30%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
                <p className="mt-8 text-[10px] text-gray-600 uppercase text-center font-bold tracking-widest leading-relaxed">
                    Win rate calculated from mid-prices at signal entry and exit. Past performance does not guarantee future results.
                    <br /><a href="/performance" className="text-brand-500/60 hover:text-brand-500 underline underline-offset-4 mt-2 inline-block">View Full Record Dashboard</a>
                </p>
            </div>
        </StandardSection>
    )
}
export default PerformanceRecordSection;
