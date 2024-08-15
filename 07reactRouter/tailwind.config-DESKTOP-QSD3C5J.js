import theme from '@material-tailwind/react/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('\src\assets\svgs\b58072b9-9ab9-4f4e-afaf-9cdb524b46a3.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

