import { defineConfig } from 'vitepress';
import markdownTimeline from 'vitepress-markdown-timeline';

export default defineConfig({
  base: "/",
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
        collapsed: true,
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
        collapsed: true,
        items: [
          { text: 'KDE', link: '/de/kde' },
          { text: 'GNOME', link: '/de/gnome' },
          { text: 'MATE', link: '/de/mate' },
          { text: 'XFCE', link: '/de/xfce' },
          { text: 'LXQt', link: '/de/lxqt' },
          { text: 'Hyprland', link: '/de/hyprland' },
          { text: 'SwayFX', link: '/de/swayfx' }
        ]
      },
      {
        text: 'Программы',
        collapsed: true,
        items: [
          { text: '—— Браузеры ——' },
          { text: 'Яндекс Браузер', link: '/soft/yandex' },
          { text: 'Google Chrome', link: '/soft/chrome' },
          { text: 'Brave', link: '/soft/brave' },
          { text: 'Vivaldi', link: '/soft/vivaldi' },
          { text: 'Waterfox', link: '/soft/waterfox' },
          { text: 'Firefox', link: '/soft/firefox' },
          { text: 'Microsoft Edge', link: '/soft/msedge' },
          { text: 'Zen', link: '/soft/zen' },
          { text: '—— Мессенджеры ——' },
          { text: 'Telegram', link: '/soft/telegram' },
          { text: 'Viber', link: '/soft/viber' },
          { text: 'WhatsApp', link: '/soft/whatsApp' },
          { text: 'VK Мессенджер', link: '/soft/vkms' },
          { text: 'Vesktop', link: '/soft/vesktop' },
          { text: 'Skype', link: '/soft/skype' },
          { text: 'Signal Desktop', link: '/soft/signal' },
          { text: 'SimpleX', link: '/soft/simplex' },
          { text: '—— Игры ——' },
          { text: 'Steam', link: '/soft/steam' },
          { text: 'Cartridges', link: '/soft/cartridges' },
          { text: 'PortProton', link: '/soft/portproton' },
          { text: 'Heroic Games Launcher', link: '/soft/heroic' },
          { text: 'Modrinth App', link: '/soft/modrinth' },
          { text: 'Vinegar (Roblox)', link: '/soft/vinegar' },
          { text: 'Dolphin Emulator', link: '/soft/dolphin' },
          { text: 'Unity Hub', link: '/soft/unity' },
          { text: '—— Офис ——' },
          { text: 'Мой офис', link: '/soft/myoffice' },
          { text: 'Р7-Офис', link: '/soft/r7-office' },
          { text: 'LibreOffice', link: '/soft/libreoffice' },
          { text: 'WPS Office', link: '/soft/wps' },
          { text: 'Rnote', link: '/soft/rnote' },
          { text: 'ONLYOFFICE', link: '/soft/onlyoffice' },
          { text: 'Calligra', link: '/soft/calligra' },
          { text: 'Obsidian', link: '/soft/obsidian' },
          { text: '—— Работа с графикой ——' },
          { text: 'Krita', link: '/soft/krita' },
          { text: 'Figma', link: '/soft/figma' },
          { text: 'Lunacy', link: '/soft/lunacy' },
          { text: 'Penpot', link: '/soft/penpot' },
          { text: 'Blender', link: '/soft/blender' },
          { text: 'Drawing', link: '/soft/drawing' },
          { text: 'Vara', link: '/soft/vara' },
          { text: 'GIMP', link: '/soft/gimp' },
          { text: '—— Мультимедиа ——' },
          { text: 'Кассета (Яндекс Музыка)', link: '/soft/cassette' },
          { text: 'Spotify', link: '/soft/spotify' },
          { text: 'Nuclear', link: '/soft/nuclear' },
          { text: 'Celluloid', link: '/soft/celluloid' },
          { text: 'Qmmp', link: '/soft/qmmp' },
          { text: 'VLC', link: '/soft/vlc' },
          { text: 'qView', link: '/soft/qview' },
          { text: 'Haruna', link: '/soft/haruna' },
          { text: '—— Утилиты ——' },
          { text: 'Bottles', link: '/soft/bottles' },
          { text: 'Flatseal', link: '/soft/flatseal' },
          { text: 'qBittorrent', link: '/soft/qbit' },
          { text: 'Bitwarden', link: '/soft/bitwarden' },
          { text: 'Warehouse', link: '/soft/warehouse' },
          { text: 'OBS', link: '/soft/obs' },
          { text: 'PeaZip', link: '/soft/peazip' },
          { text: 'DroidCam', link: '/soft/droidcam' }
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cryals/linux-base' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(markdownTimeline);
    },
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }],
    ['link', { rel: 'icon', href: '/assets/logo.png' }] // Используем /assets/
  ],
  vite: {
    resolve: {
      alias: {
        '@components': '/docs/.vitepress/components'
      }
    }
  }
});
