/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Primary brand color — used for navigation, links, primary actions
        brand: {
          50: "#eef1ff",
          100: "#e0e4ff",
          200: "#c2c9ff",
          300: "#98a3ff",
          400: "#6c74ff",
          500: "#4a4bfb",
          600: "#372fe0",
          700: "#2c25b5",
          800: "#262191",
          900: "#221f73",
        },
        // Secondary color — used for highlights, badges, accents
        plum: {
          50: "#faf1fb",
          100: "#f3ddf5",
          200: "#e7bbec",
          300: "#d68fdf",
          400: "#c162cf",
          500: "#a63fb4",
          600: "#883092",
          700: "#6d2775",
          800: "#57215e",
          900: "#481d4d",
        },
        // Semantic colors reused consistently for status
        success: {
          50: "#eefdf3",
          100: "#d6fae2",
          500: "#1ea957",
          600: "#15833f",
          700: "#136936",
        },
        warning: {
          50: "#fff9eb",
          100: "#ffedc2",
          500: "#e2a412",
          600: "#b9800a",
          700: "#946409",
        },
        neutral: {
          25: "#fbfbfd",
        },
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(20, 20, 43, 0.04), 0 4px 16px -4px rgba(20, 20, 43, 0.08)",
        "card-hover": "0 8px 24px -6px rgba(37, 33, 145, 0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 15% 20%, rgba(74,75,251,0.16), transparent 45%), radial-gradient(circle at 85% 0%, rgba(166,63,180,0.14), transparent 40%)",
      },
    },
  },
  plugins: [],
};
