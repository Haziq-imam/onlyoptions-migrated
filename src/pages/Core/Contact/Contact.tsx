import HeroSection from '../../../components/ui/Hero/HeroSection';
import { Card } from '../../../components/ui/Card/Card';
import { Mail, MessageCircle, Clock, Send } from 'lucide-react';
import React from 'react';
import StandardSection from '../../../components/ui/Layout/StandardSection';
import SectionHeader from '../../../components/ui/Layout/SectionHeader';
import StandardCTA from '../../../components/ui/CTA/StandardCTA';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! Our team will respond shortly.");
  };

  return (
    <div className="bg-black">
      <HeroSection
        title={<>Get in <br /><span className="text-brand-500">Touch</span></>}
        subtitle="Need help with your account or have questions before joining? Our team is dedicated to your success."
        primaryCtaText="Join Discord"
        primaryCtaLink="/signup"
        badgeText="Support"
      />

      <StandardSection spacing="lg" divider="bottom">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Contact Info Cards */}
          <div className="lg:w-1/3 space-y-12">
            <SectionHeader
              title="Information"
              align="left"
            />

            <div className="space-y-6">
              <Card variant="glass" className="p-8 border-white/5 flex items-start gap-6 group hover:bg-white/[0.02] transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0 border border-brand-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1">Email Support</h4>
                  <a href="mailto:support@onlyoptions.us" className="text-brand-500 font-extrabold hover:text-brand-400 transition-colors text-lg">
                    support@onlyoptions.us
                  </a>
                  <p className="mt-2 text-gray-500 text-xs">For billing and general inquiries.</p>
                </div>
              </Card>

              <Card variant="glass" className="p-8 border-white/5 flex items-start gap-6 group hover:bg-white/[0.02] transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] shrink-0 border border-[#5865F2]/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1">Discord Community</h4>
                  <a href="/signup" className="text-[#5865F2] font-extrabold hover:text-[#5865F2]/80 transition-colors text-lg">
                    Open Ticket
                  </a>
                  <p className="mt-2 text-gray-500 text-xs">Fastest response for active members.</p>
                </div>
              </Card>

              <Card variant="glass" className="p-8 border-white/5 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 shrink-0 border border-white/5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1">Response Time</h4>
                  <p className="text-white font-extrabold text-lg">Under 12 Hours</p>
                  <p className="mt-2 text-gray-500 text-xs">Support hours: 9 AM - 6 PM EST</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Support Ticket Form */}
          <div className="lg:w-2/3">
            <Card variant="glass" className="p-10 md:p-16 border-white/5 bg-white/[0.01] relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-500/5 blur-[120px] rounded-full" />

              <div className="relative z-10">
                <SectionHeader
                  title="Send a Message"
                  description="Fill out the form below and we'll get back to you as soon as possible."
                  align="left"
                  className="mb-12"
                />

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all font-bold placeholder:text-gray-700"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all font-bold placeholder:text-gray-700"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Inquiry Topic</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all font-bold appearance-none cursor-pointer">
                      <option value="billing" className="bg-black">Billing Inquiry</option>
                      <option value="technical" className="bg-black">Technical Support</option>
                      <option value="general" className="bg-black">General Question</option>
                      <option value="partnership" className="bg-black">Partnership / Affiliate</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Message</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all font-bold resize-none placeholder:text-gray-700"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-brand-500 hover:bg-brand-400 text-black font-black py-5 px-10 rounded-2xl w-full flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs"
                  >
                    <Send className="w-4 h-4" />
                    Submit Support Ticket
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </StandardSection>

      <StandardCTA
        title="Dominate the Markets Together"
        subtitle="Join 1,247+ professional traders receiving live alerts every market day."
      />
    </div>
  );
};

export default Contact;
