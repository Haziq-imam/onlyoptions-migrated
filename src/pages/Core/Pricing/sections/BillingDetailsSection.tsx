import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../../components/ui/Card/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../../components/ui/Table/Table';

const BillingDetailsSection = () => {
    return (
        <StandardSection variant="default" divider="top" spacing="lg">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    label="Details"
                    title="Billing, Cancellation, and Refunds"
                    description="Transparent policies. No hidden terms."
                    align="center"
                    className="mb-20"
                />

                <Card variant="institutional" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-white/[0.02]">
                                <TableHead className="w-1/3">Topic</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { t: "Billing cycle", d: "Monthly plans: billed on the same date each month. Annual plan: billed once per year." },
                                { t: "Payment methods", d: "All major credit and debit cards (Visa, Mastercard, Amex, Discover). Processed securely via Stripe." },
                                { t: "Automatic renewal", d: "Monthly and annual plans renew automatically. You will receive a reminder email 3 days before each renewal." },
                                { t: "Cancellation", d: "Cancel anytime from your account dashboard or by emailing support@onlyoptions.us. Access continues until the end of your current billing period. No cancellation fees." },
                                { t: "7-day money-back guarantee", d: "First payment only. If you subscribe and are unsatisfied within 7 days of your first charge, email support@onlyoptions.us for a full refund. Renewal payments are not eligible for refunds." },
                                { t: "Upgrading plans", d: "You can upgrade from Basic to Pro or Annual at any time. Billing adjusts pro-rata for the remainder of your current period." },
                                { t: "Downgrading plans", d: "You can downgrade at the end of your current billing period. Changes take effect on your next renewal date." },
                                { t: "Price changes", d: "We will notify you by email at least 30 days before any price change. Your current price is guaranteed until notification." }
                            ].map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell className="text-gray-300 font-black uppercase text-[10px] tracking-widest">{row.t}</TableCell>
                                    <TableCell className="text-gray-400 text-xs leading-relaxed">{row.d}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>

                <div className="flex justify-center mt-12">
                    <a href="/refund-policy" className="text-brand-500 font-black uppercase text-[10px] tracking-widest hover:text-brand-400">[ Internal Link ] → Read full Refund Policy</a>
                </div>
            </div>
        </StandardSection>
    )
}
export default BillingDetailsSection;
