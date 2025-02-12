import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Linux Base",
  description: "linux is easier than you think",
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      { text: 'Главная 🏠', link: '/' },
      { text: 'Документация 🔖', link: '/docs' },
    ],
    sidebar: [
      {
        text: 'Тесты',
        items: [
          { text: 'Выбор дистрибутива', link: '/distro-test' },
          { text: 'Выбор Интерфейса раб. стола', link: '/de-test' }
        ]
      },
      {
        text: 'Дистрибутивы',
        items: [
          { text: 'Ubuntu', link: '/distro/ubuntu' },
          { text: 'Debian', link: '/distro/debian' },
          { text: 'ALT', link: '/distro/alt' },
          { text: 'RedOS', link: '/distro/redos' },
          { text: 'PopOS', link: '/distro/popos' },
          { text: 'Arch', link: '/distro/arch' },
          { text: 'Mint', link: '/distro/mint' },
          { text: 'OpenSuse', link: '/distro/opensuse' },
          { text: 'Fedora', link: '/distro/fedora' },
        ]
      },
      {
        text: 'Рабочие среды (DE)',
        items: [
          { text: 'KDE', link: '/de/kde' },
          { text: 'GNOME', link: '/de/gnome' },
          { text: 'MATE', link: '/de/mate' },
          { text: 'XFCE', link: '/de/xfce' },
          { text: 'LXQt', link: '/de/lxqt' },
          { text: 'Hyperland', link: '/de/hyperland' },
          { text: 'Sway', link: '/de/sway' },
          { text: 'SwayFX', link: '/de/swayfx' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }],
    ['link', { rel: 'icon', href: '/assets/logo.png' }]
  ],
  vite: {
    resolve: {
      alias: {
        '@components': '/docs/.vitepress/components'
      }
    }
  }
});
