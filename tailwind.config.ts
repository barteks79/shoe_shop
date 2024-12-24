import type { Config } from 'tailwindcss';

export default {
   content: [
	  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
	  extend: {
		 fontFamily: {
			inter: ['"Inter"', '"Instrument Sans"', 'Arial'],
			instrument: ['"Instrument Sans"', '"Inter"', 'Arial']
		 },
		 fontSize: {
			'header-big': '14px',
			'header-small': '11px'
		 },
		 height: {
			header: '50px'
		 },
		 width: {
			'header-wrapper': '85%',
			'main-wrapper': '75%'
		 },
		 backgroundImage: {
			'gradient-primary': 'url(\'/gradient.png\')'
		 }

	  }
   },
   plugins: []
} satisfies Config;
