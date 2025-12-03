from PIL import Image
import sys

def crop_image(input_path, output_path):
    img = Image.open(input_path)
    width, height = img.size
    pixels = img.load()
    
    # Scan the middle row to find the white panel
    mid_y = height // 2
    start_x = 0
    
    for x in range(width):
        r, g, b = pixels[x, mid_y][:3]
        # Check for pure white or very close to white
        if r > 250 and g > 250 and b > 250:
            start_x = x
            break
            
    # Add a small buffer or adjust if needed. 
    # The screenshot might have a border or padding.
    # Let's look at the screenshot again. The white panel starts after the sidebar.
    # But wait, the screenshot has a "TaxPal" header which spans the whole width?
    # No, the header is also part of the layout.
    # The sidebar is distinct.
    
    # If we crop from start_x, we might get the white panel.
    # But we want to keep the header? 
    # The user said "two payroll". The "Payroll" text is in the sidebar.
    # The header "TaxPal" is also in the sidebar?
    # Looking at the screenshot:
    # Sidebar has "TaxPal" logo, "Overview", "Contacts", etc.
    # The "Payroll" table is in a card on the right.
    
    # So we want to crop out the Sidebar.
    # The Sidebar background is likely NOT white.
    # The Content background IS white (or the card is white).
    
    if start_x > 0:
        # Crop from start_x to width
        # But we might want to include some padding?
        # Actually, if I crop, I might lose the rounded corners of the card if I'm not careful.
        # But the card is inside the white area?
        # Let's assume start_x is the beginning of the white card.
        
        # However, the screenshot shows the card has a border.
        # Let's just crop roughly 30% from the left if detection fails.
        pass
    else:
        start_x = int(width * 0.25) # Fallback
        
    # Let's try to be more smart.
    # The sidebar is on the left.
    # We want the right part.
    # Let's crop from start_x - 20 (buffer) if possible, or just start_x.
    
    # Actually, looking at the screenshot, the "Payroll" text that is duplicated is in the sidebar.
    # So we definitely want to exclude the sidebar.
    
    # Let's crop from start_x.
    cropped = img.crop((start_x, 0, width, height))
    cropped.save(output_path)
    print(f"Cropped from x={start_x}")

if __name__ == "__main__":
    crop_image('/Users/abhijith/Desktop/SAMPLE PROJECT/public/feature-payroll.png', '/Users/abhijith/Desktop/SAMPLE PROJECT/public/feature-payroll-cropped.png')
