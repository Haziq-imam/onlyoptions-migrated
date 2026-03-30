import StandardSection from '../../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import Button from '../../../../components/ui/Button/Button';

const TrialProcessSection = () => {
    return (
        <StandardSection variant="institutional" dotGrid divider="top" spacing="lg">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    label="Membership"
                    title="Our Premium Membership Promise"
                    description="We provide total transparency and flexibility. Here is how we ensure you have complete control over your membership:"
                    align="center"
                    className="mb-20"
                />

                <div className="space-y-6">
                    {[
                        { title: "Flexible Membership", desc: "You maintain full control over your status at all times. We believe in providing value without long-term commitments." },
                        { title: "Full access from day one", desc: "Your membership includes everything in your chosen plan — live signals, app access, performance dashboard, and education library." },
                        { title: "Signals start within 24 hours", desc: "You receive your first live signal on the next market trading day after joining." },
                        { title: "Satisfaction Guarantee", desc: "Evaluate the service with confidence. If you are not satisfied within your first 7 days, we offer a full, no-questions-asked refund." },
                        { title: "Clear Transparency", desc: "No hidden charges or forced renewals. You choose your plan and manage your membership preferences instantly." },
                        { title: "Full Account Control", desc: "Manage everything from your personal account dashboard. Your billing period and service access are clearly displayed." },
                        { title: "Zero Pressure", desc: "We focus on delivering performance. If you decide the service isn't for you, you can change your status at any time without penalty or pressure." }
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
                    <Button href="/membership" variant="primary" className="px-12 h-16 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl">
                        Start Your Membership
                    </Button>
                </div>
            </div>
        </StandardSection>
    )
}
export default TrialProcessSection;
