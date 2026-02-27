import HeroSection from '../../../components/sections/Hero/HeroSection';
import { Card, CardTitle, CardContent } from '../../../components/ui/Card/Card';
import { Mail, MessageCircle, Clock, Send } from 'lucide-react';
import React from 'react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit handler
    alert("Message sent successfully! Our team will respond shortly.");
  };

  return (
    <div className="pb-20">
      <HeroSection
        title="Get in Touch"
        subtitle="Need help with your account or have questions before joining? We're here to help."
        primaryCtaText="Join Discord"
        primaryCtaLink="/signup"
      />

      <section className="px-6 md:px-12 -mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Contact Info Cards */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <Card className="p-6 border-brand-800/10 flex items-start gap-4 hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Email Support</CardTitle>
                <CardContent className="text-gray-400 mt-2 p-0 text-sm leading-relaxed">
                  <a href="mailto:support@onlyoptions.us" className="text-white font-bold hover:text-brand-400 transition-colors">
                    support@onlyoptions.us
                  </a>
                  <p className="mt-1">For billing and general inquiries.</p>
                </CardContent>
              </div>
            </Card>

            <Card className="p-6 border-brand-800/10 flex items-start gap-4 hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Discord Community</CardTitle>
                <CardContent className="text-gray-400 mt-2 p-0 text-sm leading-relaxed">
                  <a href="/signup" className="text-white font-bold hover:text-[#5865F2] transition-colors">
                    discord.gg/onlyoptions
                  </a>
                  <p className="mt-1">Fastest response for active members.</p>
                </CardContent>
              </div>
            </Card>

            <Card className="p-6 border-brand-800/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Response Time</CardTitle>
                <CardContent className="text-gray-400 mt-2 p-0 text-sm leading-relaxed">
                  <p className="text-white font-bold">Under 12 Hours</p>
                  <p className="mt-1">Support hours: 9 AM - 6 PM EST</p>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Support Ticket Form */}
          <div className="lg:w-2/3">
            <Card className="p-8 md:p-12 border-brand-800/20 bg-gray-900/30">
              <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
              <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-widest">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-medium"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-widest">Topic</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-medium appearance-none">
                    <option value="billing">Billing Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Question</option>
                    <option value="partnership">Partnership / Affiliate</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-widest">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all font-medium resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-xl w-full flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Submit Ticket
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
