import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Information Technology (IT)",
  description: "A collection of notes and resources.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'ComptiA',
        collapsed: false,
        items: [
          { text: 'Certification', link: '/comptia/certification' },
          { text: 'Core 1', link: '/comptia/core1' },
        ]
      },
      {
        text: 'Core 1',
        collapsed: false,
        items: [
          { text: '802.11 Technologies', link: '/core-1/802.11-technologies' },
          { text: 'Network Services', link: '/core-1/network-services' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
