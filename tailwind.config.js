module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Whitish-blue
        secondary: "#1E293B", // Darker background
      },
    },
  },
  plugins: [],
};
