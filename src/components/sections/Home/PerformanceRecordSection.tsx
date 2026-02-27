import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/Table/Table';
import { FiArrowRight } from 'react-icons/fi';

const data = [
    { period: '2023 (Full Year)', signals: '612', win: '68.1%', avgWin: '+79%', avgLoss: '-32%' },
    { period: '2024 (Full Year)', signals: '731', win: '71.4%', avgWin: '+89%', avgLoss: '-31%' },
    { period: '2025 (Full Year)', signals: '392', win: '70.9%', avgWin: '+91%', avgLoss: '-29%' },
    { period: '2026 (Jan–Feb)', signals: '112', win: '72.3%', avgWin: '+94%', avgLoss: '-28%' },
    { period: 'All-Time', signals: '1,847', win: '70.3%', avgWin: '+87%', avgLoss: '-30%', highlight: true },
];

const PerformanceRecordSection = () => (
    <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-4 space-y-6">
                    <p className="text-[rgb(32,109,254)] text-[10px] font-black uppercase tracking-[0.3em]">Track Record</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1]">Verified Performance <br /><span className="text-[rgb(32,109,254)]">Record</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed">We publish every signal result — wins and losses — on our Performance Dashboard. The numbers below are calculated from our complete signal history since launch.</p>
                    <div className="pt-4">
                        <a href="/performance" className="inline-flex items-center gap-2 text-[rgb(32,109,254)] text-sm font-black uppercase tracking-widest hover:gap-3 transition-all">
                            View full trade-by-trade history <FiArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-8 bg-black rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
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
                                <TableRow key={i} className={`last:border-0 ${row.highlight ? 'bg-[rgb(32,109,254)]/5' : 'hover:bg-white/[0.02]'}`}>
                                    <TableCell className={row.highlight ? 'font-black text-white' : 'font-bold text-gray-300'}>{row.period}</TableCell>
                                    <TableCell className={`text-right ${row.highlight ? 'font-black text-white' : 'font-medium text-gray-400'}`}>{row.signals}</TableCell>
                                    <TableCell className={`text-right ${row.highlight ? 'font-black text-[rgb(32,109,254)]' : 'font-black text-[rgb(32,109,254)]'}`}>{row.win}</TableCell>
                                    <TableCell className="text-right font-bold text-green-400">{row.avgWin}</TableCell>
                                    <TableCell className="text-right font-bold text-red-400">{row.avgLoss}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="p-4 md:p-6 bg-white/[0.01] border-t border-white/5 text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed">
                        Performance calculated from mid-prices at signal entry and exit times. Past performance does not guarantee future results. Individual results vary based on execution timing, broker, position sizing, and market conditions.
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PerformanceRecordSection;
