import HeroSection from '../../../components/sections/Hero/HeroSection';
import CTASection from '../../../components/sections/CTA/CTASection';
import { Card, CardTitle } from '../../../components/ui/Card/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/Table/Table';
import { ArrowUpRight, BarChart3, TrendingUp, PieChart, History, Calendar } from 'lucide-react';

const Performance = () => {
  const stats = [
    { label: "Overall Win Rate", value: "74.8%", icon: <TrendingUp className="w-5 h-5" />, color: "text-green-400" },
    { label: "Avg. Return / Trade", value: "+32.4%", icon: <ArrowUpRight className="w-5 h-5" />, color: "text-brand-400" },
    { label: "Total Trades (Prev 30d)", value: "114", icon: <History className="w-5 h-5" />, color: "text-blue-400" },
    { label: "Monthly Profit", value: "$4,120", icon: <BarChart3 className="w-5 h-5" />, color: "text-teal-400" }
  ];

  const recentTrades = [
    { ticker: "SPY", type: "0DTE CALL", entry: "$1.20", exit: "$2.10", return: "+75%", date: "Feb 24, 2026" },
    { ticker: "NVDA", type: "WEEKLY CALL", entry: "$4.50", exit: "$5.80", return: "+28.8%", date: "Feb 23, 2026" },
    { ticker: "QQQ", type: "0DTE PUT", entry: "$0.95", exit: "$1.40", return: "+47.3%", date: "Feb 22, 2026" },
    { ticker: "TSLA", type: "WEEKLY PUT", entry: "$3.20", exit: "$2.90", return: "-9.4%", date: "Feb 20, 2026" },
    { ticker: "AMD", type: "0DTE CALL", entry: "$1.10", exit: "$1.95", return: "+77.2%", date: "Feb 19, 2026" }
  ];

  return (
    <div className="pb-20">
      <HeroSection
        title="Live Performance Transparency"
        subtitle="We track every single trade. No hidden losses, no cherry-picked wins. Real results for real traders."
        primaryCtaText="Start Free Trial"
        primaryCtaLink="/signup"
      />

      <section className="px-6 md:px-12 -mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="flex items-center gap-5 p-6 border-brand-800/10">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Trade History */}
            <div className="lg:col-span-2">
              <Card className="h-full border-brand-800/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <History className="w-6 h-6 text-brand-400" />
                    <CardTitle className="text-xl">Recent Trade History</CardTitle>
                  </div>
                  <div className="text-sm font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    February 2026
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow className="text-gray-500 text-sm">
                      <TableHead className="pb-4 font-medium">Asset</TableHead>
                      <TableHead className="pb-4 font-medium">Type</TableHead>
                      <TableHead className="pb-4 font-medium">Entry</TableHead>
                      <TableHead className="pb-4 font-medium">Exit</TableHead>
                      <TableHead className="pb-4 font-medium text-right">Return</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y divide-white/5">
                    {recentTrades.map((trade, idx) => (
                      <TableRow key={idx} className="group hover:bg-white/5">
                        <TableCell className="py-5 font-bold">{trade.ticker}</TableCell>
                        <TableCell className="py-5 text-gray-400 text-sm whitespace-nowrap">{trade.type}</TableCell>
                        <TableCell className="py-5 text-gray-400">{trade.entry}</TableCell>
                        <TableCell className="py-5 text-gray-400">{trade.exit}</TableCell>
                        <TableCell className={`py-5 text-right font-bold ${trade.return.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {trade.return}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                  <a href="/login" className="text-brand-400 hover:text-brand-300 font-medium text-sm">
                    View Full historical P&L Data →
                  </a>
                </div>
              </Card>
            </div>

            {/* Strategy Breakdown */}
            <div className="flex flex-col gap-8">
              <Card className="border-brand-800/10">
                <div className="flex items-center gap-3 mb-8">
                  <PieChart className="w-6 h-6 text-brand-400" />
                  <CardTitle className="text-xl">Strategy Breakdown</CardTitle>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">0DTE (Day Trading)</span>
                      <span className="font-bold">62%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 w-[62%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Weekly Swings</span>
                      <span className="font-bold">28%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 w-[28%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Monthly Leaps</span>
                      <span className="font-bold">10%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[10%]"></div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-brand-900/40 to-black border-brand-500/20">
                <h4 className="text-lg font-bold mb-4">Want these results?</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Our signals are consistent, transparent, and proven over the long term. Join the community to see entries and exits in real-time.
                </p>
                <a href="/signup" className="block w-full">
                  <button className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold transition-all shadow-lg text-sm">
                    Get Real-Time Alerts
                  </button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Dominate the Markets Together"
        subtitle="Don't trade alone. Join a community of over 5,000 professional options traders."
        primaryCtaText="Start Risk-Free Trial"
        primaryCtaLink="/signup"
      />
    </div>
  );
};

export default Performance;
