export default {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['DM Sans', 'PT Sans', 'sans-serif'],
                'display': ['Cormorant', 'serif'],
            },
            colors: {
                space: {
                    bg: '#08090D',
                    surface: 'rgba(255,255,255,0.03)',
                    border: 'rgba(255,255,255,0.08)',
                    accent: '#B4C0FF',
                    muted: 'rgba(255,255,255,0.45)',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        }
    }
}
