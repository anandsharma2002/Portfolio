# Portfolio Project Structure

This is a modern, responsive portfolio website built with React, Tailwind CSS v4, and Vite.

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.jsx      # Navigation header with mobile menu
│   ├── Hero.jsx        # Hero section with introduction
│   ├── About.jsx       # About section with skills and stats
│   ├── Projects.jsx    # Projects showcase with cards
│   ├── Skills.jsx      # Skills section with progress bars
│   ├── Contact.jsx     # Contact form and information
│   └── Footer.jsx     # Footer with links and social media
├── pages/              # Page components (if using routing)
├── assets/             # Static assets
│   └── images/        # Image files
├── styles/            # Custom CSS files
│   ├── globals.css    # Global styles and utilities
│   └── animations.css # Animation utilities
├── utils/              # Utility functions
│   └── helpers.js     # Common helper functions
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Main CSS file with imports
```

## Features

### Components
- **Header**: Responsive navigation with mobile menu
- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information, skills overview, and statistics
- **Projects**: Project showcase with filtering and detailed cards
- **Skills**: Technical skills with progress indicators
- **Contact**: Contact form with validation and social links
- **Footer**: Additional links and information

### Styling
- **Tailwind CSS v4**: Modern utility-first CSS framework
- **Custom CSS**: Additional styles for animations and utilities
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and scroll animations

### Utilities
- **Helper Functions**: Common utilities for forms, validation, storage
- **Animation Helpers**: Scroll-triggered animations
- **Theme Support**: Light/dark theme switching
- **Form Validation**: Comprehensive form validation

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Name and introduction
- `src/components/About.jsx` - Personal story and stats
- `src/components/Contact.jsx` - Contact information
- `src/components/Projects.jsx` - Your projects

### Styling
- Modify `src/styles/globals.css` for global styles
- Update `src/styles/animations.css` for custom animations
- Use Tailwind classes for component-specific styling

### Content
- Replace placeholder images in `src/assets/images/`
- Update project data in `src/components/Projects.jsx`
- Modify skills data in `src/components/Skills.jsx`

## Technologies Used

- **React 19** - Frontend framework
- **Tailwind CSS v4** - Styling framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **Framer Motion** - Animation library (optional)
- **GSAP** - Animation library (optional)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Smooth animations with hardware acceleration
- Responsive images and layouts
