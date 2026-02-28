import { allCategories } from '../data/blogData';

interface CategoryFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
    return (
        <div className="flex flex-wrap items-center justify-start gap-4 mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mr-4">Filter By Category:</span>
            {allCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${isActive
                            ? 'bg-brand-500 text-black border-brand-500 shadow-[0_0_30px_rgba(32,109,254,0.3)]'
                            : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:border-white/20'
                            }`}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default CategoryFilter;
