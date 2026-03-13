
import os

def find_live_pages(root_dirs):
    live_pages = []
    for root_dir in root_dirs:
        for root, dirs, files in os.walk(root_dir):
            for file in files:
                if file.endswith('.tsx'):
                    path = os.path.join(root, file)
                    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        if 'ComingSoon' not in content:
                            live_pages.append(path)
    return live_pages

root_dirs = [
    r'c:\Users\Rashid\Desktop\New folder (3)\onlyoptionsweb-updated\src\pages\Strategies',
    r'c:\Users\Rashid\Desktop\New folder (3)\onlyoptionsweb-updated\src\pages\Stocks'
]

pages = find_live_pages(root_dirs)
for p in pages:
    print(p)
