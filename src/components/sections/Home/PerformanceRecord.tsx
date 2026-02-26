import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/Table/Table';

const stats = [
    { period: "2023 (Full Year)", signals: "612", winRate: "68.1%", avgWin: "+79%", avgLoss: "-32%" },
    { period: "2024 (Full Year)", signals: "731", winRate: "71.4%", avgWin: "+89%", avgLoss: "-31%" },
    { period: "2025 (Full Year)", signals: "392", winRate: "70.9%", avgWin: "+91%", avgLoss: "-29%" },
    { period: "2026 (Jan–Feb)", signals: "112", winRate: "72.3%", avgWin: "+94%", avgLoss: "-28%" },
    { period: "Full Track Record", signals: "1,847", winRate: "70.3%", avgWin: "+87%", avgLoss: "-30%", highlight: true }
];

const PerformanceRecord = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-black uppercase tracking-widest">
                            <ShieldCheck className="w-3 h-3" /> External Verification Pending
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
                            Audited Accuracy. <br />
                            <span className="text-brand-500">Unfiltered History.</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-medium leading-relaxed">
                            Every signal we have ever sent is logged. We publish our losses as clearly as our wins. This is the bedrock of our members' trust.
                        </p>
                    </div>
                </div>

                <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-gray-950/50 noise-bg shadow-3xl">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-white/[0.03]">
                                <TableHead className="px-6 md:px-10 py-6 md:py-8">Trading Period</TableHead>
                                <TableHead className="px-6 md:px-10 py-6 md:py-8">Closed Alerts</TableHead>
                                <TableHead className="px-6 md:px-10 py-6 md:py-8">Win Probability</TableHead>
                                <TableHead className="px-6 md:px-10 py-6 md:py-8">Average P&L</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-white/5 font-medium">
                            {stats.map((row, i) => (
                                <TableRow
                                    key={i}
                                    className={`transition-colors h-24 ${row.highlight ? 'bg-brand-500/5' : 'hover:bg-white/[0.02]'}`}
                                >
                                    <TableCell className="px-6 md:px-10">
                                        <p className={`text-base md:text-lg font-black ${row.highlight ? 'text-brand-400' : 'text-white'}`}>{row.period}</p>
                                    </TableCell>
                                    <TableCell className="px-6 md:px-10 text-gray-400 text-xs md:text-sm">{row.signals} signals</TableCell>
                                    <TableCell className="px-6 md:px-10">
                                        <div className="flex items-center gap-3">
                                            <span className={`text-lg md:text-xl font-black ${row.highlight ? 'text-brand-400' : 'text-brand-300'}`}>{row.winRate}</span>
                                            <div className="w-8 md:w-12 h-1 bg-white/5 rounded-full overflow-hidden hidden sm:block">
                                                <div className="h-full bg-brand-500" style={{ width: row.winRate }}></div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-6 md:px-10">
                                        <div className="flex flex-wrap items-center gap-2 md:gap-4">
                                            <span className="text-green-400 text-[10px] md:text-xs font-black uppercase whitespace-nowrap">{row.avgWin}</span>
                                            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-800"></span>
                                            <span className="text-red-400 text-[10px] md:text-xs font-black uppercase whitespace-nowrap">{row.avgLoss}</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest leading-relaxed max-w-sm">
                        * PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS. ALL TRADING INVOLVES RISK.
                    </p>
                    <a
                        href="/performance"
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white hover:bg-brand-500 hover:text-gray-950 hover:border-brand-500 transition-all"
                    >
                        Access Verified Ledger <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PerformanceRecord;
