# Design System Document
## LuxeLips - Luxury Lipstick E-Commerce Platform

**Version**: 1.0  
**Created**: 2026-09-04  
**Document Owner**: Design Lead  

---

## Brand Identity

### Brand Essence
Luxurious, empowering, innovative, inclusive, and sophisticated.

### Brand Colors

#### Primary Color - Rich Berry
- **Name**: LuxeLips Berry
- **Hex**: #6B2C47
- **RGB**: rgb(107, 44, 71)
- **Use**: Primary buttons, brand identity, premium elements

#### Secondary Color - Luminous Gold
- **Name**: Champagne Glow
- **Hex**: #E8D4B8
- **RGB**: rgb(232, 212, 184)
- **Use**: Accents, luxury badges, highlights

#### Tertiary Color - Rose Blush
- **Name**: Soft Rose
- **Hex**: #D8A5A5
- **RGB**: rgb(216, 165, 165)
- **Use**: Complementary accents, warm tones

#### Neutral Colors
- **Dark**: #1A1A1A (text)
- **Medium**: #5C5C5C (secondary text)
- **Light**: #F8F6F3 (cream background)
- **White**: #FFFFFF (content areas)

#### Semantic Colors
- **Success**: #2E7D32 (green)
- **Warning**: #F57C00 (orange)
- **Error**: #C62828 (red)
- **Info**: #1976D2 (blue)

### Typography

#### Font Families
- **Headlines**: Montserrat Bold (elegant, modern)
- **Body**: Lato Regular (clean, readable)
- **Monospace**: Space Mono (code, swatches)

#### Font Sizes and Weights

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 44px | Bold | 1.2 |
| H2 | 36px | Bold | 1.3 |
| H3 | 28px | Bold | 1.3 |
| H4 | 24px | SemiBold | 1.4 |
| Body | 16px | Regular | 1.6 |
| Small | 14px | Regular | 1.5 |
| Caption | 12px | Regular | 1.4 |

### Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### Lipstick Color Palette
- **Nude/Beige**: #D4A5A5, #C9B5A0, #B8938D
- **Reds**: #A71930, #C41E3A, #DC143C
- **Pinks**: #FF69B4, #FF1493, #E75480
- **Berries**: #6B2C47, #8B4789, #A0488A
- **Plums**: #663399, #7851A9, #836FBF
- **Corals**: #FF7F50, #FF6347, #F08080

---

## Component Library - AR Focused

### Navigation Components

#### Header/Navbar
- Logo (clickable to home)
- Search bar with shade finder
- AR try-on quick access
- User account menu
- Shopping cart with AR preview
- Mobile hamburger menu

#### Footer
- Company story
- Shade guide links
- Customer care
- Legal/policies
- Social media links
- Newsletter signup

### Product Components

#### Product Card
- Product image (shade swatch)
- Product name and shade
- Rating (5-star with shade reviews)
- Price (premium positioning)
- "Try On" button (AR trigger)
- Wishlist toggle
- Quick view

#### AR Try-On Interface
- Real-time camera view
- Shade visualization on lips
- Lighting condition selector
- Skin tone selector
- Zoom and pan controls
- "Save Tried Shade" button
- Screenshot/share button
- Exit AR button

#### Shade Finder Tool
- 5-question quiz
- Skin tone selector
- Undertone selection (warm, cool, neutral)
- Preferred finish (matte, satin, gloss)
- Shade recommendation results
- "Try On" recommendations
- Purchase recommended shades

#### Product Detail Page
- Shade swatch (large, zoomable)
- Product name, finish, description
- Rating and review count
- Price and limited edition badge
- "Try On with AR" button
- Full ingredients list
- Sustainability badges
- Customer lip swatch reviews
- Size and variants
- Add to cart button

### Shopping & Checkout

#### Cart Page
- Preview of tried shades
- Shade comparison tool
- Applied items quantity
- Subtotal, tax, shipping
- Coupon code input
- Continue shopping or checkout

#### Checkout
- Step 1: Shipping address
- Step 2: Payment method
- Step 3: Order review with shade preview
- Order confirmation page

### User Account

#### Dashboard
- Welcome message
- Loyalty points display
- Tried shades history
- Recent orders
- VIP status info
- Quick action buttons

#### Profile
- Skin tone and preferences
- Address management
- Lipstick preferences
- Notification settings

---

## Responsive Design

### Breakpoints

#### Mobile (320px - 767px)
- Full-screen AR try-on
- Touch-optimized controls
- Single column product view
- Hamburger navigation
- Large touch buttons (48x48px min)

