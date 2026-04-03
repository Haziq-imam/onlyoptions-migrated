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
    content = content.replace(/src={([A-Za-z0-9_]+)}/g, (match, variableName) => {
        // Skip common non-asset names or those already fixed
        if (['item', 's', 'row', 'link', 'children', 'f', 'faq', 'user'].includes(variableName)) return match;
        if (content.includes(`const ${variableName} =`)) {
             // If defined locally, might not be an asset
        }
        return `src={${variableName}.src || ${variableName}}`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
    }
};

walkDir('./src', fixFile);
