import { Card, CardHeader, CardTitle } from '../../../components/ui/Card/Card';
import Button from '../../../components/ui/Button/Button';
import { Check, ShieldCheck, Zap } from 'lucide-react';

const FreeTrial = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-[var(--color-base-dark)]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Value Prop */}
        <div className="hidden lg:block">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-bold tracking-widest uppercase mb-6">
            Risk-Free Offer
          </div>
          <h1 className="text-5xl font-extrabold mb-8 tracking-tight leading-tight">
            Try the #1 Options Group for <span className="text-brand-400">7 Days Free.</span>
          </h1>
          <p className="text-gray-400 text-xl mb-12 max-w-lg">
            Experience our institutional-grade signals yourself. <span className="text-white font-bold">No credit card required</span> for the first week.
          </p>

          <ul className="space-y-6">
            {[
              "Full access to the private Discord",
              "Live 0DTE & Swing signals",
              "Watch our analysts trade live",
              "Zero commitment. Cancel anytime.",
              "Upgrade only when you are profitable"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-200">
                <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Simple Signup Form Overlay */}
        <div>
          <Card className="p-8 md:p-10 border-brand-800/20 bg-gray-900/40 backdrop-blur-xl relative overflow-hidden shadow-[0_0_80px_rgba(0,194,168,0.1)]">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-500/10 blur-3xl -z-10"></div>

            <CardHeader className="text-center mb-8">
              <CardTitle className="text-3xl font-bold mb-2">Start Your Trial</CardTitle>
              <p className="text-green-400 font-bold uppercase tracking-widest text-xs mt-2">$0.00 Due Today</p>
            </CardHeader>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Choose Password</label>
                <input
                  type="password"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div className="pt-4">
                <Button variant="primary" size="lg" className="w-full font-bold shadow-[0_0_20px_rgba(0,194,168,0.3)] hover:shadow-[0_0_30px_rgba(0,194,168,0.5)]">
                  Unlock Discord Access
                </Button>
              </div>

              <div className="text-center text-xs text-gray-500 mt-6 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  No Card Required
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Instant Access
                </div>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-white/5 text-center">
              <p className="text-sm text-gray-400">
                Already a member? <a href="/login" className="text-brand-400 font-bold hover:text-brand-300">Log In</a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
