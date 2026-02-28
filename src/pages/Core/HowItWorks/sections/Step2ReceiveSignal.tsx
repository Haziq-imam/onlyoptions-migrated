import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Rocket, AlertTriangle } from 'lucide-react';
import SignalImage from '../../../../assets/pages images/signal-looklike.png';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const Step2ReceiveSignal = () => {
    return (
        <div className="space-y-16">
            <SectionHeader
                title="Step 2: Receive a Real-Time Options Alert With All the Info You Need"
                description="Our analysts send 2–4 signals every trading day between 9:30 AM and 3:30 PM ET. Every alert follows the same strict format—no vague language, no hype. Exact numbers, a clear rationale, and defined risk parameters every time."
                align="left"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Visual Discord Embed Mockup */}
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-brand-500" /> Exact Signal Format
                    </h4>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-brand-500/20">
                        <img src={SignalImage} alt="OnlyOptions Signal Format" className="w-full h-auto object-contain bg-[#313338]" />
                    </div>
                </div>

                {/* What Every Field Means Table */}
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-brand-500" /> What Every Field Means
                    </h4>

                    <Card variant="glass" className="overflow-hidden border-white/5 relative p-0">
                        <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                            <Table>
                                <TableHeader>
                                    <TableRow className="sticky top-0 bg-gray-950/80 backdrop-blur z-10">
                                        <TableHead className="w-1/4">Field</TableHead>
                                        <TableHead>Meaning</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Ticker</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">The stock or ETF we are trading. SPY = S&P 500 ETF. QQQ = Nasdaq-100. We only signal high-liquidity tickers with tight bid-ask spreads.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Type</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">CALL = profit when price rises. PUT = profit when price falls. We signal both directions.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Strike</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">The price level you are betting on. We choose 0.40–0.55 delta strikes for balanced probability and leverage.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Expiry</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">0DTE = expires today. Weekly = 3–7 days. Monthly = 2–4 weeks. Match expiry to your risk tolerance.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Entry Range</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">The price band for entering. If the option has moved above the upper bound before you act, <strong className="text-white">skip the trade</strong>.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Profit Target</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">Close the position when our exit alert arrives or the option reaches this price.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Stop-Loss</TableCell>
                                        <TableCell label="Meaning" className="text-red-300">Exit immediately if the option falls here. Set this as a GTC working order right after entering. Non-negotiable.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Confidence</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">3-star = all filters passed. 2-star = strong setup with one uncertain variable.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Risk / Reward</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">Profit target distance divided by stop-loss distance. We require minimum 2:1.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell label="Field" className="text-brand-400 font-bold">Rationale</TableCell>
                                        <TableCell label="Meaning" className="text-gray-400">Plain-English reason for the trade to help you think like a professional trader.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Timing Table */}
            <div className="pt-12 border-t border-white/5">
                <SectionHeader
                    title="Signal Timing: When to Expect Alerts"
                    description="Understand our daily rhythm."
                    align="center"
                    className="mb-8"
                />

                <div className="max-w-4xl mx-auto">
                    <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Time (ET)</TableHead>
                                    <TableHead>Signal Type</TableHead>
                                    <TableHead>What to Expect</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell label="Time (ET)" className="text-white font-bold whitespace-nowrap">9:30–10:00 AM</TableCell>
                                    <TableCell label="Signal Type" className="text-gray-400">Rarely</TableCell>
                                    <TableCell label="What to Expect" className="text-gray-400">We wait 30 min to confirm direction and avoid open-market whipsaws.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Time (ET)" className="text-white font-bold whitespace-nowrap">10:00–11:30 AM</TableCell>
                                    <TableCell label="Signal Type" className="text-brand-400 font-bold">Weekly/Monthly</TableCell>
                                    <TableCell label="What to Expect" className="text-gray-400">Most swing and monthly signals sent here after trend confirms.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Time (ET)" className="text-white font-bold whitespace-nowrap">11:30 AM–2 PM</TableCell>
                                    <TableCell label="Signal Type" className="text-gray-400">Light</TableCell>
                                    <TableCell label="What to Expect" className="text-gray-400">Lunch lull—fewer setups. Quality beats quantity.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Time (ET)" className="text-white font-bold whitespace-nowrap">2:00–3:00 PM</TableCell>
                                    <TableCell label="Signal Type" className="text-purple-400 font-bold">0DTE Primary</TableCell>
                                    <TableCell label="What to Expect" className="text-gray-400">Fed data and intraday setups trigger most 0DTE alerts.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Time (ET)" className="text-white font-bold whitespace-nowrap">3:00–4:00 PM</TableCell>
                                    <TableCell label="Signal Type" className="text-orange-400 font-bold">0DTE Power Hour</TableCell>
                                    <TableCell label="What to Expect" className="text-gray-400">Highest signal frequency. Gamma acceleration into close creates big moves.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell label="Time (ET)" className="text-gray-500 font-bold whitespace-nowrap">After 4:00 PM</TableCell>
                                    <TableCell label="Signal Type" className="text-gray-500 font-bold">Exit Alerts Only</TableCell>
                                    <TableCell label="What to Expect" className="text-gray-500">No new entries. Post-market debrief and next-day watchlist in Discord.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Step2ReceiveSignal;
