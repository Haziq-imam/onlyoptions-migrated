import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';
import { FiArrowRight } from 'react-icons/fi';

const data = [
    { period: '2023 (Full Year)', signals: '612', win: '68.1%', avgWin: '+79%', avgLoss: '-32%' },
    { period: '2024 (Full Year)', signals: '731', win: '71.4%', avgWin: '+89%', avgLoss: '-31%' },
    { period: '2025 (Full Year)', signals: '392', win: '70.9%', avgWin: '+91%', avgLoss: '-29%' },
    { period: '2026 (Jan–Feb)', signals: '112', win: '72.3%', avgWin: '+94%', avgLoss: '-28%' },
    { period: 'All-Time', signals: '1,847', win: '70.3%', avgWin: '+87%', avgLoss: '-30%', highlight: true },
];

const PerformanceRecordSection = () => (
    <StandardSection variant="muted" divider="top" spacing="lg">
        <div className="max-w-5xl mx-auto">
            <SectionHeader
                label="Track Record"
                title={<>Verified Performance <span className="text-brand-500">Record</span></>}
                description="We publish every signal result — wins and losses — on our Performance Dashboard. The numbers below are calculated from our complete signal history since launch."
                align="center"
                className="mb-20"
            />

            <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40 shadow-2xl">
                <Table>
                    <TableHeader className="bg-white/[0.02]">
                        <TableRow>
                            <TableHead>Period</TableHead>
                            <TableHead className="text-right">Signals</TableHead>
                            <TableHead className="text-right">Win Rate</TableHead>
                            <TableHead className="text-right">Avg Win</TableHead>
                            <TableHead className="text-right">Avg Loss</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={i} className={`last:border-0 ${row.highlight ? 'bg-brand-500/5' : 'hover:bg-white/[0.02]'}`}>
                                <TableCell className={row.highlight ? 'font-black text-white' : 'font-bold text-gray-300'}>{row.period}</TableCell>
                                <TableCell label="Signals" className={`text-right ${row.highlight ? 'font-black text-white' : 'font-medium text-gray-400'}`}>{row.signals}</TableCell>
                                <TableCell label="Win Rate" className={`text-right font-black text-brand-500`}>{row.win}</TableCell>
                                <TableCell label="Avg Win" className="text-right font-bold text-green-400">{row.avgWin}</TableCell>
                                <TableCell label="Avg Loss" className="text-right font-bold text-red-400">{row.avgLoss}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="p-4 md:p-6 bg-white/[0.01] border-t border-white/5 text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed italic text-center">
                    Performance calculated from mid-prices at signal entry and exit times. Past performance does not guarantee future results.
                </div>
            </Card>

            <div className="mt-12 text-center">
                <a href="/performance" className="inline-flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all">
                    View full trade-by-trade history <FiArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    </StandardSection>
);

export default PerformanceRecordSection;
