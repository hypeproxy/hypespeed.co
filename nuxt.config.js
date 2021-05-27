export default {
	target: 'static',

	generate: {
		dir: 'public'
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'HypeSpeed.co | Speed Test Powered by HypeProxy.io',
		htmlAttrs: {
			lang: 'en',
			class: 'h-100'
		},
		bodyAttrs: {
			class: 'd-flex flex-column h-100'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{name: 'twitter:image:src', content: 'https://hypespeed.co/preview.png'},
			{name: 'twitter:card', content: 'summary_large_image'},
			{name: 'og:image', content: 'https://hypespeed.co/preview.png'},
			{name: 'theme-color', content: '#1f45bc'},
			{name: 'msapplication-navbutton-color', content: '#1f45bc'},
			{name: 'apple-mobile-web-app-status-bar-style', content: '#1f45bc'},
			{name: 'apple-mobile-web-app-capable', content: 'yes'},
			{ hid: 'description', name: 'description', content: 'HypeSpeed.co | Speed Test Powered by HypeProxy.io | Get your download speed in seconds with hypespeed.co.' },
			{ hid: 'keywords', name: 'keywords', content: 'hypespeed,hypeproxy.io,speed,download,fast,com,speed test,speedtest' }
		],
		link: [
			{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' }
		],
		script: [
			{ src: 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d378ca532523306', body: true }
		]
	},

	pwa: {
		twitterCard: 'summary_large_image',
		twitterCreator: '@hypeproxyio',
		author: 'HypeProxy.io',
		manifest: {
			name: 'HypeSpeed.co',
			lang: 'en',
			background_color: "#1f45bc",
			theme_color: "#1f45bc",
			useWebmanifestExtension: false
		}
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"~/assets/app.scss"
	],

	env: {
		baseUrl: process.env.BASE_URL || 'https://localhost:7001/v2/',
	},

	axios: {
		baseURL: process.env.BASE_URL || 'https://localhost:7001/v2/'
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/pwa',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios'
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
