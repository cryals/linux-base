# 🚀 Быстрый старт

---

<script setup>
import FeaturesSection from './.vitepress/components/FeaturesSection.vue';

const features = [
  {
    title: "Дистрибутивы",
    icon: '<i class="fa-brands fa-linux"></i>',
    details: `<a href="/distro/ubuntu">Ubuntu</a> <br> <a href="/distro/debian">Debian</a> <br> <a href="/distro/alt">ALT</a> <br> <a href="/distro/redos">RedOS</a> <br> <a href="/distro/popos">PopOS</a> <br> <a href="/distro/arch">Arch</a> <br> <a href="/distro/mint">Mint</a> <br> <a href="/distro/opensuse">OpenSuse</a> <br> <a href="/distro/fedora">Fedora</a>`,
    link: "/distro-test",
    linkText: "Пройти тест"
  },
  {
    title: "Рабочие среды (DE)",
    icon: '<i class="fas fa-desktop"></i>',
    details: `<a href="/de/kde">KDE</a> <br> <a href="/de/gnome">GNOME</a> <br> <a href="/de/mate">MATE</a> <br> <a href="/de/xfce">XFCE</a> <br> <a href="/de/lxqt">LXQt</a> <br> <a href="/de/hyprland">Hyprland</a> <br> <a href="/de/swayfx">SwayFX</a> <br> ㅤ  <br> ㅤ  <br>`,
    link: "/de-test",
    linkText: "Пройти тест"
  },
  {
    title: "Браузеры",
    icon: '<i class="fa-solid fa-earth"></i>',
    details: `<a href="/soft/yandex">Яндекс Браузер</a> <br> <a href="/soft/chrome">Google Chrome</a> <br> <a href="/soft/brave">Brave</a> <br> <a href="/soft/vivaldi">Vivaldi</a> <br> <a href="/soft/waterfox">Waterfox</a> <br> <a href="/soft/firefox">Firefox</a> <br> <a href="/soft/msedge">Microsoft Edge</a> <br> <a href="/soft/zen">Zen</a> `,
  },
  {
    title: "Мессенджеры",
    icon: '<i class="fa-solid fa-comments"></i>',
    details: `<a href="/soft/telegram">Telegram</a> <br> <a href="/soft/viber">Viber</a> <br> <a href="/soft/whatsApp">WhatsApp</a> <br> <a href="/soft/vkms">VK Мессенджер</a> <br> <a href="/soft/vesktop">Vesktop</a> <br> <a href="/soft/skype">Skype</a> <br> <a href="/soft/signal">Signal Desktop</a> <br> <a href="/soft/simplex">SimpleX</a> `,
  },
  {
    title: "Игры",
    icon: '<i class="fa-solid fa-gamepad"></i>',
    details: `<a href="/soft/steam">Steam</a> <br> <a href="/soft/cartridges">Cartridges</a> <br> <a href="/soft/portproton">PortProton</a> <br> <a href="/soft/heroic">Heroic Games Launcher</a> <br> <a href="/soft/modrinth">Modrinth App</a> <br> <a href="/soft/vinegar">Vinegar (Roblox)</a> <br> <a href="/soft/dolphin">Dolphin Emulator</a> <br> <a href="/soft/unity">Unity Hub</a> `,
  },
  {
    title: "Офис",
    icon: '<i class="fa-solid fa-paperclip"></i>',
    details: `<a href="/soft/myoffice">Мой офис</a> <br> <a href="/soft/r7-office">Р7-Офис</a> <br> <a href="/soft/libreoffice">LibreOffice</a> <br> <a href="/soft/wps">WPS Office</a> <br> <a href="/soft/rnote">Rnote</a> <br> <a href="/soft/onlyoffice">ONLYOFFICE</a> <br> <a href="/soft/calligra">Calligra</a> <br> <a href="/soft/obsidian">Obsidian</a> `,
  },
  {
    title: "Работа с графикой",
    icon: '<i class="fa-solid fa-paint-roller"></i>',
    details: `<a href="/soft/krita">Krita</a> <br> <a href="/soft/figma">Figma</a> <br> <a href="/soft/lunacy">Lunacy</a> <br> <a href="/soft/penpot">Penpot</a> <br> <a href="/soft/blender">Blender</a> <br> <a href="/soft/drawing">Drawing</a> <br> <a href="/soft/vara">Vara</a> <br> <a href="/soft/gimp">GIMP</a> `,
  },
  {
    title: "Мультимедиа",
    icon: '<i class="fa-solid fa-photo-film"></i>',
    details: `<a href="/soft/cassette">Кассета (Яндекс Музыка)</a> <br> <a href="/soft/spotify">Spotify</a> <br> <a href="/soft/nuclear">Nuclear</a> <br> <a href="/soft/celluloid">Celluloid</a> <br> <a href="/soft/qmmp">Qmmp</a> <br> <a href="/soft/vlc">VLC</a> <br> <a href="/soft/qview">qView</a> <br> <a href="/soft/haruna">Haruna</a> `,
  },
  {
    title: "Утилиты",
    icon: '<i class="fa-solid fa-hammer"></i>',
    details: `<a href="/soft/bottles">Bottles</a> <br> <a href="/soft/flatseal">Flatseal</a> <br> <a href="/soft/qbit">qBittorrent</a> <br> <a href="/soft/bitwarden">Bitwarden</a> <br> <a href="/soft/warehouse">Warehouse</a> <br> <a href="/soft/obs">OBS</a> <br> <a href="/soft/peazip">PeaZip</a> <br> <a href="/soft/droidcam">DroidCam</a> `,
  }
];
</script>

<FeaturesSection :features="features" />
