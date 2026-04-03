import type { Metadata } from 'next';
import ClientProviders from './ClientProviders';
import Layout from '@/components/layout/Layout';
import '../index.css';

export const metadata: Metadata = {
  title: 'OnlyOptions',
  description: 'Options trading signal service. 70.3% verified win rate. iOS and Android app.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0Q3GY1QWS5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0Q3GY1QWS5');
            `,
          }}
        />
        {/* SEO Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OnlyOptions",
              "url": "https://onlyoptions.us",
              "description": "Options trading signal service. 70.3% verified win rate. iOS and Android app.",
              "contactPoint": { "@type": "ContactPoint", "email": "support@onlyoptions.us" }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "OnlyOptions — Options Trading Signals",
              "operatingSystem": "iOS, Android",
              "applicationCategory": "FinanceApplication",
              "offers": { "@type": "Offer", "price": "499.99", "priceCurrency": "USD" }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is OnlyOptions.us?",
                  "acceptedAnswer": { "@type": "Answer", "text": "OnlyOptions.us is an options trading signal service. Professional analysts send 2–4 live options trading alerts every market day through the OnlyOptions iOS and Android app." }
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased text-white bg-black" suppressHydrationWarning>
        <ClientProviders>
          <Layout>
            <div id="root">{children}</div>
          </Layout>
        </ClientProviders>
      </body>
    </html>
  );
}
