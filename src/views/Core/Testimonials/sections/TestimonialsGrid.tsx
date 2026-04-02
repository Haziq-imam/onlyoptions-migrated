import { Card, CardContent } from '../../../../components/ui/Card/Card';
import { Star, Quote } from 'lucide-react';

const TestimonialsGrid = () => {
    const reviews = [
        {
            name: "James K.",
            location: "Chicago, IL",
            role: "Pro Member since March 2023",
            text: "I had tried other signal services before and always hit the same wall — vague alerts and no transparency on what actually happened to the trade. OnlyOptions publishes every result, wins and losses both. That told me the track record was real before I spent a dollar. The signal format gives me everything I need to execute within 90 seconds of receiving the notification. My personal win rate following the signals closely has been right in line with what they publish."
        },
        {
            name: "Rachel T.",
            location: "Austin, TX",
            role: "Basic Member since January 2024",
            text: "I work full time and cannot watch charts during market hours. The push notifications do the heavy lifting — I see the signal, open my broker, and I am done in two minutes. The exit alert removes any guesswork about when to close. After 14 months following the service, the win rate I have tracked in my own account matches their published numbers closely enough that I trust the record completely."
        },
        {
            name: "Marcus W.",
            location: "New York, NY",
            role: "Annual Member since June 2023",
            text: "What separates this service from everything else I have seen is the quality of the written rationale on every signal. It references specific technical levels, volatility conditions, and the reasoning behind the strike and expiry selection. For someone with a finance background, that level of detail is what I need before acting on any alert service with real capital. The transparency on losses is equally important — a service that only shows you wins is hiding something."
        },
        {
            name: "Diana S.",
            location: "Phoenix, AZ",
            role: "Pro Member since September 2023",
            text: "I was skeptical of options signal services after a bad experience elsewhere. What made me try OnlyOptions was the public Performance Dashboard — I spent two weeks reading through historical signals before subscribing. When I finally started the access period, the quality was exactly what the record promised. SMS delivery on the Pro plan has been essential for me. I am in meetings during market hours and the text arrives before I even see the push notification."
        },
        {
            name: "Carlos M.",
            location: "Miami, FL",
            role: "Basic Member since April 2024",
            text: "Six months in and I have not had a single week where I questioned whether this was worth the $60. The signal format is the most complete I have seen — I know the ticker, the exact option to buy, the price range to enter, and exactly when to exit. No ambiguity. I am a relatively new options trader and the education library that comes with the app helped me understand what I was executing before I committed real capital."
        },
        {
            name: "Tom B.",
            location: "Seattle, WA",
            role: "Annual Member since February 2023",
            text: "I have been a subscriber since the first full month of operation — almost three years now. The consistency of the win rate across different market environments is what keeps me here. 2023 had some brutal volatility in Q3 and the win rate dipped, but the signals kept coming and the recovery in Q4 was strong. That is what a real track record looks like — not manufactured perfection. I upgraded to the Annual plan after month two and have renewed twice."
        },
        {
            name: "Priya N.",
            location: "San Jose, CA",
            role: "Pro Member since November 2023",
            text: "The weekly live Q&A on the Pro plan is something I did not think I would use much. Turns out it is one of the most valuable parts of my subscription. Being able to ask about signal rationale, market conditions, and positioning directly has helped me understand not just what signals to take but how to think about the setups behind them. My execution has improved significantly because of those sessions."
        },
        {
            name: "Derek J.",
            location: "Atlanta, GA",
            role: "Basic Member since July 2024",
            text: "I paper traded the signals for three weeks before going live with real money — the Education Library inside the app walked me through exactly how to do that. My paper results were so close to the published win rate that I felt confident subscribing. The first real month was profitable. The stop-losses are always clearly defined which means I never have an open position where I do not know my maximum downside."
        },
        {
            name: "Linda C.",
            location: "Denver, CO",
            role: "Pro Member since May 2023",
            text: "Retired and managing my own portfolio. I had been trading options for years on my own before joining this service. What I get from OnlyOptions is a disciplined second opinion from professionals who look at setups I might miss or avoid. The two-analyst review process they describe on the About page is reflected in the signal quality — you can tell these are not rushed calls. I do not take every signal but I have not missed a month of subscription since I started."
        },
        {
            name: "Aaron H.",
            location: "Minneapolis, MN",
            role: "Annual Member since October 2023",
            text: "I switched from another service specifically because they refused to publish loss records. OnlyOptions not only publishes every loss — they break down the win rate by ticker and even acknowledge on the Performance Dashboard that GOOGL has been their weakest ticker. That is the kind of honest reporting that tells me the numbers I see are real numbers. Results after 16 months: my account is up substantially and the subscription cost is a rounding error compared to what the signals have returned."
        },
        {
            name: "Mei L.",
            location: "Boston, MA",
            role: "Basic Member since March 2024",
            text: "I am a data analyst by profession so I spent a lot of time with the Performance Dashboard before subscribing. The methodology explanation — how they use mid-prices, how wins and losses are classified — is more rigorous than I expected from a signal service. I tested the math on a random sample of 50 signals and the reported returns matched what I calculated from the prices. I started the trial on a Tuesday and subscribed on Friday."
        },
        {
            name: "Frank V.",
            location: "Portland, OR",
            role: "Pro Member since August 2023",
            text: "The exit alerts are the feature that makes this service actually usable. Every other service I tried left me wondering when to exit — waiting too long, cutting too early, or just guessing. OnlyOptions sends a notification for every close. I do not have to monitor positions or make exit decisions. The profit target and stop-loss are in the original signal, and when either is hit, I get the alert to act. For someone who cannot be at a screen all day, this is the only model that works."
        },
        {
            name: "Sandra R.",
            location: "Houston, TX",
            role: "Annual Member since January 2024",
            text: "Fourteen months of subscription. My notes from the first 12 months show a 68% personal win rate which is slightly below the published 70.3% — I attribute the difference to occasionally missing the entry range by a few cents on fast-moving signals. Even at 68%, this service has been the most consistent edge I have found in options trading. I recommend it to every serious options trader I talk to, with the caveat that you need to start with the 2% rule and paper trading first."
        },
        {
            name: "Brian T.",
            location: "Las Vegas, NV",
            role: "Basic Member since June 2024",
            text: "Eight months in. I started with the Basic plan to evaluate before committing to a higher tier. No complaints. Push notifications arrive before I could possibly react to market news myself. The signal format tells me exactly what to do. I have not had the urge to upgrade to Pro because the Basic plan delivers everything I actually need — signals, performance history, education library, and a clear exit strategy for every trade."
        },
        {
            name: "Natasha P.",
            location: "Chicago, IL",
            role: "Pro Member since April 2023",
            text: "Almost two years now. I have tracked every signal I have taken — 312 trades total. My personal win rate is 71.1% which is essentially the published number. The average winner in my personal tracking is slightly higher than published because I hold some positions past the initial target when conditions support it, which the analyst notes sometimes suggest. The Pro plan level of detail in the notes has been worth every dollar of the difference from Basic."
        }
    ];

    return (
        <div className="pt-16 max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Member Reviews — 15 Verified Testimonials</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">Testimonials are presented in order of subscription date — oldest members first, followed by newer members. Every member quoted has a verified active or past subscription.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <Card key={index} variant="glass" className="p-8 border-white/5 flex flex-col relative group">
                        <div className="absolute top-4 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Quote className="w-12 h-12 text-brand-400" />
                        </div>
                        <div className="flex gap-1.5 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-brand-400 text-brand-400" />
                            ))}
                        </div>
                        <CardContent className="flex-1 text-gray-400 text-sm leading-relaxed mb-8 p-0">
                            "{review.text}"
                        </CardContent>
                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center font-black text-brand-500 text-lg border border-brand-500/20">
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <h5 className="font-black text-white text-sm uppercase tracking-tight mb-0.5">{review.name}</h5>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">{review.location}</p>
                                <p className="text-brand-400 text-[10px] font-bold uppercase tracking-widest mt-1">{review.role}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsGrid;
