import { Helmet } from 'react-helmet-async';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import AboutHeroSection from './sections/AboutHeroSection';
import QuickStatsSection from './sections/QuickStatsSection';
import OurStorySection from './sections/OurStorySection';
import WhoWeAreSection from './sections/WhoWeAreSection';
import WhatWeCoverSection from './sections/WhatWeCoverSection';
import MethodologySection from './sections/MethodologySection';
import TransparencySection from './sections/TransparencySection';
import PerformanceRecordSection from './sections/PerformanceRecordSection';
import DisclosuresSection from './sections/DisclosuresSection';
import AboutFaqSection, { faqData } from './sections/AboutFaqSection';

const About = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OnlyOptions",
    "url": "https://onlyoptions.us",
    "foundingDate": "2023",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "3-5" },
    "description": "Options trading signal service. 70.3% win rate. 1,847 verified signals. iOS and Android app.",
    "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "support@onlyoptions.us" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="bg-black min-h-screen text-gray-200 font-sans selection:bg-brand-500/30">
      <Helmet>
        <title>About OnlyOptions | The Options Signal Service Built by Traders, for Traders</title>
        <meta name="description" content="Learn who built OnlyOptions.us, why we built it, and how our signal methodology works. Professional options traders with 30+ years combined experience. Verified 70.3% win rate across 1,847 signals." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <AboutHeroSection />
      <QuickStatsSection />
      <OurStorySection />
      <WhoWeAreSection />
      <WhatWeCoverSection />
      <MethodologySection />
      <TransparencySection />
      <PerformanceRecordSection />
      <DisclosuresSection />
      <AboutFaqSection />

      <StandardCTA />
    </div>
  );
};

export default About;