#### Tablet (768px - 1023px)
- Side-by-side AR and product info
- 2-column product grid
- Drawer navigation
- Larger touch targets (44x44px)

#### Desktop (1024px - 1439px)
- Full AR interface with controls
- 3-column product grid
- Top navigation
- Advanced filtering
- Comparison tools

#### Large Desktop (1440px+)
- 4-column product grid
- Enhanced AR features
- Side panel controls
- Advanced analytics

---

## AR-Specific Design

### AR Try-On Experience
- **Load Time**: < 3 seconds
- **Frame Rate**: 60 FPS minimum
- **Lighting**: Auto-adapt to environment
- **Accuracy**: Pixel-perfect lip tracking
- **Performance**: < 200MB mobile app

### AR Controls
- Brightness adjustment slider
- Lighting preset buttons (natural, studio, evening)
- Zoom in/out for detail
- Skin tone overlay toggle
- Comparison with product swatch
- Screenshot with watermark
- Share to social media

---

## Interaction Patterns

### Button Styles
- **Primary (Try On)**: Berry background, white text, rounded
- **Secondary (Add to Cart)**: Border with berry, white background
- **Tertiary (Wishlist)**: Icon only, heart shape
- **Danger (Remove)**: Red background

### AR Interactions
- **Tap to Try**: One-tap access to AR
- **Pinch to Zoom**: Detail view of shade
- **Long Press**: Save shade
- **Swipe**: Compare shades side-by-side

### Loading States
- Skeleton cards for products
- Shimmer effect for images
- AR loading spinner with "Preparing your try-on" message
- Progress indication for shade loading

### Empty States
- "No shades tried yet" with CTA to "Try On"
- "No favorites" with popular shades suggestion
- "No reviews" with invite to leave first review

---

## Accessibility Standards

### WCAG 2.1 Level AA
- Color contrast >= 4.5:1
- AR features have fallback (swatch photos)
- Keyboard navigation support
- Focus indicators visible
- Form labels associated
- Video captions available

### AR Accessibility
- Voice descriptions for shades
- High contrast mode for AR
- Text descriptions of shades
- Alternative try-on photos for accessibility
- Screen reader support for product info

---

## Design Tokens (CSS Variables)

```css
--primary: #6B2C47;
--secondary: #E8D4B8;
--tertiary: #D8A5A5;
--text-dark: #1A1A1A;
--text-medium: #5C5C5C;
--bg-light: #F8F6F3;
--bg-white: #FFFFFF;
--success: #2E7D32;
--error: #C62828;
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Lato', sans-serif;
```

---

## Usage Guidelines

### For Lipstick Marketing
- Use product shade swatches prominently
- AR feature highlighted in hero
- Luxury aesthetic maintained throughout
- Skin tone diversity in photography
- Customer testimonials and reviews featured

### Premium Brand Positioning
- White space generous
- Typography elegant and modern
- Photography high-quality and aspirational
- Minimal, but luxurious layout
- Premium packaging imagery

---

**Document Status**: Ready for implementation  
**Last Updated**: 2026-09-04

#### Semantic Colors
- **Success**: #27AE60 (green)
- **Warning**: #F39C12 (orange)
- **Error**: #E74C3C (red)
- **Info**: #3498DB (blue)

### Typography

#### Font Families
- **Headlines**: Inter Bold
- **Body**: Open Sans Regular
- **Monospace**: Fira Code Mono

#### Font Sizes and Weights

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 40px | Bold | 1.2 |
| H2 | 32px | Bold | 1.3 |
| H3 | 28px | Bold | 1.3 |
| H4 | 24px | Bold | 1.4 |
| Body | 16px | Regular | 1.6 |
| Small | 14px | Regular | 1.5 |
| Caption | 12px | Regular | 1.4 |

### Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### Border Radius
- **0**: 0px (sharp)
- **sm**: 4px (slight)
- **md**: 8px (standard)
- **lg**: 12px (rounded)
- **full**: 9999px (pill)

### Shadow System
- **sm**: 0 1px 2px rgba(0,0,0,0.05)
- **md**: 0 4px 6px rgba(0,0,0,0.1)
- **lg**: 0 10px 15px rgba(0,0,0,0.1)
- **xl**: 0 20px 25px rgba(0,0,0,0.1)

---

## Component Library

### Navigation Components

#### Header/Navbar
- Logo (clickable to home)
- Search bar with autocomplete
- Category dropdown
- User account menu
- Shopping cart icon with badge
- Mobile hamburger menu

#### Footer
- Company info section
- Links section (products, support, legal)
- Newsletter subscription
- Social media links
- Copyright notice

#### Sidebar Navigation (Mobile)
- Hamburger toggle
- Category list
- User account link
- Settings
- Close button

