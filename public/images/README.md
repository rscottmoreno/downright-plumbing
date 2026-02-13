# Image Assets for Downright Plumbing

This directory contains image assets for the website.

## Required Images

### Homepage
- `hero-plumbing.jpg` - Hero section background (1920x1080px recommended)
  - Should show professional plumbing work or team
  - Will have gradient overlay applied
  
- `family-team.jpg` - Why Downright Plumbing section (1200x900px recommended)
  - Photo of the family/team
  - Will be displayed in 4:3 aspect ratio

## Image Guidelines

- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Optimization**: Compress images for web (aim for under 500KB per image)
- **Dimensions**: Use at least 2x the display size for retina displays
- **Alt Text**: All images have descriptive alt text in the code

## Fallback Behavior

The website is designed to gracefully handle missing images:
- Hero section: Falls back to gradient background
- Team photo: Falls back to amber gradient background

## Adding New Images

1. Place images in this directory
2. Use descriptive filenames (lowercase, hyphenated)
3. Update the src path in the relevant component
4. Test both desktop and mobile views
