/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to scan all React files
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        faebot: {
          background: '#0f0f1a', // deep twilight
          surface: '#1a1a2e',    // card/chat bubble bg
          accent: '#a62061',    // magenta magic
          text: '#e5e5e5',      // soft white
          subtext: '#9ca3af',   // gray-400 tone
        },
        magenta: {
          DEFAULT: '#a62061', 
          light: '#d63384',
          dark: '#a62061',
        },
      },
    },
  },
  plugins: [],
}