### Product Components

#### Product Card
- Product image (with hover zoom)
- Product name
- Rating and review count
- Price (with discount if applicable)
- Add to cart button
- Wishlist toggle
- Quick view option

#### Product Detail Page
- Product image gallery (multiple images, zoom)
- Product name and rating
- Price and availability
- Product description
- Ingredients and specifications
- Customer reviews section
- Add to cart button
- Quantity selector
- Wishlist button

#### Product Grid
- Responsive layout (mobile: 1 col, tablet: 2 col, desktop: 3-4 col)
- Filter sidebar
- Sort options
- Pagination or infinite scroll

### Shopping Cart Components

#### Cart Page
- Cart item list
- Item quantity controls
- Remove item option
- Subtotal, tax, total
- Coupon/discount code input
- Continue shopping button
- Checkout button

#### Cart Item
- Product image
- Product name
- Unit price
- Quantity selector (+/- buttons)
- Line total
- Remove button

### Checkout Components

#### Step 1: Shipping Address
- Address form fields
- Address autocomplete
- Save address option
- Continue button

#### Step 2: Payment
- Payment method selection (card, PayPal, Google Pay)
- Payment form (card details or provider login)
- Billing address same as shipping toggle
- Apply coupon code field
- Order summary
- Pay button

#### Step 3: Review and Confirm
- Order details review
- Shipping address verification
- Items list with totals
- Payment method display
- Place order button

### User Account Components

#### User Dashboard
- Welcome greeting
- Quick stats (total orders, points, member since)
- Recent orders list
- Quick action links (view profile, orders, wishlists)

#### Profile Page
- Personal information form
- Address management
- Password change section
- Email preferences
- Notification settings

#### Order History
- Orders list (sortable, filterable)
- Order details modal
- Tracking information
- Review submission option

---

## Responsive Design

### Breakpoints

#### Mobile (320px - 767px)
- Single column layouts
- Touch-friendly button sizes (48x48px min)
- Hamburger navigation
- Bottom action buttons
- Stacked form fields
- Simplified product grids (1-2 items)

#### Tablet (768px - 1023px)
- Two-column layouts
- Side navigation drawer
- Larger touch targets (44x44px min)
- 2-column product grids
- Multi-select forms

#### Desktop (1024px - 1439px)
- Three-column layouts
- Top navigation
- Standard interactive sizes
- 3-column product grids
- Multi-column forms

#### Large Desktop (1440px+)
- Four-column layouts
- Wider content max-width
- Advanced interactions
- 4-column product grids

### Mobile Optimizations
- Touch-friendly spacing (min 8px between interactive elements)
- Thumb-zone design (important buttons in lower half of screen)
- Fast load times
- Optimized images
- One-hand navigation
- Large, readable text

---

## Interaction Patterns

### Button States

#### Primary Button
- **Default**: Deep Burgundy background, white text
- **Hover**: Darker burgundy, slight shadow
- **Active**: Even darker, inset shadow
- **Disabled**: Light gray background, gray text, cursor not-allowed

#### Secondary Button
- **Default**: White background, burgundy text, border
- **Hover**: Light burgundy background
- **Active**: Burgundy background, white text
- **Disabled**: Light gray background, gray text

#### Button Sizes
- **Small**: 32px height, 12px font
- **Medium**: 40px height, 14px font (default)
- **Large**: 48px height, 16px font

### Form Inputs

#### Text Input
- Subtle border (light gray)
- Focus: Burgundy border, shadow
- Error: Red border, error message below
- Placeholder text in medium gray
- Clear icon for easy clearing

#### Select Dropdown
- Similar styling to text input
- Chevron icon on right
- Dropdown menu below
- Hover highlight for options
- Selected option highlighted

#### Checkbox and Radio
- 18x18px size
- Burgundy when checked
- Clear label associated
- Focus ring on keyboard navigation

#### Textarea
- Resembles text input
- Resizable or fixed height
- Character count (optional)
- Markdown support (optional)

### Feedback Components

#### Success Message
- Green background with checkmark icon
- Clear, positive language
- Dismissible with X button
- Auto-dismiss after 5 seconds

#### Error Message
- Red background with error icon
- Clear description of error
- Suggestion for fix
- Dismissible option

#### Warning Message
- Yellow/orange background with warning icon
- Clear description
- Suggested action

#### Info Message
- Blue background with info icon
- Non-intrusive notification
- Dismissible

### Loading States

#### Skeleton Loading
- Gray placeholder blocks matching content shape
- Pulsing animation
- Used for product cards, lists

#### Spinner
- Centered rotating icon
- Use for full-page loading
- Show immediately with message

