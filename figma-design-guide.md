
# AnswerThis Figma Design Guide

## Quick Start
1. Copy the `design-system.json` values into Figma
2. Follow the step-by-step component creation guide below

## Setting Up Color Styles
Go to Design Panel → Colors → Create these styles:
- **Primary/Purple-600**: `#9333EA`
- **Primary/Pink-600**: `#EC4899` 
- **Neutral/Slate-50**: `#F8FAFC`
- **Neutral/White**: `#FFFFFF`
- **Text/Primary**: `#0F172A`
- **Text/Secondary**: `#64748B`

## Setting Up Gradients
Create these gradient styles:
1. **Background Gradient**: Linear 135°, `#F8FAFC` → `#FFFFFF` → `#DBEAFE`
2. **Button Gradient**: Linear 90°, `#9333EA` → `#EC4899`
3. **Title Gradient**: Linear 90°, `#9333EA` → `#EC4899` → `#3B82F6`

## Typography Styles
Create text styles:
- **Heading/XL**: 48px, Bold (700), Inter
- **Heading/Large**: 24px, Semibold (600), Inter  
- **Body/Large**: 18px, Medium (500), Inter
- **Body/Base**: 16px, Regular (400), Inter
- **Body/Small**: 14px, Regular (400), Inter

## Component Creation Order

### 1. Logo Component
- Create 32×32px rectangle
- Apply gradient fill: `#9333EA` → `#EC4899` at 45°
- Corner radius: 8px
- Add "A" text, white, bold, centered

### 2. Sidebar Item Component
- Create auto-layout frame, horizontal
- Padding: 12px 16px
- Corner radius: 12px
- Gap: 12px
- Create variants:
  - **Default**: No fill, text color `#64748B`
  - **Active**: Gradient background `rgba(147,51,234,0.1)` → `rgba(236,72,153,0.1)`, text `#7C3AED`
  - **Hover**: Background `rgba(241,245,249,0.5)`, text `#334155`

### 3. Button Components
**Primary Button:**
- Auto-layout frame
- Padding: 16px 32px
- Corner radius: 16px
- Fill: Gradient `#9333EA` → `#EC4899`
- Text: 18px, Semibold, White
- Drop shadow: 0px 10px 15px rgba(0,0,0,0.1)

**Outline Button:**
- Auto-layout frame  
- Padding: 8px 16px
- Corner radius: 9999px (full)
- Stroke: 1px, `#E2E8F0`
- Text: 14px, Medium, `#475569`

### 4. Input Component
- Rectangle with auto-layout
- Size: Full width × 96px height
- Padding: 24px 16px 24px 48px
- Corner radius: 16px
- Fill: `rgba(255,255,255,0.5)`
- Stroke: 1px `#E2E8F0`
- Placeholder text: 18px, `#94A3B8`

### 5. Card Components
**Search Card:**
- Auto-layout frame, vertical
- Padding: 32px
- Corner radius: 24px
- Fill: `rgba(255,255,255,0.7)`
- Background blur: 4px (Effects panel)
- Drop shadow: 0px 20px 25px rgba(0,0,0,0.1)

**Info Card:**
- Auto-layout frame
- Padding: 24px
- Corner radius: 16px
- Fill: `rgba(255,255,255,0.7)`
- Drop shadow: 0px 10px 15px rgba(0,0,0,0.1)

### 6. Layout Structure
**Main Frame:**
- Size: 1440×1024px (or your preferred desktop size)
- Fill: Background gradient

**Sidebar:**
- Auto-layout frame, vertical
- Size: 256px × Full height
- Fill: `rgba(255,255,255,0.8)`
- Background blur: 12px
- Right border: 1px `rgba(226,232,240,0.5)`
- Padding: 24px

**Content Area:**
- Auto-layout frame, vertical
- Margin left: 256px
- Max width: 896px
- Padding: 48px 32px
- Gap: 32px

## Pro Tips for Figma
1. **Use Auto Layout everywhere** - Makes responsive design easier
2. **Create component variants** - For button states, sidebar items
3. **Name layers clearly** - Use / for organization (e.g., "Button/Primary/Default")
4. **Use constraints properly** - For responsive behavior
5. **Apply effects last** - Gradients, shadows, blurs
6. **Test interactions** - Use Figma's prototyping for hover states

## Glassmorphism Effect
To achieve the glass effect:
1. Fill: White with 70% opacity
2. Background blur: 4-12px (Effects panel)
3. Border: 1px with low opacity white/gray
4. Subtle drop shadow

## Ready to Import
Use Figma plugins like:
- **html.to.design** - Import from HTML/CSS
- **Design Tokens** - For systematic import
- **Figma to Code** - For reverse workflow

This guide should give you everything needed to recreate the AnswerThis design perfectly in Figma!
