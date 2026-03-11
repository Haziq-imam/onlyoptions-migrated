import { useLocation } from 'react-router-dom';
import { sitemapData } from './Legal/sitemapData';
import ComingSoon from './ComingSoon';
import NotFound from './NotFound';

const DynamicPages = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // List of paths that have dedicated page components and should NOT be handled by DynamicPages
    const excludedPaths = [
        '/sitemap',
        '/terms-of-service',
        '/privacy-policy',
        '/risk-disclaimer',
        '/refund-policy',
        '/options-signals-for-beginners',
        '/options-signals-risk-management',
        '/best-brokers-for-options-trading',
        '/0dte-options-strategy-complete-guide',
        '/roi-calculator',
        '/breakeven-calculator'
    ];

    if (excludedPaths.includes(currentPath)) {
        return null; // Let the specific Route handle it
    }

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

    // Default to a 404-style page
    return <NotFound />;
};

export default DynamicPages;
