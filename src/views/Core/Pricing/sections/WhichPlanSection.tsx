import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const WhichPlanSection = () => {
    return (
        <StandardSection variant="default" divider="top" spacing="lg">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    label="Guide"
                    title="Which Plan Is Right for You?"
                    description="Start with the Monthly plan if you are unsure. You can upgrade to Annual at any time."
                    align="center"
                    className="mb-20"
                />

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-white/[0.02]">
                                <TableHead className="w-1/4">Choose This Plan</TableHead>
                                <TableHead>If You Are...</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                {
                                    tier: "Monthly $60/month",
                                    desc: "Starting out and want to evaluate the service before committing to a higher tier. Comfortable checking the app for signals. Primary delivery via push notification is sufficient."
                                },
                                {
                                    tier: "Annual $499.99/year",
                                    desc: "Confident in the service and want to lock in the lowest per-month rate based on consistent performance. Prefer one annual payment over monthly billing. Want premium features like SMS delivery and priority 1-hour support."
                                }
                            ].map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell label="Plan" className="text-brand-400 font-black text-xs uppercase tracking-widest">{item.tier}</TableCell>
                                    <TableCell label="Recommendation" className="text-gray-400 text-xs leading-relaxed">{item.desc}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
                <p className="mt-8 text-[11px] text-gray-500 text-center font-medium">
                    Not sure? Start with the Monthly plan. You can upgrade to Annual at any time from your account dashboard.
                </p>
            </div>
        </StandardSection>
    )
}

export default WhichPlanSection;
