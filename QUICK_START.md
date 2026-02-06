# Quick Start Guide

## Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

## What's New

Your portfolio has been converted to a modern React application with:

✅ **React Router** - Smooth navigation between pages
✅ **Tailwind CSS** - Modern, responsive styling
✅ **Component-based architecture** - Easy to maintain and extend
✅ **Animations** - Smooth transitions and effects
✅ **Mobile responsive** - Works perfectly on all devices
✅ **Modern UI** - Clean, attractive design

## Project Structure

- `src/components/` - Reusable components (Navbar, Footer, TypingEffect)
- `src/pages/` - Page components (Home, About, Projects, Contact)
- `public/` - Static assets (images, PDFs)
- `src/App.js` - Main app component with routing

## Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Update the respective page components in `src/pages/`
- **Projects**: Add/remove projects in `src/pages/Projects.js`
- **Contact Form**: Update the form endpoint in `src/pages/Contact.js`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Notes

- All images are in the `public/` folder
- The CV file (`ThanooCV.pdf`) is also in `public/`
- Make sure all image paths in components match the files in `public/`
