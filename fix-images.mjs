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
    content = content.replace(/src={(\(?)([A-Za-z0-9_\\.]+)( \|\| )?([A-Za-z0-9_\\.]+)?(\)?)}/g, (match, p1, p2, p3, p4, p5) => {
        // Skip common non-asset names or those already fixed
        if (['item', 's', 'row', 'link', 'children', 'f', 'faq', 'user'].includes(p2)) return match;
        if (match.includes(' as string')) return match;
        
        let var1 = p2;
        let var2 = p4;
        
        if (var1.endsWith('.src')) {
           // We already have .src, just add the cast
           return `src={(${var1} || ${var2}) as string}`;
        }
        
        return `src={(${var1}.src || ${var1}) as string}`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
    }
};

walkDir('./src', fixFile);
