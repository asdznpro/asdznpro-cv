import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

type ViteConfigInput = {
	mode: string
	command: string
}

export default (args: ViteConfigInput) => {
	const generateScopedName =
		args.mode === 'production'
			? '[hash:base64:8]'
			: '[name]_[local]__[hash:base64:5]'

	return defineConfig({
		plugins: [react()],
		resolve: {
			alias: {
				assets: '/src/assets',
				components: '/src/components',
				hooks: '/src/hooks',
				models: '/src/models',
				services: '/src/services',
				store: '/src/store',
				views: '/src/views',
			},
		},

		css: {
			modules: {
				localsConvention: 'camelCase',
				generateScopedName,
				hashPrefix: 'prefix',
			},
		},

		server: {
			host: true,
		},

		build: {
			rollupOptions: {
				output: {
					manualChunks(id: string) {
						if (id.includes('node_modules')) {
							// if (id.match(/node_modules\/(react|react-dom)\//)) {
							// 	return 'react'
							// }

							// if (id.match(/node_modules\/(@reduxjs\/toolkit|react-redux)\//)) {
							// 	return 'redux'
							// }

							// if (id.match(/node_modules\/react-router-dom\//)) {
							// 	return 'react-router'
							// }

							if (id.match(/node_modules\/framer-motion\//)) {
								return 'framer-motion'
							}

							// if (id.match(/node_modules\/lodash\//)) {
							// 	return 'lodash'
							// }

							// if (id.match(/node_modules\/axios\//)) {
							// 	return 'axios'
							// }

							return 'vendor'
						}
					},
				},
			},
		},
	})
}
