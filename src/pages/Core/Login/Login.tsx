import { Card, CardHeader, CardTitle } from '../../../components/ui/Card/Card';
import Button from '../../../components/ui/Button/Button';
import { ShieldAlert } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-[var(--color-base-dark)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <Card className="p-8 md:p-10 border-brand-800/20 bg-gray-900/40 backdrop-blur-xl shadow-[0_0_80px_rgba(0,194,168,0.1)]">
          <CardHeader className="text-center mb-8">
            <CardTitle className="text-3xl font-bold mb-2">Welcome Back</CardTitle>
            <p className="text-gray-500">Log in to your member dashboard.</p>
          </CardHeader>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                placeholder="trader@example.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-400">Password</label>
                <a href="#" className="text-xs text-brand-400 hover:text-brand-300 font-medium">Forgot Password?</a>
              </div>
              <input
                type="password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div className="pt-2">
              <Button variant="primary" size="lg" className="w-full font-bold shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40">
                Log In
              </Button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-3 mt-6">
              <ShieldAlert className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Remember: OnlyOptions staff will never ask for your password or direct message you first on Discord.
              </p>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account? <a href="/signup" className="text-brand-400 font-bold hover:text-brand-300 transition-colors">Sign Up</a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
