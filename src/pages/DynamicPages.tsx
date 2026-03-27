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
        '/privacy',
        '/risk-disclaimer',
        '/refund-policy',
        '/options-signals-for-beginners',
        '/options-signals-risk-management',
        '/best-brokers-for-options-trading',
        '/0dte-options-strategy-complete-guide',
        '/credit-spreads-strategy',
        '/debit-spreads-guide',
        '/roi-calculator',
        '/breakeven-calculator',
        '/butterfly-spread-options',
        '/ratio-spread-options',
        '/calendar-spread-strategy',
        '/protective-put-strategy',
        '/covered-call-strategy',
        '/iron-condor-strategy',
        '/strategies/earnings-trading',
        '/nvda-options-signals',
        '/aapl-options-signals',
        '/tsla-options-trading-guide',
        '/msft-options-strategy',
        '/msft-options-signals',
        '/amzn-options-trading',
        '/amzn-options-signals',
        '/meta-options-trading',
        '/meta-options-signals',
        '/googl-options-signals',
        '/amd-options-signals',
        '/nflx-options-strategy',
        '/nflx-options-signals',
        '/iwm-options-signals',
        '/iwm-qqq-coin-pltr-options-signals',
        '/options-trading-101',
        '/spy-options-signals',
        '/spy-options-trading-guide',
        '/spy-0dte-strategy',
        '/qqq-options-signals',
        '/qqq-options-trading-strategy',
        '/qqq-0dte-trading',
        '/how-to-get-approved-for-options-trading',
        '/position-sizing-guide-options',
        '/options-signals-position-sizing',
        '/understanding-options-premium-pricing',
        '/options-premium-explained',
        '/common-options-trading-mistakes',
        '/understanding-implied-volatility-options',
        '/implied-volatility-explained',
        '/how-to-read-options-chain',
        '/how-to-read-options-chains'
    ];

    // Normalize path by removing trailing slash for matching
    const normalizedPath = currentPath.replace(/\/$/, "");
    const pathToMatch = normalizedPath === "" ? "/" : normalizedPath;

    if (excludedPaths.includes(pathToMatch)) {
        return null; // Let the specific Route handle it
    }

    // Search for the path in sitemapData
    let foundLink = null;
    let foundCategory = "Educational";

    for (const cat of sitemapData) {
        for (const section of cat.sections) {
            const link = section.links.find(l => {
                const normalizedLinkPath = l.path.replace(/\/$/, "");
                const linkPathToMatch = normalizedLinkPath === "" ? "/" : normalizedLinkPath;
                return linkPathToMatch === pathToMatch;
            });
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
