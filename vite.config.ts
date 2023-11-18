import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

type ViteConfigInput = {
	mode: string
	command: string
}

export default (args: ViteConfigInput) => {
	const generateScopedName =
		args.mode === 'production'
			? 'css-[hash:base64:8]'
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
	})
}
