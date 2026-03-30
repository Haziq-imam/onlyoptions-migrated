import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const WhatYouGetTable = () => {
    const features = [
        { item: "2–4 Daily Options Signals", meaning: "SPY, QQQ, NVDA, TSLA, AAPL calls and puts with exact entry, target, and stop-loss" },
        { item: "Private Discord Access", meaning: "Real-time alerts, analyst Q&A, community of 1,200+ traders" },
        { item: "Performance Dashboard", meaning: "Live win rate, monthly P&L, complete trade history with screenshots since 2023" },
        { item: "Education Library", meaning: "Options 101, Greeks mastery, risk management, broker setup guides, strategy tutorials" },
        { item: "Trade Follow-Ups", meaning: "Exit alerts, partial profit recommendations, stop-loss adjustments during active trades" },
        { item: "Post-Trade Analysis", meaning: "Detailed debrief on every closed signal — what worked, what didn't, lessons learned" },
        { item: "Mobile Notifications", meaning: "Discord push alerts to your phone — never miss a signal" },
        { item: "Email Support", meaning: "24-hour response time for all members" },
    ];

    return (
        <div className="space-y-12">
            <SectionHeader
                title="Full Access to Everything — Professional Signaling Infrastructure"
                description="Your Premium Membership includes every feature of our $60/month Basic plan. Experience our professional signaling infrastructure with complete access to all member resources."
                align="left"
            />

            <Card variant="glass" className="overflow-hidden border-white/5 p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Member Privileges</TableHead>
                            <TableHead>What This Means</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {features.map((feature, idx) => (
                            <TableRow key={idx}>
                                <TableCell label="Included" className="text-white font-bold">{feature.item}</TableCell>
                                <TableCell label="Meaning" className="text-gray-400">{feature.meaning}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 mt-8">
                <h4 className="text-white font-black mb-4 uppercase tracking-wider text-sm">The Value of Your Membership</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    7 days of professional signals = <span className="text-white font-bold">Included</span> ($14 pro-rated value).
                    Education library access = <span className="text-white font-bold">$97 value</span> (typical course price).
                    Performance dashboard transparency = <span className="text-brand-400 font-bold uppercase tracking-tighter">priceless</span>.
                    <span className="block mt-2 text-brand-400 font-black">Total value: $100+ included in your initial membership access.</span>
                </p>
            </Card>
        </div>
    );
};

export default WhatYouGetTable;
