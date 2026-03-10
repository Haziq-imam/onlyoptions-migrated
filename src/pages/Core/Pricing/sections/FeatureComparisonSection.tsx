import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const FeatureComparisonSection = () => {
    return (
        <StandardSection className="py-32">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    label="Comparison"
                    title="Full Feature Comparison"
                    description="Every plan includes live signals. The table below shows exactly what differs between plans."
                    align="center"
                    className="mb-20"
                />

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-white/[0.02]">
                                <TableHead className="w-1/3">Feature</TableHead>
                                <TableHead className="text-center">Basic <br /><span className="text-brand-400 capitalize">$60/mo</span></TableHead>
                                <TableHead className="text-center">Pro <br /><span className="text-brand-400 capitalize">$99/mo</span></TableHead>
                                <TableHead className="text-center">Annual <br /><span className="text-brand-400 capitalize">$600/yr</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { f: "2–4 daily options signals", b: true, p: true, a: true },
                                { f: "iOS & Android app access", b: true, p: true, a: true },
                                { f: "Push notification delivery", b: true, p: true, a: true },
                                { f: "Complete signal format (10 fields)", b: true, p: true, a: true },
                                { f: "Exit alerts for every position", b: true, p: true, a: true },
                                { f: "Performance dashboard", b: true, p: true, a: true },
                                { f: "Education library", b: true, p: true, a: true },
                                { f: "Email support", b: "24hr response", p: "1hr response", a: "1hr response" },
                                { f: "SMS text message delivery", b: false, p: true, a: true },
                                { f: "Weekly live Q&A sessions", b: false, p: true, a: true },
                                { f: "Advanced analyst notes", b: false, p: true, a: true },
                                { f: "Annual savings", b: "—", p: "—", a: "Save $120/yr" },
                                { f: "Price lock guarantee", b: "Month-to-month", p: "Month-to-month", a: "✅ Locked in" },
                                { f: "Free trial", b: "7 days", p: "7 days", a: "7 days" },
                                { f: "Money-back guarantee", b: "7 days", p: "7 days", a: "7 days" },
                                { f: "Cancel anytime", b: true, p: true, a: true }
                            ].map((row, i) => (
                                <TableRow key={i} className="hover:bg-white/[0.01]">
                                    <TableCell label="Feature" className="text-gray-300 font-bold">{row.f}</TableCell>
                                    <TableCell label="Basic" className="text-center">
                                        {typeof row.b === 'boolean' ? (row.b ? "✅" : "❌") : <span className="text-gray-400">{row.b}</span>}
                                    </TableCell>
                                    <TableCell label="Pro" className="text-center">
                                        {typeof row.p === 'boolean' ? (row.p ? "✅" : "❌") : <span className="text-white font-bold">{row.p}</span>}
                                    </TableCell>
                                    <TableCell label="Annual" className="text-center">
                                        {typeof row.a === 'boolean' ? (row.a ? "✅" : "❌") : <span className="text-white font-bold">{row.a}</span>}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </StandardSection>
    )
}

export default FeatureComparisonSection;
