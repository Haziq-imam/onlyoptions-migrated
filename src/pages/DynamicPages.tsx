import { useLocation } from 'react-router-dom';
import { sitemapData } from './Legal/sitemapData';
import ComingSoon from './ComingSoon';

const DynamicPages = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Search for the path in sitemapData
    let foundLink = null;
    let foundCategory = "Educational";

    for (const cat of sitemapData) {
        for (const section of cat.sections) {
            const link = section.links.find(l => l.path === currentPath);
            if (link) {
                foundLink = link;
                foundCategory = section.title;
                break;
            }
        }
        if (foundLink) break;
    }

    if (foundLink) {
        return <ComingSoon title={foundLink.name} category={foundCategory} />;
    }

    // Default to a 404-style Coming Soon
    return <ComingSoon title="Page Under Development" category="Coming Soon" />;
};

export default DynamicPages;
