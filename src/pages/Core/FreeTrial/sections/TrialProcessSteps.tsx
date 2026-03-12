import { Card } from '../../../../components/ui/Card/Card';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';
import step1Img from '../../../../assets/pages images/Modern Lotto and Stocks App-2.png';
import step2Img from '../../../../assets/pages images/Modern Lotto and Stocks App-1.png';

const TrialProcessSteps = () => {
    const steps = [
        {
            number: "01",
            title: "Enter Your Email",
            badge: "No Credit Card Required",
            description: "Click \"Get Access Now\" above and enter your email address. That is it. No payment method. No credit card verification. No auto-billing after 7 days unless you choose to subscribe.",
            image: step1Img,
            alt: "Signup Form"
        },
        {
            number: "02",
            title: "Check Your Email",
            badge: "Instant Delivery",
            description: "Within 60 seconds, you will receive an automated welcome email containing your private Discord invite link. Click it to join our members-only server.",
            image: step2Img,
            alt: "Welcome Email"
        },
        {
            number: "03",
            title: "Set Up Discord",
            badge: "Mobile App Access",
            description: "Download the free Discord app (iOS or Android). Enable push notifications for the #signals channel so you receive instant alerts when new trades are posted. Takes under 2 minutes.",
            links: [
                { text: "Discord setup guide", url: "/discord-setup-guide" }
            ]
        },
        {
            number: "04",
            title: "Receive Your First Signal",
            badge: "Within 24 Hours",
            description: "We send 2–4 signals every trading day between 9:30 AM and 4:00 PM ET. Your first signal arrives the next trading day. Execute it in your broker following our step-by-step instructions.",
            links: [
                { text: "How to execute signals", url: "/how-it-works" }
            ]
        }
    ];

    return (
        <div className="space-y-16">
            <SectionHeader
                title="From Signup to Your First Signal in Under 5 Minutes"
                align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, idx) => (
                    <Card key={idx} variant="glass" className="p-10 border-white/5 bg-white/[0.01] flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute -top-10 -left-10 text-[120px] font-black text-white/[0.03] leading-none pointer-events-none group-hover:text-brand-500/[0.05] transition-colors">{step.number}</div>

                        <div className="relative z-10 space-y-6 flex-1">
                            <div className="space-y-2">
                                <div className="text-brand-400 text-[10px] font-black uppercase tracking-widest">{step.badge}</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Step {parseInt(step.number)}: {step.title}</h3>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {step.links && (
                                <div className="space-y-2 pt-2">
                                    {step.links.map((link, lIdx) => (
                                        <a key={lIdx} href={link.url} className="text-brand-400 hover:text-brand-300 font-bold text-xs flex items-center gap-2 group/link">
                                            {link.text} <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                        </a>
                                    ))}
                                </div>
                            )}

                            {step.image && (
                                <div className="pt-6 mt-auto">
                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                                        <img src={step.image} alt={step.alt} className="w-full h-full object-cover object-top" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TrialProcessSteps;
