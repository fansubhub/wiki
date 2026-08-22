// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightLinksValidator from 'starlight-links-validator';
import starlightCoolerCredit from 'starlight-cooler-credit';
import starlightAutoSidebar from 'starlight-auto-sidebar';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAutoDrafts from 'starlight-auto-drafts';
import starlightKbd from 'starlight-kbd';
import starlightAnnouncement from 'starlight-announcement';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			title: 'Fansub Hub',
			lastUpdated: true,
			defaultLocale: "es",
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/fansubhub/wiki' },
				{ icon: 'discord', label: '¡Únete a nuestro servidor!', href: 'https://discord.gg/rt3zuNGyA9' }
			],
			plugins: [
				starlightThemeRapide(),
				starlightLinksValidator(),
				starlightCoolerCredit({
					credit: {
						title: "¿Tienes dudas o sugerencias?",
						description: "¡Entra a nuestro servidor de Discord y coméntanoslas!",
						href: 'https://discord.gg/rt3zuNGyA9'
					}
				}),
				starlightAutoSidebar(),
				starlightSidebarTopics([
					{
						label: 'Aegisub',
						link: '/aegisub/',
						icon: 'pencil',
						items: [
							{ 
								label: 'Introducción',
								items: ['aegisub']
							},
							{
								label: 'Plugins',
								items: [{ autogenerate: { directory: 'aegisub/plugins' } }],
							},
							{
								label: 'Etiquetas',
								items: [{ autogenerate: { directory: 'aegisub/tags' } }],
							}
						]
					},
					{
						label: 'Traducción',
						link: '/p/translate',
						icon: 'translate',
						items: [
							{
								label: 'Introducción',
								items: ['p/translate']
							},
							{
								label: 'Guías',
								items: [{ autogenerate: { directory: 'guides/p/translate' } }],
							},
							{
								label: 'Material y recursos',
								items: [{ autogenerate: { directory: 'resources/p/translate' } }],
							}
						]
					},
					{
						label: 'Corrección',
						link: '/p/correct',
						icon: 'pencil',
						items: [
							{
								label: 'Introducción',
								items: ['p/correct']
							},
							{
								label: 'Guías',
								items: [{ autogenerate: { directory: 'guides/p/correct' } }],
							},
							{
								label: 'Material y recursos',
								items: [{ autogenerate: { directory: 'resources/p/correct' } }],
							}
						]
					},
					{
						label: 'Tipografía y carteles',
						link: '/p/typesetting',
						icon: 'seti:svg',
						items: [
							{
								label: 'Introducción',
								items: ['p/typesetting', 'p/typesetting/guides']
							},
							{
								label: 'Guías',
								items: [{ autogenerate: { directory: 'guides/p/typesetting' } }],
							},
							{
								label: 'Material y recursos',
								items: [{ autogenerate: { directory: 'resources/p/typesetting' } }],
							}
						]
					},
					{
						label: 'Sincronización',
						link: '/p/sync',
						icon: 'clock',
						items: [
							{
								label: 'Introducción',
								items: ['p/sync']
							},
							{
								label: 'Guías',
								items: [{ autogenerate: { directory: 'guides/p/sync' } }],
							},
							{
								label: 'Material y recursos',
								items: [{ autogenerate: { directory: 'resources/p/sync' } }],
							}
						]
					},
					{
						label: 'Tipos de archivos',
						link: '/files/',
						icon: 'document',
						items: [
							{ 
								label: 'Introducción',
								items: ['files']
							},
							{ 
								label: 'Tipos de archivos',
								items: [{ autogenerate: { directory: 'files' } }],
							}
						]
					},
					{
						label: 'Repositorio de guías',
						link: '/guides/',
						icon: 'open-book',
						items: [
							{ 
								label: 'Scripts y plugins',
								items: [
									{ autogenerate: { directory: 'guides/scripts/' } },
									{
										label: "Aegisub",
										items: [{ autogenerate: { directory: 'aegisub/plugins/thirdparty/' } }]
									}
								]
							},
							{ 
								label: 'Varios',
								items: [
									'guides/mkv/multiplex',
									'guides/mkv/muxing-batch-gui'
								]
							}
						]
					}
				]),
				starlightAutoDrafts(),
				starlightKbd({
					globalPicker: false,
					types: [
						{ id: 'windows', label: 'Windows', default: true }
					]
				}),
				starlightAnnouncement({
					announcements: [
						{
							id: 'update-pending',
							content: 'Esta página está pendiente de recibir una actualización.',
							variant: 'caution',
							showOn: [
								'/aegisub/tags/advanced/transform',
								'/aegisub/plugins/dependency_control',
								'/aegisub'
							]
						}
					]
				})
			],
			components: {
				Sidebar: './src/components/Sidebar.astro'
			},
			customCss: [
				'./src/styles/custom.css'
			]
		}),
	],
});
