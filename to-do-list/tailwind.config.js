module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {colors: {
      border: "#E5E7EB", // Define your custom border color
    },
   },
  },
  plugins: [require("tailwindcss-animate")],
}

