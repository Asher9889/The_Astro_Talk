// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      // animation: {
      //   'fade-in': 'fadeIn 0.5s ease-out forwards',
      // },
      // keyframes: {
      //   fadeIn: {
      //     '0%': { opacity: 0, transform: 'translateY(10px)' },
      //     '100%': { opacity: 1, transform: 'translateY(0)' },
      //   },
      // },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 8s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },

    },
  },
}
