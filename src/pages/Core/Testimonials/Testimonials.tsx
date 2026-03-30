import { Helmet } from 'react-helmet-async';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';

import TestimonialsHero from './sections/TestimonialsHero';
import TestimonialsGrid from './sections/TestimonialsGrid';
import MemberResultsTable from './sections/MemberResultsTable';
import TestimonialsFAQ from './sections/TestimonialsFAQ';

const Testimonials = () => {

  const schemaAggregateRating = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "OnlyOptions Options Signal Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5"
    }
  };

  const schemaReviews = [
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "I had tried other signal services before and always hit the same wall — vague alerts and no transparency on what actually happened to the trade. OnlyOptions publishes every result, wins and losses both.", "author": { "@type": "Person", "name": "James K." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "I work full time and cannot watch charts during market hours. The push notifications do the heavy lifting — I see the signal, open my broker, and I am done in two minutes.", "author": { "@type": "Person", "name": "Rachel T." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "What separates this service from everything else I have seen is the quality of the written rationale on every signal.", "author": { "@type": "Person", "name": "Marcus W." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "I was skeptical of options signal services after a bad experience elsewhere. What made me try OnlyOptions was the public Performance Dashboard.", "author": { "@type": "Person", "name": "Diana S." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "Six months in and I have not had a single week where I questioned whether this was worth the $60.", "author": { "@type": "Person", "name": "Carlos M." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "I have been a subscriber since the first full month of operation — almost three years now.", "author": { "@type": "Person", "name": "Tom B." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "The weekly live Q&A on the Pro plan is something I did not think I would use much. Turns out it is one of the most valuable parts of my subscription.", "author": { "@type": "Person", "name": "Priya N." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "I paper traded the signals for three weeks before going live with real money — the Education Library inside the app walked me through exactly how to do that.", "author": { "@type": "Person", "name": "Derek J." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "Retired and managing my own portfolio. I had been trading options for years on my own before joining this service.", "author": { "@type": "Person", "name": "Linda C." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "I switched from another service specifically because they refused to publish loss records. OnlyOptions not only publishes every loss — they break down the win rate by ticker.", "author": { "@type": "Person", "name": "Aaron H." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "I am a data analyst by profession so I spent a lot of time with the Performance Dashboard before subscribing.", "author": { "@type": "Person", "name": "Mei L." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "The exit alerts are the feature that makes this service actually usable. Every other service I tried left me wondering when to exit.", "author": { "@type": "Person", "name": "Frank V." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "Fourteen months of subscription. My notes from the first 12 months show a 68% personal win rate which is slightly below the published 70.3%.", "author": { "@type": "Person", "name": "Sandra R." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "Eight months in. I started with the Basic plan to evaluate before committing to a higher tier. No complaints.", "author": { "@type": "Person", "name": "Brian T." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } },
    { "@context": "https://schema.org", "@type": "Review", "reviewBody": "Almost two years now. I have tracked every signal I have taken — 312 trades total. My personal win rate is 71.1%.", "author": { "@type": "Person", "name": "Natasha P." }, "reviewRating": { "@type": "Rating", "ratingValue": "5" } }
  ];

  return (
    <div className="bg-black">
      <Helmet>
        <title>OnlyOptions Member Reviews & Testimonials — Real Results from Real Traders</title>
        <meta name="description" content="Read verified reviews from OnlyOptions members — options traders across all experience levels sharing real results, win rates, and execution experience. 1,247+ active subscribers." />
        <script type="application/ld+json">{JSON.stringify(schemaAggregateRating)}</script>
        {schemaReviews.map((schema, index) => (
          <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      <StandardSection variant="institutional" spacing="lg" className="pt-24 md:pt-32">
        <TestimonialsHero />
        <TestimonialsGrid />
        <MemberResultsTable />
      </StandardSection>

      <StandardSection variant="default" spacing="md" divider="top">
        <TestimonialsFAQ />
      </StandardSection>

      <StandardCTA
        title="Join 1,247+ Members Today"
        subtitle="Satisfaction Guaranteed. Full access to live signals from day one."
        buttonText="Get Access Now — Instant Activation"
      />
    </div>
  );
};

export default Testimonials;
