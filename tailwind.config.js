module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // "media" or "class"
  theme: {
    extend: {
      colors: {
        black: "#0e0e0e",
        twitter: "#1da1f2",
        qiita: "#5bba0b",
        tag: "#454b72",
        appBg: "#f3e5e3",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
  important: true,
};
