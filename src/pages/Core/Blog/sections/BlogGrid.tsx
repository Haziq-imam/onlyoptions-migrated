import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Card } from '../../../../components/ui/Card/Card';
import type { BlogPost } from '../data/blogData';

interface BlogGridProps {
    posts: BlogPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
    if (posts.length === 0) {
        return (
            <div className="py-20 text-center">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs italic">No articles found in this category.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
                <a href={post.link} key={index} className="group">
                    <Card variant="glass" className="h-full flex flex-col border-white/5 p-10 transition-all hover:bg-white/[0.04] group-hover:border-brand-500/20 duration-500">
                        <div className="flex-1 space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/10 text-brand-400 text-[10px] font-black uppercase tracking-widest">
                                {post.category}
                            </div>

                            <h3 className="text-2xl font-black text-white leading-tight group-hover:text-brand-400 transition-colors uppercase tracking-tight">
                                {post.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-3">
                                {post.excerpt}
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-black uppercase tracking-widest">
                                    <Calendar className="w-3.5 h-3.5 text-brand-500/40" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-black uppercase tracking-widest">
                                    <Clock className="w-3.5 h-3.5 text-brand-500/40" />
                                    {post.readTime}
                                </div>
                            </div>

                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-black transition-all border border-white/5 group-hover:border-brand-500 duration-500">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export default BlogGrid;
