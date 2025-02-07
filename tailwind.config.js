module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Paths for pages
    "./components/**/*.{js,ts,jsx,tsx}", // Paths for components
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Whitish-blue
        secondary: "#1E293B", // Darker background
        cardBg: "#F3F4F6",
        cardBgDark: "#1F2937",
      },
      boxShadow: {
        hover: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};