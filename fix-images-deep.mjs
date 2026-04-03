import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const fixFile = (filePath) => {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.js') && !filePath.endsWith('.jsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // 1. Find all variables imported from assets
    // Example: import logo from '../../assets/logo.png';
    const assetVariables = new Set();
    const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"].*assets\/.*['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        assetVariables.add(match[1]);
    }

    if (assetVariables.size === 0) return;

    // 2. Replace any {Variable} where Variable is an assetVariable with a type-safe version
    // Regex matches Prop={Variable} or Prop={ (Variable.src || Variable) }
    // We strictly look for {Variable} where Variable is in our set.
    
    assetVariables.forEach(v => {
        // Pattern matches: {v}, {(v.src || v)}, { (v.src || v) as string }
        // We replace it with: {(typeof v === 'string' ? v : (v as any).src)}
        
        // Escape for regex
        const escapedV = v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Match {v}, {(v.src || v)}, {(v.src || v) as string}, etc.
        const pattern = new RegExp(`(?<==){(\\(?)${escapedV}(\\.src)?( \\|\\| ${escapedV})?(\\)?)( as any)?( as string)?}`, 'g');
        
        content = content.replace(pattern, `{ (typeof ${v} === 'string' ? ${v} : (${v} as any).src) }`);
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
    }
};

walkDir('./src', fixFile);
