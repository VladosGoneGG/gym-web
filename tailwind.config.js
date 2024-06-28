/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-main': "url('/main.png')",
				'hero-rev': "url('/mainRev.png')",
				'price-list': "url('/pricelist.png')",
				'fon-img': "url('/fonimg.webp')",
			},
			backgroundSize: {
				auto: 'auto',
				cover: 'cover',
				contain: 'contain',
				'50%': '50%',
				16: '4rem',
			},
			fontFamily: {
				custom: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
