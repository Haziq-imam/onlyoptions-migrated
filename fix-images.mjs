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
    
    // Find img tags and their src attributes
    // Pattern: <img src={VariableName}
    // We want to change to: <img src={VariableName.src || VariableName}
    
    // Also handle markdown-like or other imports if they are used as src
    content = content.replace(/src={(\(?)([A-Za-z0-9_\\.]+)( \|\| )?([A-Za-z0-9_\\.]+)?(\)?)( as string)?}/g, (match, p1, p2, p3, p4, p5, p6) => {
        // Skip common non-asset names or those already fixed
        if (['item', 's', 'row', 'link', 'children', 'f', 'faq', 'user'].includes(p2)) return match;
        
        let variableName = p2;
        if (variableName.endsWith('.src')) {
           variableName = variableName.replace('.src', '');
        }

        return `src={(typeof ${variableName} === 'string' ? ${variableName} : (${variableName} as any).src)}`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
    }
};

walkDir('./src', fixFile);
