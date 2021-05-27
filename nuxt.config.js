export default {
	target: 'static',

	generate: {
		dir: 'public'
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'HypeSpeed.co | Speed Test Powered by HypeProxy.io',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' }
		]
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
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios'
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
