import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');
const appTsxPath = path.join(srcDir, 'App.tsx');
const outputMd = path.join(__dirname, '../ROUTING_MAP.md');

const appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');

// Get all imports to map Component -> Directory
const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]([^'"]+)['"]/g;
const componentDirs = {};
let importMatch;
while ((importMatch = importRegex.exec(appTsxContent)) !== null) {
    const compName = importMatch[1];
    const importPathGlob = importMatch[2];
    if (importPathGlob.startsWith('./pages')) {
        const fullDirPath = path.join(srcDir, path.dirname(importPathGlob));
        componentDirs[compName] = fullDirPath;
    }
}

// Extract routes
const routeRegex = /<Route\s+(?:index\s+)?path=["']([^"']+)["']\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}/g;
const indexRegex = /<Route\s+index\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}/g;

const routes = [];
let routeMatch;
while ((routeMatch = routeRegex.exec(appTsxContent)) !== null) {
    let routePath = routeMatch[1];
    if (routePath === '*') continue;
    routes.push({ path: routePath, component: routeMatch[2], outgoingLinks: new Set() });
}

// Also grab the index route if it doesn't have a path="" attribute
let indexMatch;
while ((indexMatch = indexRegex.exec(appTsxContent)) !== null) {
    routes.push({ path: '/', component: indexMatch[1], outgoingLinks: new Set() });
}

// Ensure unique paths
const uniqueRoutes = Array.from(new Map(routes.map(r => [r.path, r])).values());

const linkRegex = /(?:href|to|primaryCtaLink|secondaryCtaLink)=["']([^"']+)["']/g;

function scanLinksInDir(dir) {
    let foundLinks = new Set();
    if (!fs.existsSync(dir)) return foundLinks;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            const childLinks = scanLinksInDir(fullPath);
            childLinks.forEach(l => foundLinks.add(l));
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            let linkMatch;
            while ((linkMatch = linkRegex.exec(content)) !== null) {
                const link = linkMatch[1].split('#')[0].split('?')[0];
                if (link.startsWith('/')) {
                    foundLinks.add(link);
                }
            }
        }
    }
    return foundLinks;
}

for (const route of uniqueRoutes) {
    const compDir = componentDirs[route.component];
    if (compDir) {
        const links = scanLinksInDir(compDir);
        for (const l of links) {
            // Filter out self-links
            if (l !== route.path && l !== route.path + '/') {
                route.outgoingLinks.add(l);
            }
        }
    }
}

uniqueRoutes.sort((a, b) => a.path.localeCompare(b.path));

// Generate Markdown
let mdContent = `# Page Routing Map\n\n`;
mdContent += `> Run \`npm run route-map\` to regenerate this file when you add new links.\n\n`;
mdContent += `This document maps how each page specifically links to other pages within its content (excluding the global header/footer nav).\n\n`;

for (const route of uniqueRoutes) {
    mdContent += `### ${route.path === '/' ? 'Home ( / )' : route.path}\n`;
    if (route.outgoingLinks.size > 0) {
        for (const l of Array.from(route.outgoingLinks).sort()) {
            mdContent += `- Routes to ➔ **\`${l}\`**\n`;
        }
    } else {
        mdContent += `- Routes to ➔ *(No internal links)*\n`;
    }
    mdContent += `\n`;
}

fs.writeFileSync(outputMd, mdContent);
console.log('Successfully generated pure URL ROUTING_MAP.md');
