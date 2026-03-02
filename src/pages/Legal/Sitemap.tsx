import { sitemapData } from './sitemapData';
import StandardSection from '../../components/ui/Layout/StandardSection';
import SectionHeader from '../../components/ui/Layout/SectionHeader';
import { FiArrowRight, FiMap } from 'react-icons/fi';

const Sitemap = () => {
    return (
        <StandardSection variant="institutional" dotGrid spacing="lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 mb-4 border border-brand-500/20">
                        <FiMap className="w-8 h-8" />
                    </div>
                    <SectionHeader
                        label="Navigation"
                        title={<>Site <span className="text-brand-500">Map</span></>}
                        description="Explore our comprehensive library of options trading education, strategies, and institutional-grade tools. Everything you need to master the markets is just one click away."
                        align="center"
                    />
                </div>

                <div className="space-y-24">
                    {sitemapData.map((category, catIdx) => (
                        <div key={catIdx} className="space-y-12">
                            <div className="flex items-center gap-6">
                                <h2 className="text-3xl font-black text-white tracking-tight shrink-0">
                                    {category.category}
                                </h2>
                                <div className="h-px w-full bg-gradient-to-r from-brand-500/30 to-transparent" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {category.sections.map((section, secIdx) => (
                                    <div key={secIdx} className="space-y-6">
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-400 pl-4 border-l-2 border-brand-500/50">
                                            {section.title}
                                        </h3>
                                        <div className="flex flex-col gap-2">
                                            {section.links.map((link, linkIdx) => (
                                                <a
                                                    key={linkIdx}
                                                    href={link.path}
                                                    className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-500/20 hover:bg-brand-500/5 transition-all duration-300"
                                                >
                                                    <span className="text-[13px] font-bold text-gray-400 group-hover:text-white transition-colors">
                                                        {link.name}
                                                    </span>
                                                    <FiArrowRight className="w-4 h-4 text-brand-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA or Info */}
                <div className="mt-32 p-12 rounded-[2.5rem] fintech-glass border border-white/10 text-center relative overflow-hidden group">
                    <div className="absolute -inset-24 bg-brand-500/5 blur-[100px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                    <h3 className="text-2xl font-black text-white mb-4 relative z-10">Can't find what you're looking for?</h3>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 relative z-10">
                        Our support team is available 24/7 during market hours to assist you with any questions about our signals, strategies, or your account.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-500 text-white font-black text-xs uppercase tracking-widest hover:bg-brand-600 transition-colors relative z-10"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </StandardSection>
    );
};

export default Sitemap;
