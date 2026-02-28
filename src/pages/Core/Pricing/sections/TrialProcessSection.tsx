import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import Button from '../../../../components/ui/Button/Button';

const TrialProcessSection = () => {
    return (
        <StandardSection variant="institutional" dotGrid divider="top" spacing="lg">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    label="Process"
                    title="The 7-Day Free Trial How It Works"
                    description="Every new subscriber starts with a 7-day free trial. Here is exactly what happens:"
                    align="center"
                    className="mb-20"
                />

                <div className="space-y-6">
                    {[
                        { title: "No credit card required", desc: "You sign up with just your email address. We do not ask for payment information during the free trial." },
                        { title: "Full access from day one", desc: "Your trial includes everything in your chosen plan live signals, app access, performance dashboard, and education library." },
                        { title: "Signals start within 24 hours", desc: "You receive your first live signal on the next market trading day after signup." },
                        { title: "7 calendar days", desc: "The trial runs for exactly 7 days from your signup date and time." },
                        { title: "No auto-charge", desc: "When the trial ends, nothing happens automatically. You must actively choose to subscribe and enter payment details." },
                        { title: "Subscribe early if you want", desc: "If you decide during the trial you want to subscribe, you can do so any time from your account dashboard. Your billing period starts from that date." },
                        { title: "Trial ends no penalty", desc: "If you do nothing when the trial ends, your account becomes inactive. No charge. No follow-up pressure. You can subscribe later if you change your mind." }
                    ].map((step, i) => (
                        <div key={i} className="flex gap-8 p-10 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-brand-500/20 transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0 text-brand-400 font-black group-hover:bg-brand-500 group-hover:text-white transition-all">
                                {i + 1}
                            </div>
                            <div>
                                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-3">{step.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <Button href="/free-trial" variant="primary" className="px-12 h-16 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl">
                        Start Free Trial
                    </Button>
                </div>
            </div>
        </StandardSection>
    )
}
export default TrialProcessSection;
