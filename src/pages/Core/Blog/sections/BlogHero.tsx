import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Card } from '../../../../components/ui/Card/Card';
import { blogPosts } from '../data/blogData';
import SectionHeader from '../../../../components/ui/Layout/SectionHeader';

const BlogHero = () => {
    const featuredPost = blogPosts[0];

    return (
        <div className="relative pt-24 pb-16 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-brand-500/5 blur-[120px] -z-10 rounded-full opacity-40 transition-opacity" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-[10px] font-black uppercase tracking-widest mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                            Featured Insight
                        </div>

                        <SectionHeader
                            title={<>Market Insights & <span className="text-brand-500">Education</span></>}
                            description="Stay ahead of the curve with our latest analysis, strategy deep-dives, and community announcements from the OnlyOptions analyst team."
                            align="left"
                            className="max-w-2xl"
                        />

                        <div className="flex items-center gap-6 text-[10px] text-gray-500 font-black uppercase tracking-widest pt-2">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3 text-brand-500/50" />
                                Updated Daily
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-3 h-3 text-brand-500/50" />
                                1,200+ Readers
                            </div>
                        </div>
                    </div>

                    <a href={featuredPost.link} className="group relative">
                        <div className="absolute -inset-4 bg-brand-500/10 blur-2xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Card variant="glass" className="p-8 md:p-12 border-brand-500/20 bg-brand-500/5 relative overflow-hidden group-hover:border-brand-500/40 transition-all duration-500">
                            <div className="relative z-10 space-y-6">
                                <div className="text-brand-400 text-[10px] font-black uppercase tracking-widest bg-brand-500/10 self-start px-4 py-1.5 rounded-full border border-brand-500/20 inline-block">
                                    {featuredPost.category}
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] tracking-tight group-hover:text-brand-400 transition-colors uppercase">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-gray-400 text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="pt-6 flex flex-wrap items-center justify-between gap-6 border-t border-white/5">
                                    <div className="flex items-center gap-6 text-[10px] text-gray-500 font-black uppercase tracking-widest">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5 text-brand-500/40" />
                                            {featuredPost.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-brand-500/40" />
                                            {featuredPost.readTime} Read
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-3 text-brand-400 font-black text-xs uppercase tracking-widest group/link">
                                        Read Article
                                        <div className="w-8 h-8 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover/link:bg-brand-500 group-hover/link:text-black transition-all border border-brand-500/20">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;
