# Portfolio Website - React & Tailwind CSS

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- 🎨 Modern and attractive UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized performance
- 🎭 Smooth animations and transitions
- 🧭 React Router for navigation
- 💼 Showcase projects, skills, and experience
- 📧 Contact form integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.js
│   ├── Footer.js
│   └── TypingEffect.js
├── pages/           # Page components
│   ├── Home.js
│   ├── About.js
│   ├── Projects.js
│   └── Contact.js
├── App.js           # Main app component
├── index.js         # Entry point
└── index.css        # Global styles

public/
├── index.html
└── [images and assets]
```

## Technologies Used

- React 18
- React Router DOM
- Tailwind CSS
- Bootstrap Icons

## Customization

- Update personal information in the respective page components
- Modify colors in `tailwind.config.js`
- Add/remove projects in `src/pages/Projects.js`
- Update contact form endpoint in `src/pages/Contact.js`

## License

© 2025 Thanoogithan. All rights reserved.
