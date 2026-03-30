import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Send } from 'lucide-react';
import HeroSection from '../../../components/ui/Hero/HeroSection';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';
import { Card } from '../../../components/ui/Card/Card';

import ContactChannelsTable from './sections/ContactChannelsTable';
import ContactFormGuide from './sections/ContactFormGuide';
import SelfServiceLinks from './sections/SelfServiceLinks';
import ContactFaq from './sections/ContactFaq';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! Our team will respond shortly.");
  };

  const schemaContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact OnlyOptions",
    "description": "Contact OnlyOptions for support, billing questions, and signal inquiries.",
    "url": "https://onlyoptions.us/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "OnlyOptions",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "support@onlyoptions.us",
          "contactType": "customer support"
        },
        {
          "@type": "ContactPoint",
          "email": "analysts@onlyoptions.us",
          "contactType": "technical support"
        }
      ]
    }
  };

  return (
    <div className="bg-black">
      <Helmet>
        <title>Contact OnlyOptions — Options Signal Support & Analyst Questions</title>
        <meta name="description" content="Contact OnlyOptions for support, billing questions, and signal inquiries. Basic plan: 24hr response. Pro plan: 1hr priority support during market hours. Email support@onlyoptions.us." />
        <script type="application/ld+json">{JSON.stringify(schemaContact)}</script>
      </Helmet>

      <HeroSection
        title={<>Contact <span className="text-brand-500">OnlyOptions</span></>}
        subtitle="Whether you have a question about a signal, your account, or the service in general — we respond to every message. Use the guide below to reach the right team for your question."
        badgeText="Support Center"
        primaryCtaText="Get Access Now"
        primaryCtaLink="/membership"
      />

      <StandardSection spacing="lg" divider="bottom">
        <div className="max-w-6xl mx-auto space-y-24">
          <ContactChannelsTable />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <ContactFormGuide />

              <Card variant="glass" className="p-10 border-brand-500/20 bg-brand-500/5 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-500/5 blur-[120px] rounded-full" />
                <div className="relative z-10">
                  <SectionHeader
                    title="Send a Message"
                    description="Fill out the form below and we'll route your message to the correct team."
                    align="left"
                    className="mb-8"
                  />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all font-bold placeholder:text-gray-700"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Plan Type</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all font-bold appearance-none cursor-pointer">
                        <option value="basic" className="bg-black">Basic Plan</option>
                        <option value="pro" className="bg-black">Pro Plan</option>
                        <option value="annual" className="bg-black">Annual Plan</option>
                        <option value="trial" className="bg-black">Get Access</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Message</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all font-bold resize-none placeholder:text-gray-700"
                        placeholder="How can we help?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-brand-500 hover:bg-brand-400 text-black font-black py-5 px-10 rounded-2xl w-full flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs"
                    >
                      <Send className="w-4 h-4" />
                      Submit Message
                    </button>
                  </form>
                </div>
              </Card>
            </div>

            <SelfServiceLinks />
          </div>

          <ContactFaq />
        </div>
      </StandardSection>

      <StandardCTA
        title="Join OnlyOptions Today"
        subtitle="Institutional access. No upfront obligation. Full signals from day one."
        buttonText="Get Access Now — Instant Activation"
      />
    </div>
  );
};

export default Contact;
