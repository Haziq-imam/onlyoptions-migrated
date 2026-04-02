import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Target, AlertTriangle, Scale, Ban, CheckCircle2 } from 'lucide-react';
import Button from '../../../../components/ui/Button/Button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const Step3ExecuteTrade = () => {
    return (
        <div className="space-y-16">
            <SectionHeader
                title="Step 3: Execute the Trade in Under 60 Seconds"
                description="Once the alert arrives, open your broker, find the options chain, locate the exact strike and expiry, and place a limit order within the entry range. For 0DTE signals aim for under 5 minutes. For weekly and monthly signals you have 15–30 minutes."
                align="left"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* 5 Golden Execution Rules */}
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">The 5 Golden Execution Rules</h4>

                    <div className="space-y-4">
                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><Ban className="w-5 h-5 text-red-400" /></div>
                                <div>
                                    <h5 className="text-white font-bold mb-1">Rule 1: Never Chase a Signal</h5>
                                    <p className="text-gray-400 text-sm">If the option is already trading above our entry range upper bound, skip it. A bad entry destroys the risk-reward ratio. Another signal arrives within hours.</p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><Target className="w-5 h-5 text-brand-400" /></div>
                                <div>
                                    <h5 className="text-white font-bold mb-1">Rule 2: Always Use Limit Orders</h5>
                                    <p className="text-gray-400 text-sm">Options have wide bid-ask spreads. A market order fills at the worst price. A limit order at the mid-price almost always fills within seconds on liquid tickers and saves real money per trade.</p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><AlertTriangle className="w-5 h-5 text-orange-400" /></div>
                                <div>
                                    <h5 className="text-white font-bold mb-1">Rule 3: Set Your Stop-Loss Immediately</h5>
                                    <p className="text-gray-400 text-sm">After entering, immediately set a GTC stop-limit order at the stop-loss price from the signal. Non-negotiable. The most common way traders blow accounts is holding losers past the stop.</p>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><Scale className="w-5 h-5 text-blue-400" /></div>
                                <div>
                                    <h5 className="text-white font-bold mb-1">Rule 4: Size Positions Using the 2% Rule</h5>
                                    <p className="text-gray-400 text-sm">Never risk more than 2% of your account per signal. Example: $10,000 x 2% = $200 max risk. Entry $2.40, stop $1.65 risk per contract = $75. Max contracts = $200 / $75 = 2 contracts.</p>
                                    <a href="/blog" className="text-brand-400 text-xs font-bold mt-2 hover:text-brand-300 transition-colors inline-block">Calculate your position size →</a>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-6 border-white/5 bg-white/[0.02]">
                            <div className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                                <div>
                                    <h5 className="text-white font-bold mb-1">Rule 5: Do Not Trade Every Signal</h5>
                                    <p className="text-gray-400 text-sm">You are not required to take every alert. If one arrives while you are in a meeting, skip it. Selectivity is discipline, not laziness.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Broker Comparison Table */}
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Broker Comparison for Signal Execution</h4>

                    <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Broker</TableHead>
                                    <TableHead>Commission</TableHead>
                                    <TableHead>Speed</TableHead>
                                    <TableHead className="flex-1 w-full">Best For</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell label="Broker" className="text-white font-bold whitespace-nowrap">Thinkorswim</TableCell>
                                    <TableCell label="Commission" className="text-gray-400">$0.65/contract</TableCell>
                                    <TableCell label="Speed" className="text-brand-400">⭐⭐⭐⭐⭐</TableCell>
                                    <TableCell label="Best For" className="text-gray-400">Serious traders—best charting & execution</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Broker" className="text-white font-bold whitespace-nowrap">Tastyworks</TableCell>
                                    <TableCell label="Commission" className="text-gray-400">$1.00/contract</TableCell>
                                    <TableCell label="Speed" className="text-brand-400">⭐⭐⭐⭐⭐</TableCell>
                                    <TableCell label="Best For" className="text-gray-400">Spreads and high-frequency options trading</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Broker" className="text-white font-bold whitespace-nowrap">Webull</TableCell>
                                    <TableCell label="Commission" className="text-green-400 font-bold">$0/contract</TableCell>
                                    <TableCell label="Speed" className="text-brand-400">⭐⭐⭐⭐</TableCell>
                                    <TableCell label="Best For" className="text-gray-400">Beginners—clean mobile app, free commissions</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Broker" className="text-white font-bold whitespace-nowrap">Robinhood</TableCell>
                                    <TableCell label="Commission" className="text-green-400 font-bold">$0/contract</TableCell>
                                    <TableCell label="Speed" className="text-brand-400">⭐⭐⭐</TableCell>
                                    <TableCell label="Best For" className="text-gray-400">Absolute beginners—simple but limited tools</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Broker" className="text-white font-bold whitespace-nowrap">Interactive Brokers</TableCell>
                                    <TableCell label="Commission" className="text-gray-400">$0.65/contract</TableCell>
                                    <TableCell label="Speed" className="text-brand-400">⭐⭐⭐⭐⭐</TableCell>
                                    <TableCell label="Best For" className="text-gray-400">High-volume traders, lowest margin rates</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>

                    <div className="pt-8">
                        <Button href="/blog" variant="outline" className="w-full justify-center">Read Full Broker Comparison Guide</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3ExecuteTrade;
