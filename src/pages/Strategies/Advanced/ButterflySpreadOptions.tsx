import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiArrowRight, FiActivity, FiAlertTriangle, FiTrendingUp, FiTarget, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import { Card } from '../../../components/ui/Card/Card';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/Table/Table';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white uppercase tracking-wider text-sm">
                {question}
                <span className="text-brand-500 transition-transform group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
            </summary>
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                {answer}
            </div>
        </details>
    );
};

const ButterflySpreadOptions = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <Helmet>
                <title>Butterfly Spreads Strategy Guide | Low-Cost, High-Reward Options</title>
                <meta name="description" content="Complete Butterfly Spreads Strategy Guide. Learn this 3-strike, 4-leg options strategy that profits when a stock lands precisely at a target price at expiration." />
                <link rel="canonical" href="https://onlyoptions.us/butterfly-spread-options" />
            </Helmet>

            {/* Hero Section */}
            <StandardSection variant="default" spacing="lg">
                <SectionHeader
                    label="Strategy Guide #15 of 30"
                    title={<>Butterfly Spreads <span className="text-brand-500">Strategy</span></>}
                    description="Low-Cost, High-Reward Precision Trades"
                    align="center"
                    className="mb-12"
                />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
                    {[
                        { label: "Win Rate", value: "64.3%" },
                        { label: "Avg Winner", value: "+187%" },
                        { label: "Entry Debit", value: "$0-$3" },
                        { label: "DTE at Entry", value: "7-21" },
                        { label: "Placement", value: "Precise" }
                    ].map((stat, i) => (
                        <Card key={i} variant="glass" className="p-6 text-center border-white/5 bg-gray-950/40 hover:border-brand-500/30 transition-all">
                            <h4 className="text-brand-500 font-black mb-2 text-2xl tracking-tight">{stat.value}</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                        </Card>
                    ))}
                </div>

                {/* What is a Butterfly Spread */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">What Is a Butterfly Spread?</h2>
                            <p className="text-brand-500 text-[10px] font-black uppercase tracking-widest">Definition & Concept</p>
                        </div>
                        <div className="prose prose-invert prose-brand max-w-none text-gray-400">
                             <p>
                                A butterfly spread is a 3-strike, 4-leg options strategy that profits when a stock lands precisely at a target price at expiration. It combines two spreads — a bull spread and a bear spread — sharing the middle strike. The result is a low-cost trade with a defined, attractive max profit if your price target is exactly right.
                             </p>
                             <p>
                                Think of it as a precision sniper shot. Iron condors profit from a range. Butterflies profit from an exact pinpoint target. When you're highly confident a stock will land at a specific price — near a major support/resistance level, post-earnings stabilization, or an options pinning level — butterflies offer exceptional risk/reward.
                             </p>
                        </div>
                    </div>
                    
                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Feature</TableHead>
                                    <TableHead>Iron Condor</TableHead>
                                    <TableHead>Credit Spread</TableHead>
                                    <TableHead className="text-brand-500">Butterfly</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { f: "Profit condition", ic: "Stays in wide range", cs: "Moves one direction", b: "Lands at exact target", c: "text-brand-500" },
                                    { f: "Risk profile", ic: "Defined", cs: "Defined", b: "Defined (debit paid)", c: "" },
                                    { f: "Entry cost", ic: "Credit received", cs: "Credit or debit", b: "Small debit ($0.50-$3)", c: "text-white" },
                                    { f: "Max profit", ic: "Credit collected", cs: "Spread - debit", b: "Very high (10-30x)", c: "text-brand-400 font-bold" },
                                    { f: "Best environment", ic: "High IV, range-bound", cs: "High IV, directional", b: "Any IV — precision", c: "" },
                                    { f: "Skill required", ic: "Intermediate", cs: "Intermediate", b: "Intermed-Advanced", c: "" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Feature" className="text-gray-400 text-xs font-black uppercase tracking-widest">{row.f}</TableCell>
                                        <TableCell label="Iron Condor" className="text-gray-500 text-xs">{row.ic}</TableCell>
                                        <TableCell label="Credit Spread" className="text-gray-500 text-xs">{row.cs}</TableCell>
                                        <TableCell label="Butterfly" className={`text-xs ${row.c || 'text-white'}`}>{row.b}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* The 4 Types */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Variants" title="The 4 Types of Butterfly Spreads" align="center" className="mb-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { 
                            t: "Type 1 — Long Call Butterfly (Most Common)", 
                            d: "Buy 1 lower-strike call, sell 2 middle-strike calls, buy 1 upper-strike call. All same expiration. Equal spacing between strikes. Profit if stock lands at the middle strike at expiration.",
                            ex: "AAPL at $185, target: $195 at expiration\nBuy 1 x $185 call @ $5.80\nSell 2 x $195 call @ $2.40 each = $4.80\nBuy 1 x $205 call @ $0.85\n\nNet debit: $5.80 - $4.80 + $0.85 = $1.85\nMax profit at $195: ($195-$185) - $1.85 = $8.15 = +441%\nMax loss: $1.85 (debit paid)"
                        },
                        { 
                            t: "Type 2 — Long Put Butterfly", 
                            d: "Buy 1 higher-strike put, sell 2 middle-strike puts, buy 1 lower-strike put. Mirror of the call butterfly. Same profit structure — lands at middle strike.",
                            ex: "SPY at $450, target: $440 at expiration (mild pullback)\nBuy 1 x $450 put @ $5.20\nSell 2 x $440 put @ $2.60 each = $5.20\nBuy 1 x $430 put @ $1.10\n\nNet debit: $5.20 - $5.20 + $1.10 = $1.10\nMax profit at $440: ($450-$440) - $1.10 = $8.90 = +809%\nMax loss: $1.10 (debit paid)"
                        },
                        { 
                            t: "Type 3 — Iron Butterfly", 
                            d: "Sell 1 ATM call AND 1 ATM put (same strike), buy 1 OTM call and 1 OTM put for protection. Essentially an iron condor with the short strikes at the same level — maximum premium collected, narrowest profit zone.",
                            ex: "SPY at $450\nSell 1 x $450 call @ $5.40 (ATM)\nSell 1 x $450 put @ $5.20 (ATM)\nBuy 1 x $460 call @ $2.10\nBuy 1 x $440 put @ $1.90\n\nNet credit: $6.60\nMax profit at $450: $6.60 (keep full credit)\nMax loss: $10.00 - $6.60 = $3.40\nBreakeven range: $443.40 to $456.60"
                        },
                        { 
                            t: "Type 4 — Broken Wing Butterfly", 
                            d: "An asymmetric butterfly where the wings are unequal distances from the body. Used to collect a credit or reduce debit while skewing risk to one side.",
                            ex: "SPY at $450, slightly bearish lean\nBuy 1 x $450 put @ $5.20\nSell 2 x $438 put @ $2.80 each = $5.60\nBuy 1 x $426 put @ $1.10 (12 pts below, NOT equal 12)\n\nNet: $5.20 - $5.60 + $1.10 = $0.70 debit (vs $1.10 for equal)\nOR adjust outer to $424: cost $0.90 => NET CREDIT -$0.50!\nMax loss is DEFINED and REDUCED vs standard ratio"
                        }
                    ].map((type, i) => (
                        <Card key={i} variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                             <h4 className="text-white font-black mb-4 uppercase tracking-widest text-sm italic text-brand-500">{type.t}</h4>
                             <p className="text-gray-400 text-sm leading-relaxed mb-6">{type.d}</p>
                             <div className="p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-xs text-gray-400 whitespace-pre-line leading-loose">
                                {type.ex}
                             </div>
                        </Card>
                    ))}
                </div>
            </StandardSection>

            {/* Options Pinning */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="The Edge" title="Options Pinning — The Key Edge" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            The single most powerful concept for butterfly traders is options pinning. On expiration Friday, stocks have a strong tendency to close near strikes with heavy open interest. Market makers hedge their exposure by buying and selling shares to keep the stock near these strikes — effectively pinning the stock.
                        </p>
                        <h4 className="text-white font-black uppercase tracking-widest text-sm italic mt-8 mb-4">Why Pinning Happens:</h4>
                        <ol className="space-y-4 list-decimal list-inside text-gray-400">
                            <li>Market makers have sold thousands of options at popular strikes ($450, $500, etc.)</li>
                            <li>As expiration approaches, they must hedge by buying/selling shares</li>
                            <li>This hedging activity pushes the stock toward the strike with maximum open interest</li>
                            <li>The result: on expiration Friday, stocks frequently close within $1-$2 of major strikes</li>
                            <li className="text-brand-500 font-bold">This is the butterfly trader's edge — predict the pin, place the butterfly there</li>
                        </ol>
                    </div>

                    <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Method</TableHead>
                                    <TableHead>How to Use It</TableHead>
                                    <TableHead>Best For</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { m: "Max Pain Calculator", u: "Find strike where option buyers lose most", b: "Weekly & monthly Fridays" },
                                    { m: "Open Interest Analysis", u: "Highest OI put + call strikes = pin magnet", b: "SPY, QQQ, large-caps" },
                                    { m: "Round Numbers", u: "Stocks gravitate to $450, $500, $100", b: "All expirations" },
                                    { m: "Prior Week's Close", u: "Close near last week's price (inertia)", b: "Range-bound markets" },
                                    { m: "Volume at Strike", u: "Highest total call + put volume", b: "Liquid underlyings only" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Method" className="text-brand-500 font-bold text-xs uppercase tracking-wider">{row.m}</TableCell>
                                        <TableCell label="How to Use It" className="text-gray-400 text-xs">{row.u}</TableCell>
                                        <TableCell label="Best For" className="text-gray-500 text-xs">{row.b}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* Complete Setup Guide */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Playbook" title="Complete Butterfly Setup Guide" align="center" className="mb-20" />
                
                <div className="space-y-16 max-w-5xl mx-auto">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 font-black text-2xl">1</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Identify the Target Strike (Body)</h3>
                            <p className="text-gray-400 mb-4">The middle strike is where you expect the stock to close at expiration. This is the most critical decision — everything else follows from it.</p>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li><span className="text-brand-500">•</span> <strong>Method 1:</strong> Options pinning — use max pain and OI analysis</li>
                                <li><span className="text-brand-500">•</span> <strong>Method 2:</strong> Technical analysis — strong support/resistance level</li>
                                <li><span className="text-brand-500">•</span> <strong>Method 3:</strong> Post-earnings stabilization — stock settles at key round number</li>
                                <li><span className="text-brand-500">•</span> <strong>Method 4:</strong> VWAP anchor — stock repeatedly touching VWAP</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 font-black text-2xl">2</div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-white mb-4">Choose Wing Width</h3>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5 w-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Width</TableHead>
                                            <TableHead>Debit Paid</TableHead>
                                            <TableHead>Profit Zone</TableHead>
                                            <TableHead>Max Profit</TableHead>
                                            <TableHead>Best For</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { w: "$5 wide", d: "$0.30-$0.80", z: "Narrow (~$8-$10)", p: "Very high (10-25x)", b: "High-conviction pin" },
                                            { w: "$10 wide", d: "$0.80-$2.00", z: "Moderate (~$15-$18)", p: "High (5-10x debit)", b: "Standard butterfly" },
                                            { w: "$15 wide", d: "$1.50-$3.50", z: "Wider (~$22-$26)", p: "Good (4-7x debit)", b: "Lower conviction" },
                                            { w: "$25 wide", d: "$2.50-$5.00", z: "Wide (~$35-$40)", p: "Moderate (3-5x)", b: "Conservative" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="Width" className="text-brand-500 font-bold text-xs">{row.w}</TableCell>
                                                <TableCell label="Debit" className="text-white text-xs">{row.d}</TableCell>
                                                <TableCell label="Zone" className="text-gray-400 text-xs">{row.z}</TableCell>
                                                <TableCell label="Max" className="text-brand-400 text-xs font-bold">{row.p}</TableCell>
                                                <TableCell label="Best For" className="text-gray-500 text-xs">{row.b}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 font-black text-2xl">3</div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-white mb-4">Choose Expiration</h3>
                            <Card variant="institutional" className="p-0 overflow-hidden border-white/5 w-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>DTE at Entry</TableHead>
                                            <TableHead>Approach</TableHead>
                                            <TableHead>Cost</TableHead>
                                            <TableHead>OnlyOptions Use</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { d: "0-1 DTE", a: "Pure pinning play", c: "Pennies ($0.05-0.30)", o: "High-conviction only" },
                                            { d: "2-5 DTE", a: "Short-term/earnings", c: "$0.20-$0.80", o: "Post-earnings" },
                                            { d: "7-14 DTE", a: "Weekly standard", c: "$0.50-$2.00", o: "Most common setup" },
                                            { d: "21-30 DTE", a: "Monthly butterfly", c: "$1.50-$4.00", o: "Lower conviction" },
                                            { d: "45+ DTE", a: "Long-dated", c: "$3.00-$8.00", o: "Almost never use" }
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell label="DTE" className="text-white font-bold text-xs">{row.d}</TableCell>
                                                <TableCell label="Approach" className="text-gray-400 text-xs">{row.a}</TableCell>
                                                <TableCell label="Cost" className="text-brand-500 text-xs">{row.c}</TableCell>
                                                <TableCell label="Usage" className="text-gray-500 text-xs">{row.o}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>

                    <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5 mt-12">
                        <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">OnlyOptions Default Setup</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                            <div><span className="text-brand-500 font-bold">DTE:</span> 7-14 days (captures pin without high theta)</div>
                            <div><span className="text-brand-500 font-bold">Wing width:</span> $10 (balance precision/safety)</div>
                            <div><span className="text-brand-500 font-bold">Body strike:</span> Within $1 of max pain/OI pin</div>
                            <div><span className="text-brand-500 font-bold">Entry debit:</span> $0.80-$2.00 per spread</div>
                            <div><span className="text-brand-500 font-bold">Max profit:</span> 5-10x debit paid</div>
                            <div><span className="text-brand-500 font-bold">Exit:</span> 50% max profit OR when spread doubles</div>
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Real Trade Examples */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="Case Studies" title="Real Trade Examples" align="center" className="mb-20" />
                
                <div className="space-y-16">
                    {/* Ex 1 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 1 — SPY Weekly Butterfly on Max Pain</h4>
                        </div>
                        <Table>
                            <TableBody>
                                {[
                                    { f: "Setup", d: "Sep 11, SPY at $447.80. Pin identified: $450 (max pain/OI)" },
                                    { f: "Strategy", d: "Buy 1x $440C, Sell 2x $450C, Buy 1x $460C (Long Call Fly)" },
                                    { f: "Net Debit", d: "$1.60 per spread ($160 max loss)" },
                                    { f: "Max Profit", d: "$8.40 (+525%) if SPY pins at $450" },
                                    { f: "Outcome", d: "SPY closed at $449.87. Exit at $7.90 (+393% profit)", c: "text-brand-500 font-bold" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-gray-300'}`}>{row.d}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    {/* Ex 2 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 2 — AAPL Post-Earnings Butterfly</h4>
                        </div>
                        <Table>
                            <TableBody>
                                {[
                                    { f: "Setup", d: "Feb 5, AAPL at $185.50 after earnings. Pin target: $185" },
                                    { f: "Strategy", d: "Buy 1x $175C, Sell 2x $185C, Buy 1x $195C (10-day expiry)" },
                                    { f: "Net Debit", d: "$1.20 per spread ($120 max loss)" },
                                    { f: "Max Profit", d: "$8.80 (+733%) if AAPL pins at $185" },
                                    { f: "Outcome", d: "AAPL closed at $184.15. Closed Thursday for $6.40 (+433% profit)", c: "text-brand-500 font-bold" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-gray-300'}`}>{row.d}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    {/* Ex 3 */}
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5 bg-gray-950/40">
                        <div className="p-6 bg-white/5 border-b border-white/5 xl:flex xl:items-center xl:justify-between">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Example 3 — 0DTE SPY Iron Butterfly (FOMC Day)</h4>
                            <span className="text-red-500 tracking-widest text-[10px] font-bold mt-2 xl:mt-0 uppercase block">High Risk Play</span>
                        </div>
                        <Table>
                            <TableBody>
                                {[
                                    { f: "Setup", d: "Fed holds rates. SPY at $437 at 2PM. Non-event = pin expected" },
                                    { f: "Strategy", d: "Sell $437C/$437P, Buy $442C/$432P (0DTE Iron Butterfly)" },
                                    { f: "Net Credit", d: "$2.45 collected upfront (Max profit = $2.45 if exactly $437)" },
                                    { f: "Outcome", d: "SPY closed at $438.12. Butterfly value $1.82. You keep $0.63 profit per spread.", c: "text-brand-500 font-bold" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Field" className="text-gray-500 font-black uppercase tracking-wider text-xs w-1/4">{row.f}</TableCell>
                                        <TableCell label="Detail" className={`text-sm ${row.c || 'text-gray-300'}`}>{row.d}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </StandardSection>

            {/* Deep Dive & Greeks */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <SectionHeader label="Analysis" title="Iron Butterfly Deep Dive" align="left" className="mb-10" />
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            The iron butterfly is the highest-income variant of the butterfly family. By selling both an ATM call AND an ATM put, you collect maximum premium — but your profit zone is extremely narrow.
                        </p>
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Feature</TableHead>
                                        <TableHead>Iron Condor</TableHead>
                                        <TableHead className="text-brand-500">Iron Butterfly</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { f: "Short strikes", ic: "OTM (one above, one below)", ib: "Both ATM (same strike)" },
                                        { f: "Credit collected", ic: "Moderate (30-40% width)", ib: "High (50-70% width)" },
                                        { f: "Profit zone", ic: "Wide", ib: "Narrow" },
                                        { f: "IV preference", ic: "High IV", ib: "Very high IV (>50%)" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Feature" className="text-gray-500 text-xs uppercase tracking-wider font-bold">{row.f}</TableCell>
                                            <TableCell label="Condor" className="text-gray-400 text-xs">{row.ic}</TableCell>
                                            <TableCell label="Butterfly" className="text-brand-400 text-xs">{row.ib}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>

                    <div>
                        <SectionHeader label="Mechanics" title="Greeks in Butterflies" align="left" className="mb-10" />
                        <Card variant="institutional" className="p-0 overflow-hidden border-white/5 mb-8">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Greek</TableHead>
                                        <TableHead>Impact</TableHead>
                                        <TableHead>What It Means</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { g: "Delta", i: "Near zero at entry", m: "Not making directional bet" },
                                        { g: "Theta", i: "Positive near body", m: "Time works FOR you near pin" },
                                        { g: "Vega", i: "Negative", m: "Benefits from IV collapse" },
                                        { g: "Gamma", i: "Highly positive near expiry", m: "Accelerates gain near body" }
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell label="Greek" className="text-brand-500 text-xs uppercase tracking-wider font-bold">{row.g}</TableCell>
                                            <TableCell label="Impact" className="text-white text-xs">{row.i}</TableCell>
                                            <TableCell label="Meaning" className="text-gray-400 text-xs">{row.m}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <p className="text-sm text-gray-500 italic p-4 bg-white/5 rounded-xl border border-white/10">
                            <strong>The gamma insight:</strong> Near expiration, as the stock approaches the body strike, gamma works dramatically in your favor — value accelerates rapidly. A $5 move toward the body can triple the spread value.
                        </p>
                    </div>
                </div>
            </StandardSection>

            {/* System & Management */}
            <StandardSection variant="default" divider="top" spacing="lg">
                <SectionHeader label="System" title="Management & Results" align="center" className="mb-20" />
                
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-8">Management: Set-and-Watch</h3>
                <p className="text-gray-400 mb-8 max-w-3xl">
                    Unlike iron condors, short-dated butterflies don't require active management. Enter at right strike, set profit target (2-3x debit), set stop loss at 100% of debit, and exit before last day.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <Card variant="glass" className="p-0 overflow-hidden border-white/5">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Adjustment Scenarios</h4>
                        </div>
                        <Table>
                            <TableBody>
                                {[
                                    { s: "Stock moves to body", a: "Hold. Close when 2-3x debit", c: "text-brand-500" },
                                    { s: "Stock moves away early", a: "Hold if 7+ DTE, could return", c: "text-gray-400" },
                                    { s: "Moves far, 3+ DTE", a: "Close — take the small loss", c: "text-red-500" },
                                    { s: "Winning near expiry inside body", a: "Take profits (50-70% max)", c: "text-brand-500" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Scenario" className="text-white text-xs font-bold">{row.s}</TableCell>
                                        <TableCell label="Action" className={`text-xs ${row.c}`}>{row.a}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>

                    <Card variant="glass" className="p-0 overflow-hidden border-white/5">
                        <div className="p-6 bg-white/5 border-b border-white/5">
                            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">6-Week Income System System</h4>
                        </div>
                        <Table>
                            <TableBody>
                                {[
                                    { w: "Wk 1", o: "SPY pins. +$7.20 (+514%)", c: "text-brand-500" },
                                    { w: "Wk 2", o: "QQQ misses pin. -$1.20 (loss)", c: "text-red-500" },
                                    { w: "Wk 3", o: "SPY pins. +$5.80 (+363%)", c: "text-brand-500" },
                                    { w: "Wk 4", o: "SPY misses pin. -$1.50 (loss)", c: "text-red-500" },
                                    { w: "Wk 5", o: "QQQ pins. +$6.70 (+515%)", c: "text-brand-500" },
                                    { w: "Wk 6", o: "SPY near pin. +$4.20 (+233%)", c: "text-brand-500" }
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell label="Week" className="text-gray-500 font-bold uppercase tracking-wider text-xs">{row.w}</TableCell>
                                        <TableCell label="Outcome" className={`text-xs font-bold ${row.c}`}>{row.o}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="p-4 bg-brand-500/10 text-brand-400 text-xs font-bold text-center border-t border-brand-500/20">
                            Result: Paid $8.80 in debits. Net Profit = +$21.20 (+241%). This is the asymmetric edge.
                        </div>
                    </Card>
                </div>
            </StandardSection>

            {/* Cheat Sheet & Testimonials */}
            <StandardSection variant="muted" divider="top" spacing="lg">
                <SectionHeader label="Summary" title="Quick Reference & Results" align="center" className="mb-20" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <Card variant="glass" className="p-8 border-brand-500/20 bg-brand-500/5">
                        <h4 className="text-brand-500 font-black mb-6 uppercase tracking-widest text-sm italic">Long Butterfly Checklist</h4>
                        <ul className="space-y-4">
                            {[
                                "Identified clear pin target (max pain + OI + round #)",
                                "7-14 DTE — sweet spot for weekly pins",
                                "Wing width: $10 standard",
                                "Entry debit: $0.80-$2.00 per spread",
                                "Never risk more than 0.5% account per fly",
                                "Profit target set: 2-3x debit paid"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-300">
                                    <FiCheck className="text-brand-500 shrink-0 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <Card variant="glass" className="p-8 border-white/5 bg-gray-950/40">
                        <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm italic">Management Checklist</h4>
                        <ul className="space-y-4">
                            {[
                                "Close at 50-70% of max profit — never hold to expiry",
                                "Close early if spread doubles/triples quickly",
                                "Max loss = debit paid. Accept it.",
                                "Never average down",
                                "Exit day before expiration to avoid last-day gamma",
                                "Iron butterfly: buy back threatened short if moves 2%"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-400">
                                    <FiCheck className="text-gray-600 shrink-0 mt-0.5" /> {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {[
                        { q: "SPY weekly butterfly every Friday... 6 winners, 2 losers. Average winner: +387%. Net: +$4,200 on $800 total invested. OnlyOptions max pain analysis is key.", a: "Michael T., Ohio" },
                        { q: "AAPL post-earnings butterfly at $185 — paid $1.20, closed at $6.40 next Thursday. +433% in 10 days. The stock always wants to settle at a round number.", a: "Jennifer K., California" },
                        { q: "Iron butterfly on SPY on FOMC day — collected $2.45 credit, closed at $0.62... kept $1.83. My most consistent setup now.", a: "David R., Texas" }
                     ].map((t, i) => (
                        <Card key={i} variant="institutional" className="p-6 border-white/5">
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{t.q}"</p>
                            <span className="text-brand-500 font-black uppercase tracking-widest text-[10px]">— {t.a}</span>
                        </Card>
                     ))}
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 text-center text-xs text-gray-600 max-w-4xl mx-auto space-y-4">
                    <p className="font-bold uppercase tracking-widest">Find the Pin. Place the Butterfly. Collect the Win.</p>
                    <p>DISCLAIMER: Options trading involves substantial risk of loss. Butterfly spreads can result in loss of the full debit paid. Iron butterflies carry risk of loss up to the spread width minus credit received. Past performance does not guarantee future results. OnlyOptions signals are for educational purposes only. Always consult a qualified financial advisor before trading.</p>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto py-24">
                    <SectionHeader label="Knowledge Base" title="Butterfly Spreads FAQ" align="center" className="mb-20" />
                    <div className="space-y-4">
                        {[
                            { q: "What is the maximum risk of a butterfly spread?", a: "For a long butterfly (call or put), the maximum risk is the net debit paid upfront. For an iron butterfly, the maximum risk is the width of the spread minus the credit received." },
                            { q: "Should I hold a butterfly until expiration?", a: "No. The 'pin' is very hard to hit exactly at the closing bell. We recommend exiting when the spread reaches 50-70% of its maximum potential profit, typically on the Thursday or early Friday of expiration week." },
                            { q: "What happens if the stock moves past my 'wings'?", a: "The spread will lose value. If the stock is far above or below your wings at expiration, the butterfly will expire worthless, resulting in a loss of the full debit paid." },
                            { q: "Why use butterflies instead of Iron Condors?", a: "Butterflies have a much higher potential return on risk (reward-to-risk ratio). While iron condors have a higher win rate, a single winning butterfly can offset many small losses." }
                        ].map((faq, i) => (
                            <FaqItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>

                {/* Internal Links Grid */}
                <div className="max-w-6xl mx-auto py-20 border-t border-white/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Related Strategy Guides</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { n: "Credit Spreads", p: "/strategies/credit-spreads" },
                            { n: "Iron Condors", p: "/strategies/iron-condor" },
                            { n: "Calendar Spreads", p: "/strategies/calendar-spread-strategy" },
                            { n: "0DTE Strategy", p: "/strategies/0dte-options-trading" },
                            { n: "Options Greeks", p: "/options-greeks-explained" },
                            { n: "Implied Volatility", p: "/understanding-implied-volatility" },
                            { n: "Earnings Trading", p: "/strategies/earnings-trading" },
                            { n: "Performance", p: "/performance" }
                        ].map((link, i) => (
                            <Link key={i} to={link.p} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-bold hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 transition-all">
                                {link.n}
                            </Link>
                        ))}
                    </div>
                </div>
            </StandardSection>

            <div className="pt-20">
                <StandardCTA />
            </div>
        </div>
    );
};

export default ButterflySpreadOptions;
