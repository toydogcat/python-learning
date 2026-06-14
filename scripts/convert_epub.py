import ebooklib
from ebooklib import epub
from bs4 import BeautifulSoup
from markdownify import markdownify as md
import os
import re

epub_path = 'TMP/Python Essentials 1 Beginner Course (The Openedg Python Institute) (z-library.sk, 1lib.sk, z-lib.sk).epub'
output_dir = 'docs/guide'

def convert():
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    book = epub.read_epub(epub_path)
    
    for item in book.get_items():
        if item.get_type() == ebooklib.ITEM_DOCUMENT:
            name = item.get_name()
            # Only process main content files
            if 'split' not in name:
                continue
                
            content = item.get_content()
            soup = BeautifulSoup(content, 'html.parser')
            
            # Remove images
            for img in soup.find_all('img'):
                img.decompose()
                
            # Convert to markdown
            markdown_content = md(str(soup), heading_style="ATX")
            
            # Save to file
            filename = name.split('/')[-1].replace('.xhtml', '.md')
            with open(os.path.join(output_dir, filename), 'w', encoding='utf-8') as f:
                f.write(markdown_content)
            print(f"Converted {name} to {filename}")

if __name__ == "__main__":
    convert()
