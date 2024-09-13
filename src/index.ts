// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'

import PrimeVueStyled from "primevue/config"

export default {
	Layout,
	enhanceApp({ app, router, siteData }) {
		// ...
		app.use(PrimeVueStyled)
	}
} satisfies Theme
