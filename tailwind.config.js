module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // "media" or "class"
  theme: {
    extend: {
      colors: {
        black: "#0e0e0e",
        wrapper: "#fffff8",
        twitter: "#1da1f2",
        qiita: "#5bba0b",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
  important: true,
};
