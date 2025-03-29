// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      // Include only the plugins you need.
      // For example, if you don't need oxide, don't include it.
      // require('@tailwindcss/oxide'),
    ],
  };
  