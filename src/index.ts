// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'

import PrimeVue from "primevue/config"
import Aura from "@primevue/themes"

export default {
	Layout,
	enhanceApp({ app, router, siteData }) {
		// ...
		app.use(PrimeVue, {
			theme: {
				preset: Aura
			}
		})
	}
} satisfies Theme
