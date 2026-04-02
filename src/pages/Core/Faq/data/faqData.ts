export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQCategory {
    category: string;
    description?: string;
    items: FAQItem[];
}

export const faqData: FAQCategory[] = [
    {
        category: "Section 1 — About the Service",
        items: [
            {
                question: "Q1. What is OnlyOptions.us?",
                answer: "OnlyOptions.us is a professional options trading signal service. Our team sends 2–4 fully specified options trading alerts every market day through the OnlyOptions iOS and Android app. Each signal includes the ticker, option type (call or put), strike price, expiration date, entry price range, profit target, stop-loss level, and written analyst rationale. Members execute the trades independently in their own brokerage accounts."
            },
            {
                question: "Q2. Who is OnlyOptions for?",
                answer: "OnlyOptions is designed for options traders at all experience levels who want professionally analyzed signals with complete trade specifications. This includes active traders who do not have time to run their own analysis, newer traders who want to learn from how professionals approach setups, and experienced traders who want a second opinion on market opportunities. You need at minimum basic options knowledge — you should know what calls and puts are and how to place an options order."
            },
            {
                question: "Q3. When was OnlyOptions founded?",
                answer: "OnlyOptions.us launched in January 2023 with an initial beta group of 50 traders. We have been operating continuously since and publish our full signal history from day one. As of February 2026 we have 1,247+ active subscribers and have published 1,847 closed signals across 38 months of operation."
            },
            {
                question: "Q4. Is OnlyOptions a registered investment adviser?",
                answer: "No. OnlyOptions LLC is not registered as an investment adviser under the Investment Advisers Act of 1940 or under any state securities law. Our service is educational in nature. Signals represent professional analytical opinions and are not personalized investment advice tailored to your individual financial situation. We do not manage client funds or execute trades on your behalf."
            },
            {
                question: "Q5. What makes OnlyOptions different from other signal services?",
                answer: "Three things: complete transparency (every signal result published including losses), complete signal format (10 fields per signal so you have everything to execute without guesswork), and exit alerts (we notify you every time we close a position so you never have to decide on your own when to exit). Most services offer some of these — very few offer all three consistently."
            },
            {
                question: "Q6. Do OnlyOptions analysts trade their own signals?",
                answer: "Yes. Our analysts trade their own personal capital using the same signals they send to subscribers. Signals are sent simultaneously — analysts do not receive advance access. This is a voluntary disclosure made in the interest of transparency and to demonstrate that we have personal financial stake in the quality of our analysis."
            },
            {
                question: "Q7. What assets does OnlyOptions cover?",
                answer: "Standard equity options on U.S.-listed stocks and ETFs only. Our primary tickers are SPY, QQQ, NVDA, AAPL, TSLA, MSFT, AMZN, GOOGL, and META. We occasionally add high-liquidity tickers during periods of strong momentum. We do not signal stocks, ETF long positions, multi-leg spreads, or any other instrument."
            },
            {
                question: "Q8. How many signals does OnlyOptions send per day?",
                answer: "We send 2–4 signals on most active trading days. The number depends on how many quality setups we identify that meet our full analytical criteria. On slow or unfavorable market days we may send fewer signals or none. We never send signals to fill a quota."
            },
            {
                question: "Q9. How long has OnlyOptions been operating?",
                answer: "OnlyOptions has been operating continuously since January 2023 — 38 months as of February 2026. Our complete signal history from the first month is published on the Performance Dashboard. The service has never had an extended outage or gap in signal delivery."
            },
            {
                question: "Q10. Where is OnlyOptions based?",
                answer: "OnlyOptions LLC is based in the United States. Our team operates on U.S. Eastern Time and our signals are sent during U.S. equity market hours (approximately 9:00 AM to 3:30 PM ET, Monday through Friday). We do not send signals outside U.S. market hours."
            }
        ]
    },
    {
        category: "Section 2 — Signals & Delivery",
        items: [
            {
                question: "Q11. How do I receive signals?",
                answer: "Signals are delivered as push notifications through the OnlyOptions iOS and Android app. Tap any notification to view the complete signal inside the app. Annual plan subscribers also receive every signal by SMS text message. There is no other delivery channel — no email-only delivery, no web-only access."
            },
            {
                question: "Q12. What does each signal include?",
                answer: "Every signal includes ten fields: ticker symbol, option type (call or put), strike price, expiration date, entry price range (the window in which to buy), profit target price, stop-loss price, risk-to-reward ratio, confidence rating (High, Medium, or Speculative), and written analyst rationale explaining the setup. Nothing is left incomplete."
            },
            {
                question: "Q13. What time of day are signals sent?",
                answer: "Most signals are sent between 9:00 AM and 11:00 AM ET during the opening session when market direction is clearest. Afternoon signals (1:00 PM to 3:30 PM ET) cover momentum setups and 0DTE opportunities. We do not send new signals in the final 30 minutes before market close (after 3:30 PM ET)."
            },
            {
                question: "Q14. What is a 0DTE signal?",
                answer: "A 0DTE (zero days to expiration) signal is an options trade on a contract that expires on the same day. These are the fastest-moving and highest-risk signals we send. 0DTE options can move 50–200% in value within hours based on stock price movements. We send 0DTE signals primarily on SPY and QQQ. We do not recommend 0DTE signals for traders with less than 3–6 months of options trading experience."
            },
            {
                question: "Q15. What is a weekly signal?",
                answer: "A weekly signal is an options trade on a contract expiring within the current or following week — typically 1 to 7 days from the signal date. Weekly signals are our most frequent type (48% of all signals). They move faster than monthly options but offer more time to manage than 0DTE signals. This is where our win rate has been most consistent."
            },
            {
                question: "Q16. What is a monthly signal?",
                answer: "A monthly signal is an options trade on a contract expiring in the standard monthly expiration cycle — typically 8 to 30 days from the signal date. Monthly options move more slowly and have lower theta (time decay) risk. These signals have the highest average winner in our history (+96%) because more time allows positions to develop fully."
            },
            {
                question: "Q17. Do you send both call and put signals?",
                answer: "Yes. We send call signals (bullish positions) when we identify an upward price move opportunity, and put signals (bearish positions) when we identify a downward price move opportunity. Historically our signal history is approximately 58% calls and 42% puts, reflecting the general bullish bias of equity markets over our operating period."
            },
            {
                question: "Q18. How do I know when to exit a trade?",
                answer: "You receive a push notification (and SMS on Annual plan) every time we send an exit alert. The exit alert specifies the position to close and the reason — target reached, stop-loss hit, or early exit due to changed conditions. You do not need to monitor the position or decide on your own when to close. Simply act on the exit alert when it arrives."
            },
            {
                question: "Q19. What happens if I miss a signal?",
                answer: "If the option price has already moved past the top of the entry range by the time you see the signal, do not enter the trade. Chasing a signal above the entry range destroys the risk-reward ratio that made the trade worth taking. Wait for the next signal instead. It is always better to miss a trade than to enter at a bad price."
            },
            {
                question: "Q20. Do you send signals during earnings announcements?",
                answer: "We are cautious around earnings events due to implied volatility expansion and crush dynamics that make options pricing difficult to predict. We typically avoid sending new signals on earnings tickers in the 24 hours before and after a scheduled earnings release. If a signal is sent near an earnings event, the rationale will note the earnings timing and the additional risk it creates."
            }
        ]
    },
    {
        category: "Section 3 — Performance & Results",
        items: [
            {
                question: "Q21. What is the OnlyOptions win rate?",
                answer: "Our all-time win rate is 70.3%, calculated from 1,847 closed signals published between January 2023 and February 2026. A signal is counted as a win when it is closed at or above the entry price. A signal is counted as a loss when it is closed at or below the stop-loss level. Every result — wins and losses — is published on the Performance Dashboard."
            },
            {
                question: "Q22. How is the win rate calculated?",
                answer: "Win rate = total winning signals ÷ total closed signals × 100. A signal is a win when its exit price (mid-price at exit alert time) is at or above its entry price (mid-price at signal send time). We use mid-prices because they represent a fair approximation of the price a trader with a well-placed limit order would expect to receive. All cancelled signals (sent but not entered due to invalidated setups) are excluded from the calculation."
            },
            {
                question: "Q23. What is the average winning trade return?",
                answer: "Our all-time average winner is +87%. This is the arithmetic average of the percentage return on all winning signals from January 2023 through February 2026. Average winner by expiry type: 0DTE +71%, Weekly +89%, Monthly +96%. Individual contract returns vary based on execution price, position size, and market conditions."
            },
            {
                question: "Q24. What is the average losing trade return?",
                answer: "Our all-time average loser is -30%. This means the average losing signal loses approximately 30% of the premium paid on entry. Because options have a maximum loss of 100% of premium paid, a -30% average loss means our stop-losses are being respected and triggered well before the position reaches full loss. This reflects disciplined stop-loss placement in our signal format."
            },
            {
                question: "Q25. What is the expected value of following the signals?",
                answer: "Expected value = (Win Rate × Avg Winner) + (Loss Rate × Avg Loser) = (0.703 × 87%) + (0.297 × -30%) = 61.2% - 8.9% = +52.3% expected return per trade on average. This is before position sizing. With 2% risk per trade, the expected gain per trade on a $10,000 account is approximately $9.60 before commissions. Over 60 trades per month at a selective take rate of 30%, that represents approximately $170 expected monthly gain — before accounting for position size variation."
            },
            {
                question: "Q26. Can I verify the performance results myself?",
                answer: "Yes. Every closed signal is published on the Performance Dashboard at onlyoptions.us/performance with dates, tickers, option types, strike prices, entry prices, exit prices, and percentage returns. The dashboard is publicly accessible before you subscribe. You can cross-reference individual signal prices against historical options data from your broker or options data providers."
            },
            {
                question: "Q27. Are results audited by a third party?",
                answer: "Not currently. Our transparency approach is to publish every signal result in full — time-stamped, trade-by-trade — so anyone can verify the record independently. We are exploring third-party verification for 2026. We believe public, complete, time-stamped data is more meaningful than a private audit that most subscribers cannot verify themselves."
            },
            {
                question: "Q28. What was your worst performing period?",
                answer: "Q3 2023 was our worst quarter — a 64.5% win rate across 152 signals. This coincided with an unusually volatile mid-year market environment. Even during that period, the positive expected value of the signals was maintained because the average winner still significantly exceeded the average loser in absolute terms. Our quarterly win rate has not dropped below 64% in any period since launch."
            },
            {
                question: "Q29. Do member results match the published performance?",
                answer: "Based on self-reported data from eight long-term members who track their own trades, personal win rates range from 68.0% to 71.6% — closely tracking our published 70.3%. Small differences reflect execution timing, selective signal-taking, and occasional late exits. Members who take most signals and use limit orders within the entry range tend to track closest to the published record."
            },
            {
                question: "Q30. Do losing trades affect my subscription?",
                answer: "Losing trades are a normal and expected part of options trading. With a 70.3% win rate and a 2.9:1 average risk-reward ratio, the service has a positive expected value even accounting for losing signals. Our accountability policy states that if the rolling 90-day win rate drops below 60%, we will pause signal issuance, conduct a methodology review, and offer account credits. That threshold has never been triggered."
            }
        ]
    },
    {
        category: "Section 4 — Account, Plans & Pricing",
        items: [
            {
                question: "Q31. How much does OnlyOptions cost?",
                answer: "Basic plan: $60 per month. Annual plan: $499.99 per year (equivalent to ~$41 per month — including all premium features). Both plans provide full Premium Access with flexible membership options."
            },
            {
                question: "Q32. What is included in the Premium Membership?",
                answer: "The Premium Membership includes full access to everything in your chosen plan — live signals via the app, the performance dashboard, the education library, and all plan-specific features. Access is activated immediately upon joining. You have full control over your membership status at all times."
            },
            {
                question: "Q33. Is the membership flexible?",
                answer: "Yes. You can manage your membership preferences at any time from your account dashboard or by emailing support@onlyoptions.us. There are no exit fees. Access continues until the end of your current billing period. Monthly members retain access for the remainder of the month. Annual members retain access for the remainder of their annual period."
            },
            {
                question: "Q34. Is there a money-back guarantee?",
                answer: "Yes. All new memberships include a 100% Satisfaction Guarantee. If you are not fully satisfied within the first 7 days of your membership, simply email support@onlyoptions.us for a full refund — no questions asked. This applies to your initial term. Our flexible membership structure ensures you can evaluate the service with complete peace of mind."
            },
            {
                question: "Q35. What is the difference between Basic and Annual?",
                answer: "Both plans receive the same live signals through the app. The Annual plan adds: SMS text message delivery of every signal, priority email support with a 1-hour response during market hours (versus 24 hours on Basic), and access to weekly live Q&A sessions with the analyst team. If app push notifications are sufficient and you do not need SMS or Q&A access, the Basic monthly plan is strong value. For full professional delivery and support, the Annual plan is our best-value option."
            },
            {
                question: "Q36. Is the Annual plan worth it?",
                answer: "The Annual plan costs $499.99/year (~$41/month equivalent) — a saving of over $220 per year compared to the Basic monthly plan ($60 × 12 = $720). It includes all professional features including SMS alerts. If you plan to use the service for 12 or more months, the Annual plan is your most cost-effective choice. We recommend starting with a monthly plan and upgrading to Annual once you have experienced the performance of the service."
            },
            {
                question: "Q37. Can I upgrade or downgrade my plan?",
                answer: "Upgrades take effect immediately with pro-rata billing adjustment. Downgrades take effect at your next renewal date — you retain your current plan's features until then. Both changes are made from your account dashboard."
            },
            {
                question: "Q38. What payment methods are accepted?",
                answer: "All major credit and debit cards: Visa, Mastercard, American Express, and Discover. Payments are processed through Stripe (PCI-DSS Level 1 certified). We do not currently accept PayPal, cryptocurrency, or bank transfers."
            },
            {
                question: "Q39. Are there any hidden fees?",
                answer: "No. There are no setup fees, per-signal fees, or fees for using the app, performance dashboard, or education library. The subscription price is the only cost. Brokerage commissions when you execute trades are separate from OnlyOptions and vary by broker."
            },
            {
                question: "Q40. Do you offer discounts?",
                answer: "The Annual plan ($499.99/year) is our best-value pricing — equivalent to ~$41/month versus $60 for Basic monthly. We do not offer student, group, or promotional discounts beyond the Annual plan. For affiliate or partnership inquiries, contact partnerships@onlyoptions.us."
            }
        ]
    },
    {
        category: "Section 5 — Execution & Brokers",
        items: [
            {
                question: "Q41. What broker do I need?",
                answer: "You can use any brokerage that offers options trading with Level 2 approval or higher. We recommend Thinkorswim (Schwab), Tastytrade, Webull, or Interactive Brokers for their options platforms and execution quality. Robinhood works for basic execution but has limited order types that may affect your ability to use limit orders precisely."
            },
            {
                question: "Q42. What options approval level do I need?",
                answer: "Level 2 options approval at your broker, which allows you to buy calls and puts. This is the standard approval for buying options. You do not need Level 3 (spreads) or higher. The approval process requires a short application about your trading experience at your broker — most are approved within 1 business day."
            },
            {
                question: "Q43. Should I use market orders or limit orders?",
                answer: "Always use limit orders for options. Market orders on options can result in fills significantly outside the bid-ask spread, especially for less liquid contracts. Place your limit order within the entry range specified in the signal — a limit price at or slightly below the midpoint of the entry range is typically a good target."
            },
            {
                question: "Q44. What if the option price has moved past the entry range when I see the signal?",
                answer: "Do not enter the trade. If the current price is materially above the top of the entry range, the risk-reward ratio that made the signal worth taking no longer exists. Skip it and wait for the next signal. Entering late is one of the most common causes of individual results being below the published win rate."
            },
            {
                question: "Q45. How much money do I need to follow the signals?",
                answer: "There is no required minimum, but we recommend at least $2,000 and ideally $5,000 or more. With a $5,000 account and 2% risk per trade ($100), you can follow most signals comfortably. Our signal option prices typically range from $0.50 to $15.00 per contract, meaning individual contracts cost $50 to $1,500. Use our Position Size Calculator on the website to determine how many contracts to buy."
            },
            {
                question: "Q46. What is the 2% rule and why is it important?",
                answer: "The 2% rule means never risk more than 2% of your trading account on any single trade. With a $10,000 account, your maximum loss per trade is $200. This rule ensures that even a losing streak of 10 consecutive losses only draws your account down to approximately 82% of its starting value. Without a position sizing rule, a few large losing trades can cause disproportionate damage to your account."
            },
            {
                question: "Q47. How do I calculate how many contracts to buy?",
                answer: "Step 1: Maximum risk = account size × 2%. Step 2: Risk per contract = (Entry price – Stop-loss price) × 100 (one contract = 100 shares). Step 3: Maximum contracts = Step 1 ÷ Step 2, rounded down. Example: $10,000 account, 2% = $200 max risk. Entry $2.40, stop $1.65. Risk per contract = ($2.40 – $1.65) × 100 = $75. Max contracts = $200 ÷ $75 = 2.67 → buy 2 contracts."
            },
            {
                question: "Q48. Can I follow multiple signals at once?",
                answer: "Yes, but be aware of total portfolio risk. If you have three open positions each risking 2% of your account, your total open risk is 6%. In fast-moving markets, multiple positions can hit stop-losses simultaneously. We recommend beginners limit themselves to 1–2 open positions at a time and scale up as they become comfortable with the service."
            },
            {
                question: "Q49. What commissions will I pay to execute signals?",
                answer: "Commissions vary by broker. Thinkorswim charges approximately $0.65 per contract. Tastytrade charges $1.00 to open and $0.00 to close. Webull charges approximately $0.55 per contract. Interactive Brokers ranges from $0.25 to $0.65 depending on volume. Robinhood charges $0 per contract. These commissions are separate from the OnlyOptions subscription."
            },
            {
                question: "Q50. Should I paper trade before going live?",
                answer: "Yes, strongly recommended if you are new to options trading or new to using a signal service. Paper trade for at least 2 weeks using a simulator (Thinkorswim and Webull both offer paper trading accounts). Execute every signal in the simulator at realistic prices, track your results, and compare to the published performance. Only move to real capital once your paper results validate the signal quality for your execution style."
            }
        ]
    },
    {
        category: "Section 6 — Education & Onboarding",
        items: [
            {
                question: "Q51. Do I need experience to use OnlyOptions?",
                answer: "You need basic options knowledge — you should understand what calls and puts are, how strike prices and expiration dates work, and how to place an options order at your broker. Complete beginners should spend 2–4 weeks studying options fundamentals before trading live. Our Education Library inside the app covers these basics. We do not recommend trading live with real capital until you are comfortable with the mechanics."
            },
            {
                question: "Q52. What is in the Education Library?",
                answer: "The Education Library inside the app includes guides on: options fundamentals (calls, puts, strike prices, expiry dates, Greeks), how to read and execute a signal, position sizing and the 2% rule, risk management principles, an introduction to 0DTE vs weekly vs monthly options, how to use the Performance Dashboard, and broker setup guides. The library is updated periodically."
            },
            {
                question: "Q53. What are the options Greeks and do I need to know them?",
                answer: "The options Greeks — Delta, Theta, Gamma, Vega, and Rho — measure how an option's price changes in response to various factors. You do not need deep knowledge of the Greeks to follow our signals, but basic understanding of Delta (how much the option moves per $1 stock move) and Theta (daily time decay cost) will help you understand why we select specific strikes and expiries. The Education Library has a beginner's guide to Greeks."
            },
            {
                question: "Q54. What is implied volatility and why does it matter for signals?",
                answer: "Implied volatility (IV) is the market's expectation of future price movement embedded in option prices. High IV means options are expensive relative to their historical pricing — buying options in high-IV environments costs more and reduces your expected return even if the directional call is correct. Our signal methodology includes an IV assessment step to avoid sending signals when options are significantly overpriced relative to expected move."
            },
            {
                question: "Q55. What is theta decay and how does it affect my positions?",
                answer: "Theta is the daily cost of holding an option — every day you hold an option, it loses a small amount of value due to time passing (assuming all else equal). For 0DTE options, theta decay is extremely fast in the final hours before expiration. For weekly options, theta is moderate. For monthly options, theta is slow but accelerates as expiration approaches. This is why our exit alerts are important — we close positions before excessive theta erosion reduces value."
            },
            {
                question: "Q56. How should a beginner start with OnlyOptions?",
                answer: "Follow our 30-day onboarding plan: Week 1 — study the Education Library and observe signals without trading. Week 2 — paper trade every signal in a simulator. Week 3 — trade with real money but only 1 contract per signal regardless of account size. Week 4 — review your results and begin applying full 2% position sizing if satisfied. Avoid 0DTE signals until you have at least 2–3 months of experience with weekly and monthly signals."
            },
            {
                question: "Q57. What is the best signal type for beginners?",
                answer: "Weekly options signals (1–7 day expiry) on SPY or QQQ are the most appropriate for beginners. These offer a reasonable balance between movement potential and time to manage the position. They are less chaotic than 0DTE options and more liquid than many individual stock options. Once comfortable, add monthly signals and eventually 0DTE signals as your experience grows."
            },
            {
                question: "Q58. What if I do not understand the rationale on a signal?",
                answer: "Read the Education Library for context on the technical concepts mentioned. Annual plan members can ask questions directly in the weekly live Q&A sessions. For Basic plan members, email analysts@onlyoptions.us with specific questions about signal rationale — we aim to respond within 24 hours on business days. Understanding the rationale is valuable but not required to execute — the entry range, target, and stop-loss are sufficient to place the trade."
            },
            {
                question: "Q59. Can I use OnlyOptions signals with a small account under $2,000?",
                answer: "You can follow some signals with an account under $2,000, but it is challenging. With $1,000 and 2% risk ($20 per trade), you can only trade options priced below $0.20 per contract — which limits you to very cheap out-of-the-money contracts with lower probability of success. With $2,000 and 2% risk ($40 per trade), you can trade options priced below $0.40. We recommend building your account to at least $2,000 before going live, and spending time paper trading in the interim."
            },
            {
                question: "Q60. How do I get the most out of the OnlyOptions service?",
                answer: "Five practices that help most: (1) Take most signals — selective filtering reduces your sample size and increases variance. (2) Use limit orders within the entry range — avoid market orders and chasing signals past the range. (3) Apply the 2% rule consistently — never risk more per trade regardless of conviction. (4) Act on exit alerts promptly — do not hold hoping for recovery after a stop-loss hit. (5) Review the Performance Dashboard monthly — understanding which tickers and expiry types perform best helps you manage expectations and inform any selective filtering you do choose to apply."
            }
        ]
    }
];
