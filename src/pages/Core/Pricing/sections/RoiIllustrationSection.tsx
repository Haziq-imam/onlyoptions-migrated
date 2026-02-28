import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';
import Button from '../../../../components/ui/Button/Button';

const RoiIllustrationSection = () => {
    return (
        <StandardSection variant="muted" divider="top" spacing="lg">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    label="Economics"
                    title="What the Subscription Costs vs. What It Can Return"
                    description="The $60/month subscription cost is meaningful only in context. Here is a straightforward illustration using our published win rate and average return data not a guarantee of what you will earn."
                    align="center"
                    className="mb-20"
                />

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-white/[0.02]">
                                <TableHead>Scenario</TableHead>
                                <TableHead className="text-right">$5,000 Account</TableHead>
                                <TableHead className="text-right">$10,000 Account</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { label: "Signals per month (typical)", val1: "~60 signals", val2: "~60 signals" },
                                { label: "Signals taken (selective, 30%)", val1: "~18 trades", val2: "~18 trades" },
                                { label: "Risk per trade (2% rule)", val1: "$100 per trade", val2: "$200 per trade" },
                                { label: "Win rate (historical average)", val1: "70.3%", val2: "70.3%" },
                                { label: "Average winner (historical)", val1: "+87%", val2: "+87%" },
                                { label: "Average loser (historical)", val1: "-30%", val2: "-30%" },
                                { label: "Estimated monthly net result*", val1: "+$540 approx.", val2: "+$1,080 approx.", highlight: true },
                                { label: "Subscription cost", val1: "$60/month", val2: "$60/month" },
                                { label: "Net after subscription", val1: "+$480 approx.", val2: "+$1,020 approx.", highlight: true }
                            ].map((row, i) => (
                                <TableRow key={i} className={row.highlight ? "bg-brand-500/5" : ""}>
                                    <TableCell className="text-gray-300 font-bold">{row.label}</TableCell>
                                    <TableCell label="$5k Account" className={`text-right ${row.highlight ? 'text-green-400 font-black' : 'text-gray-400'}`}>{row.val1}</TableCell>
                                    <TableCell label="$10k Account" className={`text-right ${row.highlight ? 'text-green-400 font-black' : 'text-gray-400'}`}>{row.val2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
                <p className="mt-8 text-[10px] text-gray-500 italic text-center max-w-4xl mx-auto leading-relaxed">
                    * Illustration only. Based on 70.3% win rate and +87% average winner / -30% average loser from our published historical record. Actual results will vary based on which signals you take, your execution prices, position sizing, and market conditions. Past performance does not guarantee future results. Options trading involves substantial risk of loss.
                </p>
                <div className="flex justify-center mt-12">
                    <Button href="/roi-calculator-options" variant="secondary" className="px-8 h-12 rounded-xl text-xs font-black uppercase tracking-widest border-white/10 hover:bg-white/5 transition-all">
                        Use our free ROI Calculator
                    </Button>
                </div>
            </div>
        </StandardSection>
    )
}
export default RoiIllustrationSection;
