[Live Portfolio Website](https://anis-dangol.github.io/Portfolio-Website/)

# My Portfolio

A modern, interactive portfolio website built with React and Tailwind CSS, showcasing selected web projects, landing pages, and social links.

## Features

- Single-page application
- Animated project cards with interactive hover effects
- Social media links (GitHub, Instagram, LinkedIn, YouTube)
- Custom favicons and manifest for PWA support
- Clean, modern UI with dark mode styling

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt) (for project card effects)

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Run the development server**
   ```sh
   npm run dev
   ```
3. **Open in browser**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
frontend/
  public/
    favicon/           # Favicon and manifest files
  src/
    assets/            # Project images and assets
    components/        # Navbar, Footer, LoadingScreen
    pages/             # About, Contact, Work, Timeline, Lab, Start
    App.jsx            # Main app component
    main.jsx           # Entry point
  index.html           # Main HTML file
  tailwind.config.js   # Tailwind CSS config
  vite.config.js       # Vite config
```

## Customization

- Update your project images in `src/assets/`
- Edit project cards in `src/pages/Work.jsx`
- Update social links in `src/pages/Contact.jsx`
- Change site title and manifest in `index.html` and `public/favicon/`

## Deployment

You can deploy this site easily to Netlify, Vercel, or any static hosting provider. Build with:

```sh
npm run build
```

The output will be in the `dist/` folder.

## License

This portfolio is licensed for inspiration and learning purposes only.

- You may view, reference, and take inspiration from the design and ideas.
- You may **not** copy, reproduce, or redistribute the code, images, or content without explicit written permission from the author.

If you wish to use any part of this portfolio beyond inspiration, please contact me for permission.

---

**Created by Anish Dangol**