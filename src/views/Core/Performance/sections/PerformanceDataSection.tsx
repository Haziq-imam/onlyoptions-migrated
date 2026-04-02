import { Card } from '../../../../components/ui/Card/Card';
import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';
import { PieChart, BarChart3, ImageIcon } from 'lucide-react';

const PerformanceDataSection = () => {
    const recentTrades = [
        { ticker: "SPY", type: "0DTE CALL", entry: "$1.20", exit: "$2.10", return: "+75%", date: "Feb 24, 2026", hasScreenshot: true },
        { ticker: "NVDA", type: "WEEKLY CALL", entry: "$4.50", exit: "$5.80", return: "+28.8%", date: "Feb 23, 2026", hasScreenshot: true },
        { ticker: "QQQ", type: "0DTE PUT", entry: "$0.95", exit: "$1.40", return: "+47.3%", date: "Feb 22, 2026", hasScreenshot: true },
        { ticker: "TSLA", type: "WEEKLY PUT", entry: "$3.20", exit: "$2.90", return: "-9.4%", date: "Feb 20, 2026", hasScreenshot: false },
        { ticker: "AMD", type: "0DTE CALL", entry: "$1.10", exit: "$1.95", return: "+77.2%", date: "Feb 19, 2026", hasScreenshot: true }
    ];

    return (
        <StandardSection spacing="lg" divider="top">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Trade History */}
                <div className="lg:col-span-2 space-y-8">
                    <SectionHeader
                        title="Trade History"
                        description="Real-time execution logs from our analyst team."
                        align="left"
                        className="mb-8"
                    />
                    <Card variant="glass" className="border-white/5 overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-white/5">
                                    <TableHead className="py-4 text-gray-500 font-black uppercase tracking-[0.2em] text-[10px]">Asset</TableHead>
                                    <TableHead className="py-4 text-gray-500 font-black uppercase tracking-[0.2em] text-[10px]">Type</TableHead>
                                    <TableHead className="py-4 text-gray-500 font-black uppercase tracking-[0.2em] text-[10px]">Entry</TableHead>
                                    <TableHead className="py-4 text-gray-500 font-black uppercase tracking-[0.2em] text-[10px]">Exit</TableHead>
                                    <TableHead className="py-4 text-right text-gray-500 font-black uppercase tracking-[0.2em] text-[10px]">Return</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentTrades.map((trade, idx) => (
                                    <TableRow key={idx} className="border-white/5 group hover:bg-white/[0.02] transition-colors">
                                        <TableCell label="Asset" className="py-5 font-black text-white">
                                            <div className="flex items-center gap-2">
                                                {trade.ticker}
                                                {trade.hasScreenshot && (
                                                    <ImageIcon className="w-4 h-4 text-brand-500/40 group-hover:text-brand-500 cursor-pointer transition-colors" />
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell label="Type" className="py-5 text-gray-400 text-xs font-bold">{trade.type}</TableCell>
                                        <TableCell label="Entry" className="py-5 text-gray-400 text-xs font-bold">{trade.entry}</TableCell>
                                        <TableCell label="Exit" className="py-5 text-gray-400 text-xs font-bold">{trade.exit}</TableCell>
                                        <TableCell label="Return" className={`py-5 text-right font-black ${trade.return.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                            {trade.return}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="p-8 text-center border-t border-white/5">
                            <a href="/signup" className="text-brand-500 hover:text-brand-400 font-black uppercase tracking-widest text-[10px] transition-colors">
                                Unlock full historical P&L data →
                            </a>
                        </div>
                    </Card>
                </div>

                {/* Strategy Breakdown */}
                <div className="space-y-8">
                    <SectionHeader
                        title="Breakdown"
                        description="Results by signal type."
                        align="left"
                        className="mb-8"
                    />
                    <div className="space-y-6">
                        <Card variant="glass" className="p-8 border-white/5 space-y-8">
                            <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                                <PieChart className="w-4 h-4 text-brand-500" /> Allocation
                            </h4>
                            <div className="space-y-6">
                                {[
                                    { label: "0DTE (Scalps)", value: "62%", color: "bg-brand-500" },
                                    { label: "Weekly Swings", value: "28%", color: "bg-teal-500" },
                                    { label: "Monthly Leaps", value: "10%", color: "bg-blue-500" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                                            <span className="text-gray-500">{item.label}</span>
                                            <span className="text-white">{item.value}</span>
                                        </div>
                                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.color}`} style={{ width: item.value }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card variant="glass" className="p-8 border-white/5 space-y-8">
                            <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-brand-500" /> Monthly P&L
                            </h4>
                            <div className="flex items-end justify-between h-32 gap-2 mt-4">
                                {[
                                    { h: "40%", l: "S" },
                                    { h: "60%", l: "O" },
                                    { h: "80%", l: "N" },
                                    { h: "30%", l: "D", red: true },
                                    { h: "90%", l: "J", highlight: true },
                                    { h: "100%", l: "F", active: true }
                                ].map((bar, i) => (
                                    <div key={i} className={`flex-1 ${bar.active ? 'bg-brand-500' : bar.red ? 'bg-red-500/20' : 'bg-brand-500/20'} rounded-t-lg transition-all hover:scale-105 cursor-pointer`} style={{ height: bar.h }} />
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </StandardSection>
    );
};

export default PerformanceDataSection;
