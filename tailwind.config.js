export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#07090d', charcoal: '#12151b', navy: '#0b1424', gold: '#c9a96a', ivory: '#efe8d8' },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