#### Progress Bar
- Horizontal bar showing percentage complete
- Used for multi-step forms, file uploads
- Color transitions from gray to burgundy to green

### Empty States

#### Empty Cart
- Illustration/icon
- "Your cart is empty" message
- "Continue Shopping" button
- Recommended products section

#### No Results
- Search icon or illustration
- "No products found" message
- Suggestion to modify search
- Link to browse categories

#### No Orders (First Time)
- Illustration
- "No orders yet" message
- Encouragement message
- "Start Shopping" button

---

## Animation and Micro-interactions

### Transitions
- Duration: 200-300ms for UI elements
- Easing: ease-out for important changes
- Timing: Stagger animations for lists

### Hover Effects
- Subtle color shift
- Slight scale (1.02x or 1.05x)
- Shadow increase
- Underline or border emphasis

### Click/Active States
- Color inversion or darkening
- Inset shadow effect
- Scale down slightly (0.98x)
- Immediate feedback

### Loading Animations
- Smooth fade-in for loaded content
- Skeleton to content transition
- Spinner rotation consistent speed

### Focus States
- 2px solid outline in burgundy
- 2px offset from element
- Never remove default focus ring

---

## Accessibility Standards

### Color Contrast
- **Text on Background**: 4.5:1 for normal text, 3:1 for large text (18px+)
- **UI Components**: 3:1 minimum contrast
- **Focus Indicators**: High contrast, never removed

### Keyboard Navigation
- All interactive elements focusable with Tab key
- Logical tab order (left-to-right, top-to-bottom)
- Skip to main content link
- Focus visible on all elements

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for custom components
- Image alt text describing content
- Form labels associated with inputs
- Heading hierarchy (h1, h2, h3)

### Motion and Animation
- Respect prefers-reduced-motion preference
- Reduce animation to essential feedback only
- No auto-playing video
- Allow user to pause animations

---

## Icon System

### Icon Set
- Line-style icons for consistency
- 24px base size
- Scalable to 16px, 32px, 48px
- Used from Font Awesome or Feather Icons

### Common Icons
- **Home**: House icon
- **Search**: Magnifying glass
- **User**: Person icon
- **Cart**: Shopping cart
- **Heart**: For wishlist
- **Star**: For ratings
- **Hamburger**: Menu toggle
- **X**: Close/dismiss
- **Chevron**: Expand/collapse
- **Check**: Success/confirmation

---

## Design Tokens (for Development)

```json
{
  "colors": {
    "primary": "#8B4554",
    "secondary": "#D4AF37",
    "tertiary": "#2D5016",
    "neutral": {
      "dark": "#1F1F1F",
      "medium": "#666666",
      "light": "#F5F5F5",
      "white": "#FFFFFF"
    },
    "semantic": {
      "success": "#27AE60",
      "warning": "#F39C12",
      "error": "#E74C3C",
      "info": "#3498DB"
    }
  },
  "typography": {
    "fontFamily": {
      "heading": "Inter, sans-serif",
      "body": "Open Sans, sans-serif",
      "mono": "Fira Code, monospace"
    },
    "fontSize": {
      "h1": "40px",
      "h2": "32px",
      "h3": "28px",
      "h4": "24px",
      "body": "16px",
      "small": "14px",
      "caption": "12px"
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px",
    "3xl": "64px"
  },
  "borderRadius": {
    "none": "0px",
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "full": "9999px"
  }
}
```

---

## Responsive Grid System

### Grid Layout
- **Columns**: 12-column grid on desktop
- **Gutter**: 16px between columns
- **Max Width**: 1440px content width
- **Breakpoints**: 320px, 768px, 1024px, 1440px

### Container Sizes
- **Mobile**: 100% width (minus padding)
- **Tablet**: 90% width or 750px
- **Desktop**: 1200px
- **Large**: 1400px

---

## Usage Guidelines

### When to Use Each Color
- **Primary (Burgundy)**: Main CTAs, active states, brand elements
- **Secondary (Gold)**: Premium badges, accents, luxury feel
- **Tertiary (Green)**: Success states, "natural" messaging
- **Neutrals**: Text, backgrounds, borders

### Typography Hierarchy
- H1: Page titles only
- H2: Main section titles
- H3: Subsection titles
- H4: Component titles
- Body: Main content
- Small: Secondary info, captions
- Caption: Form hints, metadata

### Spacing Guidelines
- Use consistent spacing from the scale
- Never add arbitrary spacing
- Maintain breathing room around content
- Use padding for internal spacing, margin for external

---

**Document Status**: Ready for implementation  
**Last Updated**: 2026-09-04
